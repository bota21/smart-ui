export default function Light_table_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/4-light/эмби лампа яндекс.png"
          alt="Light_table_Yandex"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Light_table_Yandex_text_1">
            Модель YNDX-00560 представляет собой интеллектуальное световое
            решение с поддержкой RGBW-спектра и световым потоком 220 лм.
          </span>
          <p data-i18n="Light_table_Yandex_text_2">
            Устройство поддерживает дистанционное управление через мобильный
            софт и голосовых ассистентов, позволяя автоматизировать работу по
            расписанию. Также предусмотрен ручной сенсорный интерфейс на верхней
            части корпуса.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          22 400
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
