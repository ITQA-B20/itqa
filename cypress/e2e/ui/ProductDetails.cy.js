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

  it('Navigate Back to Product List', async () => {
    await ProductDetailsPage.get_first_inventory_item_and_click();
    // allowing the click action to proceed even if the element is covered by another element or deemed not interactable.
    await ProductDetailsPage.go_back_to_inventory();
    ProductDetailsPage.verify_inventory_pageUrl();
  });

  it('Add to Cart from Details Page', async() => {
    await ProductDetailsPage.get_first_inventory_item_and_click();
    await ProductDetailsPage.get_AddToCart_button_And_click();
    await ProductDetailsPage.shopping_cart_badge_should_contain_1();
  });
});
