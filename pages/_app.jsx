import { LanguageProvider } from "../i18n/LanguageContext";
import LayoutContent from "../LayoutContent";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <LayoutContent>
        <Component {...pageProps} />
      </LayoutContent>
    </LanguageProvider>
  );
}
