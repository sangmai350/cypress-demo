import { ContactUsPageUI } from "../interfaces/contactUs.interface";
import { AbstractPage } from './abstract.po';

export class ContactUsPage extends AbstractPage {
    constructor() {
        super();
    }

    // placeholder() {
    //     cy.log('Click View all patient Button');
    //     this.click(ContactUsPageUI.VIEW_ALL_PATIENT_BUTTON);
    // }

    verifyContactUsPageDisplayed() {
        cy.log(`Verify Contact Us Header is displayed`);
        this.shouldVisible(ContactUsPageUI.CONTACT_US_HEADER);
    }
}
