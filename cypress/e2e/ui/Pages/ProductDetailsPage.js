class ProductDetailsPage {
    get_first_inventory_item_and_click() {
        cy.get('.inventory_item_img').first().click();
    }
    go_back_to_inventory() {
        cy.get('.inventory_details_back_button').click({ force: true });
    }
    verify_inventory_pageUrl() {
        cy.url().should('include', '/inventory.html');
    }
}

export default new ProductDetailsPage();