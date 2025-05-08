import { BasePage } from '../utils/BasePage.js';

export class ProductDetailPage extends BasePage {
    constructor(page) {
        super(page);
        this.backToProducts = page.locator("#back-to-products");
        this.productName = page.locator(".inventory_details_name");
        this.productPrice = page.locator(".inventory_details_price");
    }

    async verifyBackToProducts() {
        return this.isVisible(this.backToProducts);
    }

    async getProductName() {
        return this.getText(this.productName);
    }

    async getPrice() {
        return this.getText(this.productPrice);
    }


}
export default ProductDetailPage