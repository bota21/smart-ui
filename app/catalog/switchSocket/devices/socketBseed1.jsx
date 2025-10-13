export default function SocketBseed1({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_3" data-tab={dataTab}>
        <div className="wrapper_for_images">
          <div className="wrapper_for_image_first">
            <img
              src="./assets/img/3-socket/Розетка 1х.png"
              alt="Розетка 1х"
              className="images_in_wrapper"
            />
          </div>
          <div className="wrapper_for_image_first">
            <img
              src="./assets/img/3-socket/Размеры розеток.png"
              alt="Размеры розеток"
              className="images_in_wrapper"
            />
          </div>
        </div>
        <div className="text_tab">
          С её помощью можно: дистанционно отключить утюг или плойку, включить
          обогреватель или кондиционер по пути домой, настроить включение и
          выключение света по расписанию для растений или аквариума, включить
          гирлянду голосом и многое другое. Благодаря функции энергомониторинга,
          вы можете отслеживать в мобильном приложении, сколько энергии
          потребляют ваши электроприборы и какие из них работают в данный
          момент.
          <br />
          <br />
          Экосистема - Умный дом Яндекса
          <br />
          Протокол связи - ZigBee
          <br />
          Питание - От сети
          <br />
          <br />
          (цвета: белый, золото, серый, черный)
        </div>
        <div className="price_tab">Стоимость 14 400 тг</div>
      </div>
    </>
  );
}
