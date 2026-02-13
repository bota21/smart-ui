import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import LED_Strip_Yandex from "./products/LED_Strip_Yandex";
import Cable_LED_Strip_Yandex from "./products/Cable_LED_Strip_Yandex";
import LED_Strip_Kojimo from "./products/LED_Strip_Kojimo";
import LED_Strip_Roximo from "./products/LED_Strip_Roximo";
import Lamp_Aqara from "./products/Lamp_Aqara";
import Light_table_Yandex from "./products/Light_table_Yandex";
import Control_LED_Strip from "./products/Control_LED_Strip";
import Control_LED_Strip_RGB from "./products/Control_LED_Strip_RGB";
import Bulb_E14_4_5 from "./products/Bulb_E14_4_5";
import Bulb_E14_5_RGB from "./products/Bulb_E14_5_RGB";
import Bulb_E14_6_Yandex from "./products/Bulb_E14_6_Yandex";
import Bulb_E27_6_5 from "./products/Bulb_E27_6_5";
import Bulb_E27_7 from "./products/Bulb_E27_7";
import Bulb_E27_8_5 from "./products/Bulb_E27_8_5";
import Bulb_E27_9_Yandex_filamentous from "./products/Bulb_E27_9_Yandex_filamentous";
import Bulb_E27_9_Yandex from "./products/Bulb_E27_9_Yandex";
import Bulb_E27_9_Yandex_RGB from "./products/Bulb_E27_9_Yandex_RGB";
import Bulb_E27_10_RGB from "./products/Bulb_E27_10_RGB";
import Bulb_E27_11_Yandex_RGB from "./products/Bulb_E27_11_Yandex_RGB";
import Bulb_GU10_6_Yandex from "./products/Bulb_GU10_6_Yandex";
import Bulb_GX53_9_Yandex from "./products/Bulb_GX53_9_Yandex";
import Footer from "../footer";

export default function Lighting() {
  const tabs = [
    {
      id: 1,
      title: "Светодиодная лента Яндекс 3м",
      translation: "LED_Strip_Yandex",
      package: "LED_Strip_Yandex",
    },
    {
      id: 2,
      title: "Удлинитель для светодиодная лента Яндекс",
      translation: "Cable_LED_Strip_Yandex",
      package: "Cable_LED_Strip_Yandex",
    },
    {
      id: 3,
      title: "Светодиодная лента KOJIMA 5м",
      translation: "LED_Strip_Kojimo",
      package: "LED_Strip_Kojimo",
    },
    {
      id: 4,
      title: "Гирлянда ROXIMO",
      translation: "LED_Strip_Roximo",
      package: "LED_Strip_Roximo",
    },
    {
      id: 5,
      title: "Cветильник потолочный Aqara Ceiling Light T1M",
      translation: "Lamp_Aqara",
      package: "Lamp_Aqara",
    },
    {
      id: 6,
      title: "Умная эмби лампа Яндекс",
      translation: "Light_table_Yandex",
      package: "Light_table_Yandex",
    },
    {
      id: 7,
      title: "Диммер для светодиодной ленты 12,24V 15А",
      translation: "Control_LED_Strip",
      package: "Control_LED_Strip",
    },
    {
      id: 8,
      title: "Контроллер RGB для LED лент 12В, 24В",
      translation: "Control_LED_Strip_RGB",
      package: "Control_LED_Strip_RGB",
    },
    {
      id: 9,
      title: "Лампочка Е14 4,5W Gauss филаментная теплый белый",
      translation: "Bulb_E14_4_5",
      package: "Bulb_E14_4_5",
    },
    {
      id: 10,
      title: "Лампочка Е14 5W Gauss RGB",
      translation: "Bulb_E14_5_RGB",
      package: "Bulb_E14_5_RGB",
    },
    {
      id: 11,
      title: "Лампочка Е14 6W 520 Лм Яндекс RGB",
      translation: "Bulb_E14_6_Yandex",
      package: "Bulb_E14_6_Yandex",
    },
    {
      id: 12,
      title: "Лампочка E27 6.5W Gauss филаментная, желтый",
      translation: "Bulb_E27_6_5",
      package: "Bulb_E27_6_5",
    },
    {
      id: 13,
      title: "Лампочка E27 7W Gauss теплый белый",
      translation: "Bulb_E27_7",
      package: "Bulb_E27_7",
    },
    {
      id: 14,
      title: "Лампочка E27 8.5W Gauss RGB",
      translation: "Bulb_E27_8_5",
      package: "Bulb_E27_8_5",
    },
    {
      id: 15,
      title: "Лампочка Е27 9W Яндекс филаментная белый свет",
      translation: "Bulb_E27_9_Yandex_filamentous",
      package: "Bulb_E27_9_Yandex_filamentous",
    },
    {
      id: 16,
      title: "Лампочка Е27 9W Яндекс YNDX-00551 белая",
      translation: "Bulb_E27_9_Yandex",
      package: "Bulb_E27_9_Yandex",
    },
    {
      id: 17,
      title: "Лампочка Е27 9W Яндекс RGB",
      translation: "Bulb_E27_9_Yandex_RGB",
      package: "Bulb_E27_9_Yandex_RGB",
    },
    {
      id: 18,
      title: "Лампочка E27 10W Gauss RGB",
      translation: "Bulb_E27_10_RGB",
      package: "Bulb_E27_10_RGB",
    },
    {
      id: 19,
      title: "Лампочка Е27 11W Яндекс RGB",
      translation: "Bulb_E27_11_Yandex_RGB",
      package: "Bulb_E27_11_Yandex_RGB",
    },
    {
      id: 20,
      title: "Лампочка GU10 6W 520 Лм Яндекс RGB",
      translation: "Bulb_GU10_6_Yandex",
      package: "Bulb_GU10_6_Yandex",
    },
    {
      id: 21,
      title: "Лампочка GX53 9W 806 Лм Яндекс RGB",
      translation: "Bulb_GX53_9_Yandex",
      package: "Bulb_GX53_9_Yandex",
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
          {/* <!-- Контейнер для открытия устройств освещение --> */}
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

            {/* <!-- Контейнер для содержания устройств освещение --> */}
            <div className="wrapper_for_smart_home_items">
              <LED_Strip_Yandex activeTab={activeTab} tabNumber={1} />
              <Cable_LED_Strip_Yandex activeTab={activeTab} tabNumber={2} />
              <LED_Strip_Kojimo activeTab={activeTab} tabNumber={3} />
              <LED_Strip_Roximo activeTab={activeTab} tabNumber={4} />
              <Lamp_Aqara activeTab={activeTab} tabNumber={5} />
              <Light_table_Yandex activeTab={activeTab} tabNumber={6} />
              <Control_LED_Strip activeTab={activeTab} tabNumber={7} />
              <Control_LED_Strip_RGB activeTab={activeTab} tabNumber={8} />
              <Bulb_E14_4_5 activeTab={activeTab} tabNumber={9} />
              <Bulb_E14_5_RGB activeTab={activeTab} tabNumber={10} />
              <Bulb_E14_6_Yandex activeTab={activeTab} tabNumber={11} />
              <Bulb_E27_6_5 activeTab={activeTab} tabNumber={12} />
              <Bulb_E27_7 activeTab={activeTab} tabNumber={13} />
              <Bulb_E27_8_5 activeTab={activeTab} tabNumber={14} />
              <Bulb_E27_9_Yandex_filamentous
                activeTab={activeTab}
                tabNumber={15}
              />
              <Bulb_E27_9_Yandex activeTab={activeTab} tabNumber={16} />
              <Bulb_E27_9_Yandex_RGB activeTab={activeTab} tabNumber={17} />
              <Bulb_E27_10_RGB activeTab={activeTab} tabNumber={18} />
              <Bulb_E27_11_Yandex_RGB activeTab={activeTab} tabNumber={19} />
              <Bulb_GU10_6_Yandex activeTab={activeTab} tabNumber={20} />
              <Bulb_GX53_9_Yandex activeTab={activeTab} tabNumber={21} />
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
}
