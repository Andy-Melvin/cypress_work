describe('Cypress Window, Title, and Document Assertions with XPath', () => {
    it('should verify properties of the window, title, and document using XPath', () => {
      // Visit the target page
      cy.visit('https://example.cypress.io'); // Replace with your target URL
  
      // Assert that the window object has the 'top' property
      cy.window().should('have.property', 'top');
  
      // Assert that the page title includes 'Kitchen Sink'
      cy.title().should('include', 'Kitchen Sink');
        
      // Verify the document charset using XPath
      cy.xpath('//html')
        .then(($html) => {
          const document = $html[0].ownerDocument;
          expect(document).to.have.property('charset', 'UTF-8');
        });
    });
  });