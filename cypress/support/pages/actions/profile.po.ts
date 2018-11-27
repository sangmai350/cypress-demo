import { ProfilePageUI } from "../interfaces/profile.interface";
import { AbstractPage } from './abstract.po';

export class ProfilePage extends AbstractPage {
    constructor() {
        super();
    }

    editProfile(text: string) {
        cy.log('Edit profile');
        this.inputByPlaceholder(text, "First Name");
        this.clickPrimaryButton();
    }

    verifyProfileIsUpdated() {
        cy.log('Verify profile is updated');
        this.verifyNotificationSpanDisplayed("Profile updated.");
    }
    verifyProfilePageDisplays() {
        cy.log(`Verify Profile Panel is displayed`);
        this.shouldVisible(ProfilePageUI.PROFILE_PAGE_PANEL);
    }
}
