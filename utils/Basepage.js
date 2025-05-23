export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async navigateBaseUrl() {
    await this.page.goto('/');
  }

  async click(locator) {
    await locator.click();
  }

  async type(locator, text) {
    await locator.fill(text);
  }

  async getText(locator) {
    return await locator.textContent();
  }

  async getAttribute(locator, attribute) {
    return await locator.getAttribute(attribute);
  }

  async isVisible(locator) {
    return await locator.isVisible();
  }

  async getTitle() {
    return await this.page.title()
  }

  async pause() {
    return await this.page.pause()
  }

  async getUrl() {
    return this.page.url()
  }

  async wait() {
    return this.page.waitForTimeout(3000)
  }

  async waitForPageLoad() {
    return await this.page.waitForLoadState('domcontentloaded')
  }

  async scrollToBottom() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }
}

export default BasePage