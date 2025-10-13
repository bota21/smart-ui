export default function SwitchDimmerBseed({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_3" data-tab={dataTab}>
        <img
          src="./assets/img/3-switch/Диммер Bseed.png"
          alt="Диммер Bseed"
          className="image_tab"
        />
        <div className="text_tab">
          Умный диммер — это идеальное решение для управления интенсивностью
          освещения в вашем умном доме. С помощью этого устройства вы можете
          легко регулировать уровень яркости подключенных световых приборов как
          с мобильного приложения, так и вручную, используя сенсор на лице
          устройства.
          <br />
          <br />
          Экосистема - Умный дом Яндекса
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - От сети
        </div>
        <div className="price_tab">Стоимость 20 000 тг</div>
      </div>
    </>
  );
}
