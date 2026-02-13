export default function Robot_cleaner_DREAME_D20({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Робот-пылесос DREAME Robot Vacuum D20 Ultra.png"
          alt="Робот-пылесос DREAME Robot Vacuum D20 Ultra"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Robot_cleaner_DREAME_D20_text_1">
            Режимы и функции: построение карты помещения, ограничитель зоны
            уборки, режим локальной уборки, автоматический возврат на зарядную
            станцию, обход препятствий, самозарядка.
          </span>
          <p data-i18n="Robot_cleaner_DREAME_D20_text_2">
            В комплекте: Робот-пылесос, Базовая станция, Боковая щетка,
            Держатель салфеток, Мешок для мусора, Руководство пользователя
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
          350 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
