class ShoppingCartPage {
  get_shopping_cart_link() {
    cy.get(".shopping_cart_link").click();
  }

  get_cart_quantity() {
    cy.get(".cart_quantity").should("not.exist");
  }

  add_To_Cart() {
    cy.get('.btn_inventory').first().click();
  }

  validate_Cart_Badge(quantity) {
    if (quantity > 0) {
      cy.get('.shopping_cart_badge').should('contain', quantity);
    } else {
      cy.get('.shopping_cart_badge').should('not.exist');
    }
  }

  remove_From_Cart() {
    cy.get('.btn_inventory').first().click();
  }

  click_first_three_inventory_buttons() {
    cy.get('.btn_inventory').each(($btn, index) => {
      if (index < 3) cy.wrap($btn).click();
    });
  }

  verify_cart_item_count() {
    cy.get('.shopping_cart_badge').should('contain', '3');
  }
}
export default new ShoppingCartPage();
