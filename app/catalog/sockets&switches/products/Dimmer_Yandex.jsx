import ZoomableImage from "@/components/ZoomableImage";

export default function Dimmer_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <ZoomableImage
          src="../assets/img/3-switch/Dimmer_Yandex.png"
          alt="Диммер Яндекс"
          className="image_tab"
        />
        <div className="text_tab">
          <span data-i18n="Dimmer_Yandex_text">
            Умный диммер Яндекса поможет настроить освещение дома именно так,
            как вам нужно. С ним легко регулировать уровень яркости люстр и
            светильников с диммируемыми лампочками: от бодрящего яркого до
            расслабляющего приглушенного. Диммер работает только с лампочками,
            оснащёнными встроенной системой регулировки яркости. Устанавливается
            в стандартный круглый подрозетник и подключается только с нейтралью.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-{" "}
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>15 260
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
