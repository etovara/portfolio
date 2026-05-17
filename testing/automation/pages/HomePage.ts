import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  async goto() {
    await super.goto("/");
  }

  async getNavLogo() {
    return this.getByTestId("nav-logo");
  }

  async getLangToggle() {
    return this.getByTestId("lang-toggle");
  }

  async clickLangToggle() {
    await this.click("lang-toggle");
  }

  async getMenuToggle() {
    return this.getByTestId("menu-toggle");
  }

  async clickMenuToggle() {
    await this.click("menu-toggle");
  }

  async getDesktopNavLink(label: string) {
    return this.getByTestId(`nav-link-${label}`);
  }

  async getMobileNavLink(label: string) {
    return this.getByTestId(`mobile-nav-link-${label}`);
  }
}
