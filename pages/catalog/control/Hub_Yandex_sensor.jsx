export default function Hub_Yandex_sensor({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/Умный пульт с датчиком температуры и влажности YNDX-00571.png"
          alt="hub yandex with sensor"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Hub_Yandex_sensor_text_1">
            Умный ИК-пульт Яндекса YNDX-00571 со встроенным датчиком температуры
            и влажности позволяет не только управлять обычной домашней техникой
            с ИК-портом голосом или удаленно, но и автоматизировать работу
            климатических устройств, создавать удобные сценарии и настраивать
            Умный климат.
          </span>
          <p>
            <span data-i18n="Hub_Yandex_sensor_text_2">
              Кондиционеры, вентиляторы, обогреватели, телевизоры,
              телеприставки, ресиверы — соедините любую технику, управляемую с
              помощью ИК-сигнала, с умным ИК-пультом и управляйте как удобно.
            </span>
          </p>
          <p data-i18n="Hub_Yandex_sensor_text_3">
            Встроенный в пульт датчик в реальном времени отслеживает температуру
            и влажность в комнате.
          </p>
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
          <br />
          <span data-i18n="Type">Тип</span>-
          <span data-i18n="Control_center">Центр управления</span>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>-
          Bluetooth, Wi-Fi,
          <span data-i18n="IR_Port">ИК-Порт</span>
          <br />
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          33 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
