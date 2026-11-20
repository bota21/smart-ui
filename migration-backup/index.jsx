import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";

export default function Catalog() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
  }, [lang, t]);

  return (
    <>
      <section className="content">
        <div className="container_for_tabs">
          <a
            href="/catalog/control"
            className="smart_home_tabs"
            data-i18n="Control"
          >
            Управление
          </a>
          <a
            href="catalog/sensor"
            className="smart_home_tabs"
            data-i18n="Sensors"
          >
            Датчики
          </a>
          <a
            href="catalog/sockets&switches"
            className="smart_home_tabs"
            data-i18n="Slug_switch"
          >
            Розетки, выключатели
          </a>
          <a
            href="catalog/lighting"
            className="smart_home_tabs"
            data-i18n="Light"
          >
            Освещение
          </a>
          <a
            href="catalog/curtain"
            className="smart_home_tabs"
            data-i18n="Cornice"
          >
            Карнизы
          </a>
          <a
            href="catalog/plumbing"
            className="smart_home_tabs"
            data-i18n="Sanitary"
          >
            Сантехника
          </a>
          <a
            href="catalog/appliances"
            className="smart_home_tabs"
            data-i18n="Technology"
          >
            Техника
          </a>
          <a
            href="catalog/camera"
            className="smart_home_tabs"
            data-i18n="Camera"
          >
            Камера
          </a>
          <a href="catalog/doors" className="smart_home_tabs" data-i18n="Doors">
            Умные замки
          </a>
        </div>
      </section>
    </>
  );
}
