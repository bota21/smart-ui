export default function Boiler_THERMEX_Cometa({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/6-sanitary/Электрический двухконтурный котел THERMEX Cometa 12-24 Wi-Fi.png"
          alt="Электрический двухконтурный котел THERMEX Cometa 12-24 Wi-Fi"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Boiler_THERMEX_Cometa_text">
            Котел электрический двухконтурный Cometa 12-24 Wi-Fi от THERMEX –
            это современное решение для отопления и горячего водоснабжения
            вашего дома или дачи. Этот настенный котел с тепловой мощностью 24
            кВт способен эффективно обогреть помещение площадью до 240 кв.м.
            Благодаря двум контурам, котел Cometa 12-24 Wi-Fi обеспечивает не
            только комфортный микроклимат, но и подачу горячей воды для бытовых
            нужд. Управление котлом осуществляется с помощью интуитивно понятной
            панели управления, а также возможностью подключения к системе умного
            дома через Wi-Fi, что позволяет контролировать работу котла
            дистанционно, например, с помощью голосового помощника Алиса. Котел
            Cometa 12-24 Wi-Fi – это надежное и удобное решение для создания
            комфортных условий в вашем доме.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Thermex
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          717 200
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
