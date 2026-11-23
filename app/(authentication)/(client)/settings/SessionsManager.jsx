"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/client-auth";
import styles from "./sessions-manager.module.css";

function getDeviceInfo(userAgent) {
  if (!userAgent) {
    return {
      icon: "💻",
      label: "Неизвестное устройство",
    };
  }

  const isMobile = /Android|iPhone|iPad|Mobile/i.test(userAgent);

  let os = "Неизвестная система";

  if (/Windows/i.test(userAgent)) {
    os = "Windows";
  } else if (/Mac OS X|Macintosh/i.test(userAgent)) {
    os = "macOS";
  } else if (/Android/i.test(userAgent)) {
    os = "Android";
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    os = "iOS";
  } else if (/Linux/i.test(userAgent)) {
    os = "Linux";
  }

  let browser = "Неизвестный браузер";

  if (/Edg\//i.test(userAgent)) {
    browser = "Microsoft Edge";
  } else if (/OPR\//i.test(userAgent)) {
    browser = "Opera";
  } else if (/Firefox\//i.test(userAgent)) {
    browser = "Firefox";
  } else if (/Chrome\//i.test(userAgent)) {
    browser = "Google Chrome";
  } else if (/Safari\//i.test(userAgent)) {
    browser = "Safari";
  }

  return {
    icon: isMobile ? "📱" : "💻",
    label: `${browser} · ${os}`,
  };
}

function formatDate(value) {
  if (!value) return "Не указано";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Не указано";
  }

  return new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default function SessionsManager() {
  const { data: currentSession, isPending } = authClient.useSession();

  const currentSessionId = currentSession?.session?.id;

  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [revokingToken, setRevokingToken] = useState("");
  const [confirmSessionId, setConfirmSessionId] = useState(null);

  const [confirmAll, setConfirmAll] = useState(false);
  const [isRevokingAll, setIsRevokingAll] = useState(false);

  useEffect(() => {
    if (isPending) return;

    let cancelled = false;

    async function loadSessions() {
      setIsLoading(true);
      setError("");
      setSuccess("");

      try {
        const { data, error } = await authClient.listSessions();

        if (cancelled) return;

        if (error) {
          const message = error.message || "";

          if (
            message.toLowerCase().includes("fresh") ||
            message.toLowerCase().includes("session_not_fresh")
          ) {
            setError(
              "Для просмотра сеансов необходимо заново войти в аккаунт. После входа обновите эту страницу.",
            );
          } else {
            setError(
              message ||
                "Не удалось загрузить активные сеансы. Попробуйте ещё раз.",
            );
          }

          return;
        }

        setSessions(Array.isArray(data) ? data : []);
      } catch {
        if (!cancelled) {
          setError(
            "Не удалось загрузить активные сеансы. Проверьте подключение и попробуйте ещё раз.",
          );
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadSessions();

    return () => {
      cancelled = true;
    };
  }, [isPending]);

  async function handleRevokeSession(token, sessionId) {
    setError("");
    setSuccess("");
    setRevokingToken(token);

    try {
      const { error } = await authClient.revokeSession({ token });

      if (error) {
        setError(error.message || "Не удалось завершить выбранный сеанс.");
        return;
      }

      setSessions((previous) =>
        previous.filter((item) => item.id !== sessionId),
      );

      setConfirmSessionId(null);
      setSuccess("Выбранный сеанс успешно завершён.");
    } catch {
      setError("Не удалось завершить сеанс. Попробуйте ещё раз.");
    } finally {
      setRevokingToken("");
    }
  }

  async function handleRevokeOtherSessions() {
    setError("");
    setSuccess("");
    setIsRevokingAll(true);

    try {
      const { error } = await authClient.revokeOtherSessions();

      if (error) {
        setError(error.message || "Не удалось завершить остальные сеансы.");
        return;
      }

      if (currentSessionId) {
        setSessions((previous) =>
          previous.filter((item) => item.id === currentSessionId),
        );
      } else {
        const { data } = await authClient.listSessions();
        setSessions(Array.isArray(data) ? data : []);
      }

      setConfirmAll(false);
      setSuccess("Все остальные сеансы успешно завершены.");
    } catch {
      setError("Не удалось завершить остальные сеансы. Попробуйте ещё раз.");
    } finally {
      setIsRevokingAll(false);
    }
  }

  if (isPending || isLoading) {
    return <div className={styles.message}>Загружаем активные сеансы...</div>;
  }

  if (error && sessions.length === 0) {
    return (
      <div className={styles.sessionsContainer}>
        <div className={styles.error} role="alert">
          {error}
        </div>

        <button
          type="button"
          className={styles.secondaryButton}
          onClick={() => window.location.reload()}
        >
          Обновить страницу
        </button>
      </div>
    );
  }

  const otherSessions = sessions.filter((item) => item.id !== currentSessionId);

  return (
    <div className={styles.sessionsContainer}>
      <div className={styles.sessionsHeader}>
        <div>
          <h3>Устройства с активным входом</h3>
          <p>
            Здесь отображаются устройства, на которых выполнен вход в ваш
            аккаунт SmartÜi.
          </p>
        </div>

        <span className={styles.sessionsCount}>{sessions.length}</span>
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

      {sessions.length === 0 ? (
        <div className={styles.emptyState}>Активные сеансы не найдены.</div>
      ) : (
        <div className={styles.sessionsList}>
          {sessions.map((item) => {
            const isCurrent = item.id === currentSessionId;
            const device = getDeviceInfo(item.userAgent);

            return (
              <div className={styles.sessionCard} key={item.id}>
                <div className={styles.deviceIcon}>{device.icon}</div>

                <div className={styles.sessionDetails}>
                  <div className={styles.deviceHeading}>
                    <h4>{device.label}</h4>

                    {isCurrent && (
                      <span className={styles.currentBadge}>Текущий сеанс</span>
                    )}
                  </div>

                  <div className={styles.sessionMeta}>
                    <span>Вход: {formatDate(item.createdAt)}</span>

                    <span>
                      Последняя активность: {formatDate(item.updatedAt)}
                    </span>

                    {item.ipAddress && <span>IP-адрес: {item.ipAddress}</span>}
                  </div>

                  {!isCurrent && (
                    <div className={styles.sessionActions}>
                      {confirmSessionId === item.id ? (
                        <div className={styles.confirmActions}>
                          <span>Завершить этот сеанс?</span>

                          <button
                            type="button"
                            className={styles.dangerButton}
                            disabled={revokingToken === item.token}
                            onClick={() =>
                              handleRevokeSession(item.token, item.id)
                            }
                          >
                            {revokingToken === item.token
                              ? "Завершение..."
                              : "Подтвердить"}
                          </button>

                          <button
                            type="button"
                            className={styles.cancelButton}
                            onClick={() => setConfirmSessionId(null)}
                          >
                            Отмена
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          className={styles.revokeButton}
                          onClick={() => setConfirmSessionId(item.id)}
                        >
                          Завершить сеанс
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {otherSessions.length > 0 && (
        <div className={styles.revokeAllSection}>
          {!confirmAll ? (
            <>
              <h3>Управление другими устройствами</h3>
              <p>
                Вы можете завершить все остальные сеансы. Текущий сеанс на этом
                устройстве останется активным.
              </p>

              <button
                type="button"
                className={styles.dangerButton}
                onClick={() => setConfirmAll(true)}
              >
                Завершить все остальные сеансы
              </button>
            </>
          ) : (
            <div className={styles.confirmAll}>
              <strong>
                Вы уверены, что хотите завершить все остальные сеансы?
              </strong>

              <p>
                На других устройствах потребуется войти в аккаунт повторно.
                Текущий сеанс сохранится.
              </p>

              <div className={styles.confirmActions}>
                <button
                  type="button"
                  className={styles.dangerButton}
                  disabled={isRevokingAll}
                  onClick={handleRevokeOtherSessions}
                >
                  {isRevokingAll ? "Завершение..." : "Да, завершить"}
                </button>

                <button
                  type="button"
                  className={styles.cancelButton}
                  disabled={isRevokingAll}
                  onClick={() => setConfirmAll(false)}
                >
                  Отмена
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
