export default function Driver_curtain_Aqara_rod({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/5-cornice/Мотор раздвижных штор  Aqara Curtain Driver E1 (Rod Version).png"
          alt="Мотор раздвижных штор  Aqara Curtain Driver E1 (Rod Version)"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Driver_curtain_Aqara_rod_text_1">
            Это умный привод для автоматического открытия и закрытия штор,
            разработанный для установки на шторные карнизы-стержни. Устройство
            позволяет управлять шторами дистанционно через смартфон, по
            расписанию или с помощью голосовых команд, интегрируясь в популярные
            экосистемы умного дома.
          </span>
          <p data-i18n="Driver_curtain_Aqara_rod_text_2">
            Прочный корпус и качественные материалы гарантируют долговечность
            работы. Умный привод для штор Aqara — это шаг к полной автоматизации
            домашнего пространства, повышению комфорта и энергоэффективности.
          </p>
          <span data-i18n="Need_hub">Нужен хаб</span>
          Aqara.
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Zigbee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="From_the_battery">Oт аккумулятора</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          75 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
