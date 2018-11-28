import { ForgotPasswordPageUI } from "../interfaces/forgotPassword.interface";
import { AbstractPage } from '../actions/abstract.po';
// import { from } from 'rxjs';
// import { resolve, reject } from "bluebird";

export class ForgotPasswordPage extends AbstractPage {
    constructor() {
        super();
    }

    inputEmail(username: string) {
        cy.log('Input The Username');
        this.type(ForgotPasswordPageUI.EMAIL_INPUT, username);
    }

    clickResetPasswordButton() {
        cy.log('Click Login Button');
        this.click(ForgotPasswordPageUI.RESET_PASSWORD_BUTTON);
    }

    verifyDialogMessageDisplayed(text: string) {
        cy.log(`Verify Profile is displayed ${text}`);
        this.shouldHasText(ForgotPasswordPageUI.DIALOG_CONTAINER, text);
    }
}
