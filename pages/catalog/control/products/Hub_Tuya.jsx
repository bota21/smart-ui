export default function Hub_Tuya({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/Центр управления Tuya SGW01.png"
          alt="Центр управления Tuya SGW01"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Hub_Tuya_text">
            Многорежимный шлюз Tuya Smart - это основной элемент системы умного
            дома, позволяющий централизовать все умные устройства,
            функционирования сценариев умного дома для создания комфорта,
            обеспечения безопасности дома за время вашего отсутствия и тем самым
            информирует Вас о состоянии вашего дома в режиме реального времени.
          </span>
          <br />
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
          <br />
          <span data-i18n="Type">Тип</span>-
          <span data-i18n="Control_center">Центр управления</span>
          <br />
          <span data-i18n="Connected_devices">
            Количество подключаемых устройств
          </span>
          - 128
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Tuya
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Bluetooth, Wi-Fi, ZigBee
          <br />
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          13 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
