export default function SensorGasAqara({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_2" data-tab={dataTab}>
        <img
          src="./assets/img/1-sensor/Детектор_газа.png"
          alt="Детектор газа"
          className="image_tab"
        />
        <div className="text_tab">
          Умный датчик газа Aqara Smart Natural Gas Detector - зафиксирует
          утечку газа, включит сигнализацию и отправит push-уведомление на
          смартфон. Подключается к сети 220 В. В датчик встроена мощная сирена
          на 85 дБ, которая включается при обнаружении утечки. Также включается
          мигающий красный светодиод. При обнаружении утечки включит сирену на
          всех хабах. На смартфон отправляется push-уведомление.
          <br />
          <br />
          Экосистема - Умный дом Яндекса, Aqara
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - От сети
        </div>
        <div className="price_tab">Стоимость 29 330 тг</div>
      </div>
    </>
  );
}
