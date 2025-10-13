export default function SensorMoveEwelink({ dataTab }) {
  return (
    <>
      {" "}
      <div className="wrapper_for_smart_home_item_2" data-tab={dataTab}>
        <img
          src="./assets/img/1-sensor/Датчик движения eWeLink.png"
          alt="Датчик движения eWeLink"
          className="image_tab"
        />
        <div className="text_tab">
          Миниатюрный корпус, маленький и изысканный. Обнаружение движения
          человека, мгновенное уведомление приложения, отсутствие пропущенного
          сигнала тревоги. Высокоточный инфракрасный детектор, более точный.
          Подавление воздушного потока, избегайте ложного обнаружения.
          Интеллектуальная связь с другими изделиями ewelink. Приложение с
          несколькими сценариями, простое в установке.
          <br />
          <br />
          Экосистема - Умный дом Яндекса
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - CR2450
        </div>
        <div className="price_tab">Стоимость 5 800 тг</div>
      </div>
    </>
  );
}
