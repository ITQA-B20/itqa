import { uiAuth, uiBaseURL } from "../../support/data";
import ShoppingCartPage from './pages/ShoppingCartPage';

describe('Shopping Cart Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });
    it('Add Multiple Products to Cart', () => {
        ShoppingCartPage.click_first_three_inventory_buttons();
        ShoppingCartPage.verify_cart_item_count();
    });

});
