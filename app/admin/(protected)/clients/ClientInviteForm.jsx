"use client";

import { useState } from "react";
import styles from "./clients.module.css";

export default function ClientInviteForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/clients/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Не удалось отправить приглашение.");
      }

      setMessage(result.message);
      setFullName("");
      setEmail("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.inviteCard}>
      <h2>Добавить клиента</h2>

      <p className={styles.description}>
        Укажи имя и электронную почту. Клиент получит письмо со ссылкой для
        создания аккаунта.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="client-name">Имя клиента</label>

        <input
          id="client-name"
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Например, Иван Иванов"
          maxLength={120}
          required
        />

        <label htmlFor="client-email">Электронная почта</label>

        <input
          id="client-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="client@example.com"
          maxLength={254}
          required
        />

        {message && (
          <p className={styles.success} role="status">
            {message}
          </p>
        )}

        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Отправляем..." : "Отправить приглашение"}
        </button>
      </form>
    </section>
  );
}
