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
}

export default new CheckoutPage();
