import { BasePage } from '../utils/BasePage.js';

export class FooterPage extends BasePage {
  constructor(page) {
    super(page);
    this.twitter = page.locator("//*[@data-test='social-twitter']");
    this.facebook = page.locator("//*[@data-test='social-facebook']");
    this.linkedin = page.locator("//*[@data-test='social-linkedin']");
    this.copyRight = page.locator('.footer_copy');
  }

  async getTwitterURL() {
    return this.getAttribute(this.twitter, 'href');
  }

  async getFacebookURL() {
    return this.getAttribute(this.facebook, 'href');
  }

  async getLinkedInURL() {
    return this.getAttribute(this.linkedin, 'href');
  }

  async getCopyRightText() {
    return this.getText(this.copyRight);
  }

}
export default FooterPage
