import { AbstractPage } from '../support/pages/actions/abstract.po';
import { LoginPage } from '../support/pages/actions/login.po';
// import { ForgotPasswordPage } from '../support/pages/actions/forgotPassword.po';
import { DashboardPage } from '../support/pages/actions/dashboard.po';
// import { PatientsPage } from '../support/pages/actions/patients.po';
import { CoachesPage } from '../support/pages/actions/coaches.po';
import { Constant } from '../support/common/constanst';

const loginPage = new LoginPage();
// const forgotPasswordPage = new ForgotPasswordPage();
const dashboardPage = new DashboardPage();
// const patientsPage = new PatientsPage();
const coachesPage = new CoachesPage();

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

// describe("Dashboard page Test With Cypress", () => {
//   context("View dashboard page", () => {
//     beforeEach(() => {
//       loginPage.gotoLoginPage();
//       loginPage.inputUserName(username);
//       loginPage.inputPassword(password);
//       loginPage.clickLoginButton();
//     });

//     it("Verify dashboard is loaded", () => {
//       dashboardPage.verifyDashboardPanelDisplayed();
//     });

//     it("Verify user can navigate to patient page when clicking View All Patient button", () => {
//       dashboardPage.clickViewAllPatientsButton();
//       dashboardPage.verifyPageHeaderDisplayed("Patients");
//     });
//   });
// });

// describe("Patients page Test With Cypress", () => {
//   context("View Patients page", () => {
//     beforeEach(() => {
//       loginPage.gotoLoginPage();
//       loginPage.inputUserName(username);
//       loginPage.inputPassword(password);
//       loginPage.clickLoginButton();
//       dashboardPage.clickViewAllPatientsButton();
//     });

//     it("Verify Patients page is loaded", () => {
//       patientsPage.verifyPatientsPageLoaded();
//     });

//     it("Verify user can create new patient", () => {
//       patientsPage.createNewClient("Toan", "Tran", `validEmail${AbstractPage.uniqueID()}@gmail.com`, "1234567890", "123", "Male");
//       patientsPage.verifyPatientAdded();
//     });

//     it("Verify user can goes to patient detail page", () => {
//       patientsPage.openFirstPatient();
//       patientsPage.verifyPatientDetailsDisplayed();
//     });

//     it("- Verify user can add a measurement for a patient", () => {
//       patientsPage.openFirstPatient();
//       patientsPage.clickPatientMenu("Measurements");
//       patientsPage.addMeasurement("100", "100", "100", "100");
//       patientsPage.verifyMeasurementAdded();
//     });
//   });
// });

describe("Coaches page Test With Cypress", () => {
  context("Checking Coaches page", () => {
    beforeEach(() => {
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
      dashboardPage.openLeftNavMenu("Accounts");
      dashboardPage.openLeftNavSubMenu("Coaches");
    });

    it("Verify Coach page is loaded", () => {
      coachesPage.verifyCoachTableDisplayed();
    });

    it("Verify user can create new coach", () => {
      coachesPage.addNewCoach("Toan", "Tran", `validEmail${AbstractPage.uniqueID()}@gmail.com`, "1234567890", "LeanMD");
      coachesPage.verifyNotificationSpanDisplayed("Coach successfully created.");
    });
  });
});
