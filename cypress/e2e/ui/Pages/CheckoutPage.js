class CheckoutPage {
  get_cart_cancel_link() {
    cy.get(".cart_cancel_link").click();
  }

  url() {
    cy.url().should("include", "cart.html");
  }
}

export default new CheckoutPage();
