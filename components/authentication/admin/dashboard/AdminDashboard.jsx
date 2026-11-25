import Link from "next/link";
import styles from "./admin-dashboard.module.css";

const statistics = [
  {
    key: "totalUsers",
    label: "Всего пользователей",
  },
  {
    key: "regularUsers",
    label: "Пользователи (роль: user)",
  },
  {
    key: "verifiedUsers",
    label: "Подтвердили почту",
  },
  {
    key: "unverifiedUsers",
    label: "Не подтвердили почту",
  },
  {
    key: "administrators",
    label: "Администраторы (роль: admin)",
  },
  {
    key: "newUsers",
    label: "Новые за 7 дней",
  },
];

export default function AdminDashboard({ stats }) {
  return (
    <main className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h2>Общая статистика</h2>
          <p>Основные показатели платформы SmartÜi.</p>
        </div>
      </div>

      <section className={styles.statistics}>
        {statistics.map((item) => (
          <article className={styles.card} key={item.key}>
            <span className={styles.label}>{item.label}</span>
            <strong className={styles.value}>{stats[item.key] ?? 0}</strong>
          </article>
        ))}
      </section>

      <section className={styles.management}>
        <h2>Управление</h2>
        <Link href="/admin/users" className={styles.managementLink}>
          <span>Пользователи</span>
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
