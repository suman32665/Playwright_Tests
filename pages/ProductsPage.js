import { BasePage } from '../utils/BasePage.js';

export class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.productsTitle = page.locator("//*[@data-test='title' and text()='Products']");
  }

  async isLoaded() {
    return this.isVisible(this.productsTitle);
  }
}
export default ProductsPage