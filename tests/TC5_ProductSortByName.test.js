import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { credentials } from '../config/config.js';

test.describe('@products: Sort Product  ',  {
        tag: '@products',
    },() => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateBaseUrl();
        await loginPage.waitForPageLoad();
        await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
    });

    test('Sort By Name(A to Z)', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const SortByNameAtoZ = [
            { order: '1', name: 'Sauce Labs Backpack' },
            { order: '2', name: 'Sauce Labs Bike Light' },
            { order: '3', name: 'Sauce Labs Bolt T-Shirt' },
            { order: '4', name: 'Sauce Labs Fleece Jacket' },
            { order: '5', name: 'Sauce Labs Onesie' },
            { order: '6', name: 'Test.allTheThings() T-Shirt (Red)' },
        ];

        await test.step('Select sorting Name (A to Z) from dropdown', async () => {
            await productsPage.sortBy('Name (A to Z)');
        })

        await test.step('Item should sorted: Name (A to Z)', async () => {
            for (const item of SortByNameAtoZ) {
                const actualItemName = await productsPage.getItemNameByOrder(item.order);
                expect(actualItemName).toEqual(item.name);
            }
        })
    });

    test('Sort By Name(Z to A)', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const SortByNameZtoA = [
            
            { order: '1', name: 'Test.allTheThings() T-Shirt (Red)' },
            { order: '2', name: 'Sauce Labs Onesie' },
            { order: '3', name: 'Sauce Labs Fleece Jacket' },
            { order: '4', name: 'Sauce Labs Bolt T-Shirt' },
            { order: '5', name: 'Sauce Labs Bike Light' },
            { order: '6', name: 'Sauce Labs Backpack' },
        ];
        await test.step('Select sorting Name (Z to A) from dropdown', async () => {
            await productsPage.sortBy('Name (Z to A)');
        })

        await test.step('Item should sorted : Name (Z to A)', async () => {
            for (const item of SortByNameZtoA) {
                const actualItemName = await productsPage.getItemNameByOrder(item.order);
                expect(actualItemName).toEqual(item.name);
            }
        })
    });
});

