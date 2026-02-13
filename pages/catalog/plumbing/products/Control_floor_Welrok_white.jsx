export default function Control_floor_Welrok_white({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/6-sanitary/терморегулятор welrok.png"
          alt="терморегулятор welrok"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Control_floor_Welrok_white_text_1">
            Умный терморегулятор Welrok для управления теплым полом через
            смартфон или компьютер. Уникальная функция в приложении Welrok
            экономит деньги благодаря автоматическому снижению нагрева, когда
            дома никого нет.
          </span>
          <p data-i18n="Control_floor_Welrok_white_text_2">
            После активации функции геозонирования, терморегулятор Welrok будет
            учитывать геолокацию всех пользователей, которым был предоставлен
            доступ. Когда вы выйдете за выбранный радиус, Welrok уменьшит или
            отключит обогрев в зависимости от выставленных настроек. Когда вы
            вернетесь в выбранный радиус, терморегулятор установит комфортную
            температуру. Меняйте температуру нагрева и настройки терморегулятора
            с помощью Алисы от Яндекс.
          </p>
          <p data-i18n="Control_floor_Welrok_white_text_3">
            Wi-Fi терморегуляторы Welrok можно интегрировать с вашей системой
            Умный дом через MQTT и http API.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Welrok
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Matter, WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          37 800
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
