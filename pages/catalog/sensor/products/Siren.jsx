export default function Siren({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Сирена для умного дома GS SRHMP-I1.png"
          alt="Сирена для умного дома GS SRHMP-I1"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Siren_text_1">
            Сирена предназначена для звукового оповещения при срабатывании
            различных датчиков в домохозяйстве пользователя. Своевременное
            оповещение дает возможность оперативно среагировать на нештатную
            ситуацию в доме. Подходит для использования в жилых и офисных
            помещениях. Работает даже при отключении электроэнергии.
          </span>
          <p data-i18n="Siren_text_2">
            Технические характеристики и параметры: Напряжение питания: 100-240
            В / 50-60 Гц Аккумуляторная батарея: 3,7 В/ 720 мА Уровень звука: 95
            дБ (на расстоянии 1 м)
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>
          24 800
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
