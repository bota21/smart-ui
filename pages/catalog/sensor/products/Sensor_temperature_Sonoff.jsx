export default function Sensor_temperature_Sonoff({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_температуры_и_влажности_Sonoff_SNZB-02D.png"
          alt="Датчик температуры и влажности Sonoff SNZB-02D"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_temperature_Sonoff_text_1">
            Датчик температуры и влажности создан специально для чуткого
            наблюдения за изменением микроклимата, а для еще лучшего контроля
            датчик можно включить в умный сценарий, создавая различные сочетания
            с другими устройствами. Теперь вы можете установить его в каждой
            комнате и сможете видеть температуру в доме. С помощью этого датчика
            можно управлять включением и выключением таких приборов как
            Вентилятор, Обогреватель, Кондиционер, Увлажнитель.
          </span>
          <p data-i18n="Sensor_temperature_Sonoff_text_2">
            Также можно управлять открытием и закрытием штор. Поддерживать
            правильную влажность в жилых и офисных помещениях очень важно. Для
            органов дыхания и увлажнения кожи. Датчик устанавливается в любое
            удобное место простым приклеиванием на двусторонний скотч.
          </p>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- CR2450
        </div>

        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          19 400
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
