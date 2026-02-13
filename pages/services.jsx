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
      <section className="content">
        <div className="cards_wrapper">
          <div className="card_wrapper recommended">
            <div className="card_badge" data-i18n="recommended">
              Рекомендуем
            </div>
            <div className="card_wrapper_header" data-i18n="Month_header_title">
              Каждый месяц с заботой
            </div>
            <div className="card_wrapper_content" data-i18n="Month_header_text">
              Это ежемесячная подписка на регулярное обслуживание вашего умного
              дома. Мы берём на себя все мелкие, но важные задачи, чтобы техника
              всегда работала без перебоев, а вы могли наслаждаться комфортом и
              удобством.
              <br />
              <br />
              <p
                className="card_wrapper_blocks_title"
                data-i18n="Month_included_service"
              >
                Что входит в обслуживание:
              </p>
              <p
                className="card_wrapper_content_list"
                data-i18n="Month_replacing batteries"
              >
                Замена батареек в датчиках, пультах и других устройствах.
              </p>
              <p
                className="card_wrapper_content_list"
                data-i18n="Month_configuring_crashed_devices"
              >
                Настройка слетевших устройств и восстановление их подключения.
              </p>
              <p
                className="card_wrapper_content_list"
                data-i18n="Month_checking_system_stability"
              >
                Проверка стабильности системы и оптимизация работы оборудования.
              </p>
              <p
                className="card_wrapper_content_list"
                data-i18n="Month_updating_settings_and_scripts"
              >
                Обновление настроек и сценариев при необходимости.
              </p>
              <p
                className="card_wrapper_content_list"
                data-i18n="Month_support_and_advice"
              >
                Поддержка и консультация по всем вопросам работы умного дома.
              </p>
            </div>
            <div className="card_wrapper_footer text_bold">
              <span data-i18n="Cost">Стоимость</span>
              10000
              <span data-i18n="tenge_month">тг/мес</span>
            </div>
          </div>
        </div>
        <div className="cards_wrapper">
          <div className="card_wrapper">
            <div
              className="card_wrapper_header"
              data-i18n="One_time_header_title"
            >
              Разовое решение задачи
            </div>
            <div
              className="card_wrapper_content"
              data-i18n="One_time_header_text"
            >
              Идеальный вариант, если вам нужна помощь здесь и сейчас — без
              обязательств и подписок. Мы быстро и профессионально решим
              конкретную проблему с вашим умным домом, чтобы всё работало как
              надо.
            </div>
            <div
              className="card_wrapper_blocks_title"
              data-i18n="One_time_included_service"
            >
              Предлагаем следующие услуги:
            </div>
            <div className="card_wrapper_blocks">
              <div className="service_row">
                <div
                  className="service_name"
                  data-i18n="One_time_installing_sensor"
                >
                  Установка датчика
                </div>
                <div className="service_price">
                  2000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>

              <div className="service_row">
                <div
                  className="service_name"
                  data-i18n="One_time_installing_close"
                >
                  Установка клапана перекрытия
                </div>
                <div className="service_price">
                  3000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>

              <div className="service_row">
                <div
                  className="service_name"
                  data-i18n="One_time_installing_smart_cornice"
                >
                  Установка умного карниза
                </div>
                <div className="service_price">
                  10000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
            </div>

            <div
              className="card_wrapper_footer text_bold"
              data-i18n="One_time_footer"
            >
              Мы настроим нужные сценарии в рамках услуги — без дополнительных
              расходов
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
