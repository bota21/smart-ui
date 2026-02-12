"use client";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./i18n/LanguageContext";
import "./layout.css";

export default function LayoutContent({ children }) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);

  const { t, lang, setLang } = useLanguage();

  return (
    <>
      <header>
        <div className="menu_logo_wrapper">
          <div
            className={`burger-menu ${isBurgerMenuOpen ? "active" : ""}`}
            onClick={() => setIsBurgerMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </div>

          <nav className={`mobile-menu ${isBurgerMenuOpen ? "active" : ""}`}>
            <Link href="/">{t("menu_main")}</Link>
            <Link href="/catalog">{t("menu_catalog")}</Link>
            <Link href="/packages">{t("menu_packages")}</Link>
            <Link href="/services">{t("menu_services")}</Link>
            <Link href="/portfolio">{t("menu_portfolio")}</Link>
          </nav>

          <div className="logo">SmartÜi</div>
        </div>

        <div className="lang-switch">
          {["ru", "kz", "en"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`lang-switcher-button ${lang === l ? "lang-active" : ""}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <main>{children}</main>

      <div className="floating-contact">
        <div
          className="floating-menu"
          style={{ display: isFloatingMenuOpen ? "flex" : "none" }}
        >
          <a href="tel:+77778410050">{t("floating_call")}</a>
          <a href="#contact">{t("floating_contact_us")}</a>
        </div>

        <div
          className="floating-btn"
          onClick={() => setIsFloatingMenuOpen((v) => !v)}
        >
          {t("floating_contact_us")}
        </div>
      </div>
    </>
  );
}
