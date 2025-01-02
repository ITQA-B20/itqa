import { uiAuth, uiBaseURL } from "../../support/data";
import CheckoutPage from './Pages/CheckoutPage';

describe('Checkout Process 2 Testing', () => {
  beforeEach(() => {
    cy.visit(uiBaseURL);
    cy.login('standard_user', 'secret_sauce');
    cy.get('.btn_inventory').first().click();
    cy.get('.shopping_cart_link').click();
    cy.get('.checkout_button').click();
    cy.get('[data-test=firstName]').type('John');
    cy.get('[data-test=lastName]').type('Doe');
    cy.get('[data-test=postalCode]').type('12345');
    cy.get('.btn_primary').click();
  });

  //Liyonisha_205061E
  it('Verify Item Summary in Checkout Overview', () => {
    CheckoutPage.verify_cart_items_are_visible();
    CheckoutPage.verify_total_price_displayed();
  });

  it('Validate Total Price', () => {
    let itemTotal = 0;
    cy.get('.inventory_item_price').each((price) => {
      itemTotal += parseFloat(price.text().replace('$', ''));
    });
    cy.get('.summary_subtotal_label').then((price) => {
      const subtotal = parseFloat(price.text().replace('Item total: $', ''));
      expect(subtotal).to.equal(itemTotal);
    });
  });

  it('Cancel Order Before Completion', () => {
    CheckoutPage.cancel_button_before_completion();
    CheckoutPage.verify_to_product_page_after_clicking_cancel_button();
  });

  it('Complete Order Placement', () => {
    CheckoutPage.click_finish_button();
    CheckoutPage.verify_order_completion_message();
  });

});