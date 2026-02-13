export default function Air_purifier_5_Xiaomi({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Очиститель воздуха Xiaomi Smart Air Purifier 5 Pro.png"
          alt="Очиститель воздуха Xiaomi Smart Air Purifier 5 Pro"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Air_purifier_5_Xiaomi_text_1">
            Мощное решение для очищения воздуха в больших помещениях. Благодаря
            двухвентиляторной системе и шестислойной композитной фильтрации он
            эффективно удаляет бактерии, аллергены, пыль и формальдегид,
            обновляя воздух всего за 3 минуты.
          </span>
          <p data-i18n="Air_purifier_5_Xiaomi_text_2">
            Устройство оснащено передовыми датчиками для мониторинга качества
            воздуха, UV-C стерилизацией и интеллектуальным управлением через
            приложение и голосового помощника. Низкий уровень шума, стильный
            дизайн и энергоэффективный фильтр делают его идеальным выбором для
            дома и офиса.
          </p>
          <p data-i18n="Air_purifier_5_Xiaomi_text_3">
            Обслуживаемая площадь 95.0 кв.м
          </p>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Mi Home
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          448 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
