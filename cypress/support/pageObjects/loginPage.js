
class LoginPage {
    // Constructor to set the base URL if needed, or use a default value
    constructor() {
        this.baseUrl = 'https://example.cypress.io/commands/actions';
    }

    // Method to perform login
    login(username) {
        cy.visit(this.baseUrl);
        cy.get('.action-email').type(username);
        cy.get('.action-btn').click();
    }
}

// Export an instance of LoginPage
export default new LoginPage();