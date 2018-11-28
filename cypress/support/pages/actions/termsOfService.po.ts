import { TermsOfServicesPageUI } from "../interfaces/termsOfService.interface";
import { AbstractPage } from './abstract.po';

export class TermsOfServicePage extends AbstractPage {
    constructor() {
        super();
    }

    // placeholder() {
    //     cy.log('Click View all patient Button');
    //     this.click(TermsOfServicePageUI.VIEW_ALL_PATIENT_BUTTON);
    // }

    verifyTermsOfServicesPageDisplayed() {
        cy.log(`Verify Terms Of Service header is displayed`);
        this.shouldVisible(TermsOfServicesPageUI.TERM_OF_SERVICE_PANEL);
    }
}
