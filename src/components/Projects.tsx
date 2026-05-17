"use client";

/* === COMPONENTE PROJECTS (GRILLA DE PROYECTOS) === */
/* Muestra los proyectos destacados en una grilla responsive de 1-2 columnas con tarjetas que incluyen ícono, descripción, tecnologías y enlaces */

import { useLanguage } from "@/i18n";
import { resolveText } from "@/utils/lang";
import type { Project } from "@/types";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const { t, lang } = useLanguage();

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-6 py-24"
      aria-label={t.projects.heading}
    >
      <h2
        className="mb-12 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
        data-testid="projects-heading"
      >
        {t.projects.heading}
      </h2>
      {/* Grilla responsive: 1 columna en móvil, 2 en sm: hacia arriba */}
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            data-testid={`project-card-${project.id}`}
          >
            {/* Ícono de carpeta representativo del proyecto */}
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
              <svg className="h-5 w-5 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            {/* Título del proyecto */}
            <h3
              className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100"
              data-testid={`project-title-${project.id}`}
            >
              {resolveText(project.title, lang)}
            </h3>
            {/* Descripción del proyecto */}
            <p
              className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
              data-testid={`project-description-${project.id}`}
            >
              {resolveText(project.description, lang)}
            </p>
            {/* Tags de tecnologías */}
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  data-testid={`project-tech-${project.id}-${tech.toLowerCase()}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Enlaces: "Live" (sitio en vivo) y "Source" (código fuente), renderizados solo si la URL existe */}
            <div className="flex items-center gap-4">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
                  data-testid={`project-url-${project.id}`}
                  aria-label={`${t.projects.live} — ${project.title}`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t.projects.live}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  data-testid={`project-github-${project.id}`}
                  aria-label={`${t.projects.source} — ${project.title}`}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  {t.projects.source}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
