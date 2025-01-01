import { uiAuth, uiBaseURL } from "../../support/data";

describe('Checkout Process 1 Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });


});
