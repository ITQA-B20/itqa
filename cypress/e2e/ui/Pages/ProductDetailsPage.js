class ProductDetailsPage {
  get_inventory_item() {
    cy.get(".inventory_item")
      .first()
      .then(($item) => {
        this.name = $item.find(".inventory_item_name").text();
        this.price = $item.find(".inventory_item_price").text();
        $item.find(".inventory_item_img").click();
      });
  }

  get_inventory_details_name() {
    cy.get(".inventory_details_name").should("have.text", this.name);
  }

  get_inventory_details_price() {
    cy.get(".inventory_details_price").should("have.text", this.price);
  }

  navigate_to_firstProductdetails() {
    cy.get('.inventory_item_img').first().click();
  }

  add_first_product_to_Cart() {
    cy.get('.btn_inventory').contains('ADD TO CART').click();
  }

  remove_first_product_to_Cart() {
    cy.get('.btn_inventory').contains('REMOVE').click();
  }

  verify_Cart_badge_is_not_Visible() {
    cy.get('.shopping_cart_badge').should('not.exist');
  }
}

export default new ProductDetailsPage();
