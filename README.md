# Portfolio - Edwin Tovar | Senior QA Engineer

Portfolio profesional tipo landing page desarrollado con Next.js 16 + TypeScript + Tailwind CSS. Incluye secciones Hero, About, Experience, Projects, Contact y Footer, con internacionalización ES/EN, modo oscuro y suite completa de testing E2E con Playwright.

## Stack tecnológico

- **Framework:** Next.js 16 (App Router, SSG)
- **Lenguaje:** TypeScript (strict mode)
- **Estilos:** Tailwind CSS v4 + PostCSS
- **Fuentes:** Geist Sans & Geist Mono (`next/font/google`)
- **Testing (E2E):** Playwright con Page Object Model
- **Calidad:** Atributos `data-testid` en todos los elementos interactivos
- **CI/CD:** GitHub Actions (lint + build + deploy a GitHub Pages)
- **CV:** Generación automática de PDF con Playwright

## Requisitos previos

- **Node.js** 20.x o superior
- **npm** 9.x o superior
- **Git** (para clonar el repositorio)

## Cómo clonar y ejecutar

```bash
# 1. Clonar el repositorio
git clone https://github.com/etovara/portfolio.git
cd portfolio

# 2. Instalar dependencias
npm ci

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en localhost:3000 |
| `npm run build` | Build de producción (SSG) |
| `npm start` | Servir build de producción |
| `npm run lint` | Ejecutar ESLint |
| `npm run test:e2e` | Tests E2E con Playwright (Chromium + Mobile) |
| `npm run test:e2e:ui` | Tests con UI interactiva |
| `npm run test:e2e:debug` | Tests en modo debug |
| `node scripts/generate-cv-pdf.mjs` | Generar CV en PDF bilingüe |

## Arquitectura

```
portfolio/
├── src/
│   ├── app/                  # App Router (layout, page, sitemap)
│   ├── components/           # Componentes React (Header, Hero, About, etc.)
│   ├── data/
│   │   └── data.json         # Datos centralizados del CV
│   ├── i18n/                 # Internacionalización manual (ES/EN)
│   └── types/                # Interfaces TypeScript
├── testing/
│   ├── automation/           # Tests Playwright con POM (9 specs, 37 tests)
│   │   ├── pages/            # Page Objects
│   │   ├── specs/            # Tests automatizados
│   │   ├── fixtures/         # Datos de prueba
│   │   └── playwright.config.ts
│   ├── manual/               # Pruebas manuales (smoke, regresión, exploratorio)
│   ├── export/               # Exportación de casos (.xls / .csv)
│   ├── TEST_SCENARIOS.md     # Documentación de escenarios
│   └── test-plan.md          # Plan de pruebas general
├── scripts/
│   ├── generate-cv-pdf.mjs   # Generador de PDF del CV
│   └── export-test-cases.mjs # Exportador de casos de prueba
├── .github/workflows/        # CI/CD (lint + build + deploy)
├── PROMPT.md                 # Prompt para creadores de portafolio
├── PROMPT-LLM.md             # Prompt optimizado para LLMs
└── ARCHITECTURE.md           # Documentación de arquitectura
```

## Datos del CV

Los datos corresponden a **Edwin Tovar**, Senior QA Engineer especializado en aseguramiento de calidad para plataformas Fintech, bancarias y de pago.

### Experiencia

| Empresa | Rol | Período |
|---------|-----|-----------|
| SOFI | Senior QA Engineer | 2023 — Abril 2026 |
| Banco ICBC / IT Patagonia | QA Tester Agile | 2022 — 2023 |
| Prisma Medios de Pagos | Business Analyst III | 2021 — 2022 |
| Banco Galicia / Voolkia | Functional Analyst / Senior QA Tester | 2019 — 2021 |
| Banesco Banco Universal | Functional Analyst / QA Tester | 2014 — 2018 |

### Proyectos destacados

- AI-Driven Test Automation Suite
- Fintech QA Platform
- Accessibility Testing Framework
- Corporate Home Banking Testing
- Professional Portfolio Website

## Características implementadas

1. **Arquitectura basada en componentes** - 7 componentes atómicos con props tipadas
2. **Data-driven** - Datos consumidos desde `data.json` (no hardcodeados)
3. **data-testid** - Todos los elementos interactivos tienen atributos para E2E
4. **Responsive** - Menú mobile con hamburger toggle, grid 1/2 columnas
5. **Accesibilidad** - Roles ARIA, aria-label, aria-expanded, aria-required
6. **Dark mode** - Soporte completo via `prefers-color-scheme`
7. **i18n** - Traducciones ES/EN para toda la UI con contexto React
8. **SSG** - Generación estática para máximo rendimiento
9. **CV PDF** - Generación automática de CV bilingüe en PDF
10. **Testing E2E** - 37 tests automatizados + 14 casos manuales

## Cobertura de pruebas

| Tipo | Cantidad | Estado |
|------|----------|--------|
| Smoke Tests Manuales | 6 | ✅ Documentados |
| Regression Tests Manuales | 8 | ✅ Documentados |
| Tests Automatizados (UI) | 30 | ✅ Playwright + POM |
| Tests Automatizados (API) | 7 | ✅ Playwright HTTP |
| **Total** | **51** | ✅ |

## Despliegue

El proyecto se despliega automáticamente a GitHub Pages mediante GitHub Actions al hacer push a `master`:
- **URL:** https://etovara.github.io/portfolio
- **CI:** Lint + Build en PRs a `master` y `testing`
- **Deploy:** Push a `master` → build + deploy a GitHub Pages

## Licencia

MIT
