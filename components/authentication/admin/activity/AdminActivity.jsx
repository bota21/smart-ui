"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./admin-activity.module.css";

const actionLabels = {
  user_role_assigned: "Назначение администратора",
  user_role_removed: "Снятие роли администратора",
  user_updated: "Редактирование пользователя",
  user_deleted: "Удаление пользователя",
};

const actionFilters = [
  { value: "all", label: "Все действия" },
  { value: "user_role_assigned", label: "Назначение администратора" },
  { value: "user_role_removed", label: "Снятие роли администратора" },
  { value: "user_updated", label: "Редактирование пользователя" },
  { value: "user_deleted", label: "Удаление пользователя" },
];

const fieldLabels = {
  name: "Отображаемое имя",
  firstName: "Имя",
  lastName: "Фамилия",
  phoneNumber: "Телефон",
  address: "Адрес",
};

function formatDate(value) {
  if (!value) return "—";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "—";

  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function getInitial(value) {
  return (value || "A").trim().charAt(0).toUpperCase() || "A";
}

function getActionClass(action) {
  switch (action) {
    case "user_role_assigned":
      return styles.roleAssigned;
    case "user_role_removed":
      return styles.roleRemoved;
    case "user_updated":
      return styles.updated;
    case "user_deleted":
      return styles.deleted;
    default:
      return "";
  }
}

function getActionDescription(activity) {
  switch (activity.action) {
    case "user_role_assigned":
      return "Пользователю назначена роль администратора";
    case "user_role_removed":
      return "У пользователя снята роль администратора";
    case "user_updated": {
      const fields = activity.details?.changedFields || [];
      const labels = fields.map((field) => fieldLabels[field] || field);

      return labels.length
        ? `Изменены поля: ${labels.join(", ")}`
        : "Изменены данные пользователя";
    }
    case "user_deleted":
      return "Аккаунт пользователя удалён";
    default:
      return "Административное действие";
  }
}

function ActivityDetails({ activity }) {
  const details = activity.details || {};

  if (activity.action === "user_role_assigned") {
    return (
      <div className={styles.detailsContent}>
        <span>
          Предыдущая роль: <strong>{details.previousRole || "—"}</strong>
        </span>
        <span>
          Новая роль: <strong>{details.newRole || "—"}</strong>
        </span>
      </div>
    );
  }

  if (activity.action === "user_role_removed") {
    return (
      <div className={styles.detailsContent}>
        <span>
          Предыдущая роль: <strong>{details.previousRole || "admin"}</strong>
        </span>
        <span>
          Новая роль: <strong>{details.newRole || "user"}</strong>
        </span>
      </div>
    );
  }

  if (activity.action === "user_updated") {
    const fields = details.changedFields || [];

    return (
      <div className={styles.detailsContent}>
        <span>Изменённые поля:</span>
        <div className={styles.fieldList}>
          {fields.length > 0 ? (
            fields.map((field) => (
              <span className={styles.fieldTag} key={field}>
                {fieldLabels[field] || field}
              </span>
            ))
          ) : (
            <span>Нет дополнительных сведений</span>
          )}
        </div>
      </div>
    );
  }

  if (activity.action === "user_deleted") {
    return (
      <div className={styles.detailsContent}>
        <span>Удалённый аккаунт: {activity.targetEmail || "—"}</span>
      </div>
    );
  }

  return <span>Дополнительные сведения отсутствуют.</span>;
}

function ActivityTable({ activities, onDetails }) {
  if (activities.length === 0) {
    return (
      <div className={styles.empty}>
        <span className={styles.emptyIcon}>↗</span>
        <strong>Записей не найдено</strong>
        <p>Попробуйте изменить поисковый запрос или фильтр.</p>
      </div>
    );
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Дата и время</th>
            <th>Администратор</th>
            <th>Действие</th>
            <th>Пользователь</th>
            <th>Подробности</th>
          </tr>
        </thead>

        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td className={styles.dateCell}>
                {formatDate(activity.createdAt)}
              </td>

              <td>
                <div className={styles.personCell}>
                  <span className={styles.avatar}>
                    {getInitial(activity.actorName || activity.actorEmail)}
                  </span>
                  <span className={styles.personInfo}>
                    <strong>{activity.actorName || "Администратор"}</strong>
                    <small>{activity.actorEmail}</small>
                  </span>
                </div>
              </td>

              <td>
                <span
                  className={`${styles.actionBadge} ${getActionClass(activity.action)}`}
                >
                  {actionLabels[activity.action] || activity.action}
                </span>
              </td>

              <td>
                <span className={styles.targetEmail}>
                  {activity.targetEmail || "—"}
                </span>
              </td>

              <td>
                <button
                  type="button"
                  className={styles.detailsButton}
                  onClick={() => onDetails(activity)}
                >
                  Подробнее
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AdminActivity() {
  const [activities, setActivities] = useState([]);
  const [search, setSearch] = useState("");
  const [actionFilter, setActionFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedActivity, setSelectedActivity] = useState(null);

  const loadActivities = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/activity", {
        method: "GET",
        cache: "no-store",
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Не удалось загрузить журнал действий.");
      }

      setActivities(data.activities || []);
    } catch (err) {
      setError(err.message || "Произошла ошибка при загрузке журнала.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadActivities();
  }, [loadActivities]);

  const filteredActivities = useMemo(() => {
    const query = search.trim().toLowerCase();

    return activities.filter((activity) => {
      const matchesAction =
        actionFilter === "all" || activity.action === actionFilter;

      const searchableText = [
        activity.actorName,
        activity.actorEmail,
        activity.targetEmail,
        actionLabels[activity.action],
        getActionDescription(activity),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);

      return matchesAction && matchesSearch;
    });
  }, [activities, search, actionFilter]);

  const roleChanges = activities.filter((activity) =>
    ["user_role_assigned", "user_role_removed"].includes(activity.action),
  ).length;

  const profileChanges = activities.filter(
    (activity) => activity.action === "user_updated",
  ).length;

  const deletions = activities.filter(
    (activity) => activity.action === "user_deleted",
  ).length;

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.stats}>
          <article className={styles.statCard}>
            <span className={styles.statIcon}>↗</span>
            <div>
              <p>Всего действий</p>
              <strong>{activities.length}</strong>
            </div>
          </article>

          <article className={styles.statCard}>
            <span className={styles.statIcon}>♙</span>
            <div>
              <p>Изменения ролей</p>
              <strong>{roleChanges}</strong>
            </div>
          </article>

          <article className={styles.statCard}>
            <span className={styles.statIcon}>✎</span>
            <div>
              <p>Редактирование профилей</p>
              <strong>{profileChanges}</strong>
            </div>
          </article>

          <article className={styles.statCard}>
            <span className={styles.statIcon}>⌫</span>
            <div>
              <p>Удаления аккаунтов</p>
              <strong>{deletions}</strong>
            </div>
          </article>
        </section>

        <section className={styles.activitySection}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow}>КОНТРОЛЬ И БЕЗОПАСНОСТЬ</span>
              <h2>Журнал административных действий</h2>
              <p>
                История изменений, выполненных администраторами платформы
                SmartÜi.
              </p>
            </div>

            <button
              type="button"
              className={styles.refreshButton}
              onClick={loadActivities}
              disabled={loading}
            >
              {loading ? "Загрузка..." : "Обновить"}
            </button>
          </div>

          <div className={styles.toolbar}>
            <input
              className={styles.search}
              type="search"
              placeholder="Поиск по администратору или пользователю"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              className={styles.filter}
              value={actionFilter}
              onChange={(event) => setActionFilter(event.target.value)}
              aria-label="Фильтр по типу действия"
            >
              {actionFilters.map((filter) => (
                <option key={filter.value} value={filter.value}>
                  {filter.label}
                </option>
              ))}
            </select>

            <span className={styles.resultCount}>
              Найдено: {filteredActivities.length}
            </span>
          </div>

          {error ? (
            <div className={styles.error}>
              <span>{error}</span>
              <button type="button" onClick={loadActivities}>
                Повторить
              </button>
            </div>
          ) : loading ? (
            <div className={styles.loading}>Загрузка журнала действий...</div>
          ) : (
            <ActivityTable
              activities={filteredActivities}
              onDetails={setSelectedActivity}
            />
          )}

          <p className={styles.footerNote}>
            Отображаются последние 200 административных действий. Журнал
            доступен только для просмотра.
          </p>
        </section>
      </div>

      {selectedActivity && (
        <div
          className={styles.modalOverlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedActivity(null);
            }
          }}
        >
          <section
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="activity-details-title"
          >
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.eyebrow}>ПОДРОБНОСТИ СОБЫТИЯ</span>
                <h2 id="activity-details-title">
                  {actionLabels[selectedActivity.action] ||
                    "Административное действие"}
                </h2>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setSelectedActivity(null)}
                aria-label="Закрыть"
              >
                ×
              </button>
            </div>

            <div className={styles.detailBlock}>
              <span>Дата и время</span>
              <strong>{formatDate(selectedActivity.createdAt)}</strong>
            </div>

            <div className={styles.detailBlock}>
              <span>Администратор</span>
              <strong>{selectedActivity.actorName || "Администратор"}</strong>
              <small>{selectedActivity.actorEmail}</small>
            </div>

            <div className={styles.detailBlock}>
              <span>Затронутый пользователь</span>
              <strong>{selectedActivity.targetEmail || "—"}</strong>
            </div>

            <div className={styles.detailBlock}>
              <span>Описание действия</span>
              <strong>{getActionDescription(selectedActivity)}</strong>
            </div>

            <div className={styles.detailBlock}>
              <span>Дополнительные сведения</span>
              <ActivityDetails activity={selectedActivity} />
            </div>

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.closeModalButton}
                onClick={() => setSelectedActivity(null)}
              >
                Закрыть
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
