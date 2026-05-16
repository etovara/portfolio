"use client";

import { useLanguage } from "@/i18n";
import type { Personal } from "@/types";

interface AboutProps {
  personal: Personal;
}

export default function About({ personal }: AboutProps) {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-6 py-24"
      aria-label={t.about.heading}
    >
      <h2
        className="mb-8 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
        data-testid="about-heading"
      >
        {t.about.heading}
      </h2>
      <p
        className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
        data-testid="about-bio"
      >
        {personal.bio}
      </p>
      <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span data-testid="about-location">{personal.location}</span>
      </div>
    </section>
  );
}
