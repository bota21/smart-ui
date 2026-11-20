import ZoomableImage from "@/components/ZoomableImage";

export default function Dimmer_Bseed({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <ZoomableImage
          src="../assets/img/3-Switch/Dimmer_Bseed.png"
          alt="Диммер Bseed"
          className="image_tab"
        />
        <div className="text_tab">
          <span data-i18n="Dimmer_Bseed_text">
            Умный диммер — это идеальное решение для управления интенсивностью
            освещения в вашем умном доме. С помощью этого устройства вы можете
            легко регулировать уровень яркости подключенных световых приборов
            как с мобильного приложения, так и вручную, используя сенсор на лице
            устройства.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          22 400
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
