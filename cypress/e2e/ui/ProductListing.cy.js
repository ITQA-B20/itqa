import { uiAuth, uiBaseURL } from "../../support/data";
import ProductListingPage from './Pages/ProductListingPage';
describe('Product Listing Page Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });

    it('Verify Product Sorting (A to Z)', () => {
        ProductListingPage.get_product_container_and_select_AtoZ();
        ProductListingPage.check_AtoZ_order();
    });

    it('Verify Sorting by Price (Low to High)', () => {
        ProductListingPage.get_product_container_and_select_LowToHigh();
        ProductListingPage.check_LowHigh_order();
    });
});
