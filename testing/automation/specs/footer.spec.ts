import { test, expect } from "@playwright/test";
import { FooterSection } from "../pages";

test.describe("Footer - POM", () => {
  let footer: FooterSection;

  test.beforeEach(async ({ page }) => {
    footer = new FooterSection(page);
    await footer.goto();
  });

  test("debe mostrar el copyright", async () => {
    await expect(await footer.getCopyright()).toBeVisible();
    await expect(await footer.getCopyright()).toContainText("Edwin Tovar");
  });

  test("debe tener un enlace para volver al inicio", async () => {
    await expect(await footer.getBackToTopLink()).toBeVisible();
  });
});
