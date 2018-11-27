import { PatientsPageUI } from "../interfaces/patients.interface";
import { AbstractPage } from './abstract.po';
import { AbstractPageUI } from '../interfaces/abstract.interface';

export class PatientsPage extends AbstractPage {
    constructor() {
        super();
    }

    createNewClient(firstName: string, lastName: string, email: string, phone: string, height: string, gender: string) {
        cy.log(`Enter all client info`);
        this.click(PatientsPageUI.ADD_PATIENT_BUTTON, "primary");
        this.type(AbstractPageUI.INPUT_BY_PLACEHOLDER, firstName, "First Name");
        this.type(AbstractPageUI.INPUT_BY_PLACEHOLDER, lastName, "Last Name");
        this.type(AbstractPageUI.INPUT_BY_PLACEHOLDER, email, "Email");
        this.type(AbstractPageUI.INPUT_BY_PLACEHOLDER, phone, "Phone");
        this.type(AbstractPageUI.INPUT_BY_PLACEHOLDER, height, "Height");
        this.click(AbstractPageUI.SELECT_BY_LABEL, "Gender");
        this.click(AbstractPageUI.SELECT_OPTION, gender);
        this.click(AbstractPageUI.BUTTON_BY_LABEL, "Open calendar");
        this.click(AbstractPageUI.BUTTON_BY_LABEL, "Choose the current date");
        this.click(AbstractPageUI.PRIMARY_BUTTON);
    }

    openFirstPatient() {
        cy.log(`Open First Patient`);
        this.click(AbstractPageUI.TABLE_FIRST_ROW);
    }

    clickPatientMenu(menuName: string) {
        cy.log(`Open First client`);
        this.click(PatientsPageUI.PATIENT_MENU, menuName);
    }

    addMeasurement(waist: string, arm: string, chest: string, hip: string, thigh: string) {
        cy.log(`Add measurement`);
        this.type(AbstractPageUI.INPUT_BY_PLACEHOLDER, waist, "Waist");
        this.type(AbstractPageUI.INPUT_BY_PLACEHOLDER, arm, "Arm");
        this.type(AbstractPageUI.INPUT_BY_PLACEHOLDER, chest, "Chest");
        this.type(AbstractPageUI.INPUT_BY_PLACEHOLDER, hip, "Hip");
        this.type(AbstractPageUI.INPUT_BY_PLACEHOLDER, thigh, "Thigh");
        this.clickPrimaryLinkByNameOneSpan("Add Measurement");
    }

    verifyPatientDetailsDisplayed() {
        cy.log(`Verify Patient Details displayed`);
        this.shouldVisible(PatientsPageUI.PATIENT_MENU, true, "Dashboard");
    }

    verifyPatientsPageLoaded() {
        cy.log(`Verify patient created successfully`);
        this.shouldVisible(PatientsPageUI.PATIENTS_TABLE);
    }

    verifyPatientAdded() {
        cy.log(`Verify patient created successfully`);
        this.shouldVisible(AbstractPageUI.NOTIFICATION_SPAN, true, "Patient successfully created.");
    }

    verifyMeasurementAdded() {
        cy.log(`Verify Measurement added successfully`);
        this.shouldVisible(AbstractPageUI.NOTIFICATION_SPAN, true, "Measurement successfully added.");
    }
}
