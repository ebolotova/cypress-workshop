export class NavigateTo {
    // login() {
    //     cy.visit('/login');
    // }

    // profile() {
    //     cy.visit('/profile');
    // }

    // bookStoreFromProfile() {
    //     cy.get('#gotoStore').click();
    // }

    allBooks() {
        cy.visit('/books');
    }

    login() {
        cy.visit(Cypress.env('login'));
    }

    profile() {
        cy.visit(Cypress.env('profile'));
    }

    bookStore() {
        cy.visit(Cypress.env('books'));
    }

}

export const navigateTo = new NavigateTo();