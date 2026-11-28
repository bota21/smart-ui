import { createHmac, randomBytes, randomUUID } from "node:crypto";

import { NextResponse } from "next/server";
import { eq, lte, sql } from "drizzle-orm";

import { db } from "@/lib/db";

import {
  user as userTable,
  passkey as passkeyTable,
  verification,
  emailCheckRateLimit,
} from "@/lib/db/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const TOKEN_TTL_MS = 2 * 60 * 1000;

function jsonResponse(data, status = 200, headers = {}) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      ...headers,
    },
  });
}

function getClientIp(request) {
  const netlifyIp = request.headers.get("x-nf-client-connection-ip")?.trim();

  if (netlifyIp) return netlifyIp;

  if (process.env.NODE_ENV === "development") {
    return "local-development";
  }

  return null;
}

function signIntent(token) {
  const secret = process.env.BETTER_AUTH_SECRET;

  if (!secret) {
    throw new Error("BETTER_AUTH_SECRET is not defined");
  }

  return createHmac("sha256", secret).update(token).digest("base64url");
}

async function checkRateLimit(request) {
  const ip = getClientIp(request);

  if (!ip) {
    return { unavailable: true };
  }

  const secret = process.env.BETTER_AUTH_SECRET;

  if (!secret) {
    throw new Error("BETTER_AUTH_SECRET is not defined");
  }

  const id = createHmac("sha256", secret).update(ip).digest("hex");

  const now = new Date();

  const windowStart = new Date(now.getTime() - RATE_LIMIT_WINDOW_MS);

  await db
    .delete(emailCheckRateLimit)
    .where(
      lte(
        emailCheckRateLimit.windowStartedAt,
        new Date(now.getTime() - 24 * 60 * 60 * 1000),
      ),
    );

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
  let rateLimit;

  try {
    rateLimit = await checkRateLimit(request);
  } catch (error) {
    console.error("[PASSKEY INTENT RATE LIMIT]", error);

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

  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Некорректный запрос." }, 400);
  }

  const email =
    typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return jsonResponse(
      { error: "Введите корректный адрес электронной почты." },
      400,
    );
  }

  try {
    const [foundUser] = await db
      .select({
        id: userTable.id,
        emailVerified: userTable.emailVerified,
      })
      .from(userTable)
      .where(eq(userTable.email, email))
      .limit(1);

    if (!foundUser || !foundUser.emailVerified) {
      return jsonResponse(
        { error: "Не удалось подготовить вход по ключу доступа." },
        400,
      );
    }

    const [registeredPasskey] = await db
      .select({
        id: passkeyTable.id,
      })
      .from(passkeyTable)
      .where(eq(passkeyTable.userId, foundUser.id))
      .limit(1);

    if (!registeredPasskey) {
      return jsonResponse(
        { error: "Не удалось подготовить вход по ключу доступа." },
        400,
      );
    }

    const token = randomBytes(32).toString("base64url");

    await db.insert(verification).values({
      id: randomUUID(),
      identifier: `passkey-intent:${token}`,
      value: foundUser.id,
      expiresAt: new Date(Date.now() + TOKEN_TTL_MS),
    });

    const response = jsonResponse({
      ready: true,
    });

    response.cookies.set(
      "smartui_passkey_intent",
      `${token}.${signIntent(token)}`,
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
    console.error("[PASSKEY INTENT]", error);

    return jsonResponse(
      { error: "Не удалось подготовить вход по ключу доступа." },
      500,
    );
  }
}
