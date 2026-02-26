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
    </>
  );
}
