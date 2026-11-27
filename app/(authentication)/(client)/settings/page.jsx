"use client";

import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { authClient } from "@/lib/client-auth";
import styles from "./settings.module.css";

import SessionsManager from "./SessionsManager";
import PasskeysManager from "./PasskeysManager";

export default function SettingsPage() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [activeSection, setActiveSection] = useState("security");
  const [passkeysCount, setPasskeysCount] = useState(null);

  // Смена пароля
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [revokeOtherSessions, setRevokeOtherSessions] = useState(true);
  const [showPasswords, setShowPasswords] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  // Двухфакторная защита
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [twoFactorPassword, setTwoFactorPassword] = useState("");
  const [twoFactorCode, setTwoFactorCode] = useState("");
  const [twoFactorUri, setTwoFactorUri] = useState("");
  const [twoFactorLoading, setTwoFactorLoading] = useState(false);
  const [twoFactorError, setTwoFactorError] = useState("");
  const [twoFactorSuccess, setTwoFactorSuccess] = useState("");

  // Отключение 2FA
  const [disablePassword, setDisablePassword] = useState("");
  const [disableLoading, setDisableLoading] = useState(false);
  const [disableError, setDisableError] = useState("");

  // Резервные коды
  const [backupPassword, setBackupPassword] = useState("");
  const [backupCodes, setBackupCodes] = useState([]);
  const [backupCodesSaved, setBackupCodesSaved] = useState(false);
  const [backupLoading, setBackupLoading] = useState(false);
  const [backupError, setBackupError] = useState("");
  const [backupSuccess, setBackupSuccess] = useState("");

  useEffect(() => {
    setTwoFactorEnabled(Boolean(user?.twoFactorEnabled));
  }, [user?.twoFactorEnabled]);

  useEffect(() => {
    if (!user?.id) return;

    let isMounted = true;

    async function loadPasskeysCount() {
      try {
        const { data, error } = await authClient.passkey.listUserPasskeys();

        if (!isMounted || error) return;

        setPasskeysCount(Array.isArray(data) ? data.length : 0);
      } catch {
        if (isMounted) {
          setPasskeysCount(null);
        }
      }
    }

    loadPasskeysCount();

    return () => {
      isMounted = false;
    };
  }, [user?.id]);

  if (isPending) {
    return <main className={styles.page}>Загрузка настроек...</main>;
  }

  if (!user) {
    return <main className={styles.page}>Необходимо войти в аккаунт.</main>;
  }

  const sections = [
    { id: "security", label: "Безопасность", icon: "security" },
    { id: "password", label: "Пароль", icon: "password" },
    { id: "twoFactor", label: "Двухфакторная защита", icon: "2fa" },
    { id: "sessions", label: "Активные сеансы", icon: "computer" },
    { id: "passkeys", label: "Вход без пароля", icon: "fingerprint" },
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

  async function handleEnableTwoFactor(event) {
    event.preventDefault();

    setTwoFactorError("");
    setTwoFactorSuccess("");
    setTwoFactorLoading(true);

    try {
      const { data, error } = await authClient.twoFactor.enable({
        password: twoFactorPassword,
        method: "totp",
      });

      if (error) {
        setTwoFactorError(
          error.message ||
            "Не удалось подключить двухфакторную защиту. Проверьте пароль.",
        );
        return;
      }

      if (!data?.totpURI || !Array.isArray(data?.backupCodes)) {
        setTwoFactorError("Сервер вернул неполные данные. Попробуйте ещё раз.");
        return;
      }

      setTwoFactorUri(data.totpURI);
      setBackupCodes(data.backupCodes);
      setBackupCodesSaved(false);
      setTwoFactorCode("");
      setTwoFactorPassword("");
    } catch {
      setTwoFactorError(
        "Не удалось подключить двухфакторную защиту. Попробуйте ещё раз.",
      );
    } finally {
      setTwoFactorLoading(false);
    }
  }

  async function handleVerifyTwoFactor(event) {
    event.preventDefault();

    setTwoFactorError("");
    setTwoFactorSuccess("");

    if (!/^\d{6}$/.test(twoFactorCode)) {
      setTwoFactorError("Введите шестизначный код из приложения.");
      return;
    }

    setTwoFactorLoading(true);

    try {
      const { error } = await authClient.twoFactor.verifyTotp({
        code: twoFactorCode,
      });

      if (error) {
        setTwoFactorError(
          error.message ||
            "Код не подошёл. Проверьте его и попробуйте ещё раз.",
        );
        return;
      }

      setTwoFactorEnabled(true);
      setTwoFactorUri("");
      setTwoFactorCode("");
      setTwoFactorSuccess(
        "Двухфакторная защита подключена. Сохраните резервные коды ниже.",
      );
    } catch {
      setTwoFactorError("Не удалось подтвердить код. Попробуйте ещё раз.");
    } finally {
      setTwoFactorLoading(false);
    }
  }

  async function handleDisableTwoFactor(event) {
    event.preventDefault();

    setDisableError("");
    setTwoFactorSuccess("");
    setDisableLoading(true);

    try {
      const { error } = await authClient.twoFactor.disable({
        password: disablePassword,
      });

      if (error) {
        setDisableError(
          error.message ||
            "Не удалось отключить защиту. Проверьте правильность пароля.",
        );
        return;
      }

      setTwoFactorEnabled(false);
      setDisablePassword("");
      setBackupCodes([]);
      setBackupCodesSaved(false);
      setBackupPassword("");
      setTwoFactorSuccess("Двухфакторная защита отключена.");
    } catch {
      setDisableError("Не удалось отключить защиту. Попробуйте ещё раз.");
    } finally {
      setDisableLoading(false);
    }
  }

  async function handleRegenerateBackupCodes(event) {
    event.preventDefault();

    setBackupError("");
    setBackupSuccess("");
    setBackupLoading(true);

    try {
      const { data, error } = await authClient.twoFactor.generateBackupCodes({
        password: backupPassword,
      });

      if (error) {
        setBackupError(
          error.message ||
            "Не удалось создать новые резервные коды. Проверьте пароль.",
        );
        return;
      }

      if (!Array.isArray(data?.backupCodes) || data.backupCodes.length === 0) {
        setBackupError(
          "Не удалось получить резервные коды. Попробуйте ещё раз.",
        );
        return;
      }

      setBackupCodes(data.backupCodes);
      setBackupCodesSaved(false);
      setBackupPassword("");
      setBackupSuccess(
        "Созданы новые резервные коды. Предыдущие коды больше не действуют.",
      );
    } catch {
      setBackupError("Не удалось создать резервные коды. Попробуйте ещё раз.");
    } finally {
      setBackupLoading(false);
    }
  }

  function handleConfirmBackupCodesSaved() {
    setBackupCodes([]);
    setBackupCodesSaved(false);
    setBackupSuccess("Резервные коды скрыты. Храните их в надёжном месте.");
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
                  <img
                    src={`/assets/icons/${section.icon}.svg`}
                    className={styles.navIcon}
                  />
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
                  <div className={styles.infoIcon}>
                    {" "}
                    <img
                      src="/assets/icons/email.svg"
                      className={styles.navIcon}
                    />
                  </div>
                  <div className={styles.infoText}>
                    <h3>Электронная почта</h3>
                    <p>{user.email}</p>
                    <span
                      className={
                        user.emailVerified
                          ? styles.status
                          : styles.statusWarning
                      }
                    >
                      {user.emailVerified
                        ? "Почта подтверждена"
                        : "Почта не подтверждена"}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className={`${styles.infoCard} ${styles.infoCardAction}`}
                  onClick={() => setActiveSection("twoFactor")}
                >
                  <div className={styles.infoIcon}>
                    {" "}
                    <img
                      src="/assets/icons/2fa.svg"
                      className={styles.navIcon}
                    />
                  </div>
                  <div className={styles.infoText}>
                    <h3>Двухфакторная аутентификация</h3>
                    <p>
                      {twoFactorEnabled
                        ? "Дополнительная защита активирована."
                        : "Дополнительная защита не подключена."}
                    </p>
                    <span
                      className={
                        twoFactorEnabled ? styles.status : styles.statusWarning
                      }
                    >
                      {twoFactorEnabled ? "Включена" : "Выключена"}
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`${styles.infoCard} ${styles.infoCardAction}`}
                  onClick={() => setActiveSection("passkeys")}
                >
                  <div className={styles.infoIcon}>
                    {" "}
                    <img
                      src="/assets/icons/fingerprint.svg"
                      className={styles.navIcon}
                    />
                  </div>
                  <div className={styles.infoText}>
                    <h3>Вход без пароля</h3>
                    <p>
                      {passkeysCount === null
                        ? "Проверяем подключённые ключи доступа..."
                        : passkeysCount > 0
                          ? `Зарегистрировано ключей доступа: ${passkeysCount}.`
                          : "Ключи доступа пока не подключены."}
                    </p>
                    <span
                      className={
                        passkeysCount === null
                          ? styles.statusWarning
                          : passkeysCount > 0
                            ? styles.status
                            : styles.statusWarning
                      }
                    >
                      {passkeysCount === null
                        ? "Статус не определён"
                        : passkeysCount > 0
                          ? "Подключено"
                          : "Не подключено"}
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`${styles.infoCard} ${styles.infoCardAction}`}
                  onClick={() => setActiveSection("password")}
                >
                  <div className={styles.infoIcon}>
                    {" "}
                    <img
                      src="/assets/icons/password.svg"
                      className={styles.navIcon}
                    />
                  </div>
                  <div className={styles.infoText}>
                    <h3>Пароль</h3>
                    <p>Изменение пароля и управление доступом к аккаунту.</p>
                    <span className={styles.status}>
                      Перейти к изменению пароля
                    </span>
                  </div>
                </button>
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
                  Дополнительная проверка при входе защищает аккаунт, даже если
                  кто-то узнает ваш пароль.
                </p>

                <div className={styles.twoFactorStatus}>
                  <span className={styles.twoFactorStatusIcon}>
                    <img
                      src="/assets/icons/2fa.svg"
                      className={styles.navIcon}
                    />
                  </span>
                  <div>
                    <strong>
                      {twoFactorEnabled
                        ? "Защита включена"
                        : "Защита выключена"}
                    </strong>
                    <p>
                      {twoFactorEnabled
                        ? "Для входа требуется дополнительный код из приложения-аутентификатора."
                        : "Подключите приложение-аутентификатор для дополнительной защиты."}
                    </p>
                  </div>
                  <span
                    className={
                      twoFactorEnabled ? styles.status : styles.statusWarning
                    }
                  >
                    {twoFactorEnabled ? "Активна" : "Не активна"}
                  </span>
                </div>

                {!twoFactorEnabled && !twoFactorUri && (
                  <div className={styles.twoFactorPanel}>
                    <h3>Подключение двухфакторной защиты</h3>
                    <p>
                      Введите пароль от аккаунта. Затем мы покажем QR-код,
                      который нужно будет отсканировать
                      приложением-аутентификатором.
                    </p>

                    <form
                      className={styles.twoFactorForm}
                      onSubmit={handleEnableTwoFactor}
                    >
                      <div className={styles.formField}>
                        <label htmlFor="twoFactorPassword">
                          Текущий пароль
                        </label>
                        <input
                          id="twoFactorPassword"
                          type="password"
                          autoComplete="current-password"
                          value={twoFactorPassword}
                          onChange={(event) =>
                            setTwoFactorPassword(event.target.value)
                          }
                          required
                        />
                      </div>

                      {twoFactorError && (
                        <div className={styles.formError} role="alert">
                          {twoFactorError}
                        </div>
                      )}

                      <button
                        className={styles.submitButton}
                        type="submit"
                        disabled={twoFactorLoading}
                      >
                        {twoFactorLoading ? "Подготовка..." : "Продолжить"}
                      </button>
                    </form>
                  </div>
                )}

                {!twoFactorEnabled && twoFactorUri && (
                  <div className={styles.twoFactorPanel}>
                    <h3>Шаг 1. Отсканируйте QR-код</h3>
                    <p>
                      Откройте приложение-аутентификатор на телефоне и
                      отсканируйте этот QR-код.
                    </p>

                    <div className={styles.qrContainer}>
                      <QRCode value={twoFactorUri} size={200} />
                    </div>

                    <h3>Шаг 2. Подтвердите подключение</h3>
                    <p>
                      Введите шестизначный код, который отображается в
                      приложении.
                    </p>

                    <form
                      className={styles.twoFactorForm}
                      onSubmit={handleVerifyTwoFactor}
                    >
                      <div className={styles.formField}>
                        <label htmlFor="twoFactorCode">Код из приложения</label>
                        <input
                          id="twoFactorCode"
                          type="text"
                          inputMode="numeric"
                          autoComplete="one-time-code"
                          maxLength={6}
                          placeholder="000000"
                          value={twoFactorCode}
                          onChange={(event) =>
                            setTwoFactorCode(
                              event.target.value.replace(/\D/g, "").slice(0, 6),
                            )
                          }
                          required
                        />
                      </div>

                      {twoFactorError && (
                        <div className={styles.formError} role="alert">
                          {twoFactorError}
                        </div>
                      )}

                      <button
                        className={styles.submitButton}
                        type="submit"
                        disabled={
                          twoFactorLoading || twoFactorCode.length !== 6
                        }
                      >
                        {twoFactorLoading
                          ? "Проверка..."
                          : "Подтвердить и включить"}
                      </button>
                    </form>
                  </div>
                )}

                {twoFactorEnabled && (
                  <>
                    <div className={styles.twoFactorPanel}>
                      <h3>Резервные коды</h3>
                      <p>
                        Резервные коды позволяют войти в аккаунт, если у вас нет
                        доступа к приложению-аутентификатору. Каждый код можно
                        использовать только один раз.
                      </p>

                      {!backupCodes.length && (
                        <form
                          className={styles.twoFactorForm}
                          onSubmit={handleRegenerateBackupCodes}
                        >
                          <div className={styles.formField}>
                            <label htmlFor="backupPassword">
                              Подтвердите пароль
                            </label>
                            <input
                              id="backupPassword"
                              type="password"
                              autoComplete="current-password"
                              value={backupPassword}
                              onChange={(event) =>
                                setBackupPassword(event.target.value)
                              }
                              required
                            />
                          </div>

                          {backupError && (
                            <div className={styles.formError} role="alert">
                              {backupError}
                            </div>
                          )}

                          {backupSuccess && (
                            <div className={styles.formSuccess} role="status">
                              {backupSuccess}
                            </div>
                          )}

                          <button
                            className={styles.secondaryButton}
                            type="submit"
                            disabled={backupLoading}
                          >
                            {backupLoading
                              ? "Создание кодов..."
                              : "Создать новые резервные коды"}
                          </button>
                        </form>
                      )}

                      {backupCodes.length > 0 && (
                        <div className={styles.backupCodesBlock}>
                          <div className={styles.backupWarning}>
                            Сохраните эти коды сейчас. После закрытия этого
                            блока посмотреть их повторно будет невозможно. При
                            перевыпуске старые коды уже недействительны.
                          </div>

                          <div className={styles.backupCodesGrid}>
                            {backupCodes.map((code, index) => (
                              <code
                                className={styles.backupCode}
                                key={`${code}-${index}`}
                              >
                                {code}
                              </code>
                            ))}
                          </div>

                          <label className={styles.confirmCodes}>
                            <input
                              type="checkbox"
                              checked={backupCodesSaved}
                              onChange={(event) =>
                                setBackupCodesSaved(event.target.checked)
                              }
                            />
                            <span>
                              Я сохранила резервные коды в надёжном месте
                            </span>
                          </label>

                          <button
                            className={styles.submitButton}
                            type="button"
                            disabled={!backupCodesSaved}
                            onClick={handleConfirmBackupCodesSaved}
                          >
                            Готово, я сохранила коды
                          </button>
                        </div>
                      )}
                    </div>

                    <div className={styles.twoFactorPanel}>
                      <h3>Отключение двухфакторной защиты</h3>
                      <p>
                        Для отключения дополнительной защиты потребуется
                        подтвердить текущий пароль.
                      </p>

                      <form
                        className={styles.twoFactorForm}
                        onSubmit={handleDisableTwoFactor}
                      >
                        <div className={styles.formField}>
                          <label htmlFor="disablePassword">
                            Текущий пароль
                          </label>
                          <input
                            id="disablePassword"
                            type="password"
                            autoComplete="current-password"
                            value={disablePassword}
                            onChange={(event) =>
                              setDisablePassword(event.target.value)
                            }
                            required
                          />
                        </div>

                        {disableError && (
                          <div className={styles.formError} role="alert">
                            {disableError}
                          </div>
                        )}

                        <button
                          className={styles.dangerButton}
                          type="submit"
                          disabled={disableLoading}
                        >
                          {disableLoading
                            ? "Отключение..."
                            : "Отключить двухфакторную защиту"}
                        </button>
                      </form>
                    </div>
                  </>
                )}

                {twoFactorSuccess && (
                  <div className={styles.formSuccess} role="status">
                    {twoFactorSuccess}
                  </div>
                )}
              </>
            )}

            {activeSection === "sessions" && (
              <>
                <h2>Активные сеансы</h2>
                <p className={styles.sectionDescription}>
                  Просмотр устройств, на которых выполнен вход в аккаунт.
                </p>
                <SessionsManager />
              </>
            )}

            {activeSection === "passkeys" && (
              <>
                <h2>Вход без пароля</h2>
                <p className={styles.sectionDescription}>
                  Вход с помощью биометрии, PIN-кода устройства или ключа
                  безопасности.
                </p>
                <PasskeysManager />
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
