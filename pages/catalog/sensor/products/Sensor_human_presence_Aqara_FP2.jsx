export default function Sensor_human_presence_Aqara_FP2({
  activeTab,
  tabNumber,
}) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_присутствия_Aqara_Presence_Sensor_FP2.png"
          alt="Датчик присутствия Aqara Presence Sensor FP2"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_human_presence_Aqara_FP2_text_1">
            Aqara Presence Sensor FP2 фиксирует малейшие движения с максимальной
            конфиденциальностью. Он обнаруживает присутствие, даже если вы не
            двигаетесь.
          </span>
          <p data-i18n="Sensor_human_presence_Aqara_FP2_text_2">
            Автоматизация освещения: Включайте свет автоматически, когда кто-то
            входит в комнату, и выключайте его, когда все уходят.
          </p>
          <p data-i18n="Sensor_human_presence_Aqara_FP2_text_3">
            Системы безопасности: Используйте датчик FP2 для включения
            сигнализации или камер безопасности, когда обнаруживается движение.
          </p>
          <p data-i18n="Sensor_human_presence_Aqara_FP2_text_4">
            Управление климатом: Регулируйте температуру автоматически, исходя
            из того, присутствуют ли люди в комнате.
          </p>
          <p data-i18n="Sensor_human_presence_Aqara_FP2_text_5">
            Управление шторами: Автоматически открывайте шторы утром, когда
            кто-то встает с кровати. FP2 может определить, находится ли кто-то
            еще в постели, и автоматизация пробуждения не сработает, если другой
            человек не проснулся.
          </p>
          <p>
            <span data-i18n="Need_hub">Нужен хаб</span>
            Aqara.
            <br />
            <br />
            <span data-i18n="Ecosystem">Экосистема</span>
            - Aqara
            <br />
            <span data-i18n="Communication_protocol">Протокол связи</span>
            - ZigBee
            <br />
            <span data-i18n="Power">Питание</span>- CR2450
          </p>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          61 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
