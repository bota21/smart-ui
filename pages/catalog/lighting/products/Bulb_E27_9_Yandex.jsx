export default function Bulb_E27_9_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/4-light/Е27/Лампочка Е27 9W Яндекс YNDX-00551 белая.png"
          alt="Лампочка Е27 9W Яндекс YNDX-00551 белая"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Bulb_E27_9_Yandex_text">
            Возможность регулировать цветовую температуру от 2700 до 6500 К и
            яркость свечения позволит создать тёплое мягкое освещение для
            романтического вечера или холодный и яркий свет для продуктивной
            работы.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Matter
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>7 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
