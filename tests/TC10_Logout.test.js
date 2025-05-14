import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { NavigationBarPage } from '../pages/NavigationBarPage.js';
import { credentials } from '../config/config.js';

test.describe('Logout Functionality', {
    tag: '@logout',
}, () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateBaseUrl();
        await loginPage.waitForPageLoad();
        await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
    });
    test('Login and Logout', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const navigationBarPage = new NavigationBarPage(page);

        await test.step('Click on Hamburger Menu', async () => {
            await navigationBarPage.clickHamburgerMenu();
        })

        await test.step('Click Logout in Navigation Bar', async () => {
            expect(await navigationBarPage.clickLogout());
        })

        await test.step('User should be redirected to Login Page', async () => {
            expect(await loginPage.verifyLoginButton()).toBeTruthy();
        })
    });
});