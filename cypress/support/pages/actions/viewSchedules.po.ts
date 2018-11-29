import { ViewSchedulesPageUI } from "../interfaces/viewSchedules.interface";
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
        cy.get(ViewSchedulesPageUI.RAW_AVAILABLE_SCHEDULE).each($ele => {
            $ele.click();
            cy.get('body').then(($body) => {
                if ($body.find(ViewSchedulesPageUI.RAW_DELETE_SCHEDULE).length) {
                    // input was found, do something else here
                    cy.get(ViewSchedulesPageUI.RAW_DELETE_SCHEDULE).click();
                    this.click(ViewSchedulesPageUI.CONFIRM_DELETE_SCHEDULE);
                    this.wait(2);
                }
            });
            // const isVisible = await this.isControlExist(ViewSchedulesPageUI.DELETE_SCHEDULE);
            // cy.get(ViewSchedulesPageUI.RAW_DELETE_SCHEDULE).each(($element) => {
            //     $element.click();
            //     this.click(ViewSchedulesPageUI.CONFIRM_DELETE_SCHEDULE);
            //     this.wait(2);
            // });
        });
    }

    createNewSchedule(title: string) {
        this.wait(3);
        this.typeToTextfieldByPlaceholder(title, "Title");
        this.scrollAndClickPrimaryLink();
    }

    verifyScheduleCreatedSuccessfully() {
        // this.clickButtonByLabel("Open calendar");
        this.verifyNotificationSpanDisplayed("Meeting successfully added.");
    }

}
