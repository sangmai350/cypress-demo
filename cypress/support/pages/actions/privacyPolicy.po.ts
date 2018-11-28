import { PrivacyPolicyPageUI } from "../interfaces/privacyPolicy.interface";
import { AbstractPage } from './abstract.po';

export class PrivacyPolicyPage extends AbstractPage {
    constructor() {
        super();
    }

    // placeholder() {
    //     cy.log('Click View all patient Button');
    //     this.click(NotificationPageUI.VIEW_ALL_PATIENT_BUTTON);
    // }

    verifyPrivacyPolicyPageDisplayed() {
        cy.log(`Verify Notification Panel is displayed`);
        this.shouldVisible(PrivacyPolicyPageUI.PRIVACY_POLICY_HEADER);
    }
}
