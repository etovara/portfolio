import { test, expect } from "@playwright/test";

test.describe("Navegaci\u00F3n general", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("debe mostrar el logo ET en el header", async ({ page }) => {
    await expect(page.getByTestId("nav-logo")).toBeVisible();
    await expect(page.getByTestId("nav-logo")).toHaveText("ET");
  });

  test("debe mostrar el toggle de idioma", async ({ page }) => {
    await expect(page.getByTestId("lang-toggle")).toBeVisible();
  });

  test("los enlaces de navegaci\u00F3n desktop deben estar visibles", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    const links = ["Sobre m\u00ED", "Experiencia", "Proyectos", "Contacto"];
    for (const label of links) {
      await expect(page.getByTestId(`nav-link-${label.toLowerCase()}`)).toBeVisible();
    }
  });

  test("debe mostrar el men\u00FA m\u00F3vil al hacer clic en el toggle", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.getByTestId("menu-toggle").click();
    await expect(page.getByTestId("mobile-nav-link-sobre m\u00ED")).toBeVisible();
  });

  test("debe alternar el idioma al hacer clic en el toggle", async ({ page }) => {
    const toggle = page.getByTestId("lang-toggle");
    const initialText = await toggle.textContent();
    await toggle.click();
    const newText = await toggle.textContent();
    expect(newText).not.toBe(initialText);
  });
});
