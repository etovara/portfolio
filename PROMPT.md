# 🧩 Crea tu Portafolio Web Personal con IA

## ¿Qué es esto?

Esto es un **formulario guiado** para que le entregues a una inteligencia artificial (ChatGPT, Claude, Gemini, etc.) y ella **solita te construya** un portafolio web profesional. Tú solo debes llenar tus datos personales en las secciones de abajo y pegarle todo el texto a la IA.

---

## Cómo usar este Prompt

**Paso 1:** Abre cualquier IA conversacional (ChatGPT, Claude, Gemini, etc.).

**Paso 2:** Copia TODO el contenido de este archivo (desde aquí hasta el final).

**Paso 3:** Pégalo en la IA.

**Paso 4:** La IA te hará preguntas si falta algo o empezará a construir tu portafolio.

**Paso 5:** Sigue las instrucciones que te dé la IA para poner tu portafolio en línea.

---

## 📋 FORMULARIO — Completa tus datos aquí

Copia y reemplaza los valores entre `[[corchetes]]` con tu información real.

### Tus datos personales

```
Nombre completo:    [[Ej: Edwin Tovar]]
Rol profesional:    [[Ej: QA Engineer | Manual & Automation Testing | AI-Driven QA]]
Frase corta:        [[Ej: 10+ años garantizando calidad en Fintech, Banca y Medios de Pago]]
Biografía:

[[Escribe 3-5 líneas sobre ti: quién eres, qué haces, cuántos años de
experiencia tienes, en qué industrias has trabajado y cuál es tu
especialidad.]]

Ubicación:          [[Ej: Buenos Aires, Argentina]]
Email:              [[ejemplo@correo.com]]
URL de LinkedIn:    [[https://linkedin.com/in/tuusuario]]
URL de GitHub:      [[https://github.com/tuusuario  (opcional)]]
URL de Twitter/X:   [[https://twitter.com/tuusuario  (opcional)]]
```

### Tu experiencia laboral (agrega tantas como necesites)

```
── Experiencia 1 ──
Empresa:           [[Ej: SOFI]]
Rol:               [[Ej: Senior QA Engineer]]
Período:           [[Ej: 2023 — Presente]]
Descripción:
[[Describe brevemente qué hacías y tecnologías usadas]]
Tecnologías usadas: [[Ej: Selenium, Postman, AWS, MongoDB]]

── Experiencia 2 ──
Empresa:           [[ ]]
Rol:               [[ ]]
Período:           [[ ]]
Descripción:       [[ ]]
Tecnologías usadas: [[ ]]
```

### Tus proyectos destacados

```
── Proyecto 1 ──
Título:            [[Ej: AI-Driven Test Automation Suite]]
Descripción:       [[Explica qué hace y tecnologías usadas]]
Tecnologías:       [[Ej: Testim.io, Mabl, Selenium, ChatGPT]]
URL del proyecto:  [[https://... (opcional)]]
URL del código:    [[https://github.com/... (opcional)]]
```

### Preferencias del sitio

```
Idioma principal:     [[Español / Inglés]]
Color de fondo:       [[Claro / Oscuro / Ambos]]
¿Incluir formulario?  [[Sí / No]]
Dominio web:          [[https://tudominio.com]]
```

---

## ✅ Lista de verificación — Antes de pegar esto en la IA

- [ ] Completé mi nombre, rol y biografía
- [ ] Completé mi ubicación y email
- [ ] Completé al menos 1 experiencia laboral
- [ ] Completé al menos 1 proyecto
- [ ] Revisé que los `[[corchetes]]` fueron reemplazados

---

## 🎯 ¿Qué va a hacer la IA con esta información?

| Característica | Descripción |
|---|---|
| 🌐 **Página web** | Página profesional tipo "landing page" |
| 📱 **Responsive** | Se ve bien en celular, tablet y computadora |
| 🌙 **Modo oscuro** | Se adapta automáticamente al tema del sistema |
| 🌎 **Dos idiomas** | Botón para cambiar entre español e inglés |
| 📋 **Tu CV** | Experiencia, proyectos, habilidades |
| 📬 **Formulario** | Para que te contacten (opcional) |
| 🔗 **Redes sociales** | LinkedIn, GitHub, etc. |
| ⚡ **Rápido** | Carga instantánea en cualquier dispositivo |

---

## 💻 Requisitos técnicos (para la IA)

- Usar **Next.js 16** con App Router
- TypeScript estricto
- Tailwind CSS v4
- Datos centralizados en `src/data/data.json`
- Internacionalización manual con React Context (ES/EN)
- Atributos `data-testid` en todos los elementos interactivos
- Una sola ruta `/` con navegación por anclas (`#about`, `#experience`, etc.)
- Sitemap dinámico en `src/app/sitemap.ts`
- Exportar casos de prueba a testing/export/

---

## 🚀 Después de que la IA genere el código

```bash
npm run dev      # Ver tu portafolio en vivo
npm run build    # Build de producción
npm run lint     # Revisar errores
npm run test:e2e # Ejecutar tests E2E
```

Para publicarlo en internet (gratis):
- Crea cuenta en **Vercel** (vercel.com) o configura **GitHub Pages**
- Conecta tu repositorio de GitHub
- Sigue los pasos en `.github/workflows/deploy-pages.yml`

---

## ❓ Preguntas frecuentes

**¿Necesito saber programar?** No. La IA hace todo.

**¿Cuánto tarda?** La IA genera el código en segundos.

**¿Puedo cambiar los colores?** Sí, pídele a la IA.

**¿Puedo agregar más secciones?** Sí, solo dile a la IA.
