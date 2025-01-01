import { uiAuth, uiBaseURL } from "../../support/data";
import NavigationComponent from './pages/NavigationComponent';
describe('Navigation Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });


});
