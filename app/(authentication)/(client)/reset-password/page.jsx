"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/client-auth";
import styles from "./reset-password.module.css";

export default function ResetPasswordPage() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setToken(params.get("token") || "");
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!token) {
      setError("Ссылка для восстановления пароля недействительна.");
      return;
    }

    if (password.length < 8) {
      setError("Пароль должен содержать не менее 8 символов.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Пароли не совпадают.");
      return;
    }

    setLoading(true);

    try {
      const result = await authClient.resetPassword({
        newPassword: password,
        token,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      setSuccess(true);
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(
        err.message || "Не удалось изменить пароль. Запросите новую ссылку.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1 className={styles.title}>Создание нового пароля</h1>

        {!success ? (
          <>
            <p className={styles.subtitle}>
              Придумайте новый пароль для своего аккаунта SmartÜi.
            </p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="password" className={styles.label}>
                Новый пароль
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Не менее 8 символов"
                autoComplete="new-password"
                required
                minLength={8}
                className={styles.input}
              />

              <label htmlFor="confirmPassword" className={styles.label}>
                Повторите новый пароль
              </label>

              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Повторите пароль"
                autoComplete="new-password"
                required
                minLength={8}
                className={styles.input}
              />

              {error && (
                <p role="alert" className={styles.error}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading || !token}
                className={styles.button}
              >
                {loading ? "Сохранение..." : "Сохранить новый пароль"}
              </button>
            </form>
          </>
        ) : (
          <div className={styles.success}>
            <h2>Пароль успешно изменён!</h2>
            <p>Теперь вы можете войти в SmartÜi, используя новый пароль.</p>
            <Link href="/login" className={styles.button}>
              Перейти ко входу
            </Link>
          </div>
        )}

        {!success && (
          <Link href="/forgot-password" className={styles.backLink}>
            Запросить новую ссылку
          </Link>
        )}
      </section>
    </main>
  );
}
