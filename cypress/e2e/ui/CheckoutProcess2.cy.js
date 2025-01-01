import { uiAuth, uiBaseURL } from "../../support/data";
import CheckoutPage from './pages/CheckoutPage';

describe('Checkout Process 2 Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login('standard_user', 'secret_sauce');
        cy.get('.btn_inventory').first().click();
        cy.get('.shopping_cart_link').click();
        cy.get('.checkout_button').click();
        cy.get('[data-test=firstName]').type('John');
        cy.get('[data-test=lastName]').type('Doe');
        cy.get('[data-test=postalCode]').type('12345');
        cy.get('.btn_primary').click();
    });

    it('Validate Total Price', () => {
        let itemTotal = 0;
        cy.get('.inventory_item_price').each((price) => {
          itemTotal += parseFloat(price.text().replace('$', ''));
        });
        cy.get('.summary_subtotal_label').then((price) => {
          const subtotal = parseFloat(price.text().replace('Item total: $', ''));
          expect(subtotal).to.equal(itemTotal);
        });
      });

      it('Cancel Order Before Completion', () => {
        cy.get('.cart_cancel_link').click();
        cy.url().should('include', 'inventory.html'); // Verify return to product page
      });

});
