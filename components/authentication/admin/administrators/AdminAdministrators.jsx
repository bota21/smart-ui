"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "../users/admin-users.module.css";

const roleLabels = {
  admin: "Администратор",
  superadmin: "Главный администратор",
};

function formatDate(value) {
  if (!value) return "—";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "—";

  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

function getFullName(user) {
  return (
    [user.firstName, user.lastName].filter(Boolean).join(" ") ||
    user.name ||
    "Без имени"
  );
}

export default function AdminAdministrators({ currentUser }) {
  const [administrators, setAdministrators] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState("");
  const [candidateSearch, setCandidateSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [candidatesLoading, setCandidatesLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [showCandidates, setShowCandidates] = useState(false);
  const [roleTarget, setRoleTarget] = useState(null);
  const [saving, setSaving] = useState(false);
  const [actionError, setActionError] = useState("");

  const isSuperadmin = currentUser.role === "superadmin";

  const loadAdministrators = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/administrators", {
        cache: "no-store",
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || "Не удалось загрузить список администраторов.",
        );
      }

      setAdministrators(data.administrators || []);
    } catch (err) {
      setError(err.message || "Ошибка при загрузке администраторов.");
    } finally {
      setLoading(false);
    }
  }, []);

  const loadCandidates = useCallback(async () => {
    if (!isSuperadmin) return;

    setCandidatesLoading(true);
    setActionError("");

    try {
      const response = await fetch("/api/admin/administrators/candidates", {
        cache: "no-store",
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || "Не удалось загрузить список пользователей.",
        );
      }

      setCandidates(data.candidates || []);
    } catch (err) {
      setActionError(err.message || "Ошибка при загрузке пользователей.");
    } finally {
      setCandidatesLoading(false);
    }
  }, [isSuperadmin]);

  useEffect(() => {
    loadAdministrators();
  }, [loadAdministrators]);

  const filteredAdministrators = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return administrators;

    return administrators.filter((user) => {
      const fullName = getFullName(user).toLowerCase();

      return (
        fullName.includes(query) ||
        (user.email || "").toLowerCase().includes(query)
      );
    });
  }, [administrators, search]);

  const filteredCandidates = useMemo(() => {
    const query = candidateSearch.trim().toLowerCase();

    if (!query) return candidates;

    return candidates.filter((user) => {
      return (
        getFullName(user).toLowerCase().includes(query) ||
        (user.email || "").toLowerCase().includes(query)
      );
    });
  }, [candidates, candidateSearch]);

  async function openCandidates() {
    setShowCandidates(true);
    setCandidateSearch("");
    setActionError("");
    await loadCandidates();
  }

  function closeCandidates() {
    if (saving) return;

    setShowCandidates(false);
    setCandidateSearch("");
    setActionError("");
  }

  function openRoleConfirmation(user) {
    setActionError("");
    setRoleTarget(user);
  }

  function closeRoleConfirmation() {
    if (saving) return;

    setRoleTarget(null);
    setActionError("");
  }

  async function changeRole(user, nextRole) {
    if (saving) return;

    setSaving(true);
    setActionError("");
    setSuccessMessage("");

    try {
      const response = await fetch(
        `/api/admin/users/${encodeURIComponent(user.id)}/role`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role: nextRole }),
        },
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Не удалось изменить роль.");
      }

      setRoleTarget(null);
      setShowCandidates(false);

      await loadAdministrators();

      if (nextRole === "admin") {
        setSuccessMessage("Пользователь назначен администратором.");
      } else {
        setSuccessMessage("Роль администратора снята.");
      }

      setTimeout(() => setSuccessMessage(""), 4000);
    } catch (err) {
      setActionError(err.message || "Ошибка при изменении роли.");
    } finally {
      setSaving(false);
    }
  }

  const regularAdministrators = administrators.filter(
    (user) => user.role === "admin",
  ).length;

  const superadministrators = administrators.filter(
    (user) => user.role === "superadmin",
  ).length;

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.stats}>
          <article className={styles.statCard}>
            <span>Всего администраторов</span>
            <strong>{administrators.length}</strong>
          </article>

          <article className={styles.statCard}>
            <span>Администраторы</span>
            <strong>{regularAdministrators}</strong>
          </article>

          <article className={styles.statCard}>
            <span>Главные администраторы</span>
            <strong>{superadministrators}</strong>
          </article>
        </section>

        <section className={styles.usersSection}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>Управление администраторами</h2>
              <p>Просмотр административных аккаунтов и управление ролями</p>
            </div>

            <button
              type="button"
              className={styles.refreshButton}
              onClick={loadAdministrators}
              disabled={loading}
            >
              {loading ? "Загрузка..." : "Обновить"}
            </button>
          </div>

          {successMessage && (
            <div className={styles.successMessage}>{successMessage}</div>
          )}

          {error ? (
            <div className={styles.error}>
              {error}
              <button type="button" onClick={loadAdministrators}>
                Повторить
              </button>
            </div>
          ) : (
            <>
              <div className={styles.toolbar}>
                <input
                  className={styles.search}
                  type="search"
                  placeholder="Поиск по имени или электронной почте"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />

                <span className={styles.resultCount}>
                  Найдено: {filteredAdministrators.length}
                </span>
              </div>

              {isSuperadmin && (
                <div>
                  <button
                    type="button"
                    className={styles.saveButton}
                    onClick={openCandidates}
                  >
                    Назначить администратора
                  </button>
                </div>
              )}

              {loading ? (
                <div className={styles.empty}>Загрузка администраторов...</div>
              ) : filteredAdministrators.length === 0 ? (
                <div className={styles.empty}>Администраторы не найдены.</div>
              ) : (
                <div className={styles.tableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Администратор</th>
                        <th>Телефон</th>
                        <th>Роль</th>
                        <th>Почта</th>
                        <th>Регистрация</th>
                        {isSuperadmin && <th>Действия</th>}
                      </tr>
                    </thead>

                    <tbody>
                      {filteredAdministrators.map((user) => (
                        <tr key={user.id}>
                          <td>
                            <div className={styles.userCell}>
                              <span className={styles.userAvatar}>
                                {(user.firstName ||
                                  user.name ||
                                  user.email ||
                                  "A")[0].toUpperCase()}
                              </span>

                              <span className={styles.userInfo}>
                                <strong>{getFullName(user)}</strong>
                                <small>{user.email}</small>
                              </span>
                            </div>
                          </td>

                          <td>{user.phoneNumber || "—"}</td>

                          <td>
                            <span
                              className={`${styles.role} ${
                                user.role === "superadmin"
                                  ? styles.superadmin
                                  : styles.admin
                              }`}
                            >
                              {roleLabels[user.role] || user.role}
                            </span>
                          </td>

                          <td>
                            <span
                              className={
                                user.emailVerified
                                  ? styles.verified
                                  : styles.unverified
                              }
                            >
                              {user.emailVerified
                                ? "Подтверждена"
                                : "Не подтверждена"}
                            </span>
                          </td>

                          <td className={styles.date}>
                            {formatDate(user.createdAt)}
                          </td>

                          {isSuperadmin && (
                            <td>
                              {user.role === "admin" &&
                                user.id !== currentUser.id && (
                                  <button
                                    type="button"
                                    className={styles.deleteButton}
                                    onClick={() => openRoleConfirmation(user)}
                                  >
                                    Снять роль
                                  </button>
                                )}

                              {user.role === "superadmin" && (
                                <span className={styles.date}>
                                  Защищённый аккаунт
                                </span>
                              )}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}

          <p className={styles.footerNote}>
            Отображаются последние 100 административных аккаунтов.
          </p>
        </section>
      </div>

      {showCandidates && (
        <div
          className={styles.modalOverlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeCandidates();
          }}
        >
          <section
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="candidates-title"
          >
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.eyebrow}>УПРАВЛЕНИЕ РОЛЯМИ</span>
                <h2 id="candidates-title">Назначить администратора</h2>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={closeCandidates}
                disabled={saving}
                aria-label="Закрыть"
              >
                ×
              </button>
            </div>

            <p>Выбери пользователя с подтверждённой электронной почтой.</p>

            <div className={styles.toolbar}>
              <input
                className={styles.search}
                type="search"
                placeholder="Поиск по имени или почте"
                value={candidateSearch}
                onChange={(event) => setCandidateSearch(event.target.value)}
              />
            </div>

            {actionError && (
              <div className={styles.formError}>{actionError}</div>
            )}

            {candidatesLoading ? (
              <div className={styles.empty}>Загрузка пользователей...</div>
            ) : filteredCandidates.length === 0 ? (
              <div className={styles.empty}>
                Нет пользователей, доступных для назначения.
              </div>
            ) : (
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Пользователь</th>
                      <th>Регистрация</th>
                      <th>Действие</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredCandidates.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <div className={styles.userInfo}>
                            <strong>{getFullName(user)}</strong>
                            <small>{user.email}</small>
                          </div>
                        </td>

                        <td className={styles.date}>
                          {formatDate(user.createdAt)}
                        </td>

                        <td>
                          <button
                            type="button"
                            className={styles.editButton}
                            onClick={() => {
                              setShowCandidates(false);
                              openRoleConfirmation(user);
                            }}
                          >
                            Назначить
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={closeCandidates}
                disabled={saving}
              >
                Закрыть
              </button>
            </div>
          </section>
        </div>
      )}

      {roleTarget && (
        <div
          className={styles.modalOverlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeRoleConfirmation();
            }
          }}
        >
          <section
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="role-confirm-title"
          >
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.eyebrow}>ПОДТВЕРЖДЕНИЕ</span>
                <h2 id="role-confirm-title">
                  {roleTarget.role === "user"
                    ? "Назначить администратором?"
                    : "Снять роль администратора?"}
                </h2>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={closeRoleConfirmation}
                disabled={saving}
                aria-label="Закрыть"
              >
                ×
              </button>
            </div>

            <div className={styles.deleteUserInfo}>
              <strong>{getFullName(roleTarget)}</strong>
              <span>{roleTarget.email}</span>
            </div>

            <p>
              {roleTarget.role === "user"
                ? "Пользователь получит доступ к административной панели и возможность редактировать обычные аккаунты."
                : "Пользователь потеряет доступ к административной панели и станет обычным пользователем."}
            </p>

            {actionError && (
              <div className={styles.formError}>{actionError}</div>
            )}

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={closeRoleConfirmation}
                disabled={saving}
              >
                Отмена
              </button>

              <button
                type="button"
                className={styles.saveButton}
                onClick={() =>
                  changeRole(
                    roleTarget,
                    roleTarget.role === "user" ? "admin" : "user",
                  )
                }
                disabled={saving}
              >
                {saving ? "Сохранение..." : "Подтвердить"}
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
