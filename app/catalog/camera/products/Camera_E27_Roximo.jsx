import ZoomableImage from "@/components/ZoomableImage";

export default function Camera_E27_Roximo({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <ZoomableImage
          src="../assets/img/8-camera/Smart_camera_Roximo_bulb.png"
          alt="видеокамера Roximo лампочка"
          className="image_tab"
        />
        <div className="text_tab">
          <span data-i18n="Camera_E27_Roximo_text_1">
            Благодаря адаптеру питания Е27 камеру можно установить, вкрутив ее
            вместо лампочки. Ip камера имеет функцию поворота и может
            просматривать пространство на все 360 градусов. В комплекте имеется
            специальное крепление и камера может быть закреплена к стене или
            потолку, а изображение картинки можно перевернуть в настройках
            камеры.
          </span>
          <p data-i18n="Camera_E27_Roximo_text_2">
            Доступны ночной режим, обнаружение движения, двусторонняя связь,
            видеоняня.
          </p>
          <p data-i18n="Camera_E27_Roximo_text_3">
            Комплектация: USB кабель- 1шт; Адаптер питания- 1шт; инструкция-
            1шт; Крепежный комплект- 1шт; Адаптер питания Е27-1шт; Умная камера-
            1шт
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - ROXIMO IoT
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          39 200
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
