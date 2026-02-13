export default function Robot_cleaner_DREAME_L40({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Робот-пылесос DREAME L40.png"
          alt="Робот-пылесос DREAME L40"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Robot_cleaner_DREAME_L40_text_1">Датчики:</span>
          <p data-i18n="Robot_cleaner_DREAME_L40_text_2">
            - датчик падения, датчик обнаружения препятствий, датчик определения
            типа поверхности, датчики обнаружения перепадов
          </p>
          <p data-i18n="Robot_cleaner_DREAME_L40_text_3">Режимы и функции:</p>
          <p data-i18n="Robot_cleaner_DREAME_L40_text_4">
            - построение карты помещения, уборка по расписанию, ограничитель
            зоны уборки, уборка в случайном порядке, режим локальной уборки,
            автоматический возврат на зарядную станцию, распознавание лестницы,
            обход препятствий, самозарядка
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Dreame Home
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          274 400
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
