import { uiAuth, uiBaseURL } from "../../support/data";
import ProductDetailsPage from './pages/ProductDetailsPage';

describe('Product Details Page Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });

    it('Add to Cart from Details Page', () => {
        ProductDetailsPage.get_first_inventory_item_and_click();
        ProductDetailsPage.get_AddToCart_button_And_click();
        ProductDetailsPage.shopping_cart_badge_should_contain_1();
    });


});
