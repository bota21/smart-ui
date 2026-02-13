export default function Boiler_THERMEX_Sonne_grey({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/6-sanitary/Электрический настенный котел THERMEX Sonne 12 Wi-Fi Grey.png"
          alt="Электрический настенный котел THERMEX Sonne 12 Wi-Fi Grey"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Boiler_THERMEX_Sonne_grey_text">
            Электрический настенный котел Sonne 12 Wi-Fi Grey от THERMEX - это
            надежное и эффективное решение для отопления вашего дома или дачи.
            Этот одноконтурный котел мощностью 12 кВт способен обогреть
            помещение площадью до 120 квадратных метров, обеспечивая комфортный
            микроклимат в холодное время года. Настенный монтаж экономит
            драгоценное пространство, а стильный темно-серый дизайн гармонично
            впишется в любой интерьер. Котел Sonne 12 Wi-Fi Grey оснащен
            функцией Wi-Fi, что позволяет управлять им удаленно с помощью
            смартфона или интегрировать его в систему умного дома, например, с
            голосовым помощником Алиса. Благодаря простоте установки и
            комплектации, включающей монтажный комплект и руководство
            пользователя, установка котла не составит труда.
          </span>
          <br />
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Thermex
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          470 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
