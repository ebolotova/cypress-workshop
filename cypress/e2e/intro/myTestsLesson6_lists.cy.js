/// <reference types="Cypress" />

describe('Lists: different types of Lists actions', () => {
    beforeEach('Navigate to lists page', () => {
      cy.visit('/select-menu');
    });


    it('Check selection of Cars list options', () => {
      // Load colors fixure json file to assert if all colors are present
      cy.fixture('cars').then((cars) => {
        // Get all options in the menu, get each option and indexes
        cy.get('select#cars option').each((option, index) => {
          // Get option text
          const text = option.text();
          // Select each option and assert that it has correct option value and text
          cy.get('#cars')
            .select(text)
            .should('have.valueOf', option.val())
            .contains(cars[index]);
        //cy.get('#car').find('option').should('have.length', 4); - why I cannot use it?
        });
      });
    });

    it.only('Check selection of "Multiselect drop down" list ', () => {
      cy.get('.css-1wy0on6 > .css-tlfecz-indicatorContainer').eq(2).click();
      cy.contains('Green')
      cy.contains('Blue')
      cy.contains('Black')
      cy.contains('Red')
     });

     it('Check selection of "Select One" list', () => {
      cy.get('#selectOne').click();
      //example from Misha
      // cy.get("[id*='react-select-3-option']").should(($lis) => {
      // expect($lis, "6 items").to.have.length(6)
      // expect($lis.eq(0), "the first item").to.contain("Dr.")
      //})

      cy.get('#selectOne').find('react-select-3-option').should('have.length', 6); 
      cy.contains('Dr.');
      cy.contains('Mr.');
      cy.contains('Mrs.');
      cy.contains('Ms.');
      cy.contains('Prof.');
      cy.contains('Other');
     });


  
  });