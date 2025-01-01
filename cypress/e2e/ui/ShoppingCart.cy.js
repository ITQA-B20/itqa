import { uiAuth, uiBaseURL } from "../../support/data";
import ShoppingCartPage from './pages/ShoppingCartPage';

describe('Shopping Cart Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });

    it('Add Single Product to Cart', () => {
        cy.get('.btn_inventory').first().click();
        cy.get('.shopping_cart_badge').should('contain', '1');
      });

});
