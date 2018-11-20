import { LoginPageUI } from "../interfaces/loginPage.interface";
import { BasePage } from "../../common/basePage";
export class LoginPage extends BasePage {
    constructor() {
        super();
    }
    async gotoLoginPage() {
        await this.gotoURL("https://dashboard.coachcaredev.com/");
    }
    async inputUserName(username: string) {
        await this.type(LoginPageUI.EMAIL_INPUT, username);
    }
    async inputPassword(password: string) {
        await this.type(LoginPageUI.PASSWORD_INPUT, password);

    }
    async clickLoginButton() {
        await this.click(LoginPageUI.LOGIN_BUTTON);
    }

}