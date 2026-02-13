export default function Sensor_vibration({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/датчик_вибрации.png"
          alt="датчик вибрации"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_vibration_text_1">
            Беспроводной датчик проследит за сохранностью отдельных предметов —
            окна, сейфа, ящика с ценным документами. В случае инцидента, датчик
            отправит сообщение на смартфон или включит звуковую сирену на Aqara
            Hub. Датчик умеет фиксировать три типа событий: наклон, падение и
            вибрацию.
          </span>
          <br />
          <span data-i18n="Sensor_vibration_text_2">
            — Если окно откроют, сработает режим наклона.
          </span>
          <br />
          <span data-i18n="Sensor_vibration_text_3">
            — Если по окну ударят, он распознает вибрацию.
          </span>
          <br />
          <span data-i18n="Sensor_vibration_text_4">
            — Если разобьют стекло, датчик сообщит о падении.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- CR2032
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
