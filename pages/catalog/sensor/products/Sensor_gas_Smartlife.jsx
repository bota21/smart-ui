export default function Sensor_gas_Smartlife({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_газа_Tuya.png"
          alt="Датчик газа Tuya"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_gas_Smartlife_text">
            Основным предназначением данного датчика является обнаружения утечки
            газа на ранней стадии и инициирования запуска сценариев умного дома
            с целью предотвращения последствий от утечки.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          , Smart Life
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          17 500
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
