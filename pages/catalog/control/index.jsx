import { useState } from "react";

export default function Control() {
  const tabs = [
    {
      id: 1,
      title: "Яндекс станция Макс",
      translation: "Station_Alice_Max",
      package: "max",
    },
    {
      id: 2,
      title: "Яндекс станция Дуо Макс",
      translation: "Station_Alice_Duo",
      package: "duo",
    },
    {
      id: 3,
      title: "Яндекс Станция 3",
      translation: "Station_Alice_Lite_3",
      package: "lite3",
    },
    {
      id: 4,
      title: "Яндекс станция Миди",
      translation: "Station_Alice_Midi",
      package: "midi",
    },
    {
      id: 5,
      title: "Яндекс станция Мини 3 Про",
      translation: "Station_Alice_Mini3Pro",
      package: "mini3_pro",
    },
    {
      id: 6,
      title: "Яндекс станция Мини 3",
      translation: "Station_Alice_Mini3",
      package: "mini3",
    },
    {
      id: 7,
      title: "Яндекс станция Лайт 2",
      translation: "Station_Alice_Lite2",
      package: "lite2",
    },
    {
      id: 8,
      title: "Телевизор Яндекс Про 140 см",
      translation: "Station_Alice_TV140",
      package: "tv140",
    },
    {
      id: 9,
      title: "Телевизор Яндекс Бейсик 165 см",
      translation: "Station_Alice_TV165",
      package: "tv165",
    },
    {
      id: 10,
      title: "Пульт ДУ Яндекс",
      translation: "Remote_Yandex",
      package: "remote",
    },
    {
      id: 11,
      title: "Яндекс центр управления",
      translation: "Hub_Yandex",
      package: "hub_yandex",
    },
    {
      id: 12,
      title: "Умный пульт с датчиком температуры и влажности Яндекс",
      translation: "hub_Yandex_sensor",
      package: "Hub_Yandex_sensor",
    },
    {
      id: 13,
      title: "Центр умного дома Aqara Hub M2",
      translation: "Hub_Aqara_M2",
      package: "hub_Aqara_M2",
    },
    {
      id: 14,
      title: "Центр умного дома Aqara Hub M3 EU",
      translation: "Hub_Aqara_M3",
      package: "hub_Aqara_M3",
    },
    {
      id: 15,
      title: "Умный хаб ROXIMO",
      translation: "Hub_Roximo",
      package: "hub_Roximo",
    },
    {
      id: 16,
      title: "Центр управления Tuya",
      translation: "Hub_Tuya",
      package: "hub_Tuya",
    },
    {
      id: 17,
      title: "Климатический модуль Яндекса для Станции Мини 3 Про",
      translation: "Modul_mini_3_pro",
      package: "modul_mini_3_pro",
    },
  ];
  const [activeTab, setActiveTab] = useState(1); // по умолчанию первый таб активен

  // функция для переключения таба
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <section className="content">
        <div className="wrapper_for_smart_home_tabs">
          {/* <!-- Контейнер для открытия устройств управление --> */}
          <div className="wrapper_for_smart_home_content" data-tab="0">
            <div className="tabs_for_smart_home_items">
              {tabs.map((tab) => (
                <div
                  className={`tabs_for_smart_home_item ${activeTab === tab.id ? "active" : ""}`}
                  id={tab.package}
                  data-tab={tab.id}
                  data-i18n={tab.translation}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.title}
                </div>
              ))}
            </div>

            {/* <!-- Контейнер для содержания устройств управление --> */}
            <div className="wrapper_for_smart_home_items">
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 1 ? "active" : ""}`}
                data-tab="1"
              >
                <div className="wrapper_for_images">
                  <img
                    src="../assets/img/0-control/макс.png"
                    alt="max yandex"
                    className="image_tab"
                    onclick="toggleZoom(this)"
                  />
                </div>
                <div className="text_tab">
                  <span data-i18n="Station_Alice_Max_text_1">
                    Умная колонка Яндекс Макс заключена в корпус из пластика,
                    обтянутого тканью. На лицевой стороне расположен монохромный
                    LED-дисплей, который отображает дату, погоду, выводит
                    анимацию голосового помощника. Световое кольцо на верхней
                    панели показывает состояние станции сменой цветов, миганием,
                    вращением, мерцанием, пульсацией. По бокам колонки находятся
                    5 динамиков и 7 микрофонов. Трехполосная акустическая
                    система воспроизводит низкие, средние и высокие частоты из
                    разных динамиков.
                  </span>
                  <p data-i18n="Station_Alice_Max_text_2">
                    С Алисой можно разговаривать, задавать вопросы, простить
                    найти музыку, видео, информацию в интернете. Помощник
                    помогает решать прикладные задачи — устанавливать будильник,
                    включать/переключать треки в музыкальном плеере, вызвать
                    такси, заказать еду. Разъем Ethernet позволяет подключать
                    колонку к проводной локальной сети для доступа к интернету
                    со скоростью до 1 Гбит/с. Переключение с беспроводного
                    соединения Wi-Fi на проводное происходит автоматически.
                  </p>
                  <p data-i18n="Station_Alice_Max_text_2">
                    В комплект входит пульт со встроенным микрофоном. Несколько
                    колонок и станций можно объединить в мультирум для передачи
                    музыки, звуков в любую точку дома. Поддерживает беспроводные
                    технологии Wi-Fi, Zigbee и Bluetooth.
                  </p>
                </div>

                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  280 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 2 ? "active" : ""}`}
                data-tab="2"
              >
                <div className="wrapper_for_images">
                  <img
                    src="../assets/img/0-control/дуо.png"
                    alt="duo yandex"
                    className="image_tab"
                    onclick="toggleZoom(this)"
                  />
                </div>
                <div className="text_tab">
                  <span data-i18n="Station_Alice_Duo_text_1">
                    Станция Дуо Макс выполнена в бежевом корпусе из пластика и
                    ткани. Она оснащена контурной LED-подсветкой. Одна из
                    особенностей модели – поворотный сенсорный экран FullHD для
                    просмотра мультимедиа, ответов Алисы и управления
                    устройствами умного дома. Камера 13 Мп с углом обзора 120°
                    позволяет общаться по видеосвязи. Акустическая система с 4
                    широкополосными динамиками и сабвуфером мощностью 60 Вт
                    воспроизводит сбалансированный звук.
                  </span>
                  <p data-i18n="Station_Alice_Duo_text_2">
                    Яндекс Станция Дуо Макс YNDX-00055BIE поддерживает
                    беспроводные технологии Wi-Fi, Zigbee и Bluetooth. С помощью
                    Алисы можно включать музыку, слушать сказки, заказывать
                    продукты, вызывать такси, ставить будильник.
                  </p>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  350 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 3 ? "active" : ""}`}
                data-tab="3"
              >
                <div className="wrapper_for_images">
                  <img
                    src="../assets/img/0-control/Станция 3.png"
                    alt="lite 3 yandex"
                    className="image_tab"
                    onclick="toggleZoom(this)"
                  />
                </div>
                <div className="text_tab">
                  <span data-i18n="Station_Alice_Lite_3_text_1">
                    Яндекс Станция 3 — умная колонка с Алисой, яркой подсветкой
                    и мощным звуком для дома. Эмбиент-подсветка на задней панели
                    поддерживает 16 миллионов цветов. Серая колонка с часами
                    имеет сверху круговую.
                  </span>
                  <p data-i18n="Station_Alice_Lite_3_text_2">
                    LED-подсветку, которая загорается, когда вы обращаетесь к
                    Алисе или срабатывают таймеры и напоминания. Станция 3
                    предлагает разнообразие режимов подсветки, которые помогут
                    создать нужную атмосферу в любой ситуации. В режиме
                    "Светомузыка" свет будет пульсировать и менять цвета в такт
                    музыке. Если вы хотите добавления динамичности, режим
                    "Стробоскоп" добавит яркие вспышки света, совпадающие с
                    музыкальным ритмом. Для спокойной и уютной обстановки
                    идеально подойдёт режим "Свеча", он наполнит пространство
                    мягким жёлто-оранжевым светом и звуками потрескивающего
                    камина. В настройках вы всегда сможете найти другие режимы
                    подсветки, подходящие для вас.
                  </p>
                  <p data-i18n="Station_Alice_Lite_3_text_3">
                    На фронтальной стороне устройства есть пиксельный дисплей с
                    временем, погодой и простыми анимациями. Колонка выдаёт до
                    50 Вт объёмного звука. Конфигурация динамиков и алгоритмы
                    обработки подстраивают звучание под комнату, чтобы музыка,
                    подкасты и фильмы звучали объёмно и чисто.
                  </p>
                  <p data-i18n="Station_Alice_Lite_3_text_4">
                    Станция 3 поддерживает устройства умного дома по Wi-Fi,
                    Zigbee и Matter. Детектор шумов распознаёт разные звуки и
                    настраивает сценарии.
                  </p>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  238 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 4 ? "active" : ""}`}
                data-tab="4"
              >
                <img
                  src="../assets/img/0-control/миди.png"
                  alt="midi yandex"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Station_Alice_Midi_text_1">
                    Яндекс Станция Миди — новая умная колонка с виртуальным
                    ассистентом Алисой. Мощное звучание 24 Вт в таком компактном
                    корпусе. LED-дисплей, который показывает время, погоду и
                    реакции Алисы, а также активная контурная LED-подсветка.
                  </span>
                  <p data-i18n="Station_Alice_Midi_text_2">
                    Встроенный хаб управления Zigbee и голосовое управление
                    умным домом даже без интернета. Беспроводная связь Wi-Fi
                    (2,4–5 ГГц) и Bluetooth 5.0, с возможностью встраивания в
                    экосистему умного дома.
                  </p>
                  <p data-i18n="Station_Alice_Midi_text_3">
                    Активная контурная LED-подсветка и анимированные реакции на
                    дисплее добавляют эмоций, когда слушаете музыку и общаетесь
                    с Алисой. LED-дисплей показывает время и температуру. В
                    режиме радионяни Алиса может передавать вам звуки из детской
                    на телефон или вторую Яндекс Станцию.
                  </p>
                </div>

                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  126 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 5 ? "active" : ""}`}
                data-tab="5"
              >
                <img
                  src="../assets/img/0-control/Мини 3 Про.png"
                  alt="mini 3 pro yandex"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Station_Alice_Mini3Pro_text_1">
                    В отличие от предыдущих моделей, она оснащена встроенными
                    модулями Zigbee, Wi-Fi и Matter over Wi-Fi, что позволяет ей
                    управлять устройствами умного дома даже без подключения к
                    интернету, если те поддерживают такие же протоколы.
                  </span>
                  <p data-i18n="Station_Alice_Mini3Pro_text_2">
                    Внутри компактного корпуса скрывается 18-ваттный динамик и
                    два пассивных излучателя, усиливающих басы. Звучание стало
                    заметно богаче и глубже по сравнению с «Станцией Мини 3» —
                    вы почувствуете это сразу после первого запуска.
                  </p>
                  <p data-i18n="Station_Alice_Mini3Pro_text_3">
                    «Станция Мини 3 Про» работает с голосовым помощником Алиса,
                    который поможет включить музыку, узнать погоду, управлять
                    техникой, создать напоминание или даже рассказать сказку. Её
                    приятно поставить и на полку, и на кухню — она выглядит
                    современно и лаконично.
                  </p>
                </div>

                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  112 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 6 ? "active" : ""}`}
                data-tab="6"
              >
                <img
                  src="../assets/img/0-control/мини3.png"
                  alt="mini 3 yandex"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab" data-i18n="Station_Alice_Mini3_text">
                  Умная колонка Яндекс Мини 3 представлена в круглом сером
                  корпусе с отделкой из акустической ткани. Голосовой ассистент
                  Алиса с YandexGPT точно распознает команды, анализирует
                  сложные запросы, делит их на несколько простых и превращает в
                  цепочку действий. Колонка Яндекс.Станция Мини 3
                  синхронизируется с другими умными устройствами в приложении
                  Дом с Алисой и управляет ими с помощью голосовых команд.
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  70 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 7 ? "active" : ""}`}
                data-tab="7"
              >
                <img
                  src="../assets/img/0-control/лайт.png"
                  alt="lite 2 yandex"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab" data-i18n="Station_Alice_Lite2_text">
                  Каждый может заглянуть в глазки Алисе. Она подмигнёт в ответ
                  на комплимент, зажмурится от восторга или опустит взгляд,
                  когда загрустит. А если произнести особые команды, то можно
                  активировать секретные реакции Алисы. Новый корпус Станции
                  Лайт 2 и динамик мощностью 6 Вт позволили увеличить её
                  акустический объём, чтобы любимые треки звучали ещё чище и
                  насыщеннее. Когда захотите свериться с часами или узнать
                  прогноз погоды, Алиса не только озвучит ответ, но и покажет
                  время и температуру на LED-экране.
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  49 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 8 ? "active" : ""}`}
                data-tab="8"
              >
                <img
                  src="../assets/img/0-control/тв 140.png"
                  alt="tv 140 yandex"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab" data-i18n="Station_Alice_TV140_text">
                  Функция «Найди пульт» может работать как Станция, даже с
                  выключенным экраном. Физическое отключение микрофона. 4
                  высокочувствительных микрофона + 1 в пульте. Можно объединять
                  с устройствами умного дома и управлять ими голосом.
                  Подключение через Wi-Fi.
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  560 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 9 ? "active" : ""}`}
                data-tab="9"
              >
                <img
                  src="../assets/img/0-control/тв 165.png"
                  alt="tv 165 yandex"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <br />
                  <span data-i18n="Station_Alice_TV165_text_1">
                    - Разрешение 4K UHD — наслаждайтесь четкостью и яркостью
                    изображения.
                  </span>
                  <br />
                  <span data-i18n="Station_Alice_TV165_text_2">
                    - Акустическая система Dolby Audio — погружение в объемный
                    звук.
                  </span>
                  <br />
                  <span data-i18n="Station_Alice_TV165_text_3">
                    - Поддержка Smart TV — доступ к любимым приложениям и
                    контенту.
                  </span>
                  <br />
                  <span data-i18n="Station_Alice_TV165_text_4">
                    - Угол обзора 178° — отличное качество изображения с любого
                    ракурса.
                  </span>
                  <br />
                  <span data-i18n="Station_Alice_TV165_text_5">
                    - Множество входов — HDMI, USB, Ethernet и Bluetooth для
                    подключения различных устройств.
                  </span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  518 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 10 ? "active" : ""}`}
                data-tab="10"
              >
                <img
                  src="../assets/img/0-control/Пульт ДУ Яндекс.png"
                  alt="DU yandex"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Remote_Yandex_text_1">
                    Автоматизировать бытовую технику при помощи умного пульта
                    Yandex SmartControl YNDX-0006 проще, чем может показаться. С
                    его помощью можно управлять техникой, например телевизором
                    или кондиционером, а также любым другим устройством, которое
                    поддерживает ИК-соединение.
                  </span>
                  <p data-i18n="Remote_Yandex_text_2">
                    Также осуществляется передача данных посредством технологии
                    Wi-Fi. Используя модель, можно не только включать/выключать
                    технику, но и настраивать её.
                  </p>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  12 600
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 11 ? "active" : ""}`}
                data-tab="11"
              >
                <img
                  src="../assets/img/0-control/Яндекс центр управления.png"
                  alt="hub yandex"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Hub_Yandex_text_1">
                    Универсальный Хаб Яндекса для простого и быстрого
                    подключения разных приборов к умному дому с Алисой. И единая
                    точка управления всеми устройствами. С Хабом умный дом
                    сможет больше. Наполните его датчиками и множеством других
                    Zigbee-устройств. Хаб соединит их с Яндекс Станцией, и вы
                    будете управлять умным домом через приложение или голосом.
                    Подключайте датчики Яндекса с Zigbee к Хабу напрямую,
                    объединяйте с другими устройствами умного дома и задавайте
                    сценарии. Множество процессов станут автоматизированными. По
                    Wi-Fi Хаб соединяется с лампочками, чайниками, пылесосами и
                    тысячами других девайсов разных производителей.
                  </span>
                  <p>
                    <span data-i18n="Hub_Yandex_text_2">
                      А ещё Хаб – это смарт-пульт, действующий на 360°. Даже
                      если у вас дома простой телевизор или кондиционер,
                      соедините их с Хабом при помощи ИК-подключения и
                      управляйте без пульта.
                    </span>
                    <br />
                    <br />
                    <span data-i18n="Power">Питание</span>-
                    <span data-i18n="Static_electricity">От сети</span>
                    <br />
                    <span data-i18n="Type">Тип</span>-
                    <span data-i18n="Control_center">Центр управления</span>
                    <br />
                    <span data-i18n="Connected_devices">
                      Количество подключаемых устройств
                    </span>
                    - 128
                    <br />
                    <span data-i18n="Ecosystem">Экосистема</span>-
                    <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
                    <br />
                    <span data-i18n="Communication_protocol">
                      Протокол связи
                    </span>
                    - Bluetooth, Wi-Fi, ZigBee,
                    <span data-i18n="IR_Port">ИК-Порт</span>
                    <br />
                  </p>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  13 120
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 12 ? "active" : ""}`}
                data-tab="12"
              >
                <img
                  src="../assets/img/0-control/Умный пульт с датчиком температуры и влажности YNDX-00571.png"
                  alt="hub yandex with sensor"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Hub_Yandex_sensor_text_1">
                    Умный ИК-пульт Яндекса YNDX-00571 со встроенным датчиком
                    температуры и влажности позволяет не только управлять
                    обычной домашней техникой с ИК-портом голосом или удаленно,
                    но и автоматизировать работу климатических устройств,
                    создавать удобные сценарии и настраивать Умный климат.
                  </span>
                  <p>
                    <span data-i18n="Hub_Yandex_sensor_text_2">
                      Кондиционеры, вентиляторы, обогреватели, телевизоры,
                      телеприставки, ресиверы — соедините любую технику,
                      управляемую с помощью ИК-сигнала, с умным ИК-пультом и
                      управляйте как удобно.
                    </span>
                  </p>
                  <p data-i18n="Hub_Yandex_sensor_text_3">
                    Встроенный в пульт датчик в реальном времени отслеживает
                    температуру и влажность в комнате.
                  </p>
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                  <br />
                  <span data-i18n="Type">Тип</span>-
                  <span data-i18n="Control_center">Центр управления</span>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>-
                  <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - Bluetooth, Wi-Fi,
                  <span data-i18n="IR_Port">ИК-Порт</span>
                  <br />
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  33 600
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 13 ? "active" : ""}`}
                data-tab="13"
              >
                <img
                  src="../assets/img/0-control/Хаб Aqara Hub M2.png"
                  alt="Хаб Aqara Hub M2"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Hub_Aqara_M2_text_1">
                    Aqara Hub M2 – это многофункциональный центр умного дома,
                    который позволяет управлять и автоматизировать вашу квартиру
                    или дом с помощью смартфона, планшета или голосовых команд.
                  </span>
                  <br />
                  <br />
                  <p data-i18n="Hub_Aqara_M2_text_2">
                    Ключевые характеристики:
                  </p>
                  <p data-i18n="Hub_Aqara_M2_text_3">
                    - Поддержка Zigbee 3.0: Подключает до 128 устройств Aqara и
                    других производителей, совместимых с Zigbee, обеспечивая
                    бесперебойную работу вашей системы умного дома. Мощный
                    процессор: Обеспечивает быстрое и отзывчивое взаимодействие
                    с вашими устройствами.
                  </p>
                  <p data-i18n="Hub_Aqara_M2_text_4">
                    - Двухдиапазонный Wi-Fi: Обеспечивает стабильное и надежное
                    подключение к вашей домашней сети.
                  </p>
                  <p data-i18n="Hub_Aqara_M2_text_5">
                    - Гигабитный Ethernet-порт: Альтернативный вариант
                    подключения для более надежного и безопасного соединения.
                  </p>
                  <p data-i18n="Hub_Aqara_M2_text_6">
                    - Встроенный ИК-порт: Позволяет управлять IR-устройствами,
                    такими как телевизоры, кондиционеры и вентиляторы, с помощью
                    смартфона или голосовых команд.
                  </p>
                  <br />
                  <p data-i18n="Hub_Aqara_M2_text_7">
                    Удаленный доступ: Управляйте своим умным домом из любой
                    точки мира с помощью приложения Aqara Home или голосовых
                    команд через Умный дом Яндекс. Автоматизация и сценарии:
                    Создавайте автоматизированные сценарии для выполнения
                    действий в зависимости от установленных условий, например,
                    включайте свет при возвращении домой или выключайте
                    термостат при выходе. Локальное управление: Даже без
                    подключения к интернету вы можете управлять своими
                    Zigbee-устройствами непосредственно через хаб.
                  </p>
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                  <br />
                  <span data-i18n="Type">Тип</span>-
                  <span data-i18n="Control_center">Центр управления</span>
                  <br />
                  <span data-i18n="Connected_devices">
                    Количество подключаемых устройств
                  </span>
                  - 128
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Aqara
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - Bluetooth, Wi-Fi, ZigBee,
                  <span data-i18n="IR_Port">ИК-Порт</span>
                  <br />
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  42 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 14 ? "active" : ""}`}
                data-tab="14"
              >
                <img
                  src="../assets/img/0-control/Хаб Aqara Hub M3 EU.png"
                  alt="Хаб Aqara Hub M3 EU"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Hub_Aqara_M3_text_1">
                    Aqara M3 — это хаб нового поколения с расширенной поддержкой
                    протоколов, локальных автоматизаций и высокой
                    совместимостью. Он объединяет устройства Aqara и девайсы
                    сторонних производителей с поддержкой Matter, а также
                    технику, управляемую через ИК-пульты. Особенности • Широкая
                    совместимость: поддержка Matter, Zigbee, Thread, Wi-Fi,
                    Bluetooth и инфракрасного управления (ИК).
                  </span>
                  <p data-i18n="Hub_Aqara_M3_text_2">
                    Интеграция с Matter: впервые позволяет объединить экосистему
                    Aqara с устройствами сторонних производителей через Matter*.
                  </p>
                  <p data-i18n="Hub_Aqara_M3_text_3">
                    ИК-управление 360°: встроенный ИК-излучатель с углом обзора
                    360° управляет бытовой техникой — от телевизоров до
                    кондиционеров.
                  </p>
                  <p data-i18n="Hub_Aqara_M3_text_4">
                    Обеспечивает локальное выполнение автоматизаций для
                    устройств — сценарии продолжают работать даже, если пропадет
                    подключение к интернету.
                  </p>
                  <p data-i18n="Hub_Aqara_M3_text_5">
                    Встроенный динамик 95 дБ: используется для оповещений о
                    событиях безопасности и пользовательских сценариев — даже
                    без доступа в интернет.
                  </p>
                  <p data-i18n="Hub_Aqara_M3_text_6">
                    Благодаря функции Matter Bridge центр умного дома (хаб)
                    Aqara M3 бесшовно интегрирует Zigbee-устройства в экосистему
                    Matter, включая Умный дом Яндекс.
                  </p>
                  <br />
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                  <br />
                  <span data-i18n="Type">Тип</span>-
                  <span data-i18n="Control_center">Центр управления</span>
                  <br />
                  <span data-i18n="Connected_devices">
                    Количество подключаемых устройств
                  </span>
                  - 128
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Aqara
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - Bluetooth, Wi-Fi, ZigBee,
                  <span data-i18n="IR_Port">ИК-Порт</span>
                  <br />
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  103 600
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 15 ? "active" : ""}`}
                data-tab="15"
              >
                <img
                  src="../assets/img/0-control/Умный хаб ROXIMO GWIR01.png"
                  alt="Умный хаб ROXIMO GWIR01"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Hub_Roximo_text_1">
                    Умный хаб - это комбоустройство, включающее в себя сразу
                    несколько функций, предназначен для организации сетей умного
                    дома в стандартах Zigbee и Bluetooth, и возможностью
                    одновременного подключения до 128 устройств к одному шлюзу.
                    Использование данных технологий позволяет разгрузить точку
                    доступа WIFi от большого количества одновременно
                    подключенных устройств умного дома. Встроенная функция
                    умного пульта позволяет создавать виртуальные ИК-пульты и
                    управлять различной бытовой техникой в доме: телевизорами,
                    аудио-видеосистемами, кондиционерами, вентиляторами и любым
                    другим устройствами, имеющим ИК-управление.
                  </span>
                  <br />
                  <span data-i18n="Hub_Roximo_text_2">
                    К хабу можно подключать Zigbee устройства других
                    производителей , которые работают в облаке Tuya.
                  </span>
                  <br />
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                  <br />
                  <span data-i18n="Type">Тип</span>-
                  <span data-i18n="Control_center">Центр управления</span>
                  <br />
                  <span data-i18n="Connected_devices">
                    Количество подключаемых устройств
                  </span>
                  - 128
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Roximo ioT
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - Bluetooth, Wi-Fi, ZigBee,
                  <span data-i18n="IR_Port">ИК-Порт</span>
                  <br />
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  38 400
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 16 ? "active" : ""}`}
                data-tab="16"
              >
                <img
                  src="../assets/img/0-control/Центр управления Tuya SGW01.png"
                  alt="Центр управления Tuya SGW01"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Hub_Tuya_text">
                    Многорежимный шлюз Tuya Smart - это основной элемент системы
                    умного дома, позволяющий централизовать все умные
                    устройства, функционирования сценариев умного дома для
                    создания комфорта, обеспечения безопасности дома за время
                    вашего отсутствия и тем самым информирует Вас о состоянии
                    вашего дома в режиме реального времени.
                  </span>
                  <br />
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                  <br />
                  <span data-i18n="Type">Тип</span>-
                  <span data-i18n="Control_center">Центр управления</span>
                  <br />
                  <span data-i18n="Connected_devices">
                    Количество подключаемых устройств
                  </span>
                  - 128
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - Tuya
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - Bluetooth, Wi-Fi, ZigBee
                  <br />
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  13 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === 17 ? "active" : ""}`}
                data-tab="17"
              >
                <img
                  src="../assets/img/0-control/Климатический модуль Яндекса.png"
                  alt="Modul_mini_3_pro"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Modul_mini_3_pro_text_1">
                    Присоединяется к Станции Мини 3 Про и превращает её в умную
                    систему, которая сама мониторит качество воздуха дома.
                    Встроенные высокочувствительные датчики измеряют уровень
                    СО2, температуру и влажность. Создавайте удобные сценарии:
                    например, чтобы Алиса по показанию датчика сообщала вам,
                    когда воздух в комнате станет слишком сухим, и сразу
                    включала увлажнитель.
                  </span>
                  <p data-i18n="Modul_mini_3_pro_text_2">
                    Когда уровень углекислого газа в комнате превысит норму,
                    Алиса пришлёт вам уведомление в приложении и голосом
                    напомнит, что пора открыть окно для проветривания. По
                    запросу Алиса будет выводить показатели датчика на дисплей
                    Станции Мини 3 Про, а LED-кольцо будет загораться красным,
                    жёлтым или зелёным в зависимости от уровня критичности
                    показателей.
                  </p>
                  <p data-i18n="Modul_mini_3_pro_text_3">
                    Климатический модуль крепится к Станции Мини 3 Про с помощью
                    магнитного крепления2 и работает, когда умная колонка
                    подключена к сети.
                  </p>
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>-
                  <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
                  <br />
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  33 600
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
