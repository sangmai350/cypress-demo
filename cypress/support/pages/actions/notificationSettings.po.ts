import { NotificationSettingsPageUI } from "../interfaces/notificationSettings.interface";
import { AbstractPage } from './abstract.po';

export class NotificationSettingsPage extends AbstractPage {
    constructor() {
        super();
    }

    // placeholder() {
    //     cy.log('Click View all patient Button');
    //     this.click(NotificationSettingsPageUI.VIEW_ALL_PATIENT_BUTTON);
    // }

    verifyNotificationSettingsPageDisplayed() {
        cy.log(`Verify Notification Settings Panel is displayed`);
        this.shouldVisible(NotificationSettingsPageUI.NOTIFICATION_PAGE_SETTINGS);
    }
}
