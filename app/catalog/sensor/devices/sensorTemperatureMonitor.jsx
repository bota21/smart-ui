export default function SensorTemperatureMonitor({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_2" data-tab={dataTab}>
        <img
          src="./assets/img/1-sensor/Датчик_температуры_-_монитор_.png"
          alt="Датчик температуры -(монитор)"
          className="image_tab"
        />
        <div className="text_tab">
          Умное решение для контроля климата в вашем доме, обеспечивающее точные
          измерения и удобное управление через мобильные приложения. Легко
          разместить в любом помещении. Идеально подходит для тех, кто хочет
          создать умный дом и следить за климатом в помещениях, обеспечивая
          комфорт и здоровье для всей семьи.
          <br />
          <br />
          Экосистема - Умный дом Яндекса
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - CR2032
        </div>
        <div className="price_tab">Стоимость 9 800 тг</div>
      </div>
    </>
  );
}
