import { uiAuth, uiBaseURL } from "../../support/data";
import NavigationComponent from "./pages/NavigationComponent";

describe("Navigation Testing", () => {
  beforeEach(() => {
    cy.visit(uiBaseURL);
    cy.login(uiAuth.username, uiAuth.password);
  });

  //205066A
  it("Verify Sidebar Open Button", () => {
    NavigationComponent.get_bm_burger_button().then(() => {
      // Check if menu is visible
      cy.get(".bm-menu-wrap").should("be.visible");
    });
  });

  //Liyonisha_205061E
  it('Reset App State', () => {
    cy.get('.btn_inventory').first().click();
    cy.get('.bm-burger-button').click();
    cy.contains('Reset App State').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
