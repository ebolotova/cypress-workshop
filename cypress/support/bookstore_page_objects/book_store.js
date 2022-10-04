export class BookActions {
    addBookToCollection(book_name) {
        cy.contains(book_name).click();
        cy.get('.text-right > #addNewRecordButton').click();
    }

    searchCollection(book_name) {
        cy.get('#searchBox').type(book_name);
    }

    checkAllBookCollection(title, author, publisher){
        cy.get('.rt-tbody')
        .contains('.rt-tr-group', title).then((row) => {
                cy.wrap(row).find('.rt-td').eq(1).should('contain', title);
                cy.wrap(row).find('.rt-td').eq(2).should('contain', author);
                cy.wrap(row).find('.rt-td').eq(3).should('contain', publisher);
            });
    }
}

export const bookActions = new BookActions();