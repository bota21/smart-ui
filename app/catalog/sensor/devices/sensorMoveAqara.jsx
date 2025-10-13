export default function SensorMoveAqara({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_2" data-tab={dataTab}>
        <img
          src="./assets/img/1-sensor/Датчик движения Aqara Motion Sensor P1 MS-S02.png"
          alt="Датчик движения Aqara Motion Sensor P1 MS-S02"
          className="image_tab"
        />
        <div className="text_tab">
          Обновленная версия датчика движения – Aqara Motion Sensor P1. Датчик
          обнаруживает движение и определяет уровень освещенности в комнате.
          Может отправлять уведомление на смартфон или выполнить автоматизацию,
          например включить свет. Тайм-аут обнаружения можно настроить от 1 до
          200 секунд. Больше никаких задержек срабатывания. Широкий угол обзора:
          170° на расстоянии до 2 метров, 150° на расстоянии до 7 метров. А
          ножку датчика возможно повернуть на 360°, тем самым можно фиксировать
          движение только в нужной области.
          <br />
          <br />
          Экосистема - Умный дом Яндекса
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - CR2450
        </div>
        <div className="price_tab">Стоимость 13 200 тг</div>
      </div>
    </>
  );
}
