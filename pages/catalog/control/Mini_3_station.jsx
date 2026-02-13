export default function Mini_3_station({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/мини3.png"
          alt="mini 3 yandex"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab" data-i18n="Station_Alice_Mini3_text">
          Умная колонка Яндекс Мини 3 представлена в круглом сером корпусе с
          отделкой из акустической ткани. Голосовой ассистент Алиса с YandexGPT
          точно распознает команды, анализирует сложные запросы, делит их на
          несколько простых и превращает в цепочку действий. Колонка
          Яндекс.Станция Мини 3 синхронизируется с другими умными устройствами в
          приложении Дом с Алисой и управляет ими с помощью голосовых команд.
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          70 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === 7 ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/лайт.png"
          alt="lite 2 yandex"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab" data-i18n="Station_Alice_Lite2_text">
          Каждый может заглянуть в глазки Алисе. Она подмигнёт в ответ на
          комплимент, зажмурится от восторга или опустит взгляд, когда
          загрустит. А если произнести особые команды, то можно активировать
          секретные реакции Алисы. Новый корпус Станции Лайт 2 и динамик
          мощностью 6 Вт позволили увеличить её акустический объём, чтобы
          любимые треки звучали ещё чище и насыщеннее. Когда захотите свериться
          с часами или узнать прогноз погоды, Алиса не только озвучит ответ, но
          и покажет время и температуру на LED-экране.
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          49 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
