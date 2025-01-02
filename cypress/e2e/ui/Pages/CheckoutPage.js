class CheckoutPage {
  get_cart_cancel_link() {
    cy.get(".cart_cancel_link").click();
  }

  fill_lastname_field() {
    cy.get('[data-test=lastName]').type('Doe');
  }

  fill_firstname_field() {
    cy.get('[data-test=firstName]').type('John');
  }

  fill_postalcode_field() {
    cy.get('[data-test=postalCode]').type('12345');
  }

  click_continue_button() {
    cy.get('.btn_primary').click();
  }

  verify_error_button_is_visible() {
    cy.get('.error-button').should('be.visible');
  }


  verify_cart_items_are_visible() {
    cy.get('.cart_item').should('be.visible'); // Verify items are listed
  }

  verify_total_price_displayed() {
    cy.get('.summary_total_label').should('exist'); // Verify total price displayed
  }

  url() {
    cy.url().should("include", "cart.html");
  }

  submit_Checkout_Information(firstName, lastName, postalCode) {
    cy.get('[data-test=firstName]').type(firstName);
    cy.get('[data-test=lastName]').type(lastName);
    cy.get('[data-test=postalCode]').type(postalCode);
    cy.get('.btn_primary').click();
    cy.url().should('include', 'checkout-step-two.html');
  }

  validate_Checkout_StepTwoUrl() {
    cy.url().should('include', 'checkout-step-two.html');
  }

  click_continue_button() {
    cy.get('.btn_primary').click();
  }

  click_finish_button() {
    cy.get('.btn_action').click();
  }
  verify_order_completion_message() {
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
  }

  add_price_of_each_product() {
    cy.get('.inventory_item_price').each(price);
  }

  calculate_total_price() {
    cy.get('.summary_subtotal_label').then(price);
  }

  cancel_button_before_completion() {
    cy.get('.cart_cancel_link').click();
  }

  verify_to_product_page_after_clicking_cancel_button() {
    cy.url().should('include', 'inventory.html');
  }
}

export default new CheckoutPage();
