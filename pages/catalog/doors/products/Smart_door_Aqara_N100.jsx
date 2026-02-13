export default function Smart_door_Aqara_N100({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/9-doors/Замок Aqara N100.png"
          alt="Замок Aqara N100"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Smart_Door_Aqara_N100_text_1">
            Устройство может быть установлено как на деревянные, так и на
            стальные двери с толщиной полотна от 40 до 80 мм.
          </span>
          <div className="italic-text" data-i18n="Smart_Door_Aqara_N100_text_2">
            Способы открытия
          </div>
          <p data-i18n="Smart_Door_Aqara_N100_text_3">
            Замок поддерживает следующие способы открытия: разблокировка с
            помощью отпечатка пальца, пароля, карты NFC, временного пароля,
            HomeKit или аварийного ключа.
          </p>
          <div className="italic-text" data-i18n="Smart_Door_Aqara_N100_text_4">
            Умный дверной звонок
          </div>
          <p data-i18n="Smart_Door_Aqara_N100_text_5">
            Во внутреннюю панель замка встроен динамик, который при нажатии
            кнопки на внешней панели проигрывает мелодию звонка. Если вы не
            хотите использовать звонок — настройте автоматизацию по-другому.
            Пусть при нажатии кнопки на внешней панели замка вам приходит
            оповещение на смартфон или, например, включается свет в коридоре.
            Это удобно, если вы не хотите случайно разбудить близких или
            потревожить домашних животных.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Zigbee
          <br />
          <span data-i18n="Power">Питание</span>- АА х 4
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          203 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
