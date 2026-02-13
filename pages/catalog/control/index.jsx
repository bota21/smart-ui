import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Max_Station from "./Max_station";
import Duo_Station from "./Duo_station";
import Station_3 from "./Station_3";
import Midi_Station from "./Midi_station";
import Mini_3_Pro_Station from "./Mini_3_Pro_station";
import Mini_3_Station from "./Mini_3_station";
import Lite_2_Station from "./Lite_2_station";
import TV_140 from "./TV_140";
import TV_165 from "./TV_165";
import Remote_Yandex from "./Remote_Yandex";
import Hub_Yandex from "./Hub_Yandex";
import Hub_Yandex_sensor from "./Hub_Yandex_sensor";
import Hub_Aqara_M2 from "./Hub_Aqara_M2";
import Hub_Aqara_M3 from "./Hub_Aqara_M3";
import Hub_Roximo from "./Hub_Roximo";
import Hub_Tuya from "./Hub_Tuya";
import Module_Mini_3_Pro from "./Module_Mini_3_Pro";
import Footer from "../footer";

export default function Control() {
  const tabs = [
    {
      id: 1,
      title: "Яндекс станция Макс",
      translation: "Station_Alice_Max",
      package: "Station_Alice_Max",
    },
    {
      id: 2,
      title: "Яндекс станция Дуо Макс",
      translation: "Station_Alice_Duo",
      package: "Station_Alice_Duo",
    },
    {
      id: 3,
      title: "Яндекс Станция 3",
      translation: "Station_Alice_Lite_3",
      package: "Station_Alice_Lite_3",
    },
    {
      id: 4,
      title: "Яндекс станция Миди",
      translation: "Station_Alice_Midi",
      package: "Station_Alice_Midi",
    },
    {
      id: 5,
      title: "Яндекс станция Мини 3 Про",
      translation: "Station_Alice_Mini3Pro",
      package: "Station_Alice_Mini3Pro",
    },
    {
      id: 6,
      title: "Яндекс станция Мини 3",
      translation: "Station_Alice_Mini3",
      package: "Station_Alice_Mini3",
    },
    {
      id: 7,
      title: "Яндекс станция Лайт 2",
      translation: "Station_Alice_Lite2",
      package: "Station_Alice_Lite2",
    },
    {
      id: 8,
      title: "Телевизор Яндекс Про 140 см",
      translation: "Station_Alice_TV140",
      package: "Station_Alice_TV140",
    },
    {
      id: 9,
      title: "Телевизор Яндекс Бейсик 165 см",
      translation: "Station_Alice_TV165",
      package: "Station_Alice_TV165",
    },
    {
      id: 10,
      title: "Пульт ДУ Яндекс",
      translation: "Remote_Yandex",
      package: "Remote_Yandex",
    },
    {
      id: 11,
      title: "Яндекс центр управления",
      translation: "Hub_Yandex",
      package: "Hub_Yandex",
    },
    {
      id: 12,
      title: "Умный пульт с датчиком температуры и влажности Яндекс",
      translation: "Hub_Yandex_sensor",
      package: "Hub_Yandex_sensor",
    },
    {
      id: 13,
      title: "Центр умного дома Aqara Hub M2",
      translation: "Hub_Aqara_M2",
      package: "Hub_Aqara_M2",
    },
    {
      id: 14,
      title: "Центр умного дома Aqara Hub M3 EU",
      translation: "Hub_Aqara_M2",
      package: "Hub_Aqara_M2",
    },
    {
      id: 15,
      title: "Умный хаб ROXIMO",
      translation: "Hub_Roximo",
      package: "Hub_Roximo",
    },
    {
      id: 16,
      title: "Центр управления Tuya",
      translation: "Hub_Tuya",
      package: "Hub_Tuya",
    },
    {
      id: 17,
      title: "Климатический модуль Яндекса для Станции Мини 3 Про",
      translation: "Modul_mini_3_pro",
      package: "Modul_mini_3_pro",
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
          {/* <!-- Контейнер для открытия устройств управление --> */}
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

            {/* <!-- Контейнер для содержания устройств управление --> */}
            <div className="wrapper_for_smart_home_items">
              <Max_Station activeTab={activeTab} tabNumber={1} />
              <Duo_Station activeTab={activeTab} tabNumber={2} />
              <Station_3 activeTab={activeTab} tabNumber={3} />
              <Midi_Station activeTab={activeTab} tabNumber={4} />
              <Mini_3_Pro_Station activeTab={activeTab} tabNumber={5} />
              <Mini_3_Station activeTab={activeTab} tabNumber={6} />
              <Lite_2_Station activeTab={activeTab} tabNumber={7} />
              <TV_140 activeTab={activeTab} tabNumber={8} />
              <TV_165 activeTab={activeTab} tabNumber={9} />
              <Remote_Yandex activeTab={activeTab} tabNumber={10} />
              <Hub_Yandex activeTab={activeTab} tabNumber={11} />
              <Hub_Yandex_sensor activeTab={activeTab} tabNumber={12} />
              <Hub_Aqara_M2 activeTab={activeTab} tabNumber={13} />
              <Hub_Aqara_M3 activeTab={activeTab} tabNumber={14} />
              <Hub_Roximo activeTab={activeTab} tabNumber={15} />
              <Hub_Tuya activeTab={activeTab} tabNumber={16} />
              <Module_Mini_3_Pro activeTab={activeTab} tabNumber={17} />
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
