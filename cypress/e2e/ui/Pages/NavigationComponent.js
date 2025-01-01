class NavigationComponent {
  get_bm_burger_button() {
    cy.get(".bm-burger-button").click();
  }

  wait() {
    cy.wait(1000);
  }

  get_bm_menu_wrap() {
    cy.get(".bm-menu-wrap")
      .should("have.attr", "style")
      .and("include", "transform: translate3d(-100%, 0px, 0px)");
  }
}

export default new NavigationComponent();
