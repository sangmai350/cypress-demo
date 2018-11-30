import { SetAvailabilityPageUI } from "../interfaces/setAvailability.interface";
import { AbstractPage } from './abstract.po';

export class SetAvailabilityPage extends AbstractPage {
    constructor() {
        super();
    }

    addRecurringSchedule() {
        cy.log(`Add a recurring schedule`);
        this.click(SetAvailabilityPageUI.ADD_NEW_RECURRING);
        this.clickPrimaryButton();
    }

    removeAllSchedule() {
        cy.log(`Remove all schedules`);
        this.click(SetAvailabilityPageUI.RESET_ALL_BUTTON);
        this.click(SetAvailabilityPageUI.CONFIRM_DELETE_RECURRING);
    }

    verifySetAvailabilityPageDisplayed() {
        cy.log(`Verify Notification Panel is displayed`);
        this.shouldVisible(SetAvailabilityPageUI.SET_SCHEDULE_PANEL);
    }

    verifyNewAvailabilityDisplays() {
        cy.log(`Verify New Availability is displayed`);
        this.verifyButtonDisplaysByLabel("Delete Availability");
    }
}
