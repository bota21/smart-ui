export default function Hub_Roximo({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/Умный хаб ROXIMO GWIR01.png"
          alt="Умный хаб ROXIMO GWIR01"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Hub_Roximo_text_1">
            Умный хаб - это комбоустройство, включающее в себя сразу несколько
            функций, предназначен для организации сетей умного дома в стандартах
            Zigbee и Bluetooth, и возможностью одновременного подключения до 128
            устройств к одному шлюзу. Использование данных технологий позволяет
            разгрузить точку доступа WIFi от большого количества одновременно
            подключенных устройств умного дома. Встроенная функция умного пульта
            позволяет создавать виртуальные ИК-пульты и управлять различной
            бытовой техникой в доме: телевизорами, аудио-видеосистемами,
            кондиционерами, вентиляторами и любым другим устройствами, имеющим
            ИК-управление.
          </span>
          <br />
          <span data-i18n="Hub_Roximo_text_2">
            К хабу можно подключать Zigbee устройства других производителей ,
            которые работают в облаке Tuya.
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
          - Roximo ioT
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>-
          Bluetooth, Wi-Fi, ZigBee,
          <span data-i18n="IR_Port">ИК-Порт</span>
          <br />
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          38 400
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
