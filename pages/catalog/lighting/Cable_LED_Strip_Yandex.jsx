export default function Cable_LED_Strip_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/4-light/светодиодная лента удлинитель.png"
          alt="светодиодная лента удлинитель"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Cable_LED_Strip_Yandex_text">
            Удлинитель светодиодной ленты Яндекс YNDX-00547 подходит для
            увеличения сборок с 24 диодами на 1 метр. Плотная оплетка полностью
            защищает контакты от пыли и влаги, допускает установку на улице или
            в ванной комнате. Яркости светового потока 250 лм хватает для
            создания фонового или декоративного освещения, зонирования
            помещения.Яндекс YNDX-00547 поддерживает нейтральный белый свет и
            настройку оттенков и эффектов RGB. Есть поддержка управления с
            простого выключателя, контроллера, приложения на смартфоне и
            голосовых команд.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Matter
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>6 300
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
