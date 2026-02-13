export default function Switch_Yandex_2x({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-Switch/Выключатель Яндекс двухклавишный.png"
          alt="Выключатель Яндекс двухклавишный"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Switch_Yandex_text_1">
            С помощью проводного умного выключателя можно управлять подключенным
            к нему освещением — например, люстрой с обычными лампочками.
          </span>
          <p data-i18n="Switch_Yandex_text_2">
            Пожароустойчивый пластик класса V0 обеспечивает дополнительную
            надежность, а вентиляционные отверстия в корпусе выключателя отводят
            от него тепло.
          </p>
          <p data-i18n="Switch_Yandex_text_3">
            Выключатель работает на протоколе Zigbee, он легко подключается к
            умному дому, а настроенные сценарии с выключателем могут работать,
            даже если отключится интернет. Для подключения проводного
            выключателя вам понадобятся приложение Дом с Алисой и устройство с
            хабом Zigbee, подключенное к интернету (Яндекс Станция или Хаб).
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
          <br />
          <br />
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          23 100
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
