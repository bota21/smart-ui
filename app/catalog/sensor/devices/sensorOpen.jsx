export default function SensorOpen({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_2" data-tab={dataTab}>
        <img
          src="./assets/img/1-sensor/Датчик_открытия.png"
          alt="Датчик открытия дверей"
          className="image_tab"
        />
        <div className="text_tab">
          Датчик открытия дверей и окон на базе протокола Zigbee надежно
          реагирует на открытие дверей и окон, позволяя вам создавать
          разнообразные сценарии умного дома в приложении Дом с Алисой. Свяжите
          датчик с различными устройствами и настройте сценарии, которые будут
          автоматически запускаться при срабатывании датчика.
          <br />
          <br />
          Экосистема - Умный дом Яндекса
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - CR2032
        </div>
        <div className="price_tab">Стоимость 4 000 тг</div>
      </div>
    </>
  );
}
