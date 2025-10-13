export default function SensorSmokeTuya({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_2" data-tab={dataTab}>
        <img
          src="./assets/img/1-sensor/Датчик_дыма_Tuya.png"
          alt="Датчик_дыма_Tuya"
          className="image_tab"
        />
        <div className="text_tab">
          Независимый умный датчик дыма. Принцип работы: обнаружение дыма,
          звуковое оповещение, уведомления в приложении
          <br />
          <br />
          Экосистема - Умный дом Яндекса, Tuya
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - CR123А
        </div>
        <div className="price_tab">Стоимость 17 780 тг</div>
      </div>
    </>
  );
}
