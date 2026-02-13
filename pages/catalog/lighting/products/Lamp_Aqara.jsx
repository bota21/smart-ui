export default function Lamp_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/4-light/Cветильник потолочный Aqara Ceiling Light T1M.png"
          alt="Cветильник потолочный Aqara Ceiling Light T1M"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Lamp_Aqara_text_1">
            Две зоны освещения: Светильник имеет основной источник света,
            который обеспечивает широкий диапазон цветовых температур
            (2700K-6500K) для регулируемого белого света, а также боковой
            источник света с 16 миллионами цветовых вариантов для создания
            красочной атмосферы.
          </span>
          <p data-i18n="Lamp_Aqara_text_2">
            Высокая яркость: Основной источник света обладает максимальной
            яркостью 3450 люмен, обеспечивая достаточное освещение для вашего
            пространства.
          </p>
          <p data-i18n="Lamp_Aqara_text_3">
            Управление через приложение: Вы можете регулировать цветовую
            температуру, яркость и RGB-эффекты светильника с помощью приложения
            Aqara Home.
          </p>
          <p data-i18n="Lamp_Aqara_text_4">
            Регулировка яркости: Светильник можно диммировать, позволяя вам
            регулировать яркость в соответствии с вашими потребностями.
          </p>
          <p data-i18n="Lamp_Aqara_text_5">
            Долгий срок службы: Светодиодный источник света имеет срок службы 50
            000 часов, что обеспечивает его долговечность.
          </p>
          <p data-i18n="Lamp_Aqara_text_6">
            Стильный дизайн: Aqara Ceiling Light T1M имеет тонкий и современный
            дизайн, который дополняет различные интерьеры.
          </p>
          <span data-i18n="Need_hub">Нужен хаб</span>
          Aqara.
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Matter, Zigbee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          100 800
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
