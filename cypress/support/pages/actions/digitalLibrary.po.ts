import { DigitalLibraryPageUI } from "../interfaces/digitalLibrary.interface";
import { AbstractPage } from './abstract.po';

export class DigitalLibraryPage extends AbstractPage {
    constructor() {
        super();
    }

    createNewForm(title: string) {
        cy.log('Create new Form');
        this.click(DigitalLibraryPageUI.CREATE_AND_EDIT_FROM_MENU);
        this.clickPrimaryLink();
        this.typeToTextfieldByPlaceholder(title, "Title");
        this.clickRadioButtonByName("Yes");
        this.clickRadioButtonByName("Just one");
        this.clickPrimaryButton();
    }

    verifyDigitalLibraryPageDisplayed() {
        cy.log(`Verify Digital Library Panel is displayed`);
        this.shouldVisible(DigitalLibraryPageUI.DIGITAL_LIBRARY_PANEL);
    }

    verifyNewFormCreated() {
        this.verifyNotificationSpanDisplayed("Form successfully created.");
    }
}
