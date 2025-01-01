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

  get_menu_button() {
    cy.get('.bm-burger-button').click();
  }

  click_logout_button() {
    cy.contains('Logout').click();
  }

  verify_login_url() {
    cy.url().should('include', 'index.html');
  }

  validate_Menu_Is_Visible() {
    cy.get('.bm-menu-wrap')
      .should('have.attr', 'style')
      .and('not.include', 'transform: translate3d(-100%, 0px, 0px)');
  }

}

export default new NavigationComponent();
