export default function Humidifier_Xiaomi_4({ activeTab, tabNumber }) {
  return (
    <>
      {" "}
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Увлажнитель ксиоми 4л.png"
          alt="Увлажнитель ксиоми 4л"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Humidifier_Xiaomi_4_text">
            Xiaomi Smartmi Evaporative Humidifier 3 Lite 4L EU (CJXJSQ06ZM)
            White - это испарительный увлажнитель воздуха со скоростью испарения
            280 мл/ч и емкостью резервуара 4 л. Увлажнитель может работать без
            остановки до 14 часов, а уровень шума составляет всего 50 дБ.
            Устройство обладает регулировкой интенсивности испарения, а также
            поддерживает три режима работы: автоматический, ночной, поддержание
            влажности. Увлажнитель воздуха удобен в использовании: его можно
            установить как на пол, так и на стол; залив воды производится
            сверху. Площадь обслуживаемого помещения составляет 40 м².
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Mi Home
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          70 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
