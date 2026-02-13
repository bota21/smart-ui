export default function Conditioner_Haier_35({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/7-technology/Кондиционер Haier.png"
          alt="Кондиционер Haier"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Conditioner_Haier_text_1">
            Представляем вам сплит-систему Haier HSU-12HRM503 — идеальное
            решение для комфортного климата в вашем доме или офисе. С мощностью
            охлаждения 3400 Вт и обогрева 3400 Вт, она обеспечит оптимальную
            температуру в помещениях.
          </span>
          <p data-i18n="Conditioner_Haier_text_2">Особенности:</p>
          <p data-i18n="Conditioner_Haier_text_3">
            - Таймер включения/выключения — настройте работу кондиционера под
            свой график.
          </p>
          <p data-i18n="Conditioner_Haier_text_4">
            - Режим осушения — эффективно удаляет избыточную влагу из воздуха.
          </p>
          <p data-i18n="Conditioner_Haier_text_5">
            - Управление с мобильного устройства — контролируйте климат в вашем
            доме из любой точки.
          </p>
          <p data-i18n="Conditioner_Haier_text_6">
            - Регулировка скорости вентилятора — настройте комфортный уровень
            воздушного потока.
          </p>
          <p data-i18n="Conditioner_Haier_text_7">
            - Низкий уровень шума — всего 39 дБ, что обеспечивает тихую
            работу.Эта сплит-система идеально подходит для тех, кто ценит
            комфорт и современные технологии в повседневной жизни.
          </p>
          <br />
          <p data-i18n="Conditioner_Haier_text_8">
            Она станет отличным выбором для квартир, офисов и небольших
            помещений.Рекомендуем устанавливать устройство в местах, где
            требуется постоянный контроль температуры, и использовать его в
            сочетании с дополнительными фильтрами для улучшения качества
            воздуха.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Evo
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          266 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
