export default function SensorGasTricolorPropan({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_2" data-tab={dataTab}>
        <img
          src="./assets/img/1-sensor/Датчик_газа__метан__GS_SGMHM-I1.png"
          alt="Датчик газа (метан) GS SGMHM-I1"
          className="image_tab"
        />
        <div className="text_tab">
          Датчик газа предназначен для оповещения о повышении концентрации
          бытового газа (пропан) в воздухе. Материал корпуса: ABS+PC пластик.
          Наличие индикатора: да, красный/зеленый/желтый. Устройство работает
          только в сети переменного тока. Подходит для использования в жилых и
          офисных помещениях.
          <br />
          <br />
          Экосистема - Умный дом Яндекса
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - От сети
        </div>
        <div className="price_tab">Стоимость 18 000 тг</div>
      </div>
    </>
  );
}
