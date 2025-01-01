class CheckoutPage {
    provide_firstname() {
        cy.get('[data-test=firstName]').type('John');
    }

    provide_lastname() {
        cy.get('[data-test=lastName]').type('Doe');
    }

    test_without_postal_code() {
        cy.get('.btn_primary').click();
    }

    check_error_visible() {
        cy.get('.error-button').should('be.visible');
    }

    add_price_of_each_product() {
        cy.get('.inventory_item_price').each(price);
    }

    calculate_total_price() {
        cy.get('.summary_subtotal_label').then(price);
    }

    cancel_button_before_completion() {
        cy.get('.cart_cancel_link').click();
    }

    verify_to_product_page_after_clicking_cancel_button() {
        cy.url().should('include', 'inventory.html');
    }
}

export default new CheckoutPage();