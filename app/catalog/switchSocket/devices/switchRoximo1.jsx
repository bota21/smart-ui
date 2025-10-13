export default function SwitchRoximo1({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_3" data-tab={dataTab}>
        <img
          src="./assets/img/3-switch/Выключатель ROXIMO 1кл.png"
          alt="Выключатель ROXIMO 1кл"
          className="image_tab"
        />
        <div className="text_tab">
          Корпус выключателя имеет удобный размер для монтажа в стандартные
          установочные коробки. Лицевая панель изготовлена из
          высококачественного пластика, на ней расположены клавиши для
          управления и LED индикаторы состояния.
          <p>
            Прямое подключение к Zigbee от Яндекс - подключайте устройства
            Roximo прямо к Станции с поддержкой Zigbee или хабу Яндекс.
          </p>
          <br />
          <br />
          Экосистема - Умный дом Яндекса
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - От сети
          <br />
          <br />
          (цвета: белый, золото, бронзовый, серый, черный)
        </div>
        <div className="price_tab">Стоимость 15 700 тг</div>
      </div>
    </>
  );
}
