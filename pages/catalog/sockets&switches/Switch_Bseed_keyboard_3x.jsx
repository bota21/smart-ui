export default function Switch_Bseed_keyboard_3x({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-Switch/Выключатель BSEED клавишный 3х.png"
          alt="Выключатель BSEED клавишный 1х"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Switch_Bseed_keyboard_text">
            С ним вы сможете управлять светом различными способами: голосом,
            через мобильное приложение или привычным механическим нажатием.
            Теперь не нужно будет вставать с дивана или подходить, если заняты
            руки. Находясь где угодно, можно проверить с телефона, не остался ли
            дома включенным свет, и дистанционно выключить его. Также вы сможете
            настроить включение / выключение света по таймеру в заданное время.
            Доступно запоминание последнего состояния (режима работы) при
            отключении электричества.
          </span>
          <br />
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
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          16 400
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
