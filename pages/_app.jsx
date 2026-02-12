import "@/styles/style.css";
import "@/styles/layout.css";
import { LanguageProvider } from "@/context/LanguageContext";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
