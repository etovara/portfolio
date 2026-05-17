import { test, expect } from "@playwright/test";
import { ContactSection } from "../pages";
import { TEST_USERS } from "../fixtures/test-data";

test.describe("Secci\u00F3n Contacto - POM", () => {
  let contact: ContactSection;

  test.beforeEach(async ({ page }) => {
    contact = new ContactSection(page);
    await contact.goto();
  });

  test("debe mostrar el encabezado de contacto", async () => {
    await expect(await contact.getHeading()).toBeVisible();
  });

  test("debe mostrar el formulario de contacto", async () => {
    await expect(await contact.getForm()).toBeVisible();
  });

  test("el formulario debe tener los campos requeridos", async () => {
    await contact.assertVisible("contact-input-name");
    await contact.assertVisible("contact-input-email");
    await contact.assertVisible("contact-input-message");
    await contact.assertVisible("contact-submit");
  });

  test("al enviar el formulario debe mostrar mensaje de \u00E9xito", async () => {
    await contact.submitContactForm(
      TEST_USERS.valid.name,
      TEST_USERS.valid.email,
      TEST_USERS.valid.message
    );
    await expect(await contact.getSuccessMessage()).toBeVisible();
  });

  test("debe mostrar un enlace de correo electr\u00F3nico alternativo", async () => {
    await expect(await contact.getEmailLink()).toBeVisible();
  });
});
