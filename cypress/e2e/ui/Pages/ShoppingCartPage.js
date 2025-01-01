class ShoppingCartPage {

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

}

export default new ShoppingCartPage();