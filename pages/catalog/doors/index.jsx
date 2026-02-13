import { useState } from "react";

export default function Sensor() {
  const tabs = [
    {
      id: 1,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 2,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 3,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 4,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 5,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 6,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 7,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 8,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 9,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 10,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 11,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 12,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 13,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 14,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 15,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 16,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 17,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 18,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 19,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 20,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 21,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 22,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 23,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 24,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 25,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 26,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 27,
      title: "",
      translation: "",
      package: "",
    },
    {
      id: 28,
      title: "",
      translation: "",
      package: "",
    },
  ];

  const { t, lang } = useLanguage();

  const [activeTab, setActiveTab] = useState(1); // по умолчанию первый таб активен

  // функция для переключения таба
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
  }, [lang, t]);

  return (
    <>
      {" "}
      <section className="content">
        <div className="wrapper_for_smart_home_tabs">
          {/* <!-- Контейнер для открытия устройств умные замки --> */}
          <div className="wrapper_for_smart_home_content">
            <div className="tabs_for_smart_home_items">
              <div
                className="tabs_for_smart_home_item m_font_size_10"
                data-i18n="Smart_Door_Xiaomi"
              >
                Замок Xiaomi электро механический XMZNMST10LK
              </div>
              <div
                className="tabs_for_smart_home_item m_font_size_10"
                data-i18n="Smart_Door_Xiaomi_E30"
              >
                Умный дверной замок Xiaomi Smart Door Lock E30 (XMZNMST11LK) CN
              </div>
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Smart_Door_Aqara_A100"
              >
                Замок Aqara A100 ZNMMS02ES
              </div>
              <div
                className="tabs_for_smart_home_item m_font_size_10"
                data-i18n="Smart_Door_Aqara_D100"
              >
                Замок Aqara электро механический Door Lock D100
              </div>
              <div
                className="tabs_for_smart_home_item m_font_size_10"
                data-i18n="Smart_Door_Aqara_N100"
              >
                Замок Aqara электро механический Door Lock N100
              </div>
            </div>

            {/* <!-- Контейнер для содержания устройств умные замки --> */}
            <div className="wrapper_for_smart_home_items">
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/9-doors/Замок Xiaomi электромеханический XMZNMST10LK.png"
                  alt="Замок Xiaomi электромеханический XMZNMST10LK"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Smart_Door_Xiaomi_text_1">
                    Умный дверной замок Xiaomi Smart Door Lock — это современное
                    решение для обеспечения безопасности вашего дома с широким
                    набором функций и высокой степенью защиты.
                  </span>
                  <p data-i18n="Smart_Door_Xiaomi_text_2">
                    9 способов разблокировки:
                  </p>
                  <p data-i18n="Smart_Door_Xiaomi_text_3">
                    — Сканер отпечатков пальцев с ИИ (точность 99,29%, скорость
                    0,5 сек)
                  </p>
                  <p data-i18n="Smart_Door_Xiaomi_text_4">
                    — Постоянный и одноразовый пароли
                  </p>
                  <p data-i18n="Smart_Door_Xiaomi_text_5">
                    — Bluetooth через смартфон
                  </p>
                  <p data-i18n="Smart_Door_Xiaomi_text_6">
                    — Механический ключ
                  </p>
                  <p data-i18n="Smart_Door_Xiaomi_text_7">
                    — NFC-карты (приобретаются отдельно)
                  </p>
                  <p data-i18n="Smart_Door_Xiaomi_text_8">
                    — разблокировка через смартфон, часы и браслеты Xiaomi,
                    Gizmochina
                  </p>
                  <br />
                  <p data-i18n="Smart_Door_Xiaomi_text_9">
                    Шестиуровневая система защиты:
                  </p>
                  <p data-i18n="Smart_Door_Xiaomi_text_10">
                    — Цилиндр замка класса C
                  </p>
                  <p data-i18n="Smart_Door_Xiaomi_text_11">
                    — Защита от взлома и вскрытия
                  </p>
                  <p data-i18n="Smart_Door_Xiaomi_text_12">
                    — Датчик приоткрытой двери уведомляет пользователя, если
                    дверь не закрыта полностью
                  </p>
                  <p data-i18n="Smart_Door_Xiaomi_text_13">
                    — Интеграция с Mi Home и HyperOS
                  </p>
                  <p data-i18n="Smart_Door_Xiaomi_text_14">
                    Аварийное питание через Type-C (5 В, 0,5 А)
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Mi Home
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>- АА х 4
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  117 600
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
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
                  <div
                    className="italic-text"
                    data-i18n="Smart_Door_Xiaomi_E30_text_1"
                  >
                    Камера
                  </div>
                  <p data-i18n="Smart_Door_Xiaomi_E30_text_2">
                    Интеллектуальная система обнаружения с искусственным
                    интеллектом автоматически активирует запись видео, когда
                    кто-то задерживается у вашей двери, мгновенно отправляя
                    уведомление на ваш смартфон. Вы можете в режиме реального
                    времени наблюдать за происходящим, где бы вы ни находились,
                    и принимать соответствующие меры.
                  </p>
                  <div
                    className="italic-text"
                    data-i18n="Smart_Door_Xiaomi_E30_text_3"
                  >
                    Разблокировка
                  </div>
                  <p data-i18n="Smart_Door_Xiaomi_E30_text_4">
                    Замок предлагает 9 различных способов разблокировки, включая
                    мгновенный сканер отпечатков пальцев с ИИ, обеспечивающий
                    точность 99,29% и скорость разблокировки за 0,5 секунды.
                    Приложение позволяет создавать временные или постоянные
                    ключи для членов семьи, друзей или обслуживающего персонала,
                    что обеспечивает гибкость и контроль над доступом к вашему
                    дому.
                  </p>
                  <div
                    className="italic-text"
                    data-i18n="Smart_Door_Xiaomi_E30_text_5"
                  >
                    Защита
                  </div>
                  <p data-i18n="Smart_Door_Xiaomi_E30_text_6">
                    Устройство оснащено цилиндром C-класса, что делает его
                    устойчивым к взлому. Шестиуровневая система защиты замка
                    гарантирует высокий уровень безопасности. Встроенный датчик
                    приоткрытой двери с функцией уведомлений обеспечивает
                    дополнительный уровень защиты.
                  </p>
                  <div
                    className="italic-text"
                    data-i18n="Smart_Door_Xiaomi_E30_text_7"
                  >
                    Питание
                  </div>
                  <p data-i18n="Smart_Door_Xiaomi_E30_text_8">
                    Замок оснащен двумя источниками питания: основным от 4-х
                    батареек АА и резервным – литиевой батареей емкостью 5000
                    мАч. В случае разряда батареек, вы всегда сможете
                    воспользоваться аварийным источником питания через порт
                    Type-C, чтобы открыть дверь.
                  </p>
                  <div
                    className="italic-text"
                    data-i18n="Smart_Door_Xiaomi_E30_text_9"
                  >
                    Приложение Mi Home
                  </div>
                  <p data-i18n="Smart_Door_Xiaomi_E30_text_10">
                    Благодаря Bluetooth 5.0 и Wi-Fi замок легко интегрируется в
                    вашу домашнюю сеть, позволяя управлять им из любой точки
                    мира. Используйте приложение Mi Home, позволяющим удаленно
                    управлять доступом, отслеживать историю открытий и закрытий,
                    а также получать уведомления о попытках несанкционированного
                    проникновения.
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
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/9-doors/Замок Aqara A100.png"
                  alt="Замок Aqara A100"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Smart_Door_Aqara_A100_text_1">
                    Aqara Door Lock A100 Zigbee Edition имеет немаркий
                    алюминиевый корпус. Предупредит о попытке взлома и множестве
                    неправильных попыток ввода пароля. У устройства скрытая
                    клавиатура — чтобы её активировать, нужно дотронуться до
                    сенсорной панели.
                  </span>
                  <p data-i18n="Smart_Door_Aqara_A100_text_2">
                    Способы разблокировки
                  </p>
                  <p data-i18n="Smart_Door_Aqara_A100_text_3">
                    Удалённо через приложение Aqara Home
                  </p>
                  <p data-i18n="Smart_Door_Aqara_A100_text_4">
                    Отпечаток пальца
                  </p>
                  <p data-i18n="Smart_Door_Aqara_A100_text_5">
                    Постоянный пароль
                  </p>
                  <p data-i18n="Smart_Door_Aqara_A100_text_6">
                    Одноразовый пароль
                  </p>
                  <p data-i18n="Smart_Door_Aqara_A100_text_7">
                    Временный пароль
                  </p>
                  <p data-i18n="Smart_Door_Aqara_A100_text_8">
                    Механический ключ
                  </p>
                  <p data-i18n="Smart_Door_Aqara_A100_text_9">NFC-метка</p>
                  <p data-i18n="Smart_Door_Aqara_A100_text_10">
                    Если батареи сели, вы всё равно сможете открыть замок с
                    помощью механического ключа или запитать его через порт
                    Type-C.
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Aqara
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - Bluetooth, Zigbee
                  <br />
                  <span data-i18n="Power">Питание</span>- АА х 8
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  189 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
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
                    позволяют вам блокировать и разблокировать дверь с помощью
                    различных методов, а также отслеживать активность и получать
                    уведомления.
                  </span>
                  <div
                    className="italic-text"
                    data-i18n="Smart_Door_Aqara_D100_text_2"
                  >
                    Методы разблокировки:
                  </div>
                  <p data-i18n="Smart_Door_Aqara_D100_text_3">
                    Отпечаток пальца: D100 может хранить до 20 уникальных
                    отпечатков пальцев, что обеспечивает быстрый и безопасный
                    доступ.
                  </p>
                  <p data-i18n="Smart_Door_Aqara_D100_text_4">
                    Пароль: Используйте постоянные или временные пароли для
                    доступа к замку, удобно для гостей или уборщиков.
                  </p>
                  <p data-i18n="Smart_Door_Aqara_D100_text_5">
                    NFC: Разблокируйте замок прикосновением карты NFC или
                    смартфона с поддержкой NFC.
                  </p>
                  <p data-i18n="Smart_Door_Aqara_D100_text_6">
                    Механический ключ: Используйте механический ключ в случае
                    непредвиденных ситуаций, когда электронные методы
                    недоступны.
                  </p>
                  <p data-i18n="Smart_Door_Aqara_D100_text_7">
                    Удаленный доступ: Блокируйте и разблокируйте замок удаленно
                    через приложение Aqara Home или Apple HomeKit, находясь где
                    угодно.
                  </p>
                  <div
                    className="italic-text"
                    data-i18n="Smart_Door_Aqara_D100_text_8"
                  >
                    Функции безопасности:
                  </div>
                  <p data-i18n="Smart_Door_Aqara_D100_text_9">
                    Обнаружение взлома: Получайте уведомления, если кто-то
                    попытается взломать вашу дверь.
                  </p>
                  <p data-i18n="Smart_Door_Aqara_D100_text_10">
                    Неверные попытки ввода пароля: Замок автоматически
                    блокируется после нескольких неверных попыток ввода пароля.
                  </p>
                  <p data-i18n="Smart_Door_Aqara_D100_text_11">
                    Режим “Вне дома”: Активируйте режим “Вне дома”, и замок
                    автоматически заблокируется после закрытия двери.
                  </p>
                  <p data-i18n="Smart_Door_Aqara_D100_text_12">
                    Двухфакторная аутентификация: Добавьте дополнительный
                    уровень безопасности, используя двухфакторную аутентификацию
                    при доступе к замку удаленно.
                  </p>
                  <div
                    className="italic-text"
                    data-i18n="Smart_Door_Aqara_D100_text_13"
                  >
                    Другие функции:
                  </div>
                  <p data-i18n="Smart_Door_Aqara_D100_text_14">
                    Журнал активности: Просматривайте историю использования
                    замка, чтобы увидеть, кто и когда открывал дверь.
                  </p>
                  <p data-i18n="Smart_Door_Aqara_D100_text_15">
                    Голосовое управление: Используйте Siri или Google Assistant
                    для управления замком с помощью голосовых команд.
                  </p>
                  <p data-i18n="Smart_Door_Aqara_D100_text_16">
                    Автоматизация: Создавайте сценарии автоматизации, чтобы
                    замок взаимодействовал с другими умными устройствами в вашем
                    доме.
                  </p>
                  <p data-i18n="Smart_Door_Aqara_D100_text_17">
                    Длительное время автономной работы: Замок питается от
                    литий-ионной батареи, которая работает до 1 года на одном
                    заряде. Резервное питание: Замок имеет порт USB-C для
                    зарядки в случае разрядки батареи.
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
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/9-doors/Замок Aqara N100.png"
                  alt="Замок Aqara N100"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Smart_Door_Aqara_N100_text_1">
                    Устройство может быть установлено как на деревянные, так и
                    на стальные двери с толщиной полотна от 40 до 80 мм.
                  </span>
                  <div
                    className="italic-text"
                    data-i18n="Smart_Door_Aqara_N100_text_2"
                  >
                    Способы открытия
                  </div>
                  <p data-i18n="Smart_Door_Aqara_N100_text_3">
                    Замок поддерживает следующие способы открытия: разблокировка
                    с помощью отпечатка пальца, пароля, карты NFC, временного
                    пароля, HomeKit или аварийного ключа.
                  </p>
                  <div
                    className="italic-text"
                    data-i18n="Smart_Door_Aqara_N100_text_4"
                  >
                    Умный дверной звонок
                  </div>
                  <p data-i18n="Smart_Door_Aqara_N100_text_5">
                    Во внутреннюю панель замка встроен динамик, который при
                    нажатии кнопки на внешней панели проигрывает мелодию звонка.
                    Если вы не хотите использовать звонок — настройте
                    автоматизацию по-другому. Пусть при нажатии кнопки на
                    внешней панели замка вам приходит оповещение на смартфон
                    или, например, включается свет в коридоре. Это удобно, если
                    вы не хотите случайно разбудить близких или потревожить
                    домашних животных.
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Aqara
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - Zigbee
                  <br />
                  <span data-i18n="Power">Питание</span>- АА х 4
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  203 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
            </div>
          </div>

          <footer data-i18n="footer">
            * Цены указаны для ознакомления и могут отличаться от актуальных.
            Для уточнения стоимости свяжитесь с нами по контактам, указанным
            вверху страницы.
          </footer>
        </div>
      </section>
    </>
  );
}
