"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import styles from "./register.module.css";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Пароль должен содержать не менее 8 символов.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Пароли не совпадают.");
      return;
    }

    const normalizedPhone = phone.trim();
    const digits = normalizedPhone.replace(/\D/g, "");

    if (digits.length < 10 || digits.length > 15) {
      setError("Проверьте номер телефона.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();
      const fullName = `${firstName.trim()} ${lastName.trim()}`;

      console.log("Данные регистрации:", {
        full_name: fullName,
        phone: normalizedPhone,
        email: email.trim().toLowerCase(),
      });

      const { error: signUpError } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: fullName,
            phone: normalizedPhone,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/mfa`,
        },
      });

      if (signUpError) throw signUpError;

      setEmailSent(true);
    } catch (err) {
      setError(err.message || "Ошибка регистрации.");
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    let digits = e.target.value.replace(/\D/g, "");

    if (digits.startsWith("7") || digits.startsWith("8")) {
      digits = digits.slice(1);
    }

    digits = digits.slice(0, 10);

    let formatted = "+7";

    if (digits.length > 0) formatted += " " + digits.slice(0, 3);
    if (digits.length >= 4) formatted += " " + digits.slice(3, 6);
    if (digits.length >= 7) formatted += " " + digits.slice(6, 8);
    if (digits.length >= 9) formatted += " " + digits.slice(8, 10);

    setPhone(formatted);
  };

  if (emailSent) {
    return (
      <main className={styles.page}>
        <section className={styles.card}>
          <h1 className={styles.brand}>SmartÜi</h1>
          <h2>Проверьте почту</h2>
          <p>Мы отправили письмо со ссылкой подтверждения на адрес:</p>
          <strong>{email}</strong>
          <p>Перейдите по ссылке в письме, чтобы продолжить регистрацию.</p>
          <Link href="/login">Вернуться ко входу</Link>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1 className={styles.brand}>SmartÜi</h1>
        <h2>Создание аккаунта</h2>
        <p className={styles.description}>Заполните данные для регистрации.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Имя
            <input
              type="text"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>

          <label>
            Фамилия
            <input
              type="text"
              autoComplete="family-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>

          <label>
            Номер телефона
            <input
              type="tel"
              name="phone"
              placeholder="+7 777 123 45 67"
              value={phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Электронная почта
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Пароль
            <input
              type="password"
              autoComplete="new-password"
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <label>
            Повторите пароль
            <input
              type="password"
              autoComplete="new-password"
              minLength={8}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Регистрируем..." : "Зарегистрироваться"}
          </button>
        </form>

        <p className={styles.footer}>
          Уже есть аккаунт? <Link href="/login">Войти</Link>
        </p>
      </section>
    </main>
  );
}
