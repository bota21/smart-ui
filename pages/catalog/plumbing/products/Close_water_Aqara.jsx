export default function Close_water_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/6-sanitary/привод протечки Aqara.png"
          alt="привод протечки Aqara"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Close_water_Aqara_text">
            Умный манипулятор A ARA T1-VC-X01E— это устройство управления
            клапаном, основанное на протоколе беспроводной связи Zigbee,
            подходящее для интеллектуального, электрического управления (с
            помощью кнопки на устройстве) и ручного управления водопроводными
            системами. Оно может быть связано с такими устройствами, как датчики
            утечки воды, для выявления рисков, отправки уведомлений и их
            устранения, тем самым защищая имущество и обеспечивая безопасность.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- АА х 2
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          50 400
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
