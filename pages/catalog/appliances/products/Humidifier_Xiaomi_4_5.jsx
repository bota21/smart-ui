export default function Humidifier_Xiaomi_4_5({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Увлажнитель ксиоми 4,5л.png"
          alt="Увлажнитель ксиоми 4,5л"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Humidifier_Xiaomi_4_5_text_1">
            Данное устройство предназначено для улучшения микроклимата в доме,
            особенно в период летнего зноя или с началом отопительного сезона.
          </span>
          <p data-i18n="Humidifier_Xiaomi_4_5_text_2">
            Увлажнитель подходит для помещения площадью до 25 КВ. М.
          </p>
          <p data-i18n="Humidifier_Xiaomi_4_5_text_3">
            Вода заливается сверху, что очень удобно. При недостаточном
            количестве жидкости в резервуаре устройство автоматически
            отключается. Корпус Xiaomi Mijia Mi Smart Humidifier состоит из двух
            частей. Верхняя часть представляет собой резервуар для воды, а в
            нижней части находится распылительный механизм и вся электроника.
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
          58 800
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
