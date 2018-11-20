import { LoginPageUI } from "../interfaces/login.interface";
import { BasePage } from "../../common/basePage";
export class LoginPage extends BasePage {
    constructor() {
        super();
    }
    async gotoLoginPage() {
        cy.log('Go to Login Page');
        await this.gotoURL("https://dashboard.coachcaredev.com/");
    }
    async inputUserName(username: string) {
        cy.log('Input The Username');
        await this.type(LoginPageUI.EMAIL_INPUT, username);
    }
    async inputPassword(password: string) {
        cy.log('Input The Password');
        await this.type(LoginPageUI.PASSWORD_INPUT, password);

    }
    async clickLoginButton() {
        cy.log('Click Login Button');
        await this.click(LoginPageUI.LOGIN_BUTTON);
    }
    async verifyTitle(title: string) {
        cy.log(`Verify Title is ${title}`);
        cy.title().should('include', title);
    }
    async verifyTextIsDisplayed(text: string) {
        cy.log(`Verify Profile is displayed ${text}`);
        await this.checkTheElementHasValue(LoginPageUI.PROFILE_BUTTON, text);
    }
    async waitToLoading() {
        cy.location('pathname', { timeout: 60000 }).should('include', '/provider');
    }
}