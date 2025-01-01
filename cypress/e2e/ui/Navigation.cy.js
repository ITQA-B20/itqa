import { uiAuth, uiBaseURL } from "../../support/data";
import NavigationComponent from './Pages/NavigationComponent';
describe('Navigation Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });

    it('Test Menu Button Functionality', () => {
        // Open menu and validate visibility
        NavigationComponent.click_Menu_Button();
        NavigationComponent.validate_Menu_Is_Visible();
    });

});
