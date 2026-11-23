import "@/styles/style.css";
import "@/styles/layout.css";
import "@/styles/catalog.css";
import "@/styles/catalog-tabs.css";
import "@/styles/packages.css";
import "@/styles/services.css";
import "@/styles/portfolio.css";
import "@/styles/modalWindow.css";

import Providers from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
