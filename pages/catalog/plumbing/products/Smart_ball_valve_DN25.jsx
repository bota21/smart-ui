export default function Smart_ball_valve_DN25({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/6-sanitary/Умный шаровой клапан.png"
          alt="Умный шаровой клапан"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Smart_ball_valve_DN25_text_1">
            Шаровый кран с электроприводом 1 дюйма и напряжением 220в - на
            страже безопасности ремонта и вашего спокойствия!
          </span>
          <p data-i18n="Smart_ball_valve_DN25_text_2">
            При возникноваении протечки кран автоматически перекрывает воду.
            Наиболее эффективно работает в наборе с датчиком протечки. Получает
            сигнал от датчика, кран перекрывает воду. Пуш-уведомление о протечке
            приходит за 2 секунды в мобильном приложении. Управляется через
            голосового помощника Алису.
            <br />
            Нужен хаб Tuya.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - SmartLife
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          20 800
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
