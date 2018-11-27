import { CoachesPageUI } from "../interfaces/coaches.interface.";
import { AbstractPage } from './abstract.po';

export class CoachesPage extends AbstractPage {
    constructor() {
        super();
    }

    addNewCoach(firstName: string, lastName: string, email: string, phone: string, clinic: string) {
        cy.log('Create new Coach');
        this.clickPrimaryLink();
        this.typeToTextfieldByPlaceholder(firstName, "First Name");
        this.typeToTextfieldByPlaceholder(lastName, "Last Name");
        this.typeToTextfieldByPlaceholder(email, "Email");
        this.typeToTextfieldByPlaceholder(phone, "Phone");
        this.typeToTextfieldByPlaceholder(clinic, "Search Clinic");
        this.wait(5);
        this.click(CoachesPageUI.SELECT_CLINIC);
        this.clickPrimaryButton();
    }

    verifyCoachTableDisplayed() {
        cy.log(`Verify Coach table is displayed`);
        this.shouldVisible(CoachesPageUI.COACH_TABLE);
    }
}
