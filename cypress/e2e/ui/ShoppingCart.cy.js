import { uiAuth, uiBaseURL } from "../../support/data";
import ShoppingCartPage from './Pages/ShoppingCartPage';

describe('Shopping Cart Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });

    it('Navigate to Product from Cart', () => {
        ShoppingCartPage.get_first_inventory_item_and_click();
        ShoppingCartPage.click_shopping_cart_button();
        ShoppingCartPage.click_item_name_in_shopping_cart();
        ShoppingCartPage.verify_item_page_url();
    });
});
