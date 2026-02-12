import { createContext, useContext, useState, useMemo } from "react";
import ru from "../i18n/ru.json";
import en from "../i18n/en.json";
import kz from "../i18n/kz.json";

const LanguageContext = createContext(null);

const dictionaries = { ru, en, kz };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ru");

  const t = (key) => {
    return dictionaries[lang]?.[key] || key;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
