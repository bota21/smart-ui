"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();

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
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) throw userError;

        // Нет активной сессии — показываем форму входа.
        if (!user) return;

        // Проверяем роль авторизованного пользователя.
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        if (profileError) throw profileError;

        if (cancelled) return;

        // Клиенту административный вход не нужен.
        if (profile.role !== "admin") {
          router.replace("/");
          return;
        }

        // Проверяем уровень двухфакторной авторизации.
        const { data: assuranceData, error: assuranceError } =
          await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

        if (assuranceError) throw assuranceError;

        if (cancelled) return;

        if (assuranceData.currentLevel === "aal2") {
          router.replace("/admin");
        } else {
          router.replace("/admin/setup-mfa");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Не удалось проверить текущую сессию.");
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

      router.replace("/admin/setup-mfa");
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
          Вход администратора
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
          <p style={{ color: "#c62828", marginBottom: "16px" }}>{error}</p>
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
