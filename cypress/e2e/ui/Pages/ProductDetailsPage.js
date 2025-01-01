class ProductDetailsPage {
    get_first_inventory_item_and_click() {
        cy.get('.inventory_item_img').first().click();
    }

    get_AddToCart_button_And_click() {
        cy.get('.btn_inventory').contains('ADD TO CART').click();
    }

    shopping_cart_badge_should_contain_1() {
        cy.get('.shopping_cart_badge').should('contain', '1');
    }
}

export default new ProductDetailsPage();