class ProductListingPage {
  get_product_container_and_select_AtoZ() {
    cy.get(".product_sort_container").select("Name (A to Z)");
  }
  check_AtoZ_order() {
    cy.get(".inventory_item_name").then(($items) => {
      const names = [...$items].map((item) => item.innerText);
      expect(names).to.deep.equal([...names].sort());
    });
  }

  get_product_container_and_select_ZtoA() {
    cy.get(".product_sort_container").select("Name (Z to A)");
  }

  check_ZtoA_order() {
    cy.get(".inventory_item_name").then(($items) => {
      const names = [...$items].map((item) => item.innerText);
      expect(names).to.deep.equal([...names].sort().reverse());
    });
  }
}

export default new ProductListingPage();
