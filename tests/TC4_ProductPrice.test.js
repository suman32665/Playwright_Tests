import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { credentials } from '../config/config.js';

[
    { item: 'Sauce Labs Backpack', price: '$29.99' },
    { item: 'Sauce Labs Bike Light', price: '$9.99' },
    { item: 'Sauce Labs Bolt T-Shirt', price: '$15.99' },
    { item: 'Sauce Labs Fleece Jacket', price: '$49.99' },
    { item: 'Sauce Labs Onesie', price: '$7.99' },
    { item: 'Test.allTheThings() T-Shirt (Red)', price: '$15.99' },
].forEach(({ item, price }) => {
    test.describe(`Verify Price for ${item}`, {
        tag: '@products',
    }, () => {
        test.beforeEach(async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigateBaseUrl();
            await loginPage.waitForPageLoad();
            await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
        });

        test(`Price should be: ${price}`, async ({ page }) => {
            const productsPage = new ProductsPage(page);

            await test.step(` Price for ${item} should be ${price}`, async () => {
                const actualPrice = await productsPage.getPriceItem(item);
                expect(actualPrice).toEqual(price);
            })
        });
    });
});
