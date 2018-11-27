import { ClinicsPageUI } from "../interfaces/clinics.interface";
import { AbstractPage } from './abstract.po';

export class ClinicsPage extends AbstractPage {
    constructor() {
        super();
    }

    // clickViewAllPatientsButton() {
    //     cy.log('Click View all patient Button');
    //     this.click(DashboardPageUI.VIEW_ALL_PATIENT_BUTTON);
    // }

    verifyClinicsTableDisplayed() {
        cy.log(`Verify Clinics table is displayed`);
        this.shouldVisible(ClinicsPageUI.CLINIC_TABLE);
    }
}
