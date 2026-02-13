export default function Motor_roller_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      {" "}
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/5-cornice/Мотор для роллштор.png"
          alt="Мотор для роллштор"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Motor_roller_Aqara_text">
            Устройство для автоматического управления шторами. Сделайте умными
            ваши жалюзи, рулонные шторы и всё, что открывается цепью управления.
            Устройство легко устанавливается и работает на аккумуляторе.
            Устройством можно управлять со смартфона, голосовыми помощниками,
            через автоматизации и беспроводными выключателями. Открывает и
            закрывает шторы и жалюзи полностью или на заданный процент.
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
          <span data-i18n="Power">Питание</span>- Аккумулятор,
          <span data-i18n="Static_electricity">От сети</span>
          Type-C
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          47 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
