import { uiAuth, uiBaseURL } from "../../support/data";
import NavigationComponent from './pages/NavigationComponent';
describe('Navigation Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });

    it('Logout from Sidebar', () => {
        NavigationComponent.get_menu_button();
        NavigationComponent.click_logout_button();
        NavigationComponent.verify_login_url();
    });

});
