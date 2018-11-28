import { OverviewPageUI } from "../interfaces/overview.interface";
import { AbstractPage } from './abstract.po';

export class OverviewPage extends AbstractPage {
    constructor() {
        super();
    }

    clickActiveUserLink() {
        cy.log('Click Active user link');
        this.click(OverviewPageUI.ACTIVE_USER_LINK);
    }

    verifyOverviewPageDisplayed() {
        cy.log(`Verify Overview Panel is displayed`);
        this.shouldVisible(OverviewPageUI.OVERVIEW_PAGE_PANEL);
    }

    verifyActiveUserTableDisplayed() {
        cy.log(`Verify Active User table is displayed`);
        this.shouldVisible(OverviewPageUI.ACTIVE_USER_TABLE);
    }
}
