export default function SensorAirAqara({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_2" data-tab={dataTab}>
        <img
          src="./assets/img/1-sensor/Датчик_качества_воздуха_Aqara_TVOC_Air_Quality_Monitor.png"
          alt="Датчик качества воздуха Aqara TVOC Air Quality Monitor"
          className="image_tab"
        />
        <div className="text_tab">
          Aqara TVOC Air Quality Monitor имеет электронный дисплей, который
          отображает текущие показания качества воздуха, а также температуру и
          влажность.
          <p>Мониторинг TVOC: Датчик измеряет концентрацию TVOC в воздухе.</p>
          <p>
            TVOC – это группа газов, которые могут быть вредны для здоровья
            человека. Мониторинг температуры и влажности: датчик также измеряет
            температуру и влажность в помещении. Датчик работает от батареи и
            может проработать до года без подзарядки.
          </p>
          <br />
          <br />
          Экосистема - Умный дом Яндекса, Aqara
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - CR2450
        </div>
        <div className="price_tab">Стоимость 30 370 тг</div>
      </div>
    </>
  );
}
