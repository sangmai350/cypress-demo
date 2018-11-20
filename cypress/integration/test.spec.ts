import { LoginPage } from '../support/pages/actions/login.po';

const loginPage = new LoginPage();
const username = "provider@coachcare.com";
const password = "123abc";
describe("Login Test With Cypress", () => {
  context("Login with valid username and password", () => {
    beforeEach(() => {
    });

    it("Login Page", () => {
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
      loginPage.verifyTitle('Provider Dashboard');
      loginPage.waitToLoading();
      loginPage.verifyTextIsDisplayed('Hello Provider T.');
    });
  });
});