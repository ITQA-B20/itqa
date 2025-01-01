import { uiAuth, uiBaseURL } from "../../support/data";
import ProductDetailsPage from "./pages/ProductDetailsPage";

describe("Product Details Page Testing", () => {
  beforeEach(() => {
    cy.visit(uiBaseURL);
    cy.login(uiAuth.username, uiAuth.password);
  });

  it("Verify Product Details Information", async () => {
    await ProductDetailsPage.get_inventory_item();
    await ProductDetailsPage.get_inventory_details_name();
    await ProductDetailsPage.get_inventory_details_price();
  });
});
