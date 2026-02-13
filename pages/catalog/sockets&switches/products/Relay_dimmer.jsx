export default function Relay_dimmer({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-Switch/Диммер реле ZigBee.png"
          alt="Диммер реле ZigBee"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Relay_Dimmer_text">
            Умное диммер реле Zigbee - это инновационное устройство для систем
            Умный Дом, которое позволяет управлять различным освещением с
            помощью приложения на телефоне или голосовыми командами. Умное
            диммер реле имеет компактный мини-корпус, который легко
            устанавливается в большинство монтажных коробок для выключателей и
            розеток.
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
          20 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
