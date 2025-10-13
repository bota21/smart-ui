export default function SensorWaterSonoff({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_2" data-tab={dataTab}>
        <img
          src="./assets/img/1-sensor/Датчик_протечки_Соноф.png"
          alt="Датчик протечки Соноф"
          className="image_tab"
        />
        <div className="text_tab">
          Умный датчик протечки воды защищает вашу квартиру от неприятных
          сюрпризов. Он срабатывает, как только вода попадает на контакты на его
          нижней панели. Проверять статус smartдатчика и управлять им можно в
          приложении, и с помощью голосового помощника Алиса. К умному дому
          датчик подключается по протоколу Zigbee.
          <br />
          <br />
          Экосистема - Умный дом Яндекса
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - CR2477
        </div>
        <div className="price_tab">Стоимость 8 400 тг</div>
      </div>
    </>
  );
}
