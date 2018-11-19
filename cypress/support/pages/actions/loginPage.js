import { LoginPageUI } from '../interfaces/loginPage.interface'
import { BasePage } from '../../common/basePage'
export class LoginPage extends BasePage {
    constructor() {
        super();
    }
    gotoLoginPage() {
        this.gotoURL('https://dashboard.coachcaredev.com/');
    }
    inputUserName(username) {
        this.type(LoginPageUI.EMAIL_INPUT, username);
    }
    inputPassword(password) {
        this.type(LoginPageUI.PASSWORD_INPUT, password);

    }
    clickLoginButton() {
        this.click(LoginPageUI.LOGIN_BUTTON);
    }

}