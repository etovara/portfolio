# 🚀 Professional Portfolio - Edwin Tovar | SDET Architecture

Este no es un portafolio común. Es una **plataforma de ingeniería de calidad** diseñada para demostrar la aplicación de principios **Staff SDET** en el desarrollo moderno. He eliminado la burocracia del QA manual para centrarme en una **Arquitectura de Calidad de Alto ROI**.

## 🛠️ High-Quality Engineering Stack

- **Core:** Next.js 16 (App Router, SSG) + TypeScript (Strict).
- **Styling:** Tailwind CSS v4 + PostCSS.
- **Testing Engine:** Playwright con **Visual Regression** y **Data-Driven Testing (DDT)**.
- **CI/CD:** Pipeline unificado en GitHub Actions (Lint -> Build -> Test -> Deploy).
- **IA Integration:** Diseñado para extensibilidad con agentes de IA (Gemini CLI).

## 🏗️ Calidad Basada en Ingeniería (SDET)

He sustituido los planes de prueba estáticos por una arquitectura de código viva:

### 1. Data-Driven Testing (DDT)
En lugar de verificar manualmente si los datos del CV están correctos, el motor de pruebas (`engine.spec.ts`) consume directamente `data.json` y valida dinámicamente que la UI sea el reflejo exacto de la fuente de verdad.
- **ROI:** Cero mantenimiento manual de casos de prueba de contenido.

### 2. Visual Regression Testing
Automatizamos lo que el ojo humano suele omitir. El sistema captura snapshots de la página completa en múltiples viewports (Desktop/Mobile) y los compara contra una línea base.
- **ROI:** Detección instantánea de *layout shifts*, fuentes rotas o errores de CSS.

### 3. Pipeline de Integración Continua (CI/CD)
Un flujo lineal y robusto que garantiza que **nada se despliega si no es perfecto**:
1. **Linting:** Calidad estática del código.
2. **Build:** Validación de integridad del sistema.
3. **Smoke/DDT/Visual Tests:** Validación de experiencia de usuario y datos.
4. **Deploy:** Despliegue automático a GitHub Pages (solo en éxito total).

## 🚀 Ejecución y Desarrollo

```bash
# Instalar dependencias
npm ci

# Ejecutar el "Engine" de calidad (E2E + Visual)
npm run test:e2e

# Generar CV en PDF (usando Playwright como motor de renderizado)
node scripts/generate-cv-pdf.mjs
```

## 📊 Arquitectura del Proyecto

```
portfolio/
├── src/
│   ├── app/                  # Next.js App Router
│   ├── data/
│   │   └── data.json         # Fuente única de verdad (SSOT)
│   └── i18n/                 # Gestión de estado de idioma
├── testing/
│   └── automation/
│       ├── specs/
│       │   └── engine.spec.ts # Motor de Calidad (DDT + Visual)
│       └── playwright.config.ts
├── .github/workflows/
│   └── ci.yml                # Pipeline Unificado (SSDT Standard)
└── AGENTS.md                 # Protocolo de Agente Principal
```

## 🎯 Por qué esta arquitectura?
Un SDET no solo testea; construye sistemas que eliminan la necesidad de testear manualmente. Este portafolio demuestra que la calidad no es una fase, sino una **propiedad intrínseca del sistema**.

---
**Edwin Tovar** - Staff SDET & Strategic Advisor
[LinkedIn](https://linkedin.com/in/edwintovar) | [GitHub](https://github.com/etovara)
