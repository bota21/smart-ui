export default function Camera_4G_Roximo({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/8-camera/видеокамера Roximo симка.png"
          alt="видеокамера Roximo симка"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Camera_4G_Roximo_text_1">
            Наличие слота для сим-карты и поддержка стандарта связи 4G позволяют
            установить камеру в любом месте без необходимости проводить интернет
            для удаленного наблюдения. Видео можно записывать на SD-карту или в
            облачное хранилище, а затем просматривать. При использовании
            охранной функции - при обнаружении движения камера автоматически
            запишет и сохранит видеозапись.
          </span>
          <p data-i18n="Camera_4G_Roximo_text_2">
            Доступны ночной режим, обнаружение движения, двусторонняя связь,
            режим патрулирования, возврат в дежурную позицию.
          </p>
          <p data-i18n="Camera_4G_Roximo_text_3">
            Комплектация: инструкция- 1шт; Крепление- 1шт, Адаптер питания-
            1шт.; Умная камера- 1шт
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - ROXIMO IoT
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - GSM
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          72 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
