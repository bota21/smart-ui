import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import Footer from "../footer";
import Sensor_Vibration from "./products/Sensor_vibration";
import Sensor_Open from "./products/Sensor_open";
import Sensor_Open_Yandex from "./products/Sensor_open_Yandex";
import Sensor_Light_Aqara from "./products/Sensor_light_Aqara";
import Sensor_human_Presence_Aqara_FP1 from "./products/Sensor_human_presence_Aqara_FP1";
import Sensor_human_Presence_Aqara_FP2 from "./products/Sensor_human_presence_Aqara_FP2";
import Sensor_Move_Aqara from "./products/Sensor_move_Aqara";
import Sensor_Move_Yandex from "./products/Sensor_move_Yandex";
import Sensor_human_Presence_Roximo from "./products/Sensor_human_presence_Roximo";
import Sensor_Move_Sber from "./products/Sensor_move_Sber";
import Sensor_Move_Ewelink from "./products/Sensor_move_Ewelink";
import Sensor_Temperature_Yandex from "./products/Sensor_temperature_Yandex";
import Sensor_Temperature_Monitor from "./products/Sensor_temperature_monitor";
import Sensor_Temperature_Kojimo from "./products/Sensor_temperature_Kojimo";
import Sensor_Temperature_Sonoff from "./products/Sensor_temperature_Sonoff";
import Sensor_Air_Aqara from "./products/Sensor_air_Aqara";
import Sensor_Air_QingPing from "./products/Sensor_air_QingPing";
import Sensor_Water_Yandex from "./products/Sensor_water_Yandex";
import Sensor_Water_Sonoff from "./products/Sensor_water_Sonoff";
import Sensor_Water_Aqara from "./products/Sensor_water_Aqara";
import Sensor_Gas_Aqara from "./products/Sensor_gas_Aqara";
import Sensor_Gas_Smartlife from "./products/Sensor_gas_Smartlife";
import Sensor_Gas_Metan from "./products/Sensor_gas_metan";
import Sensor_Gas_Propan from "./products/Sensor_gas_propan";
import Sensor_Smoke_Smartlife from "./products/Sensor_smoke_Smartlife";
import Sensor_Smoke_Aqara from "./products/Sensor_smoke_Aqara";
import Sensor_Smoke_Tuya from "./products/Sensor_smoke_Tuya";
import Siren from "./products/Siren";
import { useRouter } from "next/router";

export default function Sensor() {
  const tabs = [
    {
      id: 1,
      title: "Датчик вибрации",
      translation: "Sensor_vibration",
    },
    {
      id: 2,
      title: "Датчик открытия дверей",
      translation: "Sensor_open",
    },
    {
      id: 3,
      title: "Датчик открытия дверей Яндекс",
      translation: "Sensor_open_Yandex",
    },
    {
      id: 4,
      title: "Датчик освещённости Aqara",
      translation: "Sensor_light_Aqara",
    },
    {
      id: 5,
      title: "Датчик присутствия Aqara Human Presence Sensor FP1",
      translation: "Sensor_human_presence_Aqara_FP1",
    },
    {
      id: 6,
      title: "Датчик присутствия Aqara Presence Sensor FP2",
      translation: "Sensor_human_presence_Aqara_FP2",
    },
    {
      id: 7,
      title: "Датчик присутствия и освещенности ROXIMO",
      translation: "Sensor_human_presence_Roximo",
    },
    {
      id: 8,
      title: "Датчик движения Яндекс",
      translation: "Sensor_move_Yandex",
    },
    {
      id: 9,
      title: "Датчик движения Aqara Motion Sensor",
      translation: "Sensor_move_Aqara",
    },
    {
      id: 10,
      title: "Датчик движения SBER",
      translation: "Sensor_move_Sber",
    },
    {
      id: 11,
      title: "Датчик движения eWeLink",
      translation: "Sensor_move_Ewelink",
    },
    {
      id: 12,
      title: "Датчик температуры и влажности Яндекс",
      translation: "Sensor_temperature_Yandex",
    },
    {
      id: 13,
      title: "Датчик температуры и влажности (монитор)",
      translation: "Sensor_temperature_monitor",
    },
    {
      id: 14,
      title: "Датчик температуры и влажности Kojimo",
      translation: "Sensor_temperature_Kojimo",
    },
    {
      id: 15,
      title: "Датчик температуры и влажности Sonoff",
      translation: "Sensor_temperature_Sonoff",
    },
    {
      id: 16,
      title: "Датчик качества воздуха Aqara TVOC Air Quality Monitor",
      translation: "Sensor_air_Aqara",
    },
    {
      id: 17,
      title: "Монитор качества воздуха QingPing Air Monitor Lite",
      translation: "Sensor_air_QingPing",
    },
    {
      id: 18,
      title: "Датчик протечки воды Яндекс",
      translation: "Sensor_water_Yandex",
    },
    {
      id: 19,
      title: "Датчик протечки воды Sonoff",
      translation: "Sensor_water_Sonoff",
    },
    {
      id: 20,
      title: "Датчик протечки Aqara Water Leak Sensor",
      translation: "Sensor_water_Aqara",
    },
    {
      id: 21,
      title: "Детектор газа Aqara",
      translation: "Sensor_gas_Aqara",
    },
    {
      id: 22,
      title: "Детектор газа (CH4) SmartLife",
      translation: "Sensor_gas_Smartlife",
    },
    {
      id: 23,
      title: "Датчик газа (метан)",
      translation: "Sensor_gas_metan",
    },
    {
      id: 24,
      title: "Датчик газа (пропан)",
      translation: "Sensor_gas_propan",
    },
    {
      id: 25,
      title: "Датчик дыма SmartLife",
      translation: "Sensor_smoke_Smartlife",
    },
    {
      id: 26,
      title: "Датчик дыма Aqara",
      translation: "Sensor_smoke_Aqara",
    },
    {
      id: 27,
      title: "Датчик дыма Tuya",
      translation: "Sensor_smoke_Tuya",
    },
    {
      id: 28,
      title: "Сирена для умного дома",
      translation: "Siren",
    },
  ];

  const router = useRouter();

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

  useEffect(() => {
    if (!router.isReady) return;

    const product = router.query.product;

    const found = tabs.find((p) => p.translation === product);

    if (found) {
      setActiveTab(found.id);
    }
  }, [router.isReady]);

  return (
    <>
      {" "}
      <section className="content">
        <div className="wrapper_for_smart_home_tabs">
          {/* <!-- Контейнер для открытия устройств датчики --> */}
          <div className="wrapper_for_smart_home_content">
            <div className="tabs_for_smart_home_items">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tabs_for_smart_home_item ${activeTab === tab.id ? "active" : ""}`}
                  id={tab.package}
                  data-i18n={tab.translation}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.title}
                </div>
              ))}
            </div>

            {/* <!-- Контейнер для содержания устройств датчики --> */}
            <div className="wrapper_for_smart_home_items">
              <Sensor_Vibration activeTab={activeTab} tabNumber={1} />
              <Sensor_Open activeTab={activeTab} tabNumber={2} />
              <Sensor_Open_Yandex activeTab={activeTab} tabNumber={3} />
              <Sensor_Light_Aqara activeTab={activeTab} tabNumber={4} />
              <Sensor_human_Presence_Aqara_FP1
                activeTab={activeTab}
                tabNumber={5}
              />
              <Sensor_human_Presence_Aqara_FP2
                activeTab={activeTab}
                tabNumber={6}
              />
              <Sensor_human_Presence_Roximo
                activeTab={activeTab}
                tabNumber={7}
              />
              <Sensor_Move_Yandex activeTab={activeTab} tabNumber={8} />
              <Sensor_Move_Aqara activeTab={activeTab} tabNumber={9} />
              <Sensor_Move_Sber activeTab={activeTab} tabNumber={10} />
              <Sensor_Move_Ewelink activeTab={activeTab} tabNumber={11} />
              <Sensor_Temperature_Yandex activeTab={activeTab} tabNumber={12} />
              <Sensor_Temperature_Monitor
                activeTab={activeTab}
                tabNumber={13}
              />
              <Sensor_Temperature_Kojimo activeTab={activeTab} tabNumber={14} />
              <Sensor_Temperature_Sonoff activeTab={activeTab} tabNumber={15} />
              <Sensor_Air_Aqara activeTab={activeTab} tabNumber={16} />
              <Sensor_Air_QingPing activeTab={activeTab} tabNumber={17} />
              <Sensor_Water_Yandex activeTab={activeTab} tabNumber={18} />
              <Sensor_Water_Sonoff activeTab={activeTab} tabNumber={19} />
              <Sensor_Water_Aqara activeTab={activeTab} tabNumber={20} />
              <Sensor_Gas_Aqara activeTab={activeTab} tabNumber={21} />
              <Sensor_Gas_Smartlife activeTab={activeTab} tabNumber={22} />
              <Sensor_Gas_Metan activeTab={activeTab} tabNumber={23} />
              <Sensor_Gas_Propan activeTab={activeTab} tabNumber={24} />
              <Sensor_Smoke_Smartlife activeTab={activeTab} tabNumber={25} />
              <Sensor_Smoke_Aqara activeTab={activeTab} tabNumber={26} />
              <Sensor_Smoke_Tuya activeTab={activeTab} tabNumber={27} />
              <Siren activeTab={activeTab} tabNumber={28} />
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
}
