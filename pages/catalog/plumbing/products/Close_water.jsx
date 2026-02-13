export default function Close_water({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/6-sanitary/Клапан перекрытия В.png"
          alt="Клапан перекрытия В"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Close_water_text">
            Электрический привод перекрытия воды/газ, рычаг для крана с Алисой -
            отличное решение для вашего умного дома. С его помощью вы сможете
            контролировать перекрытие воды и газа в вашем доме, обеспечивая
            безопасность и эффективность.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          , Smart Life
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          24 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
