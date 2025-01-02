import { uiAuth, uiBaseURL } from "../../support/data";
import CheckoutPage from './Pages/CheckoutPage';
describe('Checkout Process 1 Testing', () => {
  beforeEach(() => {
    cy.visit(uiBaseURL);
    cy.login('standard_user', 'secret_sauce');
    cy.get('.btn_inventory').first().click();
    cy.get('.shopping_cart_link').click();
    cy.get('.checkout_button').click();
  });

  it('Complete Order Placement', () => {
    CheckoutPage.fill_firstname_field();
    CheckoutPage.fill_lastname_field();
    CheckoutPage.fill_postalcode_field();
    CheckoutPage.click_continue_button();
    CheckoutPage.click_finish_button();
    CheckoutPage.verify_order_completion_message();
  });

  it('Submit Valid Checkout Information', () => {
    CheckoutPage.submit_Checkout_Information('Ravi', 'Ragav', '40000');
  });

  it('Verify Mandatory Fields in Checkout Info Page: Postal Code', () => {
    CheckoutPage.fill_firstname_field();
    CheckoutPage.fill_lastname_field();
    CheckoutPage.click_continue_button();
    CheckoutPage.verify_error_button_is_visible();
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
    CheckoutPage.fill_firstname_field();
    CheckoutPage.fill_postalcode_field();
    CheckoutPage.click_continue_button();
    CheckoutPage.verify_error_button_is_visible();
  });
});
