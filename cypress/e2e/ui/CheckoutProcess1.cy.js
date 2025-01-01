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
    it('Verify Mandatory Fields in Checkout Info Page: Last Name', () => {
        CheckoutPage.enter_first_name();
        CheckoutPage.enter_postal_code();
        CheckoutPage.click_continue_button();
        CheckoutPage.verify_error_message_is_visible();
    });

});
