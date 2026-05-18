# 📋 Plan de Pruebas — Portfolio Personal

## 1. Información General

| Item | Descripción |
|---|---|
| **Proyecto** | Portfolio - Edwin Tovar |
| **Versión** | 0.1.0 |
| **Tipo de App** | SPA (Single Page Application) estática |
| **Framework** | Next.js 16 + TypeScript + Tailwind CSS v4 |
| **Responsable QA** | Edwin Tovar |

---

## 2. Alcance

### Dentro del alcance
- Navegación entre secciones (header, menú móvil)
- Visualización correcta de datos personales (hero, about)
- Timeline de experiencia laboral
- Grilla de proyectos
- Formulario de contacto
- Internacionalización ES/EN
- Diseño responsive (mobile, tablet, desktop)
- Meta tags SEO y sitemap
- Modo oscuro automático

### Fuera del alcance (por ahora)
- Backend / API de envío de emails
- Base de datos
- Autenticación de usuarios
- Carga de imágenes dinámicas

---

## 3. Estrategia de Pruebas

| Tipo | Herramienta | Ejecución | Responsable |
|---|---|---|---|
| Smoke Test | Manual | Después de cada cambio | QA |
| Regresión | Manual | Antes de cada release | QA |
| Exploratorio | Manual | Semanal | QA |
| E2E Automatizado | Playwright + POM | `npm run test:e2e` | CI/CD |
| API Automatizado | Playwright | `npm run test:e2e` | CI/CD |

---

## 4. Ambiente de Pruebas

| Ambiente | URL | Propósito |
|---|---|---|
| Local (development) | `http://localhost:3000` | Desarrollo diario |
| Testing | (futuro - Vercel preview) | Pruebas antes de producción |
| Producción | (futuro) | Sitio en vivo |

---

## 5. Criterios de Calidad

### ✅ Criterios de entrada (para iniciar pruebas)
- El código compila sin errores (`npm run build`)
- No hay errores de TypeScript
- Los tests pasan en Chromium

### 🚫 Criterios de salida (para liberar)
- Todos los smoke tests manuales pasan
- Tests automatizados: 100% pass rate en Chromium
- No hay bugs críticos o altos abiertos
- El build de producción se genera sin errores
- La página carga correctamente en 3 navegadores

---

## 6. Riesgos y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Rotura de layout responsive | Media | Alto | Tests visuales Playwright + checklist manual resoluciones |
| Traducciones incompletas | Baja | Medio | Test i18n valida todos los textos |
| Error en datos del CV | Baja | Alto | Revisión manual + test automatizado de contenido |
| Dependencias desactualizadas | Media | Medio | `npm audit` periódico + build semanal |

---

## 7. Herramientas

| Herramienta | Uso |
|---|---|
| **Playwright** | Automatización E2E + API |
| **VS Code** | IDE de desarrollo |
| **Git** | Control de versiones |
| **GitHub Actions** | CI/CD (futuro) |
| **Vercel** | Deploy (futuro) |

---

## 8. Reporte de Resultados

Los resultados de los tests automatizados se generan en:
- `playwright-report/index.html` — Reporte HTML interactivo
- `test-results/` — Capturas de pantalla en fallos
- Consola — Output en tiempo real con `npm run test:e2e`
