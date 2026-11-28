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
const PASSWORDLESS_SESSION_WINDOW_MS = 5 * 60 * 1000;

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

function signToken(token) {
  return createHmac("sha256", getSecret())
    .update(`passkey-management:${token}`)
    .digest("base64url");
}

async function checkRateLimit(request) {
  const ip = getClientIp(request);

  if (!ip) {
    return { unavailable: true };
  }

  const now = new Date();

  const windowStart = new Date(now.getTime() - RATE_LIMIT_WINDOW_MS);

  const retentionCutoff = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  const id = `passkey-management:${hashValue(ip)}`;

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
            WHEN ${emailCheckRateLimit.windowStartedAt}
              <= ${windowStart}
            THEN 1
            ELSE ${emailCheckRateLimit.count} + 1
          END
        `,
        windowStartedAt: sql`
          CASE
            WHEN ${emailCheckRateLimit.windowStartedAt}
              <= ${windowStart}
            THEN ${now}
            ELSE ${emailCheckRateLimit.windowStartedAt}
          END
        `,
      },
    })
    .returning({
      count: emailCheckRateLimit.count,
      windowStartedAt: emailCheckRateLimit.windowStartedAt,
    });

  const resetAt =
    new Date(bucket.windowStartedAt).getTime() + RATE_LIMIT_WINDOW_MS;

  const retryAfter = Math.max(1, Math.ceil((resetAt - Date.now()) / 1000));

  return {
    unavailable: false,
    allowed: bucket.count <= RATE_LIMIT_MAX,
    retryAfter,
  };
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

  let rateLimit;

  try {
    rateLimit = await checkRateLimit(request);
  } catch (error) {
    console.error("[PASSKEY MANAGEMENT RATE LIMIT]", error);

    return jsonResponse({ error: "Сервис временно недоступен." }, 503);
  }

  if (rateLimit.unavailable) {
    return jsonResponse(
      { error: "Не удалось определить источник запроса." },
      503,
    );
  }

  if (!rateLimit.allowed) {
    return jsonResponse(
      { error: "Слишком много попыток. Повторите позже." },
      429,
      { "Retry-After": String(rateLimit.retryAfter) },
    );
  }

  try {
    // Получаем текущую авторизованную сессию.
    const currentSession = await auth.api.getSession({
      headers: request.headers,
    });

    if (!currentSession?.user?.id || !currentSession?.session?.id) {
      return jsonResponse({ error: "Необходимо войти в аккаунт." }, 401);
    }

    const userId = currentSession.user.id;

    // Проверяем, имеется ли у пользователя пароль.
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

    if (hasPassword) {
      if (typeof body.password !== "string" || !body.password) {
        return jsonResponse(
          { error: "Введите пароль для подтверждения действия." },
          400,
        );
      }

      // Better Auth проверяет пароль текущего пользователя.
      try {
        await auth.api.verifyPassword({
          body: {
            password: body.password,
          },
          headers: request.headers,
        });
      } catch {
        return jsonResponse(
          {
            error: "INVALID_PASSWORD",
            message: "Неверный пароль. Попробуйте ещё раз.",
          },
          401,
        );
      }
    } else {
      // У пользователя без пароля должна быть свежая сессия,
      // созданная после входа через Passkey и прохождения 2FA,
      // если она включена.
      const sessionCreatedAt = new Date(
        currentSession.session.createdAt,
      ).getTime();

      const sessionAge = Date.now() - sessionCreatedAt;

      if (
        !Number.isFinite(sessionCreatedAt) ||
        sessionAge < 0 ||
        sessionAge > PASSWORDLESS_SESSION_WINDOW_MS
      ) {
        return jsonResponse(
          {
            error: "FRESH_PASSKEY_LOGIN_REQUIRED",
            message:
              "Для этого аккаунта необходимо заново войти с помощью Passkey, а затем повторить действие.",
          },
          403,
        );
      }
    }

    // Создаём одноразовое разрешение на две минуты.
    const token = randomBytes(32).toString("base64url");

    await db.insert(verification).values({
      id: randomUUID(),
      identifier: `passkey-management:${token}`,
      value: JSON.stringify({
        userId,
        sessionId: currentSession.session.id,
        action,
      }),
      expiresAt: new Date(Date.now() + TOKEN_TTL_MS),
    });

    const response = jsonResponse({
      authorized: true,
      method: hasPassword ? "password" : "recent-passkey",
    });

    // HttpOnly cookie будет передаваться только auth API.
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
