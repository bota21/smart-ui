import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

export default function Home() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
  }, [lang, t]);

  return (
    <div id="main_content" className="main_content">
      <section className="content">
        <div className="wrapper_group">
          <div className="group_header" data-i18n="Security">
            Безопасность
          </div>
          <div className="group_blocks_wrapper">
            <div className="group_block">
              <div className="group_block_header" data-i18n="Home_security">
                Дом под охраной
              </div>
              <div className="group_block_content">
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/control",
                    query: { product: "Station_Alice_Duo" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_station_Alice">Колонка Алиса</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/camera",
                    query: { product: "camera_street" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Camera">Камера</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sensor",
                    query: { product: "Sensor_open_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Sensor_open">Датчик открытия</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sensor",
                    query: { product: "Sensor_move_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Sensor_move">Датчик движения</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sensor",
                    query: { product: "sensor_vibration" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Sensor_vibration">Датчик вибрации</span>
                </Link>
              </div>
            </div>
            <div className="group_block">
              <div className="group_block_header" data-i18n="Anti_leakage">
                Антипротечка
              </div>
              <div className="group_block_content">
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/control",
                    query: { product: "Station_Alice_Mini3Pro" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_station_Alice">Колонка Алиса</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sensor",
                    query: { product: "sensor_water" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Sensor_anti_leakage">
                    Датчик протечки воды
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/plumbing",
                    query: { product: "Close_water" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Close_water">Клапан перекрытия</span>
                </Link>
              </div>
            </div>
            <div className="group_block">
              <div className="group_block_header" data-i18n="Anti_fire">
                Антипожар
              </div>
              <div className="group_block_content">
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/control",
                    query: { product: "Station_Alice_Midi" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_station_Alice">Колонка Алиса</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sensor",
                    query: { product: "Sensor_gas_Aqara" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Sensor_gas">Датчик утечки газа</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sensor",
                    query: { product: "Sensor_smoke_Aqara" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Sensor_smoke">Датчик дыма</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/plumbing",
                    query: { product: "Close_water" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Close_water">Клапан перекрытия</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper_group">
          <div className="group_header" data-i18n="Climate_and_comfort">
            Климат и комфорт
          </div>
          <div className="group_blocks_wrapper">
            <div className="group_block">
              <div className="group_block_header" data-i18n="Cozy_climate">
                Уютный климат
              </div>
              <div className="group_block_content">
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/control",
                    query: { product: "Station_Alice_Midi" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_station_Alice">Колонка Алиса</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/control",
                    query: { product: "Remote_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Remote_Yandex">Пульт ДУ Яндекс</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sensor",
                    query: { product: "Sensor_temperature_monitor" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Sensor_temperature">
                    Датчик температуры и влажности
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/plumbing",
                    query: { product: "Control_floor_Celtic_white" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Control_floor">
                    Терморегулятор для теплого пола
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/plumbing",
                    query: { product: "Control_heater_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Control_heater">
                    Терморегулятор для радиатора
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/appliances",
                    query: { product: "Humidifier_Xiaomi_4_5" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Humidifier">Увлажнитель воздуха</span>
                </Link>
              </div>
            </div>
            <div className="group_block">
              <div className="group_block_header" data-i18n="Clean_air">
                Чистый воздух
              </div>
              <div className="group_block_content">
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/control",
                    query: { product: "Station_Alice_Max" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_station_Alice">Колонка Алиса</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/control",
                    query: { product: "Remote_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Remote_Yandex">Пульт ДУ Яндекс</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sensor",
                    query: { product: "Sensor_air_Aqara" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Sensor_air">Датчик качества воздуха</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/appliances",
                    query: { product: "Air_purifier_Rawmid" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Air_purifier">Очиститель воздуха</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper_group">
          <div className="group_header" data-i18n="Light_and_atmosphere">
            Свет и атмосфера
          </div>
          <div className="group_blocks_wrapper">
            <div className="group_block">
              <div className="group_block_header" data-i18n="Smart_light">
                Умный свет
              </div>
              <div className="group_block_content">
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/control",
                    query: { product: "Station_Alice_Mini3Pro" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_station_Alice">Колонка Алиса</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sockets&switches",
                    query: { product: "Switch_Yandex_1x" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Switch">Выключатель</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/lighting",
                    query: { product: "Bulb_E27_9_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_Light_bulb">Умная лампочка</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sensor",
                    query: { product: "Sensor_move_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Sensor_move">Датчик движения</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sensor",
                    query: { product: "Sensor_open_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Sensor_open">Датчик открытия</span>
                </Link>
              </div>
            </div>
            <div className="group_block">
              <div className="group_block_header" data-i18n="Home_Cinema">
                Домашний кинотеатр
              </div>
              <div className="group_block_content">
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/control",
                    query: { product: "Station_Alice_Max" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_station_Alice">Колонка Алиса</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/control",
                    query: { product: "Remote_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Remote_Yandex">Пульт ДУ Яндекс</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/lighting",
                    query: { product: "LED_Strip_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="LED_Strip">Светодиодная лента</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/lighting",
                    query: { product: "Bulb_E27_11_Yandex_RGB" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_Light_bulb_RGB">
                    Умная лампочка RGB
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper_group">
          <div className="group_header" data-i18n="For_family">
            Для семьи
          </div>
          <div className="group_blocks_wrapper">
            <div className="group_block">
              <div
                className="group_block_header"
                data-i18n="Taking_care_of_children"
              >
                Забота о детях
              </div>
              <div className="group_block_content">
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/control",
                    query: { product: "Station_Alice_Mini3" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_station_Alice">Колонка Алиса</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/camera",
                    query: { product: "Camera_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Camera">Камера</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/lighting",
                    query: { product: "Light_table_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Night_light">Ночник</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sockets&switches",
                    query: { product: "Slug_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_plug_wireless">Розетка накладная</span>
                </Link>
              </div>
            </div>
            <div className="group_block">
              <div
                className="group_block_header"
                data-i18n="Caring_for_loved_ones"
              >
                Забота о близких (для пожилых родителей)
              </div>
              <div className="group_block_content">
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/control",
                    query: { product: "Station_Alice_Mini3Pro" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_station_Alice">Колонка Алиса</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sockets&switches",
                    query: { product: "Button_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_button_wireless">
                    Беспроводная кнопка (SOS)
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sensor",
                    query: { product: "Sensor_move_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Sensor_move">Датчик движения</span>
                </Link>
              </div>
            </div>
            <div className="group_block">
              <div className="group_block_header" data-i18n="For_pets">
                Для питомцев
              </div>
              <div className="group_block_content">
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/control",
                    query: { product: "Station_Alice_Midi" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_station_Alice">Колонка Алиса</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/camera",
                    query: { product: "Camera_Yandex" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Camera">Камера</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/appliances",
                    query: { product: "Autoclave_Xiaomi" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_feeder">Умная кормушка</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/appliances",
                    query: { product: "Water_dispenser_Xiaomi" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Smart_drinking_bowl">Умная поилка</span>
                </Link>
                <Link
                  target="_blank"
                  href={{
                    pathname: "/catalog/sensor",
                    query: { product: "Sensor_human_presence_Aqara_FP2" },
                  }}
                  className="group_block_content_text"
                >
                  <span className="group_block_content_dot"></span>
                  <span data-i18n="Sensor_presence">Датчик присутствия</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
