"use client";
import { createContext, useContext, useState, useEffect } from "react";
const ru = require("./ru.json");
const kz = require("./kz.json");
const en = require("./en.json");

const LanguageContext = createContext(null);

const dictionaries = { ru, kz, en };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ru");

  // Загружаем язык из localStorage при монтировании
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && dictionaries[saved]) setLang(saved);
  }, []);

  // Сохраняем язык при изменении
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // Функция перевода
  const t = (key) => dictionaries[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
