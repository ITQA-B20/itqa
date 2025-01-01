import { uiAuth, uiBaseURL } from "../../support/data";
import CheckoutPage from "./pages/CheckoutPage";
describe("Checkout Process 1 Testing", () => {
  beforeEach(() => {
    cy.visit(uiBaseURL);
    cy.login(uiAuth.username, uiAuth.password);
    cy.get(".btn_inventory").first().click();
    cy.get(".shopping_cart_link").click();
    cy.get(".checkout_button").click();
  });

  it("Cancel Checkout and Return to Cart", () => {
    CheckoutPage.get_cart_cancel_link();
    CheckoutPage.url();
  });
});
