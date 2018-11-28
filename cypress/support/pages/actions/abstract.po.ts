import { AbstractPageUI } from "../interfaces/abstract.interface";
import { BasePage } from "../../common/basePage";
import { v4 as uuid } from 'uuid';
// import { from } from 'rxjs';
// import { resolve, reject } from "bluebird";

export class AbstractPage extends BasePage {
    constructor() {
        super();
    }

    static uniqueID() {
        return uuid();
    }

    inputByPlaceholder(text: string, placeholder: string) {
        cy.log(`Input ${text} to ${placeholder} textfield`);
        this.type(AbstractPageUI.INPUT_BY_PLACEHOLDER, text, placeholder);
    }

    textareaByPlaceholder(text: string, placeholder: string) {
        cy.log(`Input ${text} to ${placeholder} textarea`);
        this.type(AbstractPageUI.TEXTAREA_BY_PLACEHOLDER, text, placeholder);
    }

    clickTableFirstRow(locator: string) {
        cy.log(`Click first row of table`);
        this.click(AbstractPageUI.TABLE_FIRST_ROW);
    }

    verifyPageHeaderDisplayed(text: string) {
        cy.log(`Verify Page Header is displayed`);
        this.shouldHasText(AbstractPageUI.PAGE_HEADER, text);
    }

    openLeftNavMenu(label: string) {
        cy.log(`Open Left Nav Menu ${label}`);
        this.click(AbstractPageUI.LEFT_NAV_MENU_BUTTON, label);
    }

    openLeftNavSubMenu(label: string) {
        cy.log(`Open Left Nav Menu ${label}`);
        this.click(AbstractPageUI.LEFT_NAV_SUBMENU_BUTTON, label);
    }

    clickPrimaryButton() {
        cy.log(`Click Primary button`);
        this.click(AbstractPageUI.PRIMARY_BUTTON);
    }

    clickPrimaryLink() {
        cy.log(`Click Primary link`);
        this.click(AbstractPageUI.PRIMARY_LINK);
    }

    clickPrimaryLinkByName(label: string) {
        cy.log(`Click Primary link ${label}`);
        this.click(AbstractPageUI.PRIMARY_LINK_BY_NAME, label);
    }

    clickPrimaryLinkByNameOneSpan(label: string) {
        cy.log(`Click Primary link ${label}`);
        this.click(AbstractPageUI.PRIMARY_LINK_BY_NAME_ONE_SPAN, label);
    }

    typeToTextfieldByPlaceholder(text: string, label: string) {
        cy.log(`Type to textfield ${label} with text: ${text}`);
        this.type(AbstractPageUI.INPUT_BY_PLACEHOLDER, text, label);
    }

    selectOptionByLabel(label: string, option: string) {
        cy.log(`Select option: ${option} from selecter with label: ${label}`);
        this.click(AbstractPageUI.SELECT_BY_LABEL, label);
        this.click(AbstractPageUI.SELECT_OPTION, option);
    }

    clickButtonByLabel(label: string) {
        cy.log(`Click Button by with label: ${label}`);
        this.click(AbstractPageUI.BUTTON_BY_LABEL, label);
    }

    verifyNotificationSpanDisplayed(text: string) {
        cy.log(`Notification "${text}" should be displayed.`);
        this.shouldVisible(AbstractPageUI.NOTIFICATION_SPAN, true, text);
    }
}
