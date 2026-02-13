export default function Smart_Din_Tuya_63A({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-Switch/Умный ZigBee автомат 63A.png"
          alt="ZigBee автомат 63A"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Smart_Din_Tuya_63A_text_1">
            Умный ZigBee автомат с защитой от перегрузки и короткого замыкания
            63A управляет освещением и другими электроприборами. Работает под
            управлением выключателей и мобильного приложения «ЯСмарт».
            Устройство совместимо с голосовым управлением Яндекс Алиса, Google
            Assistant, Alexa. Умный ZigBee автомат с защитой от перегрузки и
            короткого замыкания 63A.
          </span>
          <p data-i18n="Smart_Din_Tuya_63A_text_2">
            Ручное управление устройством кнопкой управления
          </p>
          <p data-i18n="Smart_Din_Tuya_63A_text_3">
            Контроль через Интернет, без абонентской платы
          </p>
          <p data-i18n="Smart_Din_Tuya_63A_text_4">
            Недельное/дневное расписание автоматического включения и выключения
          </p>
          <p data-i18n="Smart_Din_Tuya_63A_text_5">Таймер обратного отсчета</p>
          <p data-i18n="Smart_Din_Tuya_63A_text_6">
            Push-уведомление на телефон при выполнении действия по расписанию
          </p>
          <span data-i18n="Need_hub">Нужен хаб</span>
          Tuya.
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
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          110 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
