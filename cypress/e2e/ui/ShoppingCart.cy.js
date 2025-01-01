import { uiAuth, uiBaseURL } from "../../support/data";

describe('Shopping Cart Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });


});
