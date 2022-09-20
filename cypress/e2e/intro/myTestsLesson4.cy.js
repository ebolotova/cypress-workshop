/// <reference types="Cypress" />

describe('Context: My First Test', () => {
  before(() => {
    // runs once before all tests in the block (before all "it" blocks)
  });

  beforeEach('Clear Cookies', () => {
    // runs before each test in the block (before each "it" blocks)
    cy.clearCookies();
  });

  after('Log something after all test runs', () => {
    // runs once after all tests in the block (after all "it" blocks)
    cy.log('we completed this test run!');
  });

  it('Test 1', () => {
    cy.visit('/automation-practice-form');
    cy.get('title').contains('ToolsQA');
  });

  it('Test 2', () => {
    // that element is visible 
    cy.get('#userName-label').should('be.visible');
  });

  it('Test 3', () => {
   // that element is (not) visible
    cy.get('script').should('not.be.visible');
  });

  it('Test 4', () => {
    // that text is visible or not
    cy.get('.form-file-label').contains('Select picture')
    .should('be.visible');
    //cy.contains('.form-file-lable', 'Select picture');
  });

  it('Test 5', () => {
    // that element contains certain class
    cy.get('[type="checkbox"]').then((checkbox) => {
    cy.wrap(checkbox).eq(1).should('not.be.checked');
    cy.wrap(checkbox).eq(1).should('have.class', 'custom-control-input');
    expect(checkbox).to.have.class('custom-control-input');
    });
  });

  it('Test 6', () => {
    // check number of found elements on the page (length)
    cy.get('[type="radio"]').then((radio) => {
    cy.wrap(radio).eq(0).should('not.be.checked');
    cy.get(radio).should('have.length', 3)
    })

    cy.get('[type="checkbox"]').then((checkbox) => {
    cy.wrap(checkbox).eq(0).should('not.be.checked');
    expect(checkbox).to.have.lengthOf(3);
    });
  });

});