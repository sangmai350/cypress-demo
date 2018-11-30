import { LoginPageUI } from "../interfaces/login.interface";
import { AbstractPage } from '../actions/abstract.po';
import promisify from 'cypress-promise';
import { Constant } from '../../common/constanst';

export class LoginPage extends AbstractPage {
    constructor() {
        super();
    }

    async login(username: string, password: string) {
        const body = {
            email: username,
            password: password,
            deviceType: '2',
            allowedAccountTypes: '2'
        };
        const token_id = await promisify(cy.request('POST', Constant.LOGIN_API_URL, body).then(response => response.body.token));
        cy.setCookie('SELVERAprovider', token_id);
        cy.setCookie('ccrStatic', 'provider');
        cy.setCookie('ccrStaticLanguage', 'en');
        cy.setCookie('io', 'sipc0K05xG-pqQh2AAEA');
        cy.setCookie('__stripe_mid', '544fa3b3-9ec7-4033-9e87-14c4423f01bf');
        this.gotoURL(Constant.DASHBOARD_URL);

    }
    gotoLoginPage() {
        cy.log('Go to Login Page');
        this.gotoURL(Constant.BASE_URL);
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
    async verifyProfileIsDisplayed(text: string) {
        cy.log(`Verify Profile is displayed ${text}`);
        this.shouldHasText(LoginPageUI.PROFILE_BUTTON, text);
        // const returnText = await this.getText(LoginPageUI.PROFILE_BUTTON);
        const isElementExist = await this.isControlExist(LoginPageUI.PROFILE_BUTTON);
        cy.log(`${isElementExist ? 'Dang display neeee' : 'DM eo hien roi'}`);
    }
}
