"use client";

import { useLanguage } from "@/i18n";

interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  const { t, lang } = useLanguage();

  return (
    <footer
      className="border-t border-zinc-200 px-6 py-8 dark:border-zinc-800"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p
          className="text-sm text-zinc-500 dark:text-zinc-500"
          data-testid="footer-copyright"
        >
          &copy; {new Date().getFullYear()} {name}. {t.footer.rights}
        </p>
        <nav aria-label={lang === "es" ? "Navegaci\u00F3n del pie" : "Footer navigation"}>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#hero"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                data-testid="footer-link-top"
              >
                {t.footer.back_to_top}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
