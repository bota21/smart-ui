export default function Conditioner_LG_36({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Кондиционер LG.png"
          alt="Кондиционер LG"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Conditioner_LG_text">
            Испытайте самые комфортные условия для сна с автоматически
            регулируемыми функциями. Когда активирована функция комфортного сна.
            Дисплей информирует вас, чтобы вы могли легко отслеживать и снижать
            потребление энергии. Пре-фильтр останавливает крупные частицы пыли с
            самого начала. Голосовое управление возможно после сопряжения
            приложений LG ThinQ и Yandex и при наличии Умной колонки с Голосовым
            помощником Алиса.
          </span>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - LG ThinQ
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          496 200
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
