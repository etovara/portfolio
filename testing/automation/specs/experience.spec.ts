import { test, expect } from "@playwright/test";
import { ExperienceSection } from "../pages";

test.describe("Sección Experiencia - POM", () => {
  let experience: ExperienceSection;

  test.beforeEach(async ({ page }) => {
    experience = new ExperienceSection(page);
    await experience.goto();
  });

  test("debe mostrar el encabezado de experiencia", async () => {
    await expect(await experience.getHeading()).toBeVisible();
  });

  test("debe listar las experiencias laborales", async () => {
    const count = await experience.getItemCount();
    expect(count).toBeGreaterThan(0);
  });

  test("cada experiencia debe tener empresa, rol, período y tecnologías", async () => {
    const ids = await experience.getItemIds();
    for (const id of ids) {
      await experience.assertVisible(`experience-role-${id}`);
      await experience.assertVisible(`experience-period-${id}`);
      await experience.assertVisible(`experience-company-${id}`);
    }
  });
});
