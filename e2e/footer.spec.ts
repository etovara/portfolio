import { test, expect } from "@playwright/test";

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("debe mostrar el copyright", async ({ page }) => {
    await expect(page.getByTestId("footer-copyright")).toBeVisible();
    await expect(page.getByTestId("footer-copyright")).toContainText("Edwin Tovar");
  });

  test("debe tener un enlace para volver al inicio", async ({ page }) => {
    await expect(page.getByTestId("footer-link-top")).toBeVisible();
  });
});
