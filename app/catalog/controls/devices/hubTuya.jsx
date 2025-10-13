export default function HubTuya({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_1" data-tab={dataTab}>
        <img
          src="./assets/img/0-control/Центр управления Tuya SGW01.png"
          alt="Центр управления Tuya SGW01"
          className="image_tab"
        />
        <div className="text_tab">
          Многорежимный шлюз Tuya Smart - это основной элемент системы умного
          дома, позволяющий централизовать все умные устройства,
          функционирования сценариев умного дома для создания комфорта,
          обеспечения безопасности дома за время вашего отсутствия и тем самым
          информирует Вас о состоянии вашего дома в режиме реального времени.
          <br />
          <br />
          Питание - От сети
          <br />
          Тип - центр управления
          <br />
          Количество подключаемых устройств - 128
          <br />
          Экосистема - Tuya
          <br />
          Протокол связи - Bluetooth, Wi-Fi, ZigBee
          <br />
        </div>
        <div className="price_tab">Стоимость 13 000 тг</div>
      </div>
    </>
  );
}
