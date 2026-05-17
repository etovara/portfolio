import { BasePage } from "./BasePage";

export class ProjectsSection extends BasePage {
  async getHeading() {
    return this.getByTestId("projects-heading");
  }

  async getCardIds(): Promise<string[]> {
    const cards = this.page.getByTestId(/project-card-/);
    const count = await cards.count();
    const ids: string[] = [];
    for (let i = 0; i < count; i++) {
      const attr = await cards.nth(i).getAttribute("data-testid");
      if (attr) ids.push(attr.replace("project-card-", ""));
    }
    return ids;
  }

  async getCardCount(): Promise<number> {
    return await this.page.getByTestId(/project-card-/).count();
  }
}
