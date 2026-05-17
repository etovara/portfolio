/* === UTILIDAD DE IDIOMA PARA DATOS BILINGÜES === */
/* Resuelve campos de texto que tienen versión en español e inglés según el idioma activo */

import type { Language } from "@/i18n";

export type BilingualText = { en: string; es: string };

export function resolveText(val: string | BilingualText, lang: Language): string {
  if (typeof val === "string") return val;
  return val[lang];
}
