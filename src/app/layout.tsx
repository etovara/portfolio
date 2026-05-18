/* === LAYOUT RAÍZ === */
/* Define la estructura HTML base, fuentes, metadatos SEO y provee el contexto de idioma a toda la aplicación */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/i18n";
import { ThemeProvider } from "@/i18n/ThemeContext";
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

/* Configuración de Metadatos SEO */
export const metadata: Metadata = {
  title: "Edwin Tovar | Software Engineer",
  description:
    "Portfolio profesional de Edwin Tovar, Desarrollador de Software especializado en Frontend y Calidad.",
};

/* Script inline que se ejecuta antes de hidratación para aplicar el tema sin flash */
const themeScript = `
(function() {
  try {
    var t = localStorage.getItem("portfolio-theme") || "system";
    var d = document.documentElement;
    var isDark = t === "dark" || (t === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isDark) d.classList.add("dark");
    if (t === "light") d.setAttribute("data-theme", "light");
    else if (t === "dark") d.setAttribute("data-theme", "dark");
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-black dark:text-zinc-100">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
