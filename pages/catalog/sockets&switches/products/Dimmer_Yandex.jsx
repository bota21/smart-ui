export default function Dimmer_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_открытия.png"
          alt="Датчик открытия дверей"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_open_text">
            Датчик открытия дверей и окон на базе протокола Zigbee надежно
            реагирует на открытие дверей и окон, позволяя вам создавать
            разнообразные сценарии умного дома в приложении Дом с Алисой.
            Свяжите датчик с различными устройствами и настройте сценарии,
            которые будут автоматически запускаться при срабатывании датчика.
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
          <span data-i18n="Cost">Стоимость </span>4 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
