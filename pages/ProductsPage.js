import { BasePage } from '../utils/BasePage.js';

export class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.productsTitle = page.locator("//*[@data-test='title' and text()='Products']");
    this.shoppingCartLink = page.locator(".shopping_cart_link");
    this.dropdownSort = page.locator(".product_sort_container");
  }

  addToCart(name) {
    return this.page.locator(`//*[.='${name}']//parent::div[@class='inventory_item_label']//following-sibling::*//*[text()='Add to cart']`);
  }

  priceForItem(item) {
    return this.page.locator(`//*[.='${item}']//parent::div[@class='inventory_item_label']//following-sibling::*//*[@class='inventory_item_price']`);
  }

  itemByOrder(order) {
    return this.page.locator(`//*[@class='inventory_item'][${order}]//*[@class='inventory_item_name ']`);
  }

  priceByOrder(order) {
    return this.page.locator(`//*[@class='inventory_item'][${order}]//*[@class='inventory_item_price']`);
  }

  imageSrcForItem(item){
    return this.page.locator(`//*[.='${item}']//ancestor::div[@class='inventory_item']//img`);
  }

  productName(item) {
    return this.page.locator(`//*[@class='inventory_item_name ' and text()='${item}']`);
  }

  async verifyTitle() {
    return this.isVisible(this.productsTitle);
  }

  async clickShoppingCartLink() {
    await this.click(this.shoppingCartLink);
    await this.waitForPageLoad();
  }

  async clickAddToCart(name) {
    await this.click(this.addToCart(name));
  }

  async clickProduct(item) {
    await this.click(this.productName(item));
  }

  async getPriceItem(item) {
    return this.getText(this.priceForItem(item));
  }

  async getItemNameByOrder(order) {
    return this.getText(this.itemByOrder(order));
  }

  async getPriceByOrder(order) {
    return this.getText(this.priceByOrder(order));
  }

  async getImageSrcForItem(item) {
    return this.getAttribute(this.imageSrcForItem(item), 'src');
  }

  async sortBy(label) {
    await this.dropdownSort.selectOption({ label: `${label}` })
  }

}
export default ProductsPage