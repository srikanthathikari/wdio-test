import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
     public get headerHamBurger () {
        return $('#react-burger-menu-btn');
    }
    public get cartIcon () {
        return $('.shopping_cart_link');
    }
    public get sort() {
        return $('.select_container');
    }
    public get sortOptions() {
        return $('.product_sort_container');
    }
    public get shopList() {
        return $('=Sauce Labs Onesie')
    }
    public get addToCart() {
        return $('#add-to-cart-sauce-labs-onesie');
    }
    public get cartBadgeCount() {
        return $('.shopping_cart_badge')
    }

    //Helper Methods
    public async sortComponent () {
        const sortDD = await this.sortOptions;
        await sortDD.selectByAttribute('value','lohi');
        let productText = await this.shopList.getText();
        expect(productText).toEqual('Sauce Labs Onesie');
    }
    public async validateAddToCart() {
        await this.addToCart.click();
        let countofn = await (await this.cartBadgeCount).getText();
        expect (Number(countofn)).toEqual(1);
    }
}
export default new HomePage();

