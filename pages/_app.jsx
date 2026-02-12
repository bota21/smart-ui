import { LanguageProvider } from "./i18n/LanguageContext";
import LayoutContent from "./LayoutContent.jsx";
import "../pages/styles/layout.css";
import "../pages/styles/style.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <LayoutContent>
        <Component {...pageProps} />
      </LayoutContent>
    </LanguageProvider>
  );
}
