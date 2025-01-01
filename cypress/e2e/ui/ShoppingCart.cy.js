import { uiAuth, uiBaseURL } from "../../support/data";
import ShoppingCartPage from './Pages/ShoppingCartPage';

describe('Shopping Cart Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });

    it('Remove Product from Cart', () => {
        // Add product to the cart
        ShoppingCartPage.add_To_Cart();
        ShoppingCartPage.validate_Cart_Badge(1);

        // Remove product from the cart
        ShoppingCartPage.remove_From_Cart();
        ShoppingCartPage.validate_Cart_Badge(0);
    });

});
