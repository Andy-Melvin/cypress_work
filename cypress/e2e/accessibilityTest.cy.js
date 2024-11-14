describe('Quick Accessibility and Element Checks', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io'); // Visit the page before each test
      cy.injectAxe(); // Inject Axe for accessibility testing
    });
  
    it('checks the Cypress logo link', () => {
      // Check the Cypress logo link for correct text and href attribute
      cy.get('a.navbar-brand')
        .should('have.text', 'cypress.io') // Check for the correct link text
        .and('have.attr', 'href', '/');    // Check that the link has the correct href
    });
  
    it('checks the navbar toggle button', () => {
      // Check the navbar toggle button for its attributes
      cy.get('button.navbar-toggle.collapsed')
        .should('have.attr', 'type', 'button') // Verify type is 'button'
        .and('have.attr', 'data-toggle', 'collapse') // Verify data-toggle attribute
        .and('have.attr', 'data-target', '#navbar'); // Verify data-target attribute
      
      // Verify that the button contains three icon bars
      cy.get('button.navbar-toggle.collapsed')
        .within(() => {
          cy.get('.icon-bar').should('have.length', 3); // Check for three icon bars
        });
    });
});
