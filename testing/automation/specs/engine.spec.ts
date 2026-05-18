import { test, expect } from "@playwright/test";
import portfolioData from "../../../src/data/data.json";

/**
 * Arquitectura SDET: Data-Driven Testing (DDT).
 * Validamos que la UI refleje fielmente la "Fuente Única de Verdad" (data.json).
 * Esto elimina la necesidad de checklists manuales de datos.
 */
test.describe("Data-Driven Validation - Content Integrity", () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Validar Hero e información personal desde JSON", async ({ page }) => {
    const { name, tagline } = portfolioData.personal;
    
    await expect(page.getByText(name)).toBeVisible();
    await expect(page.getByText(tagline.es)).toBeVisible();
  });

  // Iteramos sobre las experiencias laborales para asegurar cobertura total sin código repetitivo
  for (const exp of portfolioData.experience) {
    test(`Validar experiencia: ${exp.company} - ${exp.id}`, async ({ page }) => {
      const companyElement = page.getByText(exp.company);
      await expect(companyElement).toBeVisible();
      
      // Verificamos que al menos una tecnología clave esté presente en la sección
      if (exp.technologies.length > 0) {
        await expect(page.getByText(exp.technologies[0])).toBeVisible();
      }
    });
  }

  // Iteramos sobre los proyectos
  for (const project of portfolioData.projects) {
    test(`Validar proyecto: ${project.title.es}`, async ({ page }) => {
      await expect(page.getByText(project.title.es)).toBeVisible();
    });
  }
});

/**
 * Arquitectura SDET: Visual Regression Testing.
 * Captura y compara el estado visual para detectar "layout shifts" o errores de CSS
 * que los tests funcionales no pueden ver.
 */
test.describe("Visual Regression & Responsive", () => {
  const viewports = [
    { name: "Desktop", width: 1280, height: 720 },
    { name: "Mobile", width: 375, height: 667 },
  ];

  for (const vp of viewports) {
    test(`Snapshot visual - ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
      
      // Esperamos a que las fuentes/imágenes carguen para evitar falsos positivos
      await page.waitForLoadState("networkidle");
      
      // El primer run generará las imágenes de referencia; los siguientes compararán.
      await expect(page).toHaveScreenshot({ fullPage: true });
    });
  }
});
