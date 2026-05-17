import { BasePage } from "./BasePage";

export class ContactSection extends BasePage {
  async getHeading() {
    return this.getByTestId("contact-heading");
  }

  async getForm() {
    return this.getByTestId("contact-form");
  }

  async fillName(value: string) {
    await this.fill("contact-input-name", value);
  }

  async fillEmail(value: string) {
    await this.fill("contact-input-email", value);
  }

  async fillMessage(value: string) {
    await this.fill("contact-input-message", value);
  }

  async clickSubmit() {
    await this.click("contact-submit");
  }

  async getSuccessMessage() {
    return this.getByTestId("contact-success");
  }

  async getEmailLink() {
    return this.getByTestId("contact-email-link");
  }

  async submitContactForm(name: string, email: string, message: string) {
    await this.fillName(name);
    await this.fillEmail(email);
    await this.fillMessage(message);
    await this.clickSubmit();
  }
}
