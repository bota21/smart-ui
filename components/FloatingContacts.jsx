"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingContacts() {
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <div className="floating-contact">
        <div
          className="floating-menu"
          style={{ display: isFloatingMenuOpen ? "flex" : "none" }}
        >
          <a href="tel:+77778410050" className="btn-primary">
            <svg className="icon call" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8c1.2 2.3 3.1 4.2 5.4 5.4l1.8-1.8c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v2.9c0 .6-.4 1-1 1C10.3 20.6 3.4 13.7 3.4 5.6c0-.6.4-1 1-1H7.3c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-1.9 1.3z" />
            </svg>
            <span data-i18n="floating_call">Позвонить</span>
          </a>

          <a
            href="https://t.me/77778410050"
            target="_blank"
            className="btn-primary"
          >
            <svg
              className="icon telegram"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M9.9 15.6 9.6 19c.4 0 .6-.2.8-.4l1.9-1.8 3.9 2.8c.7.4 1.2.2 1.4-.6l2.6-12.2c.2-.9-.3-1.3-1-1L4.2 9.6c-.8.3-.8.8-.1 1l4.2 1.3L17 6.9c.4-.3.8-.1.5.2z" />
            </svg>
            <span data-i18n="floating_telegram">Telegram</span>
          </a>

          <a
            href="https://wa.me/77778410050"
            target="_blank"
            className="btn-primary"
          >
            <svg
              className="icon whatsapp"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2a10 10 0 0 0-8.7 15l-1.1 4.1 4.2-1.1A10 10 0 1 0 12 2zm5.5 14.5c-.2.6-1.2 1.1-1.7 1.1-.5.1-1.1.1-3.6-1.2-3.1-1.6-5-4.4-5.1-4.6-.1-.2-1.2-1.6-1.2-3 0-1.4.7-2.1 1-2.4.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5.2.6.8 2.2.9 2.4.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.6.6-.2.2-.4.4-.2.8.2.4 1 1.6 2.1 2.6 1.5 1.3 2.8 1.7 3.2 1.9.4.2.6.2.9-.1.3-.3 1-1.2 1.3-1.6.3-.4.6-.3 1-.1.4.2 2.5 1.2 2.9 1.4.4.2.6.3.7.5.1.2.1.6-.1 1.2z" />
            </svg>
            <span data-i18n="floating_whatsapp">WhatsApp</span>
          </a>
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
