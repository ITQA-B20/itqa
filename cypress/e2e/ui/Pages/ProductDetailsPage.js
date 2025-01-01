class ProductDetailsPage {
 //...Liyonisha............
    navigate_to_firstProductdetails() {
        cy.get('.inventory_item_img').first().click();
    }

    add_first_product_to_Cart() {
        cy.get('.btn_inventory').contains('ADD TO CART').click();
    }

    remove_first_product_to_Cart() {
        cy.get('.btn_inventory').contains('REMOVE').click();
    }

    remove_first_product_to_Cart() {
        cy.get('.btn_inventory').contains('REMOVE').click();
    }
   
    verify_Cart_badge_is_not_Visible() {
        cy.get('.shopping_cart_badge').should('not.exist');
    }
}

//..........................................................................

export default new ProductDetailsPage();