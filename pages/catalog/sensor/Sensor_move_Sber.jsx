export default function Sensor_move_Sber({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик движения Sber.png"
          alt="Датчик движения Sber"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_move_Sber_text">
            Умный датчик движения Sber реагирует на перемещение источников
            тепла. Настраивайте удобные сценарии автоматизации: например, пусть
            датчик включает свет в прихожей, когда регистрирует движение.
            Устанавливайте его на потолок в прихожей или на стену в туалете –
            благодаря работе от батареек, вы можете разместить устройство в
            любом удобном месте без необходимости прокладывать провода. Умный
            датчик движения Sber отлично интегрируется с различными
            светильниками, позволяя создать идеальную атмосферу в вашем доме.
            При обнаружении движения он может автоматически включать лампу,
            обеспечивая мгновенное освещение в нужный момент. Также его можно
            использовать для управления фонарём на улице, что повысит уровень
            безопасности вашего участка.
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
          14 400
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
