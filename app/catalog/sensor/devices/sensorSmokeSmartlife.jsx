export default function SensorSmokeSmartlife({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_2" data-tab={dataTab}>
        <img
          src="./assets/img/1-sensor/Датчик_дыма_SmartLife.png"
          alt="Датчик_дыма_SmartLife"
          className="image_tab"
        />
        <div className="text_tab">
          Быстро реагирует на дым. Благодаря высокой чувствительности
          (0,089-0,25 дБ/м) датчик вовремя заметит очаг возгорания и подаст
          звуковой сигнал. Настройте уведомления в мобильном приложении «Дом с
          Алисой» и получайте push, когда датчик заметит дым. Долго держит
          батарею. Датчик работает по беспроводному протоколу Zigbee и расходует
          энергию только в момент срабатывания и отправки уведомлений. Прост в
          установке. Датчик крепится с помощью липкого слоя.
          <br />
          <br />
          Экосистема - Умный дом Яндекса, Smart Life
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - CR123A
        </div>
        <div className="price_tab">Стоимость 13 300 тг</div>
      </div>
    </>
  );
}
