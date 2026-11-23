"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/client-auth";
import styles from "./mfa.module.css";

export default function MfaForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next");

  const [code, setCode] = useState("");
  const [backupMode, setBackupMode] = useState(false);
  const [trustDevice, setTrustDevice] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = backupMode
        ? await authClient.twoFactor.verifyBackupCode({
            code: code.trim(),
            trustDevice,
          })
        : await authClient.twoFactor.verifyTotp({
            code: code.replace(/\s/g, ""),
            trustDevice,
          });

      if (result.error) {
        throw new Error(result.error.message || "Неверный код подтверждения.");
      }

      router.replace(next === "admin" ? "/admin" : "/");
      router.refresh();
    } catch (err) {
      setError(err.message || "Не удалось подтвердить код.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.logo}>SmartÜi</div>
        <h1 className={styles.title}>Двухфакторная проверка</h1>
        <p className={styles.description}>
          {backupMode
            ? "Введите один из сохранённых резервных кодов."
            : "Введите шестизначный код из приложения-аутентификатора."}
        </p>

        <form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="verification-code">
            {backupMode ? "Резервный код" : "Код подтверждения"}
          </label>

          <input
            id="verification-code"
            className={styles.input}
            type="text"
            inputMode={backupMode ? "text" : "numeric"}
            autoComplete="one-time-code"
            maxLength={backupMode ? 32 : 6}
            value={code}
            onChange={(e) =>
              setCode(
                backupMode
                  ? e.target.value
                  : e.target.value.replace(/\D/g, "").slice(0, 6),
              )
            }
            placeholder={backupMode ? "Введите резервный код" : "000000"}
            required
          />

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={trustDevice}
              onChange={(e) => setTrustDevice(e.target.checked)}
            />
            Доверять этому устройству 30 дней
          </label>

          {error && <p className={styles.error}>{error}</p>}

          <button
            className={styles.button}
            disabled={
              loading || !code.trim() || (!backupMode && code.length !== 6)
            }
          >
            {loading ? "Проверка..." : "Подтвердить"}
          </button>
        </form>

        <button
          type="button"
          className={styles.textButton}
          onClick={() => {
            setBackupMode(!backupMode);
            setCode("");
            setError("");
          }}
        >
          {backupMode
            ? "Использовать код из приложения"
            : "Использовать резервный код"}
        </button>
      </section>
    </main>
  );
}
