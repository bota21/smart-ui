import { useEffect, useState } from "react";
import Close_water_Aqara from "./products/Close_water_Aqara";
import Close_water from "./products/Close_water";
import Smart_ball_valve_DN25 from "./products/Smart_ball_valve_DN25";
import Smart_ball_valve_DN20 from "./products/Smart_ball_valve_DN20";
import Control_heater_Yandex from "./products/Control_heater_Yandex";
import Control_heater_Aqara from "./products/Control_heater_Aqara";
import Control_floor_Electsmart_black from "./products/Control_floor_Electsmart_black";
import Control_floor_Welrok_white from "./products/Control_floor_Welrok_white";
import Control_floor_Celtic_white from "./products/Control_floor_Celtic_white";
import Control_floor_Celtic_black from "./products/Control_floor_Celtic_black";
import Control_boiler_Bugatti from "./products/Control_boiler_Bugatti";
import Control_boiler_Beok_black from "./products/Control_boiler_Beok_black";
import Control_boiler_Beok_white from "./products/Control_boiler_Beok_white";
import Boiler_THERMEX_Sonne_grey from "./products/Boiler_THERMEX_Sonne_grey";
import Boiler_THERMEX_Cometa from "./products/Boiler_THERMEX_Cometa";
import Boiler_THERMEX_Boss from "./products/Boiler_THERMEX_Boss";
import Boiler_THERMEX_Sonne_white from "./products/Boiler_THERMEX_Sonne_white";
import Heating_thermostat_ZONT from "./products/Heating_thermostat_ZONT";
import Footer from "../footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Plumbing() {
  const tabs = [
    {
      id: 1,
      title: "Привод для перекрытия воды Aqara",
      translation: "Close_water_Aqara",
      package: "Close_water_Aqara",
    },
    {
      id: 2,
      title: "Привод для перекрытия воды",
      translation: "Close_water",
      package: "Close_water",
    },
    {
      id: 3,
      title: "Умный шаровый клапан DN25 1",
      translation: "Smart_ball_valve_DN25",
      package: "Smart_ball_valve_DN25",
    },
    {
      id: 4,
      title: 'Умный шаровый клапан DN20 3/4"',
      translation: "Smart_ball_valve_DN20",
      package: "Smart_ball_valve_DN20",
    },
    {
      id: 5,
      title: "Радиаторный терморегулятор Яндекс",
      translation: "Control_heater_Yandex",
      package: "Control_heater_Yandex",
    },
    {
      id: 6,
      title: "Радиаторный термо-регулятор Aqara",
      translation: "Control_heater_Aqara",
      package: "Control_heater_Aqara",
    },
    {
      id: 7,
      title: "Умный термо-регулятор Electsmart черный",
      translation: "Control_floor_Electsmart_black",
      package: "Control_floor_Electsmart_black",
    },
    {
      id: 8,
      title: "Умный термо-регулятор Welrok светлый",
      translation: "Control_floor_Welrok_white",
      package: "Control_floor_Welrok_white",
    },
    {
      id: 9,
      title: "Умный термо-регулятор Celtic светлый",
      translation: "Control_floor_Celtic_white",
      package: "Control_floor_Celtic_white",
    },
    {
      id: 10,
      title: "Умный термо-регулятор Celtic черный",
      translation: "Control_floor_Celtic_black",
      package: "Control_floor_Celtic_black",
    },
    {
      id: 11,
      title: "Модуль управления котлом Wi-Fi Federica Bugatti",
      translation: "Control_boiler_Bugatti",
      package: "Control_boiler_Bugatti",
    },
    {
      id: 12,
      title: "Термо-регулятор Beok для газового и электрического котла черный",
      translation: "Control_boiler_Beok_black",
      package: "Control_boiler_Beok_black",
    },
    {
      id: 13,
      title: "Термо-регулятор Beok для газового и электрического котла белый",
      translation: "Control_boiler_Beok_white",
      package: "Control_boiler_Beok_white",
    },
    {
      id: 14,
      title: "Электрический настенный котел THERMEX Sonne 12 Wi-Fi Grey",
      translation: "Boiler_THERMEX_Sonne_grey",
      package: "Boiler_THERMEX_Sonne_grey",
    },
    {
      id: 15,
      title: "Электрический двухконтурный котел THERMEX Cometa 12-24 Wi-Fi",
      translation: "Boiler_THERMEX_Cometa",
      package: "Boiler_THERMEX_Cometa",
    },
    {
      id: 16,
      title: "Электрический настенный котел THERMEX Boss 12 Wi-Fi White",
      translation: "Boiler_THERMEX_Boss",
      package: "Boiler_THERMEX_Boss",
    },
    {
      id: 17,
      title: "Электрический настенный котел THERMEX Sonne 12 Wi-Fi White",
      translation: "Boiler_THERMEX_Sonne_white",
      package: "Boiler_THERMEX_Sonne_white",
    },
    {
      id: 18,
      title: "Отопительный термостат ZONT GSM Wi-Fi H-1V NEW для котлов",
      translation: "Heating_thermostat_ZONT",
      package: "Heating_thermostat_ZONT",
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
              {tabs.map((tab) => (
                <div
                  className={`tabs_for_smart_home_item ${activeTab === tab.id ? "active" : ""}`}
                  key={tab.id}
                  id={tab.package}
                  data-i18n={tab.translation}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.title}
                </div>
              ))}
            </div>

            {/* <!-- Контейнер для содержания устройств сантехника --> */}
            <div className="wrapper_for_smart_home_items">
              <Close_water_Aqara activeTab={activeTab} tabNumber={1} />
              <Close_water activeTab={activeTab} tabNumber={2} />
              <Smart_ball_valve_DN25 activeTab={activeTab} tabNumber={3} />
              <Smart_ball_valve_DN20 activeTab={activeTab} tabNumber={4} />
              <Control_heater_Yandex activeTab={activeTab} tabNumber={5} />
              <Control_heater_Aqara activeTab={activeTab} tabNumber={6} />
              <Control_floor_Electsmart_black
                activeTab={activeTab}
                tabNumber={7}
              />
              <Control_floor_Welrok_white activeTab={activeTab} tabNumber={8} />
              <Control_floor_Celtic_white activeTab={activeTab} tabNumber={9} />
              <Control_floor_Celtic_black
                activeTab={activeTab}
                tabNumber={10}
              />
              <Control_boiler_Bugatti activeTab={activeTab} tabNumber={11} />
              <Control_boiler_Beok_black activeTab={activeTab} tabNumber={12} />
              <Control_boiler_Beok_white activeTab={activeTab} tabNumber={13} />
              <Boiler_THERMEX_Sonne_grey activeTab={activeTab} tabNumber={14} />
              <Boiler_THERMEX_Cometa activeTab={activeTab} tabNumber={15} />
              <Boiler_THERMEX_Boss activeTab={activeTab} tabNumber={16} />
              <Boiler_THERMEX_Sonne_white
                activeTab={activeTab}
                tabNumber={17}
              />
              <Heating_thermostat_ZONT activeTab={activeTab} tabNumber={18} />
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
}
