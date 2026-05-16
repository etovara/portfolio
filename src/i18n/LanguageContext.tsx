"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import es from "./es.json";
import en from "./en.json";

export type Language = "es" | "en";
type Translations = Record<string, any>;

const translations: Record<Language, Translations> = { es, en };

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es");

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
