import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import Footer from "../footer";
import Switch_Yandex_1x from "./products/SwitchYandex_1x";
import Switch_Yandex_2x from "./products/Switch_Yandex_2x";
import Switch_Bseed_keyboard_1x from "./products/Switch_Bseed_keyboard_1x";
import Switch_Bseed_keyboard_2x from "./products/Switch_Bseed_keyboard_2x";
import Switch_Bseed_keyboard_3x from "./products/Switch_Bseed_keyboard_3x";
import Switch_Bseed_sensor_1x from "./products/Switch_Bseed_sensor_1x";
import Switch_Bseed_sensor_2x from "./products/Switch_Bseed_sensor_2x";
import Switch_Bseed_sensor_3x from "./products/Switch_Bseed_sensor_3x";
import Switch_Bseed_keyboard_4x from "./products/Switch_Bseed_keyboard_4x";
import Switch_Roximo_1x from "./products/Switch_Roximo_1x";
import Switch_Roximo_2x from "./products/Switch_Roximo_2x";
import Switch_Roximo_3x from "./products/Switch_Roximo_3x";
import Switch_Aqara_1x from "./products/Switch_Aqara_1x";
import Switch_Aqara_2x from "./products/Switch_Aqara_2x";
import Switch_Aqara_3x from "./products/Switch_Aqara_3x";
import Switch_Aqara_4x from "./products/Switch_Aqara_4x";
import Dimmer_Bseed from "./products/Dimmer_Bseed";
import Dimmer_Yandex from "./products/Dimmer_Yandex";
import Dimmer_Aqara from "./products/Dimmer_Aqara";
import Switch_roller_touch from "./products/Switch_roller_touch";
import Socket_buildIn_1x from "./products/Socket_buildIn_1x";
import Socket_buildIn_2x from "./products/Socket_buildIn_2x";
import Socket_buildIn_3x from "./products/Socket_buildIn_3x";
import Relay_dimmer from "./products/Relay_dimmer";
import Slug_Yandex from "./products/Slug_Yandex";
import Slug_Tuya from "./products/Slug_Tuya";
import Slug_Roximo from "./products/Slug_Roximo";
import Slug_Smartlife from "./products/Slug_Smartlife";
import Relay_Yandex_1x from "./products/Relay_Yandex_1x";
import Relay_Yandex_2x from "./products/Relay_Yandex_2x";
import Button_Yandex from "./products/Button_Yandex";
import Smart_Din_63A from "./products/Smart_Din_63A";
import Smart_Din_40A from "./products/Smart_Din_40A";
import Smart_Din_Moes_16A from "./products/Smart_Din_Moes_16A";
import Smart_Din_Tuya_63A from "./products/Smart_Din_Tuya_63A";

export default function Sockets_and_Switches() {
  const tabs = [
    {
      id: 1,
      title: "Выключатель одноклавишный Яндекс",
      translation: "Switch_Yandex_1x",
      package: "Switch_Yandex_1x",
    },
    {
      id: 2,
      title: "Выключатель двухклавишный Яндекс",
      translation: "Switch_Yandex_2x",
      package: "Switch_Yandex_2x",
    },
    {
      id: 3,
      title: "Выключатель сенсорный BSEED 1кл",
      translation: "Switch_Bseed_sensor_1x",
      package: "Switch_Bseed_sensor_1x",
    },
    {
      id: 4,
      title: "Выключатель сенсорный BSEED 2кл",
      translation: "Switch_Bseed_sensor_2x",
      package: "Switch_Bseed_sensor_2x",
    },
    {
      id: 5,
      title: "Выключатель сенсорный BSEED 3кл",
      translation: "Switch_Bseed_sensor_3x",
      package: "Switch_Bseed_sensor_3x",
    },
    {
      id: 6,
      title: "Выключатель клавишный BSEED 1кл",
      translation: "Switch_Bseed_keyboard_1x",
      package: "Switch_Bseed_keyboard_1x",
    },
    {
      id: 7,
      title: "Выключатель клавишный BSEED 2кл",
      translation: "Switch_Bseed_keyboard_2x",
      package: "Switch_Bseed_keyboard_2x",
    },
    {
      id: 8,
      title: "Выключатель клавишный BSEED 3кл",
      translation: "Switch_Bseed_keyboard_3x",
      package: "Switch_Bseed_keyboard_3x",
    },
    {
      id: 9,
      title: "Выключатель клавишный BSEED 4кл",
      translation: "Switch_Bseed_keyboard_4x",
      package: "Switch_Bseed_keyboard_4x",
    },
    {
      id: 10,
      title: "Выключатель ROXIMO 1кл",
      translation: "Switch_Roximo_1x",
      package: "Switch_Roximo_1x",
    },
    {
      id: 11,
      title: "Выключатель ROXIMO 2кл",
      translation: "Switch_Roximo_2x",
      package: "Switch_Roximo_2x",
    },
    {
      id: 12,
      title: "Выключатель ROXIMO 3кл",
      translation: "Switch_Roximo_3x",
      package: "Switch_Roximo_3x",
    },
    {
      id: 13,
      title: "Выключатель клавишный Aqara 1кл",
      translation: "Switch_Aqara_1x",
      package: "Switch_Aqara_1x",
    },
    {
      id: 14,
      title: "Выключатель клавишный Aqara 2кл",
      translation: "Switch_Aqara_2x",
      package: "Switch_Aqara_2x",
    },
    {
      id: 15,
      title: "Выключатель клавишный Aqara 3кл",
      translation: "Switch_Aqara_3x",
      package: "Switch_Aqara_3x",
    },
    {
      id: 16,
      title: "Выключатель клавишный Aqara 4кл",
      translation: "Switch_Aqara_4x",
      package: "Switch_Aqara_4x",
    },
    {
      id: 17,
      title: "Диммер стеклянный",
      translation: "Dimmer_Bseed",
      package: "Dimmer_Bseed",
    },
    {
      id: 18,
      title: "Умный диммер Яндекс",
      translation: "Dimmer_Yandex",
      package: "Dimmer_Yandex",
    },
    {
      id: 19,
      title: "Диммер Aqara поворотный",
      translation: "Dimmer_Aqara",
      package: "Dimmer_Aqara",
    },
    {
      id: 20,
      title: "Выключатель для роллштор сенсорный",
      translation: "Switch_roller_touch",
      package: "Switch_roller_touch",
    },
    {
      id: 21,
      title: "Розетка встроенная",
      translation: "Socket_buildIn_1x",
      package: "Socket_buildIn_1x",
    },
    {
      id: 22,
      title: "Розетка встроенная двойная",
      translation: "Socket_buildIn_2x",
      package: "Socket_buildIn_2x",
    },
    {
      id: 23,
      title: "Розетка встроенная тройная",
      translation: "Socket_buildIn_3x",
      package: "Socket_buildIn_3x",
    },
    {
      id: 24,
      title: "Реле для диммера ZigBee с Алисой, 2 линии",
      translation: "Relay_dimmer",
      package: "Relay_dimmer",
    },
    {
      id: 25,
      title: "Умная розетка Яндекс",
      translation: "Slug_Yandex",
      package: "Slug_Yandex",
    },
    {
      id: 26,
      title: "Умная розетка Tuya",
      translation: "Slug_Tuya",
      package: "Slug_Tuya",
    },
    {
      id: 27,
      title: "Умная розетка ROXIMO",
      translation: "Slug_Roximo",
      package: "Slug_Roximo",
    },
    {
      id: 28,
      title: "Умная розетка SmartLife",
      translation: "Slug_Smartlife",
      package: "Slug_Smartlife",
    },
    {
      id: 29,
      title: "Реле одноканальное Яндекс",
      translation: "Relay_Yandex_1x",
      package: "Relay_Yandex_1x",
    },
    {
      id: 30,
      title: "Реле двуканальное Яндекс",
      translation: "Relay_Yandex_2x",
      package: "Relay_Yandex_2x",
    },
    {
      id: 31,
      title: "Яндекс умная беспроводная кнопка",
      translation: "Button_Yandex",
      package: "Button_Yandex",
    },
    {
      id: 32,
      title: "Умный автомат ZigBee на Din рейку 63А",
      translation: "Smart_Din_63A",
      package: "Smart_Din_63A",
    },
    {
      id: 33,
      title: "Умный автомат 1P 40A",
      translation: "Smart_Din_40A",
      package: "Smart_Din_40A",
    },
    {
      id: 34,
      title: "Умный автомат Moes 16A",
      translation: "Smart_Din_Moes_16A",
      package: "Smart_Din_Moes_16A",
    },
    {
      id: 35,
      title: "Умный автомат Tuya 63A",
      translation: "Smart_Din_Tuya_63A",
      package: "Smart_Din_Tuya_63A",
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
          {/* <!-- Контейнер для открытия устройств выключатели, розетки --> */}
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

            {/* <!-- Контейнер для содержания устройств выключатели, розетки --> */}
            <div className="wrapper_for_smart_home_items">
              <Switch_Yandex_1x activeTab={activeTab} tabNumber={1} />
              <Switch_Yandex_2x activeTab={activeTab} tabNumber={2} />
              <Switch_Bseed_sensor_1x activeTab={activeTab} tabNumber={3} />
              <Switch_Bseed_sensor_2x activeTab={activeTab} tabNumber={4} />
              <Switch_Bseed_sensor_3x activeTab={activeTab} tabNumber={5} />
              <Switch_Bseed_keyboard_1x activeTab={activeTab} tabNumber={6} />
              <Switch_Bseed_keyboard_2x activeTab={activeTab} tabNumber={7} />
              <Switch_Bseed_keyboard_3x activeTab={activeTab} tabNumber={8} />
              <Switch_Bseed_keyboard_4x activeTab={activeTab} tabNumber={9} />
              <Switch_Roximo_1x activeTab={activeTab} tabNumber={10} />
              <Switch_Roximo_2x activeTab={activeTab} tabNumber={11} />
              <Switch_Roximo_3x activeTab={activeTab} tabNumber={12} />
              <Switch_Aqara_1x activeTab={activeTab} tabNumber={13} />
              <Switch_Aqara_2x activeTab={activeTab} tabNumber={14} />
              <Switch_Aqara_3x activeTab={activeTab} tabNumber={15} />
              <Switch_Aqara_4x activeTab={activeTab} tabNumber={16} />
              <Dimmer_Bseed activeTab={activeTab} tabNumber={17} />
              <Dimmer_Yandex activeTab={activeTab} tabNumber={18} />
              <Dimmer_Aqara activeTab={activeTab} tabNumber={19} />
              <Switch_roller_touch activeTab={activeTab} tabNumber={20} />
              <Socket_buildIn_1x activeTab={activeTab} tabNumber={21} />
              <Socket_buildIn_2x activeTab={activeTab} tabNumber={22} />
              <Socket_buildIn_3x activeTab={activeTab} tabNumber={23} />
              <Relay_dimmer activeTab={activeTab} tabNumber={24} />
              <Slug_Yandex activeTab={activeTab} tabNumber={25} />
              <Slug_Tuya activeTab={activeTab} tabNumber={26} />
              <Slug_Roximo activeTab={activeTab} tabNumber={27} />
              <Slug_Smartlife activeTab={activeTab} tabNumber={28} />
              <Relay_Yandex_1x activeTab={activeTab} tabNumber={29} />
              <Relay_Yandex_2x activeTab={activeTab} tabNumber={30} />
              <Button_Yandex activeTab={activeTab} tabNumber={31} />
              <Smart_Din_63A activeTab={activeTab} tabNumber={32} />
              <Smart_Din_40A activeTab={activeTab} tabNumber={33} />
              <Smart_Din_Moes_16A activeTab={activeTab} tabNumber={34} />
              <Smart_Din_Tuya_63A activeTab={activeTab} tabNumber={35} />
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
}
