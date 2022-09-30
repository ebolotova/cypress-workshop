//Write more scenarios for tables (searching, sorting, adding/removing records, etc) 

describe('Tables: Tables actions', () => {
    beforeEach('Navigate to tables page', () => {
        // Visit tables page
        // Table records return to default after page refresh
        cy.visit('/webtables');
    });

    xit('Check adding a new record', () => {
        // Click on Add button
        cy.get('#addNewRecordButton').click();
        cy.fixture('users').then((user) => {
            // Fill new record form
            const columnIDs = Object.keys(user.user2);
            const userData = Object.values(user.user2);

            cy.wrap(columnIDs).each((id, value) => {
                cy.get(`#${id}`).type(userData[value]);
            });
            cy.get('#submit').click();
            // Assert that new record is present in the table with correct values
            cy.get('.rt-tbody')
                .contains('.rt-tr-group', user.user2.firstName)
                .then((row) => {
                    cy.wrap(userData).each((value, index) => {
                        cy.wrap(row).find('.rt-td').eq(index).should('contain', value);
                    });
                });
        });
    });

    xit('Check finding and editing a record', () => {
        // Get the table, find the row with record Kierra
        cy.get('.rt-tbody')
            .contains('.rt-tr-group', 'Kierra')
            .then((row) => {
                // Click on edit button for Alden record
                cy.wrap(row).find('[title="Edit"]').click();
                // Edit salary
                cy.get('#salary').clear().type('2100');
                cy.get('#submit').click();
                // Assert that first and last name are changed
                cy.wrap(row).find('.rt-td').eq(0).should('contain', 'Kierra');
                cy.wrap(row).find('.rt-td').eq(4).should('contain', '2100');
            });
    });


    xit('Check search and record info', () => {
        cy.fixture('users').then((user) => {
            // Fill new record form
            const columnIDs = Object.keys(user.user3);
            const userData = Object.values(user.user3);

            // Get the table, find the row with record
            cy.get('.rt-tbody')
                .contains('.rt-tr-group', 'Kierra')
                .then((row) => {
                    // Assert that search record is present in the table with correct values
                    cy.get('.rt-tbody')
                        .contains('.rt-tr-group', user.user3.firstName)
                        .then((row) => {
                            cy.wrap(userData).each((value, index) => {
                                cy.wrap(row).find('.rt-td').eq(index).should('contain', value);
                            });
                        });
                });
        });
    });

    it('Check sorting in table', () => {
        cy.get('.rt-tbody').find('rt-td').eq(0).should('contain', 'Alden')
        //.rt-tr > . rt-resizable-header-content
        cy.get('.rt-tr').find('rt-resizable-header-content').eq(0).click;


        // Assert that First Names are sorted out be DESC
        cy.get('.rt-tbody').find('rt-td').eq(0).should('not.contain', 'Alden')
            //.contains('.rt-tr-group', 'Kierra')

    });




});