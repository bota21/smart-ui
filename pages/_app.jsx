import "@/styles/style.css";
import "@/styles/layout.css";
import Head from "next/head";
import { LanguageProvider } from "@/context/LanguageContext";
import LayoutContent from "@/components/LayoutContent";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <title>SmartÜi — Умный дом с Алисой</title>
        <link
          rel="icon"
          // href="/assets/logo/Shanyrak-black.png"
          type="image/png"
        />{" "}
      </Head>

      <LayoutContent>
        <Component {...pageProps} />
      </LayoutContent>
    </LanguageProvider>
  );
}
