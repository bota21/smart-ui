"use client";
import { useEffect, useState } from "react";
import "./page.css";
import "./global.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const [animationType, setAnimationType] = useState("none");
  const pathName = usePathname();

  useEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0];
    const navType = navigation?.type; // может быть reload / navigate / back_forward
    const sessionStarted = sessionStorage.getItem("sessionStarted");
    const visited = localStorage.getItem("visited");

    // Событие возврата назад
    const handlePopState = () => {
      setAnimationType("none"); // при возврате анимация не показывается
    };
    window.addEventListener("popstate", handlePopState);

    // Первый визит (вообще впервые на сайте)
    if (!visited) {
      localStorage.setItem("visited", "true");
      sessionStorage.setItem("sessionStarted", "true");
      setAnimationType("reload");
    }
    // Новая вкладка (предыдущая была закрыта)
    else if (!sessionStarted) {
      sessionStorage.setItem("sessionStarted", "true");
      setAnimationType("reload");
    }
    // Перезагрузка страницы (F5 или ctrl+R)
    else if (navType === "reload") {
      setAnimationType("reload");
    }
    // Обычный переход между страницами
    else {
      setAnimationType("none");
    }

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const mainContentClass = () => {
    if (
      pathName === "/" &&
      animationType === "first"
      // ||      (pathName === "/" && animationType === "reload")
    ) {
      return "main_content animate";
    }
    return "main_content";
  };

  return (
    <div className="content">
      <div className={mainContentClass()}>
        <div className="main_text_wrapper">
          <div className="text_bold text_center">Добро пожаловать!</div>
          <p className="text_center m_text_justify">
            Уважаемый клиент, наша компания "SmartÜi" предоставляет услуги по
            интеграции Умного дома Алиса.
          </p>
          <p>
            Здесь вы найдёте всё, что нужно, чтобы сделать ваш дом удобнее и
            жизнь комфортнее. Ознакомьтесь с нашим каталогом, посмотрите какие
            услуги мы предлагаем, сравните тарифы и загляните в портфолио, чтобы
            наглядно увидеть, как всё работает. Мы здесь, чтобы помочь вам
            выбрать лучшее и сделать первый шаг максимально просто. Для
            подробной консультации просим связаться по указанным контактам. Наши
            менеджеры обязательно предоставят Вам подробную консультацию.
          </p>
        </div>

        <div className="main_icons_wrapper">
          <Link href="/packages" className="main_icon_wrapper">
            <img
              src="./assets/icons/packages.png"
              alt="Пакеты"
              className="main_icon_img"
            />
            <div className="main_icon text_bold">Пакеты</div>
            <div className="main_icon_line"></div>
            <div className="main_icon_text">
              Изучите все доступные варианты и найдите оптимальное решение.
            </div>
          </Link>

          <Link href="/catalog" className="main_icon_wrapper">
            <img
              src="./assets/icons/catalog.png"
              alt="Каталог"
              className="main_icon_img"
            />
            <div className="main_icon text_bold">Каталог</div>
            <div className="main_icon_line"></div>
            <div className="main_icon_text">
              Найдите всё необходимое в одном месте — удобно и быстро.
            </div>
          </Link>

          <Link href="/services" className="main_icon_wrapper">
            <img
              src="./assets/icons/services.png"
              alt="Услуги"
              className="main_icon_img"
            />
            <div className="main_icon text_bold">Услуги</div>
            <div className="main_icon_line"></div>
            <div className="main_icon_text">
              Доверьтесь нам — мы настроим, подключим и сделаем всё за вас.
            </div>
          </Link>

          <Link href="/portfolio" className="main_icon_wrapper">
            <img
              src="./assets/icons/portfolio.png"
              alt="Портфолио"
              className="main_icon_img"
            />
            <div className="main_icon text_bold">Портфолио</div>
            <div className="main_icon_line"></div>
            <div className="main_icon_text">
              Узнайте, как всё работает — наглядно и просто.
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
