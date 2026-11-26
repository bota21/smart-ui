"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { authClient } from "@/lib/client-auth";
import styles from "./user-menu.module.css";

const languages = [
  { code: "ru", label: "Русский" },
  { code: "kz", label: "Қазақша" },
  { code: "en", label: "English" },
];

export default function Header({ children }) {
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const userMenuRef = useRef(null);
  const languageMenuRef = useRef(null);
  const router = useRouter();

  const { t, setLang, lang } = useLanguage();
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  const userRole = user?.role;
  const canAccessAdmin = ["admin", "superadmin"].includes(userRole);

  const currentLanguage =
    languages.find((language) => language.code === lang) || languages[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }

      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target)
      ) {
        setLanguageMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setUserMenuOpen(false);
        setLanguageMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleLanguageChange(language) {
    setLang(language);
    setLanguageMenuOpen(false);
  }

  async function handleLogout() {
    if (loggingOut) return;

    setLoggingOut(true);

    try {
      await authClient.signOut();

      setUserMenuOpen(false);
      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoggingOut(false);
    }
  }

  const userName = user?.name || user?.email || "Пользователь";
  const userEmail = user?.email || "";

  const initials = userName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  return (
    <>
      <header>
        <div className="menu_logo_wrapper">
          <div
            className={`burger-menu ${open ? "active" : ""}`}
            onClick={() => setOpen((value) => !value)}
            aria-label="Открыть меню"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </div>

          <nav className={`mobile-menu ${open ? "active" : ""}`}>
            <Link href="/" onClick={() => setOpen(false)}>
              {t("menu_main")}
            </Link>

            <Link href="/catalog" onClick={() => setOpen(false)}>
              {t("menu_catalog")}
            </Link>

            <Link href="/packages" onClick={() => setOpen(false)}>
              {t("menu_packages")}
            </Link>

            <Link href="/services" onClick={() => setOpen(false)}>
              {t("menu_services")}
            </Link>

            <Link href="/portfolio" onClick={() => setOpen(false)}>
              {t("menu_portfolio")}
            </Link>
          </nav>
        </div>

        <div className={styles.headerActions}>
          <div className={styles.languageMenu} ref={languageMenuRef}>
            <button
              type="button"
              className={styles.languageButton}
              onClick={() => setLanguageMenuOpen((value) => !value)}
              aria-expanded={languageMenuOpen}
              aria-haspopup="true"
              aria-label={`Текущий язык: ${currentLanguage.label}`}
            >
              <span>{currentLanguage.code.toUpperCase()}</span>

              <svg
                className={`${styles.languageChevron} ${
                  languageMenuOpen ? styles.languageChevronOpen : ""
                }`}
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="m5 7.5 5 5 5-5" />
              </svg>
            </button>

            {languageMenuOpen && (
              <div className={styles.languageDropdown}>
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    className={`${styles.languageOption} ${
                      lang === language.code ? styles.languageOptionActive : ""
                    }`}
                    onClick={() => handleLanguageChange(language.code)}
                    aria-current={lang === language.code ? "true" : undefined}
                  >
                    <span>{language.label}</span>
                    <span className={styles.languageCode}>
                      {language.code.toUpperCase()}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {!isPending && (
            <div className={styles.userMenu} ref={userMenuRef}>
              {user ? (
                <>
                  <button
                    type="button"
                    className={styles.userButton}
                    onClick={() => setUserMenuOpen((value) => !value)}
                    aria-expanded={userMenuOpen}
                  >
                    <span className={styles.avatar}>{initials || "U"}</span>

                    <span className={styles.userButtonName}>{userName}</span>

                    <svg
                      className={`${styles.chevron} ${
                        userMenuOpen ? styles.chevronOpen : ""
                      }`}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="m5 7.5 5 5 5-5" />
                    </svg>
                  </button>

                  {userMenuOpen && (
                    <div className={styles.dropdown}>
                      <div className={styles.dropdownUser}>
                        <strong>{userName}</strong>
                        <span>{userEmail}</span>
                      </div>

                      <div className={styles.divider} />

                      <Link
                        href="/profile"
                        className={styles.dropdownLink}
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <span className={styles.menuIcon}>👤</span>
                        {t("personal_account")}
                      </Link>

                      <Link
                        href="/settings"
                        className={styles.dropdownLink}
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <span className={styles.menuIcon}>⚙️</span>
                        {t("settings")}
                      </Link>

                      {canAccessAdmin && (
                        <>
                          <div className={styles.divider} />

                          <Link
                            href="/admin"
                            className={styles.dropdownLink}
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <span className={styles.menuIcon}>🧑‍💼</span>
                            {t("admin_panel")}
                          </Link>
                        </>
                      )}

                      <div className={styles.divider} />

                      <button
                        type="button"
                        className={styles.logoutButton}
                        onClick={handleLogout}
                        disabled={loggingOut}
                      >
                        <span className={styles.menuIcon}>➡️</span>
                        {loggingOut ? t("loggingOut") : t("logout")}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link href="/login" className={styles.loginButton}>
                  {t("login")}
                </Link>
              )}
            </div>
          )}
        </div>
      </header>

      {open ? null : (
        <div id="main_content" className="main_content">
          {children}
        </div>
      )}
    </>
  );
}
