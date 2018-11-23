import { AbstractPageUI } from "../interfaces/abstract.interface";
import { BasePage } from "../../common/basePage";
// import { from } from 'rxjs';
// import { resolve, reject } from "bluebird";

export class AbstractPage extends BasePage {
    constructor() {
        super();
    }

    inputByPlaceholder(placeholder: string, text: string) {
        cy.log(`Input ${text} to ${placeholder} textfield`);
        var locator = AbstractPageUI.INPUT_BY_PLACEHOLDER.replace("%s", placeholder);
        this.type(locator, text);
    }

    clickTableFirstRow(locator: string) {
        cy.log(`Click first row of table`);
        this.click(AbstractPageUI.TABLE_FIRST_ROW);
    }

    verifyPageHeaderDisplayed(text: string) {
        cy.log(`Verify Page Header is displayed`);
        this.shouldHasText(AbstractPageUI.PAGE_HEADER, text);
    }
}