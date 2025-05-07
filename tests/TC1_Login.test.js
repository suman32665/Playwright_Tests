import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { credentials } from '../config/config.js';

test.describe('Login Functionality', () => {
  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.navigate('https://www.saucedemo.com/');
    await loginPage.login(credentials.validUser.username, credentials.validUser.password);
    expect(await productsPage.isLoaded()).toBeTruthy();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate('https://www.saucedemo.com/');
    await loginPage.login('invalid_user', 'wrong_password');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username and password do not match');
  });
});
