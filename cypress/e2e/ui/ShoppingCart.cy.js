import { uiAuth, uiBaseURL } from "../../support/data";
import ShoppingCartPage from './pages/ShoppingCartPage';

describe('Shopping Cart Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });


});
