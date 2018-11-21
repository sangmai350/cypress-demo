export class LoginPageUI {
    static readonly EMAIL_INPUT = 'css=input[type="email"]';
    static readonly PASSWORD_INPUT = 'css=input[type="password"]';
    static readonly LOGIN_BUTTON = 'css=button[color="primary"]';
    // static readonly PROFILE_BUTTON = 'css=button.user-controls > span > span:nth-of-type(1)';
    static readonly PROFILE_BUTTON = 'xpath=//button[@class="user-controls mat-button"]//span[@class="mat-button-wrapper"]/span[1]';
}
