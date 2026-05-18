"use client";

import { useLanguage } from "@/i18n";
import { resolveText } from "@/utils/lang";
import type { Personal, Education, Certification } from "@/types";

interface AboutProps {
  personal: Personal;
  education: Education[];
  certifications: Certification[];
}

export default function About({ personal, education, certifications }: AboutProps) {
  const { t, lang } = useLanguage();

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
        {resolveText(personal.bio, lang)}
      </p>

      <div className="mt-6 space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span data-testid="about-location">{personal.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{lang === "es" ? "Disponibilidad" : "Availability"}: {personal.availability}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>{personal.workAuthorization}</span>
        </div>
      </div>

      {education.length > 0 && (
        <div className="mt-10">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {lang === "es" ? "Educación" : "Education"}
          </h3>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="border-l-2 border-zinc-200 pl-4 dark:border-zinc-800">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{edu.degree}</p>
                <p className="text-sm text-zinc-500">{edu.institution}</p>
                {edu.period && <p className="text-xs text-zinc-400">{edu.period}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {certifications.length > 0 && (
        <div className="mt-10">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {lang === "es" ? "Certificaciones" : "Certifications"}
          </h3>
          <ul className="space-y-2">
            {certifications.map((cert, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {cert.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
