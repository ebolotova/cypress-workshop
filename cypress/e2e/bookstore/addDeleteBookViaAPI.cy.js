import { bookActions } from '../../support/bookstore_page_objects/book_store';
import { navigateTo } from '../../support/bookstore_page_objects/navigation';

describe('Collections: Add/Delete Book', () => {
  // Perform login
  beforeEach('Perform login', () => {
    cy.createUser();
    cy.generateToken();
  });

  // Delete user
  afterEach('Delete user', () => {
    cy.deleteUser();
  });

  xit('Add book to Store', () => {
      // Navigate to book store
      navigateTo.bookStore();
      // Load books fixture
      cy.fixture('books').then((books) => {
        // Add first books to collection
        cy.createBook();
        //bookActions.addBookToCollection(books.collection1.Git);
        // Handle alert and verify alert message
        cy.verifyWindowAlertText(`Book added to your collection.`);
        // Navigate to user profile and verify that book is in collection table
        navigateTo.profile();
        cy.get('.rt-tbody').find('.rt-tr-group').first().should('contain', books.collection1.Git);
      });

  });
});