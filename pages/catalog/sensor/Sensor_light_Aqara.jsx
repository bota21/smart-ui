export default function Sensor_light_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_освещённости_Aqara.png"
          alt="Датчик освещённости Aqara"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_light_Aqara_text">
            Умный беспроводной датчик освещённости Aqara T1 передаёт хабу данные
            освещённости в комнате, а тот, в свою очередь, запускает
            автоматизации. Например, включает/выключает свет или
            открывает/закрывает шторы, отправляя команду соответствующим
            устройствам. Если освещённость упала до 200 лк — закрыть шторы.
            Когда вы войдёте в комнату вечером и включится свет, шторы уже будут
            закрыты, сохраняя приватность. Также чтобы дать рассаде достаточно
            света — работа по расписанию. Но, например, если днём станет
            пасмурно, то света для рассады будет недостаточно, а по расписанию
            включать свет рано. Установите датчик освещённости, и свет будет
            включаться тогда, когда стало темно.
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
          28 900
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
