export default function Sensor_water_Sonoff({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_протечки_Соноф.png"
          alt="Датчик протечки Соноф"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_water_Sonoff_text">
            Умный датчик протечки воды защищает вашу квартиру от неприятных
            сюрпризов. Он срабатывает, как только вода попадает на контакты на
            его нижней панели. Проверять статус smartдатчика и управлять им
            можно в приложении, и с помощью голосового помощника Алиса. К умному
            дому датчик подключается по протоколу Zigbee.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- CR2477
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>8 400
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
