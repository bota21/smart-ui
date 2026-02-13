export default function LED_Strip_Roximo({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/4-light/Гирлянда ROXIMO SFCL01-L.png"
          alt="Гирлянда ROXIMO SFCL01-L"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="LED_Strip_Roximo_text_1">
            Умная адресная светодиодная wifi гирлянда ROXIMO SFCL01-L длиной 10
            метров- это одно из устройств экосистемы умного дома Roximo.
            Гирлянда на елку является одним из главных элементов новогоднего
            оформления. Благодаря уровню влагозащиты ламп IP67 (блок управления
            IP44) Вы можете использовать гирлянду не только дома, но и на улице.
          </span>
          <p data-i18n="LED_Strip_Roximo_text_2">
            В приложении Roximo Вам будут доступны кнопки и различные функции
            умной гирлянды: рисование- выбор цветовых схем + создание
            собственных, цветомузыка + создание собственной, установка сцен +
            создание собственных, настройка таймеров и другие настройки.
          </p>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - ROXIMO IoT, SmartLife
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          20 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
