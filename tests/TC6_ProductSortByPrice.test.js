import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { credentials } from '../config/config.js';

test.describe('@products: Sort Product  ', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateBaseUrl();
        await loginPage.waitForPageLoad();
        await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
    });

    test('Sort By Price (low to high)', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const SortByPriceLtoH = [
            { order: '1', price: '$7.99' },
            { order: '2', price: '$9.99' },
            { order: '3', price: '$15.99' },
            { order: '4', price: '$15.99' },
            { order: '5', price: '$29.99' },
            { order: '6', price: '$49.99' },
        ];

        await test.step('Select sorting Price (low to high) from dropdown', async () => {
            await productsPage.sortBy('Price (low to high)');
        })

        await test.step('Item should sorted: Price (low to high)', async () => {
            for (const item of SortByPriceLtoH) {
                const actualPrice = await productsPage.getPriceByOrder(item.order);
                expect(actualPrice).toEqual(item.price);
            }
        })
    });

    test('Sort By Price (high to low)', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const SortByPriceHtoL = [
            { order: '1', price: '$49.99' },
            { order: '2', price: '$29.99' },
            { order: '3', price: '$15.99' },
            { order: '4', price: '$15.99' },
            { order: '5', price: '$9.99' },
            { order: '6', price: '$7.99' },
        ];
        await test.step('Select sorting Price (high to low) from dropdown', async () => {
            await productsPage.sortBy('Price (high to low)');
        })

        await test.step('Item should sorted : Price (high to low)', async () => {
            for (const item of SortByPriceHtoL) {
                const actualPrice = await productsPage.getPriceByOrder(item.order);
                expect(actualPrice).toEqual(item.price);
            }
        })
    });
});

