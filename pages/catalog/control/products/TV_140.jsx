export default function TV_140({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/тв 140.png"
          alt="tv 140 yandex"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab" data-i18n="Station_Alice_TV140_text">
          Функция «Найди пульт» может работать как Станция, даже с выключенным
          экраном. Физическое отключение микрофона. 4 высокочувствительных
          микрофона + 1 в пульте. Можно объединять с устройствами умного дома и
          управлять ими голосом. Подключение через Wi-Fi.
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          560 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
