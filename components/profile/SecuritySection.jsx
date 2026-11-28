"use client";

import { useCallback, useEffect, useState } from "react";
import { authClient } from "@/lib/client-auth";
import styles from "./security-section.module.css";

export default function SecuritySection() {
  const [passkeys, setPasskeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [password, setPassword] = useState("");
  const [passkeyName, setPasskeyName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loadPasskeys = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const result = await authClient.passkey.listUserPasskeys();

      if (result.error) {
        throw new Error(
          result.error.message || "Не удалось загрузить Passkey.",
        );
      }

      setPasskeys(Array.isArray(result.data) ? result.data : []);
    } catch (err) {
      setError(err.message || "Не удалось загрузить список Passkey.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPasskeys();
  }, [loadPasskeys]);

  const authorizeManagement = async (action) => {
    const response = await fetch("/api/security/passkeys/reauth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action,
        ...(password.trim() ? { password } : {}),
      }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        result.message ||
          result.error ||
          "Не удалось подтвердить личность. Проверьте пароль.",
      );
    }

    if (result.requiresPasskey) {
      const passkeyResult = await authClient.signIn.passkey();

      // Сервер специально прерывает создание новой сессии
      // после успешной проверки Passkey для управления ключами.
      if (passkeyResult.error?.code !== "PASSKEY_MANAGEMENT_REAUTH_SUCCESS") {
        throw new Error(
          passkeyResult.error?.message ||
            "Не удалось подтвердить личность с помощью Passkey.",
        );
      }
    } else if (!result.authorized) {
      throw new Error("Не удалось подтвердить личность.");
    }
  };

  const handleAddPasskey = async () => {
    setBusy(true);
    setError("");
    setSuccess("");

    try {
      await authorizeManagement("add");

      const result = await authClient.passkey.addPasskey({
        name: passkeyName.trim() || undefined,
      });

      if (result.error) {
        throw new Error(result.error.message || "Не удалось добавить Passkey.");
      }

      setPasskeyName("");
      setPassword("");
      setSuccess("Passkey успешно добавлен.");
      await loadPasskeys();
    } catch (err) {
      setError(err.message || "Не удалось добавить Passkey.");
    } finally {
      setBusy(false);
    }
  };

  const handleDeletePasskey = async (passkey) => {
    const name = passkey.name || "этот Passkey";

    if (!window.confirm(`Вы действительно хотите удалить «${name}»?`)) {
      return;
    }

    setBusy(true);
    setError("");
    setSuccess("");

    try {
      await authorizeManagement("delete");

      const result = await authClient.passkey.deletePasskey({
        id: passkey.id,
      });

      if (result.error) {
        throw new Error(result.error.message || "Не удалось удалить Passkey.");
      }

      setPassword("");
      setSuccess("Passkey успешно удалён.");
      await loadPasskeys();
    } catch (err) {
      setError(err.message || "Не удалось удалить Passkey.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Безопасность аккаунта</h2>
          <p className={styles.description}>
            Управляйте способами безопасного входа в свой аккаунт.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.cardTitle}>Passkey</h3>
            <p className={styles.cardDescription}>
              Вход с помощью Face ID, отпечатка пальца, PIN-кода устройства или
              физического ключа безопасности.
            </p>
          </div>

          <span className={styles.status}>
            {passkeys.length > 0 ? "Настроен" : "Не настроен"}
          </span>
        </div>

        <div className={styles.passkeyList}>
          <h4 className={styles.subheading}>Зарегистрированные ключи</h4>

          {loading ? (
            <p className={styles.muted}>Загрузка...</p>
          ) : passkeys.length === 0 ? (
            <p className={styles.muted}>
              У вас пока нет зарегистрированных Passkey.
            </p>
          ) : (
            <ul className={styles.list}>
              {passkeys.map((passkey) => (
                <li className={styles.passkeyItem} key={passkey.id}>
                  <div className={styles.passkeyInfo}>
                    <span className={styles.passkeyName}>
                      {passkey.name || "Passkey"}
                    </span>

                    <span className={styles.passkeyDate}>
                      {passkey.createdAt
                        ? `Добавлен: ${new Date(
                            passkey.createdAt,
                          ).toLocaleDateString("ru-RU")}`
                        : "Дата добавления неизвестна"}
                    </span>
                  </div>

                  <button
                    className={styles.deleteButton}
                    type="button"
                    disabled={busy}
                    onClick={() => handleDeletePasskey(passkey)}
                  >
                    Удалить
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.addForm}>
          <h4 className={styles.subheading}>Добавить Passkey</h4>

          <label className={styles.label} htmlFor="passkey-name">
            Название устройства
          </label>

          <input
            id="passkey-name"
            className={styles.input}
            type="text"
            value={passkeyName}
            onChange={(event) => setPasskeyName(event.target.value)}
            placeholder="Например, iPhone или MacBook"
            maxLength={100}
            disabled={busy}
          />

          <label className={styles.label} htmlFor="passkey-password">
            Пароль аккаунта
          </label>

          <input
            id="passkey-password"
            className={styles.input}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Введите пароль, если он установлен"
            autoComplete="current-password"
            disabled={busy}
          />

          <p className={styles.hint}>
            Если аккаунт без пароля, оставьте поле пустым — система предложит
            подтвердить действие с помощью существующего Passkey.
          </p>

          <button
            className={styles.primaryButton}
            type="button"
            onClick={handleAddPasskey}
            disabled={busy || loading}
          >
            {busy ? "Выполняется..." : "Добавить Passkey"}
          </button>
        </div>
      </div>

      {error && (
        <div className={styles.error} role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className={styles.success} role="status">
          {success}
        </div>
      )}
    </section>
  );
}
