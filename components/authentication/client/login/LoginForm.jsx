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

  function redirectAfterLogin(user) {
    if (user?.role === "admin") {
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

        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          autoComplete="current-password"
          className={styles.input}
        />

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
