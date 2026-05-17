import { test, expect } from "@playwright/test";

test.describe("Secci\u00F3n Experiencia", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("debe mostrar el encabezado de experiencia", async ({ page }) => {
    await expect(page.getByTestId("experience-heading")).toBeVisible();
  });

  test("debe listar las experiencias laborales", async ({ page }) => {
    const items = page.getByTestId(/experience-item-/);
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });

  test("cada experiencia debe tener empresa, rol, per\u00EDodo y tecnolog\u00EDas", async ({ page }) => {
    const items = page.getByTestId(/experience-item-/);
    const count = await items.count();

    for (let i = 0; i < count; i++) {
      const id = await items.nth(i).getAttribute("data-testid");
      const expId = id?.replace("experience-item-", "");

      await expect(page.getByTestId(`experience-role-${expId}`)).toBeVisible();
      await expect(page.getByTestId(`experience-period-${expId}`)).toBeVisible();
      await expect(page.getByTestId(`experience-company-${expId}`)).toBeVisible();
    }
  });
});
