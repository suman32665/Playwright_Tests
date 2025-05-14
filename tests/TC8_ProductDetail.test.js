import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { ProductDetailPage } from '../pages/ProductDetailPage.js';
import { credentials } from '../config/config.js';

[
    { item: 'Sauce Labs Backpack', price: '$29.99' },
    { item: 'Sauce Labs Bike Light', price: '$9.99' },
    { item: 'Sauce Labs Bolt T-Shirt', price: '$15.99' },
    { item: 'Sauce Labs Fleece Jacket', price: '$49.99' },
    { item: 'Sauce Labs Onesie', price: '$7.99' },
    { item: 'Test.allTheThings() T-Shirt (Red)', price: '$15.99' },
].forEach(({ item, price }) => {
    test.describe(`Verify ${item} in Product Detail Page`, {
        tag: '@products',
    }, () => {
        test.beforeEach(async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigateBaseUrl();
            await loginPage.waitForPageLoad();
            await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
        });

        test(`Verify Item name and Price`, async ({ page }) => {
            const productsPage = new ProductsPage(page);
            const productDetailPage = new ProductDetailPage(page);

            await test.step(`Click Item: ${item}`, async () => {
                await productsPage.clickProduct(item);
                await productDetailPage.verifyBackToProducts();
            })

            await test.step(`Item title should be ${item}`, async () => {
                const productName = await productDetailPage.getProductName();
                expect(productName).toEqual(item);
            })

            await test.step(`Item price should be ${price}`, async () => {
                const productPrice = await productDetailPage.getPrice();
                expect(productPrice).toEqual(price);
            })
        });
    });
});