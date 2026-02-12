import "@/styles/style.css";
import "@/styles/layout.css";
import { LanguageProvider } from "@/context/LanguageContext";
import LayoutContent from "@/components/LayoutContent";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <LayoutContent>
        <Component {...pageProps} />
      </LayoutContent>
    </LanguageProvider>
  );
}
