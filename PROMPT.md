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
especialidad. Mira el ejemplo:]]

Ejemplo:
Computer Engineer and Senior QA Engineer with over 10 years of experience
in Quality Assurance across Fintech, Banking, and Payment Media environments.
Specialized in the full end-to-end testing cycle, from requirements analysis
to execution, automation, and reporting.

Ubicación:          [[Ej: Buenos Aires, Argentina]]
Email:              [[ejemplo@correo.com]]
URL de LinkedIn:    [[https://linkedin.com/in/tuusuario]]
URL de GitHub:      [[https://github.com/tuusuario  (opcional)]]
URL de Twitter/X:   [[https://twitter.com/tuusuario  (opcional)]]
URL de tu sitio:    [[https://tudominio.com  (opcional)]]
```

### Tu experiencia laboral (agrega tantas como necesites)

```
── Experiencia 1 ──
Empresa:           [[Ej: SOFI]]
Rol:               [[Ej: Senior QA Engineer]]
Período:           [[Ej: 2023 — Presente]]
Descripción:

[[Describe brevemente qué hacías:]]

Ejemplo:
Plan and execute manual and automated testing for Fintech platforms.
Implement AI-driven testing solutions and integrate testing suites
into CI/CD pipelines.

Tecnologías usadas: [[Ej: Selenium, Postman, AWS, MongoDB]]

── Experiencia 2 ──
Empresa:           [[ ]]
Rol:               [[ ]]
Período:           [[ ]]
Descripción:       [[ ]]
Tecnologías usadas: [[ ]]

── Experiencia 3 ──
Empresa:           [[ ]]
Rol:               [[ ]]
Período:           [[ ]]
Descripción:       [[ ]]
Tecnologías usadas: [[ ]]
```

### Tus proyectos destacados (agrega tantos como necesites)

```
── Proyecto 1 ──
Título:            [[Ej: AI-Driven Test Automation Suite]]
Descripción:

[[Explica qué hace el proyecto y qué tecnologías usaste:]]

Ejemplo:
Implemented AI-powered testing solutions using Testim.io and Mabl
for intelligent script creation and maintenance.

Tecnologías:       [[Ej: Testim.io, Mabl, Selenium, ChatGPT]]
URL del proyecto:  [[https://...  (opcional)]]
URL del código:    [[https://github.com/...  (opcional)]]

── Proyecto 2 ──
Título:            [[ ]]
Descripción:       [[ ]]
Tecnologías:       [[ ]]
URL del proyecto:  [[ ]]
URL del código:    [[ ]]

── Proyecto 3 ──
Título:            [[ ]]
Descripción:       [[ ]]
Tecnologías:       [[ ]]
URL del proyecto:  [[ ]]
URL del código:    [[ ]]
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

- [ ] Completé mi nombre
- [ ] Completé mi rol profesional
- [ ] Completé mi biografía
- [ ] Completé mi ubicación y email
- [ ] Completé al menos 1 experiencia laboral
- [ ] Completé al menos 1 proyecto
- [ ] Revisé que los `[[corchetes]]` fueron reemplazados

---

## 🎯 ¿Qué va a hacer la IA con esta información?

La IA va a construir automáticamente:

| Característica | Descripción |
|---|---|
| 🌐 **Página web** | Una página profesional tipo "landing page" |
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
- Sitemap generado dinámicamente en `src/app/sitemap.ts`
- La IA debe generar el archivo `ARCHITECTURE.md` documentando la arquitectura

---

## 🚀 Después de que la IA genere el código

1. La IA te dará instrucciones para ejecutar estos comandos en tu computadora:

   ```bash
   npm run dev      # Para ver tu portafolio en vivo
   npm run build    # Para prepararlo para publicación
   npm run lint     # Para revisar que no haya errores
   ```

2. Para publicarlo en internet (gratis):

   - Crea una cuenta en **Vercel** (vercel.com) o **Netlify** (netlify.com)
   - Conecta tu repositorio de GitHub
   - La IA te guiará con los pasos exactos

---

## ❓ Preguntas frecuentes

**¿Necesito saber programar?**
No. La IA hace todo. Solo debes llenar el formulario de arriba y seguir las instrucciones.

**¿Cuánto tarda?**
La IA genera el código en segundos. Luego sigue sus pasos para ponerlo en línea.

**¿Puedo cambiar los colores?**
Sí, puedes pedirle a la IA que cambie cualquier cosa después.

**¿Puedo agregar más secciones?**
Sí. Solo dile a la IA: "agrega una sección de [lo que quieras]".
