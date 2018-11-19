import { Constant } from './constanst'
export class BasePage {

    type(locator, value) {
        cy.get(locator).clear({ delay: this.timeInSecond(0.1) }).type(value, { delay: this.timeInSecond(0.1) });
    }
    click(locator) {
        cy.get(locator).click();
    }
    gotoURL(url) {
        cy.visit(url);
    }

    timeInSecond(ms) {
        return ms * 1000;
    }
    wait(s) {
        cy.wait(s * 1000);
    }
}