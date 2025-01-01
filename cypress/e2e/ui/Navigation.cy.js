import { uiAuth, uiBaseURL } from "../../support/data";
import NavigationComponent from './pages/NavigationComponent';
describe('Navigation Testing', () => {
    beforeEach(() => {
        cy.visit(uiBaseURL);
        cy.login(uiAuth.username, uiAuth.password);
    });


    //Liyonisha_205061E
    it('Reset App State', () => {
        cy.get('.btn_inventory').first().click();
        cy.get('.bm-burger-button').click();
        cy.contains('Reset App State').click();
        cy.get('.shopping_cart_badge').should('not.exist');
      });

});
