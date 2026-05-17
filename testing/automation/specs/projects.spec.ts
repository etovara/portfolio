import { test, expect } from "@playwright/test";
import { ProjectsSection } from "../pages";

test.describe("Secci\u00F3n Proyectos - POM", () => {
  let projects: ProjectsSection;

  test.beforeEach(async ({ page }) => {
    projects = new ProjectsSection(page);
    await projects.goto();
  });

  test("debe mostrar el encabezado de proyectos", async () => {
    await expect(await projects.getHeading()).toBeVisible();
  });

  test("debe mostrar las tarjetas de proyecto", async () => {
    const count = await projects.getCardCount();
    expect(count).toBeGreaterThan(0);
  });

  test("cada proyecto debe tener t\u00EDtulo y descripci\u00F3n", async () => {
    const ids = await projects.getCardIds();
    for (const id of ids) {
      await projects.assertVisible(`project-title-${id}`);
      await projects.assertVisible(`project-description-${id}`);
    }
  });
});
