import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

import { APIError, createAuthMiddleware } from "better-auth/api";

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

function verifyPasskeyManagementSignature(token, signature) {
  const secret = process.env.BETTER_AUTH_SECRET;

  if (!secret) {
    throw new Error("BETTER_AUTH_SECRET is not defined");
  }

  if (!/^[A-Za-z0-9_-]+$/.test(signature)) {
    return false;
  }

  const expected = createHmac("sha256", secret)
    .update(`passkey-management:${token}`)
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

      registration: {
        requireSession: false,
      },

      authenticatorSelection: {
        userVerification: "required",
      },

      authentication: {
        afterVerification: async ({ ctx, verification, clientData }) => {
          // --------------------------------------------------
          // 1. Повторное подтверждение личности для управления
          //    Passkey. Этот сценарий не создаёт новую сессию.
          // --------------------------------------------------

          const managementCookie = getRequestCookie(
            ctx.request,
            "smartui_passkey_management",
          );

          if (managementCookie) {
            const parts = managementCookie.split(".");

            if (parts.length === 2) {
              const [token, signature] = parts;

              if (verifyPasskeyManagementSignature(token, signature)) {
                const identifier = `passkey-management:${token}`;

                const intent =
                  await ctx.context.internalAdapter.findVerificationValue(
                    identifier,
                  );

                if (
                  intent &&
                  new Date(intent.expiresAt).getTime() > Date.now()
                ) {
                  let intentData;

                  try {
                    intentData = JSON.parse(intent.value);
                  } catch {
                    throw APIError.from("UNAUTHORIZED", {
                      message: "Некорректные данные подтверждения.",
                      code: "PASSKEY_REAUTH_INVALID",
                    });
                  }

                  if (
                    intentData.method === "passkey" &&
                    intentData.verified === false
                  ) {
                    const rejectManagement = (message, code) => {
                      throw APIError.from("UNAUTHORIZED", {
                        message,
                        code,
                      });
                    };

                    if (!["add", "delete"].includes(intentData.action)) {
                      rejectManagement(
                        "Недопустимое действие.",
                        "PASSKEY_REAUTH_INVALID",
                      );
                    }

                    // Получаем текущую сессию пользователя.
                    const sessionToken = await ctx.getSignedCookie(
                      ctx.context.authCookies.sessionToken.name,
                      ctx.context.secret,
                    );

                    if (!sessionToken) {
                      rejectManagement(
                        "Необходимо войти в аккаунт.",
                        "UNAUTHORIZED",
                      );
                    }

                    const activeSession =
                      await ctx.context.internalAdapter.findSession(
                        sessionToken,
                      );

                    if (
                      !activeSession ||
                      new Date(activeSession.session.expiresAt).getTime() <=
                        Date.now()
                    ) {
                      rejectManagement(
                        "Сессия истекла. Войдите повторно.",
                        "UNAUTHORIZED",
                      );
                    }

                    // Разрешение привязано к конкретной сессии.
                    if (
                      activeSession.user.id !== intentData.userId ||
                      activeSession.session.id !== intentData.sessionId
                    ) {
                      rejectManagement(
                        "Подтверждение не соответствует текущей сессии.",
                        "PASSKEY_REAUTH_MISMATCH",
                      );
                    }

                    // Проверяем владельца ключа, которым выполнена
                    // WebAuthn-аутентификация.
                    const registeredPasskey = await ctx.context.adapter.findOne(
                      {
                        model: "passkey",
                        where: [
                          {
                            field: "credentialID",
                            value: clientData.id,
                          },
                        ],
                      },
                    );

                    if (
                      !registeredPasskey ||
                      registeredPasskey.userId !== activeSession.user.id
                    ) {
                      rejectManagement(
                        "Этот ключ не принадлежит текущему аккаунту.",
                        "PASSKEY_ACCOUNT_MISMATCH",
                      );
                    }

                    // Одноразово погашаем незавершённое разрешение.
                    const consumed =
                      await ctx.context.internalAdapter.consumeVerificationValue(
                        identifier,
                      );

                    if (!consumed || consumed.value !== intent.value) {
                      rejectManagement(
                        "Подтверждение уже использовано или истекло.",
                        "PASSKEY_REAUTH_INVALID",
                      );
                    }

                    // Обновляем счётчик ключа: ниже мы остановим
                    // стандартный сценарий создания сессии.
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

                    // Создаём подтверждённое одноразовое разрешение.
                    await ctx.context.internalAdapter.createVerificationValue({
                      identifier,
                      value: JSON.stringify({
                        ...intentData,
                        verified: true,
                      }),
                      expiresAt: intent.expiresAt,
                    });

                    // Важно: не создаём новую сессию и не выполняем
                    // обычный вход. Клиент получит этот специальный код.
                    throw APIError.from("FORBIDDEN", {
                      message: "Личность подтверждена для управления Passkey.",
                      code: "PASSKEY_MANAGEMENT_REAUTH_SUCCESS",
                    });
                  }
                }
              }
            }
          }

          // --------------------------------------------------
          // 2. Обычный вход через Passkey.
          // Существующая логика входа и 2FA сохранена.
          // --------------------------------------------------

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

  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      const path = ctx.path || "";

      const isAddOptions = path.endsWith("/passkey/generate-register-options");

      const isAddVerification = path.endsWith("/passkey/verify-registration");

      const isDelete = path.endsWith("/passkey/delete-passkey");

      if (!isAddOptions && !isAddVerification && !isDelete) {
        return;
      }

      const expectedAction = isDelete ? "delete" : "add";

      function reject(message, code) {
        throw APIError.from("UNAUTHORIZED", {
          message,
          code,
        });
      }

      // Получаем разрешение из HttpOnly cookie.
      const cookieValue = getRequestCookie(
        ctx.request,
        "smartui_passkey_management",
      );

      if (!cookieValue) {
        reject(
          "Повторное подтверждение личности обязательно.",
          "PASSKEY_REAUTH_REQUIRED",
        );
      }

      const parts = cookieValue.split(".");

      if (parts.length !== 2) {
        reject("Некорректное разрешение.", "PASSKEY_REAUTH_INVALID");
      }

      const [token, signature] = parts;

      if (!verifyPasskeyManagementSignature(token, signature)) {
        reject(
          "Недействительная подпись разрешения.",
          "PASSKEY_REAUTH_INVALID",
        );
      }

      // Проверяем текущую серверную сессию.
      const sessionToken = await ctx.getSignedCookie(
        ctx.context.authCookies.sessionToken.name,
        ctx.context.secret,
      );

      if (!sessionToken) {
        reject("Необходимо войти в аккаунт.", "UNAUTHORIZED");
      }

      const activeSession =
        await ctx.context.internalAdapter.findSession(sessionToken);

      if (
        !activeSession ||
        new Date(activeSession.session.expiresAt).getTime() <= Date.now()
      ) {
        reject("Сессия истекла. Войдите повторно.", "UNAUTHORIZED");
      }

      const userId = activeSession.user.id;
      const sessionId = activeSession.session.id;

      // Проверяем разрешение в базе.
      const identifier = `passkey-management:${token}`;

      const intent =
        await ctx.context.internalAdapter.findVerificationValue(identifier);

      if (!intent || new Date(intent.expiresAt).getTime() <= Date.now()) {
        reject("Срок действия подтверждения истёк.", "PASSKEY_REAUTH_EXPIRED");
      }

      let intentData;

      try {
        intentData = JSON.parse(intent.value);
      } catch {
        reject("Некорректные данные подтверждения.", "PASSKEY_REAUTH_INVALID");
      }

      if (
        intentData.userId !== userId ||
        intentData.sessionId !== sessionId ||
        intentData.action !== expectedAction ||
        intentData.verified !== true
      ) {
        reject(
          "Личность не подтверждена для этой операции.",
          "PASSKEY_REAUTH_MISMATCH",
        );
      }

      // Перед удалением проверяем, останется ли
      // у пользователя альтернативный способ входа.
      if (isDelete) {
        const [passkeys, accounts] = await Promise.all([
          ctx.context.adapter.findMany({
            model: "passkey",
            where: [
              {
                field: "userId",
                value: userId,
              },
            ],
          }),

          ctx.context.adapter.findMany({
            model: "account",
            where: [
              {
                field: "userId",
                value: userId,
              },
            ],
          }),
        ]);

        const hasPassword = accounts.some(
          (account) =>
            account.providerId === "credential" &&
            typeof account.password === "string" &&
            account.password.length > 0,
        );

        const hasOtherProvider = accounts.some(
          (account) => account.providerId !== "credential",
        );

        if (passkeys.length <= 1 && !hasPassword && !hasOtherProvider) {
          throw APIError.from("BAD_REQUEST", {
            message:
              "Нельзя удалить последний ключ доступа. Сначала добавьте другой способ входа.",
            code: "LAST_PASSKEY_REQUIRED",
          });
        }
      }

      // При подготовке регистрации разрешение сохраняем.
      // При завершении регистрации или удалении погашаем его.
      if (!isAddOptions) {
        const consumed =
          await ctx.context.internalAdapter.consumeVerificationValue(
            identifier,
          );

        if (!consumed) {
          reject(
            "Разрешение уже использовано или истекло.",
            "PASSKEY_REAUTH_INVALID",
          );
        }

        let consumedData;

        try {
          consumedData = JSON.parse(consumed.value);
        } catch {
          reject("Некорректное разрешение.", "PASSKEY_REAUTH_INVALID");
        }

        if (
          consumedData.userId !== userId ||
          consumedData.sessionId !== sessionId ||
          consumedData.action !== expectedAction ||
          consumedData.verified !== true
        ) {
          reject(
            "Разрешение не соответствует текущей операции.",
            "PASSKEY_REAUTH_MISMATCH",
          );
        }
      }
    }),
  },

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
          <p>Если вы не запрашивали восстановление, просто проигнорируйте это письмо.</p>
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

  ...(process.env.E2E_TEST_MODE === "true"
    ? {
        trustedOrigins: ["http://127.0.0.1:3000", "http://localhost:3000"],
      }
    : {}),
});
if (process.env.E2E_TEST_MODE === "true") {
  auth.$context.then((ctx) => {
    console.log("[E2E AUTH CHECK]", {
      baseURL: ctx.baseURL,
      originTrusted: ctx.isTrustedOrigin("http://127.0.0.1:3000"),
    });
  });
}
