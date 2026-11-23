"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/client-auth";
import styles from "./verification.module.css";

export default function VerificationNotice({ email }) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function resendEmail() {
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const result = await authClient.sendVerificationEmail({
        email: email.trim().toLowerCase(),
        callbackURL: "/mfa",
      });

      if (result.error) {
        throw new Error(result.error.message || "Не удалось отправить письмо.");
      }

      setMessage("Письмо отправлено повторно. Проверьте почту.");
    } catch (err) {
      setError(err.message || "Не удалось отправить письмо.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.icon}>✉</div>

        <h1 className={styles.title}>Проверьте свою почту</h1>

        <p className={styles.description}>
          Мы отправили письмо со ссылкой для подтверждения электронной почты.
        </p>

        <div className={styles.email}>{email}</div>

        <p className={styles.hint}>
          Перейдите по ссылке в письме, чтобы подтвердить аккаунт. Если письма
          нет, проверьте папку «Спам».
        </p>

        {message && <p className={styles.success}>{message}</p>}
        {error && <p className={styles.error}>{error}</p>}

        <button
          type="button"
          className={styles.button}
          onClick={resendEmail}
          disabled={loading}
        >
          {loading ? "Отправка..." : "Отправить письмо повторно"}
        </button>

        <Link href="/login" className={styles.link}>
          Вернуться ко входу
        </Link>
      </section>
    </main>
  );
}
