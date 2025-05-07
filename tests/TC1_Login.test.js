import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { credentials } from '../config/config.js';

test.describe('@login: Login Functionality', () => {
  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await test.step('Navigate to the Base Url and Login', async () => {
        await loginPage.navigateBaseUrl();
        await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
    })
   
    await test.step('Verify Products Page Title', async () => {  
        expect(await productsPage.verifyTitle()).toBeTruthy();
    })
  });

  test('should show error for invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate to the Base Url and Login with incorrect username', async () => {
      await loginPage.navigateBaseUrl();
      await loginPage.login(credentials.invalidUser.username, credentials.standardUser.password);
    })
    await test.step('Verify the error message', async () => {
      const error = await loginPage.getErrorMessage();
      expect(error).toEqual('Epic sadface: Username and password do not match any user in this service');
    })
  });
    test('should show error for invalid password', async ({ page }) => {
      const loginPage = new LoginPage(page);
  
      await test.step('Navigate to the Base Url and Login with incorrect password', async () => {
        await loginPage.navigateBaseUrl();
        await loginPage.login(credentials.standardUser.username, credentials.invalidPassword.password);
      })
      await test.step('Verify the error message', async () => {
        const error = await loginPage.getErrorMessage();
        expect(error).toEqual('Epic sadface: Username and password do not match any user in this service');
      })
  });
});