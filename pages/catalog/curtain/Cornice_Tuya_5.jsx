export default function Cornice_Tuya_5({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/5-cornice/карниз Tuya.png"
          alt="карниз 5м"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Cornice_Tuya_text_1">
            Электродвигатель с поддержкой беспроводной Протокол связи Zigbee
            позволяет выполнять сценарий умного дома без необходимости прямого
            подключения к интернету или Wifi. Это одно из ключевых преимуществ
            технологии Zigbee. Возможно управление с помощью пульта управления,
            через приложение и с через колонку Алиса.
          </span>
          <p data-i18n="Cornice_Tuya_text_2">
            Комплектация: Телескопический карниз, электродвигатель, ПДУ
          </p>
          <span data-i18n="Need_hub">Нужен хаб</span>
          Tuya.
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>- Tuya,
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="wrapper_for_images_many">
          <img
            src="../assets/img/5-cornice/Комплект карниза Tuya.png"
            alt="Комплект карниза Tuya"
            className="images_in_wrapper"
            onclick="toggleZoom(this)"
          />
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          91 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
