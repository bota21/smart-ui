export default function Heating_thermostat_ZONT({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/6-sanitary/Отопительный термостат ZONT GSM  Wi-Fi H-1V NEW для котлов.png"
          alt="Отопительный термостат ZONT GSM  Wi-Fi H-1V NEW для котлов"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Heating_thermostat_ZONT_text_1">
            Отопительный термостат ZONT H-1V NEW предназначен поддерживать
            температурные условия в доме для комфортного проживания. Он
            контролирует и управляет работой котла из любой точки мира через
            личный кабинет веб-сервиса или мобильное приложение ZONT. 10
            индивидуальных режимов отопления дома включают настройку работы по
            расписанию, учитывают уличную t° (ПЗА) и время суток. Записывается и
            сохраняется история событий.
          </span>
          <p data-i18n="Heating_thermostat_ZONT_text_2">
            Резервная батарея в комплекте: при отключении электроэнергии прибор
            будет оставаться на связи до 12 часов и передавать информацию от
            подключенных к нему проводных датчиков.
          </p>
          <p data-i18n="Heating_thermostat_ZONT_text_3">
            Крепление на DIN-рейку
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - ZONT
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Wi‑Fi, GSM
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          121 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
