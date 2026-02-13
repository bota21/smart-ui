export default function Slug_Tuya({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-socket/Умная розетка Tuya.png"
          alt="Умная розетка Tuya"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Slug_Tuya_text">
            Умная розетка MATTER -16А. Работает по протоколу Matter. Управление
            с Алисой. Для добавлении и упровление надо только отсканировать QR и
            все !Ни какой хаб и шлюз не надо!
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
          10 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
