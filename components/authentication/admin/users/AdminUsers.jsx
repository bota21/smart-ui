"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./admin-users.module.css";

const roleLabels = {
  user: "Пользователь",
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

function UsersTable({ users, emptyText }) {
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

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/users", {
        method: "GET",
        cache: "no-store",
      });

      const data = await response.json();

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
                />
              </section>
            </>
          )}

          <p className={styles.footerNote}>
            Отображаются последние 100 зарегистрированных аккаунтов.
          </p>
        </section>
      </div>
    </main>
  );
}
