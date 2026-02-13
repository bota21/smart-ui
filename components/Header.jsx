import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Header({ children }) {
  const [open, setOpen] = useState(false);
  const { t, setLang, lang } = useLanguage();

  return (
    <>
      <header>
        <div className="menu_logo_wrapper">
          <div
            className={`burger-menu ${open ? "active" : ""}`}
            onClick={() => setOpen((v) => !v)}
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
      {open ? null : (
        <div id="main_content" className="main_content">
          {children}
        </div>
      )}
    </>
  );
}
