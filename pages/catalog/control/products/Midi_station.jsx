export default function Midi_station({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/миди.png"
          alt="midi yandex"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Station_Alice_Midi_text_1">
            Яндекс Станция Миди — новая умная колонка с виртуальным ассистентом
            Алисой. Мощное звучание 24 Вт в таком компактном корпусе.
            LED-дисплей, который показывает время, погоду и реакции Алисы, а
            также активная контурная LED-подсветка.
          </span>
          <p data-i18n="Station_Alice_Midi_text_2">
            Встроенный хаб управления Zigbee и голосовое управление умным домом
            даже без интернета. Беспроводная связь Wi-Fi (2,4–5 ГГц) и Bluetooth
            5.0, с возможностью встраивания в экосистему умного дома.
          </p>
          <p data-i18n="Station_Alice_Midi_text_3">
            Активная контурная LED-подсветка и анимированные реакции на дисплее
            добавляют эмоций, когда слушаете музыку и общаетесь с Алисой.
            LED-дисплей показывает время и температуру. В режиме радионяни Алиса
            может передавать вам звуки из детской на телефон или вторую Яндекс
            Станцию.
          </p>
        </div>

        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          126 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
