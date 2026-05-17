import { test, expect } from "@playwright/test";

test.describe("Secci\u00F3n Proyectos", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("debe mostrar el encabezado de proyectos", async ({ page }) => {
    await expect(page.getByTestId("projects-heading")).toBeVisible();
  });

  test("debe mostrar las tarjetas de proyecto", async ({ page }) => {
    const cards = page.getByTestId(/project-card-/);
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("cada proyecto debe tener t\u00EDtulo, descripci\u00F3n y tecnolog\u00EDas", async ({ page }) => {
    const cards = page.getByTestId(/project-card-/);
    const count = await cards.count();

    for (let i = 0; i < count; i++) {
      const id = await cards.nth(i).getAttribute("data-testid");
      const projId = id?.replace("project-card-", "");

      await expect(page.getByTestId(`project-title-${projId}`)).toBeVisible();
      await expect(page.getByTestId(`project-description-${projId}`)).toBeVisible();
    }
  });
});
