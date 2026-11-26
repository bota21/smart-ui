"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/client-auth";
import styles from "./login.module.css";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passkeyLoading, setPasskeyLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function redirectAfterLogin(user) {
    if (["admin", "superadmin"].includes(user?.role)) {
      router.replace("/admin");
    } else {
      router.replace("/");
    }

    router.refresh();
  }

  async function handleLogin(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await authClient.signIn.email({
        email: email.trim().toLowerCase(),
        password,
      });

      if (result.error) {
        throw new Error(result.error.message || "Не удалось выполнить вход.");
      }

      if (result.data?.twoFactorRedirect) {
        router.replace("/mfa");
        return;
      }

      redirectAfterLogin(result.data?.user);
    } catch (err) {
      setError(err.message || "Не удалось выполнить вход.");
    } finally {
      setLoading(false);
    }
  }

  async function handlePasskeyLogin() {
    setError("");
    setPasskeyLoading(true);

    try {
      const result = await authClient.signIn.passkey();

      const passkeyError = result.error || result.data?.error;

      if (passkeyError) {
        throw new Error(
          passkeyError.message || "Не удалось войти с помощью ключа доступа.",
        );
      }

      if (!result.data?.user) {
        throw new Error("Не удалось получить данные пользователя.");
      }

      redirectAfterLogin(result.data.user);
    } catch (err) {
      setError(
        err.message || "Не удалось выполнить вход с помощью ключа доступа.",
      );
    } finally {
      setPasskeyLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h1 className={styles.title}>SmartÜi</h1>

        <p className={styles.subtitle}>Вход в личный кабинет</p>

        <label htmlFor="email" className={styles.label}>
          Электронная почта
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoComplete="username"
          className={styles.input}
        />

        <label htmlFor="password" className={styles.label}>
          Пароль
        </label>

        <div className={styles.passwordField}>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            autoComplete="current-password"
            className={`${styles.input} ${styles.passwordInput}`}
          />

          <button
            type="button"
            className={styles.passwordToggle}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
            aria-pressed={showPassword}
            title={showPassword ? "Скрыть пароль" : "Показать пароль"}
          >
            {showPassword ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M9.9 5.2A10.8 10.8 0 0112 5c5 0 8.5 4.2 9.5 7-.4 1.1-1.2 2.3-2.3 3.3M6.2 6.2C3.9 7.7 2.8 9.6 2.5 12c.8 2.5 4.3 7 9.5 7 1.3 0 2.5-.3 3.6-.8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            )}
          </button>
        </div>

        <div className={styles.forgotPasswordWrapper}>
          <Link href="/forgot-password" className={styles.forgotPassword}>
            Забыли пароль?
          </Link>
        </div>

        {error && (
          <p role="alert" className={styles.error}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || passkeyLoading}
          className={styles.button}
        >
          {loading ? "Выполняется вход..." : "Войти"}
        </button>

        <div className={styles.divider}>
          <span>или</span>
        </div>

        <button
          type="button"
          onClick={handlePasskeyLogin}
          disabled={loading || passkeyLoading}
          className={styles.passkeyButton}
        >
          {passkeyLoading
            ? "Ожидание подтверждения..."
            : "Войти с помощью ключа доступа"}
        </button>

        <p className={styles.registerText}>
          Нет аккаунта?{" "}
          <Link className={styles.register} href="/register">
            Зарегистрироваться
          </Link>
        </p>
      </form>
    </main>
  );
}
