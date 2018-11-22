import { LoginPage } from '../support/pages/actions/login.po';
import { Constant } from '../support/common/constanst';
const loginPage = new LoginPage();
const username = Constant.PROVIDER_EMAIL;
const password = Constant.PROIVER_PASS;
describe('Login Test With Cypress', () => {
  context('Login with valid username and password', () => {
    beforeEach(() => {
      // cy.viewport('iphone-6');
    });

    it('Login Page', () => {
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
      loginPage.verifyTitle('Provider Dashboard');
      loginPage.verifyProfileIsDisplayed('Hello Sang P.');
    });
  });
});
