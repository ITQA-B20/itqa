class ProductListingPage {
    get_product_container_and_select_AtoZ() {
        cy.get('.product_sort_container').select('Name (A to Z)');
    }
    check_AtoZ_order() {
        cy.get('.inventory_item_name').then(($items) => {
            const names = [...$items].map(item => item.innerText);
            expect(names).to.deep.equal([...names].sort());
        });
    }

    getProductImages() {
        return cy.get('.inventory_item_img');
    }

    clickFirstProductImage() {
        this.getProductImages().first().click();
    }

    validateProductImageVisible() {
        this.getProductImages().should('be.visible');
    }

    validateProductDetailPageUrl() {
        cy.url().should('include', '/inventory-item.html');
    }


}

export default new ProductListingPage();