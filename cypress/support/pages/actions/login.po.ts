import { LoginPageUI } from "../interfaces/login.interface";
import { BasePage } from "../../common/basePage";
export class LoginPage extends BasePage {
    constructor() {
        super();
    }
    gotoLoginPage() {
        cy.log('Go to Login Page');
        this.gotoURL("https://dashboard.coachcaredev.com/");
    }
    inputUserName(username: string) {
        cy.log('Input The Username');
        this.type(LoginPageUI.EMAIL_INPUT, username);
    }
    inputPassword(password: string) {
        cy.log('Input The Password');
        this.type(LoginPageUI.PASSWORD_INPUT, password);

    }
    clickLoginButton() {
        cy.log('Click Login Button');
        this.click(LoginPageUI.LOGIN_BUTTON);
    }
    verifyTitle(title: string) {
        cy.log(`Verify Title is ${title}`);
        cy.title().should('include', title);
    }
    verifyTextIsDisplayed(text: string) {
        cy.log(`Verify Profile is displayed ${text}`);
        this.checkTheElementHasText(LoginPageUI.PROFILE_BUTTON, text);
    }
    waitToLoading() {
        cy.location('pathname', { timeout: 60000 }).should('include', '/provider');
    }
}