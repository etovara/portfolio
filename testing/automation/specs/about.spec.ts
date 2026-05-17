import { test, expect } from "@playwright/test";
import { AboutSection } from "../pages";

test.describe("Secci\u00F3n About - POM", () => {
  let about: AboutSection;

  test.beforeEach(async ({ page }) => {
    about = new AboutSection(page);
    await about.goto();
  });

  test("debe mostrar el encabezado de la secci\u00F3n", async () => {
    await expect(await about.getHeading()).toBeVisible();
  });

  test("debe mostrar la biograf\u00EDa", async () => {
    await expect(await about.getBio()).toBeVisible();
    await expect(await about.getBio()).not.toBeEmpty();
  });

  test("debe mostrar la ubicaci\u00F3n", async () => {
    await expect(await about.getLocation()).toBeVisible();
  });
});
