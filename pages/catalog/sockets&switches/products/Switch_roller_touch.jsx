export default function Switch_roller_touch({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-Switch/управление роллет.png"
          alt="управление роллет"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Switch_roller_touch_text">
            Умный Wi-Fi выключатель управления шторами предназначен для
            управления электрокарнизами штор, рулонных штор, рольставен.
            Используйте устройство в качестве привычного комнатного выключателя
            с возможностью управления приводом штор из мобильного приложения.
            Устройство устанавливается на место «обычного» выключателя, является
            беспроводным устройством Wi-Fi.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Tuya
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
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
