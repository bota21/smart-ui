"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/client-auth";
import styles from "./passkeys-manager.module.css";

function formatDate(value) {
  if (!value) return "Дата не указана";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "Дата не указана";

  return new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function getDeviceLabel(passkey) {
  if (passkey.deviceType === "multiDevice") {
    return "Синхронизируемый ключ доступа";
  }

  if (passkey.deviceType === "singleDevice") {
    return "Ключ на этом устройстве";
  }

  return "Ключ доступа";
}

export default function PasskeysManager() {
  const [passkeys, setPasskeys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const [password, setPassword] = useState("");
  const [deletePassword, setDeletePassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [savingId, setSavingId] = useState("");
  const [deletingId, setDeletingId] = useState("");
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  async function loadPasskeys() {
    setError("");

    try {
      const { data, error } = await authClient.passkey.listUserPasskeys();

      if (error) {
        setError(error.message || "Не удалось загрузить ключи доступа.");
        return;
      }

      setPasskeys(Array.isArray(data) ? data : []);
    } catch {
      setError("Не удалось загрузить ключи доступа. Попробуйте ещё раз.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadPasskeys();
  }, []);

  async function authorizeManagement(action, enteredPassword = "") {
    const response = await fetch("/api/security/passkeys/reauth", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action,
        ...(enteredPassword ? { password: enteredPassword } : {}),
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

      if (passkeyResult.error?.code !== "PASSKEY_MANAGEMENT_REAUTH_SUCCESS") {
        throw new Error(
          passkeyResult.error?.message ||
            "Не удалось подтвердить личность с помощью Passkey.",
        );
      }
    } else if (!result.authorized) {
      throw new Error("Не удалось подтвердить личность.");
    }
  }

  async function handleAddPasskey() {
    setError("");
    setSuccess("");
    setIsAdding(true);

    try {
      await authorizeManagement("add", password);

      const { data, error } = await authClient.passkey.addPasskey({
        name: newName.trim() || undefined,
      });

      if (error || !data) {
        throw new Error(
          error?.message ||
            "Не удалось добавить ключ доступа. Попробуйте ещё раз.",
        );
      }

      setNewName("");
      setPassword("");
      setSuccess("Ключ доступа успешно добавлен.");

      await loadPasskeys();
    } catch (err) {
      setError(err.message || "Не удалось добавить ключ доступа.");
    } finally {
      setIsAdding(false);
    }
  }

  async function handleRename(passkeyId) {
    const name = editingName.trim();

    if (!name) {
      setError("Введите название ключа.");
      return;
    }

    setError("");
    setSuccess("");
    setSavingId(passkeyId);

    try {
      const { error } = await authClient.passkey.updatePasskey({
        id: passkeyId,
        name,
      });

      if (error) {
        setError(error.message || "Не удалось изменить название ключа.");
        return;
      }

      setPasskeys((previous) =>
        previous.map((item) =>
          item.id === passkeyId ? { ...item, name } : item,
        ),
      );

      setEditingId(null);
      setEditingName("");
      setSuccess("Название ключа изменено.");
    } catch {
      setError("Не удалось изменить название ключа.");
    } finally {
      setSavingId("");
    }
  }

  async function handleDelete(passkeyId) {
    setError("");
    setSuccess("");
    setDeletingId(passkeyId);

    try {
      await authorizeManagement("delete", deletePassword);

      const { error } = await authClient.passkey.deletePasskey({
        id: passkeyId,
      });

      if (error) {
        throw new Error(error.message || "Не удалось удалить ключ доступа.");
      }

      setPasskeys((previous) =>
        previous.filter((item) => item.id !== passkeyId),
      );

      setDeletePassword("");
      setConfirmDeleteId(null);
      setSuccess("Ключ доступа удалён.");
    } catch (err) {
      setError(err.message || "Не удалось удалить ключ доступа.");
    } finally {
      setDeletingId("");
    }
  }

  if (isLoading) {
    return <div className={styles.message}>Загружаем ключи доступа...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.introIcon}>
          <img
            src="/assets/icons/fingerprint.svg"
            className={styles.navIcon}
            alt=""
          />
        </div>

        <div>
          <h3>Ключи доступа</h3>
          <p>
            Используйте Face ID, отпечаток пальца, PIN-код устройства или
            физический ключ безопасности для входа в SmartÜi.
          </p>
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

      <div className={styles.addPanel}>
        <h3>Добавить новый ключ</h3>
        <p>
          Название поможет отличать ключи, если вы используете несколько
          устройств.
        </p>

        <div className={styles.addForm}>
          <input
            type="text"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            placeholder="Например, iPhone или MacBook"
            maxLength={80}
            disabled={isAdding}
          />

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Пароль аккаунта"
            autoComplete="current-password"
            disabled={isAdding}
          />

          <button
            type="button"
            className={styles.primaryButton}
            onClick={handleAddPasskey}
            disabled={isAdding}
          >
            {isAdding ? "Подключение..." : "Добавить ключ доступа"}
          </button>
        </div>

        <span className={styles.hint}>
          Подтвердите пароль аккаунта. После проверки браузер предложит создать
          ключ доступа на устройстве.
        </span>
      </div>

      <div className={styles.listHeader}>
        <div>
          <h3>Мои ключи доступа</h3>
          <p>Зарегистрированные способы входа в аккаунт.</p>
        </div>

        <span className={styles.count}>{passkeys.length}</span>
      </div>

      {passkeys.length === 0 ? (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}>
            <img
              src="/assets/icons/fingerprint.svg"
              className={styles.navIcon}
              alt=""
            />
          </span>

          <strong>Пока нет ключей доступа</strong>
          <p>Добавьте ключ, чтобы в будущем входить без ввода пароля.</p>
        </div>
      ) : (
        <div className={styles.list}>
          {passkeys.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.deviceIcon}>🔑</div>

              <div className={styles.details}>
                {editingId === item.id ? (
                  <div className={styles.editForm}>
                    <input
                      type="text"
                      value={editingName}
                      onChange={(event) => setEditingName(event.target.value)}
                      maxLength={80}
                      autoFocus
                    />

                    <div className={styles.actions}>
                      <button
                        type="button"
                        className={styles.primaryButton}
                        disabled={savingId === item.id}
                        onClick={() => handleRename(item.id)}
                      >
                        {savingId === item.id ? "Сохранение..." : "Сохранить"}
                      </button>

                      <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={() => {
                          setEditingId(null);
                          setEditingName("");
                        }}
                      >
                        Отмена
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h4>{item.name || "Ключ доступа"}</h4>

                    <div className={styles.meta}>
                      <span>{getDeviceLabel(item)}</span>
                      <span>Добавлен: {formatDate(item.createdAt)}</span>

                      {item.backedUp && (
                        <span>Синхронизируется между устройствами</span>
                      )}
                    </div>

                    {confirmDeleteId === item.id ? (
                      <div className={styles.confirmDelete}>
                        <p>Удалить этот ключ доступа?</p>

                        <div className={styles.editForm}>
                          <label htmlFor={`delete-password-${item.id}`}>
                            Подтвердите пароль аккаунта
                          </label>

                          <input
                            id={`delete-password-${item.id}`}
                            type="password"
                            value={deletePassword}
                            onChange={(event) =>
                              setDeletePassword(event.target.value)
                            }
                            placeholder="Пароль аккаунта"
                            autoComplete="current-password"
                            disabled={deletingId === item.id}
                          />
                        </div>

                        <div className={styles.actions}>
                          <button
                            type="button"
                            className={styles.dangerButton}
                            disabled={deletingId === item.id}
                            onClick={() => handleDelete(item.id)}
                          >
                            {deletingId === item.id
                              ? "Удаление..."
                              : "Да, удалить"}
                          </button>

                          <button
                            type="button"
                            className={styles.cancelButton}
                            onClick={() => {
                              setConfirmDeleteId(null);
                              setDeletePassword("");
                            }}
                          >
                            Отмена
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.actions}>
                        <button
                          type="button"
                          className={styles.textButton}
                          onClick={() => {
                            setEditingId(item.id);
                            setEditingName(item.name || "");
                            setError("");
                            setSuccess("");
                          }}
                        >
                          Переименовать
                        </button>

                        <button
                          type="button"
                          className={styles.deleteButton}
                          onClick={() => {
                            setConfirmDeleteId(item.id);
                            setDeletePassword("");
                            setError("");
                            setSuccess("");
                          }}
                        >
                          Удалить
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
