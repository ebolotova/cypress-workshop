/// <reference types="Cypress" />

describe('Lists: Lists actions', () => {
    beforeEach('Navigate to lists page', () => {
      cy.visit('/select-menu');
    });


    it('Check selection of Cars list options - select method - colors menu', () => {
      // Load colors fixure json file to assert if all colors are present
      cy.fixture('cars').then((cars) => {
        // Get all options in the menu, get each option and indexes
        cy.get('select#cars option').each((option, index) => {
          // Get option text
          const text = option.text();
          // Select each option and assert that it has correct option value and text
          cy.get('#cars')
            .select(text)
            .should('have.value', option.val())
            .contains(cars[index]);
        });
      });
    });

  
  });