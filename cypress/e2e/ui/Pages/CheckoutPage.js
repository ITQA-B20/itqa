class CheckoutPage {

    submit_Checkout_Information(firstName, lastName, postalCode) {
        cy.get('[data-test=firstName]').type(firstName);
        cy.get('[data-test=lastName]').type(lastName);
        cy.get('[data-test=postalCode]').type(postalCode);
        cy.get('.btn_primary').click();
        cy.url().should('include', 'checkout-step-two.html');
    }

    validate_Checkout_StepTwoUrl() {
        cy.url().should('include', 'checkout-step-two.html');
    }

}

export default new CheckoutPage();