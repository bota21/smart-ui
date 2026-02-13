export default function Sensor_human_presence_Roximo({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/датчик_присутствия_и_освещенности_ROXIMO.png"
          alt="датчик присутствия и освещенности ROXIMO"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_human_presence_Roximo_text">
            Датчик присутствия определят находится ли в данный момент человек в
            поле обнаружения датчика. В настройках датчика можно установить
            параметры расстояния и чувствительности. Также в устройстве
            присутствует датчик освещенности, который так же можно использовать
            для различных сценариев - например включать освещение при низком
            уровне освещенности. Для удобства монтажа в комплекте поставляется
            крепление на клейкой ленте. Установка датчика производится на стене
            или потолке, в зависимости от условий эксплуатации.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - ROXIMO IoT
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          22 400
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
