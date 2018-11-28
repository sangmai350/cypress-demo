import { MSAPageUI } from "../interfaces/MSA.interface";
import { AbstractPage } from './abstract.po';

export class MSAPage extends AbstractPage {
    constructor() {
        super();
    }

    // placeholder() {
    //     cy.log('Click View all patient Button');
    //     this.click(NotificationPageUI.VIEW_ALL_PATIENT_BUTTON);
    // }

    verifyMSAPageDisplayed() {
        cy.log(`Verify Notification Panel is displayed`);
        this.shouldVisible(MSAPageUI.MSA_HEADER);
    }
}
