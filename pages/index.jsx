import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t, lang } = useLanguage();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let x = e.target.value.replace(/\D/g, "");
    if (x.startsWith("7")) x = x.slice(1);
    let formatted = "+7 ";
    if (x.length > 0) formatted += x.substring(0, 3);
    if (x.length > 3) formatted += " " + x.substring(3, 6);
    if (x.length > 6) formatted += " " + x.substring(6, 8);
    if (x.length > 8) formatted += " " + x.substring(8, 10);
    setValue(formatted);
  };

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
          action="https://formspree.io/f/mjgeybwd" // ваш URL формы на Formspree
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;

            const formData = new FormData(form);

            fetch(form.action, {
              method: form.method,
              body: formData,
              headers: {
                Accept: "application/json",
              },
            })
              .then((response) => {
                if (response.ok) {
                  alert(
                    "Форма отправлена! Мы с вами свяжемся в ближайшее время",
                  );
                  form.reset();
                  setValue("");
                } else {
                  alert("Ошибка отправки формы");
                }
              })
              .catch((error) => {
                console.error(error);
                alert("Ошибка отправки формы");
              });
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
            placeholder="+7 777 123 45 67"
            value={value}
            onChange={handleChange}
            required
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
