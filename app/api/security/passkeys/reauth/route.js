import { createHmac, randomBytes, randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

import { and, eq, isNotNull, lte, sql } from "drizzle-orm";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

import {
  account as accountTable,
  emailCheckRateLimit,
  verification,
} from "@/lib/db/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TOKEN_TTL_MS = 5 * 60 * 1000;

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

function jsonResponse(data, status = 200, headers = {}) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      ...headers,
    },
  });
}

function getSecret() {
  const secret = process.env.BETTER_AUTH_SECRET;

  if (!secret) {
    throw new Error("BETTER_AUTH_SECRET is not defined");
  }

  return secret;
}

function getClientIp(request) {
  const netlifyIp = request.headers.get("x-nf-client-connection-ip")?.trim();

  if (netlifyIp) return netlifyIp;

  if (process.env.NODE_ENV === "development") {
    return "local-development";
  }

  return null;
}

function hashValue(value) {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

function getRateLimitId(request) {
  const ip = getClientIp(request);

  if (!ip) return null;

  // Новый идентификатор отделяет счётчик неправильных паролей
  // от старого счётчика всех операций управления Passkey.
  return `passkey-password-failures:${hashValue(ip)}`;
}

function signToken(token) {
  return createHmac("sha256", getSecret())
    .update(`passkey-management:${token}`)
    .digest("base64url");
}

async function checkRateLimit(request) {
  const id = getRateLimitId(request);

  if (!id) {
    return { unavailable: true };
  }

  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);

  const [bucket] = await db
    .select({
      count: emailCheckRateLimit.count,
      windowStartedAt: emailCheckRateLimit.windowStartedAt,
    })
    .from(emailCheckRateLimit)
    .where(eq(emailCheckRateLimit.id, id))
    .limit(1);

  if (
    !bucket ||
    new Date(bucket.windowStartedAt).getTime() <= windowStart.getTime()
  ) {
    return {
      unavailable: false,
      allowed: true,
      id,
    };
  }

  const resetAt =
    new Date(bucket.windowStartedAt).getTime() + RATE_LIMIT_WINDOW_MS;

  return {
    unavailable: false,
    allowed: bucket.count < RATE_LIMIT_MAX,
    retryAfter: Math.max(1, Math.ceil((resetAt - Date.now()) / 1000)),
    id,
  };
}

async function recordFailedPasswordAttempt(id) {
  const now = new Date();
  const windowStart = new Date(now.getTime() - RATE_LIMIT_WINDOW_MS);
  const retentionCutoff = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  await db
    .delete(emailCheckRateLimit)
    .where(lte(emailCheckRateLimit.windowStartedAt, retentionCutoff));

  const [bucket] = await db
    .insert(emailCheckRateLimit)
    .values({
      id,
      count: 1,
      windowStartedAt: now,
    })
    .onConflictDoUpdate({
      target: emailCheckRateLimit.id,
      set: {
        count: sql`
          CASE
            WHEN ${emailCheckRateLimit.windowStartedAt} <= ${windowStart}
            THEN 1
            ELSE ${emailCheckRateLimit.count} + 1
          END
        `,
        windowStartedAt: sql`
          CASE
            WHEN ${emailCheckRateLimit.windowStartedAt} <= ${windowStart}
            THEN ${now}
            ELSE ${emailCheckRateLimit.windowStartedAt}
          END
        `,
      },
    })
    .returning({
      count: emailCheckRateLimit.count,
    });

  return bucket;
}

async function resetFailedPasswordAttempts(id) {
  await db.delete(emailCheckRateLimit).where(eq(emailCheckRateLimit.id, id));
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Некорректный запрос." }, 400);
  }

  const action = body?.action;

  if (!["add", "delete"].includes(action)) {
    return jsonResponse({ error: "Недопустимое действие." }, 400);
  }

  try {
    const currentSession = await auth.api.getSession({
      headers: request.headers,
    });

    if (!currentSession?.user?.id || !currentSession?.session?.id) {
      return jsonResponse({ error: "Необходимо войти в аккаунт." }, 401);
    }

    const userId = currentSession.user.id;
    const sessionId = currentSession.session.id;

    const [credentialAccount] = await db
      .select({
        id: accountTable.id,
      })
      .from(accountTable)
      .where(
        and(
          eq(accountTable.userId, userId),
          eq(accountTable.providerId, "credential"),
          eq(accountTable.accountId, userId),
          isNotNull(accountTable.password),
        ),
      )
      .limit(1);

    const hasPassword = Boolean(credentialAccount);

    let method;

    if (hasPassword) {
      if (typeof body.password !== "string" || !body.password) {
        return jsonResponse(
          {
            error: "PASSWORD_REQUIRED",
            message: "Введите пароль для подтверждения действия.",
          },
          400,
        );
      }

      const rateLimit = await checkRateLimit(request);

      if (rateLimit.unavailable) {
        return jsonResponse(
          { error: "Не удалось определить источник запроса." },
          503,
        );
      }

      if (!rateLimit.allowed) {
        return jsonResponse(
          {
            error: "Слишком много попыток. Повторите позже.",
          },
          429,
          { "Retry-After": String(rateLimit.retryAfter) },
        );
      }

      try {
        await auth.api.verifyPassword({
          body: {
            password: body.password,
          },
          headers: request.headers,
        });
      } catch {
        try {
          await recordFailedPasswordAttempt(rateLimit.id);
        } catch (error) {
          console.error("[PASSKEY PASSWORD RATE LIMIT]", error);

          return jsonResponse({ error: "Сервис временно недоступен." }, 503);
        }

        return jsonResponse(
          {
            error: "INVALID_PASSWORD",
            message: "Неверный пароль. Попробуйте ещё раз.",
          },
          401,
        );
      }

      // Успешное подтверждение сбрасывает счётчик ошибок.
      await resetFailedPasswordAttempts(rateLimit.id);

      method = "password";
    } else {
      // Для аккаунта без пароля используется существующий Passkey.
      method = "passkey";
    }

    const token = randomBytes(32).toString("base64url");
    const expiresAt = new Date(Date.now() + TOKEN_TTL_MS);

    await db.insert(verification).values({
      id: randomUUID(),
      identifier: `passkey-management:${token}`,
      value: JSON.stringify({
        userId,
        sessionId,
        action,
        method,
        verified: method === "password",
      }),
      expiresAt,
    });

    const response = jsonResponse(
      method === "password"
        ? {
            authorized: true,
            method: "password",
          }
        : {
            authorized: false,
            requiresPasskey: true,
            method: "passkey",
          },
    );

    response.cookies.set(
      "smartui_passkey_management",
      `${token}.${signToken(token)}`,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/api/auth",
        maxAge: TOKEN_TTL_MS / 1000,
      },
    );

    return response;
  } catch (error) {
    console.error("[PASSKEY MANAGEMENT REAUTH]", error);

    return jsonResponse(
      { error: "Не удалось подтвердить личность пользователя." },
      500,
    );
  }
}
