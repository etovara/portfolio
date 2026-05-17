import { test, expect } from "@playwright/test";

test.describe("Internacionalizaci\u00F3n (i18n)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("el idioma predeterminado debe ser espa\u00F1ol", async ({ page }) => {
    await expect(page.getByTestId("about-heading")).toHaveText("Sobre M\u00ED");
    await expect(page.getByTestId("experience-heading")).toHaveText("Experiencia");
    await expect(page.getByTestId("projects-heading")).toHaveText("Proyectos");
    await expect(page.getByTestId("contact-heading")).toHaveText("Contacto");
  });

  test("al cambiar a ingl\u00E9s los textos deben actualizarse", async ({ page }) => {
    await page.getByTestId("lang-toggle").click();
    await expect(page.getByTestId("about-heading")).toHaveText("About Me");
    await expect(page.getByTestId("experience-heading")).toHaveText("Experience");
    await expect(page.getByTestId("projects-heading")).toHaveText("Projects");
    await expect(page.getByTestId("contact-heading")).toHaveText("Get in Touch");
  });

  test("despu\u00E9s de alternar, el bot\u00F3n de idioma debe reflejar el cambio", async ({ page }) => {
    const toggle = page.getByTestId("lang-toggle");
    expect(await toggle.textContent()).toBe("EN");
    await toggle.click();
    expect(await toggle.textContent()).toBe("ES");
  });

  test("el contenido del CV debe cambiar de idioma al alternar", async ({ page }) => {
    await expect(page.getByTestId("about-bio")).toContainText("m\u00E1s de 10 a\u00F1os");
    await page.getByTestId("lang-toggle").click();
    await expect(page.getByTestId("about-bio")).toContainText("over 10 years");
  });
});
