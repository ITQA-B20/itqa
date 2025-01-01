import { uiAuth, uiBaseURL } from "../../support/data";
import ProductDetailsPage from './pages/ProductDetailsPage';

describe('Product Details Page Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });

    it('Navigate Back to Product List', () => {
        ProductDetailsPage.get_first_inventory_item_and_click();
        // allowing the click action to proceed even if the element is covered by another element or deemed not interactable.
        ProductDetailsPage.go_back_to_inventory();
        ProductDetailsPage.verify_inventory_pageUrl();
    });
});
