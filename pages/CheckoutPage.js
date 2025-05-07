import { BasePage } from '../utils/BasePage.js';

export class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);
        this.cartTitle = page.locator("//*[@data-test='title' and text()='Checkout: Your Information']");
        this.firstName = page.locator("#first-name");
        this.lastName = page.locator("#last-name");
        this.zipCode = page.locator("#postal-code");
        this.continueButton = page.locator('#continue');
        this.cancelButton = page.locator('#cancel');
        this.errorMessage = page.locator("//*[@data-test='error']");
    }

    async verifyTitle() {
        return this.isVisible(this.cartTitle);
    }

    async getErrorMessage() {
        return this.getText(this.errorMessage);
    }

    async clickCancelButton() {
        return this.click(this.cancelButton);
    }

    async clickContinueButton() {
        return this.click(this.continueButton);
    }

    async fillForm(firstname, lastname, zipcode) {
        await this.type(this.firstName, firstname);
        await this.type(this.lastName, lastname);
        await this.type(this.zipCode, zipcode);
    }

}
export default CheckoutPage