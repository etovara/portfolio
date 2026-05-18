# 🔄 Pruebas Manuales — Regresión

**Objetivo:** Verificar que cambios recientes no han roto funcionalidades existentes.

---

## TC-REG-01: Enlaces de proyectos

| Campo | Valor |
|---|---|
| **ID** | TC-REG-01 |
| **Título** | Verificar enlaces externos de proyectos |
| **Prioridad** | Media |
| **Severidad** | Media |

**Pasos:**
1. Para cada proyecto en la grilla, verificar los enlaces "Sitio" y "Código"
2. Si el enlace existe, debe abrirse en una nueva pestaña
3. Verificar que tenga `rel="noopener noreferrer"`

---

## TC-REG-02: Correo electrónico de contacto

| Campo | Valor |
|---|---|
| **ID** | TC-REG-02 |
| **Título** | Verificar enlace mailto |
| **Prioridad** | Media |
| **Severidad** | Media |

**Pasos:**
1. Hacer clic en la dirección de correo en la sección de contacto
2. Debe abrir el cliente de correo predeterminado con la dirección pre-poblada

---

## TC-REG-03: Redes sociales

| Campo | Valor |
|---|---|
| **ID** | TC-REG-03 |
| **Título** | Verificar enlaces a redes sociales |
| **Prioridad** | Media |
| **Severidad** | Media |

**Pasos:**
1. En la sección Hero, verificar que los iconos de redes sociales están visibles
2. El icono de LinkedIn debe apuntar a linkedin.com/in/edwintovar
3. Los enlaces deben abrirse en nueva pestaña

---

## TC-REG-04: Scroll suave

| Campo | Valor |
|---|---|
| **ID** | TC-REG-04 |
| **Título** | Verificar comportamiento de scroll |
| **Prioridad** | Baja |
| **Severidad** | Baja |

**Pasos:**
1. Hacer clic en cualquier enlace de navegación
2. El scroll debe ser animado (no instantáneo)
3. Probar también el enlace "Volver arriba" del footer

---

## TC-REG-05: Footer

| Campo | Valor |
|---|---|
| **ID** | TC-REG-05 |
| **Título** | Verificar contenido del footer |
| **Prioridad** | Baja |
| **Severidad** | Baja |

**Pasos:**
1. Hacer scroll al final de la página
2. Verificar que muestra: © {año actual} Edwin Tovar. Todos los derechos reservados.
3. Verificar que el año coincide con el año actual

---

## TC-REG-06: Experiencia laboral

| Campo | Valor |
|---|---|
| **ID** | TC-REG-06 |
| **Título** | Verificar contenido de la línea de tiempo |
| **Prioridad** | Alta |
| **Severidad** | Media |

**Pasos:**
1. Verificar que todas las entradas de experiencia están visibles
2. Cada entrada debe tener: rol, empresa, período, descripción, tecnologías
3. Verificar que la línea vertical conecta visualmente todas las entradas
4. Verificar que los tags de tecnologías tienen formato de pills redondeadas

---

## TC-REG-07: Proyectos

| Campo | Valor |
|---|---|
| **ID** | TC-REG-07 |
| **Título** | Verificar grilla de proyectos |
| **Prioridad** | Alta |
| **Severidad** | Media |

**Pasos:**
1. En desktop: deben verse 2 columnas de proyectos
2. En móvil: debe verse 1 columna
3. Cada tarjeta debe tener: ícono de carpeta, título, descripción, tecnologías

---

## TC-REG-08: Validación de formulario HTML5

| Campo | Valor |
|---|---|
| **ID** | TC-REG-08 |
| **Título** | Verificar validación nativa del formulario |
| **Prioridad** | Media |
| **Severidad** | Media |

**Pasos:**
1. No llenar ningún campo y hacer clic en "Enviar mensaje"
2. El navegador debe mostrar un tooltip de validación en el primer campo vacío
3. Llenar solo nombre, enviar → debe pedir email
4. Llenar nombre y email inválido, enviar → debe pedir email válido
5. Llenar todo correctamente → debe enviar con éxito
