import { uiAuth, uiBaseURL } from "../../support/data";
import ProductListingPage from './pages/ProductListingPage';
describe('Product Listing Page Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });

    it('Verify Product Sorting (A to Z)', () => {
        ProductListingPage.get_product_container_and_select_AtoZ();
        ProductListingPage.check_AtoZ_order();
    });

//Liyonisha_205061E
    it('Verify Sorting by Price (High to Low)', () => {
     ProductListingPage.get_sorting_price_high_to_low();
     ProductListingPage.check_high_to_low_sorting();
    });
    
});
