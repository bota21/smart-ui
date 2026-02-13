export default function Bulb_E27_11_Yandex_RGB({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/4-light/Е27/Лампочка Е27 9W Яндекс RGB.png"
          alt="Лампочка Е27 11W Яндекс RGB"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Bulb_Yandex_RGB_text">
            Возможность изменения цвета свечения позволит создавать различное
            освещение под ваше настроение или задачи: яркое фиолетовое свечение
            для детской, синее для погружения в атмосферу во время гейминга или
            специальный режим Вечеринка, когда у вас гости.
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
          <span data-i18n="Cost">Стоимость</span>
          11 300
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
