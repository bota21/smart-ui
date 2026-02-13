export default function Hub_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/Яндекс центр управления.png"
          alt="hub yandex"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Hub_Yandex_text_1">
            Универсальный Хаб Яндекса для простого и быстрого подключения разных
            приборов к умному дому с Алисой. И единая точка управления всеми
            устройствами. С Хабом умный дом сможет больше. Наполните его
            датчиками и множеством других Zigbee-устройств. Хаб соединит их с
            Яндекс Станцией, и вы будете управлять умным домом через приложение
            или голосом. Подключайте датчики Яндекса с Zigbee к Хабу напрямую,
            объединяйте с другими устройствами умного дома и задавайте сценарии.
            Множество процессов станут автоматизированными. По Wi-Fi Хаб
            соединяется с лампочками, чайниками, пылесосами и тысячами других
            девайсов разных производителей.
          </span>
          <p>
            <span data-i18n="Hub_Yandex_text_2">
              А ещё Хаб – это смарт-пульт, действующий на 360°. Даже если у вас
              дома простой телевизор или кондиционер, соедините их с Хабом при
              помощи ИК-подключения и управляйте без пульта.
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
            <span data-i18n="Ecosystem">Экосистема</span>-
            <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
            <br />
            <span data-i18n="Communication_protocol">Протокол связи</span>-
            Bluetooth, Wi-Fi, ZigBee,
            <span data-i18n="IR_Port">ИК-Порт</span>
            <br />
          </p>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          13 120
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
