import { Constant } from './constanst'
const timeout: number = Constant.TIMEOUT;
export class BaseElement {
    protected xPathToCss(xpath: string) {
        return xpath
            .replace(/\[(\d+?)\]/g, function (s, m1) { return '[' + (m1 - 1) + ']'; })
            .replace(/\/{2}/g, '')
            .replace(/\/+/g, ' > ')
            .replace(/@/g, '')
            .replace(/\[(\d+)\]/g, ':eq($1)')
            .replace(/^\s+/, '');
    }

    protected findElement(locator: string): Cypress.Chainable<JQuery> {
        let control: any
        if (locator.startsWith('css=')) {
            locator = locator.substring(4);
            control = cy.get(locator, { timeout: timeout });
        } else if (locator.startsWith('xpath=')) {
            locator = locator.substring(6);
            let cssControl = this.xPathToCss(locator);
            control = cy.get(cssControl, { timeout: timeout });
        } else if (locator.startsWith('cssText=')) {
            locator = locator.substring(8);
            const text = locator.split(' Text=')[1];
            locator = locator.split(' Text=')[0];
            control = cy.get(locator, { timeout: timeout }).contains(text);
        }
        return control;
    }
}