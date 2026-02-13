export default function Sensor_gas_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Детектор_газа.png"
          alt="Детектор газа"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_gas_Aqara_text">
            Умный датчик газа Aqara Smart Natural Gas Detector - зафиксирует
            утечку газа, включит сигнализацию и отправит push-уведомление на
            смартфон. Подключается к сети 220 В. В датчик встроена мощная сирена
            на 85 дБ, которая включается при обнаружении утечки. Также
            включается мигающий красный светодиод. При обнаружении утечки
            включит сирену на всех хабах. На смартфон отправляется
            push-уведомление.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          , Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          32 200
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
