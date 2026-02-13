export default function Smart_door_Aqara_D100({ activeTab, tabNumber }) {
  return (
    <>
      <div
        className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
      >
        <img
          src="../assets/img/9-doors/Замок Aqara D100.png"
          alt="Замок Aqara D100"
          className="image_tab"
          onclick="toggleZoom(this)"
        />
        <div className="text_tab">
          <span data-i18n="Smart_Door_Aqara_D100_text_1">
            Это умный дверной замок, который обеспечивает безопасность и
            удобство вашего дома. Он оснащен множеством функций, которые
            позволяют вам блокировать и разблокировать дверь с помощью различных
            методов, а также отслеживать активность и получать уведомления.
          </span>
          <div className="italic-text" data-i18n="Smart_Door_Aqara_D100_text_2">
            Методы разблокировки:
          </div>
          <p data-i18n="Smart_Door_Aqara_D100_text_3">
            Отпечаток пальца: D100 может хранить до 20 уникальных отпечатков
            пальцев, что обеспечивает быстрый и безопасный доступ.
          </p>
          <p data-i18n="Smart_Door_Aqara_D100_text_4">
            Пароль: Используйте постоянные или временные пароли для доступа к
            замку, удобно для гостей или уборщиков.
          </p>
          <p data-i18n="Smart_Door_Aqara_D100_text_5">
            NFC: Разблокируйте замок прикосновением карты NFC или смартфона с
            поддержкой NFC.
          </p>
          <p data-i18n="Smart_Door_Aqara_D100_text_6">
            Механический ключ: Используйте механический ключ в случае
            непредвиденных ситуаций, когда электронные методы недоступны.
          </p>
          <p data-i18n="Smart_Door_Aqara_D100_text_7">
            Удаленный доступ: Блокируйте и разблокируйте замок удаленно через
            приложение Aqara Home или Apple HomeKit, находясь где угодно.
          </p>
          <div className="italic-text" data-i18n="Smart_Door_Aqara_D100_text_8">
            Функции безопасности:
          </div>
          <p data-i18n="Smart_Door_Aqara_D100_text_9">
            Обнаружение взлома: Получайте уведомления, если кто-то попытается
            взломать вашу дверь.
          </p>
          <p data-i18n="Smart_Door_Aqara_D100_text_10">
            Неверные попытки ввода пароля: Замок автоматически блокируется после
            нескольких неверных попыток ввода пароля.
          </p>
          <p data-i18n="Smart_Door_Aqara_D100_text_11">
            Режим “Вне дома”: Активируйте режим “Вне дома”, и замок
            автоматически заблокируется после закрытия двери.
          </p>
          <p data-i18n="Smart_Door_Aqara_D100_text_12">
            Двухфакторная аутентификация: Добавьте дополнительный уровень
            безопасности, используя двухфакторную аутентификацию при доступе к
            замку удаленно.
          </p>
          <div
            className="italic-text"
            data-i18n="Smart_Door_Aqara_D100_text_13"
          >
            Другие функции:
          </div>
          <p data-i18n="Smart_Door_Aqara_D100_text_14">
            Журнал активности: Просматривайте историю использования замка, чтобы
            увидеть, кто и когда открывал дверь.
          </p>
          <p data-i18n="Smart_Door_Aqara_D100_text_15">
            Голосовое управление: Используйте Siri или Google Assistant для
            управления замком с помощью голосовых команд.
          </p>
          <p data-i18n="Smart_Door_Aqara_D100_text_16">
            Автоматизация: Создавайте сценарии автоматизации, чтобы замок
            взаимодействовал с другими умными устройствами в вашем доме.
          </p>
          <p data-i18n="Smart_Door_Aqara_D100_text_17">
            Длительное время автономной работы: Замок питается от литий-ионной
            батареи, которая работает до 1 года на одном заряде. Резервное
            питание: Замок имеет порт USB-C для зарядки в случае разрядки
            батареи.
          </p>
          <br />
          <span data-i18n="Ecosystem">Экосистема</span>
          - Aqara
          <br />
          <span data-i18n="Communication_protocol">Протокол связи</span>
          - Zigbee
          <br />
          <span data-i18n="Power">Питание</span>- АА х 7
        </div>
        <div className="price_tab">
          <span data-i18n="Cost">Стоимость</span>
          280 000
          <span data-i18n="tenge">тг</span>
        </div>
      </div>
    </>
  );
}
