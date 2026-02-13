export default function LED_Strip_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/4-light/светодиодная лента.png"
          alt="светодиодная лента"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="LED_Strip_Yandex_text">
            Светодиодная лента Яндекс YNDX-00544 с контроллером и адаптером
            питания исправно работает при управлении с помощью выключателя,
            голосовых команд и приложения «Дом с Алисой». Модель поддерживает
            настройку через протоколы связи Bluetooth, Wi-Fi и Matter. Последний
            вариант удобен при наличии в доме умных устройств от разных
            производителей.В одном метре ленты установлено 24 светодиода с
            интенсивностью свечения 250 лм. Поэтому Яндекс YNDX-00544 подходит
            для создания длинных сборок на потолке и стенах. Короткие отрезки
            дают недостаточно света, но успешно выполняют функцию декора.
            3-метровая лента с защитой от брызг и пыли IP65 подходит для
            уличного и монтажа в ванной комнате.
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
          <span data-i18n="Cost">Стоимость</span>
          28 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
