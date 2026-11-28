"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/client-auth";
import RegisterForm from "@/components/authentication/client/register/RegisterForm";

import styles from "./login.module.css";

export default function LoginForm() {
  const router = useRouter();

  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [methods, setMethods] = useState({
    password: false,
    passkey: false,
  });
  const [emailVerified, setEmailVerified] = useState(false);

  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkLoading, setCheckLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [passkeyLoading, setPasskeyLoading] = useState(false);

  function redirectAfterLogin(user) {
    if (["admin", "superadmin"].includes(user?.role)) {
      router.replace("/admin");
    } else {
      router.replace("/");
    }

    router.refresh();
  }

  async function handleEmailCheck(event) {
    event.preventDefault();

    setError("");
    setNotice("");
    setCheckLoading(true);

    const cleanEmail = email.trim().toLowerCase();

    try {
      const response = await fetch("/api/auth/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: cleanEmail,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "Слишком много попыток. Пожалуйста, повторите позже.",
          );
        }

        throw new Error(
          data.error || "Не удалось проверить электронную почту.",
        );
      }

      setEmail(cleanEmail);
      setPassword("");

      if (data.exists) {
        setMethods(data.methods);
        setEmailVerified(data.emailVerified);
        setStep("existing");
      } else {
        setStep("registration");
      }
    } catch (err) {
      setError(err.message || "Произошла ошибка.");
    } finally {
      setCheckLoading(false);
    }
  }

  function handleBackToEmail() {
    setStep("email");
    setPassword("");
    setError("");
    setNotice("");
  }

  async function handleLogin(event) {
    event.preventDefault();

    setError("");
    setNotice("");
    setLoading(true);

    try {
      const result = await authClient.signIn.email({
        email,
        password,
      });
      console.log(result);

      if (result.error) {
        const errorCode = result.error.code;

        if (errorCode === "EMAIL_NOT_VERIFIED") {
          setNotice(
            "Электронная почта ещё не подтверждена. Мы отправили вам письмо с подтверждением. Проверьте почту.",
          );
          return;
        }

        if (
          errorCode === "INVALID_EMAIL_OR_PASSWORD" ||
          errorCode === "INVALID_PASSWORD"
        ) {
          throw new Error(
            "Неверный пароль. Проверьте введённые данные и попробуйте ещё раз.",
          );
        }

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

  if (step === "registration") {
    return <RegisterForm initialEmail={email} onBack={handleBackToEmail} />;
  }

  async function handlePasskeyLogin() {
    setError("");
    setPasskeyLoading(true);

    try {
      // Сначала создаём одноразовое разрешение для входа
      const intentResponse = await fetch("/api/auth/passkey-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
        }),
      });

      const intentData = await intentResponse.json();

      if (!intentResponse.ok || !intentData.ready) {
        throw new Error(
          intentData.message || "Не удалось подготовить вход по Passkey.",
        );
      }

      // Запускаем проверку Passkey на устройстве пользователя
      const result = await authClient.signIn.passkey({
        autoFill: false,
      });

      const passkeyError = result.error || result.data?.error;

      // Если включена двухфакторная защита, переходим к проверке второго фактора
      if (passkeyError?.code === "TWO_FACTOR_REQUIRED") {
        router.replace("/mfa");
        return;
      }

      if (passkeyError) {
        throw new Error(
          passkeyError.message || "Не удалось войти с помощью ключа доступа.",
        );
      }

      const user = result.data?.user;

      if (!user) {
        throw new Error("Не удалось получить данные пользователя.");
      }

      if (["admin", "superadmin"].includes(user.role)) {
        router.replace("/admin");
      } else {
        router.replace("/");
      }

      router.refresh();
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
      {step === "email" ? (
        <form onSubmit={handleEmailCheck} className={styles.form}>
          <h1 className={styles.title}>SmartÜi</h1>

          <p className={styles.subtitle}>Войти или создать аккаунт</p>

          <label htmlFor="email" className={styles.label}>
            Электронная почта
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="username webauthn"
            className={styles.input}
            placeholder="example@mail.com"
          />

          {error && (
            <p role="alert" className={styles.error}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={checkLoading}
            className={styles.button}
          >
            {checkLoading ? "Проверяем..." : "Продолжить"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleLogin} className={styles.form}>
          <h1 className={styles.title}>SmartÜi</h1>

          <p className={styles.subtitle}>Вход в личный кабинет</p>

          <div className={styles.emailSummary}>{email}</div>

          <button
            type="button"
            className={styles.backButton}
            onClick={handleBackToEmail}
          >
            Изменить адрес электронной почты
          </button>

          {(!emailVerified || notice) && (
            <p role="status" className={styles.notice}>
              {notice ||
                "Электронная почта ещё не подтверждена. После ввода правильного пароля мы отправим новое письмо для подтверждения."}
            </p>
          )}

          {methods.password && (
            <>
              <label htmlFor="password" className={styles.label}>
                Пароль
              </label>

              <div className={styles.passwordField}>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="current-password"
                  className={`${styles.input} ${styles.passwordInput}`}
                />

                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={
                    showPassword ? "Скрыть пароль" : "Показать пароль"
                  }
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

              <div className={styles.forgotPasswordWrapper}>
                <Link href="/forgot-password" className={styles.forgotPassword}>
                  Забыли пароль?
                </Link>
              </div>
            </>
          )}

          {methods.passkey && emailVerified && (
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
          )}

          {!methods.password && !methods.passkey && (
            <p className={styles.notice}>
              Для этого аккаунта пока не найден доступный способ входа.
              Обратитесь в поддержку.
            </p>
          )}

          {error && (
            <p role="alert" className={styles.error}>
              {error}
            </p>
          )}

          {methods.password && (
            <button type="submit" disabled={loading} className={styles.button}>
              {loading ? "Выполняется вход..." : "Войти"}
            </button>
          )}
        </form>
      )}
    </main>
  );
}
