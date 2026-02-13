export default function Sensor_temperature_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик температуры Яндекс YNDX-00523.png"
          alt="датчик температуры Яндекс"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_temperature_Yandex_text">
            Измеряет температуру и влажность в комнате и включает устройства
            умного дома, когда нужно. Беспроводной компактный датчик легко
            установить практически где угодно. Свяжите датчик с разными
            устройствами и создавайте сценарии в приложении Дом с Алисой.
            Например, можно объединить датчик с умным кондиционером и
            увлажнителем. И настроить сценарий их автоматического запуска, если
            в комнате станет слишком жарко и сухо. А можно задать значение
            температуры, при котором дома будет включаться обогреватель.
          </span>
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
          14 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
