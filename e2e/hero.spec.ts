import { test, expect } from "@playwright/test";

test.describe("Secci\u00F3n Hero", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("debe mostrar el nombre del autor", async ({ page }) => {
    await expect(page.getByTestId("hero-name")).toBeVisible();
    await expect(page.getByTestId("hero-name")).not.toBeEmpty();
  });

  test("debe mostrar el rol profesional", async ({ page }) => {
    await expect(page.getByTestId("hero-role")).toBeVisible();
  });

  test("debe mostrar el tagline", async ({ page }) => {
    await expect(page.getByTestId("hero-tagline")).toBeVisible();
  });

  test("los botones CTA deben navegar a las secciones correctas", async ({ page }) => {
    await page.getByTestId("hero-cta-projects").click();
    await expect(page).toHaveURL(/#projects/);
    await page.getByTestId("hero-cta-contact").click();
    await expect(page).toHaveURL(/#contact/);
  });

  test("debe mostrar el enlace de LinkedIn si est\u00E1 configurado", async ({ page }) => {
    const linkedin = page.getByTestId("social-linkedin");
    if (await linkedin.isVisible()) {
      await expect(linkedin).toHaveAttribute("href", /linkedin/);
    }
  });
});
