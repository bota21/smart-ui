export default function Smart_Din_40A({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-Switch/Умный автомат 1P 40A.png"
          alt="Умный автомат 1P 40A"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Smart_Din_40A_text">
            Автоматический выключатель на DIN-рейку 40А предназначен для
            управления нагрузками в сетях 220В 50/60ГЦ. Максимальный ток до 40А.
            Устройство подключается по протоколу ZigBee, управление
            осуществляется через приложение Tuya или SmartLife. После
            подключения реле к приложению управления к другим популярным
            голосовым ассистентам и системам умного дома.
          </span>
          <br />
          <span data-i18n="Need_hub">Нужен хаб</span>
          Tuya.
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - SmartLife
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          22 500
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
