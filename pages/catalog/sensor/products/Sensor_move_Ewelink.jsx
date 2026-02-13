export default function Sensor_move_Ewelink({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/1-sensor/Датчик движения eWeLink.png"
          alt="Датчик движения eWeLink"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Sensor_move_Ewelink_text">
            Миниатюрный корпус, маленький и изысканный. Обнаружение движения
            человека, мгновенное уведомление приложения, отсутствие пропущенного
            сигнала тревоги. Высокоточный инфракрасный детектор, более точный.
            Подавление воздушного потока, избегайте ложного обнаружения.
            Интеллектуальная связь с другими изделиями ewelink. Приложение с
            несколькими сценариями, простое в установке.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>- CR2450
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость </span>8 200
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
