import { BaseElement } from "./baseElements";
export class BasePage extends BaseElement {

    type(locator: string, value: string) {
        const element = this.findElement(locator);
        element.clear().type(value);
    }
    click(locator: string) {
        const element = this.findElement(locator);
        element.click();
    }
    doubleClick(locator: string) {
        const element = this.findElement(locator);
        element.dblclick()
    }
    checkToCheckbox(locator: string, isChecked: boolean) {
        const element = this.findElement(locator);
        if (isChecked) {
            element.not('[disabled]').check().should('be.checked');
        } else {
            element.not('[disabled]').uncheck().should('not.be.checked');
        }
    }
    checkToCheckboxByValues(locator: string, isChecked: boolean, ...values: string[]) {
        const element = this.findElement(locator);
        if (isChecked) {
            element.not('[disabled]').check(values).should('be.checked');
        } else {
            element.not('[disabled]').uncheck(values).should('not.be.checked');
        }
    }
    selectTheOption(locator: string, value: string) {
        const element = this.findElement(locator);
        element.not('[disabled]').select(value);
    }
    selectMultiOptions(locator: string, ...values: string[]) {
        const element = this.findElement(locator);
        element.not('[disabled]').select(values);
    }
    checkTheElementHasValue(locator: string, value: string) {
        const element = this.findElement(locator);
        element.should('have.value', value);
    }
    checkTheElementStyle(locator: string, style: string) {
        const element = this.findElement(locator);
        element.should('have.attr', 'style', style);
    }
    gotoURL(url: string) {
        cy.visit(url);
    }

    timeInSecond(ms: number) {
        return ms * 1000;
    }
    wait(s: number) {
        cy.wait(s * 1000);
    }
}