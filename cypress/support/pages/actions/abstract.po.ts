import { AbstractPageUI } from "../interfaces/abstract.interface";
import { BasePage } from "../../common/basePage";
// import { from } from 'rxjs';
// import { resolve, reject } from "bluebird";

export class AbstractPage extends BasePage {
    constructor() {
        super();
    }

    verifyPageHeaderDisplayed(text: string) {
        cy.log(`Verify Page Header is displayed`);
        this.shouldHasText(AbstractPageUI.PAGE_HEADER, text);
    }
}