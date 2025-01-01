import { uiAuth, uiBaseURL } from "../../support/data";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

describe("Product Details Page Testing", () => {
  beforeEach(() => {
    cy.visit(uiBaseURL);
    cy.login(uiAuth.username, uiAuth.password);
  });

  //Liyonisha_205061E
  it('Remove from Cart in Details Page', () => {
    ProductDetailsPage.navigate_to_firstProductdetails();
    ProductDetailsPage.add_first_product_to_Cart();
    ProductDetailsPage.remove_first_product_to_Cart();
    ProductDetailsPage.verify_Cart_badge_is_not_Visible();
  });
  //205066A
  it("Verify Product Details Information", async () => {
    await ProductDetailsPage.get_inventory_item();
    await ProductDetailsPage.get_inventory_details_name();
    await ProductDetailsPage.get_inventory_details_price();
  });
});
