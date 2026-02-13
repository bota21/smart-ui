export default function Button_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-Switch/Кнопка Яндекс.png"
          alt="Кнопка Яндекс"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Button_Yandex_text">
            Работает от батареек и может стать удобным дверным звонком или
            единственной кнопкой для запуска и выключения разных устройств.
            Компактную кнопку легко установить где угодно, будь то дверной косяк
            или прикроватный столик. Свяжите кнопку с разными устройствами и
            создавайте сценарии в приложении Дом с Алисой. Попробуйте установить
            кнопку как дверной звонок — и она будет передавать сигнал на Яндекс
            Станцию и сообщение в приложение Дом с Алисой, когда к вам придут.
            Или поставьте беззвучный режим, если не хотите, чтобы вас беспокоили
            непрошенные гости.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- CR2032
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          14 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
