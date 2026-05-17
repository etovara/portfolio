import { test, expect } from "@playwright/test";

test.describe("Secci\u00F3n About", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("debe mostrar el encabezado de la secci\u00F3n", async ({ page }) => {
    await expect(page.getByTestId("about-heading")).toBeVisible();
  });

  test("debe mostrar la biograf\u00EDa", async ({ page }) => {
    await expect(page.getByTestId("about-bio")).toBeVisible();
    await expect(page.getByTestId("about-bio")).not.toBeEmpty();
  });

  test("debe mostrar la ubicaci\u00F3n", async ({ page }) => {
    await expect(page.getByTestId("about-location")).toBeVisible();
  });
});
