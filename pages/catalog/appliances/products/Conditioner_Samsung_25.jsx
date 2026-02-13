export default function Conditioner_Samsung_25({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Кондиционер Samsung.png"
          alt="Кондиционер Samsung"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Conditioner_Samsung_text_1">
            Кондиционеры с технологией Wind-Free эффективно поддерживают
            заданную температуру и исключают возникновение сквозняков.
            Охлажденный воздух поступает через 23 000 микроотверстий, поэтому
            воздух в помещении распределяется равномерно по всей площади и
            тратится на 77% меньше энергии.
          </span>
          <p data-i18n="Conditioner_Samsung_text_2">
            Режим «Быстрое охлаждение» позволяет быстро охладить воздух за счет
            работы компрессора и вентиляции на максимальной мощности на 43%
            быстрее.
          </p>
          <p data-i18n="Conditioner_Samsung_text_3">
            Настройте температуру даже если вы не дома. При использовании
            приложения SmartThings вы можете удаленно управлять настройками
            кондиционера с помощью нескольких касаний.
          </p>
          <p data-i18n="Conditioner_Samsung_text_4">
            Трехслойный материал защищает от пыли, волос, больших частиц,
            вирусов, бактерий и аллергенов.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - SmartThings
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          490 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
