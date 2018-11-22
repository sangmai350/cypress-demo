import { DashboardPageUI } from "../interfaces/dashboard.interface";
import { AbstractPage } from '../actions/abstract.po';
// import { from } from 'rxjs';
// import { resolve, reject } from "bluebird";

export class DashboardPage extends AbstractPage {
    constructor() {
        super();
    }

    clickViewAllPatientsButton() {
        cy.log('Click View all patient Button');
        this.click(DashboardPageUI.VIEW_ALL_PATIENT_BUTTON);
    }

    verifyDashboardPanelDisplayed() {
        cy.log(`Verify Dashboard Panel is displayed`);
        this.shouldVisible(DashboardPageUI.DASHBOARD_PANEL);
    }
}