export default function Driver_curtain_Aqara_track({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/5-cornice/Curtain_driver_Aqara_Curtain_Driver_E1.png"
          alt="Мотор раздвижных штор Aqara Curtain Driver E1"
          className="image_tab"
          onClick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Driver_curtain_Aqara_track_text_1">
            Сделать обычные шторы умными — ещё проще. Устройство подходит почти
            для любого типа карниза.
          </span>
          <p data-i18n="Driver_curtain_Aqara_track_text_2">
            Крепится на карниз и крючки. Под каждую штору — одно устройство.
          </p>
          <p data-i18n="Driver_curtain_Aqara_track_text_3">
            Длина крючка (от низа крючка до карниза): 16 – 25 мм
          </p>
          <p data-i18n="Driver_curtain_Aqara_track_text_4">
            Ширина карниза: 10 мм
          </p>
          <span data-i18n="Need_hub">Нужен хаб</span>
          Aqara.
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Zigbee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="From_the_battery">Oт аккумулятора</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          65 800
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
