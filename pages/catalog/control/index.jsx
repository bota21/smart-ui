import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Max_Station from "./products/Max_station";
import Duo_Station from "./products/Duo_station";
import Station_3 from "./products/Station_3";
import Midi_Station from "./products/Midi_station";
import Mini_3_Pro_Station from "./products/Mini_3_Pro_station";
import Mini_3_Station from "./products/Mini_3_station";
import Lite_2_Station from "./products/Lite_2_station";
import TV_140 from "./products/TV_140";
import TV_165 from "./products/TV_165";
import Remote_Yandex from "./products/Remote_Yandex";
import Hub_Yandex from "./products/Hub_Yandex";
import Hub_Yandex_sensor from "./products/Hub_Yandex_sensor";
import Hub_Aqara_M2 from "./products/Hub_Aqara_M2";
import Hub_Aqara_M3 from "./products/Hub_Aqara_M3";
import Hub_Roximo from "./products/Hub_Roximo";
import Hub_Tuya from "./products/Hub_Tuya";
import Module_Mini_3_Pro from "./products/Module_Mini_3_Pro";
import Footer from "../footer";
import { useRouter } from "next/router";

export default function Control() {
  const tabs = [
    {
      id: 1,
      title: "Яндекс станция Макс",
      translation: "Station_Alice_Max",
    },
    {
      id: 2,
      title: "Яндекс станция Дуо Макс",
      translation: "Station_Alice_Duo",
    },
    {
      id: 3,
      title: "Яндекс Станция 3",
      translation: "Station_Alice_Lite_3",
    },
    {
      id: 4,
      title: "Яндекс станция Миди",
      translation: "Station_Alice_Midi",
    },
    {
      id: 5,
      title: "Яндекс станция Мини 3 Про",
      translation: "Station_Alice_Mini3Pro",
    },
    {
      id: 6,
      title: "Яндекс станция Мини 3",
      translation: "Station_Alice_Mini3",
    },
    {
      id: 7,
      title: "Яндекс станция Лайт 2",
      translation: "Station_Alice_Lite2",
    },
    {
      id: 8,
      title: "Телевизор Яндекс Про 140 см",
      translation: "Station_Alice_TV140",
    },
    {
      id: 9,
      title: "Телевизор Яндекс Бейсик 165 см",
      translation: "Station_Alice_TV165",
    },
    {
      id: 10,
      title: "Пульт ДУ Яндекс",
      translation: "Remote_Yandex",
    },
    {
      id: 11,
      title: "Яндекс центр управления",
      translation: "Hub_Yandex",
    },
    {
      id: 12,
      title: "Умный пульт с датчиком температуры и влажности Яндекс",
      translation: "Hub_Yandex_sensor",
    },
    {
      id: 13,
      title: "Центр умного дома Aqara Hub M2",
      translation: "Hub_Aqara_M2",
    },
    {
      id: 14,
      title: "Центр умного дома Aqara Hub M3 EU",
      translation: "Hub_Aqara_M2",
    },
    {
      id: 15,
      title: "Умный хаб ROXIMO",
      translation: "Hub_Roximo",
    },
    {
      id: 16,
      title: "Центр управления Tuya",
      translation: "Hub_Tuya",
    },
    {
      id: 17,
      title: "Климатический модуль Яндекса для Станции Мини 3 Про",
      translation: "Modul_mini_3_pro",
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
      <section className="content">
        <div className="wrapper_for_smart_home_tabs">
          {/* <!-- Контейнер для открытия устройств управление --> */}
          <div className="wrapper_for_smart_home_content">
            <div className="tabs_for_smart_home_items">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tabs_for_smart_home_item ${activeTab === tab.id ? "active" : ""}`}
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
