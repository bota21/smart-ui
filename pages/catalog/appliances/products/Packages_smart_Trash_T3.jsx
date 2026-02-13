export default function Packages_smart_Trash_T3({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Сменные картриджи с пакетами для Xiaomi TowNew Smart Trash T3.png"
          alt="Сменные картриджи с пакетами для Xiaomi TowNew Smart Trash T3"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Packages_smart_trash_T3_text_1">Объем - 13.0 л</span>
          <p data-i18n="Packages_smart_trash_T3_text_2">
            Тип упаковки - коробка
          </p>
          <p data-i18n="Packages_smart_trash_T3_text_3">Сверхпрочный - Да</p>
          <p data-i18n="Packages_smart_trash_T3_text_4">
            Материал - полипропилен
          </p>
          <p data-i18n="Packages_smart_trash_T3_text_5">
            Размер - 24.5 х 3.7 х 14 см
          </p>
          <p data-i18n="Packages_smart_trash_T3_text_6">
            Количество в упаковке - 150
          </p>
        </div>

        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          40 400
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
