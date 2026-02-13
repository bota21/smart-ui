export default function Slug_Roximo({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-socket/Умная розетка ROXIMO.png"
          alt="Умная розетка ROXIMO"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Slug_Roximo_text">
            Устройством можно управлять с помощью специального приложения и
            просматривать статистику по энергопотреблению из любой точки
            планеты. Можно добавлять умные сценарии и расписания
            включения/выключения по времени, обратному отсчету, циклу, а также в
            зависимости от таких триггеров как погода, время заката и восхода
            солнца, вашего местоположения. Интеграция с Yandex Алиса - позволяет
            управлять умной розеткой голосом.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Zigbee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          16 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
