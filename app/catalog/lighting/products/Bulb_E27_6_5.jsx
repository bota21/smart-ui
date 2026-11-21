import ZoomableImage from "@/components/ZoomableImage";

export default function Bulb_E27_6_5({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <ZoomableImage
          src="../assets/img/4-light/Е27/Bulb_Gauss_E27_6.5W_filament_yellow.png"
          alt="Лампочка E27 6.5W Gauss филаментная, желтый"
          className="image_tab"
        />
        <div className="text_tab">
          <span data-i18n="Bulb_dimmable">Диммируемая лампочка</span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - WIZ
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>4 200
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
