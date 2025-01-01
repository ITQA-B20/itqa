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

    click_Menu_Button() {
        cy.get('.bm-burger-button').click();
    }

    validate_Menu_Is_Visible() {
        cy.get('.bm-menu-wrap')
            .should('have.attr', 'style')
            .and('not.include', 'transform: translate3d(-100%, 0px, 0px)');
    }

}

export default new NavigationComponent();
