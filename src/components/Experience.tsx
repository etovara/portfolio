"use client";

import { useLanguage } from "@/i18n";
import type { Experience as ExperienceType } from "@/types";

interface ExperienceProps {
  experience: ExperienceType[];
}

export default function Experience({ experience }: ExperienceProps) {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl px-6 py-24"
      aria-label={t.experience.heading}
    >
      <h2
        className="mb-12 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
        data-testid="experience-heading"
      >
        {t.experience.heading}
      </h2>
      <div className="relative space-y-10">
        <div
          className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-zinc-200 dark:bg-zinc-800"
          aria-hidden="true"
        />
        {experience.map((exp) => (
          <article
            key={exp.id}
            className="relative pl-8"
            data-testid={`experience-item-${exp.id}`}
          >
            <div
              className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-zinc-300 bg-white dark:border-zinc-600 dark:bg-black"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3
                className="text-base font-semibold text-zinc-900 dark:text-zinc-100"
                data-testid={`experience-role-${exp.id}`}
              >
                {exp.role}
              </h3>
              <span
                className="text-sm text-zinc-500 dark:text-zinc-500"
                data-testid={`experience-period-${exp.id}`}
              >
                {exp.period}
              </span>
            </div>
            <p
              className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400"
              data-testid={`experience-company-${exp.id}`}
            >
              {exp.company}
            </p>
            <p
              className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
              data-testid={`experience-description-${exp.id}`}
            >
              {exp.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  data-testid={`experience-tech-${exp.id}-${tech.toLowerCase()}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
