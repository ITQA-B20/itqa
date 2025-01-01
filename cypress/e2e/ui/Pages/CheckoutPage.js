class CheckoutPage {
  get_cart_cancel_link() {
    cy.get(".cart_cancel_link").click();
  }

  //Liyoniha//
  fill_lastname_field() {
    cy.get('[data-test=lastName]').type('Doe');
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

  //....................................................................//
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

  enter_first_name() {
    cy.get('[data-test=firstName]').type('John');
  }
  enter_postal_code() {
    cy.get('[data-test=postalCode]').type('12345');
  }
  click_continue_button() {
    cy.get('.btn_primary').click();
  }
  verify_error_message_is_visible() {
    cy.get('.error-button').should('be.visible');
  }
  click_finish_button() {
    cy.get('.btn_action').click();
  }
  verify_order_completion_message() {
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
  }

}

export default new CheckoutPage();
