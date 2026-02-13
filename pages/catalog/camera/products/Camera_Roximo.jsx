export default function Camera_Roximo({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/8-camera/видеокамера Roximo умная.png"
          alt="видеокамера Roximo умная"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Camera_Roximo_text_1">
            Камера выполнена в корпусе для установки на специальной поворотной
            ножке. Платформа ножки так же может быть закреплена к стене или
            потолку, а изображение картинки можно перевернуть в настройках
            камеры.
          </span>
          <p data-i18n="Camera_Roximo_text_2">
            Доступны ночной режим, обнаружение движения, двусторонняя связь,
            видеоняня.
          </p>
          <p data-i18n="Camera_Roximo_text_3">
            Комплектация: Лента 3М- 1шт; USB кабель- 1шт; Адаптер питания-1шт;
            инструкция- 1шт; Умная камера- 1шт
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
          33 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
