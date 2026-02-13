export default function Slug_Yandex({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-socket/розетка.png"
          alt="розетка"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Slug_Yandex_text">
            Работает на универсальном протоколе связи Matter — легко
            подключается к умному дому, а настроенные сценарии с розеткой могут
            работать, даже если отключится интернет . Лаконичная и компактная,
            подходит к большинству розеток и удлинителей. Создавайте удобные
            сценарии и расписания. Проверяйте статус умной розетки удалённо
            через приложение и, если нужно, отключайте её. Получайте сообщения,
            когда состояние розетки меняется, — и вы будете в курсе, если что-то
            пойдёт не так.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Matter
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          14 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
