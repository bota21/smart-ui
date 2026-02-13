export default function Controller_curtain_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/5-cornice/Мотор для раздвижных штор  Aqara Curtain Controller.png"
          alt="/Мотор для раздвижных штор  Aqara Curtain Controller"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Controller_curtain_Aqara_text_1">
            Мотор для раздвижных штор Aqara Curtain Controller – это компактное
            и функциональное устройство, которое позволяет автоматизировать
            управление вашими шторами с помощью смартфона или голосовых команд.
            Он легко интегрируется в вашу существующую экосистему умного дома
            Aqara, делая вашу жизнь более комфортной и стильной.
          </span>
          <p data-i18n="Controller_curtain_Aqara_text_2">
            Наслаждайтесь плавным и тихим движением штор без ненужного шума.
            Мотор автоматически останавливается при встрече с препятствием,
            обеспечивая безопасность ваших штор и мебели. Создавайте различные
            режимы работы штор для разных ситуаций, например, режим “День”,
            “Ночь” или “Кино”. Совместим с различными типами штор и карнизов.
            Легко установить с помощью входящих в комплект креплений и
            инструментов.
          </p>
          <span data-i18n="Need_hub">Нужен хаб</span>
          Aqara.
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          77 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
