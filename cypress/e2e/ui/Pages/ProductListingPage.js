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

    //...liyonisha..................................................
    get_sorting_price_high_to_low() {
        cy.get('.product_sort_container').select('Price (high to low)');
    }

    check_high_to_low_sorting() {
        cy.get('.inventory_item_price').then(($prices) => {
            const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));
            expect(prices).to.deep.equal([...prices].sort((a, b) => b - a));
          });
    }
    //.............................................................................................

}

export default new ProductListingPage();