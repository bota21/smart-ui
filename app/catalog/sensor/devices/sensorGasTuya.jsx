export default function SensorGasTuya({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_2" data-tab={dataTab}>
        <img
          src="./assets/img/1-sensor/Датчик_газа_Tuya.png"
          alt="Датчик газа Tuya"
          className="image_tab"
        />
        <div className="text_tab">
          Основным предназначением данного датчика является обнаружения утечки
          газа на ранней стадии и инициирования запуска сценариев умного дома с
          целью предотвращения последствий от утечки.
          <br />
          <br />
          Экосистема - Умный дом Яндекса, Smart Life
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - От сети
        </div>
        <div className="price_tab">Стоимость 17 500 тг</div>
      </div>
    </>
  );
}
