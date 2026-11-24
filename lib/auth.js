import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { passkey } from "@better-auth/passkey";
import { db } from "./db/index.js";
import { sendEmail } from "./email.js";
import { twoFactor } from "better-auth/plugins";

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
