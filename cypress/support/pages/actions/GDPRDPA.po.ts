import { GDPRDPAPageUI } from "../interfaces/GDPRDPA.interface";
import { AbstractPage } from './abstract.po';

export class GDPRDPAPage extends AbstractPage {
    constructor() {
        super();
    }

    // placeholder() {
    //     cy.log('Click View all patient Button');
    //     this.click(GDPRDPAPageUI.VIEW_ALL_PATIENT_BUTTON);
    // }

    verifyGDPRDPAPageDisplayed() {
        cy.log(`Verify GDPRDPA Panel is displayed`);
        this.shouldVisible(GDPRDPAPageUI.GDPRDPA_HEADER);
    }
}
