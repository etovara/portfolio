"use client";

/* === COMPONENTE CONTACT (FORMULARIO DE CONTACTO) === */
/* Formulario con campos de nombre, email y mensaje. Muestra mensaje de éxito al enviar y fallback con mailto */

import { useState } from "react";
import { useLanguage } from "@/i18n";

interface ContactProps {
  email: string;
}

export default function Contact({ email }: ContactProps) {
  /* Estado local: indica si el formulario ya fue enviado para mostrar el mensaje de éxito */
  const [submitted, setSubmitted] = useState(false);
  const { t, lang } = useLanguage();

  /* Manejador de envío: previene la recarga y activa el estado de "enviado" */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-6 py-24"
      aria-label={t.contact.heading}
    >
      <h2
        className="mb-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
        data-testid="contact-heading"
      >
        {t.contact.heading}
      </h2>
      <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">
        {t.contact.subtitle}
      </p>

      {submitted ? (
        /* Mensaje de éxito verde mostrado después del envío */
        <div
          className="rounded-lg border border-green-200 bg-green-50 px-6 py-4 text-sm text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200"
          role="alert"
          data-testid="contact-success"
        >
          {t.contact.success}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          data-testid="contact-form"
        >
          {/* Campo: Nombre */}
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {t.contact.label_name}
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-400"
              data-testid="contact-input-name"
              aria-required="true"
            />
          </div>
          {/* Campo: Email */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {t.contact.label_email}
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-400"
              data-testid="contact-input-email"
              aria-required="true"
            />
          </div>
          {/* Campo: Mensaje */}
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {t.contact.label_message}
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full resize-y rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-400"
              data-testid="contact-input-message"
              aria-required="true"
            />
          </div>
          {/* Botón de envío */}
          <button
            type="submit"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            data-testid="contact-submit"
          >
            {t.contact.submit}
          </button>
          {/* Fallback: enlace directo por correo electrónico */}
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            {t.contact.or_email}{" "}
            <a
              href={`mailto:${email}`}
              className="underline underline-offset-2 hover:text-zinc-700 dark:hover:text-zinc-300"
              data-testid="contact-email-link"
            >
              {email}
            </a>
          </p>
        </form>
      )}
    </section>
  );
}
