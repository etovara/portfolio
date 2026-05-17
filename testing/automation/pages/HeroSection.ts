import { BasePage } from "./BasePage";

export class HeroSection extends BasePage {
  async getRole() {
    return this.getByTestId("hero-role");
  }

  async getName() {
    return this.getByTestId("hero-name");
  }

  async getTagline() {
    return this.getByTestId("hero-tagline");
  }

  async clickCtaProjects() {
    await this.click("hero-cta-projects");
  }

  async clickCtaContact() {
    await this.click("hero-cta-contact");
  }

  async getSocialLinkedin() {
    return this.getByTestId("social-linkedin");
  }

  async getSocialGithub() {
    return this.getByTestId("social-github");
  }
}
