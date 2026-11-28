"use client";

import { useState } from "react";
import { authClient } from "@/lib/client-auth";
import VerificationNotice from "@/components/authentication/shared/verification/VerificationNotice";
import styles from "./register.module.css";

export default function RegisterForm({ initialEmail = "", onBack }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    return <VerificationNotice email={email} onBack={onBack} />;
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
          readOnly={Boolean(initialEmail)}
          required
        />
        {onBack && (
          <button type="button" className={styles.changeEmail} onClick={onBack}>
            Изменить адрес электронной почты
          </button>
        )}

        <label className={styles.label} htmlFor="register-password">
          Пароль
        </label>

        <div className={styles.passwordField}>
          <input
            id="register-password"
            className={`${styles.input} ${styles.passwordInput}`}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            autoComplete="new-password"
            required
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

        <label className={styles.label} htmlFor="confirm-password">
          Повторите пароль
        </label>

        <div className={styles.passwordField}>
          <input
            id="confirm-password"
            className={`${styles.input} ${styles.passwordInput}`}
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={8}
            autoComplete="new-password"
            required
          />

          <button
            type="button"
            className={styles.passwordToggle}
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            aria-label={
              showConfirmPassword ? "Скрыть пароль" : "Показать пароль"
            }
            aria-pressed={showConfirmPassword}
            title={showConfirmPassword ? "Скрыть пароль" : "Показать пароль"}
          >
            {showConfirmPassword ? (
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

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.button} disabled={loading}>
          {loading ? "Создаём аккаунт..." : "Зарегистрироваться"}
        </button>
      </form>
    </main>
  );
}
