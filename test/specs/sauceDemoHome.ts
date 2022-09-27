import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import HomePage from '../pageobjects/home.page'
import homePage from '../pageobjects/home.page';

describe('sauce demo home page validation', async() => {
    it('cart should be displayed in the header', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(HomePage.cartIcon).toBeClickable();
    })
    it('sort component validation', async() =>{
        await homePage.sortComponent();
    })
    it('add to cart',async () =>{
        await homePage.validateAddToCart();
    })
});


