describe('Percy Visual Regression Test', () => {
    it('takes a Percy snapshot of the homepage', () => {
      cy.visit('https://example.cypress.io'); // Visit the page to be tested
      cy.percySnapshot('Homepage Snapshot',{width: [768,992,1200]});  // Take a snapshot with Percy
    });
  });