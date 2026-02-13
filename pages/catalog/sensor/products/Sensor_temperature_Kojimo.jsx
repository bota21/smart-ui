export default function Sensor_temperature_Kojimo({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_температуры_и_влажности_Kojimo.png"
          alt="Датчик температуры и влажности Kojimo"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_temperature_Kojimo_text_1">
            Датчик температуры и влажности создан специально для чуткого
            наблюдения за изменением микроклимата, а для еще лучшего контроля
            датчик можно включить в умный сценарий, создавая различные сочетания
            с другими устройствами.
          </span>
          <p data-i18n="Sensor_temperature_Kojimo_text_2">
            Датчик позволяет отслеживать температуру и влажность в месте
            установки прибора удаленно в режиме онлайн прямо с экрана телефона.
            ЖК-экран динамически отображает значения в реальном времени,
            передает комфортное состояние домашней среды, соединен с шлюзом и
            облачной платформой.
          </p>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- CR2032
        </div>

        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          14 400
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
