"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./admin-header.module.css";

const roleLabels = {
  admin: "Администратор",
  superadmin: "Главный администратор",
};

const navigation = [
  { label: "Обзор", href: "/admin", icon: "📊" },
  { label: "Пользователи", href: "/admin/users", icon: "👥" },
  {
    label: "Администраторы",
    href: "/admin/administrators",
    icon: "🧑‍💼",
  },
  {
    label: "Журнал действий",
    href: "/admin/activity",
    icon: "📋",
  },
];

export default function AdminHeader({ currentUser }) {
  const pathname = usePathname();

  const displayName = currentUser.name || currentUser.email || "Администратор";

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>SMARTÜI CONTROL PANEL</span>
            <h1>Панель администратора</h1>
            <p>Управление пользователями и аккаунтами платформы SmartÜi.</p>
          </div>

          <div className={styles.currentUser}>
            <span className={styles.avatar}>
              {displayName[0].toUpperCase()}
            </span>

            <span className={styles.userInfo}>
              <strong>{displayName}</strong>
              <small>{roleLabels[currentUser.role] || "Администратор"}</small>
            </span>
          </div>
        </div>

        <nav
          className={styles.navigation}
          aria-label="Навигация администратора"
        >
          {navigation.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
