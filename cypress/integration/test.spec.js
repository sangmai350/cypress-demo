import { LoginPage } from '../support/pages/actions/loginPage';
const loginPage = new LoginPage();
const username = 'provider@coachcare.com';
const password = '123abc';
describe('Demo Page Object', () => {
  context('Demo', () => {
    beforeEach(() => {
    });

    it('Login Page', () => {
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
    });
  });
});