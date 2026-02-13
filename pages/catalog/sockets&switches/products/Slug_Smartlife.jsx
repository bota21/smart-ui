export default function Slug_Smartlife({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-socket/Умная розетка SmartLife.png"
          alt="Умная розетка SmartLife"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Slug_Smartlife_text_1">
            Розетку можно удаленно включать и выключать с телефона, или при
            помощи голосового управления в любой эко системе умного дома. Есть
            возможность устанавливать таймер.
          </span>
          <p data-i18n="Slug_Smartlife_text_2">
            Незаменимый девайс для удаленного управления электроприборами,
            подключенными к сети, такими как светильники, гирлянды, чайник,
            обогреватель, телевизор, вентилятор, увлажнитель воздуха и т.д. В
            режиме реального времени показывает сколько энергии потребляет ваша
            бытовая техника. Создавайте любые сценарии в системе умного дома и
            объединяйте розетку с другими умными устройствами.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - SmartLife
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>4 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
