import { test, expect } from "@playwright/test";

test.describe("Secci\u00F3n Contacto", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("debe mostrar el encabezado de contacto", async ({ page }) => {
    await expect(page.getByTestId("contact-heading")).toBeVisible();
  });

  test("debe mostrar el formulario de contacto", async ({ page }) => {
    await expect(page.getByTestId("contact-form")).toBeVisible();
  });

  test("el formulario debe tener los campos requeridos", async ({ page }) => {
    await expect(page.getByTestId("contact-input-name")).toBeVisible();
    await expect(page.getByTestId("contact-input-email")).toBeVisible();
    await expect(page.getByTestId("contact-input-message")).toBeVisible();
    await expect(page.getByTestId("contact-submit")).toBeVisible();
  });

  test("al enviar el formulario debe mostrar mensaje de \u00E9xito", async ({ page }) => {
    await page.getByTestId("contact-input-name").fill("Test User");
    await page.getByTestId("contact-input-email").fill("test@example.com");
    await page.getByTestId("contact-input-message").fill("Este es un mensaje de prueba.");
    await page.getByTestId("contact-submit").click();
    await expect(page.getByTestId("contact-success")).toBeVisible();
  });

  test("debe mostrar un enlace de correo electr\u00F3nico alternativo", async ({ page }) => {
    await expect(page.getByTestId("contact-email-link")).toBeVisible();
  });
});
