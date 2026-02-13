export default function TV_165({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/тв 165.png"
          alt="tv 165 yandex"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <br />
          <span data-i18n="Station_Alice_TV165_text_1">
            - Разрешение 4K UHD — наслаждайтесь четкостью и яркостью
            изображения.
          </span>
          <br />
          <span data-i18n="Station_Alice_TV165_text_2">
            - Акустическая система Dolby Audio — погружение в объемный звук.
          </span>
          <br />
          <span data-i18n="Station_Alice_TV165_text_3">
            - Поддержка Smart TV — доступ к любимым приложениям и контенту.
          </span>
          <br />
          <span data-i18n="Station_Alice_TV165_text_4">
            - Угол обзора 178° — отличное качество изображения с любого ракурса.
          </span>
          <br />
          <span data-i18n="Station_Alice_TV165_text_5">
            - Множество входов — HDMI, USB, Ethernet и Bluetooth для подключения
            различных устройств.
          </span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          518 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
