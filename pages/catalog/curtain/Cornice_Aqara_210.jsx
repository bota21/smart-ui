export default function Cornice_Aqara_210({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/5-cornice/Электрокарниз Aqara.png"
          alt="Электрокарниз Aqara 210"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Cornice_Aqara_210_text">
            Телескопический карниз AQARA MT-M01D предназначен для автоматизации
            управления шторами в вашем доме. Его длина регулируется от 2,1 до
            3,6 метров, что позволяет адаптировать его под различные размеры
            оконных проемов.Карниз AQARA MT-M01D обеспечивает плавное и
            бесшумное движение штор, добавляя комфорт и удобство в управление
            освещением и приватностью вашего помещения. Мотор для раздвижных
            штор не входит в комплект.
          </span>
          <span data-i18n="Need_hub">Нужен хаб</span>
          Aqara.
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          25 200
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
