export default function Camera_street_Roximo({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/8-camera/видеокамера Roximo уличная.png"
          alt="видеокамера Roximo уличная"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Camera_street_Roximo_text_1">
            Камерой можно управлять с помощью специального мобильного
            приложения, просматривать в режиме онлайн все, что происходит в
            Вашем доме. Видео можно записывать на SD-карту или в облачное
            хранилище, а затем просматривать. При использовании охранной функции
            - при обнаружении движения камера автоматически запишет и сохранит
            видеозапись.
          </span>
          <p data-i18n="Camera_street_Roximo_text_2">
            Доступны ночной режим, обнаружение движения, двусторонняя связь.
          </p>
          <p data-i18n="Camera_street_Roximo_text_3">
            Комплектация: инструкция- 1шт; Крепление- 1шт, Адаптер питания-
            1шт.; Умная камера- 1шт
          </p>
          <br />
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
          48 800
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
