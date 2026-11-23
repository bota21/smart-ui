"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import LayoutContent from "@/components/LayoutContent";

export default function Providers({ children }) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  );
}
