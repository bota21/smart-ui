import "@/styles/style.css";
import "@/styles/layout.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Header />
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
