# 🧩 Prompt para LLM — Generar Portafolio Web Profesional

## Instrucciones para el usuario

1. Copia TODO este archivo
2. Pégalo en cualquier LLM (ChatGPT, Claude, Gemini, Copilot, etc.)
3. Responde las preguntas que el LLM te haga con tu información personal
4. Sigue las instrucciones para ejecutar el proyecto localmente

---

## Prompt para la IA

Eres un desarrollador experto en Next.js 16, TypeScript y Tailwind CSS v4. Vas a construir un portafolio web profesional tipo landing page (SPA) siguiendo esta arquitectura y convenciones exactas.

### Stack tecnológico obligatorio

- **Framework:** Next.js 16 con App Router
- **Lenguaje:** TypeScript (strict mode)
- **Estilos:** Tailwind CSS v4 + PostCSS
- **Fuentes:** Geist Sans y Geist Mono desde `next/font/google`
- **Testing:** Playwright con Page Object Model
- **Datos:** Archivo JSON centralizado en `src/data/data.json`
- **Estado global:** React Context (solo para i18n)
- **Atributos QA:** `data-testid` en TODOS los elementos interactivos
- **Build:** Static Generation (SSG) con `next.config.ts` configurado para output export

### Estructura de directorios exacta

```
portfolio/
├── public/                          # Assets estáticos (imágenes, SVGs)
│   └── cv/                          # PDFs generados del CV
├── src/
│   ├── app/
│   │   ├── globals.css              # Tailwind + variables CSS
│   │   ├── layout.tsx               # Layout raíz + LanguageProvider + metadata SEO
│   │   ├── page.tsx                 # Home: importa data.json, distribuye props
│   │   └── sitemap.ts               # Sitemap dinámico
│   ├── components/
│   │   ├── Header.tsx               # Nav fija, menú responsive, toggle ES/EN
│   │   ├── Hero.tsx                 # Presentación + CTA + redes sociales
│   │   ├── About.tsx                # Bio + ubicación + educación + certificaciones
│   │   ├── Experience.tsx           # Timeline laboral vertical
│   │   ├── Projects.tsx             # Grid responsive 1/2 columnas
│   │   ├── Contact.tsx              # Formulario con validación + éxito
│   │   └── Footer.tsx               # Copyright dinámico + volver arriba
│   ├── data/
│   │   └── data.json                # Datos del CV (personal, experience, projects, education, certifications)
│   ├── i18n/
│   │   ├── es.json                  # Traducciones al español
│   │   ├── en.json                  # Traducciones al inglés
│   │   ├── LanguageContext.tsx       # Provider + hook useLanguage
│   │   └── index.ts                 # Re-exportaciones
│   └── types/
│       └── index.ts                 # Interfaces: Personal, Experience, Project, Education, Certification, PortfolioData
├── testing/
│   ├── automation/
│   │   ├── pages/                   # Page Objects (POM)
│   │   │   ├── BasePage.ts
│   │   │   ├── HomePage.ts
│   │   │   ├── HeroSection.ts
│   │   │   ├── AboutSection.ts
│   │   │   ├── ExperienceSection.ts
│   │   │   ├── ProjectsSection.ts
│   │   │   ├── ContactSection.ts
│   │   │   ├── FooterSection.ts
│   │   │   └── index.ts
│   │   ├── specs/                   # Tests automatizados
│   │   │   ├── navigation.spec.ts   # 5 tests
│   │   │   ├── hero.spec.ts         # 5 tests
│   │   │   ├── about.spec.ts        # 3 tests
│   │   │   ├── experience.spec.ts   # 3 tests
│   │   │   ├── projects.spec.ts     # 3 tests
│   │   │   ├── contact.spec.ts      # 5 tests
│   │   │   ├── footer.spec.ts       # 2 tests
│   │   │   ├── i18n.spec.ts         # 4 tests
│   │   │   └── api.spec.ts          # 7 tests
│   │   ├── fixtures/
│   │   │   └── test-data.ts         # Datos de prueba
│   │   └── playwright.config.ts     # Config con proyectos chromium + mobile
│   ├── manual/
│   │   ├── smoke-tests.md           # 6 smoke tests
│   │   ├── regression-tests.md      # 8 regression tests
│   │   └── exploratory-checklist.md # Checklist exploratorio
│   ├── export/                      # Exportación de casos (.xls / .csv)
│   ├── TEST_SCENARIOS.md            # Documentación completa
│   └── test-plan.md                 # Plan de pruebas
├── scripts/
│   ├── generate-cv-pdf.mjs          # Genera CV bilingüe en PDF con Playwright
│   └── export-test-cases.mjs        # Exporta casos de prueba a CSV/XLS
├── .github/workflows/
│   ├── ci.yml                       # Lint + Build en PRs a master/testing
│   └── deploy-pages.yml             # Deploy automático a GitHub Pages
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── AGENTS.md                        # Instrucciones para agentes AI
├── ARCHITECTURE.md                  # Documentación de arquitectura
├── README.md                        # Documentación del proyecto
├── PROMPT.md                        # Prompt para creadores
└── PROMPT-LLM.md                    # Este archivo
```

### Convenciones de código

1. Todos los componentes son `"use client"` porque usan `useLanguage()` (React Context)
2. Props tipadas con interfaces, destructuradas en firma del componente
3. Traducciones: `t.seccion.clave` (ej: `t.hero.cta_projects`)
4. IDs de datos: prefijo `exp-` para experiencias, `proj-` para proyectos
5. `data-testid` con formato `{componente}-{elemento}[-{id}]`
6. Textos bilingües se resuelven con función `resolveText(obj, lang)` que recibe `{ en: string, es: string }`
7. Comentarios en español con acentos reales (sin escapes Unicode)
8. No usar librerías externas de i18n — implementación manual con Context + JSON

### Componentes y sus responsabilidades

**Header:** Nav fija con logo "ET", menú desktop con 4 links, toggle idioma ES/EN, menú hamburguesa para mobile con estado local `useState`.

**Hero:** Nombre, rol, tagline del `data.json`, botones CTA (Ver proyectos, Contactar, Descargar CV), iconos de redes sociales (LinkedIn obligatorio, GitHub opcional).

**About:** Biografía, ubicación geográfica, disponibilidad, autorización laboral, listado de educación, listado de certificaciones.

**Experience:** Timeline vertical con puntos conectados por línea, cada entrada muestra: rol, empresa, período, modalidad, descripción, tecnologías como pills.

**Projects:** Grid responsive (1 col móvil, 2 col desktop), cada tarjeta: icono carpeta, título, descripción, tecnologías, enlaces "Sitio" y "Código" (solo si existen).

**Contact:** Formulario con nombre, email, mensaje; validación HTML5; mensaje de éxito al enviar; fallback con enlace mailto directo.

**Footer:** Copyright con año dinámico `{new Date().getFullYear()}`, enlace "Volver arriba".

### Sistema de traducciones

```json
// es.json
{ "nav": { "about": "Sobre mí" }, "hero": { "cta_contact": "Contáctame" }, ... }

// en.json
{ "nav": { "about": "About Me" }, "hero": { "cta_contact": "Contact Me" }, ... }
```

Provider expone: `{ t, lang, toggleLanguage }` via `useLanguage()` hook.

### Datos del CV (data.json)

Estructura con estos campos top-level: `personal`, `experience[]`, `projects[]`, `education[]`, `certifications[]`.

Campos de texto bilingües usan formato: `{ "en": "...", "es": "..." }`.

### Testing

- Tests E2E con Playwright usando Page Object Model
- `data-testid` en todos los elementos
- Dos proyectos en playwright.config: Chromium desktop + Pixel 5 mobile
- GitHub Actions ejecuta lint + build en PRs
- Deploy automático a GitHub Pages en push a master

### Funcionalidades clave

1. Modo oscuro automático via `prefers-color-scheme`
2. Scroll suave entre secciones con hash anchors
3. Sitemap dinámico generado por Next.js
4. Roles ARIA y atributos de accesibilidad
5. Generación de CV en PDF (bilingüe, con foto)
6. Exportación de casos de prueba a formato CSV/XLS

### Preguntas para el usuario

Antes de generar código, pregúntame:

1. ¿Cuál es tu nombre completo y rol profesional?
2. ¿Cuál es tu frase/tagline profesional corta?
3. ¿Dónde estás ubicado y cuál es tu email?
4. ¿Tienes URLs de LinkedIn, GitHub o sitio web?
5. ¿Cuántas experiencias laborales tienes? Dame empresa, rol, período y descripción de cada una.
6. ¿Cuántos proyectos destacados tienes? Dame título, descripción y tecnologías.
7. ¿Tienes educación formal o certificaciones para listar?
8. ¿Idioma principal del sitio (español/inglés)?
9. ¿Incluyes formulario de contacto? ¿Sí o no?
10. ¿Vas a desplegar en GitHub Pages o Vercel?

---

## Después de generar el código

Ejecuta estos pasos para verificar:

```bash
npm ci                    # Instalar dependencias
npm run dev               # Iniciar servidor de desarrollo
npm run build             # Verificar build de producción
npm run lint              # Verificar linting
npm run test:e2e          # Ejecutar tests E2E
node scripts/export-test-cases.mjs  # Exportar casos de prueba
```

Para desplegar en GitHub Pages:
1. Sube el código a GitHub en una rama `master`
2. Activa GitHub Pages desde Actions en Settings
3. El workflow `.github/workflows/deploy-pages.yml` hará el deploy automático
