"use client";

/* === COMPONENTE HERO (PRESENTACIÓN) === */
/* Sección principal de presentación: rol, nombre, tagline, botones CTA y enlaces a redes sociales */

import { useLanguage } from "@/i18n";
import { resolveText } from "@/utils/lang";
import type { Personal } from "@/types";

interface HeroProps {
  personal: Personal;
}

export default function Hero({ personal }: HeroProps) {
  const { t, lang } = useLanguage();

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-16"
      aria-label={lang === "es" ? "Sección principal" : "Hero section"}
    >
      <div className="text-center">
        {/* Rol profesional en mayúsculas y espaciado amplio */}
        <p
          className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-900 dark:text-white"
          data-testid="hero-role"
        >
          {resolveText(personal.role, lang)}
        </p>
        {/* Nombre completo como encabezado principal */}
        <h1
          className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white"
          data-testid="hero-name"
        >
          {personal.name}
        </h1>
        {/* Tagline o frase descriptiva */}
        <p
          className="mx-auto mb-8 max-w-lg text-lg text-zinc-900 dark:text-white"
          data-testid="hero-tagline"
        >
          {resolveText(personal.tagline, lang)}
        </p>
          {/* Botones de llamada a la acción: Ver proyectos, Contactar y Descargar CV */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            data-testid="hero-cta-projects"
          >
            {t.hero.cta_projects}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            data-testid="hero-cta-contact"
          >
            {t.hero.cta_contact}
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cv/Edwin_Tovar_CV_Professional_${lang.toUpperCase()}.pdf`}
            download
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            data-testid="hero-cta-cv"
          >
            {t.hero.cta_cv}
          </a>
        </div>
      </div>

      {/* Redes sociales: se renderizan condicionalmente si la URL existe */}
      <div className="mt-16 flex items-center gap-6">
        {personal.social.github && (
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label="GitHub"
            data-testid="social-github"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        )}
        {personal.social.linkedin && (
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label="LinkedIn"
            data-testid="social-linkedin"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
