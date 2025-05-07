import { BasePage } from '../utils/BasePage.js';

export class CheckoutOverviewPage extends BasePage {
    constructor(page) {
        super(page);
        this.cartTitle = page.locator("//*[@data-test='title' and text()='Checkout: Overview']");
        this.finishButton = page.locator('#finish');
        this.cancelButton = page.locator('#cancel');
    }
    productInCart(name) {
        return this.page.locator(`//*[@class='cart_list']//*[text()='${name}']`);
    }

    async verifyProductInCart(name) {
        return this.isVisible(this.productInCart(name));
    }

    async verifyTitle() {
        return this.isVisible(this.cartTitle);
    }

    async clickFinishButton() {
        return this.click(this.finishButton);
    }

    async clickContinueButton() {
        return this.click(this.continueButton);
    }

}
export default CheckoutOverviewPage