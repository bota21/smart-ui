"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { authClient } from "@/lib/client-auth";
import styles from "./user-menu.module.css";

export default function Header({ children }) {
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const userMenuRef = useRef(null);
  const router = useRouter();

  const { t, setLang, lang } = useLanguage();
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  const userRole = user?.role;
  const canAccessAdmin = ["admin", "superadmin"].includes(userRole);

  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setUserMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  async function handleLogout() {
    setLoggingOut(true);

    try {
      await authClient.signOut();
      setUserMenuOpen(false);
      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
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
            // type="button"
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
          <div className="lang-switch">
            {["ru", "kz", "en"].map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => setLang(language)}
                className={`lang-switcher-button ${
                  lang === language ? "lang-active" : ""
                }`}
              >
                {language.toUpperCase()}
              </button>
            ))}
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
                        <span className={styles.menuIcon}>♙</span>
                        Личный кабинет
                      </Link>

                      <Link
                        href="/settings"
                        className={styles.dropdownLink}
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <span className={styles.menuIcon}>⚙</span>
                        Настройки
                      </Link>
                      {canAccessAdmin && (
                        <>
                          <div className={styles.divider} />

                          <Link
                            href="/admin"
                            className={styles.dropdownLink}
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <span className={styles.menuIcon}>♙</span>
                            Панель администратора
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
                        <span className={styles.menuIcon}>↪</span>
                        {loggingOut ? "Выходим..." : "Выйти"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href="/login"
                  className={styles.loginButton}
                  data-i18n="enter"
                >
                  Войти
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
