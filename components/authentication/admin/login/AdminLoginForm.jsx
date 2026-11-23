"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/client-auth";
import styles from "./admin-login.module.css";

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("smart.ui@inbox.ru");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await authClient.signIn.email({
        email: email.trim().toLowerCase(),
        password,
      });

      if (result.error) {
        throw new Error(result.error.message || "Ошибка входа.");
      }

      if (result.data?.twoFactorRedirect) {
        router.push("/mfa?next=admin");
        return;
      }

      if (result.data?.user?.role !== "admin") {
        await authClient.signOut();
        throw new Error("У этой учётной записи нет прав администратора.");
      }

      router.replace("/admin");
      router.refresh();
    } catch (err) {
      setError(err.message || "Не удалось выполнить вход.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <div className={styles.logo}>SmartÜi</div>
        <span className={styles.tag}>ADMINISTRATION</span>

        <h1 className={styles.title}>Вход администратора</h1>
        <p className={styles.subtitle}>Панель управления SmartÜi</p>

        <label className={styles.label} htmlFor="admin-email">
          Электронная почта
        </label>
        <input
          id="admin-email"
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
          required
        />

        <label className={styles.label} htmlFor="admin-password">
          Пароль
        </label>
        <input
          id="admin-password"
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.button} disabled={loading}>
          {loading ? "Проверка..." : "Войти в панель"}
        </button>
      </form>
    </main>
  );
}
