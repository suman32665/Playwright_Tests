import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { credentials } from '../config/config.js';

[
    { item: 'Sauce Labs Backpack', img: '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg' },
    { item: 'Sauce Labs Bike Light', img: '/static/media/bike-light-1200x1500.37c843b0.jpg' },
    { item: 'Sauce Labs Bolt T-Shirt', img: '/static/media/bolt-shirt-1200x1500.c2599ac5.jpg' },
    { item: 'Sauce Labs Fleece Jacket', img: '/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg' },
    { item: 'Sauce Labs Onesie', img: '/static/media/red-onesie-1200x1500.2ec615b2.jpg' },
    { item: 'Test.allTheThings() T-Shirt (Red)', img: '/static/media/red-tatt-1200x1500.30dadef4.jpg' },
].forEach(({ item, img }) => {
    test.describe(` Login with Standard User and Verify Image Source for ${item}`, {
        tag: '@products',
    }, () => {
        test.beforeEach(async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigateBaseUrl();
            await loginPage.waitForPageLoad();
            await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
            await loginPage.waitForPageLoad();
        });

        test(`Image source should be: ${img}`, async ({ page }) => {
            const productsPage = new ProductsPage(page);

            await test.step(`Image source for ${item} should be ${img}`, async () => {
                const expectedImgSrc = await productsPage.getImageSrcForItem(item);
                expect(expectedImgSrc).toEqual(img);
            })
        });
    });
});


[
    { item: 'Sauce Labs Backpack', img: '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg' },
    { item: 'Sauce Labs Bike Light', img: '/static/media/bike-light-1200x1500.37c843b0.jpg' },
    { item: 'Sauce Labs Bolt T-Shirt', img: '/static/media/bolt-shirt-1200x1500.c2599ac5.jpg' },
    { item: 'Sauce Labs Fleece Jacket', img: '/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg' },
    { item: 'Sauce Labs Onesie', img: '/static/media/red-onesie-1200x1500.2ec615b2.jpg' },
    { item: 'Test.allTheThings() T-Shirt (Red)', img: '/static/media/red-tatt-1200x1500.30dadef4.jpg' },
].forEach(({ item, img }) => {
    test.describe(`Login with Problem User and Verify Image Source for ${item}`, {
        tag: '@products',
    }, () => {
        test.beforeEach(async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigateBaseUrl();
            await loginPage.waitForPageLoad();
            await loginPage.login(credentials.problemUser.username, credentials.problemUser.password);
            await loginPage.waitForPageLoad();
        });

        test(`Image source should be: ${img}`, async ({ page }) => {
            const productsPage = new ProductsPage(page);

            await test.step(`Image source for ${item} should be ${img}`, async () => {
                const expectedImgSrc = await productsPage.getImageSrcForItem(item);
                expect(expectedImgSrc).toEqual(img);
            })
        });
    });
});
