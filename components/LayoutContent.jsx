"use client";
import { useLanguage } from "@/context/LanguageContext";
import Header from "./Header";
import FloatingContacts from "./FloatingContacts";

export default function LayoutContent({ children }) {
  const { t } = useLanguage();

  return (
    <>
      <Header />

      <main>{children}</main>

      <FloatingContacts />
    </>
  );
}
