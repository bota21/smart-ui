import ZoomableImage from "@/components/ZoomableImage";

export default function Switch_Bseed_sensor_2x({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <ZoomableImage
          src="../assets/img/3-Switch/Smart_switch_BSEED_sensor_2_white.png"
          alt="выключатель Bseed 2х - white"
          className="image_tab"
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
          <ZoomableImage
            src="../assets/img/3-Switch/Smart_switch_BSEED_sensor_2_gold.png"
            alt="выключатель Bseed сенсорный 2х - gold"
            className="images_many"
          />
          <ZoomableImage
            src="../assets/img/3-Switch/Smart_switch_BSEED_sensor_2_grey.png"
            alt="выключатель Bseed 2х - grey"
            className="images_many"
          />
          <ZoomableImage
            src="../assets/img/3-Switch/Smart_switch_BSEED_sensor_2_black.png"
            alt="выключатель Bseed сенсорный 2х - black"
            className="images_many"
          />
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          16 800
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
