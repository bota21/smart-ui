export default function Camera_street_rotary_Roximo({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/8-camera/видеокамера Roximo wifi.png"
          alt="видеокамера Roximo wifi"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Camera_street_rotary_Roximo_text_1">
            Умная уличная поворотная камера ROXIMO RHC202 - это одно из
            устройств экосистемы умного дома Roximo.
          </span>
          <p data-i18n="Camera_street_rotary_Roximo_text_2">
            Камера имеет функцию поворота и может просматривать пространство на
            все 360 градусов. В комплекте имеется специальное крепление и камера
            может быть закреплена к стене или потолку, а изображение картинки
            можно перевернуть в настройках камеры. При использовании охранной
            функции - при обнаружении движения камера автоматически запишет и
            сохранит видеозапись.
          </p>
          <p data-i18n="Camera_street_rotary_Roximo_text_3">
            Доступны ночной режим, обнаружение движения, двусторонняя связь,
            режим патрулирования, возврат в дежурную позицию.
          </p>
          <p data-i18n="Camera_street_rotary_Roximo_text_4">
            Комплектация: инструкция- 1шт; Крепление- 1шт, Адаптер питания-
            1шт.; Умная камера- 1шт
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
          56 000тг
        </div>
      </div>
    </>
  );
}
