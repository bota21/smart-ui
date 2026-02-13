export default function Sensor_air_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_качества_воздуха_Aqara_TVOC_Air_Quality_Monitor.png"
          alt="Датчик качества воздуха Aqara TVOC Air Quality Monitor"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_air_Aqara_text_1">
            Aqara TVOC Air Quality Monitor имеет электронный дисплей, который
            отображает текущие показания качества воздуха, а также температуру и
            влажность.
          </span>
          <p data-i18n="Sensor_air_Aqara_text_2">
            Мониторинг TVOC: Датчик измеряет концентрацию TVOC в воздухе.
          </p>
          <p data-i18n="Sensor_air_Aqara_text_3">
            TVOC – это группа газов, которые могут быть вредны для здоровья
            человека. Мониторинг температуры и влажности: датчик также измеряет
            температуру и влажность в помещении. Датчик работает от батареи и
            может проработать до года без подзарядки.
          </p>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          , Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- CR2450
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          30 370
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
