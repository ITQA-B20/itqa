import { uiAuth, uiBaseURL } from "../../support/data";
import ShoppingCartPage from "./pages/ShoppingCartPage";

describe("Shopping Cart Testing", () => {
  beforeEach(() => {
    cy.visit(uiBaseURL);
    cy.login(uiAuth.username, uiAuth.password);
  });

  //205066A
  it("Empty Cart Validation", () => {
    ShoppingCartPage.get_shopping_cart_link();
    ShoppingCartPage.get_cart_quantity();
  });
});
