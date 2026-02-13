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
      <section className="content">
        <div className="wrapper_for_smart_home_tabs">
          {/* <!-- Контейнер для открытия устройств сантехника --> */}
          <div className="wrapper_for_smart_home_content">
            <div className="tabs_for_smart_home_items">
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Close_water_Aqara"
              >
                Привод для перекрытия воды Aqara
              </div>
              <div
                className="tabs_for_smart_home_item"
                id="close_water"
                data-i18n="Close_water"
              >
                Привод для перекрытия воды
              </div>
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Smart_Ball_Valve_DN25"
              >
                Умный шаровый клапан DN25 1"
              </div>
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Smart_Ball_Valve_DN20"
              >
                Умный шаровый клапан DN20 3/4"
              </div>
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Control_heater_Yandex"
              >
                Радиаторный терморегулятор Яндекс
              </div>
              <div
                className="tabs_for_smart_home_item"
                id="control_heater"
                data-i18n="Control_heater_Aqara"
              >
                Радиаторный термо-регулятор Aqara
              </div>
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Control_floor_Electsmart_black"
              >
                Умный термо-регулятор Electsmart черный
              </div>
              <div
                className="tabs_for_smart_home_item"
                id="control_floor"
                data-i18n="Control_floor_Welrok_white"
              >
                Умный термо-регулятор Welrok светлый
              </div>
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Control_floor_Celtic_white"
              >
                Умный термо-регулятор Celtic светлый
              </div>
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Control_floor_Celtic_black"
              >
                Умный термо-регулятор Celtic черный
              </div>
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Control_boiler_Bugatti"
              >
                Модуль управления котлом Wi-Fi Federica Bugatti
              </div>
              <div
                className="tabs_for_smart_home_item m_font_size_10"
                data-i18n="Control_boiler_Beok_black"
              >
                Термо-регулятор Beok для газового и электрического котла черный
              </div>
              <div
                className="tabs_for_smart_home_item m_font_size_10"
                data-i18n="Control_boiler_Beok_white"
              >
                Термо-регулятор Beok для газового и электрического котла белый
              </div>
              <div
                className="tabs_for_smart_home_item m_font_size_10"
                data-i18n="Boiler_THERMEX_Sonne_grey"
              >
                Электрический настенный котел THERMEX Sonne 12 Wi-Fi Grey
              </div>
              <div
                className="tabs_for_smart_home_item m_font_size_10"
                data-i18n="Boiler_THERMEX_Cometa"
              >
                Электрический двухконтурный котел THERMEX Cometa 12-24 Wi-Fi
              </div>
              <div
                className="tabs_for_smart_home_item m_font_size_10"
                data-i18n="Boiler_THERMEX_Boss"
              >
                Электрический настенный котел THERMEX Boss 12 Wi-Fi White
              </div>
              <div
                className="tabs_for_smart_home_item m_font_size_10"
                data-i18n="Boiler_THERMEX_Sonne_white"
              >
                Электрический настенный котел THERMEX Sonne 12 Wi-Fi White
              </div>
              <div
                className="tabs_for_smart_home_item m_font_size_10"
                data-i18n="Heating_thermostat_ZONT"
              >
                Отопительный термостат ZONT GSM Wi-Fi H-1V NEW для котлов
              </div>
            </div>

            {/* <!-- Контейнер для содержания устройств сантехника --> */}
            <div className="wrapper_for_smart_home_items">
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/привод протечки Aqara.png"
                  alt="привод протечки Aqara"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Close_water_Aqara_text">
                    Умный манипулятор A ARA T1-VC-X01E— это устройство
                    управления клапаном, основанное на протоколе беспроводной
                    связи Zigbee, подходящее для интеллектуального,
                    электрического управления (с помощью кнопки на устройстве) и
                    ручного управления водопроводными системами. Оно может быть
                    связано с такими устройствами, как датчики утечки воды, для
                    выявления рисков, отправки уведомлений и их устранения, тем
                    самым защищая имущество и обеспечивая безопасность.
                  </span>
                  <br />
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Aqara
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - ZigBee
                  <br />
                  <span data-i18n="Power">Питание</span>- АА х 2
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  50 400
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/Клапан перекрытия В.png"
                  alt="Клапан перекрытия В"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Close_water_text">
                    Электрический привод перекрытия воды/газ, рычаг для крана с
                    Алисой - отличное решение для вашего умного дома. С его
                    помощью вы сможете контролировать перекрытие воды и газа в
                    вашем доме, обеспечивая безопасность и эффективность.
                  </span>
                  <br />
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>-
                  <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
                  , Smart Life
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - ZigBee
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  24 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/Умный шаровой клапан.png"
                  alt="Умный шаровой клапан"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Smart_Ball_Valve_DN25_text_1">
                    Шаровый кран с электроприводом 1 дюйма и напряжением 220в -
                    на страже безопасности ремонта и вашего спокойствия!
                  </span>
                  <p data-i18n="Smart_Ball_Valve_DN25_text_2">
                    При возникноваении протечки кран автоматически перекрывает
                    воду. Наиболее эффективно работает в наборе с датчиком
                    протечки. Получает сигнал от датчика, кран перекрывает воду.
                    Пуш-уведомление о протечке приходит за 2 секунды в мобильном
                    приложении. Управляется через голосового помощника Алису.
                    <br />
                    Нужен хаб Tuya.
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - SmartLife
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - ZigBee
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  20 800
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/Умный шаровой клапан.png"
                  alt="Умный шаровой клапан"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Smart_Ball_Valve_DN20_text_1">
                    Шаровый кран с электроприводом 3/4 дюйма и напряжением 220в
                    - на страже безопасности ремонта и вашего спокойствия!
                  </span>
                  <p data-i18n="Smart_Ball_Valve_DN20_text_2">
                    При возникноваении протечки кран автоматически перекрывает
                    воду. Наиболее эффективно работает в наборе с датчиком
                    протечки. Получает сигнал от датчика, кран перекрывает воду.
                    Пуш-уведомление о протечке приходит за 2 секунды в мобильном
                    приложении. Управляется через голосового помощника Алису.
                    <br />
                    Нужен хаб Tuya.
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - SmartLife
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - ZigBee
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  19 200
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/терморегулятор радиатора Яндекс.png"
                  alt="терморегулятор радиатора Яндекс"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Control_heater_Yandex_text_1">
                    Умный терморегулятор Яндекса для радиатора регулирует подачу
                    горячей воды, поддерживая дома нужную температуру или меняя
                    её в зависимости от показаний умных датчиков¹. Управляйте
                    терморегулятором удалённо и голосом, настраивайте Умный
                    климат и пользуйтесь удобными сценариями. Умный
                    терморегулятор устанавливается на клапан радиатора со
                    стандартной резьбой М30 × 1,5 мм. Для установки на другие
                    клапаны в комплекте есть 7 переходников, которые подходят
                    для радиаторов большинства брендов. Перекрывать отопление
                    при монтаже не нужно, достаточно просто снять старый
                    терморегулятор и прикрутить новый.
                  </span>
                  <p data-i18n="Control_heater_Yandex_text_2">
                    Удобно пользоваться. Голосом: объедините терморегулятор с
                    Яндекс Станцией и меняйте настройки отопления с помощью
                    Алисы: «Алиса, увеличь температуру на 5 градусов».
                  </p>
                  <p data-i18n="Control_heater_Yandex_text_3">
                    Через приложение Дом с Алисой: например, заранее включайте
                    радиатор на даче, чтобы приехать в тёплый дом.
                  </p>
                  <p data-i18n="Control_heater_Yandex_text_4">
                    С помощью сценариев: для максимально точной настройки и
                    поддержания микроклимата в комнате свяжите терморегулятор в
                    сценарии с умным датчиком и другими климатическими
                    устройствами¹. Например, объедините его с датчиком
                    температуры и влажности и увлажнителем, встроенным в
                    экосистему умного дома. А можно объединить с датчиком
                    открытия дверей, чтобы температура повышалась до комфортного
                    уровня, когда вы приходите домой.
                  </p>
                  <p data-i18n="Control_heater_Yandex_text_5">
                    По расписанию: задайте расписание, чтобы радиатор убавлял
                    тепло в определённые часы — например, когда вы на работе.
                  </p>
                  <p data-i18n="Control_heater_Yandex_text_6">
                    Вручную: терморегулятором можно управлять с помощью шайбы —
                    просто вращайте её, чтобы выбрать нужную температуру. Она
                    будет отображаться на удобном LED-дисплее. На нём также
                    можно смотреть подключение к сети, уровень заряда батареек и
                    проверять, активен ли режим блокировки.
                  </p>
                  <p data-i18n="Control_heater_Yandex_text_7">
                    Чтобы умный дом сам поддерживал нужную температуру на
                    заданном уровне, без скачков и колебаний, включите режим
                    Умный климат. Алгоритм будет сам собирать и анализировать
                    данные с устройств.
                  </p>
                  <br />
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>-
                  <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - ZigBee
                  <br />
                  <span data-i18n="Power">Питание</span>- АА х 2
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  30 400
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/терморегулятор радиатора акара.png"
                  alt="терморегулятор радиатора акара"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Control_heater_Aqara_text">
                    Терморегулятор для радиатора (термостат) Aqara Smart
                    Radiator Thermostat E1 - регулирует температуру радиаторов
                    отопления. Вкручивается вместо обычной термоголовки с
                    резьбой M30x1,5 мм. Используйте с датчиком температуры и
                    наслаждайтесь комфортной температурой в любой части дома.
                    Устройство оснащено адаптерами, которые делают его
                    совместимым с подавляющим большинством радиаторных клапанов.
                    Он также прост в установке и не требует монтажных навыков:
                    просто вкрутите устройство вместо старой термоголовки. В
                    случае риска замерзания трубы отопление будет включаться
                    автоматически.
                  </span>
                  <br />
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>-
                  <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
                  , Aqara
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - ZigBee
                  <br />
                  <span data-i18n="Power">Питание</span>- АА х 2
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  47 600
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/терморегулятор Electsmart .png"
                  alt="терморегулятор Electsmart "
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Control_floor_Electsmart_black_text">
                    Терморегулятор подходит почти для каждого электрического
                    теплого пола мощностью до 3500 Вт, водяных полов с
                    коллектором и сервоприводом, для которых характерен тип
                    "нормально закрытый".
                  </span>
                  <br />
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Smart Life
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  49 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/терморегулятор welrok.png"
                  alt="терморегулятор welrok"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Control_floor_Welrok_white_text_1">
                    Умный терморегулятор Welrok для управления теплым полом
                    через смартфон или компьютер. Уникальная функция в
                    приложении Welrok экономит деньги благодаря автоматическому
                    снижению нагрева, когда дома никого нет.
                  </span>
                  <p data-i18n="Control_floor_Welrok_white_text_2">
                    После активации функции геозонирования, терморегулятор
                    Welrok будет учитывать геолокацию всех пользователей,
                    которым был предоставлен доступ. Когда вы выйдете за
                    выбранный радиус, Welrok уменьшит или отключит обогрев в
                    зависимости от выставленных настроек. Когда вы вернетесь в
                    выбранный радиус, терморегулятор установит комфортную
                    температуру. Меняйте температуру нагрева и настройки
                    терморегулятора с помощью Алисы от Яндекс.
                  </p>
                  <p data-i18n="Control_floor_Welrok_white_text_3">
                    Wi-Fi терморегуляторы Welrok можно интегрировать с вашей
                    системой Умный дом через MQTT и http API.
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Welrok
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - Matter, WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  37 800
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/терморегулятор селтик светлый.png"
                  alt="терморегулятор селтик светлый"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Control_floor_Celtic_text_1">
                    Умный терморегулятор Celtic DS M3hgb — современное решение
                    для управления температурой в вашем доме, обеспечивающее
                    комфорт и энергосбережение.
                  </span>
                  <p data-i18n="Control_floor_Celtic_text_2">Особенности:</p>
                  <p data-i18n="Control_floor_Celtic_text_3">
                    - Работа с Алисой — управление голосом для вашего удобства.
                  </p>
                  <p data-i18n="Control_floor_Celtic_text_4">
                    - Сенсорный дисплей — интуитивно понятный интерфейс для
                    легкого управления.
                  </p>
                  <p data-i18n="Control_floor_Celtic_text_5">
                    - Программируемый режим — настройка температуры в
                    зависимости от времени суток.
                  </p>
                  <p data-i18n="Control_floor_Celtic_text_6">
                    - Максимальная нагрузка 3500 Вт — подходит для большинства
                    систем отопления.
                  </p>
                  <p data-i18n="Control_floor_Celtic_text_7">
                    - Регулирование температуры от 5°C до 50°C — идеальный выбор
                    для любого времени года.
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Smart Life
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  22 400
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/терморегулятор селтик черный.png"
                  alt="терморегулятор селтик черный"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Control_floor_Celtic_text_1"></span>
                  Умный терморегулятор Celtic DS M3hgb — современное решение для
                  управления температурой в вашем доме, обеспечивающее комфорт и
                  энергосбережение.
                  <p data-i18n="Control_floor_Celtic_text_2">Особенности:</p>
                  <p data-i18n="Control_floor_Celtic_text_3">
                    - Работа с Алисой — управление голосом для вашего удобства.
                  </p>
                  <p data-i18n="Control_floor_Celtic_text_4">
                    - Сенсорный дисплей — интуитивно понятный интерфейс для
                    легкого управления.
                  </p>
                  <p data-i18n="Control_floor_Celtic_text_5">
                    - Программируемый режим — настройка температуры в
                    зависимости от времени суток.
                  </p>
                  <p data-i18n="Control_floor_Celtic_text_6">
                    - Максимальная нагрузка 3500 Вт — подходит для большинства
                    систем отопления.
                  </p>
                  <p data-i18n="Control_floor_Celtic_text_7">
                    - Регулирование температуры от 5°C до 50°C — идеальный выбор
                    для любого времени года.
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Smart Life
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  22 400
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/Модуль управления котлом Wi-Fi Federica Bugatti.png"
                  alt="/Модуль управления котлом Wi-Fi Federica Bugatti"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Control_boiler_Bugatti_text_1">
                    Модуль управления котлом Wi-Fi Federica Bugatti —
                    современное решение для умного управления вашим отоплением.
                    Этот модуль обеспечивает не только удобство дистанционного
                    контроля, но и автоматизацию работы вашей системы отопления,
                    делая дом комфортнее и экономичнее.
                  </span>
                  <p data-i18n="Control_boiler_Bugatti_text_2">
                    Этот модуль сочетает в себе передовые технологии, простоту
                    использования и высокую надежность. Вы получаете полный
                    контроль над отоплением вашего дома, экономите ресурсы и
                    создаете комфортный микроклимат в любое время.
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Bugatti
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  85 500
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/Терморегулятор Beok для газового и электрического котла черный.png"
                  alt="Терморегулятор Beok для газового и электрического котла черный"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Control_boiler_Beok_text_1">
                    Терморегулятор для газового и электрического котла с Wi-Fi -
                    это современное и функциональное устройство, которое
                    позволяет поддерживать необходимую температуру в помещении.
                  </span>
                  <p data-i18n="Control_boiler_Beok_text_2">
                    Терморегулятор подходит для управления газовыми и
                    электрическими котлами отопления Baxi, Buderus, Bosch,
                    Protherm, Wolf, Vaillant, Viessmann, Zota, Ariston, Navien,
                    Mizudo, Эван, Thermex, Electro, Kiturami, Rinnai и другие. С
                    помощью терморегулятора вы сможете управлять котлом
                    отопления из любой точки мира через интернет, что делает его
                    незаменимым помощником в быту. Термостат оснащен сенсорным
                    управлением и поддерживает различные настройки температуры и
                    заданных значений. Благодаря встроенному датчику
                    температуры, устройство автоматически определяет фактическую
                    температуру в помещении и начинает работу при необходимости.
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Smart Life
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  34 500
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/Терморегулятор Beok для газового и электрического котла белый.png"
                  alt="Терморегулятор Beok для газового и электрического котла белый"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Control_boiler_Beok_text_1">
                    Терморегулятор для газового и электрического котла с Wi-Fi -
                    это современное и функциональное устройство, которое
                    позволяет поддерживать необходимую температуру в помещении.
                  </span>
                  <p data-i18n="Control_boiler_Beok_text_2">
                    Терморегулятор подходит для управления газовыми и
                    электрическими котлами отопления Baxi, Buderus, Bosch,
                    Protherm, Wolf, Vaillant, Viessmann, Zota, Ariston, Navien,
                    Mizudo, Эван, Thermex, Electro, Kiturami, Rinnai и другие. С
                    помощью терморегулятора вы сможете управлять котлом
                    отопления из любой точки мира через интернет, что делает его
                    незаменимым помощником в быту. Термостат оснащен сенсорным
                    управлением и поддерживает различные настройки температуры и
                    заданных значений. Благодаря встроенному датчику
                    температуры, устройство автоматически определяет фактическую
                    температуру в помещении и начинает работу при необходимости.
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Smart Life
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  31 500
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
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
                    Электрический настенный котел Sonne 12 Wi-Fi Grey от THERMEX
                    - это надежное и эффективное решение для отопления вашего
                    дома или дачи. Этот одноконтурный котел мощностью 12 кВт
                    способен обогреть помещение площадью до 120 квадратных
                    метров, обеспечивая комфортный микроклимат в холодное время
                    года. Настенный монтаж экономит драгоценное пространство, а
                    стильный темно-серый дизайн гармонично впишется в любой
                    интерьер. Котел Sonne 12 Wi-Fi Grey оснащен функцией Wi-Fi,
                    что позволяет управлять им удаленно с помощью смартфона или
                    интегрировать его в систему умного дома, например, с
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
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/Электрический двухконтурный котел THERMEX Cometa 12-24 Wi-Fi.png"
                  alt="Электрический двухконтурный котел THERMEX Cometa 12-24 Wi-Fi"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Boiler_THERMEX_Cometa_text">
                    Котел электрический двухконтурный Cometa 12-24 Wi-Fi от
                    THERMEX – это современное решение для отопления и горячего
                    водоснабжения вашего дома или дачи. Этот настенный котел с
                    тепловой мощностью 24 кВт способен эффективно обогреть
                    помещение площадью до 240 кв.м. Благодаря двум контурам,
                    котел Cometa 12-24 Wi-Fi обеспечивает не только комфортный
                    микроклимат, но и подачу горячей воды для бытовых нужд.
                    Управление котлом осуществляется с помощью интуитивно
                    понятной панели управления, а также возможностью подключения
                    к системе умного дома через Wi-Fi, что позволяет
                    контролировать работу котла дистанционно, например, с
                    помощью голосового помощника Алиса. Котел Cometa 12-24 Wi-Fi
                    – это надежное и удобное решение для создания комфортных
                    условий в вашем доме.
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
                  717 200
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/Электрический настенный котел THERMEX Boss 12 Wi-Fi White.png"
                  alt="Электрический настенный котел THERMEX Boss 12 Wi-Fi White"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Boiler_THERMEX_Boss_text">
                    Электрический настенный котел Boss 12 Wi-Fi White от THERMEX
                    - это надежное и эффективное решение для отопления вашего
                    дома или дачи. Этот одноконтурный котел мощностью 12 кВт
                    способен обогреть помещение площадью до 120 квадратных
                    метров, обеспечивая комфортный микроклимат в холодное время
                    года. Настенный монтаж экономит драгоценное пространство, а
                    стильный белый дизайн гармонично впишется в любой интерьер.
                    Котел Boss 12 Wi-Fi White оснащен функцией Wi-Fi, что
                    позволяет управлять им удаленно с помощью смартфона или
                    интегрировать его в систему умного дома, например, с
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
                  493 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/Электрический настенный котел THERMEX Sonne 12 Wi-Fi White.png"
                  alt="Электрический настенный котел THERMEX Sonne 12 Wi-Fi White"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Boiler_THERMEX_Sonne_white_text">
                    Электрический настенный котел Sonne 12 Wi-Fi White от
                    THERMEX - это надежное и эффективное решение для отопления
                    вашего дома или дачи. Этот одноконтурный котел мощностью 12
                    кВт способен обогреть помещение площадью до 120 квадратных
                    метров, обеспечивая комфортный микроклимат в холодное время
                    года. Настенный монтаж экономит драгоценное пространство, а
                    стильный белый дизайн гармонично впишется в любой интерьер.
                    Котел Sonne 12 Wi-Fi White оснащен функцией Wi-Fi, что
                    позволяет управлять им удаленно с помощью смартфона или
                    интегрировать его в систему умного дома, например, с
                    голосовым помощником Алиса. Благодаря простоте установки и
                    комплектации, включающей монтажный комплект и руководство
                    пользователя, установка котла не составит труда.
                  </span>
                  <br />
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Smart Life
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  529 700
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/6-sanitary/Отопительный термостат ZONT GSM  Wi-Fi H-1V NEW для котлов.png"
                  alt="Отопительный термостат ZONT GSM  Wi-Fi H-1V NEW для котлов"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Heating_thermostat_ZONT_text_1">
                    Отопительный термостат ZONT H-1V NEW предназначен
                    поддерживать температурные условия в доме для комфортного
                    проживания. Он контролирует и управляет работой котла из
                    любой точки мира через личный кабинет веб-сервиса или
                    мобильное приложение ZONT. 10 индивидуальных режимов
                    отопления дома включают настройку работы по расписанию,
                    учитывают уличную t° (ПЗА) и время суток. Записывается и
                    сохраняется история событий.
                  </span>
                  <p data-i18n="Heating_thermostat_ZONT_text_2">
                    Резервная батарея в комплекте: при отключении электроэнергии
                    прибор будет оставаться на связи до 12 часов и передавать
                    информацию от подключенных к нему проводных датчиков.
                  </p>
                  <p data-i18n="Heating_thermostat_ZONT_text_3">
                    Крепление на DIN-рейку
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - ZONT
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - Wi‑Fi, GSM
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  121 600
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
