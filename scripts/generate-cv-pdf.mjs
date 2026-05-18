import { chromium } from "@playwright/test";
import { readFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const data = JSON.parse(readFileSync(join(ROOT, "src", "data", "data.json"), "utf-8"));
const { personal, experience, projects, education, certifications } = data;

const PHOTO_PATH = join(ROOT, "public", "Edwin_Foto.jpeg");
const PHOTO_B64 = readFileSync(PHOTO_PATH).toString("base64");
const PHOTO_DATA_URI = `data:image/jpeg;base64,${PHOTO_B64}`;

const OUT_DIR = join(ROOT, "public", "cv");
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const allTechs = [...new Set(experience.flatMap((e) => e.technologies))];
const allTechsStr = allTechs.join(", ");

const labels = {
  en: {
    contact: "Contact",
    location: "Location",
    phone: "Phone",
    skills: "Skills",
    languages: "Languages",
    native: "Native",
    professional: "Professional",
    summary: "Professional Summary",
    experience: "Work Experience",
    projects: "Featured Projects",
    education: "Education",
    certifications: "Certifications",
    techSkills: "Technical Skills",
    workExp: "Work Experience",
    technologies: "Technologies",
    spanNative: "Spanish: Native",
    engLevel: `English: ${personal.englishLevel}`,
    cvTitle: "Professional CV - Edwin Tovar",
    roleLabel: "Role",
    sidebarSkills: "Skills",
    projTitle: "Projects",
    modality: "Mode",
    availability: "Availability",
    immediate: "Immediate",
    workAuth: "Work Authorization",
    links: "Links",
  },
  es: {
    contact: "Contacto",
    location: "Ubicación",
    phone: "Teléfono",
    skills: "Habilidades",
    languages: "Idiomas",
    native: "Nativo",
    professional: "Profesional",
    summary: "Resumen Profesional",
    experience: "Experiencia Laboral",
    projects: "Proyectos Destacados",
    education: "Educación",
    certifications: "Certificaciones",
    techSkills: "Habilidades Técnicas",
    workExp: "Experiencia Laboral",
    technologies: "Tecnologías",
    spanNative: "Español: Nativo",
    engLevel: `Inglés: ${personal.englishLevel}`,
    cvTitle: "CV Profesional - Edwin Tovar",
    roleLabel: "Rol",
    sidebarSkills: "Habilidades",
    projTitle: "Proyectos",
    modality: "Modalidad",
    availability: "Disponibilidad",
    immediate: "Inmediata",
    workAuth: "Autorización Laboral",
    links: "Enlaces",
  },
};

function expSection(p, lang) {
  return `
<div class="exp-item">
  <div class="exp-header">
    <h3>${p.role[lang]}</h3>
    <span class="exp-company">${p.company} &middot; ${p.period}</span>
  </div>
  <p>${p.description[lang]}</p>
  <div class="exp-meta">${p.modality}</div>
  <div class="tech-tags">${p.technologies.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
</div>`;
}

function projSection(p, lang) {
  const links = [];
  if (p.url) links.push(`<a href="${p.url}">${p.url}</a>`);
  if (p.github) links.push(`<a href="${p.github}">GitHub</a>`);
  return `
<div class="proj-item">
  <h3>${p.title[lang]}</h3>
  <p>${p.description[lang]}</p>
  ${links.length > 0 ? `<div class="proj-links">${links.join(" | ")}</div>` : ""}
  <div class="tech-tags">${p.technologies.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
</div>`;
}

function professionalHTML(lang) {
  const l = labels[lang];
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<style>
  @page { margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; font-size: 10pt; color: #2d2d2d; line-height: 1.5; }
  .cv-wrap { display: flex; min-height: 297mm; }
  .sidebar { width: 260px; background: #1a2744; color: #e8ecf1; padding: 32px 24px; flex-shrink: 0; }
  .sidebar .photo-wrap { width: 140px; height: 140px; border-radius: 50%; overflow: hidden; border: 3px solid #4a7cf7; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; }
  .sidebar .photo-wrap img { width: 100%; height: 100%; object-fit: cover; }
  .sidebar h1 { font-size: 16pt; text-align: center; margin-bottom: 4px; color: #fff; }
  .sidebar .role-sub { text-align: center; font-size: 8.5pt; color: #a0b4d6; margin-bottom: 20px; line-height: 1.4; }
  .sidebar .section-title { font-size: 9pt; text-transform: uppercase; letter-spacing: 1.5px; color: #7a9cf5; margin: 20px 0 8px; border-bottom: 1px solid #2f4068; padding-bottom: 4px; }
  .sidebar .contact-item { font-size: 8.5pt; margin-bottom: 6px; color: #c8d4e8; word-break: break-all; }
  .sidebar .contact-item strong { color: #7a9cf5; display: block; font-size: 7.5pt; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 1px; }
  .sidebar .skill-list { list-style: none; }
  .sidebar .skill-list li { font-size: 8.5pt; padding: 2px 0; color: #c8d4e8; }
  .sidebar .skill-list li::before { content: "\\25B8 "; color: #4a7cf7; }
  .sidebar .lang-item { font-size: 8.5pt; margin-bottom: 4px; color: #c8d4e8; }
  .sidebar .lang-item .level { color: #7a9cf5; font-size: 7.5pt; }
  .sidebar .cert-list { list-style: none; }
  .sidebar .cert-list li { font-size: 8pt; padding: 3px 0; color: #c8d4e8; border-bottom: 1px solid #2f4068; }
  .sidebar .cert-list li:last-child { border-bottom: none; }
  .main { flex: 1; padding: 32px 36px; }
  .main .section-title { font-size: 11pt; text-transform: uppercase; letter-spacing: 1.5px; color: #1a2744; border-bottom: 2px solid #1a2744; padding-bottom: 4px; margin: 20px 0 12px; }
  .main .section-title:first-of-type { margin-top: 0; }
  .summary p { font-size: 9.5pt; text-align: justify; margin-bottom: 8px; }
  .exp-item { margin-bottom: 16px; page-break-inside: avoid; }
  .exp-header { margin-bottom: 4px; }
  .exp-header h3 { font-size: 10.5pt; color: #1a2744; }
  .exp-company { font-size: 9pt; color: #4a7cf7; font-weight: 600; }
  .exp-item p { font-size: 9pt; text-align: justify; margin-bottom: 6px; }
  .exp-meta { font-size: 8pt; color: #6b7280; margin-bottom: 6px; font-style: italic; }
  .tech-tags { display: flex; flex-wrap: wrap; gap: 4px; }
  .tag { font-size: 7.5pt; background: #e8ecf5; color: #1a2744; padding: 2px 8px; border-radius: 3px; }
  .proj-item { margin-bottom: 14px; page-break-inside: avoid; }
  .proj-item h3 { font-size: 10pt; color: #1a2744; }
  .proj-item p { font-size: 9pt; text-align: justify; margin-bottom: 6px; }
  .proj-links { font-size: 8pt; margin-bottom: 4px; }
  .proj-links a { color: #4a7cf7; text-decoration: none; }
  .edu-item { margin-bottom: 8px; page-break-inside: avoid; }
  .edu-item h3 { font-size: 10pt; color: #1a2744; }
  .edu-item .edu-institution { font-size: 9pt; color: #4a7cf7; }
  .edu-item .edu-period { font-size: 8.5pt; color: #6b7280; }
</style>
</head>
<body>
<div class="cv-wrap">
  <div class="sidebar">
    <div class="photo-wrap"><img src="${PHOTO_DATA_URI}" alt="Edwin Tovar" /></div>
    <h1>${personal.name}</h1>
    <div class="role-sub">${personal.role[lang]}</div>
    <div class="section-title">${l.contact}</div>
    <div class="contact-item"><strong>Email</strong>${personal.email}</div>
    <div class="contact-item"><strong>${l.phone}</strong>${personal.phone}</div>
    <div class="contact-item"><strong>${l.location}</strong>${personal.location}</div>
    <div class="contact-item"><strong>${l.availability}</strong>${personal.availability}</div>
    <div class="contact-item"><strong>LinkedIn</strong>${personal.social.linkedin}</div>
    ${personal.social.github ? `<div class="contact-item"><strong>GitHub</strong>${personal.social.github}</div>` : ""}
    <div class="section-title">${l.sidebarSkills}</div>
    <ul class="skill-list">${allTechs.slice(0, 25).map((t) => `<li>${t}</li>`).join("")}</ul>
    ${certifications && certifications.length > 0 ? `
    <div class="section-title">${l.certifications}</div>
    <ul class="cert-list">${certifications.map((c) => `<li>${c.name}</li>`).join("")}</ul>` : ""}
    <div class="section-title">${l.languages}</div>
    <div class="lang-item">${l.spanNative}</div>
    <div class="lang-item">${l.engLevel}</div>
  </div>
  <div class="main">
    <div class="section-title">${l.summary}</div>
    <div class="summary"><p>${personal.bio[lang]}</p></div>
    <div class="section-title">${l.experience}</div>
    ${experience.map((p) => expSection(p, lang)).join("")}
    <div class="section-title">${l.projects}</div>
    ${projects.map((p) => projSection(p, lang)).join("")}
    <div class="section-title">${l.education}</div>
    ${education.map((e) => `
    <div class="edu-item">
      <h3>${e.degree}</h3>
      <div class="edu-institution">${e.institution}</div>
      ${e.period ? `<div class="edu-period">${e.period}</div>` : ""}
    </div>`).join("")}
  </div>
</div>
</body>
</html>`;
}

function atsHTML(lang) {
  const l = labels[lang];
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<style>
  body { font-family: 'Times New Roman', Times, serif; font-size: 11pt; color: #000; line-height: 1.4; margin: 0.75in; }
  h1 { font-size: 16pt; margin-bottom: 2px; }
  h2 { font-size: 13pt; border-bottom: 1px solid #000; padding-bottom: 2px; margin-top: 16px; margin-bottom: 8px; }
  h3 { font-size: 11pt; margin-bottom: 2px; margin-top: 10px; }
  p { margin-bottom: 6px; text-align: justify; }
  ul { margin: 4px 0 8px 16px; }
  li { margin-bottom: 3px; }
  .contact-line { font-size: 10pt; margin-bottom: 8px; }
  .company-line { font-weight: bold; }
  .period { font-style: italic; }
  .modality { font-style: italic; font-size: 10pt; }
  .tech { font-size: 10pt; }
</style>
</head>
<body>
<h1>${personal.name}</h1>
<p class="contact-line">${personal.role[lang]} | ${personal.location} | ${personal.phone} | ${personal.email} | ${personal.social.linkedin}</p>

<h2>${l.summary}</h2>
<p>${personal.bio[lang]}</p>

<h2>${l.techSkills}</h2>
<p>${allTechsStr}</p>

<h2>${l.workExp}</h2>
${experience.map((p) => `
<h3>${p.role[lang]}</h3>
<p class="company-line">${p.company} &mdash; <span class="period">${p.period}</span></p>
<p class="modality">${p.modality}</p>
<p>${p.description[lang]}</p>
<p class="tech">${l.technologies}: ${p.technologies.join(", ")}</p>
`).join("")}

<h2>${l.projTitle}</h2>
${projects.map((p) => `
<h3>${p.title[lang]}</h3>
<p>${p.description[lang]}</p>
${p.github ? `<p>GitHub: ${p.github}</p>` : ""}
${p.url ? `<p>URL: ${p.url}</p>` : ""}
<p class="tech">${l.technologies}: ${p.technologies.join(", ")}</p>
`).join("")}

<h2>${l.education}</h2>
${education.map((e) => `<p><strong>${e.degree}</strong> &mdash; ${e.institution}${e.period ? ` (${e.period})` : ""}</p>`).join("")}

${certifications && certifications.length > 0 ? `
<h2>${l.certifications}</h2>
<ul>${certifications.map((c) => `<li>${c.name}</li>`).join("")}</ul>` : ""}

<h2>${l.languages}</h2>
<ul>
  <li>${l.spanNative}</li>
  <li>${l.engLevel}</li>
</ul>
</body>
</html>`;
}

async function generate() {
  const browser = await chromium.launch();
  const basePath = (lang, type) => join(OUT_DIR, `Edwin_Tovar_CV_${type}_${lang === "en" ? "EN" : "ES"}.pdf`);

  for (const lang of ["en", "es"]) {
    const langTag = lang === "en" ? "EN" : "ES";
    console.log(`\n[${langTag}] Generating...`);

    const profPage = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
    await profPage.setContent(professionalHTML(lang), { waitUntil: "networkidle" });
    const profPath = basePath(lang, "Professional");
    await profPage.pdf({ path: profPath, format: "A4", margin: { top: 0, bottom: 0, left: 0, right: 0 }, printBackground: true });
    console.log(`  Professional -> ${profPath}`);
    await profPage.close();

    const atsPage = await browser.newPage();
    await atsPage.setContent(atsHTML(lang), { waitUntil: "networkidle" });
    const atsPath = basePath(lang, "ATS");
    await atsPage.pdf({ path: atsPath, format: "A4", margin: { top: "20mm", bottom: "20mm", left: "20mm", right: "20mm" } });
    console.log(`  ATS          -> ${atsPath}`);
    await atsPage.close();
  }

  await browser.close();
  console.log("\nDone! 4 PDFs generated in public/cv/");
}

generate().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
