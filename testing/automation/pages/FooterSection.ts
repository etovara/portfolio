import { BasePage } from "./BasePage";

export class FooterSection extends BasePage {
  async getCopyright() {
    return this.getByTestId("footer-copyright");
  }

  async getBackToTopLink() {
    return this.getByTestId("footer-link-top");
  }

  async clickBackToTop() {
    await this.click("footer-link-top");
  }
}
