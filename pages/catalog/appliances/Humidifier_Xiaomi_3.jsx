export default function Humidifier_Xiaomi_3({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Увлажнитель ксиоми 3л.png"
          alt="Увлажнитель ксиоми 3л"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Humidifier_Xiaomi_3_text_1">
            Увлажнитель воздуха с ионизацией обладает невероятно стильным,
            оригинальным дизайном и пригодится в каждом доме. Увлажнитель для
            воздуха оснащен резервуаром для верхнего залива пресной или
            дистиллированной воды. Увлажнитель управляется как с помощью led -
            дисплея, так и через приложение в смартфоне (умный увлажнитель
            воздуха), с помощью голосовых помощников. Увлажнитель оснащен
            режимом самоочистки. Фильтрация при этом является многоуровневой.
          </span>
          <p data-i18n="Humidifier_Xiaomi_3_text_2">
            Воздухоувлажнитель может использоваться в нескольких режимах:
            ночник, автомат и максимальное увлажнение. Увлажнитель воздуха мини
            оснащен датчиком - индикатором влажности воздуха и комнатной
            температуры, сенсорными кнопками для управления.
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
          108 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
