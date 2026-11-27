"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingContacts() {
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="floating-contact">
      <div className={`floating-menu ${isFloatingMenuOpen ? "is-open" : ""}`}>
        <a href="tel:+77778410050" className="btn-primary">
          <img src="/assets/icons/phone.svg" className="icon call" />
          <span data-i18n="floating_call">Позвонить</span>
        </a>

        <a
          href="https://t.me/+77778410050"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <img src="/assets/icons/telegram.svg" className="icon telegram" />
          <span data-i18n="floating_telegram">Telegram</span>
        </a>

        <a
          href="https://wa.me/77778410050"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <img src="/assets/icons/whatsapp.svg" className="icon whatsapp" />
          <span data-i18n="floating_whatsapp">WhatsApp</span>
        </a>
      </div>

      <button
        type="button"
        className="floating-btn"
        onClick={() => setIsFloatingMenuOpen((value) => !value)}
        aria-expanded={isFloatingMenuOpen}
      >
        {t("floating_contact_us")}
      </button>
    </div>
  );
}
