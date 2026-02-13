export default function Module_Mini_3_Pro({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/0-control/Климатический модуль Яндекса.png"
          alt="Modul_mini_3_pro"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Modul_mini_3_pro_text_1">
            Присоединяется к Станции Мини 3 Про и превращает её в умную систему,
            которая сама мониторит качество воздуха дома. Встроенные
            высокочувствительные датчики измеряют уровень СО2, температуру и
            влажность. Создавайте удобные сценарии: например, чтобы Алиса по
            показанию датчика сообщала вам, когда воздух в комнате станет
            слишком сухим, и сразу включала увлажнитель.
          </span>
          <p data-i18n="Modul_mini_3_pro_text_2">
            Когда уровень углекислого газа в комнате превысит норму, Алиса
            пришлёт вам уведомление в приложении и голосом напомнит, что пора
            открыть окно для проветривания. По запросу Алиса будет выводить
            показатели датчика на дисплей Станции Мини 3 Про, а LED-кольцо будет
            загораться красным, жёлтым или зелёным в зависимости от уровня
            критичности показателей.
          </p>
          <p data-i18n="Modul_mini_3_pro_text_3">
            Климатический модуль крепится к Станции Мини 3 Про с помощью
            магнитного крепления2 и работает, когда умная колонка подключена к
            сети.
          </p>
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          33 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
