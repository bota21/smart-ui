export default function Cornice_roll_59({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/5-cornice/карниз для роллштор.png"
          alt="карниз для роллштор"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Cornice_roll_59_text">
            Умный мотор для рулонных штор Aqara – это мотор для управления
            рулонными шторами, перегородками или проекционными экранами. Вы
            можете управлять шторами со смартфона, с помощью пульта управления,
            который идёт в комплекте, или голосом через голосовых помощников
            Алису.
          </span>
          <br />
          <span data-i18n="Need_hub">Нужен хаб</span>
          Aqara.
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          , Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Zigbee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          56 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
