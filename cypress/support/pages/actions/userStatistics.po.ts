// import { UserStatisticsPageUI } from "../interfaces/userStatistics.interface";
import { AbstractPage } from './abstract.po';

export class UserStatisticsPage extends AbstractPage {
    constructor() {
        super();
    }

    placeholder() {
        cy.log('Click View all patient Button');
        // this.click(UserStatisticsPageUI.VIEW_ALL_PATIENT_BUTTON);
    }

    verifyplaceholder() {
        cy.log(`Verify UserStatistics Panel is displayed`);
        // this.shouldVisible(UserStatisticsPageUI.UserStatistics_PANEL);
    }
}
