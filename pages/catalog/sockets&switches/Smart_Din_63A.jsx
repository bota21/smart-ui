export default function Smart_Din_63A({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/3-Switch/Умный автомат ZigBee на Din рейку 63А.png"
          alt="Умный автомат ZigBee на Din рейку 63А"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Smart_Din_63A_text_1">
            Умное реле Tuya Zigbee на Din рейку с Алисой автомат – это идеальный
            элемент для вашего умного дома, который позволяет управлять светом,
            розетками и бытовыми приборами без лишних проводов. Благодаря
            встроенному модулю Zigbee вы можете включать и выключать устройства
            из любой точки квартиры через приложение Smart Life или голосовые
            команды Алисы. Реле рассчитано на напряжение 220В и обеспечивает
            надежную защиту от перегрузок, а функция мониторинга показывает
            потребляемую мощность в реальном времени. Установка проста:
            DIN‑рейка устраняет необходимость в дополнительных кабелях, а
            совместимость с Умным домом Яндекс делает управление максимально
            удобным.
          </span>
          <p data-i18n="Smart_Din_63A_text_2">
            Это умное реле Zigbee на din рейку – ваш надежный помощник для
            автоматизации бытовых задач и энергосбережения. Автомат зигбии имеет
            высокую нагрузку по току в 63А, что позволяет использовать его для
            управления различными электроприборами с высокой мощностью, что
            делает его пригодным для использования как в небольших домашних
            хозяйствах, так и в крупных промышленных объектах.
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
          17 600
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
