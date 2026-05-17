import { BasePage } from "./BasePage";

export class AboutSection extends BasePage {
  async getHeading() {
    return this.getByTestId("about-heading");
  }

  async getBio() {
    return this.getByTestId("about-bio");
  }

  async getLocation() {
    return this.getByTestId("about-location");
  }

  async assertBioContains(text: string | RegExp) {
    await this.assertText("about-bio", text);
  }
}
