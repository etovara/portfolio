import { test, expect } from "@playwright/test";
import { HomePage, HeroSection } from "../pages";

test.describe("Secci\u00F3n Hero - POM", () => {
  let hero: HeroSection;

  test.beforeEach(async ({ page }) => {
    hero = new HeroSection(page);
    await hero.goto();
  });

  test("debe mostrar el nombre del autor", async () => {
    await expect(await hero.getName()).toBeVisible();
    await expect(await hero.getName()).not.toBeEmpty();
  });

  test("debe mostrar el rol profesional", async () => {
    await expect(await hero.getRole()).toBeVisible();
  });

  test("debe mostrar el tagline", async () => {
    await expect(await hero.getTagline()).toBeVisible();
  });

  test("los botones CTA deben navegar a las secciones correctas", async () => {
    await hero.clickCtaProjects();
    await hero.assertUrl(/#projects/);
    await hero.clickCtaContact();
    await hero.assertUrl(/#contact/);
  });

  test("debe mostrar el enlace de LinkedIn si est\u00E1 configurado", async () => {
    const linkedin = await hero.getSocialLinkedin();
    if (await linkedin.isVisible()) {
      await expect(linkedin).toHaveAttribute("href", /linkedin/);
    }
  });
});
