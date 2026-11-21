"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  // Определяем роль уже авторизованного пользователя.
  async function redirectByRole(supabase, user) {
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError || !profile) {
      throw new Error("Не удалось определить роль пользователя.");
    }

    if (profile.role === "client") {
      router.replace("/profile");
      return;
    }

    if (profile.role === "admin") {
      const { data: assuranceData, error: assuranceError } =
        await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

      if (assuranceError) throw assuranceError;

      if (assuranceData.currentLevel === "aal2") {
        router.replace("/admin");
      } else {
        router.replace("/admin/setup-mfa");
      }

      return;
    }

    throw new Error("Для этой учётной записи не назначена допустимая роль.");
  }

  // Проверяем, не вошёл ли пользователь ранее.
  useEffect(() => {
    let cancelled = false;

    async function checkSession() {
      const supabase = createClient();

      try {
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
        if (!cancelled) setCheckingSession(false);
      }
    }

    checkSession();

    return () => {
      cancelled = true;
    };
  }, [router]);

  // Выполняем вход и направляем пользователя по его роли.
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
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f5fc",
          color: "#7652d8",
          fontSize: "16px",
        }}
      >
        Проверяем авторизацию...
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "#f7f5fc",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "36px",
          borderRadius: "20px",
          background: "#ffffff",
          boxShadow: "0 12px 40px rgba(40, 20, 80, 0.10)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "8px",
            color: "#7652d8",
          }}
        >
          SmartÜi
        </h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "28px",
            color: "#777",
          }}
        >
          Вход в личный кабинет
        </p>

        <label
          htmlFor="email"
          style={{ display: "block", marginBottom: "8px" }}
        >
          Электронная почта
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoComplete="username"
          style={{
            width: "100%",
            padding: "13px",
            marginBottom: "18px",
            border: "1px solid #ddd",
            borderRadius: "9px",
            boxSizing: "border-box",
          }}
        />

        <label
          htmlFor="password"
          style={{ display: "block", marginBottom: "8px" }}
        >
          Пароль
        </label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          autoComplete="current-password"
          style={{
            width: "100%",
            padding: "13px",
            marginBottom: "20px",
            border: "1px solid #ddd",
            borderRadius: "9px",
            boxSizing: "border-box",
          }}
        />

        {error && (
          <p role="alert" style={{ color: "#c62828", marginBottom: "16px" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "9px",
            background: "#7652d8",
            color: "#fff",
            fontSize: "16px",
            cursor: loading ? "wait" : "pointer",
          }}
        >
          {loading ? "Выполняется вход..." : "Войти"}
        </button>
      </form>
    </main>
  );
}
