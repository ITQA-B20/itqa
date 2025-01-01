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


 //Liyonisha_205061E
    it('Verify Mandatory Fields in Checkout Info Page: First Name', () => {
        CheckoutPage.fill_lastname_field();
        CheckoutPage.fill_postalcode_field();
        CheckoutPage.click_continue_button();
        CheckoutPage.verify_error_button_is_visible();

      });

});
