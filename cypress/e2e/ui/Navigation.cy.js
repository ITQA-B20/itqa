import { uiAuth, uiBaseURL } from "../../support/data";
import NavigationComponent from "./pages/NavigationComponent";
describe("Navigation Testing", () => {
  beforeEach(() => {
    cy.visit(uiBaseURL);
    cy.login(uiAuth.username, uiAuth.password);
  });

  it("Verify Sidebar Close Button", () => {
    NavigationComponent.get_bm_burger_button();
    NavigationComponent.wait();
    NavigationComponent.get_bm_menu_wrap();
  });
});
