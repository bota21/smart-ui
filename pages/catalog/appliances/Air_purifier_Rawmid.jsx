export default function Air_purifier_Rawmid({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Очиститель воздуха Rawmid.png"
          alt="Очиститель воздуха Rawmid"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Air_purifier_Rawmid_text_1">
            Очиститель воздуха RAWMID Modern RMP-01 позволяет добиться
            максимальной чистоты воздуха и поддерживать здоровый климат в доме.
            Прибор предназначен для очистки воздуха от мельчайших частиц пыли,
            различных аллергенов, вирусов и бактерий, неприятных запахов.
            Эффективную очистку воздуха обеспечивает тройная фильтрация:
            предварительный фильтр, фильтр тонкой очистки HEPA13 и угольный
            фильтр.
          </span>
          <p data-i18n="Air_purifier_Rawmid_text_2">
            Особенности очистителя воздуха RAWMID Modern:
          </p>
          <p data-i18n="Air_purifier_Rawmid_text_3">
            Эффективность очистки 99,95% В очистителе воздуха RAWMID Modern
            RMP-01 установлен высокоэффективный фильтр класса HEPA13. Он
            удерживает 99,95% аллергенов и самых мельчайших частиц пыли размером
            менее 0,6 микрона. Он тихий, надёжный и долговечный. Во время работы
            очиститель не будет мешать вам концентрироваться на ваших делах.
          </p>
          <p data-i18n="Air_purifier_Rawmid_text_4">
            В очистителе RAWMID Modern предусмотрен ночной режим, в котором
            прибор практически бесшумный, а свет панели управления приглушён. В
            приложении для смартфона работу ночного режима можно настроить так,
            чтобы он автоматически включался вечером и выключался утром. На
            дисплее воздухоочистителя отображается текущая концентрация частиц
            PM2.5 (мкг/м³).
          </p>
          <p data-i18n="Air_purifier_Rawmid_text_5">
            Чуть ниже находится простая, интуитивно понятная цветная шкала
            качества воздуха. Она подскажет, когда качество воздуха высокое,
            среднее или низкое.
          </p>
          <p data-i18n="Air_purifier_Rawmid_text_6">
            Быстрый доступ к фильтру - Поменять фильтр на новый — легко и
            просто. Старый фильтр быстро снимается, а на его место ставится
            точно такой же новый фильтр. На всё про всё — 5 секунд.
          </p>
          <p data-i18n="Air_purifier_Rawmid_text_7">
            В воздухоочистителе RAWMID Modern предусмотрен специальный отсек для
            ароматических масел.
          </p>
          <p data-i18n="Air_purifier_Rawmid_text_8">
            Обслуживаемая площадь 80.0 кв.м
          </p>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Smart Life
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          262 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
