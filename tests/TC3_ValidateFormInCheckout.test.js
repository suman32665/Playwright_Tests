import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { credentials, userDetails } from '../config/config.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';

test.describe('Form Validation', {
    tag: '@validateForm',
}, () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateBaseUrl();
        await loginPage.waitForPageLoad();
        await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
    });

    test('Checkout and Validate form in Checkout:Your Information Page', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await test.step('Click on Shopping Cart link', async () => {
            await productsPage.clickShoppingCartLink();
        })

        await test.step('Click Checkout Button', async () => {
            await cartPage.clickCheckoutButton();
        })

        await test.step('Validate field: First Name', async () => {
            await checkoutPage.fillForm('', '', '');
            await checkoutPage.clickContinueButton();
            const error = await checkoutPage.getErrorMessage();
            expect(error).toEqual('Error: First Name is required');

        })

        await test.step('Validate field: Last Name', async () => {
            await checkoutPage.fillForm(userDetails.userInfo.firstName, '', '');
            await checkoutPage.clickContinueButton();
            const error = await checkoutPage.getErrorMessage();
            expect(error).toEqual('Error: Last Name is required');
        })

        await test.step('Validate field: Zip/Postal Code', async () => {
            await checkoutPage.fillForm(userDetails.userInfo.firstName, userDetails.userInfo.LastName, '');
            await checkoutPage.clickContinueButton();
            const error = await checkoutPage.getErrorMessage();
            expect(error).toEqual('Error: Postal Code is required');
        })
    });

});
