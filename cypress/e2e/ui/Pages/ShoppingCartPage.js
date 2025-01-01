class ShoppingCartPage {
    get_first_inventory_item_and_click(){
        cy.get('.btn_inventory').first().click();
    }

    click_shopping_cart_button(){
        cy.get('.shopping_cart_link').click();
    }

    click_item_name_in_shopping_cart(){
        cy.get('.cart_item .inventory_item_name').click();
    }

    verify_item_page_url(){
        cy.url().should('include', '/inventory-item.html');
    }
}

export default new ShoppingCartPage();