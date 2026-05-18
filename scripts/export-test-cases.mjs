import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "testing", "export");
mkdirSync(OUT_DIR, { recursive: true });

const MANUAL = [
  { id: "TC-SMOKE-01", type: "Smoke", title: "Carga de página principal", priority: "Alta", severity: "Crítica", steps: "Abrir navegador → Navegar a http://localhost:3000", expected: "Página carga en <3s, sin errores consola, logo ET visible, título correcto", automated: "✅ api.spec.ts", environment: "Desktop, Tablet, Mobile" },
  { id: "TC-SMOKE-02", type: "Smoke", title: "Navegación por anclas", priority: "Alta", severity: "Alta", steps: "Clic en cada enlace del menú: Sobre mí, Experiencia, Proyectos, Contacto", expected: "Scroll suave, URL con hash correcto, sección visible", automated: "✅ hero.spec.ts", environment: "Desktop" },
  { id: "TC-SMOKE-03", type: "Smoke", title: "Toggle de idioma ES/EN", priority: "Alta", severity: "Alta", steps: "Clic en botón EN → Verificar textos en inglés → Clic en ES para volver", expected: "Textos cambian a inglés, botón muestra ES, sin recarga", automated: "✅ i18n.spec.ts", environment: "Desktop, Mobile" },
  { id: "TC-SMOKE-04", type: "Smoke", title: "Formulario de contacto", priority: "Media", severity: "Media", steps: "Llenar nombre, email, mensaje → Clic en Enviar mensaje", expected: "Mensaje verde de éxito: Gracias por tu mensaje", automated: "✅ contact.spec.ts", environment: "Desktop, Mobile" },
  { id: "TC-SMOKE-05", type: "Smoke", title: "Menú responsive hamburguesa", priority: "Alta", severity: "Alta", steps: "Viewport 375×667 → Menú desktop oculto → Clic en ☰", expected: "Menú vertical desplegado, opciones visibles, ícono cambia a X", automated: "✅ navigation.spec.ts", environment: "Mobile" },
  { id: "TC-SMOKE-06", type: "Smoke", title: "Modo oscuro automático", priority: "Media", severity: "Media", steps: "Preferencia sistema → Oscuro → Recargar → Volver a claro", expected: "Fondo negro, texto claro, todos los componentes visibles", automated: "❌ Manual", environment: "Desktop, Mobile" },
  { id: "TC-REG-01", type: "Regression", title: "Enlaces externos de proyectos", priority: "Media", severity: "Media", steps: "Para cada proyecto verificar enlaces Sitio y Código", expected: "Enlaces abren en nueva pestaña, rel=noopener noreferrer", automated: "❌ Manual", environment: "Desktop" },
  { id: "TC-REG-02", type: "Regression", title: "Enlace mailto de contacto", priority: "Media", severity: "Media", steps: "Clic en correo en sección contacto", expected: "Abre cliente de correo con dirección pre-poblada", automated: "❌ Manual", environment: "Desktop" },
  { id: "TC-REG-03", type: "Regression", title: "Redes sociales", priority: "Media", severity: "Media", steps: "Verificar iconos redes en Hero → LinkedIn apunta a linkedin.com/in/edwintovar", expected: "Iconos visibles, enlaces abren nueva pestaña", automated: "✅ hero.spec.ts", environment: "Desktop" },
  { id: "TC-REG-04", type: "Regression", title: "Scroll suave entre secciones", priority: "Baja", severity: "Baja", steps: "Clic en enlace navegación → Verificar scroll animado", expected: "Scroll animado, no instantáneo", automated: "❌ Manual", environment: "Desktop" },
  { id: "TC-REG-05", type: "Regression", title: "Footer con año dinámico", priority: "Baja", severity: "Baja", steps: "Scroll al footer → Verificar copyright con año actual", expected: "© {año} Edwin Tovar. Todos los derechos reservados.", automated: "✅ footer.spec.ts", environment: "Desktop, Mobile" },
  { id: "TC-REG-06", type: "Regression", title: "Timeline de experiencia", priority: "Alta", severity: "Media", steps: "Verificar todas las entradas de experiencia", expected: "Cada entrada: rol, empresa, período, descripción, tecnologías", automated: "✅ experience.spec.ts", environment: "Desktop, Mobile" },
  { id: "TC-REG-07", type: "Regression", title: "Grilla responsive de proyectos", priority: "Alta", severity: "Media", steps: "Desktop → 2 columnas, Móvil → 1 columna", expected: "Cada tarjeta: ícono, título, descripción, tecnologías", automated: "✅ projects.spec.ts", environment: "Desktop, Mobile" },
  { id: "TC-REG-08", type: "Regression", title: "Validación HTML5 formulario", priority: "Media", severity: "Media", steps: "Enviar vacío → Enviar solo nombre → Enviar email inválido → Enviar completo", expected: "Validación nativa del navegador en cada campo", automated: "✅ contact.spec.ts", environment: "Desktop" },
];

const AUTOMATION = [
  { id: "NAV-01", module: "Navigation", title: "Logo ET visible", file: "navigation.spec.ts", selector: "nav-logo", expected: "ET visible en esquina superior izquierda" },
  { id: "NAV-02", module: "Navigation", title: "Toggle de idioma visible", file: "navigation.spec.ts", selector: "lang-toggle", expected: "Botón ES/EN visible en header" },
  { id: "NAV-03", module: "Navigation", title: "Enlaces desktop visibles", file: "navigation.spec.ts", selector: "nav-link-*", expected: "4 enlaces: sobre mí, experiencia, proyectos, contacto" },
  { id: "NAV-04", module: "Navigation", title: "Menú móvil funciona", file: "navigation.spec.ts", selector: "menu-toggle", expected: "Menú hamburguesa se despliega/cierra" },
  { id: "NAV-05", module: "Navigation", title: "Toggle idioma alterna", file: "navigation.spec.ts", selector: "lang-toggle", expected: "Texto del toggle cambia al hacer clic" },
  { id: "HERO-01", module: "Hero", title: "Nombre del autor visible", file: "hero.spec.ts", selector: "hero-name", expected: "Nombre visible y no vacío" },
  { id: "HERO-02", module: "Hero", title: "Rol profesional visible", file: "hero.spec.ts", selector: "hero-role", expected: "Rol visible" },
  { id: "HERO-03", module: "Hero", title: "Tagline visible", file: "hero.spec.ts", selector: "hero-tagline", expected: "Tagline visible" },
  { id: "HERO-04", module: "Hero", title: "CTA navegan a secciones", file: "hero.spec.ts", selector: "hero-cta-*", expected: "Clic en proyectos → /#projects, Clic en contacto → /#contact" },
  { id: "HERO-05", module: "Hero", title: "LinkedIn presente", file: "hero.spec.ts", selector: "social-linkedin", expected: "Enlace a linkedin.com visible si configurado" },
  { id: "ABOUT-01", module: "About", title: "Encabezado visible", file: "about.spec.ts", selector: "about-heading", expected: "Encabezado About visible" },
  { id: "ABOUT-02", module: "About", title: "Biografía visible y no vacía", file: "about.spec.ts", selector: "about-bio", expected: "Bio visible y con contenido" },
  { id: "ABOUT-03", module: "About", title: "Ubicación visible", file: "about.spec.ts", selector: "about-location", expected: "Ubicación visible" },
  { id: "EXP-01", module: "Experience", title: "Encabezado visible", file: "experience.spec.ts", selector: "experience-heading", expected: "Encabezado Experience visible" },
  { id: "EXP-02", module: "Experience", title: "Lista de experiencias > 0", file: "experience.spec.ts", selector: "experience-item-*", expected: "Al menos 1 experiencia listada" },
  { id: "EXP-03", module: "Experience", title: "Item tiene rol, período, empresa", file: "experience.spec.ts", selector: "experience-rol-*,period-*,company-*", expected: "Cada experiencia tiene todos los campos" },
  { id: "PROJ-01", module: "Projects", title: "Encabezado visible", file: "projects.spec.ts", selector: "projects-heading", expected: "Encabezado Projects visible" },
  { id: "PROJ-02", module: "Projects", title: "Tarjetas de proyecto > 0", file: "projects.spec.ts", selector: "project-card-*", expected: "Al menos 1 tarjeta visible" },
  { id: "PROJ-03", module: "Projects", title: "Tarjeta tiene título y descripción", file: "projects.spec.ts", selector: "project-title-*,description-*", expected: "Cada tarjeta con título y descripción" },
  { id: "CONT-01", module: "Contact", title: "Encabezado visible", file: "contact.spec.ts", selector: "contact-heading", expected: "Encabezado Contact visible" },
  { id: "CONT-02", module: "Contact", title: "Formulario visible", file: "contact.spec.ts", selector: "contact-form", expected: "Formulario visible" },
  { id: "CONT-03", module: "Contact", title: "Campos requeridos presentes", file: "contact.spec.ts", selector: "contact-input-*", expected: "Campos name, email, message visibles" },
  { id: "CONT-04", module: "Contact", title: "Envío muestra éxito", file: "contact.spec.ts", selector: "contact-success", expected: "Mensaje de éxito visible tras envío" },
  { id: "CONT-05", module: "Contact", title: "Enlace email alternativo", file: "contact.spec.ts", selector: "contact-email-link", expected: "Enlace mailto visible" },
  { id: "FOOT-01", module: "Footer", title: "Copyright con nombre", file: "footer.spec.ts", selector: "footer-copyright", expected: "Copyright contiene Edwin Tovar" },
  { id: "FOOT-02", module: "Footer", title: "Enlace volver arriba", file: "footer.spec.ts", selector: "footer-link-top", expected: "Enlace para volver al inicio visible" },
  { id: "I18N-01", module: "i18n", title: "Idioma default = español", file: "i18n.spec.ts", selector: "about-heading", expected: "Encabezados en español por defecto" },
  { id: "I18N-02", module: "i18n", title: "Cambio a inglés actualiza textos", file: "i18n.spec.ts", selector: "about-heading", expected: "Textos cambian a inglés al toggle" },
  { id: "I18N-03", module: "i18n", title: "Botón refleja idioma actual", file: "i18n.spec.ts", selector: "lang-toggle", expected: "Botón muestra EN en español, ES en inglés" },
  { id: "I18N-04", module: "i18n", title: "Contenido CV cambia con idioma", file: "i18n.spec.ts", selector: "about-bio", expected: "Bio contiene keywords del idioma activo" },
  { id: "API-01", module: "API", title: "GET / → 200", file: "api.spec.ts", selector: "HTTP", expected: "Status 200 OK" },
  { id: "API-02", module: "API", title: "GET /sitemap.xml → XML válido", file: "api.spec.ts", selector: "HTTP", expected: "Status 200 + content-type: xml" },
  { id: "API-03", module: "API", title: "GET /ruta-inexistente → 404", file: "api.spec.ts", selector: "HTTP", expected: "Status 404" },
  { id: "API-04", module: "API", title: "Headers de seguridad", file: "api.spec.ts", selector: "HTTP", expected: "Content-Type: text/html" },
  { id: "API-05", module: "API", title: "Meta tags SEO presentes", file: "api.spec.ts", selector: "HTML", expected: "Body contiene Edwin Tovar y lang=\"es\"" },
  { id: "API-06", module: "API", title: "Sitemap contiene URL principal", file: "api.spec.ts", selector: "XML", expected: "Sitemap contiene <url> y <loc>" },
  { id: "API-07", module: "API", title: "No hay recursos rotos", file: "api.spec.ts", selector: "Network", expected: "Sin respuestas 4xx/5xx" },
];

function escapeCsv(value) {
  if (value == null) return "";
  const str = String(value);
  if (str.includes(",") || str.includes("\"") || str.includes("\n")) {
    return `"${str.replace(/"/g, "\"\"")}"`;
  }
  return str;
}

function toCsv(rows, headers) {
  const lines = [headers.map(escapeCsv).join(",")];
  for (const row of rows) {
    lines.push(headers.map((h) => escapeCsv(row[h])).join(","));
  }
  return lines.join("\n");
}

const manualHeaders = ["id", "type", "title", "priority", "severity", "steps", "expected", "automated", "environment"];
const automationHeaders = ["id", "module", "title", "file", "selector", "expected"];

const manualCsv = toCsv(MANUAL, manualHeaders);
const automationCsv = toCsv(AUTOMATION, automationHeaders);

writeFileSync(join(OUT_DIR, "manual-test-cases.csv"), "\uFEFF" + manualCsv, "utf-8");
writeFileSync(join(OUT_DIR, "automation-test-cases.csv"), "\uFEFF" + automationCsv, "utf-8");

writeFileSync(join(OUT_DIR, "manual-test-cases.xls"), "\uFEFF" + manualCsv, "utf-8");
writeFileSync(join(OUT_DIR, "automation-test-cases.xls"), "\uFEFF" + automationCsv, "utf-8");

console.log(`✅ Exportados ${MANUAL.length} casos manuales y ${AUTOMATION.length} casos de automatización`);
console.log(`📁 ${OUT_DIR}`);
