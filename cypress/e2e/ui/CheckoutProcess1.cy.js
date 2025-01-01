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

  it('Verify Mandatory Fields in Checkout Info Page: First Name', () => {
    CheckoutPage.fill_lastname_field();
    CheckoutPage.fill_postalcode_field();
    CheckoutPage.click_continue_button();
    CheckoutPage.verify_error_button_is_visible();
  });

  it("Cancel Checkout and Return to Cart", () => {
    CheckoutPage.get_cart_cancel_link();
    CheckoutPage.url();
  });
  it('Verify Mandatory Fields in Checkout Info Page: Last Name', () => {
    CheckoutPage.enter_first_name();
    CheckoutPage.enter_postal_code();
    CheckoutPage.click_continue_button();
    CheckoutPage.verify_error_message_is_visible();
  });

});
