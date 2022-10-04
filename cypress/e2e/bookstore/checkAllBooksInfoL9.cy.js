/// <reference types="Cypress" />

import { bookActions } from '../../support/bookstore_page_objects/book_store';
import { navigateTo } from '../../support/bookstore_page_objects/navigation';

describe('Collections: Check All Books Info', () => {
    beforeEach('Go to all books list', () => {
        navigateTo.allBooks();
    });

    it('Check finding all books in store', () => {
        cy.get('.rt-tbody')
            .each((row) => {
                cy.fixture('allBooks').then((book) => {
                    const bookIDs = Object.keys(book);
                    const bookData = Object.values(book);
                    cy.wrap(bookIDs).each((id) => {
                        bookActions.checkAllBookCollection(
                            bookData[id].Title,
                            bookData[id].Author,
                            bookData[id].Publisher);
                    });
                });
            });
    });

    it.only('Check finding all books in store without separate method', () => {
        cy.get('.rt-tbody')
            .each((row) => {
                cy.fixture('allBooks').then((book) => {
                    const bookIDs = Object.keys(book);
                    const bookData = Object.values(book);
                    cy.wrap(bookIDs).each((id) => {
                        cy.get('.rt-tbody')
                            .contains('.rt-tr-group', bookData[id].Title).then((row) => {
                                cy.wrap(row).find('.rt-td').eq(1).should('contain', bookData[id].Title);
                                cy.wrap(row).find('.rt-td').eq(2).should('contain', bookData[id].Author);
                                cy.wrap(row).find('.rt-td').eq(3).should('contain', bookData[id].Publisher);
                            });
                    });
                });
            });
    });

});