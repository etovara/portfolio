import { test, expect } from "@playwright/test";
import { AboutSection } from "../pages";

test.describe("Sección About - POM", () => {
  let about: AboutSection;

  test.beforeEach(async ({ page }) => {
    about = new AboutSection(page);
    await about.goto();
  });

  test("debe mostrar el encabezado de la sección", async () => {
    await expect(await about.getHeading()).toBeVisible();
  });

  test("debe mostrar la biografía", async () => {
    await expect(await about.getBio()).toBeVisible();
    await expect(await about.getBio()).not.toBeEmpty();
  });

  test("debe mostrar la ubicación", async () => {
    await expect(await about.getLocation()).toBeVisible();
  });
});
