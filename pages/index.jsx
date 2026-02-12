import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
  }, [lang, t]);

  return (
    <div id="main_content" className="main_content">
      {/* <!-- HERO --> */}
      <section className="hero">
        <div className="hero-text">
          <div>
            <h1 data-i18n="hero_header">
              SmartÜi — Умный дом с Алисой в Алматы
            </h1>
            <p data-i18n="hero_text">
              Полностью интегрированная система умного дома для вашего комфорта
              и безопасности
            </p>
            <div className="hero-buttons">
              <a data-i18n="hero_cost" className="btn-primary" href="#form">
                Рассчитать стоимость
              </a>
              <a
                data-i18n="hero_consult"
                className="btn-secondary"
                href="#contacts"
              >
                Консультация
              </a>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src="/assets/logo/Shanyrak.png" alt="Smart Ui" />
        </div>
      </section>

      {/* <!-- ПРЕИМУЩЕСТВА --> */}
      <section className="features">
        <div className="feature-card">
          <h3 data-i18n="feature_header_1">Интеграция с Алисой</h3>
          <p data-i18n="feature_header_text_1">
            Полное управление голосом для вашего дома
          </p>
        </div>
        <div className="feature-card">
          <h3 data-i18n="feature_header_2">Поддержка 24/7</h3>
          <p data-i18n="feature_header_text_2">
            Мы всегда на связи для вашей безопасности
          </p>
        </div>
        <div className="feature-card">
          <h3 data-i18n="feature_header_3">Современные технологии</h3>
          <p data-i18n="feature_header_text_3">
            Безопасность, автоматизация и комфорт
          </p>
        </div>
      </section>

      {/* <!-- ПАКЕТЫ --> */}
      <section>
        <h2 data-i18n="package_header" className="package-header">
          Наши пакеты
        </h2>
        <div className="cards">
          <div className="card">
            <h3 data-i18n="package_header_1">Базовый</h3>
            <p data-i18n="package_header_text_1">
              Свет, базовая автоматика, управление через приложение
            </p>
          </div>
          <div className="card">
            <h3 data-i18n="package_header_2">Стандарт</h3>
            <p data-i18n="package_header_text_2">
              Базовый + голосовое управление через Алису
            </p>
          </div>
          <div className="card">
            <h3 data-i18n="package_header_3">Премиум</h3>
            <p data-i18n="package_header_text_3">
              Полный умный дом под ключ + поддержка 24/7
            </p>
          </div>
        </div>
      </section>

      {/* <!-- ФОРМА --> */}
      <section id="form">
        <h2 data-i18n="form_header" className="form_header">
          Оставьте заявку
        </h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target;
            const data = {
              name: form.name.value,
              phone: form.phone.value,
            };

            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });

              const result = await res.json();
              if (res.ok) {
                alert(result.message);
                form.reset();
              } else {
                alert(result.error);
              }
            } catch (err) {
              console.error(err);
              alert("Ошибка отправки формы");
            }
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Ваше имя / Аты-жөні / Name"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="+7 777 123 45 67"
            pattern="^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$"
            required
            title="Введите полный номер, например +7 777 123 45 67"
          />
          <button type="submit" data-i18n="form_send">
            Отправить
          </button>
        </form>
      </section>

      {/* <!-- КОНТАКТЫ --> */}
      <section id="contacts">
        <div data-i18n="contact_header" className="contact-header">
          Контакты
        </div>
        <div data-i18n="contact_address" className="contact-text">
          г. Алматы, Казахстан
        </div>
      </section>
    </div>
  );
}
