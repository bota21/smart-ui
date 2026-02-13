export default function Sensor_open_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_открытия_Яндекс.png"
          alt="Датчик открытия дверей Яндекс"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_open_Yandex_text">
            Компактный беспроводный датчик реагирует на открытие дверей и окон.
            Свяжите датчик с разными устройствами и создавайте сценарии в
            приложении Дом с Алисой. Попробуйте задать сценарий, по которому
            датчик напомнит проветрить комнату, если окна закрыты больше 12
            часов. И свяжите его с умным кондиционером, чтобы кондиционер не
            работал впустую, пока вы проветриваете. А ещё можно привязать датчик
            к умной лампочке — и свет в прихожей будет включаться автоматически,
            когда вы приходите домой.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- CR2032
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          13 100
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
