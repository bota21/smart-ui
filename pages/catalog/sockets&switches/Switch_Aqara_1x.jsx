export default function Switch_Aqara_1x({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-Switch/выключатель Aqara 1х.png"
          alt="выключатель Aqara 1х"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Switch_Aqara_text_1">
            Умный выключатель Aqara – выключатель, который не просто включает
            свет, а делает ваш дом умным. Встроенная сенсорная панель может
            использоваться для диммирования умных светильников, управления
            шторами, яркостью и цветом освещения.
          </span>
          <p data-i18n="Switch_Aqara_text_2">
            Подходит для следующих типов ламп: накаливания, энергосберегающих,
            светодиодных, люминесцентных.
          </p>
          <p data-i18n="Switch_Aqara_text_3">
            Поддерживает жесты: однократное, двукратное касание, удержание и
            свайп.
          </p>
          <p data-i18n="Switch_Aqara_text_4">
            Привязывайте клавиши одного выключателя к другому в приложении Aqara
            Home. Например, с Aqara Z1 Pro в комнате можно управлять светом в
            коридоре.
          </p>
          <p data-i18n="Switch_Aqara_text_5">
            В приложении Aqara Home в карточке устройства есть опция «Настройка
            клавиш», которая переводит клавишу в логический режим. Это отключает
            механическое управление светом, и клавишу можно привязать к любой
            автоматизации, например, открытию штор.
          </p>
          <span data-i18n="Need_hub">Нужен хаб</span>
          Aqara
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Zigbee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          37 500
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
