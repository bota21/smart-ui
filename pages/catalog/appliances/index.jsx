import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import Humidifier_Xiaomi_4_5 from "./products/Humidifier_Xiaomi_4_5";
import Humidifier_Xiaomi_5 from "./products/Humidifier_Xiaomi_5";
import Humidifier_Xiaomi_4 from "./products/Humidifier_Xiaomi_4";
import Humidifier_Xiaomi_3 from "./products/Humidifier_Xiaomi_3";
import Humidifier_Aminix from "./products/Humidifier_Aminix";
import Air_purifier_Xiaomi from "./products/Air_purifier_Xiaomi";
import Air_purifier_5_Xiaomi from "./products/Air_purifier_5_Xiaomi";
import Air_purifier_Rawmid from "./products/Air_purifier_Rawmid";
import Conditioner_Samsung_AI_25 from "./products/Conditioner_Samsung_AI_25";
import Conditioner_Samsung_AI_35 from "./products/Conditioner_Samsung_AI_35";
import Conditioner_Samsung_25 from "./products/Conditioner_Samsung_25";
import Conditioner_Samsung_35 from "./products/Conditioner_Samsung_35";
import Conditioner_Haier_20 from "./products/Conditioner_Haier_20";
import Conditioner_Haier_35 from "./products/Conditioner_Haier_35";
import Conditioner_Haier_50 from "./products/Conditioner_Haier_50";
import Conditioner_Haier_70 from "./products/Conditioner_Haier_70";
import Conditioner_LG_27 from "./products/Conditioner_LG_27";
import Conditioner_LG_36 from "./products/Conditioner_LG_36";
import Robot_cleaner_DREAME_L40 from "./products/Robot_cleaner_DREAME_L40";
import Robot_cleaner_DREAME_D20 from "./products/Robot_cleaner_DREAME_D20";
import Robot_cleaner_DREAME_X50 from "./products/Robot_cleaner_DREAME_X50";
import Autoclave_Aqara from "./products/Autoclave_Aqara";
import Autoclave_Xiaomi from "./products/Autoclave_Xiaomi";
import Water_dispenser_Xiaomi from "./products/Water_dispenser_Xiaomi";
import Smart_trash_T1 from "./products/Smart_trash_T1";
import Smart_trash_T3 from "./products/Smart_trash_T3";
import Packages_smart_Trash_T1 from "./products/Packages_smart_Trash_T1";
import Packages_smart_Trash_T3 from "./products/Packages_smart_Trash_T3";
import Smart_mirror_square from "./products/Smart_mirror_square";
import Smart_mirror_round from "./products/Smart_mirror_round";
import Smart_mirror_rectangle from "./products/Smart_mirror_rectangle";
import Smart_mirror_oval from "./products/Smart_mirror_oval";
import Footer from "../footer";
import { useRouter } from "next/router";

export default function Sensor() {
  const tabs = [
    {
      id: 1,
      title: "Увлажнитель воздуха Xiaomi 4.5 л",
      translation: "Humidifier_Xiaomi_4_5",
    },
    {
      id: 2,
      title: "Увлажнитель воздуха Xiaomi 5 л",
      translation: "Humidifier_Xiaomi_5",
    },
    {
      id: 3,
      title: "Увлажнитель воздуха Xiaomi 4 л",
      translation: "Humidifier_Xiaomi_4",
    },
    {
      id: 4,
      title: "Увлажнитель воздуха Xiaomi 3 л",
      translation: "Humidifier_Xiaomi_3",
    },
    {
      id: 5,
      title: "Очиститель воздуха Aminix",
      translation: "Humidifier_Aminix",
    },
    {
      id: 6,
      title: "Очиститель воздуха Xiaomi Mijia Circulation Air Purifier белый",
      translation: "Air_purifier_Xiaomi",
    },
    {
      id: 7,
      title: "Очиститель воздуха Xiaomi Smart Air Purifier 5 Pro белый",
      translation: "Air_purifier_5_Xiaomi",
    },
    {
      id: 8,
      title: "Очиститель воздуха Rawmid",
      translation: "Air_purifier_Rawmid",
    },
    {
      id: 9,
      title: "Кондиционер Samsung WindFree AI cooling + Filter 25 кв.м",
      translation: "Conditioner_Samsung_AI_25",
    },
    {
      id: 10,
      title: "Кондиционер Samsung WindFree AI cooling + Filter 35 кв.м",
      translation: "Conditioner_Samsung_AI_35",
    },
    {
      id: 11,
      title: "Кондиционер Samsung WindFree 25 кв.м",
      translation: "Conditioner_Samsung_25",
    },
    {
      id: 12,
      title: "Кондиционер Samsung WindFree 35 кв.м",
      translation: "Conditioner_Samsung_35",
    },
    {
      id: 13,
      title: "Кондиционер Haier 20 кв.м",
      translation: "Conditioner_Haier_20",
    },
    {
      id: 14,
      title: "Кондиционер Haier 35 кв.м",
      translation: "Conditioner_Haier_35",
    },
    {
      id: 15,
      title: "Кондиционер Haier 50 кв.м",
      translation: "Conditioner_Haier_50",
    },
    {
      id: 16,
      title: "Кондиционер Haier 70 кв.м",
      translation: "Conditioner_Haier_70",
    },
    {
      id: 17,
      title: "Кондиционер LG 27 кв.м.",
      translation: "Conditioner_LG_27",
    },
    {
      id: 18,
      title: "Кондиционер LG 36 кв.м.",
      translation: "Conditioner_LG_36",
    },
    {
      id: 19,
      title: "Робот-пылесос DREAME L40 белый",
      translation: "Robot_cleaner_DREAME_L40",
    },
    {
      id: 20,
      title: "Робот-пылесос DREAME Robot Vacuum D20 Ultra белый",
      translation: "Robot_cleaner_DREAME_D20",
    },
    {
      id: 21,
      title: "Робот-пылесос DREAME X50 Ultra Complete белый",
      translation: "Robot_cleaner_DREAME_X50",
    },
    {
      id: 22,
      title: "Автокормушка Aqara 400 мл белый",
      translation: "Autoclave_Aqara",
    },
    {
      id: 23,
      title: "Автоматическая кормушка Xiaomi для кошек и собак",
      translation: "Autoclave_Xiaomi",
    },
    {
      id: 24,
      title: "Автопоилка Xiaomi Smart Pet Water Dispenser 3л",
      translation: "Water_dispenser_Xiaomi",
    },
    {
      id: 25,
      title: "Умное мусорное ведро Xiaomi Smart Trash Can T1",
      translation: "Smart_trash_T1",
    },
    {
      id: 26,
      title: "Умное мусорное ведро Xiaomi Smart Trash Can T3",
      translation: "Smart_trash_T3",
    },
    {
      id: 27,
      title: "Сменные пакеты для Xiaomi Townew Smart Trash Can T1 150 шт",
      translation: "Packages_smart_trash_T1",
    },
    {
      id: 28,
      title:
        "Сменные картриджи с пакетами для Xiaomi TowNew Smart Trash T3 150 шт",
      translation: "Packages_smart_trash_T3",
    },
    {
      id: 29,
      title:
        "Умное зеркало с RGB - подсветкой, подогревом и часами, 85см., круглое",
      translation: "Smart_mirror_round",
    },
    {
      id: 30,
      title:
        "Умное зеркало с RGB - подсветкой, подогревом и часами, 80х80см., квадрат",
      translation: "Smart_mirror_square",
    },
    {
      id: 31,
      title:
        "Умное зеркало с RGB - подсветкой, подогревом и часами, 80х50см., прямоугольник",
      translation: "Smart_mirror_rectangle",
    },
    {
      id: 32,
      title:
        "Умное зеркало с RGB - подсветкой, подогревом и часами, 90х40см., овал",
      translation: "Smart_mirror_oval",
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
          {/* <!-- Контейнер для открытия устройств техника --> */}
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

            {/* <!-- Контейнер для содержания устройств техника --> */}
            <div className="wrapper_for_smart_home_items">
              <Humidifier_Xiaomi_4_5 activeTab={activeTab} tabNumber={1} />
              <Humidifier_Xiaomi_5 activeTab={activeTab} tabNumber={2} />
              <Humidifier_Xiaomi_4 activeTab={activeTab} tabNumber={3} />
              <Humidifier_Xiaomi_3 activeTab={activeTab} tabNumber={4} />
              <Humidifier_Aminix activeTab={activeTab} tabNumber={5} />
              <Air_purifier_Xiaomi activeTab={activeTab} tabNumber={6} />
              <Air_purifier_5_Xiaomi activeTab={activeTab} tabNumber={7} />
              <Air_purifier_Rawmid activeTab={activeTab} tabNumber={8} />
              <Conditioner_Samsung_AI_25 activeTab={activeTab} tabNumber={9} />
              <Conditioner_Samsung_AI_35 activeTab={activeTab} tabNumber={10} />
              <Conditioner_Samsung_25 activeTab={activeTab} tabNumber={11} />
              <Conditioner_Samsung_35 activeTab={activeTab} tabNumber={12} />
              <Conditioner_Haier_20 activeTab={activeTab} tabNumber={13} />
              <Conditioner_Haier_35 activeTab={activeTab} tabNumber={14} />
              <Conditioner_Haier_50 activeTab={activeTab} tabNumber={15} />
              <Conditioner_Haier_70 activeTab={activeTab} tabNumber={16} />
              <Conditioner_LG_27 activeTab={activeTab} tabNumber={17} />
              <Conditioner_LG_36 activeTab={activeTab} tabNumber={18} />
              <Robot_cleaner_DREAME_L40 activeTab={activeTab} tabNumber={19} />
              <Robot_cleaner_DREAME_D20 activeTab={activeTab} tabNumber={20} />
              <Robot_cleaner_DREAME_X50 activeTab={activeTab} tabNumber={21} />
              <Autoclave_Aqara activeTab={activeTab} tabNumber={22} />
              <Autoclave_Xiaomi activeTab={activeTab} tabNumber={23} />
              <Water_dispenser_Xiaomi activeTab={activeTab} tabNumber={24} />
              <Smart_trash_T1 activeTab={activeTab} tabNumber={25} />
              <Smart_trash_T3 activeTab={activeTab} tabNumber={26} />
              <Packages_smart_Trash_T1 activeTab={activeTab} tabNumber={27} />
              <Packages_smart_Trash_T3 activeTab={activeTab} tabNumber={28} />
              <Smart_mirror_round activeTab={activeTab} tabNumber={29} />
              <Smart_mirror_square activeTab={activeTab} tabNumber={30} />
              <Smart_mirror_rectangle activeTab={activeTab} tabNumber={31} />
              <Smart_mirror_oval activeTab={activeTab} tabNumber={32} />
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
}
