export default function Sensor_smoke_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_дыма_Aqara.png"
          alt="Датчик дыма Aqara"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_smoke_Aqara_text">
            Умный датчик дыма Aqara Smart Smoke Detector - Зафиксирует
            задымление, включит сигнализацию и отправит push-уведомление на
            смартфон. Работает на батарее CR17450. В датчик встроена мощная
            сирена на 90 дБ, которая включается при обнаружении задымления.
            Также включается мигающий красный светодиод. Автоматически все
            датчики дыма связаны между собой. Например, у вас установлены
            датчики в каждой комнате. Как только в одной комнате будет
            зафиксировано возгорание, сигнализация включится автоматически на
            всех датчиках. Тем самым, датчики «подстраховывают» друг друга. У
            датчика дыма рекордная автономность — до 10 лет работы на одном
            заряде батареи.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          , Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- CR17450
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          30 240
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
