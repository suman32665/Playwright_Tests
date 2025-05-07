import { BasePage } from '../utils/BasePage.js';

export class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.productsTitle = page.locator("//*[@data-test='title' and text()='Products']");
    this.shoppingCartLink = page.locator(".shopping_cart_link");
  }

  addToCart(name){
    return this.page.locator(`//*[.='${name}']//parent::div[@class='inventory_item_label']//following-sibling::*//*[text()='Add to cart']`);
  }

  async verifyTitle() {
    return this.isVisible(this.productsTitle);
  }

  async clickShoppingCartLink(){
    await this.click(this.shoppingCartLink);
    await this.waitForPageLoad();
  }

  async clickAddToCart(name) {
    await this.click(this.addToCart(name));
  }
}
export default ProductsPage