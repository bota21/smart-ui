export default function Sensor_air_QingPing({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Монитор качества воздуха QingPing Air Monitor Lite.png"
          alt="Монитор качества воздуха QingPing Air Monitor Lite"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_air_QingPing_text_1">
            Интеллектуальный монитор качества воздуха CO2 Монитор температуры и
            влажности PM2.5 PM10 5 в 1 Lite Совместимый с OLED - дисплеем Apple
            HomeKit в режиме реального времени может заряжать аккумулятор
            емкостью 2000 мАч со временем работы до 7 часов. В режиме реального
            времени узнайте о PM2.5, PM10, CO2, температуре и влажности в
            помещении. Поддержка 2,4 ГГц Wi - Fi и BT для удаленного просмотра
            данных или экспорта исторических данных. Для пользователей домашнего
            приложения вы можете удаленно проверить пять индикаторов или
            настроить автоматизацию с помощью Home Hub. Дизайн UI в пиксельном
            стиле, с более широким углом зрения и более интересными операциями.
          </span>
          <p data-i18n="Sensor_air_QingPing_text_2">
            • Совместимость с Apple HomeKit: Для пользователей приложения Apple
            Home можно удаленно проверить пять индикаторов или автоматизировать
            настройки с помощью Apple Home Hub.
          </p>
          <p data-i18n="Sensor_air_QingPing_text_3">
            • 5 в 1 многофункциональный: мониторинг PM2.5, PM10, CO2,
            температуры и влажности в помещении в режиме реального времени.
          </p>
          <p data-i18n="Sensor_air_QingPing_text_4">
            Долгосрочный зарядный литиевый аккумулятор: встроенный литиевый
            аккумулятор емкостью 2000 мАч со сроком службы до 7 часов.
          </p>
          <p data-i18n="Sensor_air_QingPing_text_5">
            • Ясный OLED - дисплей: пиксельный дизайн UI, более широкий угол
            обзора, более интересная работа.
          </p>
          <p data-i18n="Sensor_air_QingPing_text_6">
            • Интеллектуальное подключение: поддержка 2,4 ГГц Wi - Fi и BT для
            удаленного просмотра данных или экспорта исторических данных.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Home Hub
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          66 100
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
