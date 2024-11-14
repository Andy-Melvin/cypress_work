// cypress/support/actions.js

export function submitForm(email) {
    cy.get('#email').type(email);
    cy.get('button[type="submit"]').click();
  }

export function visitApp() {
  cy.visit('https://example.cypress.io');
}

export function clickQueryingLink() {
  cy.contains('Querying').click({ force: true });
}

export function verifyURLContains(substring) {
  cy.url().should('include', substring);
}

export function fillEmailInput(email) {
  cy.get('.action-email').type(email).should('have.value', email);
}

export function clickSubmitButton() {
  cy.get('.action-btn').click();
}
