export default function Smart_Din_Moes_16A({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-Switch/Умный автомат Moes 16A.png"
          alt="Умный автомат Moes 16A"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Smart_Din_Moes_16A_text_1">
            Автоматический выключатель MOES ZCB-SC-1P16 — это современное
            решение для интеллектуального управления электросетью в вашем доме
            или офисе. Благодаря компактному дизайну, модульной конструкции и
            высокой надежности, этот умный выключатель обеспечивает не только
            защиту от перегрузок и короткого замыкания, но и возможность
            удаленного контроля через смартфон.
          </span>
          <p data-i18n="Smart_Din_Moes_16A_text_2">
            Устройство рассчитано на номинальное напряжение 230 В и ток 16 А,
            что делает его идеальным выбором для бытовых и коммерческих
            электросетей. Оно выполняет ключевые функции: включение и отключение
            питания, синхронизацию работы приборов, а также защиту оборудования
            от аварийных ситуаций.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>-
          <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - ZigBee
          <br />
          <span data-i18n="Power">Питание</span>-
          <span data-i18n="Static_electricity">От сети</span>
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          33 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
