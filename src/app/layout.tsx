/* === LAYOUT RAÍZ === */
/* Define la estructura HTML base, fuentes, metadatos SEO y provee el contexto de idioma a toda la aplicación */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/i18n";
import "./globals.css";

/* Carga la fuente Geist Sans (texto general) desde Google Fonts */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/* Carga la fuente Geist Mono (código/monospace) desde Google Fonts */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Metadatos SEO: título y descripción para motores de búsqueda */
export const metadata: Metadata = {
  title: "Edwin Tovar | QA Engineer",
  description:
    "Portfolio of Edwin Tovar — Senior QA Engineer specialized in Manual & Automation Testing and AI-Driven Quality Assurance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-black dark:text-zinc-100">
        {/* LanguageProvider envuelve toda la app para que cualquier componente hijo pueda usar useLanguage() */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
