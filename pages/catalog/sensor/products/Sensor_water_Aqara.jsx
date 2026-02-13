export default function Sensor_water_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик_протечки_Aqara_Water_Leak_Sensor_T1.png"
          alt="Датчик протечки Aqara Water Leak Sensor T1"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_water_Aqara_text_1">
            Защита от потопа: При обнаружении малейшей утечки воды датчик
            моментально отправляет оповещение на ваш смартфон, позволяя вам
            оперативно принять меры.
          </span>
          <p data-i18n="Sensor_water_Aqara_text_2">
            Предотвратите ущерб: Благодаря своевременному оповещению вы сможете
            перекрыть подачу воды и избежать дорогостоящего ремонта.
          </p>
          <p data-i18n="Sensor_water_Aqara_text_3">
            Размещение в любых местах: Компактный размер датчика позволяет
            установить его в потенциально опасных зонах, таких как кухня, ванная
            комната, прачечная или подвал.
          </p>
          <p data-i18n="Sensor_water_Aqara_text_4">
            Умные сценарии: Настройте автоматическое отключение подачи воды при
            срабатывании датчика, минимизируя ущерб от протечки.
          </p>
          <p data-i18n="Sensor_water_Aqara_text_5">
            Защита от пыли и воды: Датчик соответствует стандарту защиты IP67,
            гарантируя бесперебойную работу даже во влажных помещениях.
          </p>
          <p data-i18n="Sensor_water_Aqara_text_6">
            Длительная работа: Батарея обеспечивает до 2 лет автономной работы.
          </p>
          <br />
          <span data-i18n="Need_hub">Нужен хаб</span>
          Aqara.
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- CR2477
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          15 890
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
