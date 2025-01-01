class NavigationComponent {
    get_menu_button() {
        cy.get('.bm-burger-button').click();
    }

    click_logout_button() {
        cy.contains('Logout').click();
    }

    verify_login_url() {
        cy.url().should('include', 'index.html');
    }

}

export default new NavigationComponent();