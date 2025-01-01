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
});
