class ShoppingCartPage {
  get_shopping_cart_link() {
    cy.get(".shopping_cart_link").click();
  }

  get_first_addToCart_button_click() {
    cy.get('.btn_inventory').first().click();
  }

  check_addToCart_badge_count() {
    cy.get('.shopping_cart_badge').should('contain', '1');
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

  get_first_inventory_item_and_click() {
    cy.get('.btn_inventory').first().click();
  }

  click_shopping_cart_button() {
    cy.get('.shopping_cart_link').click();
  }

  click_item_name_in_shopping_cart() {
    cy.get('.cart_item .inventory_item_name').click();
  }

  verify_item_page_url() {
    cy.url().should('include', '/inventory-item.html');
  }
}
export default new ShoppingCartPage();
