import { BasePage } from '../utils/BasePage.js';

export class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.cartTitle = page.locator("//*[@data-test='title' and text()='Your Cart']");
        this.continueShoppingButton = page.locator('#continue-shopping');
        this.checkoutButton = page.locator('#checkout');
        
    }
    productInCart(name) {
        return this.page.locator(`//*[@class='cart_list']//*[text()='${name}']`);
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
    async verifyProductInCart(name) {
        return this.isVisible(this.productInCart(name));
    }

    async clickContinueShoppingButton() {
        return this.click(this.continueShoppingButton);
    }
    async clickCheckoutButton() {
        return this.click(this.checkoutButton);
    }

}
export default CartPage