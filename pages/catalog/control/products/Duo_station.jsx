export default function Duo_station({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <div className="wrapper_for_images">
          <img
            src="../assets/img/0-control/дуо.png"
            alt="duo yandex"
            className="image_tab"
            onclick="toggleZoom(this)"
          />
        </div>
        <div className="text_tab">
          <span data-i18n="Station_Alice_Duo_text_1">
            Станция Дуо Макс выполнена в бежевом корпусе из пластика и ткани.
            Она оснащена контурной LED-подсветкой. Одна из особенностей модели –
            поворотный сенсорный экран FullHD для просмотра мультимедиа, ответов
            Алисы и управления устройствами умного дома. Камера 13 Мп с углом
            обзора 120° позволяет общаться по видеосвязи. Акустическая система с
            4 широкополосными динамиками и сабвуфером мощностью 60 Вт
            воспроизводит сбалансированный звук.
          </span>
          <p data-i18n="Station_Alice_Duo_text_2">
            Яндекс Станция Дуо Макс YNDX-00055BIE поддерживает беспроводные
            технологии Wi-Fi, Zigbee и Bluetooth. С помощью Алисы можно включать
            музыку, слушать сказки, заказывать продукты, вызывать такси, ставить
            будильник.
          </p>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          350 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
