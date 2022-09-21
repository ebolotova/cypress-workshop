/// <reference types="Cypress" />

describe('Checkboxes: Checkbox actions', () => {
    before('Navigate to checkbox page', () => {
      cy.visit('/checkbox');
    });

    it('Check Downloads checkbox actions', () => {
        // Open home dropdown
        cy.get('button[aria-label="Toggle"]').click();
    
        // Open Downloads dropdown
        cy.get('button[aria-label="Toggle"]').eq(3).click();
    
        // Get all checkboxes, select "Excel File.doc"
        cy.get('[type="checkbox"]').then((checkbox) => {
          cy.wrap(checkbox).eq(3).check({ force: true }).should('be.checked');
          // Verify that correct text is displayed for chosen options
          //cy.contains('.text-success', 'desktop');
          //cy.contains('.text-success', 'notes');
          //cy.contains('.text-success', 'commands');
          //cy.contains('.text-success', 'documents');
          cy.contains('.text-success', 'downloads');
          cy.contains('.text-success', 'word');
          cy.contains('.text-success', 'excel');

          //Check
          cy.get('button[aria-label="Toggle"]').eq(2).click();
          cy.wrap(checkbox).eq(2).check({ force: true }).should('be.checked');
          cy.contains('.text-success', 'documents');
          cy.contains('.text-success', 'workspace');
          cy.contains('.text-success', 'office');

          //Unheck Downloads folder
          cy.wrap(checkbox).eq(3).uncheck({ force: true }).should('not.be.checked');
          cy.contains('.text-success', 'downloads').should('not.exist');
          cy.contains('.text-success', 'word').should('not.exist');
          cy.contains('.text-success', 'excel').should('not.exist');
        });

      });


});
