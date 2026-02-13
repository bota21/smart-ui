export default function Control_LED_Strip({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/4-light/Диммер для светодиодной ленты  12,24V 15А.png"
          alt="Диммер для светодиодной ленты  12,24V 15А"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Control_LED_Strip_text">
            Контроллер диммер для умного дома, работает с Алисой. Позволяет
            регулировать яркостью светодиодных лент через голосового помощника
            или с помощью сценарий.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Magic Home
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>8 800
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
