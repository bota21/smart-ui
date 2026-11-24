"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./admin-users.module.css";

const roleLabels = {
  user: "Пользователь",
  admin: "Администратор",
  superadmin: "Главный администратор",
};

const emptyForm = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
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

function UsersTable({
  users,
  emptyText,
  onEdit,
  onDelete,
  canDelete,
  currentUserId,
  currentUserRole,
  onChangeRole,
  canChangeRole,
}) {
  if (users.length === 0) {
    return <div className={styles.empty}>{emptyText}</div>;
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Пользователь</th>
            <th>Телефон</th>
            <th>Роль</th>
            <th>Почта</th>
            <th>Регистрация</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.userCell}>
                  <span className={styles.userAvatar}>
                    {(user.firstName ||
                      user.name ||
                      user.email ||
                      "U")[0].toUpperCase()}
                  </span>

                  <span className={styles.userInfo}>
                    <strong>
                      {[user.firstName, user.lastName]
                        .filter(Boolean)
                        .join(" ") ||
                        user.name ||
                        "Без имени"}
                    </strong>
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
                      : user.role === "admin"
                        ? styles.admin
                        : styles.user
                  }`}
                >
                  {roleLabels[user.role] || user.role}
                </span>
              </td>

              <td>
                <span
                  className={
                    user.emailVerified ? styles.verified : styles.unverified
                  }
                >
                  {user.emailVerified ? "Подтверждена" : "Не подтверждена"}
                </span>
              </td>

              <td className={styles.date}>{formatDate(user.createdAt)}</td>

              <td>
                <div className={styles.actions}>
                  {(currentUserRole === "superadmin" ||
                    user.role === "user") && (
                    <button
                      type="button"
                      className={styles.editButton}
                      onClick={() => onEdit(user)}
                    >
                      Редактировать
                    </button>
                  )}

                  {canChangeRole &&
                    user.id !== currentUserId &&
                    user.role !== "superadmin" &&
                    user.emailVerified && (
                      <button
                        type="button"
                        className={styles.editButton}
                        onClick={() => onChangeRole(user)}
                      >
                        {user.role === "user"
                          ? "Назначить админом"
                          : "Снять роль"}
                      </button>
                    )}

                  {canDelete &&
                    user.id !== currentUserId &&
                    user.role !== "superadmin" && (
                      <button
                        type="button"
                        className={styles.deleteButton}
                        onClick={() => onDelete(user)}
                      >
                        Удалить
                      </button>
                    )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AdminUsers({ currentUser }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [deleteError, setDeleteError] = useState("");
  const [deletingUser, setDeletingUser] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [roleTarget, setRoleTarget] = useState(null);
  const [roleSaving, setRoleSaving] = useState(false);
  const [roleError, setRoleError] = useState("");

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/users", {
        method: "GET",
        cache: "no-store",
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Не удалось загрузить пользователей.");
      }

      setUsers(data.users || []);
    } catch (err) {
      setError(err.message || "Произошла ошибка при загрузке.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return users;

    return users.filter((user) => {
      const fullName = [user.firstName, user.lastName, user.name]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        fullName.includes(query) ||
        (user.email || "").toLowerCase().includes(query)
      );
    });
  }, [users, search]);

  const regularUsers = filteredUsers.filter((user) => user.role === "user");

  const administrators = filteredUsers.filter((user) =>
    ["admin", "superadmin"].includes(user.role),
  );

  const regularUsersCount = users.filter((user) => user.role === "user").length;

  const administratorsCount = users.filter((user) =>
    ["admin", "superadmin"].includes(user.role),
  ).length;

  function openEditor(user) {
    setEditingUser(user);
    setForm({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      phoneNumber: user.phoneNumber || "",
      address: user.address || "",
    });
    setFormError("");
    setSuccessMessage("");
  }

  function closeEditor() {
    if (saving) return;

    setEditingUser(null);
    setForm(emptyForm);
    setFormError("");
  }

  function updateField(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function saveUser(event) {
    event.preventDefault();

    if (!editingUser || saving) return;

    setSaving(true);
    setFormError("");

    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();

    try {
      const response = await fetch(
        `/api/admin/users/${encodeURIComponent(editingUser.id)}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            name: [firstName, lastName].filter(Boolean).join(" "),
            phoneNumber: form.phoneNumber.trim(),
            address: form.address.trim(),
          }),
        },
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Не удалось сохранить изменения.");
      }

      setUsers((previous) =>
        previous.map((user) =>
          user.id === editingUser.id ? { ...user, ...data.user } : user,
        ),
      );

      setEditingUser(null);
      setForm(emptyForm);
      setSuccessMessage("Данные пользователя успешно обновлены.");

      setTimeout(() => setSuccessMessage(""), 4000);
    } catch (err) {
      setFormError(err.message || "Произошла ошибка при сохранении.");
    } finally {
      setSaving(false);
    }
  }

  function openDeleteConfirmation(user) {
    setDeleteError("");
    setDeletingUser(user);
  }

  function closeDeleteConfirmation() {
    if (deleting) return;

    setDeletingUser(null);
    setDeleteError("");
  }

  async function confirmDeleteUser() {
    if (!deletingUser || deleting) return;

    setDeleting(true);
    setDeleteError("");
    setSuccessMessage("");

    try {
      const response = await fetch(
        `/api/admin/users/${encodeURIComponent(deletingUser.id)}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Не удалось удалить пользователя.");
      }

      setUsers((previous) =>
        previous.filter((item) => item.id !== deletingUser.id),
      );

      setDeletingUser(null);
      setSuccessMessage("Пользователь успешно удалён.");

      setTimeout(() => setSuccessMessage(""), 4000);
    } catch (err) {
      setDeleteError(err.message || "Ошибка при удалении пользователя.");
    } finally {
      setDeleting(false);
    }
  }

  function openRoleConfirmation(user) {
    setRoleError("");
    setSuccessMessage("");
    setRoleTarget(user);
  }

  function closeRoleConfirmation() {
    if (roleSaving) return;

    setRoleTarget(null);
    setRoleError("");
  }

  async function confirmRoleChange() {
    if (!roleTarget || roleSaving) return;

    const nextRole = roleTarget.role === "user" ? "admin" : "user";

    setRoleSaving(true);
    setRoleError("");
    setSuccessMessage("");

    try {
      const response = await fetch(
        `/api/admin/users/${encodeURIComponent(roleTarget.id)}/role`,
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

      setUsers((previous) =>
        previous.map((user) =>
          user.id === roleTarget.id ? { ...user, ...data.user } : user,
        ),
      );

      setRoleTarget(null);
      setSuccessMessage("Роль пользователя успешно обновлена.");

      setTimeout(() => setSuccessMessage(""), 4000);
    } catch (err) {
      setRoleError(err.message || "Ошибка при изменении роли.");
    } finally {
      setRoleSaving(false);
    }
  }

  const nextRoleLabel =
    roleTarget?.role === "user" ? "Администратор" : "Пользователь";

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>SMARTÜI CONTROL PANEL</span>
            <h1>Панель администратора</h1>
            <p>Управление пользователями и аккаунтами платформы SmartÜi.</p>
          </div>

          <div className={styles.currentUser}>
            <span className={styles.avatar}>
              {(currentUser.name || currentUser.email || "A")[0].toUpperCase()}
            </span>
            <span className={styles.currentUserInfo}>
              <strong>{currentUser.name || currentUser.email}</strong>
              <small>{roleLabels[currentUser.role]}</small>
            </span>
          </div>
        </header>

        <section className={styles.stats}>
          <article className={styles.statCard}>
            <span>Всего пользователей</span>
            <strong>{users.length}</strong>
          </article>

          <article className={styles.statCard}>
            <span>Обычных пользователей</span>
            <strong>{regularUsersCount}</strong>
          </article>

          <article className={styles.statCard}>
            <span>Администраторов</span>
            <strong>{administratorsCount}</strong>
          </article>
        </section>

        <section className={styles.usersSection}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>Управление аккаунтами</h2>
              <p>Поиск по имени или электронной почте</p>
            </div>

            <button
              type="button"
              className={styles.refreshButton}
              onClick={loadUsers}
              disabled={loading}
            >
              {loading ? "Загрузка..." : "Обновить"}
            </button>
          </div>

          <div className={styles.toolbar}>
            <input
              className={styles.search}
              type="search"
              placeholder="Поиск по имени или электронной почте"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <span className={styles.resultCount}>
              Найдено: {filteredUsers.length}
            </span>
          </div>

          {successMessage && (
            <div className={styles.successMessage}>{successMessage}</div>
          )}

          {deleteError && <div className={styles.error}>{deleteError}</div>}

          {error ? (
            <div className={styles.error}>
              {error}
              <button type="button" onClick={loadUsers}>
                Повторить
              </button>
            </div>
          ) : loading ? (
            <div className={styles.empty}>Загрузка пользователей...</div>
          ) : (
            <>
              <section className={styles.tableSection}>
                <div className={styles.tableSectionHeader}>
                  <h3>Администраторы</h3>
                  <span>{administrators.length}</span>
                </div>

                <UsersTable
                  users={administrators}
                  emptyText="Администраторы не найдены."
                  onEdit={openEditor}
                  onDelete={openDeleteConfirmation}
                  onChangeRole={openRoleConfirmation}
                  canDelete={currentUser.role === "superadmin"}
                  canChangeRole={currentUser.role === "superadmin"}
                  currentUserId={currentUser.id}
                  currentUserRole={currentUser.role}
                />
              </section>

              <section className={styles.tableSection}>
                <div className={styles.tableSectionHeader}>
                  <h3>Пользователи</h3>
                  <span>{regularUsers.length}</span>
                </div>

                <UsersTable
                  users={regularUsers}
                  emptyText="Пользователи не найдены."
                  onEdit={openEditor}
                  onDelete={openDeleteConfirmation}
                  onChangeRole={openRoleConfirmation}
                  canDelete={currentUser.role === "superadmin"}
                  canChangeRole={currentUser.role === "superadmin"}
                  currentUserId={currentUser.id}
                  currentUserRole={currentUser.role}
                />
              </section>
            </>
          )}

          <p className={styles.footerNote}>
            Отображаются последние 100 зарегистрированных аккаунтов.
          </p>
        </section>
      </div>

      {editingUser && (
        <div
          className={styles.modalOverlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeEditor();
          }}
        >
          <section
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-user-title"
          >
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.eyebrow}>УПРАВЛЕНИЕ АККАУНТОМ</span>
                <h2 id="edit-user-title">Редактирование пользователя</h2>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={closeEditor}
                disabled={saving}
                aria-label="Закрыть"
              >
                ×
              </button>
            </div>

            <div className={styles.readOnlyInfo}>
              <span>Электронная почта</span>
              <strong>{editingUser.email}</strong>
              <span>Роль</span>
              <strong>
                {roleLabels[editingUser.role] || editingUser.role}
              </strong>
            </div>

            <form className={styles.editForm} onSubmit={saveUser}>
              <label>
                Имя
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={updateField}
                  maxLength={100}
                />
              </label>

              <label>
                Фамилия
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={updateField}
                  maxLength={100}
                />
              </label>

              <label>
                Телефон
                <input
                  name="phoneNumber"
                  type="tel"
                  value={form.phoneNumber}
                  onChange={updateField}
                  maxLength={30}
                />
              </label>

              <label>
                Адрес
                <textarea
                  name="address"
                  value={form.address}
                  onChange={updateField}
                  rows={3}
                  maxLength={500}
                />
              </label>

              {formError && <div className={styles.formError}>{formError}</div>}

              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={closeEditor}
                  disabled={saving}
                >
                  Отмена
                </button>

                <button
                  type="submit"
                  className={styles.saveButton}
                  disabled={saving}
                >
                  {saving ? "Сохранение..." : "Сохранить изменения"}
                </button>
              </div>
            </form>
          </section>
        </div>
      )}

      {deletingUser && (
        <div
          className={styles.modalOverlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeDeleteConfirmation();
            }
          }}
        >
          <section
            className={`${styles.modal} ${styles.deleteModal}`}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-user-title"
            aria-describedby="delete-user-description"
          >
            <div className={styles.deleteIcon}>!</div>

            <div className={styles.deleteContent}>
              <span className={styles.eyebrow}>УДАЛЕНИЕ АККАУНТА</span>

              <h2 id="delete-user-title">Удалить пользователя?</h2>

              <p id="delete-user-description">
                Ты собираешься удалить аккаунт:
              </p>

              <div className={styles.deleteUserInfo}>
                <strong>
                  {[deletingUser.firstName, deletingUser.lastName]
                    .filter(Boolean)
                    .join(" ") ||
                    deletingUser.name ||
                    "Без имени"}
                </strong>

                <span>{deletingUser.email}</span>
              </div>

              <p className={styles.deleteWarning}>
                Это действие нельзя отменить. Данные аккаунта, связанные сессии
                и способы аутентификации будут удалены.
              </p>
            </div>

            {deleteError && (
              <div className={styles.formError}>{deleteError}</div>
            )}

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={closeDeleteConfirmation}
                disabled={deleting}
              >
                Отмена
              </button>

              <button
                type="button"
                className={styles.confirmDeleteButton}
                onClick={confirmDeleteUser}
                disabled={deleting}
              >
                {deleting ? "Удаление..." : "Да, удалить"}
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
            aria-labelledby="change-role-title"
          >
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.eyebrow}>УПРАВЛЕНИЕ РОЛЯМИ</span>
                <h2 id="change-role-title">Изменить роль пользователя?</h2>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={closeRoleConfirmation}
                disabled={roleSaving}
                aria-label="Закрыть"
              >
                ×
              </button>
            </div>

            <div className={styles.deleteUserInfo}>
              <strong>
                {[roleTarget.firstName, roleTarget.lastName]
                  .filter(Boolean)
                  .join(" ") ||
                  roleTarget.name ||
                  "Без имени"}
              </strong>
              <span>{roleTarget.email}</span>
            </div>

            <div className={styles.readOnlyInfo}>
              <span>Текущая роль</span>
              <strong>{roleLabels[roleTarget.role]}</strong>
              <span>Новая роль</span>
              <strong>{nextRoleLabel}</strong>
            </div>

            <p>
              {roleTarget.role === "user"
                ? "Пользователь получит доступ к административной панели и возможность редактировать обычные аккаунты."
                : "Пользователь потеряет доступ к административной панели и станет обычным пользователем."}
            </p>

            {roleError && <div className={styles.formError}>{roleError}</div>}

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={closeRoleConfirmation}
                disabled={roleSaving}
              >
                Отмена
              </button>

              <button
                type="button"
                className={styles.saveButton}
                onClick={confirmRoleChange}
                disabled={roleSaving}
              >
                {roleSaving ? "Сохранение..." : "Подтвердить"}
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
