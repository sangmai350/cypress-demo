import { ViewSchedulesPageUI } from "../interfaces/viewSchedules.interface.3";
import { AbstractPage } from './abstract.po';

export class ViewSchedulesPage extends AbstractPage {
    constructor() {
        super();
    }

    // clickViewAllPatientsButton() {
    //     cy.log('Click View all patient Button');
    //     this.click(DashboardPageUI.VIEW_ALL_PATIENT_BUTTON);
    // }

    verifyViewSchedulesPanelDisplayed() {
        cy.log(`Verify View Schedules Panel is displayed`);
        this.shouldVisible(ViewSchedulesPageUI.VIEW_SCHEDULES_PANEL);
    }

    removeSelectableSchedule() {
        cy.get('div[class="meeting meeting-selectable ng-star-inserted"]').should(($element) => {
            if ($element.length > 0) {
                $element.click();
                this.click(ViewSchedulesPageUI.DELETE_SCHEDULE);
            }
        });
    }
}
