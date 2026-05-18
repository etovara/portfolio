"use client";

/* === COMPONENTE HEADER (NAVEGACIÓN) === */
/* Barra de navegación fija con logo, menú desktop, toggle de idioma y menú hamburguesa para móvil */

import { useState } from "react";
import { useLanguage } from "@/i18n";
import { useTheme } from "@/i18n/ThemeContext";

export default function Header() {
  /* Estado local para controlar la apertura/cierre del menú móvil */
  const [menuOpen, setMenuOpen] = useState(false);
  /* Hook de internacionalización: traducciones (t), idioma actual (lang), y alternar idioma (toggleLanguage) */
  const { t, lang, toggleLanguage } = useLanguage();
  const { theme, hydrated, setTheme } = useTheme();

  /* Elementos de navegación: label traducido + hash al que apunta */
  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label={lang === "es" ? "Navegación principal" : "Main navigation"}
      >
        {/* Logo: enlace al inicio (hero) con scroll suave */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          data-testid="nav-logo"
          aria-label={lang === "es" ? "Ir al inicio" : "Go to top"}
        >
          ET
        </a>

        <div className="flex items-center gap-4">
          {/* Botón toggle de idioma: muestra "EN" si está en español y viceversa */}
          <button
            onClick={toggleLanguage}
            className="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            data-testid="lang-toggle"
            aria-label={t.lang.switch}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          {/* Botón toggle de tema: cicla Claro → Oscuro → Sistema → Claro */}
          <button
            onClick={() => {
              const modes: Array<"light" | "dark" | "system"> = ["light", "dark", "system"];
              const idx = modes.indexOf(theme);
              setTheme(modes[(idx + 1) % modes.length]);
            }}
            className="rounded-md p-1.5 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            data-testid="theme-toggle"
            aria-label={
              !hydrated ? t.theme.system :
              theme === "light" ? t.theme.dark :
              theme === "dark" ? t.theme.system :
              t.theme.light
            }
          >
            {!hydrated ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : theme === "light" ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : theme === "dark" ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            )}
          </button>

          {/* Botón hamburguesa visible solo en móviles (md:hidden) */}
          <button
            className="flex items-center justify-center rounded-md p-2 text-zinc-600 hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? (lang === "es" ? "Cerrar menú" : "Close menu") : (lang === "es" ? "Abrir menú" : "Open menu")}
            data-testid="menu-toggle"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {menuOpen ? (
                /* Icono de X (cerrar) */
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                /* Icono de tres líneas (hamburguesa) */
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú desktop: visible desde md: hacia arriba */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                data-testid={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menú móvil desplegable: se muestra condicionalmente cuando menuOpen es true */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-zinc-200 bg-white px-6 pb-4 md:hidden dark:border-zinc-800 dark:bg-zinc-900"
          role="navigation"
          aria-label={lang === "es" ? "Navegación móvil" : "Mobile navigation"}
        >
          <ul className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
