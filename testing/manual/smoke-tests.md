# 🧪 Pruebas Manuales — Smoke Test

**Objetivo:** Verificar que las funcionalidades críticas del portafolio funcionan correctamente después de cada cambio.

**Precondiciones:** El servidor de desarrollo está corriendo en `http://localhost:3000`
**Navegadores:** Chrome, Firefox, Edge, Safari
**Dispositivos:** Desktop (1920×1080), Tablet (768×1024), Mobile (375×667)

---

## TC-SMOKE-01: Carga de la página principal

| Campo | Valor |
|---|---|
| **ID** | TC-SMOKE-01 |
| **Título** | Verificar carga correcta de la página principal |
| **Prioridad** | Alta |
| **Severidad** | Crítica |
| **Ambiente** | Desktop, Tablet, Mobile |

**Pasos:**
1. Abrir navegador
2. Navegar a `http://localhost:3000`

**Resultado esperado:**
- La página carga en menos de 3 segundos
- No hay errores en la consola del navegador (F12 → Console)
- El logo "ET" es visible en la esquina superior izquierda
- El título de la pestaña muestra "Edwin Tovar | QA Engineer"

---

## TC-SMOKE-02: Navegación por secciones

| Campo | Valor |
|---|---|
| **ID** | TC-SMOKE-02 |
| **Título** | Verificar navegación por anclas |
| **Prioridad** | Alta |
| **Severidad** | Alta |

**Pasos:**
1. En desktop, hacer clic en cada enlace del menú: "Sobre mí", "Experiencia", "Proyectos", "Contacto"
2. Verificar que la página hace scroll suave a cada sección
3. La URL debe actualizarse con el hash correspondiente (#about, #experience, etc.)

**Resultado esperado:**
- El scroll es suave (no salta)
- La URL refleja el hash correcto
- La sección correspondiente es visible

---

## TC-SMOKE-03: Toggle de idioma

| Campo | Valor |
|---|---|
| **ID** | TC-SMOKE-03 |
| **Título** | Verificar cambio de idioma ES/EN |
| **Prioridad** | Alta |
| **Severidad** | Alta |

**Pasos:**
1. Hacer clic en el botón "EN" del header
2. Verificar que los textos cambian a inglés
3. Hacer clic en "ES" para volver a español

**Resultado esperado:**
- Al cambiar a inglés: "Sobre Mí" → "About Me", "Experiencia" → "Experience", etc.
- El botón cambia de "EN" a "ES"
- La biografía cambia de español a inglés
- No hay recarga de página (es instantáneo)

---

## TC-SMOKE-04: Formulario de contacto

| Campo | Valor |
|---|---|
| **ID** | TC-SMOKE-04 |
| **Título** | Verificar envío del formulario |
| **Prioridad** | Media |
| **Severidad** | Media |

**Pasos:**
1. Llenar los campos: Nombre, Email, Mensaje
2. Hacer clic en "Enviar mensaje"

**Resultado esperado:**
- Aparece un mensaje verde de éxito: "¡Gracias por tu mensaje! Te responderé pronto."

---

## TC-SMOKE-05: Menú responsive (móvil)

| Campo | Valor |
|---|---|
| **ID** | TC-SMOKE-05 |
| **Título** | Verificar menú hamburguesa en móvil |
| **Prioridad** | Alta |
| **Severidad** | Alta |

**Pasos:**
1. Abrir en un viewport de 375×667 (Pixel 5 / iPhone)
2. El menú desktop NO debe estar visible
3. Hacer clic en el ícono de hamburguesa (☰)

**Resultado esperado:**
- Se despliega el menú vertical con las opciones
- Al hacer clic en una opción, el menú se cierra
- El ícono cambia a X al abrirse

---

## TC-SMOKE-06: Modo oscuro

| Campo | Valor |
|---|---|
| **ID** | TC-SMOKE-06 |
| **Título** | Verificar modo oscuro automático |
| **Prioridad** | Media |
| **Severidad** | Media |

**Pasos:**
1. En Windows: Configuración → Personalización → Colores → Elegir modo oscuro
2. Recargar la página
3. Verificar que los colores cambian a modo oscuro
4. Volver a modo claro y recargar

**Resultado esperado:**
- El fondo cambia a negro (#0a0a0a)
- El texto cambia a blanco/gris claro
- Todos los componentes se ven correctamente en modo oscuro
