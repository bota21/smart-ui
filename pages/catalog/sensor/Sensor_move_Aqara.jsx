export default function Sensor_move_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик движения Aqara Motion Sensor P1 MS-S02.png"
          alt="Датчик движения Aqara Motion Sensor P1 MS-S02"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_move_Aqara_text">
            Обновленная версия датчика движения – Aqara Motion Sensor P1. Датчик
            обнаруживает движение и определяет уровень освещенности в комнате.
            Может отправлять уведомление на смартфон или выполнить
            автоматизацию, например включить свет. Тайм-аут обнаружения можно
            настроить от 1 до 200 секунд. Больше никаких задержек срабатывания.
            Широкий угол обзора: 170° на расстоянии до 2 метров, 150° на
            расстоянии до 7 метров. А ножку датчика возможно повернуть на 360°,
            тем самым можно фиксировать движение только в нужной области.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- CR2450
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          13 300
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
