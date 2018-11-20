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
                await element.check();
            } else {
                await element.uncheck();
            }
        } catch (e) {
            cy.log(e);
        }
    }
    async checkToCheckboxByValues(locator: string, isChecked: boolean, ...values: string[]) {
        try {
            const element = this.findElement(locator);
            if (isChecked) {
                await element.check(values);
            } else {
                await element.uncheck(values);
            }
        } catch (e) {
            cy.log(e);
        }
    }
    async selectTheOption(locator: string, value: string) {
        try {
            const element = this.findElement(locator);
            await element.select(value);
        } catch (e) {
            cy.log(e);
        }
    }
    async selectMultiOptions(locator: string, ...values: string[]) {
        try {
            const element = this.findElement(locator);
            await element.select(values);
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