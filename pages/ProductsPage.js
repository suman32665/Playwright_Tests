import { BasePage } from '../utils/BasePage.js';

export class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.productsTitle = page.locator("//*[@data-test='title' and text()='Products']");
    this.shoppingCartLink = page.locator(".shopping_cart_link");
  }

  async verifyTitle() {
    return this.isVisible(this.productsTitle);
  }

  async clickShoppingCartLink(){
    await this.click(this.shoppingCartLink);
    await this.waitForPageLoad();
  }
}
export default ProductsPage