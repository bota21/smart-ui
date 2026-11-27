import { Resend } from "resend";

const testEmailsKey = Symbol.for("smartui.e2e.testEmails");

const testEmails =
  globalThis[testEmailsKey] ?? (globalThis[testEmailsKey] = []);

export async function sendEmail({ to, subject, html }) {
  // В E2E-режиме сохраняем письмо, но не отправляем его
  if (process.env.E2E_TEST_MODE === "true") {
    const email = {
      id: `test-email-${Date.now()}`,
      to,
      subject,
      html,
      createdAt: new Date().toISOString(),
    };

    testEmails.push(email);

    console.log("[E2E] Email captured:", {
      to,
      subject,
    });

    return { id: email.id };
  }

  // Обычная отправка через Resend
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "SmartÜi <noreply@mail.smartui.kz>",
    to,
    subject,
    html,
  });

  if (error) {
    console.error("Resend email error:", error);
    throw new Error("Не удалось отправить письмо");
  }

  return data;
}

export function getTestEmails() {
  return testEmails;
}

export function clearTestEmails() {
  testEmails.length = 0;
}
