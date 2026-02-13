export default function Control_boiler_Bugatti({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/6-sanitary/Модуль управления котлом Wi-Fi Federica Bugatti.png"
          alt="/Модуль управления котлом Wi-Fi Federica Bugatti"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Control_boiler_Bugatti_text_1">
            Модуль управления котлом Wi-Fi Federica Bugatti — современное
            решение для умного управления вашим отоплением. Этот модуль
            обеспечивает не только удобство дистанционного контроля, но и
            автоматизацию работы вашей системы отопления, делая дом комфортнее и
            экономичнее.
          </span>
          <p data-i18n="Control_boiler_Bugatti_text_2">
            Этот модуль сочетает в себе передовые технологии, простоту
            использования и высокую надежность. Вы получаете полный контроль над
            отоплением вашего дома, экономите ресурсы и создаете комфортный
            микроклимат в любое время.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Bugatti
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          85 500
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
