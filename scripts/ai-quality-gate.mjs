import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

/**
 * AI QUALITY GATE - Staff SDET Architecture
 * 
 * Este script automatiza lo que un SDET Senior haría manualmente:
 * 1. Ejecuta la suite de pruebas.
 * 2. Si falla, recolecta logs y usa Gemini para realizar un RCA (Root Cause Analysis).
 * 3. Si pasa, realiza una auditoría cualitativa del DOM y SEO usando IA.
 */

const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function runAIQualityGate() {
  if (!API_KEY) {
    console.error("❌ Error: GEMINI_API_KEY no detectada. Abortando auditoría de IA.");
    process.exit(1);
  }

  console.log("🚀 Iniciando AI Quality Gate...");

  try {
    // 1. Ejecutar tests y capturar output
    console.log("🧪 Ejecutando Smoke Tests...");
    execSync("npm run test:e2e", { stdio: "inherit" });
    
    // Si llegamos aquí, los tests pasaron. Realizamos auditoría proactiva.
    await performProactiveAudit();

  } catch (error) {
    // Si falla, entramos en modo RCA (Root Cause Analysis)
    console.log("⚠️ Tests fallidos. Iniciando Análisis de Causa Raíz por IA...");
    await analyzeTestFailure(error.message);
    process.exit(1);
  }
}

async function analyzeTestFailure(errorLog) {
  const prompt = `
    Como un Staff SDET, analiza el siguiente error de Playwright en un portafolio profesional:
    
    ERROR LOG:
    ${errorLog}
    
    TAREAS:
    1. Identifica la causa raíz exacta.
    2. Proporciona el código corregido o los pasos técnicos para solucionarlo.
    3. Clasifica el impacto en la experiencia del usuario (Bajo, Medio, Crítico).
    
    Responde en formato Markdown profesional.
  `;

  const result = await model.generateContent(prompt);
  const report = result.response.text();
  
  fs.writeFileSync("AI_RCA_REPORT.md", report);
  console.log("📝 Reporte de IA generado: AI_RCA_REPORT.md");
}

async function performProactiveAudit() {
  console.log("🔍 Realizando Auditoría Proactiva de Calidad...");
  
  // Leemos el data.json para darle contexto a la IA sobre lo que "debería" estar en la web
  const data = fs.readFileSync(path.join(process.cwd(), "src/data/data.json"), "utf8");

  const prompt = `
    Como un Experto en Calidad y Recrutamiento IT, audita la coherencia entre estos datos profesionales y una web de portafolio moderna:
    
    DATA JSON:
    ${data}
    
    CRITERIOS DE AUDITORÍA:
    1. SEO & Personal Branding: ¿El tagline y la bio son competitivos para un puesto de Staff SDET?
    2. Coherencia Técnica: ¿Las tecnologías mencionadas en los proyectos tienen sentido arquitectónico?
    3. Accesibilidad: Sugiere 3 puntos de mejora WCAG basados en la estructura de datos.
    
    Genera un informe estratégico para el dueño del proyecto.
  `;

  const result = await model.generateContent(prompt);
  const report = result.response.text();
  
  fs.writeFileSync("AI_QUALITY_AUDIT.md", report);
  console.log("✨ Auditoría de IA completada: AI_QUALITY_AUDIT.md");
}

runAIQualityGate().catch(console.error);
