import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import Smart_door_Xiaomi from "./products/Smart_door_Xiaomi";
import Smart_door_Xiaomi_E30 from "./products/Smart_door_Xiaomi_E30";
import Smart_door_Aqara_A100 from "./products/Smart_door_Aqara_A100";
import Smart_door_Aqara_D100 from "./products/Smart_door_Aqara_D100";
import Smart_door_Aqara_N100 from "./products/Smart_door_Aqara_N100";
import Footer from "../footer";
import { useRouter } from "next/router";

export default function Sensor() {
  const tabs = [
    {
      id: 1,
      title: "Замок Xiaomi электро механический XMZNMST10LK",
      translation: "Smart_Door_Xiaomi",
    },
    {
      id: 2,
      title: "Умный дверной замок Xiaomi Smart Door Lock E30 (XMZNMST11LK) CN",
      translation: "Smart_Door_Xiaomi_E30",
    },
    {
      id: 3,
      title: "Замок Aqara A100 ZNMMS02ES",
      translation: "Smart_Door_Aqara_A100",
    },
    {
      id: 4,
      title: "Замок Aqara электро механический Door Lock D100",
      translation: "Smart_Door_Aqara_D100",
    },
    {
      id: 5,
      title: "Замок Aqara электро механический Door Lock N100",
      translation: "Smart_Door_Aqara_N100",
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
          {/* <!-- Контейнер для открытия устройств умные замки --> */}
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

            {/* <!-- Контейнер для содержания устройств умные замки --> */}
            <div className="wrapper_for_smart_home_items">
              <Smart_door_Xiaomi activeTab={activeTab} tabNumber={1} />
              <Smart_door_Xiaomi_E30 activeTab={activeTab} tabNumber={2} />
              <Smart_door_Aqara_A100 activeTab={activeTab} tabNumber={3} />
              <Smart_door_Aqara_D100 activeTab={activeTab} tabNumber={4} />
              <Smart_door_Aqara_N100 activeTab={activeTab} tabNumber={5} />
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
}
