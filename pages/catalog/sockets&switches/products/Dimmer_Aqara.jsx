export default function Dimmer_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <div className="wrapper_for_images">
          <div className="wrapper_for_image_first">
            <img
              src="../assets/img/3-Switch/Диммер Aqara - white.png"
              alt="Диммер Aqara - white"
              className="image_tab"
              onclick="toggleZoom(this)"
            />
          </div>
          <div className="wrapper_for_image_first">
            <img
              src="../assets/img/3-Switch/Диммер Aqara - black.png"
              alt="Диммер Aqara - black"
              className="image_tab"
              onclick="toggleZoom(this)"
            />
          </div>
        </div>
        <div className="text_tab">
          <span data-i18n="Dimmer_Aqara_text_1">
            Настенный диммер H2 — умное устройство, которое не только включает и
            выключает свет, но и позволяет плавно регулировать его яркость с
            высокой точностью. Интуитивное управление с помощью поворотной
            кнопки позволяет легко настроить освещение под ваше настроение и
            потребности.
          </span>
          <p data-i18n="Dimmer_Aqara_text_2">
            Настенный диммер может работать как с нейтральным проводом, так и
            без него. Совместим с различными типами ламп, включая лампы
            накаливания, галогенные, диммируемые светодиодные и компактные
            люминесцентные лампы (CFL).Он может напрямую регулировать лампы
            накаливания, диммируемые светодиодные лампы, галогенные лампы,
            люминесцентные светильники и ELV-устройства, обеспечивая плавное
            диммирование с точностью до 1%.
          </p>
          <span data-i18n="Need_hub">Нужен хаб</span>
          Aqara
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          39 200
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
