import { uiAuth, uiBaseURL } from "../../support/data";
import CheckoutPage from './Pages/CheckoutPage';
describe('Checkout Process 1 Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
        cy.get('.btn_inventory').first().click();
        cy.get('.shopping_cart_link').click();
        cy.get('.checkout_button').click();
    });

    it('Submit Valid Checkout Information', () => {
        // Submit checkout information
        CheckoutPage.submit_Checkout_Information('Ravi', 'Ragav', '40000');


    });


});
