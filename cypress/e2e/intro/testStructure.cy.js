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

  afterEach(() => {
    // runs after each test in the block (after each "it" blocks)
  });

  it('Test 1', () => {
    cy.visit('/automation-practice-form');
    expect(true).to.equal(true);
  });

  it('ATest 6', () => {
    expect(false).to.equal(false);
  });

  it('Test 3', () => {
    expect(true).to.equal(true);
  });

  it('Test 4', () => {
    expect(true).to.equal(true);
  });

  it('Test 5', () => {
    expect(true).to.equal(true);
  });

  it('Test 2', () => {
    expect(false).to.equal(false);
  });

});
