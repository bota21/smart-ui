export default function Smart_door_Xiaomi_E30({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/9-doors/Замок Xiaomi электромеханический XMZNMST11LK.png"
          alt="Замок Xiaomi электромеханический XMZNMST11LK"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <div className="italic-text" data-i18n="Smart_Door_Xiaomi_E30_text_1">
            Камера
          </div>
          <p data-i18n="Smart_Door_Xiaomi_E30_text_2">
            Интеллектуальная система обнаружения с искусственным интеллектом
            автоматически активирует запись видео, когда кто-то задерживается у
            вашей двери, мгновенно отправляя уведомление на ваш смартфон. Вы
            можете в режиме реального времени наблюдать за происходящим, где бы
            вы ни находились, и принимать соответствующие меры.
          </p>
          <div className="italic-text" data-i18n="Smart_Door_Xiaomi_E30_text_3">
            Разблокировка
          </div>
          <p data-i18n="Smart_Door_Xiaomi_E30_text_4">
            Замок предлагает 9 различных способов разблокировки, включая
            мгновенный сканер отпечатков пальцев с ИИ, обеспечивающий точность
            99,29% и скорость разблокировки за 0,5 секунды. Приложение позволяет
            создавать временные или постоянные ключи для членов семьи, друзей
            или обслуживающего персонала, что обеспечивает гибкость и контроль
            над доступом к вашему дому.
          </p>
          <div className="italic-text" data-i18n="Smart_Door_Xiaomi_E30_text_5">
            Защита
          </div>
          <p data-i18n="Smart_Door_Xiaomi_E30_text_6">
            Устройство оснащено цилиндром C-класса, что делает его устойчивым к
            взлому. Шестиуровневая система защиты замка гарантирует высокий
            уровень безопасности. Встроенный датчик приоткрытой двери с функцией
            уведомлений обеспечивает дополнительный уровень защиты.
          </p>
          <div className="italic-text" data-i18n="Smart_Door_Xiaomi_E30_text_7">
            Питание
          </div>
          <p data-i18n="Smart_Door_Xiaomi_E30_text_8">
            Замок оснащен двумя источниками питания: основным от 4-х батареек АА
            и резервным – литиевой батареей емкостью 5000 мАч. В случае разряда
            батареек, вы всегда сможете воспользоваться аварийным источником
            питания через порт Type-C, чтобы открыть дверь.
          </p>
          <div className="italic-text" data-i18n="Smart_Door_Xiaomi_E30_text_9">
            Приложение Mi Home
          </div>
          <p data-i18n="Smart_Door_Xiaomi_E30_text_10">
            Благодаря Bluetooth 5.0 и Wi-Fi замок легко интегрируется в вашу
            домашнюю сеть, позволяя управлять им из любой точки мира.
            Используйте приложение Mi Home, позволяющим удаленно управлять
            доступом, отслеживать историю открытий и закрытий, а также получать
            уведомления о попытках несанкционированного проникновения.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Mi Home
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - WiFi, Bluetooth
          <br />
          <span data-i18n="Power">Питание</span>- АА х 4
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          240 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
