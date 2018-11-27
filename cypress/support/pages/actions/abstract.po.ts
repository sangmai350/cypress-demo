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

    clickTableFirstRow(locator: string) {
        cy.log(`Click first row of table`);
        this.click(AbstractPageUI.TABLE_FIRST_ROW);
    }

    verifyPageHeaderDisplayed(text: string) {
        cy.log(`Verify Page Header is displayed`);
        this.shouldHasText(AbstractPageUI.PAGE_HEADER, text);
    }


}
