import { LoginPageUI } from '../interfaces/login.interface';
import { BasePage } from '../../common/basePage';
export class LoginPage extends BasePage {
    constructor() {
        super();
    }
    gotoLoginPage() {
        cy.log('Go to Login Page');
        this.gotoURL('https://dashboard.coachcaredev.com/');
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
    verifyProfileIsDisplayed(text: string) {
        cy.log(`Verify Profile is displayed ${text}`);
        this.shouldHasText(LoginPageUI.PROFILE_BUTTON, text);
        this.getText(LoginPageUI.PROFILE_BUTTON).then(_text => {
            cy.log(_text.get(0).innerText);
        });
    }
    loginBySingleSignOn(username: string, password: string) {
        const url = 'https://api.coachcaredev.com/2.0/login';
        const options = {
            url: url,
            form: true,
            body: {
                email: username,
                password: password,
                deviceType: 2,
                allowedAccountTypes: 2,
            }
        };
        cy.request('POST', options).then((response) => {
            return response.body.token;
        });
    }
}
