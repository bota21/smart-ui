export default function Sensor_gas_metan({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_газа__метан__GS_SGMHM-I1.png"
          alt="Датчик газа (метан) GS SGMHM-I1"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_gas_metan_text_1">
            Датчик газа предназначен для оповещения о повышении концентрации
            бытового газа (метан) в воздухе. Датчик работает по беспроводной
            технологии ZigBee.
          </span>
          <p data-i18n="Sensor_gas_metan_text_2">
            Наличие индикатора: да, красный/зеленый/желтый
          </p>
          <p data-i18n="Sensor_gas_metan_text_3">
            Громкость оповещения: 75 дБ/1 м
          </p>
          <p data-i18n="Sensor_gas_metan_text_4">
            Дальность действия сигнала: до 25 м
          </p>
          <p data-i18n="Sensor_gas_metan_text_5">
            Подходит для использования в жилых и офисных помещениях.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          25 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
