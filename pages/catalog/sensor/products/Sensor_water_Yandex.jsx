export default function Sensor_water_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_протечки_Яндекс.png"
          alt="Датчик протечки Яндекс"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_water_Yandex_text">
            Беспроводной компактный датчик легко установить на полу в кухне или
            в ванной. Он сразу сообщит, если обнаружит там воду, и вы сможете
            быстро отреагировать и избежать неприятных сюрпризов. Просто
            настройте пуш-уведомления в приложении Дом с Алисой. Свяжите датчик
            с умными розетками и создайте сценарий в приложении, по которому в
            случае протечки приборы в доме отключатся, а клапан, через который
            идёт вода, закроется.
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
          19 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
