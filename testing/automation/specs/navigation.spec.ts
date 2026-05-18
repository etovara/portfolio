import { test, expect } from "@playwright/test";
import { HomePage } from "../pages";

test.describe("Navegación general - POM", () => {
  let home: HomePage;

  test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    await home.goto();
  });

  test("debe mostrar el logo ET en el header", async () => {
    const logo = await home.getNavLogo();
    await expect(logo).toBeVisible();
    await expect(logo).toHaveText("ET");
  });

  test("debe mostrar el toggle de idioma", async () => {
    await home.assertVisible("lang-toggle");
  });

  test("los enlaces de navegación desktop deben estar visibles", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    for (const label of ["sobre mí", "experiencia", "proyectos", "contacto"]) {
      await expect(await home.getDesktopNavLink(label)).toBeVisible();
    }
  });

  test("debe mostrar el menú móvil al hacer clic en el toggle", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await home.clickMenuToggle();
    await expect(await home.getMobileNavLink("sobre mí")).toBeVisible();
  });

  test("debe alternar el idioma al hacer clic en el toggle", async () => {
    const initialText = await home.getText("lang-toggle");
    await home.clickLangToggle();
    const newText = await home.getText("lang-toggle");
    expect(newText).not.toBe(initialText);
  });
});
