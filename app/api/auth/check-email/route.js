import { createHmac } from "node:crypto";
import { NextResponse } from "next/server";

import { and, eq, isNotNull, lte, sql } from "drizzle-orm";

import { db } from "@/lib/db";

import {
  user as userTable,
  account as accountTable,
  passkey as passkeyTable,
  emailCheckRateLimit,
} from "@/lib/db/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_RETENTION_MS = 24 * 60 * 60 * 1000;

function jsonResponse(data, status = 200, extraHeaders = {}) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      ...extraHeaders,
    },
  });
}

function getClientIp(request) {
  const netlifyIp = request.headers.get("x-nf-client-connection-ip")?.trim();

  if (netlifyIp) {
    return netlifyIp;
  }

  // При локальной разработке все запросы используют
  // одну общую тестовую корзину.
  if (process.env.NODE_ENV === "development") {
    return "local-development";
  }

  return null;
}

function hashClientIp(ip) {
  const secret = process.env.BETTER_AUTH_SECRET;

  if (!secret) {
    throw new Error("BETTER_AUTH_SECRET is not defined");
  }

  return createHmac("sha256", secret).update(ip).digest("hex");
}

async function checkRateLimit(request) {
  const clientIp = getClientIp(request);

  if (!clientIp) {
    return { unavailable: true };
  }

  const now = new Date();

  const windowStart = new Date(now.getTime() - RATE_LIMIT_WINDOW_MS);

  const retentionCutoff = new Date(now.getTime() - RATE_LIMIT_RETENTION_MS);

  const id = hashClientIp(clientIp);

  // Удаляем неактивные записи старше 24 часов.
  await db
    .delete(emailCheckRateLimit)
    .where(lte(emailCheckRateLimit.windowStartedAt, retentionCutoff));

  // Атомарно создаём или обновляем счётчик.
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
  // Сначала проверяем частоту запросов.
  let rateLimit;

  try {
    rateLimit = await checkRateLimit(request);
  } catch (error) {
    console.error("[AUTH RATE LIMIT]", error);

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
      {
        error: "Слишком много попыток. Повторите позже.",
      },
      429,
      {
        "Retry-After": String(rateLimit.retryAfter),
      },
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
      {
        error: "Введите корректный адрес электронной почты.",
      },
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

    if (!foundUser) {
      return jsonResponse({
        exists: false,
      });
    }

    const [credentialAccount] = await db
      .select({
        id: accountTable.id,
      })
      .from(accountTable)
      .where(
        and(
          eq(accountTable.userId, foundUser.id),
          eq(accountTable.providerId, "credential"),
          eq(accountTable.accountId, foundUser.id),
          isNotNull(accountTable.password),
        ),
      )
      .limit(1);

    const [registeredPasskey] = await db
      .select({
        id: passkeyTable.id,
      })
      .from(passkeyTable)
      .where(eq(passkeyTable.userId, foundUser.id))
      .limit(1);

    return jsonResponse({
      exists: true,
      emailVerified: foundUser.emailVerified,
      methods: {
        password: Boolean(credentialAccount),
        passkey: Boolean(registeredPasskey),
      },
    });
  } catch (error) {
    console.error("[AUTH EMAIL CHECK]", error);

    return jsonResponse(
      {
        error: "Не удалось проверить электронную почту.",
      },
      500,
    );
  }
}
