"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import styles from "./admin-login.module.css";

export default function AdminLoginPage() {
  const router = useRouter();

  async function redirectByRole(supabase, user) {
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError || !profile) {
      throw new Error("Не удалось определить роль пользователя.");
    }

    if (profile.role !== "admin") {
      router.replace("/");
      return;
    }

    const { data: assuranceData, error: assuranceError } =
      await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

    if (assuranceError) throw assuranceError;

    if (assuranceData.currentLevel !== "aal2") {
      router.replace("/mfa");
      return;
    }

    router.replace("/admin");
  }

  const [email, setEmail] = useState("smart.ui@inbox.ru");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

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
        if (!user) return;

        if (cancelled) return;

        await redirectByRole(supabase, user);
      } catch (err) {
        if (!cancelled) {
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
          email,
          password,
        });

      if (loginError) throw loginError;

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single();

      if (profileError || profile?.role !== "admin") {
        await supabase.auth.signOut();
        throw new Error("У этой учётной записи нет прав администратора.");
      }

      router.replace("/mfa");
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

        <p className={styles.subtitle}>Вход администратора</p>

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

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? "Выполняется вход..." : "Войти"}
        </button>
      </form>
    </main>
  );
}
