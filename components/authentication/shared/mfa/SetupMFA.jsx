"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QRCode from "react-qr-code";
import { authClient } from "@/lib/client-auth";
import styles from "./mfa.module.css";

export default function SetupMFA() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [totpURI, setTotpURI] = useState("");
  const [code, setCode] = useState("");
  const [backupCodes, setBackupCodes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  async function handleEnable(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await authClient.twoFactor.enable({
        password,
        method: "totp",
        issuer: "SmartÜi",
      });

      if (result.error) {
        throw new Error(result.error.message || "Не удалось включить MFA.");
      }

      setTotpURI(result.data.totpURI);
      setBackupCodes(result.data.backupCodes || []);
    } catch (err) {
      setError(err.message || "Ошибка настройки MFA.");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerify(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await authClient.twoFactor.verifyTotp({
        code: code.replace(/\s/g, ""),
      });

      if (result.error) {
        throw new Error(result.error.message || "Неверный код.");
      }

      setCompleted(true);
    } catch (err) {
      setError(err.message || "Не удалось подтвердить код.");
    } finally {
      setLoading(false);
    }
  }

  function continueToAccount() {
    router.replace("/");

    router.refresh();
  }

  if (completed) {
    return (
      <main className={styles.page}>
        <section className={styles.card}>
          <div className={styles.successIcon}>✓</div>
          <h1 className={styles.title}>Защита подключена</h1>
          <p className={styles.description}>
            Двухфакторная аутентификация успешно активирована.
          </p>

          {backupCodes.length > 0 && (
            <div className={styles.backupBox}>
              <h2>Резервные коды</h2>
              <p>
                Сохраните их в надёжном месте. Каждый код можно использовать
                только один раз.
              </p>
              <div className={styles.codes}>
                {backupCodes.map((item, index) => (
                  <code key={index}>{item}</code>
                ))}
              </div>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={() =>
                  navigator.clipboard.writeText(backupCodes.join("\n"))
                }
              >
                Скопировать коды
              </button>
            </div>
          )}

          <button
            type="button"
            className={styles.button}
            onClick={continueToAccount}
          >
            Продолжить
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.logo}>SmartÜi</div>
        <h1 className={styles.title}>Защитите свой аккаунт</h1>
        <p className={styles.description}>
          Настройте двухфакторную аутентификацию для дополнительной защиты
          вашего аккаунта.
        </p>

        {!totpURI ? (
          <form onSubmit={handleEnable}>
            <label className={styles.label} htmlFor="mfa-password">
              Подтвердите пароль
            </label>
            <input
              id="mfa-password"
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />

            {error && <p className={styles.error}>{error}</p>}

            <button className={styles.button} disabled={loading}>
              {loading ? "Подготовка..." : "Настроить MFA"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify}>
            <div className={styles.qrBox}>
              <QRCode value={totpURI} size={190} />
            </div>

            <p className={styles.description}>
              Откройте Google Authenticator, Microsoft Authenticator или другое
              приложение-аутентификатор и отсканируйте QR-код.
            </p>

            <label className={styles.label} htmlFor="mfa-code">
              Код из приложения
            </label>
            <input
              id="mfa-code"
              className={styles.input}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              value={code}
              onChange={(e) =>
                setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              placeholder="000000"
              required
            />

            {error && <p className={styles.error}>{error}</p>}

            <button
              className={styles.button}
              disabled={loading || code.length !== 6}
            >
              {loading ? "Проверка..." : "Подтвердить и включить MFA"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
