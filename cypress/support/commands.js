// cypress/support/commands.js

import 'cypress-axe';
import '@percy/cypress';

Cypress.Commands.add('checkA11y', (selector = 'main') => {
  cy.injectAxe(); // Inject Axe for accessibility testing

  // Run accessibility checks with limited scope and impact
  cy.checkA11y(selector, {
    runOnly: {
      type: 'tag',
      values: ['wcag2a', 'wcag2aa'], // Only check WCAG Level A and AA standards
    },
    includedImpacts: ['critical', 'serious'] // Focus on critical and serious issues
  });
});

Cypress.Commands.add('login', (username, password) => {
    // Navigate to the Actions page on the demo app, which contains input fields
    cy.visit('https://example.cypress.io/commands/actions');
    
    // Type into the .action-email field to simulate entering a username/email
    cy.get('.action-email').type(username);
    cy.get('.action-email').should('have.value', username);
    
    // Simulate clicking a "login" button (using the available form button)
    cy.get('.action-btn').click();
  });

