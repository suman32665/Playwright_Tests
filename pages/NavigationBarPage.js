import { BasePage } from '../utils/BasePage.js';

export class NavigationBarPage extends BasePage {
  constructor(page) {
    super(page);
    this.hamburgerMenu = page.locator('#react-burger-menu-btn');
    this.allItems = page.locator("//*[@id='inventory_sidebar_link' and text()='All Items']");
    this.about = page.locator("//*[@id='inventory_sidebar_link' and text()='About']");
    this.logout = page.locator("//*[@id='inventory_sidebar_link' and text()='Logout']");
    this.resetAppState = page.locator("//*[@id='inventory_sidebar_link' and text()='Reset App State']");
    this.closeButton = page.locator(".bm-cross-button");
  }

  async verifyAllItems() {
    return this.isVisible(this.allItems);
  }
  async verifyAbout() {
    return this.isVisible(this.about);
  }
  async verifyLogout() {
    return this.isVisible(this.logout);
  }
  async verifyResetAppState() {
    return this.isVisible(this.resetAppState);
  }

  async clickHamburgerMenu() {
    await this.click(this.hamburgerMenu);
  }
  async clickCloseButton() {
    await this.click(this.closeButton);
  }
}
export default NavigationBarPage
