/// <reference types="Cypress" />

describe('Alerts: Alerts actions', () => {
    beforeEach('Navigate to Alerts page', () => {
        cy.visit('/alerts');
    });

    it('Check the first alert', () => {
        //Create a stub method on window confirm alert
        const stub = cy.stub();
        cy.on('window:alert', stub);
        //Click on alert confirm button and assert that alert is called with correct text
        cy.get('#alertButton').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('You clicked a button');
        });
        //Select ok in alert
        cy.on('window:alert', () => true);
        //Assert that alert closed  // stub should not be visible???
        
        //cy.get('window:alert').close();
        //cy.check('window:alert', stub).close();
        //cy.check('window:alert').should('not.be.visible');
        //cy.on('window:alert', stub).should('not.be.visible');
    });
});