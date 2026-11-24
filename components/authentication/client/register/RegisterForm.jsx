"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/client-auth";
import VerificationNotice from "@/components/authentication/shared/verification/VerificationNotice";
import styles from "./register.module.css";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);

  function handlePhoneChange(value) {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (!digits) {
      setPhone("+7");
      return;
    }

    const normalized = digits.startsWith("7") ? digits : `7${digits}`;

    setPhone(`+7${normalized.slice(1)}`);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const cleanFirstName = firstName.trim();
    const cleanLastName = lastName.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanFirstName || !cleanLastName) {
      setError("Введите имя и фамилию.");
      return;
    }

    if (password.length < 8) {
      setError("Пароль должен содержать минимум 8 символов.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Пароли не совпадают.");
      return;
    }

    if (phone.replace(/\D/g, "").length !== 11) {
      setError("Введите корректный номер телефона.");
      return;
    }

    setLoading(true);

    try {
      const result = await authClient.signUp.email({
        name: `${cleanFirstName} ${cleanLastName}`,
        firstName: cleanFirstName,
        lastName: cleanLastName,
        phoneNumber: phone,
        email: cleanEmail,
        password,
        callbackURL: "/profile",
      });

      if (result.error) {
        throw new Error(result.error.message || "Не удалось создать аккаунт.");
      }

      setRegistered(true);
    } catch (err) {
      setError(err.message || "Ошибка регистрации.");
    } finally {
      setLoading(false);
    }
  }

  if (registered) {
    return <VerificationNotice email={email} />;
  }

  return (
    <main className={styles.page}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <div className={styles.logo}>SmartÜi</div>

        <h1 className={styles.title}>Создание аккаунта</h1>
        <p className={styles.subtitle}>Заполните данные для регистрации</p>

        <div className={styles.nameRow}>
          <div>
            <label className={styles.label} htmlFor="firstName">
              Имя
            </label>
            <input
              id="firstName"
              className={styles.input}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="given-name"
              required
            />
          </div>

          <div>
            <label className={styles.label} htmlFor="lastName">
              Фамилия
            </label>
            <input
              id="lastName"
              className={styles.input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="family-name"
              required
            />
          </div>
        </div>

        <label className={styles.label} htmlFor="phone">
          Номер телефона
        </label>
        <input
          id="phone"
          className={styles.input}
          type="tel"
          value={phone}
          onChange={(e) => handlePhoneChange(e.target.value)}
          placeholder="+7 777 123 45 67"
          autoComplete="tel"
          required
        />

        <label className={styles.label} htmlFor="register-email">
          Электронная почта
        </label>
        <input
          id="register-email"
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@mail.com"
          autoComplete="email"
          required
        />

        <label className={styles.label} htmlFor="register-password">
          Пароль
        </label>
        <input
          id="register-password"
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          autoComplete="new-password"
          required
        />

        <label className={styles.label} htmlFor="confirm-password">
          Повторите пароль
        </label>
        <input
          id="confirm-password"
          className={styles.input}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          minLength={8}
          autoComplete="new-password"
          required
        />

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.button} disabled={loading}>
          {loading ? "Создаём аккаунт..." : "Зарегистрироваться"}
        </button>

        <p className={styles.footer}>
          Уже есть аккаунт? <Link href="/login">Войти</Link>
        </p>
      </form>
    </main>
  );
}
