"use client";

import { useState } from "react";
import { authClient } from "@/lib/client-auth";
import styles from "./settings.module.css";

export default function SettingsPage() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [activeSection, setActiveSection] = useState("security");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [revokeOtherSessions, setRevokeOtherSessions] = useState(true);
  const [showPasswords, setShowPasswords] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  if (isPending) {
    return <main className={styles.page}>Загрузка настроек...</main>;
  }

  if (!user) {
    return <main className={styles.page}>Необходимо войти в аккаунт.</main>;
  }

  const sections = [
    { id: "security", label: "Безопасность", icon: "🛡" },
    { id: "password", label: "Пароль", icon: "🔑" },
    { id: "twoFactor", label: "Двухфакторная защита", icon: "🔐" },
    { id: "sessions", label: "Активные сеансы", icon: "💻" },
    { id: "passkeys", label: "Вход без пароля", icon: "👆" },
  ];

  async function handlePasswordChange(event) {
    event.preventDefault();

    setPasswordError("");
    setPasswordSuccess("");

    if (newPassword.length < 8) {
      setPasswordError("Новый пароль должен содержать не менее 8 символов.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Новые пароли не совпадают.");
      return;
    }

    if (currentPassword === newPassword) {
      setPasswordError("Новый пароль должен отличаться от текущего.");
      return;
    }

    setIsSaving(true);

    try {
      const { error } = await authClient.changePassword({
        currentPassword,
        newPassword,
        revokeOtherSessions,
      });

      if (error) {
        const message = error.message || "";

        if (
          message.toLowerCase().includes("password") ||
          message.toLowerCase().includes("credential")
        ) {
          setPasswordError(
            "Не удалось изменить пароль. Проверьте правильность текущего пароля.",
          );
        } else {
          setPasswordError("Не удалось изменить пароль. Попробуйте ещё раз.");
        }

        return;
      }

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      setPasswordSuccess("Пароль успешно изменён.");
    } catch {
      setPasswordError(
        "Произошла ошибка. Проверьте подключение и попробуйте ещё раз.",
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Настройки аккаунта</h1>
          <p>Управляйте безопасностью и параметрами своего аккаунта SmartÜi.</p>
        </div>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarTitle}>Настройки</div>

            <nav className={styles.navigation}>
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className={`${styles.navItem} ${
                    activeSection === section.id ? styles.active : ""
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <span className={styles.navIcon}>{section.icon}</span>
                  <span>{section.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          <section className={styles.content}>
            {activeSection === "security" && (
              <>
                <h2>Безопасность аккаунта</h2>
                <p className={styles.sectionDescription}>
                  Здесь собраны основные параметры защиты вашего аккаунта.
                </p>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>✉</div>
                  <div className={styles.infoText}>
                    <h3>Электронная почта</h3>
                    <p>{user.email}</p>
                    <span className={styles.status}>Почта подтверждена</span>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>🔐</div>
                  <div className={styles.infoText}>
                    <h3>Двухфакторная аутентификация</h3>
                    <p>
                      {user.twoFactorEnabled
                        ? "Дополнительная защита активирована."
                        : "Дополнительная защита не подключена."}
                    </p>
                    <span
                      className={
                        user.twoFactorEnabled
                          ? styles.status
                          : styles.statusWarning
                      }
                    >
                      {user.twoFactorEnabled ? "Включена" : "Выключена"}
                    </span>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>🔑</div>
                  <div className={styles.infoText}>
                    <h3>Пароль</h3>
                    <p>Изменение пароля и управление доступом к аккаунту.</p>
                  </div>
                </div>
              </>
            )}

            {activeSection === "password" && (
              <>
                <h2>Изменение пароля</h2>
                <p className={styles.sectionDescription}>
                  Для изменения пароля сначала укажите текущий пароль.
                </p>

                <form
                  className={styles.passwordForm}
                  onSubmit={handlePasswordChange}
                >
                  <div className={styles.formField}>
                    <label htmlFor="currentPassword">Текущий пароль</label>
                    <input
                      id="currentPassword"
                      type={showPasswords ? "text" : "password"}
                      autoComplete="current-password"
                      value={currentPassword}
                      onChange={(event) =>
                        setCurrentPassword(event.target.value)
                      }
                      required
                    />
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="newPassword">Новый пароль</label>
                    <input
                      id="newPassword"
                      type={showPasswords ? "text" : "password"}
                      autoComplete="new-password"
                      value={newPassword}
                      onChange={(event) => setNewPassword(event.target.value)}
                      minLength={8}
                      required
                    />
                    <span className={styles.fieldHint}>
                      Не менее 8 символов.
                    </span>
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="confirmPassword">
                      Повторите новый пароль
                    </label>
                    <input
                      id="confirmPassword"
                      type={showPasswords ? "text" : "password"}
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      minLength={8}
                      required
                    />
                  </div>

                  <label className={styles.showPassword}>
                    <input
                      type="checkbox"
                      checked={showPasswords}
                      onChange={(event) =>
                        setShowPasswords(event.target.checked)
                      }
                    />
                    Показать пароли
                  </label>

                  <label className={styles.sessionOption}>
                    <input
                      type="checkbox"
                      checked={revokeOtherSessions}
                      onChange={(event) =>
                        setRevokeOtherSessions(event.target.checked)
                      }
                    />
                    <span>
                      Завершить остальные активные сеансы после смены пароля
                    </span>
                  </label>

                  {passwordError && (
                    <div className={styles.formError} role="alert">
                      {passwordError}
                    </div>
                  )}

                  {passwordSuccess && (
                    <div className={styles.formSuccess} role="status">
                      {passwordSuccess}
                    </div>
                  )}

                  <button
                    className={styles.submitButton}
                    type="submit"
                    disabled={isSaving}
                  >
                    {isSaving ? "Сохранение..." : "Изменить пароль"}
                  </button>
                </form>
              </>
            )}

            {activeSection === "twoFactor" && (
              <>
                <h2>Двухфакторная защита</h2>
                <p className={styles.sectionDescription}>
                  Управление дополнительной проверкой при входе.
                </p>
                <div className={styles.placeholder}>
                  Раздел будет реализован следующим этапом.
                </div>
              </>
            )}

            {activeSection === "sessions" && (
              <>
                <h2>Активные сеансы</h2>
                <p className={styles.sectionDescription}>
                  Просмотр устройств, на которых выполнен вход в аккаунт.
                </p>
                <div className={styles.placeholder}>
                  Раздел будет реализован следующим этапом.
                </div>
              </>
            )}

            {activeSection === "passkeys" && (
              <>
                <h2>Вход без пароля</h2>
                <p className={styles.sectionDescription}>
                  Вход с помощью биометрии, PIN-кода устройства или ключа
                  безопасности.
                </p>
                <div className={styles.placeholder}>
                  Подключение входа без пароля будет реализовано отдельно.
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
