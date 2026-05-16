"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang, toggleLanguage } = useLanguage();

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
        aria-label={lang === "es" ? "Navegaci\u00F3n principal" : "Main navigation"}
      >
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          data-testid="nav-logo"
          aria-label={lang === "es" ? "Ir al inicio" : "Go to top"}
        >
          ET
        </a>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            data-testid="lang-toggle"
            aria-label={t.lang.switch}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            className="flex items-center justify-center rounded-md p-2 text-zinc-600 hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? (lang === "es" ? "Cerrar men\u00FA" : "Close menu") : (lang === "es" ? "Abrir men\u00FA" : "Open menu")}
            data-testid="menu-toggle"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

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

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-zinc-200 bg-white px-6 pb-4 md:hidden dark:border-zinc-800 dark:bg-zinc-900"
          role="navigation"
          aria-label={lang === "es" ? "Navegaci\u00F3n m\u00F3vil" : "Mobile navigation"}
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
