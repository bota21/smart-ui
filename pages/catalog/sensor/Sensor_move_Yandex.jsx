export default function Sensor_move_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/датчик_движения.png"
          alt="датчик движения"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="sensor_move_text">
            Улавливает движение и запускает удобные сценарии освещения. Или
            передаёт, что в помещении кто-то есть.Беспроводной компактный датчик
            можно установить где угодно, в квартире или на даче: в прихожей,
            ванной, комнатах и даже на лоджии. Свяжите датчик с другими
            устройствами умного дома и создавайте множество удобных сценариев в
            приложении Дом с Алисой. Например, освещение в прихожей сможет
            включаться автоматически, когда вы вернётесь домой. А чтобы свет не
            горел зря, можно настроить его выключение при отсутствии движения.
            Также в приложении легко настроить пуш-уведомления — с ними вы
            всегда будете в курсе, например, если дома возникнет какое-то
            движение, пока вас нет. Для подключения датчика к Умному дому с
            Алисой нужна Станция, поддерживающая протокол Zigbee.
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
