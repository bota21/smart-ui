export default function Motor_rolling_Aqara({ activeTab, tabNumber }) {
  return (
    <>
      {" "}
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/5-cornice/Мотор для рулонных штор Aqara Curtain Rolling Shutter Motor.png"
          alt="Мотор для рулонных штор Aqara Curtain Rolling Shutter Motor"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Motor_rolling_Aqara_text_1">
            Универсальное применение: Подходит для большинства типов штор или
            жадюзи, оснащенных валом диаметром от 35 до 70 мм.
          </span>
          <p data-i18n="Motor_rolling_Aqara_text_2">
            Элегантный дизайн: Корпус устройства выполнен из белого пластика,
            гармонично вписываясь в любой интерьер. Настройка расписания:
            Создайте автоматическое открытие/закрытие жалюзи в зависимости от
            времени суток, восхода/захода солнца или других событий.
          </p>
          <p data-i18n="Motor_rolling_Aqara_text_3">
            Управление вручную: Дублируйте управление с помощью кнопки на
            корпусе устройства.
          </p>
          <p data-i18n="Motor_rolling_Aqara_text_4">
            Защита от перегрузки: Встроенная защита двигателя предотвращает
            поломки при блокировке механизма.
          </p>
          <p data-i18n="Motor_rolling_Aqara_text_5">
            Тихий ход: Наслаждайтесь тишиной благодаря практически бесшумной
            работе двигателя.
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
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          79 800
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
