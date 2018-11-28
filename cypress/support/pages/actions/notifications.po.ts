import { NotificationsPageUI } from "../interfaces/notifications.interface";
import { AbstractPage } from './abstract.po';

export class NotificationPage extends AbstractPage {
    constructor() {
        super();
    }

    // placeholder() {
    //     cy.log('Click View all patient Button');
    //     this.click(NotificationPageUI.VIEW_ALL_PATIENT_BUTTON);
    // }

    verifyNotificationsPageDisplayed() {
        cy.log(`Verify Notification Panel is displayed`);
        this.shouldVisible(NotificationsPageUI.NOTIFICATION_PANEL);
    }
}
