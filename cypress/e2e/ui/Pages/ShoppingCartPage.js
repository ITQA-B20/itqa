class ShoppingCartPage {
    get_first_addToCart_button_click() {
        cy.get('.btn_inventory').first().click();
    }

    check_addToCart_badge_count() {
        cy.get('.shopping_cart_badge').should('contain', '1');
    }

}

export default new ShoppingCartPage();