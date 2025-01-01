import { uiAuth, uiBaseURL } from "../../support/data";

describe('Checkout Process 2 Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });


});
