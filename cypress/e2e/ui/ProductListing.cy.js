import { uiAuth, uiBaseURL } from "../../support/data";
import ProductListingPage from './Pages/ProductListingPage';
describe('UI_Product Listing Page Testing', () => {
  beforeEach(() => {
    cy.visit(uiBaseURL);
    cy.login(uiAuth.username, uiAuth.password);
  });

  it('Verify Product Sorting (A to Z)', () => {
    ProductListingPage.get_product_container_and_select_AtoZ();
    ProductListingPage.check_AtoZ_order();
  });

  //Liyonisha_205061E
  it('Verify Sorting by Price (High to Low)', () => {
    ProductListingPage.get_sorting_price_high_to_low();
    ProductListingPage.check_high_to_low_sorting();
  });

  //205066A
  it("Verify Product Sorting (Z to A)", () => {
    ProductListingPage.get_product_container_and_select_ZtoA();
    ProductListingPage.check_ZtoA_order();
  });


  it('Validate Product Image Display', () => {
    // Validate Product Image Visibility
    ProductListingPage.validateProductImageVisible();
    // Click on First Product Image
    ProductListingPage.clickFirstProductImage();
    // Validate URL of Product Details Page
    ProductListingPage.validateProductDetailPageUrl();
  });


  it('Verify Sorting by Price (Low to High)', () => {
    ProductListingPage.get_product_container_and_select_LowToHigh();
    ProductListingPage.check_LowHigh_order();
  });
});
