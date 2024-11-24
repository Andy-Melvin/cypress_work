import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the actions page', () => {
  // Navigate to the page (replace with your actual URL or navigation logic)
  cy.visit('https://example.cypress.io/commands/actions');
});

When('I click on {string}', (buttonText) => {
  cy.contains(buttonText).click({ force: true });
});

When('I type {string} into the email input field', (email) => {
  cy.get('#email1').as('emailInput');
  cy.get('@emailInput').type(email);
});

Then('the email input field should have the value {string}', (email) => {
  cy.get('@emailInput').should('have.value', email);
});

Then('the action button should be visible', () => {
  cy.get('.action-btn').should('be.visible');
});

Then('the action button should not be disabled', () => {
  cy.get('.action-btn').should('not.be.disabled');
});