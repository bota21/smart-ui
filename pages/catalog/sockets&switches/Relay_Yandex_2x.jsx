export default function Relay_Yandex_2x({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-socket/реле 2х.png"
          alt="реле 2х"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Relay_Yandex_text">
            Умное реле Яндекс — это компактное устройство, позволяющее сделать
            обычные выключатели частью умного дома. Оно устанавливается в
            подрозетник за существующим выключателем и подключается к системе
            умного дома через протокол Zigbee 3.0.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          14 700
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
