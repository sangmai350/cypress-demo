import { SetAvailabilityPageUI } from "../interfaces/setAvailability.interface";
import { AbstractPage } from './abstract.po';

export class SetAvailabilityPage extends AbstractPage {
    constructor() {
        super();
    }

    // placeholder() {
    //     cy.log('Click View all patient Button');
    //     this.click(NotificationPageUI.VIEW_ALL_PATIENT_BUTTON);
    // }

    verifySetAvailabilityPageDisplayed() {
        cy.log(`Verify Notification Panel is displayed`);
        this.shouldVisible(SetAvailabilityPageUI.NOTIFICATION_PANEL);
    }
}
