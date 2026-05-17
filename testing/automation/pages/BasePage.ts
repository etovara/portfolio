import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path = "/") {
    await this.page.goto(path);
  }

  async getByTestId(id: string): Promise<Locator> {
    return this.page.getByTestId(id);
  }

  async assertVisible(testId: string) {
    await expect(this.page.getByTestId(testId)).toBeVisible();
  }

  async assertText(testId: string, text: string | RegExp) {
    await expect(this.page.getByTestId(testId)).toContainText(text);
  }

  async assertUrl(pattern: RegExp) {
    await expect(this.page).toHaveURL(pattern);
  }

  async click(testId: string) {
    await this.page.getByTestId(testId).click();
  }

  async fill(testId: string, value: string) {
    await this.page.getByTestId(testId).fill(value);
  }

  async getText(testId: string): Promise<string> {
    return (await this.page.getByTestId(testId).textContent()) ?? "";
  }
}
