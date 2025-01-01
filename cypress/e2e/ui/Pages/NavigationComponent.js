class NavigationComponent {

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