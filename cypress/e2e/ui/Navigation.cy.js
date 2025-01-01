import { uiAuth, uiBaseURL } from "../../support/data";

describe('Navigation Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });


});
