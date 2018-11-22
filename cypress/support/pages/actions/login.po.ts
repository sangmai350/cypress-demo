import { LoginPageUI } from '../interfaces/login.interface';
import { BasePage } from '../../common/basePage';
import { from } from 'rxjs';
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
        // cy.log(`Verify Profile is displayed ${text}`);
        // this.shouldHasText(LoginPageUI.PROFILE_BUTTON, text);
        // this.getText(LoginPageUI.PROFILE_BUTTON).then(innerText => {
        //     cy.log(innerText.text());
        // });
        const observable = from(new Promise((resolve) => {
            Promise.resolve('Hello from a Promise!');
        }
        ));
        observable.subscribe(x => {
            console.log(x);
        });
    }
}
