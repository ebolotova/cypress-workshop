/// <reference types="Cypress" />

describe('Lists: Lists actions', () => {
    beforeEach('Navigate to lists page', () => {
      cy.visit('/select-menu');
    });
  

    it('Check selection of "Select One" list options', () => {
        // Load colors fixure json file to assert if all colors are present
       //<div class=" css-26l3qy-menu"
       //><div class=" css-11unzgr">
       //<div class=" css-1s9izoc">
       //<div class=" css-18ng2q5-group" id="react-select-6-group-0-heading">Pick one title</div>
       //<div>
       //<div class=" css-yt9ioa-option" id="react-select-6-option-0-0" tabindex="-1">Dr.</div>
       //<div class=" css-yt9ioa-option" id="react-select-6-option-0-1" tabindex="-1">Mr.</div>
       //<div class=" css-yt9ioa-option" id="react-select-6-option-0-2" tabindex="-1">Mrs.</div>
       //<div class=" css-yt9ioa-option" id="react-select-6-option-0-3" tabindex="-1">Ms.</div>
       //<div class=" css-9gakcf-option" id="react-select-6-option-0-4" tabindex="-1">Prof.</div>
       //<div class=" css-1n7v3ny-option" id="react-select-6-option-0-5" tabindex="-1">Other</div></div></div></div></div>

    
       cy.get('#selectOne > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click();
       //cy.get('.css-1wy0on6/[1]').click();
       cy.get('#react-select-6-option-0-5').click();
       cy.get('#react-select-6-option-0-5').contains('Other');

        cy.fixture('text').then((prof) => {
          // Get all options in the menu, get each option and indexes
          cy.get('.css-yt9ioa-option div').each((div, index) => {
            // Get option text
            const optionText = div.text();
            // Select each option and assert that it has correct option value and text
            cy.get('.css-yt9ioa-option')
              .select(optionText)
              .should('have.value', div.val())
              .contains(prof[index]);
          });
        });
      });
    });
