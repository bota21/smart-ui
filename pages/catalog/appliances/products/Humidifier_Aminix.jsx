export default function Humidifier_Aminix({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Очиститель воздуха Aminix.png"
          alt="Очиститель воздуха Aminix"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Humidifier_Aminix_text_1">
            Aminix AMX01 — умный очиститель воздуха с ионизацией и управлением
            через телефон и Алису.
          </span>
          <p data-i18n="Humidifier_Aminix_text_2">Основные преимущества:</p>
          <p data-i18n="Humidifier_Aminix_text_3">
            • 3 ступени фильтрации: предварительный, HEPA H13 и угольный фильтр
            — удаляют до 99,95% пыли, аллергенов, дыма и запахов.
          </p>
          <p data-i18n="Humidifier_Aminix_text_4">
            • Ионизация воздуха — наполняет помещение отрицательными ионами,
            снижает уровень аллергенов и бактерий, делает дыхание лёгким.
          </p>
          <p data-i18n="Humidifier_Aminix_text_5">
            • Мониторинг качества воздуха — встроенные датчики и цветная
            индикация PM2.5 показывают уровень чистоты в реальном времени.
          </p>
          <p data-i18n="Humidifier_Aminix_text_6">
            Обслуживаемая площадь 50.0 кв.м
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          96 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
