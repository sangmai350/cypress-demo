import { UserStatisticsPageUI } from "../interfaces/userStatistics.interface";
import { AbstractPage } from './abstract.po';

export class UserStatisticsPage extends AbstractPage {
    constructor() {
        super();
    }

    // placeholder() {
    //     cy.log('Click View all patient Button');
    //     this.click(UserStatisticsPageUI.VIEW_ALL_PATIENT_BUTTON);
    // }

    verifyUserStatisticsPageDisplayed() {
        cy.log(`Verify User Statistics Panel is displayed`);
        this.shouldVisible(UserStatisticsPageUI.USER_STATISTICS_PANEL);
    }
}
