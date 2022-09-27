import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import HomePage from '../pageobjects/home.page'

describe('sauce demo app validation', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(HomePage.headerHamBurger).toBeDisplayed();
    })
    it('should display error message with invalid credentials', async () =>{
        await LoginPage.open();
        await LoginPage.login('standard_user', 'invalidPassword');
        await expect(SecurePage.errorMessage).toHaveText(`Epic sadface: Username and password do not match any user in this service`);
    });
});


