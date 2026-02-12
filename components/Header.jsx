import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, setLang, lang } = useLanguage();

  return (
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
          <a>{t("menu_main")}</a>
          <a>{t("menu_catalog")}</a>
          <a>{t("menu_packages")}</a>
          <a>{t("menu_services")}</a>
          <a>{t("menu_portfolio")}</a>
        </nav>

        <div className="logo">SmartÜi</div>
      </div>

      <div className="lang-switch">
        {["ru", "kz", "en"].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={lang === l ? "active" : ""}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
}
