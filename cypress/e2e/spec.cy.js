
import LoginPage from '../support/pageObjects/loginPage';
import 'cypress-xpath';
console.log('cypress-xpath loaded');
// cypress/e2e/spec.cy.js
module.exports = (on) => {
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
  });
};
describe('Cypress Kitchen Sink Example', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io');
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should verify the URL', () => {
    cy.url().should('eq', '');
  });

  it('should select elements and interact with them', () => {
    cy.contains('Querying').click({ force: true });
    cy.url().should('include', '/commands/querying');

    cy.get('.query-btn').as('queryButton');
    cy.get('@queryButton').click();
    cy.get('@queryButton').should('contain', 'Button');
  });

  it('should use assertions to verify element properties', () => {
    cy.contains('Actions').click({ force: true });

    cy.get('#email1').as('emailInput');
    cy.get('@emailInput').type('test@example.com').should('have.value', 'test@example.com');
    cy.get('.action-btn').should('be.visible').and('not.be.disabled');
  });

  it('should use aliases for elements', () => {
    cy.contains('Actions').click({ force: true });

    cy.get('#email1').as('emailInput');
    cy.get('.action-btn').as('submitButton');

    cy.get('@emailInput').type('alias@example.com');
    cy.get('@emailInput').should('have.value', 'alias@example.com');
    cy.get('@submitButton').click();
  });

  // cypress/e2e/example_xpath.cy.js

  // describe('Using XPath with Cypress on example.cypress.io', () => {
  //   it('should interact with the Traversal link using XPath', () => {
  //     // Visit the base URL
  //     cy.visit('https://example.cypress.io');
  
  //     // Use refined XPath to click on the "Traversal" link in the main content area
  //     cy.xpath("//div[contains(@class, 'home-list')]//a[@href='/commands/traversal']").click();
  
  //     // Verify that the URL includes '/commands/traversal'
  //     cy.url().should('include', '/commands/traversal');
  
  //     // Interact with elements on the Traversal page
  //     // For example, find the '.traversal-breadcrumb' element and assert that it exists
  //     cy.xpath("//nav[@aria-label='breadcrumb']").should('exist');
  //   });
  // });


  
  it('should chain commands to perform multiple actions', () => {
    cy.contains('Actions').click({ force: true });

    cy.get('.action-focus')
      .type('Chained typing')
      .focus()
      .blur();
  });

  it('should use custom commands', () => {
    cy.login('fake@email.com', 'password123');
    cy.get('.action-email').should('have.value', 'fake@email.com');
    cy.url().should('include', '/commands/actions');
  });

/////////////////////////////////////////////
  it('successfully logs in with valid credentials,(PageObjects)',
    () => {const username = 'my username';

    // Use the LoginPage object's login method
    LoginPage.login(username);
});
///////////////////////////////////////////

  it('should load user fixture data and fill out form', () => {
    cy.contains('Actions').click({ force: true });
    cy.fixture('user').then((user) => {
      cy.get('#email1').type(user.email).should('have.value', user.email);
    });
  });

  it('should use actions fixture data to log actions', () => {
    cy.fixture('actions').then((actions) => {
      actions.forEach((action) => {
        cy.log(`Action: ${action.description} - Status: ${action.status}`);
      });
    });
  });
});



/*

// Import utility functions from actions.js
import { visitApp, clickQueryingLink, verifyURLContains, fillEmailInput, clickSubmitButton } from '../support/actions';

module.exports = (on) => {
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
  });
};

describe('Cypress Kitchen Sink Example', () => {

  beforeEach(() => {
    visitApp();
  });

  it('should verify the URL', () => {
    cy.url().should('eq', 'https://example.cypress.io/');
  });

  it('should select elements and interact with them', () => {
    clickQueryingLink();
    verifyURLContains('/commands/querying');

    cy.get('.query-btn').as('queryButton');
    cy.get('@queryButton').click();
    cy.get('@queryButton').should('contain', 'Button');
  });

  it('should use assertions to verify element properties', () => {
    cy.contains('Actions').click({ force: true });

    cy.get('#email1').as('emailInput');
    cy.get('@emailInput').type('test@example.com').should('have.value', 'test@example.com');
    clickSubmitButton();
    cy.get('.action-btn').should('be.visible').and('not.be.disabled');
  });

  it('should use aliases for elements', () => {
    cy.contains('Actions').click({ force: true });

    cy.get('#email1').as('emailInput');
    cy.get('.action-btn').as('submitButton');

    fillEmailInput('alias@example.com');
    cy.get('@submitButton').click();
  });

  it('should chain commands to perform multiple actions', () => {
    cy.contains('Actions').click({ force: true });

    cy.get('.action-focus')
      .type('Chained typing')
      .focus()
      .blur();
  });

  it('should load user fixture data and fill out form', () => {
    cy.contains('Actions').click({ force: true });
    cy.fixture('user').then((user) => {
      fillEmailInput(user.email);
    });
  });

  it('should use actions fixture data to log actions', () => {
    cy.fixture('actions').then((actions) => {
      actions.forEach((action) => {
        cy.log(`Action: ${action.description} - Status: ${action.status}`);
      });
    });
  });
});

*/
