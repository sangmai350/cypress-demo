import { AbstractPage } from '../support/pages/actions/abstract.po';
import { Constant } from '../support/common/constanst';
import { LoginPage } from '../support/pages/actions/login.po';
import { ForgotPasswordPage } from '../support/pages/actions/forgotPassword.po';
import { DashboardPage } from '../support/pages/actions/dashboard.po';
import { PatientsPage } from '../support/pages/actions/patients.po';
import { CoachesPage } from '../support/pages/actions/coaches.po';
import { MessagePage } from '../support/pages/actions/message.po';
import { ProfilePage } from '../support/pages/actions/profile.po';
import { ClinicsPage } from '../support/pages/actions/clinics.po';
import { OverviewPage } from '../support/pages/actions/overview.po';
import { UserStatisticsPage } from '../support/pages/actions/userStatistics.po';
import { NotificationPage } from '../support/pages/actions/notifications.po';
import { NotificationSettingsPage } from '../support/pages/actions/notificationSettings.po';
// import { SetAvailabilityPage } from '../support/pages/actions/setAvailability.po';
// import { ViewSchedulesPage } from '../support/pages/actions/viewSchedules.po';
// import { SupportPage } from '../support/pages/actions/support.po';

const loginPage = new LoginPage();
const forgotPasswordPage = new ForgotPasswordPage();
const dashboardPage = new DashboardPage();
const patientsPage = new PatientsPage();
const coachesPage = new CoachesPage();
const messagePage = new MessagePage();
const profilePage = new ProfilePage();
const clinicsPage = new ClinicsPage();
const overviewPage = new OverviewPage();
const userStatistics = new UserStatisticsPage();
const notificationPage = new NotificationPage();
const notificationSettings = new NotificationSettingsPage();
// const setAvailabilityPage = new SetAvailabilityPage();
// const viewSchedulesPage = new ViewSchedulesPage();
// const supportPage = new SupportPage();

const username = Constant.PROVIDER_EMAIL;
const password = Constant.PROIVER_PASS;

describe.only("Login Test With Cypress", () => {
  context("Login with valid username and password", () => {
    beforeEach(() => {
      // loginPage.gotoLoginPage();
    });

    it("Login Page", () => {
      loginPage.login(username, password);
      // loginPage.inputUserName(username);
      // loginPage.inputPassword(password);
      // loginPage.clickLoginButton();
      loginPage.verifyTitle('Dashboard');
      loginPage.verifyProfileIsDisplayed('Hello Provider T.');
    });
  });
});

describe("Forgot password Test With Cypress", () => {
  context("Successfully forgot password", () => {
    beforeEach(() => {
      loginPage.gotoLoginPage();
      loginPage.clickForgotPasswordButton();
    });

    it("Reset password success", () => {
      forgotPasswordPage.inputEmail(username);
      forgotPasswordPage.clickResetPasswordButton();
      forgotPasswordPage.verifyDialogMessageDisplayed("Done!");
    });
  });
});

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

describe("Patients page Test With Cypress", () => {
  context("View Patients page", () => {
    beforeEach(() => {
      cy.viewport("macbook-15");
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
      dashboardPage.clickViewAllPatientsButton();
    });

    it("Verify Patients page is loaded", () => {
      patientsPage.verifyPatientsPageLoaded();
    });

    it("Verify user can create new patient", () => {
      patientsPage.createNewClient("Toan", "Tran", `validEmail${AbstractPage.uniqueID()}@gmail.com`, "1234567890", "123", "Male");
      patientsPage.verifyPatientAdded();
    });

    it("Verify user can goes to patient detail page", () => {
      patientsPage.openFirstPatient();
      patientsPage.verifyPatientDetailsDisplayed();
    });

    it("- Verify user can add a measurement for a patient", () => {
      patientsPage.openFirstPatient();
      patientsPage.clickPatientMenu("Measurements");
      patientsPage.addMeasurement("100", "100", "100", "100", "100");
      patientsPage.verifyMeasurementAdded();
    });
  });
});

describe("Clinics page Test With Cypress", () => {
  context("Checking Clinics page", () => {
    beforeEach(() => {
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
      dashboardPage.openLeftNavMenu("Accounts");
      dashboardPage.openLeftNavSubMenu("Clinics");
    });

    it("Verify Clinics page is loaded", () => {
      clinicsPage.verifyClinicsTableDisplayed();
    });
  });
});

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

describe("Message page Test With Cypress", () => {
  context("Checking Messages page", () => {
    beforeEach(() => {
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
      dashboardPage.openLeftNavMenu("Messages");
    });

    it("Verify Message page is loaded", () => {
      messagePage.verifyMessagePageDisplayed();
    });

    it("Verify user can send message", () => {
      const text = AbstractPage.uniqueID();
      messagePage.sendMessage(text);
      messagePage.verifyMessageIsSent(text);
    });
  });
});

describe("Profile page Test With Cypress", () => {
  context("Checking Profile page", () => {
    beforeEach(() => {
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
      dashboardPage.openProfilePage();
    });

    it("Verify Profile page is loaded", () => {
      profilePage.verifyProfilePageDisplays();
    });

    it("Verify User can edit profile successfully", () => {
      const text = AbstractPage.uniqueID();
      profilePage.editProfile(text);
      profilePage.verifyProfileIsUpdated();
    });
  });
});

describe("Overview page Test With Cypress", () => {
  context("Checking Overview page", () => {
    beforeEach(() => {
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
      dashboardPage.openLeftNavMenu("Reports");
      dashboardPage.openLeftNavSubMenu("Overview");
    });

    it("Verify Overview page is loaded", () => {
      overviewPage.verifyOverviewPageDisplayed();
    });

    it("Verify User can see Active user", () => {
      overviewPage.clickActiveUserLink();
      overviewPage.verifyActiveUserTableDisplayed();
    });
  });
});

describe("User statistics page Test With Cypress", () => {
  context("Checking User statistics page", () => {
    beforeEach(() => {
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
      dashboardPage.openLeftNavMenu("Reports");
      dashboardPage.openLeftNavSubMenu("User Statistics");
    });

    it("Verify User statistics page is loaded", () => {
      userStatistics.verifyUserStatisticsPageDisplayed();
    });
  });
});

describe("User Notifications page Test With Cypress", () => {
  context("Checking Notifications page", () => {
    beforeEach(() => {
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
      dashboardPage.openLeftNavMenu("Alerts");
      dashboardPage.openLeftNavSubMenu("Notifications");
    });

    it("Verify Notifications page is loaded", () => {
      notificationPage.verifyNotificationsPageDisplayed();
    });
  });
});

describe("User Notification Settings Test With Cypress", () => {
  context("Checking Notification Settings page", () => {
    beforeEach(() => {
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
      dashboardPage.openLeftNavMenu("Alerts");
      dashboardPage.openLeftNavSubMenu("Settings");
    });

    it("Verify Notification settings page is loaded", () => {
      notificationSettings.verifyNotificationSettingsPageDisplayed();
    });
  });
});

describe("All footer page Test With Cypress", () => {
  context("Checking all footer page", () => {
    beforeEach(() => {
      loginPage.gotoLoginPage();
    });

    it("Verify Contact Us page is loaded", () => {
      loginPage.verifyFooterLinkByName("Contact Us", "Submit a request");
    });

    it("Verify Terms of Service page is loaded", () => {
      loginPage.verifyFooterLinkByName("Terms of Service", "CoachCare Terms of Service");
    });

    it("Verify Privacy Policy page is loaded", () => {
      loginPage.verifyFooterLinkByName("Privacy Policy", "CoachCare Privacy Policy");
    });

    it("Verify HIPAA BAA page is loaded", () => {
      loginPage.verifyFooterLinkByName("HIPAA BAA", "CoachCare HIPAA Business Associate Agreement");
    });

    it("Verify MSA page is loaded", () => {
      loginPage.verifyFooterLinkByName("MSA", "CoachCare Master Subscription Agreement");
    });

    it("Verify GDPR DPA page is loaded", () => {
      loginPage.verifyFooterLinkByName("GDPR DPA", "CoachCare GDPR Data Protection Addendum");
    });
  });
});
