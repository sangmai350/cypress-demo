import { LoginPageUI } from "../interfaces/login.interface";
import { AbstractPage } from '../actions/abstract.po';
// import { from } from 'rxjs';
// import { resolve, reject } from "bluebird";

export class LoginPage extends AbstractPage {
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
    clickForgotPasswordButton() {
        cy.log('Click Forgot Password Button');
        this.click(LoginPageUI.FORGOT_PASSWORD_BUTTON);
    }
    verifyTitle(title: string) {
        cy.log(`Verify Title is ${title}`);
        cy.title().should('include', title);
    }
    verifyProfileIsDisplayed(text: string) {
        cy.log(`Verify Profile is displayed ${text}`);
        this.shouldHasText(LoginPageUI.PROFILE_BUTTON, text);
        // let text1 = ''
        // this.getText(LoginPageUI.PROFILE_BUTTON).then(innerText => {
        //     text1 = innerText.text();
        //     cy.log(innerText.text());
        // });
        // var observable = from(new Promise((resolve, reject) => {
        //     resolve('Hello from a Promise!');
        // }
        // ));
        // observable.subscribe(resolve => {
        //     console.log(resolve);
        // })
    }
}