import { CoachesPageUI } from "../interfaces/coaches.interface.";
import { AbstractPage } from './abstract.po';

export class CoachesPage extends AbstractPage {
    constructor() {
        super();
    }

    // clickViewAllPatientsButton() {
    //     cy.log('Click View all patient Button');
    //     this.click(DashboardPageUI.VIEW_ALL_PATIENT_BUTTON);
    // }

    // verifyDashboardPanelDisplayed() {
    //     cy.log(`Verify Dashboard Panel is displayed`);
    //     this.shouldVisible(DashboardPageUI.DASHBOARD_PANEL);
    // }
}