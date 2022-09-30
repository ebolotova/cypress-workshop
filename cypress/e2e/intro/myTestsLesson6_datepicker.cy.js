/// <reference types="Cypress" />

describe('Date picker: Date picker actions', () => {
  beforeEach('Navigate to date picker page', () => {
    cy.visit('/date-picker');
  });


  it('Check dynamic date selection', () => {
    // Increment Date by 1 month
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    // Set date to 23rd day of next month
    const year = date.getFullYear();
    const month = date.getMonth();
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


  it('Check dynamic date selection', () => {
    // Increment Date by 1 week from today
    const date = new Date();
    date.setDay(date.getDay() + 7);
    const year = date.getFullYear();
    const month = date.getMonth();
    //const day = 23;
    const day1 = date.getDay();

    // Open date picker
    cy.get('#datePickerMonthYearInput').click();
    // Select year
    cy.get('.react-datepicker__year-select').select(`${year}`);
    // Select month
    cy.get('.react-datepicker__month-select').select(`${month}`);
    // Select day
    //TODO: do not understand why I cannot select 1 week ahead
    cy.get('.react-datepicker__day--today').select(`${day1}`); 
    //cy.get('.react-datepicker__day').select(`${day1}`);
    // Assert input date value
    cy.get('#datePickerMonthYearInput').should(
      'have.value',
      `${`${month}`.padStart(2, '0')}/${day1 + 7}/${year}`
    );
  });

});
