class ProductDetailsPage {
    constructor() {
        this.name = '';
        this.price = '';
    }

    get_inventory_item() {
        cy.get(".inventory_item")
            .first()
            .then(($item) => {
                this.name = $item.find(".inventory_item_name").text();
                this.price = $item.find(".inventory_item_price").text();
                $item.find(".inventory_item_img").click();
            });
    }

    get_inventory_details_name() {
        cy.get(".inventory_details_name").should("have.text", this.name);
    }

    get_inventory_details_price() {
        cy.get(".inventory_details_price").should("have.text", this.price);
    }
}

export default new ProductDetailsPage();