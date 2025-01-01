class NavigationComponent {
  get_bm_burger_button() {
    return cy.get(".bm-burger-button").click();
  }

  wait() {
    return cy.wait(1000);
  }

  get_bm_menu_wrap() {
    return cy
      .get(".bm-menu-wrap")
      .should("have.css", "transform")
      .and("not.equal", "none"); // Menu should be transformed (open)
  }
}

export default new NavigationComponent();
