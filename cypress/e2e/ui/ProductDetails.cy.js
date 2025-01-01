import { uiAuth, uiBaseURL } from "../../support/data";
import ProductDetailsPage from "./pages/ProductDetailsPage";

describe("Product Details Page Testing", () => {
  beforeEach(() => {
    cy.visit(uiBaseURL);
    cy.login(uiAuth.username, uiAuth.password);
  });

  it("Verify Product Details Information", () => {
    ProductDetailsPage.get_inventory_item();
    ProductDetailsPage.get_inventory_details_name();
    ProductDetailsPage.get_inventory_details_price();
  });
});
