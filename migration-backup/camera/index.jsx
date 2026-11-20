import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import Camera_Yandex from "./products/Camera_Yandex";
import Camera_street_Roximo from "./products/Camera_street_Roximo";
import Camera_rotary_Roximo from "./products/Camera_rotary_Roximo";
import Camera_Roximo from "./products/Camera_Roximo";
import Camera_E27_Roximo from "./products/Camera_E27_Roximo";
import Camera_4G_Roximo from "./products/Camera_4G_Roximo";
import Camera_street_rotary_Roximo from "./products/Camera_street_rotary_Roximo";
import Footer from "../footer";
import { useRouter } from "next/router";

export default function Camera() {
  const tabs = [
    {
      id: 1,
      title: "Камера видео наблюдения Yandex",
      translation: "Camera_Yandex",
    },
    {
      id: 2,
      title: "Умная камера уличная ROXIMO",
      translation: "Camera_street_Roximo",
    },
    {
      id: 3,
      title: "Умная поворотная камера",
      translation: "Camera_rotary_Roximo",
    },
    {
      id: 4,
      title: "Умная камера",
      translation: "Camera_Roximo",
    },
    {
      id: 5,
      title: "Умная камера с адаптером питания E27",
      translation: "Camera_E27_Roximo",
    },
    {
      id: 6,
      title: "Умная 4G камера уличная поворотная ROXIMO",
      translation: "Camera_4G_Roximo",
    },
    {
      id: 7,
      title: "Умная камера уличная поворотная ROXIMO",
      translation: "Camera_street_rotary_Roximo",
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
          {/* <!-- Контейнер для открытия устройств камера --> */}
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

            {/* <!-- Контейнер для содержания устройств камера --> */}
            <div className="wrapper_for_smart_home_items">
              <Camera_Yandex activeTab={activeTab} tabNumber={1} />
              <Camera_street_Roximo activeTab={activeTab} tabNumber={2} />
              <Camera_rotary_Roximo activeTab={activeTab} tabNumber={3} />
              <Camera_Roximo activeTab={activeTab} tabNumber={4} />
              <Camera_E27_Roximo activeTab={activeTab} tabNumber={5} />
              <Camera_4G_Roximo activeTab={activeTab} tabNumber={6} />
              <Camera_street_rotary_Roximo
                activeTab={activeTab}
                tabNumber={7}
              />
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
}
