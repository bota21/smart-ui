export default function ControlYandex({ dataTab }) {
  return (
    <>
      <div className="wrapper_for_smart_home_item_1" data-tab={dataTab}>
        <img
          src="./assets/img/0-control/Пульт ДУ Яндекс.png"
          alt="DU yandex"
          className="image_tab"
        />
        <div className="text_tab">
          Автоматизировать бытовую технику при помощи умного пульта Yandex
          SmartControl YNDX-0006 проще, чем может показаться. С его помощью
          можно управлять техникой, например телевизором или кондиционером, а
          также любым другим устройством, которое поддерживает ИК-соединение.
          <p>
            Также осуществляется передача данных посредством технологии Wi-Fi.
            Используя модель, можно не только включать/выключать технику, но и
            настраивать её.
          </p>
        </div>
        <div className="price_tab">Стоимость 9 800 тг</div>
      </div>
    </>
  );
}
