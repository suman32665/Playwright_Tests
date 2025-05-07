import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { credentials } from '../config/config.js';
import CartPage from '../pages/CartPage.js';

test.describe('Add to Cart Functionality', () => {
  test('Go to Shopping cart link and verify cart page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await test.step('Navigate to the Base Url and Login', async () => {
        await loginPage.navigateBaseUrl();
        await loginPage.waitForPageLoad();
        await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
        
    })
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
});
