import { uiAuth, uiBaseURL } from "../../support/data";
import ShoppingCartPage from './Pages/ShoppingCartPage';
describe("Shopping Cart Testing", () => {
  beforeEach(() => {
    cy.visit(uiBaseURL);
    cy.login(uiAuth.username, uiAuth.password);
  });

  it('Remove Product from Cart', () => {
    // Add product to the cart
    ShoppingCartPage.add_To_Cart();
    ShoppingCartPage.validate_Cart_Badge(1);
    // Remove product from the cart
    ShoppingCartPage.remove_From_Cart();
    ShoppingCartPage.validate_Cart_Badge(0);
  });

  it('Add Multiple Products to Cart', () => {
    ShoppingCartPage.click_first_three_inventory_buttons();
    ShoppingCartPage.verify_cart_item_count();
  });

  it('Add Single Product to Cart', () => {
    cy.get('.btn_inventory').first().click();
    cy.get('.shopping_cart_badge').should('contain', '1');
  });

  //205066A
  it("Empty Cart Validation", () => {
    ShoppingCartPage.get_shopping_cart_link();
    ShoppingCartPage.get_cart_quantity();
  });

  it('Navigate to Product from Cart', () => {
    ShoppingCartPage.get_first_inventory_item_and_click();
    ShoppingCartPage.click_shopping_cart_button();
    ShoppingCartPage.click_item_name_in_shopping_cart();
    ShoppingCartPage.verify_item_page_url();
  });
});
