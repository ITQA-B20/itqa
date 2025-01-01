import { uiAuth, uiBaseURL } from "../../support/data";
import ProductDetailsPage from './pages/ProductDetailsPage';

describe('Product Details Page Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });


});
