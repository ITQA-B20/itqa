import { uiAuth, uiBaseURL } from "../../support/data";
import CheckoutPage from './pages/CheckoutPage';
describe('Checkout Process 1 Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login('standard_user', 'secret_sauce');
        cy.get('.btn_inventory').first().click();
        cy.get('.shopping_cart_link').click();
        cy.get('.checkout_button').click();

    });

    it('Verify Mandatory Fields in Checkout Info Page: Postal Code', () => {
        cy.get('[data-test=firstName]').type('John');
        cy.get('[data-test=lastName]').type('Doe');
        cy.get('.btn_primary').click();
        cy.get('.error-button').should('be.visible');
      });

});
