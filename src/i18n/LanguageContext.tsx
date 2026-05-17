"use client";

/* === SISTEMA DE INTERNACIONALIZACIÓN (i18n) === */
/* Implementación manual con React Context: provee el idioma actual, las traducciones planas y un toggle para alternar entre ES/EN */

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import es from "./es.json";
import en from "./en.json";

export type Language = "es" | "en";
type Translations = Record<string, any>;

/* Mapa estático de archivos de traducción cargados en tiempo de compilación */
const translations: Record<Language, Translations> = { es, en };

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  toggleLanguage: () => void;
}

/* Contexto inicializado como null para forzar el uso del Provider */
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es");

  /* Alterna entre español e inglés de forma estable (useCallback evita re-renders innecesarios) */
  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

/* Hook personalizado con guard: lanza error si se usa fuera del LanguageProvider */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
