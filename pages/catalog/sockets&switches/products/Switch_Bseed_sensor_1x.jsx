export default function Switch_Bseed_sensor_1x({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-Switch/выключатель Bseed сенсорный 1х - white.png"
          alt="выключатель Bseed сенсорный 1х - white"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Switch_Bseed_sensor_text">
            Умный выключатель не требует модификации освещения и замены
            проводки, не требуется дополнительный нулевой провод. Просто
            замените традиционный выключатель и наслаждайтесь широким
            функционалом - Дистанционное выключение света через приложение,
            выключение в заданное время или по таймеру, а так же голосовое
            управление через Яндекс Станцию.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
          <br />
          <br />
          <span data-i18n="Switch_Bseed_sensor_color_text">
            (цвета: белый, золото, серый, черный)
          </span>
        </div>
        <div className="wrapper_for_images_many">
          <img
            src="../assets/img/3-Switch/выключатель Bseed сенсорный 1х - gold.png"
            alt="выключатель Bseed сенсорный 1х - gold"
            className="images_many"
            onclick="toggleZoom(this)"
          />
          <img
            src="../assets/img/3-Switch/выключатель Bseed сенсорный 1х - grey.png"
            alt="выключатель Bseed сенсорный 1х - grey"
            className="images_many"
            onclick="toggleZoom(this)"
          />
          <img
            src="../assets/img/3-Switch/выключатель Bseed сенсорный 1х - black.png"
            alt="выключатель Bseed сенсорный 1х - black"
            className="images_many"
            onclick="toggleZoom(this)"
          />
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          15 200
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
