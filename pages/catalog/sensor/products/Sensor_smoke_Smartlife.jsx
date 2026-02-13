export default function Sensor_smoke_Smartlife({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_дыма_SmartLife.png"
          alt="Датчик_дыма_SmartLife"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_smoke_Smartlife_text">
            Быстро реагирует на дым. Благодаря высокой чувствительности
            (0,089-0,25 дБ/м) датчик вовремя заметит очаг возгорания и подаст
            звуковой сигнал. Настройте уведомления в мобильном приложении «Дом с
            Алисой» и получайте push, когда датчик заметит дым. Долго держит
            батарею. Датчик работает по беспроводному протоколу Zigbee и
            расходует энергию только в момент срабатывания и отправки
            уведомлений. Прост в установке. Датчик крепится с помощью липкого
            слоя.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          , Smart Life
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- CR123A
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          20 800
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
