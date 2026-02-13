export default function Control_floor_Electsmart_black({
  activeTab,
  tabNumber,
}) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/6-sanitary/терморегулятор Electsmart .png"
          alt="терморегулятор Electsmart "
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Control_floor_Electsmart_black_text">
            Терморегулятор подходит почти для каждого электрического теплого
            пола мощностью до 3500 Вт, водяных полов с коллектором и
            сервоприводом, для которых характерен тип "нормально закрытый".
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Smart Life
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          49 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
