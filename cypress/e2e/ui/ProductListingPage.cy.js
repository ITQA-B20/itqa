import { uiAuth, uiBaseURL } from "../../support/data";

describe('Product Listing Page Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });


});
