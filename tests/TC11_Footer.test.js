import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { FooterPage } from '../pages/FooterPage.js';
import { credentials } from '../config/config.js';
import { socialmedia,copyRightText} from '../config/footer.js';

test.describe('@footer: Footer Verification', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateBaseUrl();
        await loginPage.waitForPageLoad();
        await loginPage.login(credentials.standardUser.username, credentials.standardUser.password);
    });

    test('Check Footer Elements in Products Page', async ({ page }) => {
        const footerPage = new FooterPage(page);
        
        await footerPage.scrollToBottom();

        await test.step('Verify Twitter URL', async () => {
            const url = await footerPage.getTwitterURL();
            expect(url).toEqual(socialmedia.twitter.url);
            
        })

        await test.step('Verify Facebook URL', async () => {
            const url = await footerPage.getFacebookURL();
            expect(url).toEqual(socialmedia.facebook.url);
        })

        await test.step('Verify LinkedIn URL', async () => {
            const url = await footerPage.getLinkedInURL();
            expect(url).toEqual(socialmedia.linkedin.url);
        })

        await test.step('Verify Copyright Text', async () => {
            const url = await footerPage.getCopyRightText();
            expect(url).toEqual(copyRightText);
        })
    });
});