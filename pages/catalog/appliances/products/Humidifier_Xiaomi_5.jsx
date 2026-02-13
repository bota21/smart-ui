export default function Humidifier_Xiaomi_5({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Увлажнитель ксиоми 5л.png"
          alt="Увлажнитель ксиоми 5л"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Humidifier_Xiaomi_5_text_1">
            Увлажнитель подходит для жилых комнат, детских и рабочих
            пространств, позволяя избежать проблем с сухим воздухом, который
            может вызывать дискомфорт и негативно сказываться на здоровье.
          </span>
          <p data-i18n="Humidifier_Xiaomi_5_text_2">
            Он также отличается малым уровнем шума, что позволяет использовать
            его даже ночью, не беспокоясь о качестве сна. Smartmi Evaporative
            Humidifier 3 Lite эффективно очищает воду, что позволяет получать
            качественный увлажненный воздух, не причиняя вреда вашему здоровью.
          </p>
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
          90 300
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
