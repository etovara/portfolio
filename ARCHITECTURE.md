# Arquitectura del Proyecto — Portfolio Edwin Tovar

## 1. Resumen

Single Page Application (SPA) tipo landing page desarrollada con **Next.js 16**, **TypeScript** y **Tailwind CSS v4**. Funciona como portafolio profesional de Edwin Tovar, QA Engineer Senior.

| Atributo | Valor |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Lenguaje** | TypeScript (strict mode) |
| **Estilos** | Tailwind CSS v4 + PostCSS |
| **Fuentes** | Geist Sans / Geist Mono (`next/font/google`) |
| **Estado global** | React Context (i18n únicamente) |
| **Datos** | Archivo JSON centralizado (`data.json`) |
| **Test E2E** | Playwright (vía atributos `data-testid`) |
| **Rendimiento** | Static Generation (SSG) |

---

## 2. Estructura de Directorios

```
portfolio/
├── public/                          # Assets estáticos (SVGs, favicon)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                         # App Router de Next.js
│   │   ├── globals.css              # Estilos globales + Tailwind
│   │   ├── layout.tsx               # Layout raíz con LanguageProvider
│   │   ├── page.tsx                 # Página principal (ruta /)
│   │   ├── sitemap.ts               # Sitemap dinámico para SEO
│   │   └── favicon.ico
│   ├── components/                  # Componentes React (todos "use client")
│   │   ├── Header.tsx               # Navegación fija + menú responsive
│   │   ├── Hero.tsx                 # Presentación + CTA + redes sociales
│   │   ├── About.tsx                # Biografía + ubicación
│   │   ├── Experience.tsx           # Línea de tiempo laboral
│   │   ├── Projects.tsx             # Grilla de proyectos
│   │   ├── Contact.tsx              # Formulario de contacto
│   │   └── Footer.tsx               # Copyright + volver arriba
│   ├── data/
│   │   └── data.json                # Datos centralizados del CV
│   ├── i18n/                        # Internacionalización manual
│   │   ├── en.json                  # Traducciones al inglés
│   │   ├── es.json                  # Traducciones al español
│   │   ├── LanguageContext.tsx       # Context Provider + hook
│   │   └── index.ts                 # Barrel de exportaciones
│   └── types/
│       └── index.ts                 # Interfaces TypeScript
├── package.json                     # Dependencias y scripts
├── tsconfig.json                    # Configuración de TypeScript
├── next.config.ts                   # Configuración de Next.js
├── postcss.config.mjs               # Configuración de PostCSS
├── eslint.config.mjs                # Configuración de ESLint
├── AGENTS.md                        # Instrucciones para agentes AI
├── ARCHITECTURE.md                  # ← Este documento
└── README.md                        # Documentación del proyecto
```

---

## 3. Árbol de Componentes

```
<RootLayout>                    ← layout.tsx (fuentes, metadata, LanguageProvider)
  └─ <LanguageProvider>         ← i18n/LanguageContext.tsx
       └─ <Home>                ← page.tsx (ruta /)
            ├─ <Header />       ← Navegación fija + toggle idioma
            ├─ <Hero />         ← Presentación + CTA + sociales
            ├─ <About />        ← Biografía + ubicación
            ├─ <Experience />   ← Timeline laboral
            ├─ <Projects />     ← Grilla de proyectos
            ├─ <Contact />      ← Formulario de contacto
            └─ <Footer />       ← Copyright + volver arriba
```

### Flujo de props

```
page.tsx
  ├─ data.json ──┬──> PortfolioData
  │              ├── personal ──> Hero, About
  │              ├── experience ──> Experience
  │              └── projects ──> Projects
  └─ personal.email ──> Contact
      personal.name ──> Footer
```

Todos los componentes son "hojas" del árbol: no tienen hijos propios, solo renderizan datos recibidos por props o del hook `useLanguage()`.

---

## 4. Flujo de Datos

```
data.json (fuente única de verdad)
     │
     ▼
page.tsx (importa y tipa con PortfolioData)
     │
     ├── personal ──────────────────► Hero.tsx, About.tsx
     ├── experience ────────────────► Experience.tsx
     ├── projects ──────────────────► Projects.tsx
     ├── personal.email ────────────► Contact.tsx
     └── personal.name ─────────────► Footer.tsx
```

### Internacionalización

```
LanguageContext.tsx (Provider → estado "es" | "en")
     │
     ├── t = translations[lang] ──► Todos los componentes (vía useLanguage())
     ├── lang ─────────────────────► Header, Hero, Contact, Footer
     └── toggleLanguage() ─────────► Header (botón ES/EN)
```

El sistema i18n:
- **No requiere librerías externas** — implementación manual con React Context.
- Las traducciones se importan estáticamente (`import es from "./es.json"`) — no hay carga asíncrona.
- El hook `useLanguage()` tiene un guard: lanza error si se usa fuera del `<LanguageProvider>`.

---

## 5. Sistema de Rutas

| Ruta | Archivo | Tipo |
|---|---|---|
| `/` | `src/app/page.tsx` | Página única SPA |
| `/sitemap.xml` | `src/app/sitemap.ts` | Sitemap dinámico generado por Next.js |

La navegación entre secciones dentro de la misma página se maneja mediante **hash anchors** (`#about`, `#experience`, `#projects`, `#contact`, `#hero`) con scroll suave habilitado por la clase `scroll-smooth` en el `<html>`.

---

## 6. Decisiones Técnicas

### 6.1 ¿Por qué Next.js para una SPA?
Next.js proporciona SSG (Static Site Generation) listo para producción, optimización de imágenes, gestión de fuentes tipográficas, metadatos SEO y despliegue directo en Vercel. Aunque es una SPA, aprovecha el ecosistema de Next.js para build, lint y deploy.

### 6.2 ¿Por qué React Context en vez de useState + props drilling?
El contexto de idioma necesita llegar a componentes anidados arbitrariamente. `useLanguage()` simplifica el acceso sin prop drilling. Para el resto del estado (menú móvil, formulario), se usa `useState` local.

### 6.3 ¿Por qué i18n manual en vez de next-intl / react-i18next?
El proyecto tiene solo 2 idiomas y ~40 frases. Una librería externa agregaría complejidad innecesaria. La implementación manual con Context + JSON es mantenible y predecible.

### 6.4 ¿Por qué data.json en vez de CMS / headless?
Para un portafolio personal estático, un archivo JSON es suficiente. Sigue el principio de "data-driven": cambiar el contenido no requiere tocar componentes.

### 6.5 ¿Por qué "use client" en todos los componentes?
Porque todos usan `useLanguage()` que depende de React Context (solo disponible en el cliente). En Next.js 16, los componentes del App Router son Server Components por defecto; se marca `"use client"` cuando se necesita interactividad.

---

## 7. Estilos y Temas

- **Framework:** Tailwind CSS v4 con `@tailwindcss/postcss`.
- **Tema oscuro:** Activado por `prefers-color-scheme: dark` (preferencia del sistema).
- **Fuentes:** Geist Sans para textos generales, Geist Mono para código (`next/font/google`).
- **Iconos:** SVGs inline (no se usa librería de iconos externa).
- **Responsive:** Breakpoints de Tailwind (`sm:`, `md:`) para menú móvil y grillas.

### Variables CSS personalizadas

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

---

## 8. Accesibilidad

Cada componente implementa las siguientes prácticas:

| Práctica | Implementación |
|---|---|
| Roles ARIA | `role="banner"`, `role="contentinfo"`, `role="alert"` |
| Etiquetas | `aria-label` traducido por idioma en secciones y navegación |
| Estados | `aria-expanded` en menú móvil, `aria-controls` vinculado |
| Formularios | `aria-required="true"`, `<label>` con `htmlFor`/`id` |
| Semántica | `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` |

---

## 9. Testing (E2E)

Todos los elementos interactivos y secciones tienen el atributo `data-testid` con nombres predecibles:

```tsx
data-testid="nav-logo"
data-testid="lang-toggle"
data-testid="hero-cta-projects"
data-testid="experience-item-exp-1"
data-testid="project-card-proj-1"
data-testid="contact-submit"
```

Esto permite escribir tests Playwright de forma robusta sin depender de selectores CSS frágiles.

---

## 10. Despliegue

- **Plataforma:** Vercel (recomendado por ser el creador de Next.js)
- **Build:** `npm run build` → Genera archivos estáticos
- **CI/CD:** Push a la rama principal → Vercel deploy automático
- **Configuración:** `next.config.ts` vacío (comportamiento default de SSG)

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo en `localhost:3000` |
| `npm run build` | Build de producción con Next.js |
| `npm start` | Servir build de producción |
| `npm run lint` | Ejecutar ESLint |

---

## 11. Dependencias

### Producción
| Paquete | Versión |
|---|---|
| `next` | ^16.2.6 |
| `react` | ^19.2.4 |
| `react-dom` | ^19.2.4 |

### Desarrollo
| Paquete | Versión |
|---|---|
| `@tailwindcss/postcss` | ^4 |
| `@types/node` | ^20 |
| `@types/react` | ^19 |
| `@types/react-dom` | ^19 |
| `eslint` | ^9 |
| `eslint-config-next` | 16.2.6 |
| `tailwindcss` | ^4 |
| `typescript` | ^5 |

---

## 12. Convenciones de Código

- **Nombres:** `PascalCase` para componentes y tipos, `camelCase` para funciones y variables.
- **Props:** Tipadas con interfaces, destructuradas en la firma del componente.
- **Traducciones:** Acceso jerárquico: `t.seccion.clave`.
- **IDs de datos:** Prefijo `exp-` para experiencias y `proj-` para proyectos.
- **Atributos de test:** Siempre `data-testid` con formato `{componente}-{elemento}-{id}`.
