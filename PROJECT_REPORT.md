# Informe del Proyecto — Portfolio Edwin Tovar

## 1. Resumen

Portfolio profesional tipo landing page para **Edwin Tovar** — Senior QA Engineer especializado en Fintech, Banca y Medios de Pago. Construido con Next.js 16, TypeScript, Tailwind CSS v4. Incluye internacionalización ES/EN, modo oscuro y suite completa de testing E2E con Playwright.

---

## 2. Stack Tecnológico

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Next.js (App Router, SSG) | 16.2.6 |
| Lenguaje | TypeScript | ~5 |
| Estilos | Tailwind CSS | v4 |
| Fuentes | Geist Sans / Geist Mono | next/font |
| Testing E2E | Playwright | ^1.60.0 |
| Linter | ESLint | ^9 |

---

## 3. Estructura del Proyecto

```
portfolio/
├── public/                          # Assets estáticos / CV PDFs
│   ├── cv/
│   │   ├── Edwin_Tovar_CV_ATS_EN.pdf
│   │   ├── Edwin_Tovar_CV_ATS_ES.pdf
│   │   ├── Edwin_Tovar_CV_Professional_EN.pdf
│   │   └── Edwin_Tovar_CV_Professional_ES.pdf
│   └── Edwin_Foto.jpeg              # Foto de perfil
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── Header.tsx               # Navegación + toggle idioma
│   │   ├── Hero.tsx                 # Presentación + CTA + redes
│   │   ├── About.tsx                # Bio profesional bilingüe
│   │   ├── Experience.tsx           # Timeline laboral
│   │   ├── Projects.tsx             # Grid de proyectos
│   │   ├── Contact.tsx              # Formulario de contacto
│   │   └── Footer.tsx               # Copyright + navegación
│   ├── data/
│   │   └── data.json                # Datos centralizados (CV)
│   ├── i18n/
│   │   ├── en.json                  # Traducciones UI inglés
│   │   ├── es.json                  # Traducciones UI español
│   │   ├── LanguageContext.tsx       # Contexto React + Provider
│   │   └── index.ts                 # Re-exports
│   ├── types/
│   │   └── index.ts                 # Interfaces TypeScript
│   └── utils/
│       └── lang.ts                  # resolveText() utility
├── testing/
│   ├── automation/                  # Pruebas automatizadas (Playwright)
│   │   ├── pages/                   # 7 Page Objects + BasePage
│   │   ├── specs/                   # 7 spec files (37 tests EN + ES)
│   │   ├── fixtures/
│   │   │   └── test-data.ts         # Datos de prueba centralizados
│   │   └── playwright.config.ts
│   ├── manual/                      # Pruebas manuales documentadas
│   │   ├── smoke-tests.md           # 6 casos críticos
│   │   ├── regression-tests.md      # 8 casos de regresión
│   │   └── exploratory-checklist.md # Checklist de exploración
│   ├── TEST_SCENARIOS.md            # Mapa de 81 escenarios
│   └── test-plan.md                 # Plan de QA general
├── scripts/
│   └── generate-cv-pdf.mjs          # Generador de CV en PDF
├── ARCHITECTURE.md                  # Documentación de arquitectura
├── PROMPT.md                        # Formulario de replicación para IA
├── RECRUITER_PROFILE_FORM.md        # Formulario para reclutadores
├── RECRUITER_PROFILE_FILLED.md      # Formulario completado
├── AGENTS.md                        # Instrucciones para agentes IA
├── CLAUDE.md                        # Reglas de codificación
└── README.md                        # Documentación del proyecto
```

---

## 4. Componentes

| Componente | data-testid | Props | Funcionalidad |
|---|---|---|---|
| Header | `nav-logo`, `lang-toggle`, `nav-link-*` | — | Nav fija, menú responsive, toggle ES/EN |
| Hero | `hero-name`, `hero-role`, `hero-tagline`, `hero-cta-*`, `hero-linkedin` | personal | Presentación, CTA, redes sociales |
| About | `about-heading`, `about-bio`, `about-location` | personal | Bio profesional bilingüe + ubicación |
| Experience | `experience-heading`, `experience-item-*` | experience[] | Timeline laboral con tecnologías |
| Projects | `projects-heading`, `project-card-*` | projects[] | Grid de proyectos con enlaces |
| Contact | `contact-heading`, `contact-form`, `contact-name`, `contact-email`, `contact-message`, `contact-submit`, `contact-success` | email | Formulario con validación y envío |
| Footer | `footer-copyright`, `footer-back-to-top` | name | Copyright + navegación |

---

## 5. Internacionalización (i18n)

- **Contexto React** con `LanguageProvider` + hook `useLanguage()`
- Traducciones UI en `src/i18n/{es,en}.json`
- Textos del CV en `src/data/data.json` con estructura `{ en, es }`
- `resolveText()` en `src/utils/lang.ts` para resolver contenido bilingüe
- Toggle manual con botón ES/EN en el header
- Idioma por defecto: español

---

## 6. Datos del CV (data.json)

### Personal
- **Nombre:** Edwin Tovar
- **Rol:** QA Engineer | Manual & Automation Testing | AI-Driven QA
- **Ubicación:** Buenos Aires, Argentina
- **Email:** edwintovaraladejo@gmail.com
- **LinkedIn:** linkedin.com/in/edwintovar

### Experiencia (5 entradas)
| Empresa | Rol | Período |
|---|---|---|
| SOFI | Senior QA Engineer | 2023 — Presente |
| Banco ICBC / IT Patagonia | QA Tester Agile | 2022 |
| Prisma Medios de Pagos | Business Analyst III | 2021 — 2022 |
| Banco Galicia / Voolkia Software | Functional Analyst / Senior QA Tester | 2019 — 2021 |
| Banesco Banco Universal | Functional Analyst / QA Tester | 2012 — 2018 |

### Proyectos (4)
1. AI-Driven Test Automation Suite
2. Fintech QA Platform
3. Accessibility Testing Framework
4. Corporate Home Banking Testing

---

## 7. Testing

### Automatizado (Playwright)
- **37 tests × 2 navegadores** (Chromium + Mobile Chrome) = **74 tests**
- 7 spec files con Page Object Model
- API/HTTP tests: status codes, sitemap, seguridad, recursos rotos
- Tests de i18n: cambio de idioma verifica contenido del CV bilingüe

### Manual
- 6 smoke tests críticos
- 8 pruebas de regresión
- Checklist exploratorio (~30 items)
- **81 escenarios** documentados en TEST_SCENARIOS.md

### Cobertura
| Tipo | Cantidad | Estado |
|---|---|---|
| UI Automatizados | 30 | ✅ Pasan |
| API/HTTP | 7 | ✅ Pasan |
| Smoke Manuales | 6 | 📋 Documentados |
| Regression Manuales | 8 | 📋 Documentados |
| Exploratorio | ~30 items | 📋 Documentados |

---

## 8. CV en PDF

Ubicados en `public/cv/`:

| Archivo | Tamaño | Uso |
|---|---|---|
| Edwin_Tovar_CV_Professional_EN.pdf | 134 KB | CV visual inglés |
| Edwin_Tovar_CV_Professional_ES.pdf | 135 KB | CV visual español |
| Edwin_Tovar_CV_ATS_EN.pdf | 92 KB | CV ATS inglés |
| Edwin_Tovar_CV_ATS_ES.pdf | 94 KB | CV ATS español |

Generados con Playwright desde `scripts/generate-cv-pdf.mjs`.

---

## 9. Estado Actual

| Aspecto | Estado |
|---|---|
| Build | ✅ `npm run build` exitoso |
| Tests E2E (74) | ✅ 74/74 pasan |
| Lint | ✅ ESLint configurado |
| Responsive | ✅ Desktop + Mobile (Pixel 5) |
| Dark Mode | ✅ `prefers-color-scheme` |
| i18n ES/EN | ✅ Contexto React + data.json |
| SEO | ✅ Sitemap + meta tags |
| Modo offline | ⬜ No implementado |
| CI/CD | ⬜ No configurado |
| Firefox browser | ⬜ No instalado |

---

## 10. Archivos Clave

| Archivo | Propósito |
|---|---|
| `src/data/data.json` | Datos centralizados del CV (bilingüe) |
| `src/utils/lang.ts` | Utilidad `resolveText()` para i18n de datos |
| `testing/automation/pages/BasePage.ts` | Clase base POM con métodos comunes |
| `testing/automation/fixtures/test-data.ts` | Datos de prueba + keywords de aserciones |
| `testing/TEST_SCENARIOS.md` | Mapa completo de 81 escenarios de prueba |
| `testing/test-plan.md` | Plan de QA con criterios entrada/salida |
| `scripts/generate-cv-pdf.mjs` | Generador de CV profesional y ATS |
| `RECRUITER_PROFILE_FORM.md` | Formulario para reclutadores / agente IA |
| `PROMPT.md` | Formulario de replicación del portafolio |
| `ARCHITECTURE.md` | Documentación detallada de arquitectura |
