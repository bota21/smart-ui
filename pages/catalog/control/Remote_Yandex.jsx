export default function Remote_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/Пульт ДУ Яндекс.png"
          alt="DU yandex"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Remote_Yandex_text_1">
            Автоматизировать бытовую технику при помощи умного пульта Yandex
            SmartControl YNDX-0006 проще, чем может показаться. С его помощью
            можно управлять техникой, например телевизором или кондиционером, а
            также любым другим устройством, которое поддерживает ИК-соединение.
          </span>
          <p data-i18n="Remote_Yandex_text_2">
            Также осуществляется передача данных посредством технологии Wi-Fi.
            Используя модель, можно не только включать/выключать технику, но и
            настраивать её.
          </p>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          12 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
