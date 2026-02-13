export default function Mini_3_Pro_station({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/Мини 3 Про.png"
          alt="mini 3 pro yandex"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Station_Alice_Mini3Pro_text_1">
            В отличие от предыдущих моделей, она оснащена встроенными модулями
            Zigbee, Wi-Fi и Matter over Wi-Fi, что позволяет ей управлять
            устройствами умного дома даже без подключения к интернету, если те
            поддерживают такие же протоколы.
          </span>
          <p data-i18n="Station_Alice_Mini3Pro_text_2">
            Внутри компактного корпуса скрывается 18-ваттный динамик и два
            пассивных излучателя, усиливающих басы. Звучание стало заметно
            богаче и глубже по сравнению с «Станцией Мини 3» — вы почувствуете
            это сразу после первого запуска.
          </p>
          <p data-i18n="Station_Alice_Mini3Pro_text_3">
            «Станция Мини 3 Про» работает с голосовым помощником Алиса, который
            поможет включить музыку, узнать погоду, управлять техникой, создать
            напоминание или даже рассказать сказку. Её приятно поставить и на
            полку, и на кухню — она выглядит современно и лаконично.
          </p>
        </div>

        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          112 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
