export default function LED_Strip_Kojimo({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/4-light/светодиодная лента kojimo.png"
          alt="светодиодная лента kojimo"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="LED_Strip_Kojimo_text">
            Умная светодиодная Wi-Fi RGB лента KOJIMA с регулируемым световым
            потоком от 70 до 800 люмен, низким энергопотреблением. Мобильное
            приложение адаптировано под большинство устройств IOS и ANDROID. Вы
            с легкостью сможете управлять яркостью и цветом, устанавливать
            динамические сцены, включать и выключать свет по расписанию с
            функцией таймер, управлять группой лент одним нажатием, управлять с
            помощью голосового ассистента Яндекс Алисы.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - KOJIMA HOME
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          21 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
