import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { credentials, userDetails } from '../config/config.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage.js';
import CheckoutCompletePage from '../pages/CheckoutCompletePage.js';

test.describe('@addtocart: Add to Cart Functionality', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateBaseUrl();
        await loginPage.waitForPageLoad();
        await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
    });

    test('Go to Shopping cart link and verify cart page', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await test.step('Click on Shopping Cart link', async () => {
            await productsPage.clickShoppingCartLink();
        })

        await test.step('Verify Cart Page Title', async () => {
            expect(await cartPage.verifyTitle()).toBeTruthy();
        })

        await test.step('Verify Continue Shopping Button', async () => {
            expect(await cartPage.verifyContinueShoppingButton()).toBeTruthy();
        })

        await test.step('Verify Checkout Button', async () => {
            expect(await cartPage.verifyCheckoutButton()).toBeTruthy();
        })
    });

    test('Add Products to cart and checkout', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const checkoutOverviewPage = new CheckoutOverviewPage(page);
        const checkoutCompletePage = new CheckoutCompletePage(page);

        await test.step('Add to cart products:Sauce Labs Backpack,Sauce Labs Fleece Jacket', async () => {
            await productsPage.clickAddToCart('Sauce Labs Backpack');
            await productsPage.clickAddToCart('Sauce Labs Fleece Jacket');
        })

        await test.step('Click on Shopping Cart link', async () => {
            await productsPage.clickShoppingCartLink();
        })

        await test.step('Verify products in cart:Sauce Labs Backpack, Sauce Labs Fleece Jacket', async () => {
            await cartPage.verifyProductInCart('Sauce Labs Backpack');
            await cartPage.verifyProductInCart('Sauce Labs Fleece Jacket');
        })

        await test.step('Click on Checkout button', async () => {
            await cartPage.clickCheckoutButton();
        })

        await test.step('Fill up the form with FirstName, LastName, Zip/Postal Code', async () => {
            await checkoutPage.fillForm(userDetails.userInfo.firstName, userDetails.userInfo.LastName, userDetails.userInfo.zipCode);
        })

        await test.step('Click on Continue button', async () => {
            await checkoutPage.clickContinueButton();
        })

        await test.step('Verify products in Checkout Overview:Sauce Labs Backpack, Sauce Labs Fleece Jacket', async () => {
            await checkoutOverviewPage.verifyProductInCart('Sauce Labs Backpack');
            await checkoutOverviewPage.verifyProductInCart('Sauce Labs Fleece Jacket');
        })

        await test.step('Click on Finish button', async () => {
            await checkoutOverviewPage.clickFinishButton();
        })
        await test.step('Verify Complete Header Message: Thank you for your order!', async () => {
            await checkoutCompletePage.verifyCompleteHeaderMessage();
        })
        await test.step('Verify Complete Text Message: Your order has been dispatched, and will arrive just as fast as the pony can get there!', async () => {
            await checkoutCompletePage.verifyCompleteTextMessage();
        })
        await test.step('Click on BackHome button', async () => {
            await checkoutCompletePage.clickBackHomeButton();
        })
        await test.step('Verify Products Page Title', async () => {
            expect(await productsPage.verifyTitle()).toBeTruthy();
          })
    });
});
