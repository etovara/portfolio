import { test, expect } from "@playwright/test";
import { HomePage, AboutSection } from "../pages";
import { EXPECTED_ES, EXPECTED_EN } from "../fixtures/test-data";

test.describe("Internacionalizaci\u00F3n (i18n) - POM", () => {
  let home: HomePage;
  let about: AboutSection;

  test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    about = new AboutSection(page);
    await home.goto();
  });

  test("el idioma predeterminado debe ser espa\u00F1ol", async ({ page }) => {
    const sections = [
      { testId: "about-heading", expected: EXPECTED_ES.headings.about },
      { testId: "experience-heading", expected: EXPECTED_ES.headings.experience },
      { testId: "projects-heading", expected: EXPECTED_ES.headings.projects },
      { testId: "contact-heading", expected: EXPECTED_ES.headings.contact },
    ];
    for (const { testId, expected } of sections) {
      await expect(page.getByTestId(testId)).toHaveText(expected);
    }
  });

  test("al cambiar a ingl\u00E9s los textos deben actualizarse", async ({ page }) => {
    await home.clickLangToggle();
    const sections = [
      { testId: "about-heading", expected: EXPECTED_EN.headings.about },
      { testId: "experience-heading", expected: EXPECTED_EN.headings.experience },
      { testId: "projects-heading", expected: EXPECTED_EN.headings.projects },
      { testId: "contact-heading", expected: EXPECTED_EN.headings.contact },
    ];
    for (const { testId, expected } of sections) {
      await expect(page.getByTestId(testId)).toHaveText(expected);
    }
  });

  test("despu\u00E9s de alternar, el bot\u00F3n de idioma debe reflejar el cambio", async () => {
    expect(await home.getText("lang-toggle")).toBe("EN");
    await home.clickLangToggle();
    expect(await home.getText("lang-toggle")).toBe("ES");
  });

  test("el contenido del CV debe cambiar de idioma al alternar", async () => {
    await about.assertBioContains(/m\u00E1s de 10 a\u00F1os/);
    await home.clickLangToggle();
    await about.assertBioContains(/over 10 years/);
  });
});
