import "./page.css";
import "./global.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="content">
        <div className="main_content">
          <div className="main_text_wrapper">
            <div className="text_bold text_center">Добро пожаловать!</div>
            <p className="text_center m_text_justify">
              Уважаемый клиент, наша компания "SmartÜi" предоставляет услуги по
              интеграции Умного дома Алиса.
            </p>
            <p>
              Здесь вы найдёте всё, что нужно, чтобы сделать ваш дом удобнее и
              жизнь комфортнее. Ознакомьтесь с нашим каталогом, посмотрите какие
              услуги мы предлагаем, сравните тарифы и загляните в портфолио,
              чтобы наглядно увидеть, как всё работает. Мы здесь, чтобы помочь
              вам выбрать лучшее и сделать первый шаг максимально просто. Для
              подробной консультации просим связаться по указанным контактам.
              Наши менеджеры обязательно предоставят Вам подробную консультацию.
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
                Изучите все доступные варианты и найдите оптимальное решение для
                ваших задач.
              </div>
            </Link>
            <Link href="catalog.html" className="main_icon_wrapper">
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
            <a href="services.html" className="main_icon_wrapper">
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
            </a>
            <a href="video.html" className="main_icon_wrapper">
              <img
                src="./assets/icons/portfolio.png"
                alt="Портфолио"
                className="main_icon_img"
              />
              <div className="main_icon text_bold">Портфолио</div>
              <div className="main_icon_line"></div>
              <div className="main_icon_text">
                Узнайте, как всё работает, за пару минут — наглядно и просто.
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
