export default function Control_boiler_Beok_black({ activeTab, tabNumber }) {
  return (
    <>
      {" "}
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/6-sanitary/Терморегулятор Beok для газового и электрического котла черный.png"
          alt="Терморегулятор Beok для газового и электрического котла черный"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Control_boiler_Beok_text_1">
            Терморегулятор для газового и электрического котла с Wi-Fi - это
            современное и функциональное устройство, которое позволяет
            поддерживать необходимую температуру в помещении.
          </span>
          <p data-i18n="Control_boiler_Beok_text_2">
            Терморегулятор подходит для управления газовыми и электрическими
            котлами отопления Baxi, Buderus, Bosch, Protherm, Wolf, Vaillant,
            Viessmann, Zota, Ariston, Navien, Mizudo, Эван, Thermex, Electro,
            Kiturami, Rinnai и другие. С помощью терморегулятора вы сможете
            управлять котлом отопления из любой точки мира через интернет, что
            делает его незаменимым помощником в быту. Термостат оснащен
            сенсорным управлением и поддерживает различные настройки температуры
            и заданных значений. Благодаря встроенному датчику температуры,
            устройство автоматически определяет фактическую температуру в
            помещении и начинает работу при необходимости.
          </p>
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
          34 500
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
