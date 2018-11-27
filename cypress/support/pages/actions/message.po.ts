import { MessagePageUI } from "../interfaces/message.interface";
import { AbstractPage } from './abstract.po';

export class MessagePage extends AbstractPage {
    constructor() {
        super();
    }

    sendMessage(text: string) {
        cy.log('Send message from current user');
        this.textareaByPlaceholder(text, "Type your message here...");
        this.click(MessagePageUI.SEND_BUTTON);
    }

    verifyMessageIsSent(text: string) {
        cy.log(`Verify Message "${text}" is sent`);
        this.shouldVisible(MessagePageUI.TEXT_MESSAGE, true, text);
    }

    verifyMessagePageDisplayed() {
        cy.log(`Verify Message Page is displayed`);
        this.shouldVisible(MessagePageUI.MESSAGE_PAGE_PANEL);
    }
}
