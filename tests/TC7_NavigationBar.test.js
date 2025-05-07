import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { NavigationBarPage } from '../pages/NavigationBarPage.js';
import { credentials } from '../config/config.js';

test.describe('@navbar: Navigation Bar Test', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateBaseUrl();
        await loginPage.waitForPageLoad();
        await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
    });
    test('Click on Hamburger Menu and Verify Nav Bar Menu', async ({ page }) => {
        const navigationBarPage = new NavigationBarPage(page);

        await test.step('Click on Hamburger Menu', async () => {
            await navigationBarPage.clickHamburgerMenu();
        })
        await test.step('Verify Navigation Bar Menu', async () => {
            expect(await navigationBarPage.verifyAllItems()).toBeTruthy();
            expect(await navigationBarPage.verifyAbout()).toBeTruthy();
            expect(await navigationBarPage.verifyLogout()).toBeTruthy();
            expect(await navigationBarPage.verifyResetAppState()).toBeTruthy();
        })
    });
});