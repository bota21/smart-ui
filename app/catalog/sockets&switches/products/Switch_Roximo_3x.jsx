import ZoomableImage from "@/components/ZoomableImage";

export default function Switch_Roximo_3x({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <ZoomableImage
          src="../assets/img/3-Switch/Smart_switch_ROXIMO_3_white.png"
          alt="Выключатель ROXIMO 3кл - white"
          className="image_tab"
        />
        <div className="text_tab">
          <span data-i18n="Switch_Roximo_text_1">
            Корпус выключателя имеет удобный размер для монтажа в стандартные
            установочные коробки. Лицевая панель изготовлена из
            высококачественного пластика, на ней расположены клавиши для
            управления и LED индикаторы состояния.
          </span>
          <p data-i18n="Switch_Roximo_text_2">
            Прямое подключение к Zigbee от Яндекс - подключайте устройства
            Roximo прямо к Станции с поддержкой Zigbee или хабу Яндекс.
          </p>
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
          <span data-i18n="Switch_Roximo_color_text">
            (цвета: белый, золото, бронзовый, серый, черный)
          </span>
        </div>
        <div className="wrapper_for_images_many">
          <ZoomableImage
            src="../assets/img/3-Switch/Smart_switch_ROXIMO_3_gold.png"
            alt="Выключатель ROXIMO 3кл - gold"
            className="images_many"
          />
          <ZoomableImage
            src="../assets/img/3-Switch/Smart_switch_ROXIMO_3_bronze.png"
            alt="Выключатель ROXIMO 3кл - bronza"
            className="images_many"
          />
          <ZoomableImage
            src="../assets/img/3-Switch/Smart_switch_ROXIMO_3_grey.png"
            alt="Выключатель ROXIMO 3кл - grey"
            className="images_many"
          />
          <ZoomableImage
            src="../assets/img/3-Switch/Smart_switch_ROXIMO_3_platinum.png"
            alt="/Выключатель ROXIMO 3кл - platina"
            className="images_many"
          />
          <ZoomableImage
            src="../assets/img/3-Switch/Smart_switch_ROXIMO_3_black.png"
            alt="Выключатель ROXIMO 3кл - black"
            className="images_many"
          />
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          28 800
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
