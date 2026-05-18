# 📋 Plan Integral de Pruebas — Portfolio Edwin Tovar

## Estructura del Proyecto de Pruebas

```
testing/
├── TEST_SCENARIOS.md          ← Este documento
├── test-plan.md               ← Plan de pruebas general
├── automation/                ← Pruebas automatizadas (Playwright)
│   ├── pages/                 ← Page Objects (POM)
│   │   ├── BasePage.ts        ← Clase base con métodos comunes
│   │   ├── HomePage.ts        ← Navegación y header
│   │   ├── HeroSection.ts     ← Sección de presentación
│   │   ├── AboutSection.ts    ← Sección "Sobre mí"
│   │   ├── ExperienceSection.ts ← Línea de tiempo
│   │   ├── ProjectsSection.ts ← Grilla de proyectos
│   │   ├── ContactSection.ts  ← Formulario de contacto
│   │   ├── FooterSection.ts   ← Pie de página
│   │   └── index.ts           ← Barrel exports
│   ├── specs/                 ← Tests automatizados
│   │   ├── navigation.spec.ts ← Tests de navegación (5)
│   │   ├── hero.spec.ts       ← Tests del hero (5)
│   │   ├── about.spec.ts      ← Tests del about (3)
│   │   ├── experience.spec.ts ← Tests de experiencia (3)
│   │   ├── projects.spec.ts   ← Tests de proyectos (3)
│   │   ├── contact.spec.ts    ← Tests de contacto (5)
│   │   ├── footer.spec.ts     ← Tests del footer (2)
│   │   ├── i18n.spec.ts       ← Tests de idioma (4)
│   │   └── api.spec.ts        ← Tests de HTTP/API (7)
│   ├── fixtures/
│   │   └── test-data.ts       ← Datos de prueba centralizados
│   └── playwright.config.ts   ← Configuración de Playwright
├── manual/
│   ├── smoke-tests.md         ← Smoke tests manuales (6)
│   ├── regression-tests.md    ← Pruebas de regresión manuales (8)
│   └── exploratory-checklist.md ← Checklist de exploración (~30 items)
├── export/                    ← Exportación de casos de prueba
│   ├── manual-test-cases.xls  ← 14 casos manuales en Excel
│   ├── automation-test-cases.xls ← 37 casos automatizados en Excel
│   ├── manual-test-cases.csv  ← 14 casos manuales en CSV
│   └── automation-test-cases.csv ← 37 casos automatizados en CSV
└── scripts/
    └── export-test-cases.mjs  ← Generador de exportación
```

---

## Resumen de Escenarios

| Tipo | Cantidad | Cobertura |
|---|---|---|
| 🧪 Smoke Tests Manuales | 6 | Funcionalidad crítica |
| 🔄 Regression Tests Manuales | 8 | Funcionalidad existente |
| 🔍 Checklist Exploratorio | ~30 items | Visual, responsive, accesibilidad |
| 🤖 Tests Automatizados (UI) | 30 | Navegación, secciones, i18n, formulario |
| 🌐 Tests Automatizados (API) | 7 | HTTP status, sitemap, seguridad |
| 📊 Casos exportados | 51 (14 manual + 37 auto) | Formato .xls / .csv |
| **Total** | **~81 escenarios** | |

---

## 1. 🧪 Escenarios de Smoke Test (Manuales)

Estos tests se ejecutan **siempre** después de cada cambio o deploy.

| ID | Escenario | Prioridad | Cobertura Automatizada |
|---|---|---|---|
| SMOKE-01 | Carga de página principal sin errores | 🔴 Alta | ✅ api.spec.ts |
| SMOKE-02 | Navegación por anclas (#about, #experience, etc.) | 🔴 Alta | ✅ hero.spec.ts |
| SMOKE-03 | Toggle de idioma ES ↔ EN | 🔴 Alta | ✅ i18n.spec.ts |
| SMOKE-04 | Envío de formulario de contacto | 🟡 Media | ✅ contact.spec.ts |
| SMOKE-05 | Menú responsive hamburguesa en móvil | 🔴 Alta | ✅ navigation.spec.ts |
| SMOKE-06 | Modo oscuro automático | 🟡 Media | ❌ Manual |

---

## 2. 🔄 Escenarios de Regresión (Manuales)

| ID | Escenario | Prioridad | Cobertura Automatizada |
|---|---|---|---|
| REG-01 | Enlaces externos de proyectos | 🟡 Media | ❌ Manual |
| REG-02 | Enlace mailto de contacto | 🟡 Media | ❌ Manual |
| REG-03 | Enlaces a redes sociales | 🟡 Media | ✅ hero.spec.ts |
| REG-04 | Scroll suave entre secciones | 🟢 Baja | ❌ Manual |
| REG-05 | Footer con año dinámico | 🟢 Baja | ✅ footer.spec.ts |
| REG-06 | Timeline de experiencia completa | 🔴 Alta | ✅ experience.spec.ts |
| REG-07 | Grilla responsive de proyectos | 🔴 Alta | ✅ projects.spec.ts |
| REG-08 | Validación HTML5 del formulario | 🟡 Media | ✅ contact.spec.ts |

---

## 3. 🔍 Checklist Exploratorio

Áreas a explorar manualmente sin scripts predefinidos:

| Área | Items | Prioridad |
|---|---|---|
| **Visual** | Elementos superpuestos, SVG rotos, fuentes | 🟡 Media |
| **Responsive** | 7 resoluciones (320px → 1920px) | 🔴 Alta |
| **Datos** | Bio, experiencia (5), proyectos (4), tecnologías | 🔴 Alta |
| **Accesibilidad** | Navegación teclado, lectores de pantalla, contraste | 🟡 Media |
| **Rendimiento** | Carga < 3s, cambio idioma instantáneo, peticiones fallidas | 🟡 Media |

---

## 4. 🤖 Escenarios Automatizados (E2E — POM)

### Page Objects (POM)

Cada sección del portafolio tiene su propia clase Page Object:

| Page Object | Métodos principales |
|---|---|
| `BasePage` | goto, assertVisible, assertText, click, fill, getText |
| `HomePage` | getNavLogo, getLangToggle, clickLangToggle, getDesktopNavLink, getMobileNavLink |
| `HeroSection` | getRole, getName, getTagline, clickCtaProjects, clickCtaContact |
| `AboutSection` | getHeading, getBio, getLocation, assertBioContains |
| `ExperienceSection` | getHeading, getItemIds, getItemCount |
| `ProjectsSection` | getHeading, getCardIds, getCardCount |
| `ContactSection` | getForm, submitContactForm, getSuccessMessage, getEmailLink |
| `FooterSection` | getCopyright, getBackToTopLink |

### Tests de UI (30 tests)

| Archivo | Test | ID |
|---|---|---|
| **navigation.spec.ts** | Logo ET visible | NAV-01 |
| | Toggle de idioma visible | NAV-02 |
| | Enlaces desktop visibles | NAV-03 |
| | Menú móvil funciona | NAV-04 |
| | Toggle idioma alterna | NAV-05 |
| **hero.spec.ts** | Nombre del autor visible | HERO-01 |
| | Rol profesional visible | HERO-02 |
| | Tagline visible | HERO-03 |
| | CTA navegan a secciones | HERO-04 |
| | LinkedIn presente | HERO-05 |
| **about.spec.ts** | Encabezado visible | ABOUT-01 |
| | Biografía visible y no vacía | ABOUT-02 |
| | Ubicación visible | ABOUT-03 |
| **experience.spec.ts** | Encabezado visible | EXP-01 |
| | Lista de experiencias > 0 | EXP-02 |
| | Cada item tiene rol, período, empresa | EXP-03 |
| **projects.spec.ts** | Encabezado visible | PROJ-01 |
| | Tarjetas de proyecto > 0 | PROJ-02 |
| | Cada tarjeta tiene título y descripción | PROJ-03 |
| **contact.spec.ts** | Encabezado visible | CONT-01 |
| | Formulario visible | CONT-02 |
| | Campos requeridos presentes | CONT-03 |
| | Envío muestra éxito | CONT-04 |
| | Enlace email alternativo | CONT-05 |
| **footer.spec.ts** | Copyright con nombre | FOOT-01 |
| | Enlace volver arriba | FOOT-02 |
| **i18n.spec.ts** | Idioma default = español | I18N-01 |
| | Cambio a inglés actualiza textos | I18N-02 |
| | Botón refleja idioma actual | I18N-03 |
| | Contenido CV cambia con idioma | I18N-04 |

### Tests de API (7 tests)

| Archivo | Test | ID | Método HTTP |
|---|---|---|---|
| **api.spec.ts** | GET / → 200 | API-01 | GET |
| | GET /sitemap.xml → XML válido | API-02 | GET |
| | GET /ruta-inexistente → 404 | API-03 | GET |
| | Headers de seguridad (content-type) | API-04 | GET |
| | Meta tags SEO presentes | API-05 | GET |
| | Sitemap contiene URL principal | API-06 | GET |
| | No hay recursos rotos (4xx/5xx) | API-07 | GET (navegación) |

---

## 5. 📊 Matriz de Cobertura por Componente

| Componente | Tests Manuales | Tests Automatizados | Cobertura |
|---|---|---|---|
| **Header/Nav** | SMOKE-02, SMOKE-05 | NAV-01 al NAV-05 | ✅ Completa |
| **Hero** | — | HERO-01 al HERO-05 | ✅ Completa |
| **About** | REG-06 | ABOUT-01 al ABOUT-03 | ✅ Completa |
| **Experience** | REG-06 | EXP-01 al EXP-03 | ✅ Completa |
| **Projects** | REG-01, REG-07 | PROJ-01 al PROJ-03 | ✅ Completa |
| **Contact** | SMOKE-04, REG-02, REG-08 | CONT-01 al CONT-05 | ✅ Completa |
| **Footer** | REG-04, REG-05 | FOOT-01, FOOT-02 | ✅ Completa |
| **i18n** | SMOKE-03 | I18N-01 al I18N-04 | ✅ Completa |
| **API/SEO** | — | API-01 al API-07 | ✅ Completa |
| **Dark Mode** | SMOKE-06 | ❌ | ⚠️ Pendiente |
| **Accesibilidad** | Exploratorio | ❌ | ⚠️ Pendiente |

---

## 6. 🚀 Ejecución

### Tests Automatizados

```bash
# Todos los tests (Chromium + Mobile)
npm run test:e2e

# Solo Chromium desktop
npx playwright test --project=chromium

# Modo UI interactivo
npm run test:e2e:ui

# Modo debug (paso a paso)
npm run test:e2e:debug

# Tests específicos (ruta relativa a automation/)
npx playwright test specs/i18n.spec.ts -c testing/automation/playwright.config.ts

# Reporte HTML (se genera automáticamente en /playwright-report)
npx playwright show-report
```

### Pruebas Manuales

Seguir los casos en `testing/manual/smoke-tests.md` para smoke tests o `testing/manual/regression-tests.md` para regresión completa.

---

## 7. 📝 Convenciones de nomenclatura

| Elemento | Formato | Ejemplo |
|---|---|---|
| IDs de tests | `{MODULO}-{NN}` | `NAV-01`, `I18N-04` |
| Test cases manuales | `TC-{TIPO}-{NN}` | `TC-SMOKE-01`, `TC-REG-05` |
| data-testid | `{componente}-{elemento}[-{id}]` | `hero-cta-projects`, `experience-item-exp-1` |
| Page Objects | `{Nombre}Section` | `HeroSection`, `ContactSection` |
| Archivos spec | `{modulo}.spec.ts` | `hero.spec.ts` |
| IDs de datos | Prefijo `exp-` o `proj-` | `exp-1`, `proj-3` |
