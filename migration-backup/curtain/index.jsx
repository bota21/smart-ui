import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import Cornice_Yandex_3 from "./products/Cornice_Yandex_3";
import Cornice_Yandex_4 from "./products/Cornice_Yandex_4";
import Cornice_Tuya_4 from "./products/Cornice_Tuya_4";
import Cornice_Tuya_5 from "./products/Cornice_Tuya_5";
import Cornice_Tuya_6 from "./products/Cornice_Tuya_6";
import Cornice_Tuya_7 from "./products/Cornice_Tuya_7";
import Cornice_Aqara_175 from "./products/Cornice_Aqara_175";
import Cornice_Aqara_210 from "./products/Cornice_Aqara_210";
import Cornice_Aqara_250 from "./products/Cornice_Aqara_250";
import Controller_curtain_Aqara from "./products/Controller_curtain_Aqara";
import Driver_curtain_Aqara_track from "./products/Driver_curtain_Aqara_track";
import Driver_curtain_Aqara_rod from "./products/Driver_curtain_Aqara_rod";
import Motor_roller_Tuya from "./products/Motor_roller_Tuya";
import Motor_roller_Aqara from "./products/Motor_roller_Aqara";
import Cornice_roll_59 from "./products/Cornice_roll_59";
import Motor_rolling_Aqara from "./products/Motor_rolling_Aqara";
import Footer from "../footer";
import { useRouter } from "next/router";

export default function Sensor() {
  const tabs = [
    {
      id: 1,
      title: "Умный карниз для штор Яндекс, длина 1,8-3 м",
      translation: "Cornice_Yandex_3",
    },
    {
      id: 2,
      title: "Умный карниз для штор Яндекс, длина 2,4-4,5 м",
      translation: "Cornice_Yandex_4",
    },
    {
      id: 3,
      title: "Карниз умный Tuya 4м",
      translation: "Cornice_Tuya_4",
    },
    {
      id: 4,
      title: "Карниз умный Tuya 5м",
      translation: "Cornice_Tuya_5",
    },
    {
      id: 5,
      title: "Карниз умный Tuya 6м",
      translation: "Cornice_Tuya_6",
    },
    {
      id: 6,
      title: "Карниз умный Tuya 7м",
      translation: "Cornice_Tuya_7",
    },
    {
      id: 7,
      title: "Карниз Aqara 175см",
      translation: "Cornice_Aqara_175",
    },
    {
      id: 8,
      title: "Карниз Aqara 210см",
      translation: "Cornice_Aqara_210",
    },
    {
      id: 9,
      title: "Карниз Aqara 250см",
      translation: "Cornice_Aqara_250",
    },
    {
      id: 10,
      title: "Мотор для раздвижных штор Aqara Curtain Controller",
      translation: "Controller_curtain_Aqara",
    },
    {
      id: 11,
      title: "Мотор раздвижных штор Aqara Curtain Driver E1 (Track Version)",
      translation: "Driver_curtain_Aqara_track",
    },
    {
      id: 12,
      title: "Мотор раздвижных штор Aqara Curtain Driver E1 (Rod Version)",
      translation: "Driver_curtain_Aqara_rod",
    },
    {
      id: 13,
      title: "Мотор для роллштор Tuya",
      translation: "Motor_roller_Tuya",
    },
    {
      id: 14,
      title: "Мотор для роллштор Aqara",
      translation: "Motor_roller_Aqara",
    },
    {
      id: 15,
      title: "Карниз для роллштор 59см",
      translation: "Cornice_roll_59",
    },
    {
      id: 16,
      title: "Мотор для рулонных штор Aqara Curtain Rolling Shutter Motor",
      translation: "Motor_rolling_Aqara",
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
          {/* <!-- Контейнер для открытия устройств карнизы --> */}
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

            {/* <!-- Контейнер для содержания устройств карнизы --> */}
            <div className="wrapper_for_smart_home_items">
              <Cornice_Yandex_3 activeTab={activeTab} tabNumber={1} />
              <Cornice_Yandex_4 activeTab={activeTab} tabNumber={2} />
              <Cornice_Tuya_4 activeTab={activeTab} tabNumber={3} />
              <Cornice_Tuya_5 activeTab={activeTab} tabNumber={4} />
              <Cornice_Tuya_6 activeTab={activeTab} tabNumber={5} />
              <Cornice_Tuya_7 activeTab={activeTab} tabNumber={6} />
              <Cornice_Aqara_175 activeTab={activeTab} tabNumber={7} />
              <Cornice_Aqara_210 activeTab={activeTab} tabNumber={8} />
              <Cornice_Aqara_250 activeTab={activeTab} tabNumber={9} />
              <Controller_curtain_Aqara activeTab={activeTab} tabNumber={10} />
              <Driver_curtain_Aqara_track
                activeTab={activeTab}
                tabNumber={11}
              />
              <Driver_curtain_Aqara_rod activeTab={activeTab} tabNumber={12} />
              <Motor_roller_Tuya activeTab={activeTab} tabNumber={13} />
              <Motor_roller_Aqara activeTab={activeTab} tabNumber={14} />
              <Cornice_roll_59 activeTab={activeTab} tabNumber={15} />
              <Motor_rolling_Aqara activeTab={activeTab} tabNumber={16} />
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
}
