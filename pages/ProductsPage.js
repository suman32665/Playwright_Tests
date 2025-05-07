import { BasePage } from './utils/BasePage.js';

export class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.productsTitle = page.locator('.title');
  }

  async isLoaded() {
    return this.isVisible(this.productsTitle);
  }
}
