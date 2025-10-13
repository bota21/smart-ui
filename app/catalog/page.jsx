"use client";
import { useEffect } from "react";
import Link from "next/link";
import "./catalog.css";
import Controls from "./controls/controls";
import Sensor from "./sensor/sensor";
import SwitchSocket from "./switchSocket/switchSocket";
import Light from "./light/light";
import Cornice from "./cornice/cornice";
import Technology from "./technology/technology";
import Camera from "./camera/camera";
import DoorsWindow from "./doorsWindows/doorsWindows";
import EntranceYard from "./entranceYard/entranceYard";

export default function Catalog() {
  useEffect(() => {
    const groupToMainTab = {
      1: 0,
      2: 1,
      3: 2,
      4: 3,
      5: 4,
      6: 5,
      7: 6,
      8: 7,
      9: 8,
      10: 9,
    };

    const $ = (selector) => document.querySelectorAll(selector);

    function initMainTabs(tabIndex) {
      $(".smart_home_tabs").forEach((el) => el.classList.remove("tab_active"));
      document
        .querySelector(`.smart_home_tabs[data-tab="${tabIndex}"]`)
        ?.classList.add("tab_active");

      $(".wrapper_for_smart_home_content").forEach(
        (el) => (el.style.display = "none")
      );
      const target = document.querySelector(
        `.wrapper_for_smart_home_content[data-tab="${tabIndex}"]`
      );
      if (target) {
        target.style.display = "flex";
        target.style.opacity = "1";
      }
    }

    function initTabGroup(groupNumber, tabIndex) {
      document
        .querySelectorAll(`.tabs_for_smart_home_item_${groupNumber}`)
        .forEach((el) => el.classList.remove("tab_item_active"));
      document
        .querySelector(
          `.tabs_for_smart_home_item_${groupNumber}[data-tab="${tabIndex}"]`
        )
        ?.classList.add("tab_item_active");

      document
        .querySelectorAll(`.wrapper_for_smart_home_item_${groupNumber}`)
        .forEach((el) => (el.style.display = "none"));
      const target = document.querySelector(
        `.wrapper_for_smart_home_item_${groupNumber}[data-tab="${tabIndex}"]`
      );
      if (target) {
        target.style.display = "block";
        target.style.opacity = "1";
      }
    }

    const firstMainTabEl = document.querySelector(".smart_home_tabs");
    const firstMainTab = firstMainTabEl?.dataset.tab;
    if (firstMainTab) initMainTabs(firstMainTab);

    for (let i = 1; i <= 10; i++) {
      const firstTab = document.querySelector(`.tabs_for_smart_home_item_${i}`);
      if (firstTab) {
        const firstTabIndex = firstTab.dataset.tab;
        initTabGroup(i, firstTabIndex);
      }
    }

    // --- Главные табы ---
    $(".smart_home_tabs").forEach((tab) => {
      tab.addEventListener("click", () => {
        const tabIndex = tab.dataset.tab;
        initMainTabs(tabIndex);
      });
    });

    // --- Внутренние табы ---
    document.addEventListener("click", (e) => {
      const el = e.target.closest('[class^="tabs_for_smart_home_item_"]');
      if (!el) return;

      const match = el.className.match(/tabs_for_smart_home_item_(\d+)/);
      if (!match) return;
      const groupNumber = match[1];
      const tabIndex = el.dataset.tab;

      const mainTabIndex = groupToMainTab[groupNumber] ?? firstMainTab;
      initMainTabs(mainTabIndex);
      initTabGroup(groupNumber, tabIndex);
    });

    // --- Поддержка якорей (hash) ---
    const hash = window.location.hash.substring(1);
    if (hash) {
      const targetTab = document.getElementById(hash);
      if (targetTab) {
        const match = targetTab.className.match(
          /tabs_for_smart_home_item_(\d+)/
        );
        if (match) {
          const groupNumber = match[1];
          const tabIndex = targetTab.dataset.tab;
          const mainTabIndex = groupToMainTab[groupNumber] ?? firstMainTab;

          initMainTabs(mainTabIndex);
          initTabGroup(groupNumber, tabIndex);

          setTimeout(() => {
            window.scrollTo({
              top: targetTab.offsetTop - 100,
              behavior: "smooth",
            });
          }, 50);
        }
      }
    }
  }, []);

  return (
    <>
      <div className="content_catalog">
        <div className="container_for_tabs">
          <div className="smart_home_tabs" data-tab="0">
            Управление
          </div>
          <div className="smart_home_tabs" data-tab="1">
            Датчики
          </div>
          <div className="smart_home_tabs" data-tab="2">
            Розетки, выключатели
          </div>
          <div className="smart_home_tabs" data-tab="3">
            Освещение
          </div>
          <div className="smart_home_tabs" data-tab="4">
            Карнизы
          </div>
          <div className="smart_home_tabs" data-tab="5">
            Сантехника
          </div>
          <div className="smart_home_tabs" data-tab="6">
            Техника
          </div>
          <div className="smart_home_tabs" data-tab="7">
            Камера
          </div>
          <div className="smart_home_tabs" data-tab="8">
            Для дверей и окон
          </div>
          <div className="smart_home_tabs" data-tab="9">
            Для подъезда и двора
          </div>
        </div>

        <div className="wrapper_for_smart_home_tabs">
          <Controls />
          <Sensor />
          <SwitchSocket />
          <Light />
          <Cornice />
          <Technology />
          <Camera />
          <DoorsWindow />
          <EntranceYard />
        </div>
      </div>

      <footer>
        <a href="/" className="footer_back_main">
          Назад
        </a>
      </footer>
    </>
  );
}
