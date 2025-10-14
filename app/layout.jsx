"use client";
import { useEffect, useState } from "react";
import "./layout.css";
import "./global.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [animationType, setAnimationType] = useState("none"); // "first", "reload", "none"
  const pathName = usePathname();

  useEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0];
    const navigationType = navigation?.type; // reload / navigate / back_forward
    const sessionStarted = sessionStorage.getItem("sessionStarted");
    const firstVisit = !localStorage.getItem("visited");

    // Первый визит
    if (firstVisit) {
      localStorage.setItem("visited", "true");
      sessionStorage.setItem("sessionStarted", "true");
      setAnimationType("reload");
    }
    // Перезагрузка страницы
    else if (navigationType === "reload") {
      setAnimationType("reload");
    }
    // Новая вкладка (предыдущая была закрыта)
    else if (!sessionStarted) {
      sessionStorage.setItem("sessionStarted", "true");
      setAnimationType("reload");
    }
    // Переход внутри сайта (не показываем)
    else {
      setAnimationType("none");
    }
  }, []);

  const mainLogoClass = () => {
    if (
      pathName === "/" &&
      animationType === "first"
      // ||      (pathName === "/" && animationType === "reload")
    ) {
      return "main_logo_wrapper_animate";
    }
    return "main_logo_wrapper";
  };

  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="assets/logo/Shanyrak-violet.png" />
        <title>SmartÜi</title>
      </head>
      <body>
        <div className={mainLogoClass()}>
          <img
            src="/assets/logo/Shanyrak.png"
            alt="logo"
            className="main_logo"
          />
        </div>
        <header className="header">
          <div className="header_wrapper_contacts">
            Обратная связь
            <a
              href="tel:+77778410050"
              className="header_contact_phone header_img_contact"
            ></a>
            <a
              target="_blank"
              href="https://wa.me/77778410050"
              className="header_contact_whatsapp header_img_contact"
            ></a>
            <a
              target="_blank"
              href="https://t.me/+77778410050"
              className="header_contact_telegram header_img_contact"
            ></a>
          </div>
          <Link href="/" className="logo_img"></Link>
        </header>
        {children}
      </body>
    </html>
  );
}
