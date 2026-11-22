"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  async function redirectByRole(supabase, user) {
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError || !profile) {
      throw new Error("Не удалось определить роль пользователя.");
    }

    if (profile.role !== "admin" && profile.role !== "client") {
      throw new Error("Для этой учётной записи не назначена допустимая роль.");
    }

    const { data: assuranceData, error: assuranceError } =
      await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

    if (assuranceError) throw assuranceError;

    if (assuranceData.currentLevel !== "aal2") {
      router.replace("/mfa");
      return;
    }

    if (profile.role === "admin") {
      router.replace("/admin");
    } else {
      router.replace("/");
    }
  }

  useEffect(() => {
    let cancelled = false;

    async function checkSession() {
      const supabase = createClient();

      try {
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError) throw sessionError;

        if (!session?.user) return;

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) throw userError;

        if (!user || cancelled) return;

        await redirectByRole(supabase, user);
      } catch (err) {
        if (!cancelled) {
          console.error("Ошибка проверки авторизации:", err);
          setError(err.message || "Не удалось проверить авторизацию.");
        }
      } finally {
        if (!cancelled) {
          setCheckingSession(false);
        }
      }
    }

    checkSession();

    return () => {
      cancelled = true;
    };
  }, [router]);

  async function handleLogin(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    const supabase = createClient();

    try {
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) throw loginError;

      await redirectByRole(supabase, data.user);
      router.refresh();
    } catch (err) {
      setError(err.message || "Не удалось выполнить вход.");
    } finally {
      setLoading(false);
    }
  }

  if (checkingSession) {
    return <main className={styles.loadingPage}>Проверяем авторизацию...</main>;
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

        {error && (
          <p role="alert" className={styles.error}>
            {error}
          </p>
        )}

        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? "Выполняется вход..." : "Войти"}
        </button>

        <p className={styles.registerText}>
          Нет аккаунта? <a href="/register">Зарегистрироваться</a>
        </p>
      </form>
    </main>
  );
}
