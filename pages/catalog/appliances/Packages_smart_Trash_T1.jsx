export default function Packages_smart_Trash_T1({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Сменные пакеты для Xiaomi Townew Smart Trash Can T1.png"
          alt="Сменные пакеты для Xiaomi Townew Smart Trash Can T1"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Packages_smart_trash_T1_text_1">Объем - 15.5 л</span>
          <p data-i18n="Packages_smart_trash_T1_text_2">
            Тип упаковки - коробка
          </p>
          <p data-i18n="Packages_smart_trash_T1_text_3">Сверхпрочный - Да</p>
          <p data-i18n="Packages_smart_trash_T1_text_4">
            Материал - полипропилен
          </p>
          <p data-i18n="Packages_smart_trash_T1_text_5">
            Размер - 20.5 х 3 х 20.5 см
          </p>
          <p data-i18n="Packages_smart_trash_T1_text_6">
            Количество в упаковке - 150
          </p>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          27 500
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
