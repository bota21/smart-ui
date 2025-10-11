import "./layout.css";
import "./global.css";
import AnimationHandler from "./AnimationHandler";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <AnimationHandler />
        <div className="main_logo_wrapper">
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
          <a href="s-mart-ui.netlify.app" className="logo_img"></a>
        </header>
        {children}
      </body>
    </html>
  );
}
