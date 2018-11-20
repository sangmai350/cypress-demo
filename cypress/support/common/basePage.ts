import { BaseElement } from "./baseElements";
export class BasePage extends BaseElement {

    async type(locator: string, value: string) {
        try {
            const element = this.findElement(locator);
            await element.clear().type(value);
        } catch (e) {
            cy.log(e);
        }
    }
    async click(locator: string) {
        try {
            const element = this.findElement(locator);
            await element.click();
        } catch (e) {
            cy.log(e);
        }
    }
    async doubleClick(locator: string) {
        try {
            const element = this.findElement(locator);
            await element.dblclick()
        } catch (e) {
            cy.log(e);
        }
    }
    async checkToCheckbox(locator: string, isChecked: boolean) {
        try {
            const element = this.findElement(locator);
            if (isChecked) {
                await element.not('[disabled]').check().should('be.checked');
            } else {
                await element.not('[disabled]').uncheck().should('not.be.checked');
            }
        } catch (e) {
            cy.log(e);
        }
    }
    async checkToCheckboxByValues(locator: string, isChecked: boolean, ...values: string[]) {
        try {
            const element = this.findElement(locator);
            if (isChecked) {
                await element.not('[disabled]').check(values).should('be.checked');
            } else {
                await element.not('[disabled]').uncheck(values).should('not.be.checked');
            }
        } catch (e) {
            cy.log(e);
        }
    }
    async selectTheOption(locator: string, value: string) {
        try {
            const element = this.findElement(locator);
            await element.not('[disabled]').select(value);
        } catch (e) {
            cy.log(e);
        }
    }
    async selectMultiOptions(locator: string, ...values: string[]) {
        try {
            const element = this.findElement(locator);
            await element.not('[disabled]').select(values);
        } catch (e) {
            cy.log(e);
        }
    }
    async checkTheElementHasValue(locator: string, value: string) {
        try {
            const element = this.findElement(locator);
            await element.should('have.value', value);
        } catch (e) {
            cy.log(e);
        }
    }
    async checkTheElementStyle(locator: string, style: string) {
        try {
            const element = this.findElement(locator);
            await element.should('have.attr', 'style', style);
        } catch (e) {
            cy.log(e);
        }
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