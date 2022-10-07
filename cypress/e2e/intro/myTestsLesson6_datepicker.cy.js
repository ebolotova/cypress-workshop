/// <reference types="Cypress" />

describe('Date picker: Date picker actions', () => {
  beforeEach('Navigate to date picker page', () => {
    cy.visit('/date-picker');
  });


  it('Check dynamic date selection', () => {
    // Increment Date by 1 month
    const date = new Date();
    //date.setMonth(date.getMonth() + 1);
    // Set date to 23rd day of next month
    const year = date.getFullYear();
    const month = date.getMonth();
    cy.log(month);
    const day = 23;
    // Open date picker
    cy.get('#datePickerMonthYearInput').click();
    // Select year
    cy.get('.react-datepicker__year-select').select(`${year}`);
    // Select month
    cy.get('.react-datepicker__month-select').select(`${month}`);
    // Select day
    cy.get(`.react-datepicker__day--0${day}`).first().click();
    // Assert input date value
    cy.get('#datePickerMonthYearInput').should(
      'have.value',
      `${`${month + 1}`.padStart(2, '0')}/${day}/${year}`
    );
  });

  it.only('Check dynamic date selection', () => {
    // Increment Date by 1 week from today
    const year = date.getFullYear();
    const month = date.getMonth();
    cy.log(month);
    const day = 23;
    //date.setDay (date.getDay() + 7); // cannot understand why setDay is not function
    //const day = date.getDay();
   
    // Open date picker
    cy.get('#datePickerMonthYearInput').click();
    // Select year
    cy.get('.react-datepicker__year-select').select(`${year}`);
    // Select month
    cy.get('.react-datepicker__month-select').select(`${month}`);
    // Select day
    //TODO: do not understand why I cannot select 1 week ahead
    cy.get(`.react-datepicker__day--0${day}`).first().click();

    // Assert input date value
    cy.get('#datePickerMonthYearInput')
      .should('have.value',
        `${`${month}`.padStart(2, '0')}/0${day}/${year}`
      );
  });

});
