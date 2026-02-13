export default function Control_LED_Strip_RGB({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/4-light/Контроллер RGB для LED лент 12В, 24В.png"
          alt="Контроллер RGB для LED лент 12В, 24В"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Control_LED_Strip_RGB_text">
            Представляем вам новый Wi-Fi контроллер – компактное и стильное
            решение, которое вдохнет новую жизнь в вашу систему освещения и
            сделает ваш дом по-настоящему умным! Полная интеграция с популярными
            системами "Умный дом": Яндекс Алиса, Amazon Alexa и Google Home
            Assistant. Просто скажите: "Алиса, включи праздничную подсветку!"
            Наслаждайтесь более чем 100 режимами работы, от плавного
            переключения цветов до динамичных световых эффектов. Подберите
            идеальное освещение для любого настроения и события! Лаконичный
            дизайн, компактный размер и классический белый цвет делают
            контроллер незаметным и элегантным дополнением к вашему дому.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Smart Life
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>9 400
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
