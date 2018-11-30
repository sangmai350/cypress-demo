export class AbstractPageUI {
    static readonly PAGE_HEADER = 'css=div[class=ccr-title] h2';
    static readonly INPUT_BY_PLACEHOLDER = 'css=input[placeholder="%s"]';
    static readonly TEXTAREA_BY_PLACEHOLDER = 'css=textarea[placeholder="%s"]';
    static readonly TABLE_FIRST_ROW = 'css=mat-row:nth-of-type(1) mat-cell:nth-child(1)';
    static readonly SELECT_BY_LABEL = 'css=mat-select[aria-label="%s"]';
    static readonly BUTTON_BY_LABEL = 'css=button[aria-label="%s"]';
    static readonly PRIMARY_BUTTON = 'css=button[color=primary]';
    static readonly PRIMARY_LINK = 'css=a[color=primary]';
    static readonly SELECT_OPTION = 'cssText=mat-option span Text= %s ';
    static readonly NOTIFICATION_SPAN = 'cssText=simple-snack-bar span Text=%s';
    static readonly LEFT_NAV_MENU_BUTTON = 'cssText=.mat-list-item-content span Text=%s';
    static readonly LEFT_NAV_SUBMENU_BUTTON = 'cssText=mat-list-item div span Text=%s';
    static readonly PRIMARY_LINK_BY_NAME = 'cssText=a[color="primary"] span span Text=%s';
    static readonly PRIMARY_LINK_BY_NAME_ONE_SPAN = 'cssText=a[color="primary"] span Text=%s';
    static readonly FOOTER_LINK_BY_NAME = 'cssText=a[rel="noopener noreferrer"] Text=%s';
    static readonly RADIO_BUTTON_BY_TEXT = 'cssText=.mat-radio-label-content Text=%s';
}
