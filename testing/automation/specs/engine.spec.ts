import { test, expect } from "@playwright/test";
import portfolioData from "../../../src/data/data.json";
import { injectAxe, checkA11y } from "@axe-core/playwright";

/**
 * QA ENGINEERING LAB - Data-Driven Testing (DDT)
 * Validamos dinámicamente que el contenido de la web coincida con la data del CV.
 */
test.describe("DDT Content Validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Validar Hero & Bio", async ({ page }) => {
    const { name, tagline } = portfolioData.personal;
    await expect(page.getByText(name)).toBeVisible();
    await expect(page.getByText(tagline.es)).toBeVisible();
  });

  for (const exp of portfolioData.experience) {
    test(`Validar Experiencia: ${exp.company}`, async ({ page }) => {
      await expect(page.getByText(exp.company)).toBeVisible();
    });
  }
});

/**
 * QA ENGINEERING LAB - Visual Regression & Accessibility
 * Certificación técnica del producto.
 */
test.describe("Visual & a11y Certification", () => {
  const viewports = [
    { name: "Desktop", width: 1280, height: 720 },
    { name: "Mobile", width: 375, height: 667 },
  ];

  for (const vp of viewports) {
    test(`Snapshot Visual - ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
      await page.waitForLoadState("networkidle");
      await expect(page).toHaveScreenshot({ fullPage: true });
    });

    test(`Auditoría de Accesibilidad (WCAG) - ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
      await injectAxe(page);
      await checkA11y(page, undefined, {
        axeOptions: { runOnly: { type: "tag", values: ["wcag2aa"] } },
        detailedReport: true,
      });
    });
  }
});
