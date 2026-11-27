"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/client-auth";
import styles from "./forgot-password.module.css";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const result = await authClient.requestPasswordReset({
        email: email.trim().toLowerCase(),
        redirectTo: "/reset-password",
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message || "Не удалось отправить письмо. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1 className={styles.title}>Восстановление пароля</h1>

        <p className={styles.subtitle}>
          Укажите электронную почту, которую использовали при регистрации. Мы
          отправим вам ссылку для создания нового пароля.
        </p>

        {!success ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className={styles.label}>
              Электронная почта
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="example@mail.com"
              autoComplete="email"
              required
              className={styles.input}
            />

            {error && (
              <p role="alert" className={styles.error}>
                {error}
              </p>
            )}

            <button type="submit" disabled={loading} className={styles.button}>
              {loading ? "Отправка..." : "Отправить ссылку"}
            </button>
          </form>
        ) : (
          <div className={styles.success}>
            <h2>Проверьте почту</h2>
            <p>
              Если аккаунт с таким адресом существует, на него будет отправлено
              письмо со ссылкой для восстановления пароля.
            </p>
          </div>
        )}

        <Link href="/login" className={styles.backLink}>
          Вернуться ко входу
        </Link>
      </section>
    </main>
  );
}
