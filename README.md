# Portfolio - Edwin Tovar | QA Engineer

## Resumen del proyecto

SPA desarrollada con Next.js 16 + TypeScript + Tailwind CSS. Portfolio personal tipo landing page con las secciones: Hero, About, Experience, Projects, Contact y Footer.

## Stack

- **Framework:** Next.js 16 (App Router, SSG)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Fuentes:** Geist (Sans & Mono)
- **Testing (E2E):** Playwright (atributos `data-testid` en todos los elementos interactivos)

## Arquitectura

```
src/
├── app/
│   ├── globals.css        # Estilos globales + Tailwind
│   ├── layout.tsx         # Layout root + LanguageProvider
│   └── page.tsx           # Home: compone todos los m\u00f3dulos
├── components/
│   ├── Header.tsx         # Nav fija, men\u00fa responsive, bot\u00f3n ES/EN
│   ├── Hero.tsx           # Presentaci\u00f3n + redes sociales
│   ├── About.tsx          # Bio + ubicaci\u00f3n
│   ├── Experience.tsx     # Timeline de experiencia laboral
│   ├── Projects.tsx       # Grid de proyectos con enlaces
│   ├── Contact.tsx        # Formulario de contacto
│   └── Footer.tsx         # Copyright + navegaci\u00f3n
├── data/
│   └── data.json          # Datos del CV (personal, experience, projects)
├── i18n/
│   ├── es.json            # Traducciones UI en espa\u00f1ol
│   ├── en.json            # Traducciones UI en ingl\u00e9s
│   ├── LanguageContext.tsx # Contexto + Provider + hook useLanguage
│   └── index.ts           # Re-exportaciones
└── types/
    └── index.ts           # Interfaces TypeScript
```

## Caracter\u00edsticas implementadas

1. **Arquitectura basada en componentes** - 7 componentes at\u00f3micos con props tipadas
2. **Data-driven** - Datos consumidos desde `data.json` (no hardcodeados)
3. **data-testid** - Todos los elementos interactivos tienen atributos para E2E
4. **Responsive** - Men\u00fa mobile con hamburger toggle, grid 1/2 columnas
5. **Accesibilidad** - Roles ARIA, aria-label, aria-expanded, aria-required
6. **Dark mode** - Soporte completo via `prefers-color-scheme`
7. **i18n** - Traducciones ES/EN para toda la UI con contexto React
8. **Header** - Fondo blanco s\u00f3lido con textos oscuros para diferenciarse

## Datos del CV

Los datos corresponden a **Edwin Tovar**, QA Engineer con +10 a\u00f1os de experiencia en Fintech, Banca y Medios de Pago.

### Experiencia

| Empresa | Rol | Per\u00edodo |
|---------|-----|-----------|
| SOFI | Senior QA Engineer | 2023 \u2014 Presente |
| Banco ICBC / IT Patagonia | QA Tester Agile | 2022 |
| Prisma Medios de Pagos | Business Analyst III | 2021 \u2014 2022 |
| Banco Galicia / Voolkia | Functional Analyst / Senior QA Tester | 2019 \u2014 2021 |
| Banesco Banco Universal | Functional Analyst / QA Tester | 2012 \u2014 2018 |

### Proyectos destacados

- AI-Driven Test Automation Suite
- Fintech QA Platform
- Accessibility Testing Framework
- Corporate Home Banking Testing

## C\u00f3mo ejecutar

```bash
cd portfolio
npm run dev      # Desarrollo en http://localhost:3000
npm run build    # Build de producci\u00f3n
npm start        # Servir build de producci\u00f3n
```

## Comandos \u00fatiles

- `npm run lint` - Ejecutar ESLint
- `npx playwright-cli open http://localhost:3000` - Abrir navegador para testing E2E
