class ShoppingCartPage {
  get_shopping_cart_link() {
    cy.get(".shopping_cart_link").click();
  }

  get_cart_quantity() {
    cy.get(".cart_quantity").should("not.exist");
  }
}

export default new ShoppingCartPage();
