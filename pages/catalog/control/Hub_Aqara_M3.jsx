export default function Hub_Aqara_M3({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/Хаб Aqara Hub M3 EU.png"
          alt="Хаб Aqara Hub M3 EU"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Hub_Aqara_M3_text_1">
            Aqara M3 — это хаб нового поколения с расширенной поддержкой
            протоколов, локальных автоматизаций и высокой совместимостью. Он
            объединяет устройства Aqara и девайсы сторонних производителей с
            поддержкой Matter, а также технику, управляемую через ИК-пульты.
            Особенности • Широкая совместимость: поддержка Matter, Zigbee,
            Thread, Wi-Fi, Bluetooth и инфракрасного управления (ИК).
          </span>
          <p data-i18n="Hub_Aqara_M3_text_2">
            Интеграция с Matter: впервые позволяет объединить экосистему Aqara с
            устройствами сторонних производителей через Matter*.
          </p>
          <p data-i18n="Hub_Aqara_M3_text_3">
            ИК-управление 360°: встроенный ИК-излучатель с углом обзора 360°
            управляет бытовой техникой — от телевизоров до кондиционеров.
          </p>
          <p data-i18n="Hub_Aqara_M3_text_4">
            Обеспечивает локальное выполнение автоматизаций для устройств —
            сценарии продолжают работать даже, если пропадет подключение к
            интернету.
          </p>
          <p data-i18n="Hub_Aqara_M3_text_5">
            Встроенный динамик 95 дБ: используется для оповещений о событиях
            безопасности и пользовательских сценариев — даже без доступа в
            интернет.
          </p>
          <p data-i18n="Hub_Aqara_M3_text_6">
            Благодаря функции Matter Bridge центр умного дома (хаб) Aqara M3
            бесшовно интегрирует Zigbee-устройства в экосистему Matter, включая
            Умный дом Яндекс.
          </p>
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
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>-
          Bluetooth, Wi-Fi, ZigBee,
          <span data-i18n="IR_Port">ИК-Порт</span>
          <br />
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          103 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
