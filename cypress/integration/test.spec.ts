import { LoginPage } from '../support/pages/actions/login.po';
// import { ForgotPasswordPage } from '../support/pages/actions/forgotPassword.po';
import { DashboardPage } from '../support/pages/actions/dashboard.po';
import { Constant } from '../support/common/constanst';
const loginPage = new LoginPage();
// const forgotPasswordPage = new ForgotPasswordPage();
const dashboardPage = new DashboardPage();
const username = Constant.PROVIDER_EMAIL;
const password = Constant.PROIVER_PASS;

// describe("Login Test With Cypress", () => {
//   context("Login with valid username and password", () => {
//     beforeEach(() => {
//       loginPage.gotoLoginPage();
//     });

//     it("Login Page", () => {

//       loginPage.inputUserName(username);
//       loginPage.inputPassword(password);
//       loginPage.clickLoginButton();
//       loginPage.verifyTitle('Dashboard');
//       loginPage.verifyProfileIsDisplayed('Hello Provider T.');
//     });
//   });
// });

// describe("Forgot password Test With Cypress", () => {
//   context("Successfully forgot password", () => {
//     beforeEach(() => {
//       loginPage.gotoLoginPage();
//       loginPage.clickForgotPasswordButton();
//     });

//     it("Reset password success", () => {
//       forgotPasswordPage.inputEmail(username);
//       forgotPasswordPage.clickResetPasswordButton();
//       forgotPasswordPage.verifyDialogMessageDisplayed("Done!");
//     });
//   });
// });


describe("Dashboard page Test With Cypress", () => {
  context("View dashboard page", () => {
    beforeEach(() => {
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
    });

    it("Verify dashboard is loaded", () => {
      dashboardPage.verifyDashboardPanelDisplayed();
    });

    it("Verify user can navigate to patient page when clicking View All Patient button", () => {
      dashboardPage.clickViewAllPatientsButton();
      dashboardPage.verifyPageHeaderDisplayed("Patients");
    });
  });
});
