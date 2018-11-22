import { Constant } from './constanst'
import { xPathToCss } from './xpathToCSS'

const timeout: number = Constant.TIMEOUT;
export class BaseElement {
    protected findElement(locator: string): Cypress.Chainable<JQuery> {
        let control: any
        if (locator.startsWith('css=')) {
            locator = locator.substring(4);
            control = cy.get(locator, { timeout: timeout });
        } else if (locator.startsWith('xpath=')) {
            locator = locator.substring(6);
            let cssControl = new xPathToCss().xPathToCss(locator);
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