import { BasePage } from '../utils/BasePage.js';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartTitle = page.locator("//*[@data-test='title' and text()='Your Cart']");
    this.continueShoppingButton = page.locator('#continue-shopping');
    this.checkoutButton = page.locator('#checkout');
  }

  async verifyTitle() {
    return this.isVisible(this.cartTitle);
  }
  async verifyContinueShoppingButton() {
    return this.isVisible(this.continueShoppingButton);
  }
  async verifyCheckoutButton() {
    return this.isVisible(this.checkoutButton);
  }


}
export default CartPage