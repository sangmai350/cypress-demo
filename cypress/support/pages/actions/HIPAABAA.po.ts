import { HIPAABAAPageUI } from "../interfaces/HIPAABAA.interface";
import { AbstractPage } from './abstract.po';

export class HIPAABAAPage extends AbstractPage {
    constructor() {
        super();
    }

    // placeholder() {
    //     cy.log('Click View all patient Button');
    //     this.click(NotificationPageUI.VIEW_ALL_PATIENT_BUTTON);
    // }

    verifyHIPAABAAPageDisplayed() {
        cy.log(`Verify Notification Panel is displayed`);
        this.shouldVisible(HIPAABAAPageUI.HIPAABAA_HEADER);
    }
}
