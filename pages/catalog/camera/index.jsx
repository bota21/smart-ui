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
          {/* <!-- Контейнер для открытия устройств камера --> */}
          <div className="wrapper_for_smart_home_content">
            <div className="tabs_for_smart_home_items">
              <div
                className="tabs_for_smart_home_item m_font_size_10"
                id="camera_yandex"
                data-i18n="Camera_Yandex"
              >
                Камера видео наблюдения Yandex
              </div>
              <div
                className="tabs_for_smart_home_item"
                id="camera_street"
                data-i18n="Camera_street_Roximo"
              >
                Умная камера уличная ROXIMO
              </div>
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Camera_rotary_Roximo"
              >
                Умная поворотная камера
              </div>
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Camera_Roximo"
              >
                Умная камера
              </div>
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Camera_E27_Roximo"
              >
                Умная камера с адаптером питания E27
              </div>
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Camera_4G_Roximo"
              >
                Умная 4G камера уличная поворотная ROXIMO
              </div>
              <div
                className="tabs_for_smart_home_item"
                data-i18n="Camera_street_rotary_Roximo"
              >
                Умная камера уличная поворотная ROXIMO
              </div>
            </div>

            {/* <!-- Контейнер для содержания устройств камера --> */}
            <div className="wrapper_for_smart_home_items">
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/8-camera/Камера видеонаблюдения YNDX-00582GRY.png"
                  alt="Камера видеонаблюдения YNDX-00582GRY"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Camera_Yandex_text_1">
                    Камера видеонаблюдения YNDX-00582GRY — идеальный выбор для
                    дома и дачи. Это первая умная камера Яндекса с современным
                    дизайном и качественным видеонаблюдением через Wi-Fi. Она
                    интегрируется с экосистемой Алисы, имеет угол обзора 103º и
                    поворотный механизм 350º, что позволяет не упустить ни одной
                    детали. Она активирует запись при обнаружении движения или
                    звуков и включает ночное видение в темноте.
                  </span>
                  <p data-i18n="Camera_Yandex_text_2">
                    Вы можете следить за трансляцией через приложение или ТВ
                    Станцию и делиться доступом с родственниками. Камера
                    уведомляет о любой активности и может отключать запись по
                    необходимости.
                  </p>
                  <p data-i18n="Camera_Yandex_text_3">
                    Интерфейсы: USB, Wi-Fi, поддержка карт памяти microSD.
                  </p>
                  <p data-i18n="Camera_Yandex_text_4">
                    Особенности: детектор движения, приватный режим, степень
                    защиты IP20.
                  </p>
                  <p data-i18n="Camera_Yandex_text_5">
                    Дополнительные функции: встроенный микрофон, стриминг видео
                    на смартфон, голосовое управление через Яндекс Станцию.
                  </p>
                  <br />
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>-
                  <span data-i18n="Yandex_Smart_Home">Умный дом Яндекса</span>
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  41 600
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/8-camera/видеокамера Roximo уличная.png"
                  alt="видеокамера Roximo уличная"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Camera_street_Roximo_text_1">
                    Камерой можно управлять с помощью специального мобильного
                    приложения, просматривать в режиме онлайн все, что
                    происходит в Вашем доме. Видео можно записывать на SD-карту
                    или в облачное хранилище, а затем просматривать. При
                    использовании охранной функции - при обнаружении движения
                    камера автоматически запишет и сохранит видеозапись.
                  </span>
                  <p data-i18n="Camera_street_Roximo_text_2">
                    Доступны ночной режим, обнаружение движения, двусторонняя
                    связь.
                  </p>
                  <p data-i18n="Camera_street_Roximo_text_3">
                    Комплектация: инструкция- 1шт; Крепление- 1шт, Адаптер
                    питания- 1шт.; Умная камера- 1шт
                  </p>
                  <br />
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - ROXIMO IoT
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  48 800
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/8-camera/видеокамера Roximo поворотная.png"
                  alt="видеокамера Roximo поворотная"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Camera_rotary_Roximo_text_1">
                    Ip камера имеет функцию поворота и может просматривать
                    пространство на все 360 градусов. В комплекте имеется
                    специальное крепление и камера может быть закреплена к стене
                    или потолку, а изображение картинки можно перевернуть в
                    настройках камеры.
                  </span>
                  <p data-i18n="Camera_rotary_Roximo_text_2">
                    Доступны ночной режим, обнаружение движения, двусторонняя
                    связь, видеоняня.
                  </p>
                  <p data-i18n="Camera_rotary_Roximo_text_3">
                    Комплектация: USB кабель- 1шт; Адаптер питания- 1шт;
                    инструкция- 1шт; Умная камера- 1 шт; комплект крепежа- 1шт
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - ROXIMO IoT
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  34 400
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/8-camera/видеокамера Roximo умная.png"
                  alt="видеокамера Roximo умная"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Camera_Roximo_text_1">
                    Камера выполнена в корпусе для установки на специальной
                    поворотной ножке. Платформа ножки так же может быть
                    закреплена к стене или потолку, а изображение картинки можно
                    перевернуть в настройках камеры.
                  </span>
                  <p data-i18n="Camera_Roximo_text_2">
                    Доступны ночной режим, обнаружение движения, двусторонняя
                    связь, видеоняня.
                  </p>
                  <p data-i18n="Camera_Roximo_text_3">
                    Комплектация: Лента 3М- 1шт; USB кабель- 1шт; Адаптер
                    питания-1шт; инструкция- 1шт; Умная камера- 1шт
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - ROXIMO IoT
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
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
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/8-camera/видеокамера Roximo лампочка.png"
                  alt="видеокамера Roximo лампочка"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Camera_E27_Roximo_text_1">
                    Благодаря адаптеру питания Е27 камеру можно установить,
                    вкрутив ее вместо лампочки. Ip камера имеет функцию поворота
                    и может просматривать пространство на все 360 градусов. В
                    комплекте имеется специальное крепление и камера может быть
                    закреплена к стене или потолку, а изображение картинки можно
                    перевернуть в настройках камеры.
                  </span>
                  <p data-i18n="Camera_E27_Roximo_text_2">
                    Доступны ночной режим, обнаружение движения, двусторонняя
                    связь, видеоняня.
                  </p>
                  <p data-i18n="Camera_E27_Roximo_text_3">
                    Комплектация: USB кабель- 1шт; Адаптер питания- 1шт;
                    инструкция- 1шт; Крепежный комплект- 1шт; Адаптер питания
                    Е27-1шт; Умная камера- 1шт
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - ROXIMO IoT
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  39 200
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/8-camera/видеокамера Roximo симка.png"
                  alt="видеокамера Roximo симка"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Camera_4G_Roximo_text_1">
                    Наличие слота для сим-карты и поддержка стандарта связи 4G
                    позволяют установить камеру в любом месте без необходимости
                    проводить интернет для удаленного наблюдения. Видео можно
                    записывать на SD-карту или в облачное хранилище, а затем
                    просматривать. При использовании охранной функции - при
                    обнаружении движения камера автоматически запишет и сохранит
                    видеозапись.
                  </span>
                  <p data-i18n="Camera_4G_Roximo_text_2">
                    Доступны ночной режим, обнаружение движения, двусторонняя
                    связь, режим патрулирования, возврат в дежурную позицию.
                  </p>
                  <p data-i18n="Camera_4G_Roximo_text_3">
                    Комплектация: инструкция- 1шт; Крепление- 1шт, Адаптер
                    питания- 1шт.; Умная камера- 1шт
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - ROXIMO IoT
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - GSM
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  72 000
                  <span data-i18n="tenge">тг</span>
                </div>
              </div>
              <div
                className={`wrapper_for_smart_home_item ${activeTab === tabNumber ? "active" : ""}`}
              >
                <img
                  src="../assets/img/8-camera/видеокамера Roximo wifi.png"
                  alt="видеокамера Roximo wifi"
                  className="image_tab"
                  onclick="toggleZoom(this)"
                />
                <div className="text_tab">
                  <span data-i18n="Camera_street_rotary_Roximo_text_1">
                    Умная уличная поворотная камера ROXIMO RHC202 - это одно из
                    устройств экосистемы умного дома Roximo.
                  </span>
                  <p data-i18n="Camera_street_rotary_Roximo_text_2">
                    Камера имеет функцию поворота и может просматривать
                    пространство на все 360 градусов. В комплекте имеется
                    специальное крепление и камера может быть закреплена к стене
                    или потолку, а изображение картинки можно перевернуть в
                    настройках камеры. При использовании охранной функции - при
                    обнаружении движения камера автоматически запишет и сохранит
                    видеозапись.
                  </p>
                  <p data-i18n="Camera_street_rotary_Roximo_text_3">
                    Доступны ночной режим, обнаружение движения, двусторонняя
                    связь, режим патрулирования, возврат в дежурную позицию.
                  </p>
                  <p data-i18n="Camera_street_rotary_Roximo_text_4">
                    Комплектация: инструкция- 1шт; Крепление- 1шт, Адаптер
                    питания- 1шт.; Умная камера- 1шт
                  </p>
                  <br />
                  <span data-i18n="Ecosystem">Экосистема</span>
                  - ROXIMO IoT
                  <br />
                  <span data-i18n="Communication_protocol">Протокол связи</span>
                  - WiFi
                  <br />
                  <span data-i18n="Power">Питание</span>-
                  <span data-i18n="Static_electricity">От сети</span>
                </div>
                <div className="price_tab">
                  <span data-i18n="Cost">Стоимость</span>
                  56 000тг
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
