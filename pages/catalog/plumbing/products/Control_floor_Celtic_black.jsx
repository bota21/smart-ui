export default function Control_floor_Celtic_black({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/6-sanitary/терморегулятор селтик черный.png"
          alt="терморегулятор селтик черный"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Control_floor_Celtic_text_1"></span>
          Умный терморегулятор Celtic DS M3hgb — современное решение для
          управления температурой в вашем доме, обеспечивающее комфорт и
          энергосбережение.
          <p data-i18n="Control_floor_Celtic_text_2">Особенности:</p>
          <p data-i18n="Control_floor_Celtic_text_3">
            - Работа с Алисой — управление голосом для вашего удобства.
          </p>
          <p data-i18n="Control_floor_Celtic_text_4">
            - Сенсорный дисплей — интуитивно понятный интерфейс для легкого
            управления.
          </p>
          <p data-i18n="Control_floor_Celtic_text_5">
            - Программируемый режим — настройка температуры в зависимости от
            времени суток.
          </p>
          <p data-i18n="Control_floor_Celtic_text_6">
            - Максимальная нагрузка 3500 Вт — подходит для большинства систем
            отопления.
          </p>
          <p data-i18n="Control_floor_Celtic_text_7">
            - Регулирование температуры от 5°C до 50°C — идеальный выбор для
            любого времени года.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Smart Life
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
