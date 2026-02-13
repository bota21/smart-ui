export default function Control_heater_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/6-sanitary/терморегулятор радиатора акара.png"
          alt="терморегулятор радиатора акара"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Control_heater_Aqara_text">
            Терморегулятор для радиатора (термостат) Aqara Smart Radiator
            Thermostat E1 - регулирует температуру радиаторов отопления.
            Вкручивается вместо обычной термоголовки с резьбой M30x1,5 мм.
            Используйте с датчиком температуры и наслаждайтесь комфортной
            температурой в любой части дома. Устройство оснащено адаптерами,
            которые делают его совместимым с подавляющим большинством
            радиаторных клапанов. Он также прост в установке и не требует
            монтажных навыков: просто вкрутите устройство вместо старой
            термоголовки. В случае риска замерзания трубы отопление будет
            включаться автоматически.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          , Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- АА х 2
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          47 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
