import { BasePage } from "./BasePage";

export class ExperienceSection extends BasePage {
  async getHeading() {
    return this.getByTestId("experience-heading");
  }

  async getItemIds(): Promise<string[]> {
    const items = this.page.getByTestId(/experience-item-/);
    const count = await items.count();
    const ids: string[] = [];
    for (let i = 0; i < count; i++) {
      const attr = await items.nth(i).getAttribute("data-testid");
      if (attr) ids.push(attr.replace("experience-item-", ""));
    }
    return ids;
  }

  async getItemCount(): Promise<number> {
    return await this.page.getByTestId(/experience-item-/).count();
  }
}
