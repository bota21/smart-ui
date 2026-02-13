export default function Air_purifier_Xiaomi({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Очиститель воздуха Xiaomi Circulation.png"
          alt="Очиститель воздуха Xiaomi Circulation"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Air_purifier_Xiaomi_text_1">
            Напольный очиститель воздуха представлен в белом корпусе с сенсорным
            дисплеем и набором понятных индикаторов. Символы на экране
            обозначают активные режимы и функции, температуру, влажность и
            другие показатели. Встроенный датчик контроля чистоты время от
            времени проводит анализ воздуха. Вы можете управлять устройством
            через мобильное приложение Mi Home и добавлять очиститель в
            экосистему умного дома Xiaomi.
          </span>
          <p data-i18n="Air_purifier_Xiaomi_text_2">
            Благодаря скорости прокачивания воздуха 510 м³/ч подходит для работы
            в помещениях площадью до 60 м². Угольный и фильтр предварительной
            очистки задерживают крупную пыль и неприятные запахи. HEPA H13
            запирает внутри пыльцу, споры и подобные аллергены.
            Электростатический фильтр удаляет из воздуха мельчайшую пыль, сажу и
            копоть. Каталитический картридж с УФ-лучами устраняет бактерии и
            вирусы. Соответствующие индикаторы подсказывают о необходимости
            замены фильтров.
          </p>
          <p data-i18n="Air_purifier_Xiaomi_text_3">
            Обслуживаемая площадь 60.0 кв.м
          </p>
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
          301 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
