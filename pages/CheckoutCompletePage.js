import { BasePage } from '../utils/BasePage.js';

export class CheckoutCompletePage extends BasePage {
    constructor(page) {
        super(page);
        this.cartTitle = page.locator("//*[@data-test='title' and text()='Checkout: Complete!']");
        this.backHomeButton = page.locator('#back-to-products');
        this.cancelButton = page.locator('#cancel');
        this.completeHeader = page.locator("//*[@data-test='complete-header' and text()='Thank you for your order!']");
        this.completeText = page.locator("//*[@data-test='complete-text' and text()='Your order has been dispatched, and will arrive just as fast as the pony can get there!']");
    }



    async verifyTitle() {
        return this.isVisible(this.cartTitle);
    }

    async verifyCompleteHeaderMessage() {
        return this.isVisible(this.completeHeader);
    }
    async verifyCompleteTextMessage() {
        return this.isVisible(this.completeText);
    }
    async clickBackHomeButton() {
        return this.click(this.backHomeButton);
    }

}
export default CheckoutCompletePage