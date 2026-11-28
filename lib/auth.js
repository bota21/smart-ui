import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

import { APIError } from "better-auth/api";

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { passkey } from "@better-auth/passkey";
import { db } from "./db/index.js";
import { sendEmail } from "./email.js";
import { twoFactor } from "better-auth/plugins";

function getRequestCookie(request, name) {
  const cookieHeader = request.headers.get("cookie") || "";
  const prefix = `${name}=`;

  const entry = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix));

  return entry ? decodeURIComponent(entry.slice(prefix.length)) : null;
}

function verifyPasskeyIntentSignature(token, signature) {
  const secret = process.env.BETTER_AUTH_SECRET;

  if (!secret) {
    throw new Error("BETTER_AUTH_SECRET is not defined");
  }

  if (!/^[A-Za-z0-9_-]+$/.test(signature)) {
    return false;
  }

  const expected = createHmac("sha256", secret)
    .update(token)
    .digest("base64url");

  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(signature);

  return (
    expectedBuffer.length === actualBuffer.length &&
    timingSafeEqual(expectedBuffer, actualBuffer)
  );
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),

  appName: "SmartÜi",

  user: {
    additionalFields: {
      firstName: {
        type: "string",
        required: false,
      },
      lastName: {
        type: "string",
        required: false,
      },
      phoneNumber: {
        type: "string",
        required: false,
      },
      address: {
        type: "string",
        required: false,
      },
      role: {
        type: ["user", "admin", "superadmin"],
        required: false,
        defaultValue: "user",
        input: false,
      },
    },
  },

  plugins: [
    twoFactor({
      issuer: "SmartÜi",
      backupCodeOptions: {
        amount: 10,
        length: 10,
        storeBackupCodes: "encrypted",
      },
    }),

    passkey({
      rpName: "SmartÜi",

      authenticatorSelection: {
        userVerification: "required",
      },

      authentication: {
        afterVerification: async ({ ctx, verification, clientData }) => {
          const cookieValue = getRequestCookie(
            ctx.request,
            "smartui_passkey_intent",
          );

          if (!cookieValue) {
            throw APIError.from("UNAUTHORIZED", {
              message: "Passkey login intent is missing.",
              code: "PASSKEY_INTENT_REQUIRED",
            });
          }

          const parts = cookieValue.split(".");

          if (parts.length !== 2) {
            throw APIError.from("UNAUTHORIZED", {
              message: "Invalid Passkey login intent.",
              code: "PASSKEY_INTENT_INVALID",
            });
          }

          const [token, signature] = parts;

          if (!verifyPasskeyIntentSignature(token, signature)) {
            throw APIError.from("UNAUTHORIZED", {
              message: "Invalid Passkey login signature.",
              code: "PASSKEY_INTENT_INVALID",
            });
          }

          // Находим владельца ключа, которым выполнена проверка.
          const registeredPasskey = await ctx.context.adapter.findOne({
            model: "passkey",
            where: [
              {
                field: "credentialID",
                value: clientData.id,
              },
            ],
          });

          if (!registeredPasskey) {
            throw APIError.from("UNAUTHORIZED", {
              message: "Passkey not found.",
              code: "PASSKEY_NOT_FOUND",
            });
          }

          // Проверяем существование одноразового намерения входа.
          const identifier = `passkey-intent:${token}`;

          const intent =
            await ctx.context.internalAdapter.findVerificationValue(identifier);

          if (!intent || new Date(intent.expiresAt).getTime() <= Date.now()) {
            throw APIError.from("UNAUTHORIZED", {
              message: "Passkey login intent expired.",
              code: "PASSKEY_INTENT_EXPIRED",
            });
          }

          // Ключ обязан принадлежать именно введённому email.
          if (intent.value !== registeredPasskey.userId) {
            throw APIError.from("UNAUTHORIZED", {
              message: "Passkey does not belong to this account.",
              code: "PASSKEY_ACCOUNT_MISMATCH",
            });
          }

          // Атомарно погашаем одноразовое намерение.
          const consumed =
            await ctx.context.internalAdapter.consumeVerificationValue(
              identifier,
            );

          if (!consumed || consumed.value !== registeredPasskey.userId) {
            throw APIError.from("UNAUTHORIZED", {
              message: "Passkey login intent is no longer valid.",
              code: "PASSKEY_INTENT_INVALID",
            });
          }

          const user = await ctx.context.internalAdapter.findUserById(
            registeredPasskey.userId,
          );

          if (!user || !user.emailVerified) {
            throw APIError.from("UNAUTHORIZED", {
              message: "Email verification is required.",
              code: "EMAIL_NOT_VERIFIED",
            });
          }

          // Если у пользователя включена 2FA,
          // сначала создаём отдельное испытание второго фактора.
          if (user.twoFactorEnabled) {
            // Passkey-плагин не успеет обновить счётчик,
            // поскольку мы остановим создание обычной сессии.
            await ctx.context.adapter.update({
              model: "passkey",
              where: [
                {
                  field: "id",
                  value: registeredPasskey.id,
                },
              ],
              update: {
                counter: verification.authenticationInfo.newCounter,
              },
            });

            const maxAge = 10 * 60;
            const expiresAt = new Date(Date.now() + maxAge * 1000);
            const twoFactorIdentifier = `2fa-${randomBytes(20).toString("hex")}`;

            await ctx.context.internalAdapter.createVerificationValue({
              value: user.id,
              identifier: twoFactorIdentifier,
              expiresAt,
            });

            await ctx.context.internalAdapter.createVerificationValue({
              value: "0",
              identifier: `2fa-attempts-${twoFactorIdentifier}`,
              expiresAt,
            });

            const twoFactorCookie = ctx.context.createAuthCookie("two_factor", {
              maxAge,
            });

            await ctx.setSignedCookie(
              twoFactorCookie.name,
              twoFactorIdentifier,
              ctx.context.secret,
              twoFactorCookie.attributes,
            );

            // Не разрешаем Passkey-плагину создать полноценную сессию.
            throw APIError.from("FORBIDDEN", {
              message: "Two-factor authentication is required.",
              code: "TWO_FACTOR_REQUIRED",
            });
          }
        },
      },
    }),
  ],

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,

    sendResetPassword: async ({ user, url }) => {
      await sendEmail({
        to: user.email,
        subject: "Восстановление пароля SmartÜi",
        html: `
          <h2>Восстановление пароля</h2>
          <p>Мы получили запрос на восстановление пароля вашего аккаунта SmartÜi.</p>
          <p><a href="${url}">Создать новый пароль</a></p>
          <p>Если вы не запрашивали восстановление, просто проигнорируйте письмо.</p>
        `,
      });
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    sendOnSignIn: true,
    autoSignInAfterVerification: true,

    sendVerificationEmail: async ({ user, url }) => {
      await sendEmail({
        to: user.email,
        subject: "Подтверждение электронной почты SmartÜi",
        html: `
          <h2>Добро пожаловать в SmartÜi!</h2>
          <p>Для подтверждения электронной почты нажмите на ссылку:</p>
          <p><a href="${url}">Подтвердить электронную почту</a></p>
          <p>Если вы не регистрировались на SmartÜi, проигнорируйте это письмо.</p>
        `,
      });
    },
  },

  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
});
