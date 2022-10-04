export class NavigateTo {
    login() {
        cy.visit('/login');
    }

    profile() {
        cy.visit('/profile');
    }

    bookStoreFromProfile() {
        cy.get('#gotoStore').click();
    }

    allBooks() {
        cy.visit('/books');
    }
    
}

export const navigateTo = new NavigateTo();