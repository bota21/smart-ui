export default function Sensor_temperature_monitor({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_температуры_-_монитор_.png"
          alt="Датчик температуры -(монитор)"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_temperature_monitor_text">
            Умное решение для контроля климата в вашем доме, обеспечивающее
            точные измерения и удобное управление через мобильные приложения.
            Легко разместить в любом помещении. Идеально подходит для тех, кто
            хочет создать умный дом и следить за климатом в помещениях,
            обеспечивая комфорт и здоровье для всей семьи.
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
          13 300
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
