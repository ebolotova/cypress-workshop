/// <reference types="Cypress" />

describe('Date picker: Date picker actions', () => {
  beforeEach('Navigate to date picker page', () => {
    cy.visit('/date-picker');
  });

  it('Check dynamic date selection', () => {
    // Increment Date by 1 week from today
    const date = 23;
    const year = date.getFullYear();
    const month = date.getMonth();
    cy.log(month);
    cy.get('#datePickerMonthYearInput').click();
    // Locate current date selected
    cy.get('.react-datepicker__day--selected').then(($element) => {
      cy.get('#datePickerMonthYearInput').click();
      // Select year
      cy.get('.react-datepicker__year-select').select(`${year}`);
      // Select month
      cy.get('.react-datepicker__month-select').select(`${month}`);
      // Select day
      cy.get(`.react-datepicker__day--${day}`).first().click();
      // Assert input date value
      cy.get('#datePickerMonthYearInput').should('have.value',
          `${`${month + 1}`.padStart(2, '0')}/${day}/${year}`
        );
    });
  });
});
