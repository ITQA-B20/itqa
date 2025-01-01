class CheckoutPage {
    enter_first_name() {
        cy.get('[data-test=firstName]').type('John');
    }
    enter_postal_code() {
        cy.get('[data-test=postalCode]').type('12345');
    }
    click_continue_button() {
        cy.get('.btn_primary').click();
    }
    verify_error_message_is_visible() {
        cy.get('.error-button').should('be.visible');
    }
    click_finish_button() {
        cy.get('.btn_action').click();
    }
    verify_order_completion_message() {
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
    }
}

export default new CheckoutPage();