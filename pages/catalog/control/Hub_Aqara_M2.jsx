export default function Hub_Aqara_M2({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/Хаб Aqara Hub M2.png"
          alt="Хаб Aqara Hub M2"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Hub_Aqara_M2_text_1">
            Aqara Hub M2 – это многофункциональный центр умного дома, который
            позволяет управлять и автоматизировать вашу квартиру или дом с
            помощью смартфона, планшета или голосовых команд.
          </span>
          <br />
          <br />
          <p data-i18n="Hub_Aqara_M2_text_2">Ключевые характеристики:</p>
          <p data-i18n="Hub_Aqara_M2_text_3">
            - Поддержка Zigbee 3.0: Подключает до 128 устройств Aqara и других
            производителей, совместимых с Zigbee, обеспечивая бесперебойную
            работу вашей системы умного дома. Мощный процессор: Обеспечивает
            быстрое и отзывчивое взаимодействие с вашими устройствами.
          </p>
          <p data-i18n="Hub_Aqara_M2_text_4">
            - Двухдиапазонный Wi-Fi: Обеспечивает стабильное и надежное
            подключение к вашей домашней сети.
          </p>
          <p data-i18n="Hub_Aqara_M2_text_5">
            - Гигабитный Ethernet-порт: Альтернативный вариант подключения для
            более надежного и безопасного соединения.
          </p>
          <p data-i18n="Hub_Aqara_M2_text_6">
            - Встроенный ИК-порт: Позволяет управлять IR-устройствами, такими
            как телевизоры, кондиционеры и вентиляторы, с помощью смартфона или
            голосовых команд.
          </p>
          <br />
          <p data-i18n="Hub_Aqara_M2_text_7">
            Удаленный доступ: Управляйте своим умным домом из любой точки мира с
            помощью приложения Aqara Home или голосовых команд через Умный дом
            Яндекс. Автоматизация и сценарии: Создавайте автоматизированные
            сценарии для выполнения действий в зависимости от установленных
            условий, например, включайте свет при возвращении домой или
            выключайте термостат при выходе. Локальное управление: Даже без
            подключения к интернету вы можете управлять своими
            Zigbee-устройствами непосредственно через хаб.
          </p>
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
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>-
          Bluetooth, Wi-Fi, ZigBee,
          <span data-i18n="IR_Port">ИК-Порт</span>
          <br />
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          42 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
