export default function Sensor_smoke_Tuya({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_дыма_Tuya.png"
          alt="Датчик_дыма_Tuya"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_smoke_Tuya_text">
            Независимый умный датчик дыма. Принцип работы: обнаружение дыма,
            звуковое оповещение, уведомления в приложении.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          , Tuya
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- CR123А
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          17 780
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
