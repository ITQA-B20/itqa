class ShoppingCartPage {
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