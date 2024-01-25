describe('Login Modal', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Signup-Error', () => {
        cy.contains('Login').click();
        cy.contains('Create Account').click();
        cy.get('input[name="firstName"]');
        cy.get('input[name="lastName"]');
        cy.get('input[name="userName"]');
        cy.get('input[name="email"]');
        cy.get('input[name="password"]');

        //   // Ensure the checkbox is unchecked initially
        cy.get('input[name="terms"]').should('not.be.checked');

        //   // Assert that the checkbox is checked
        //   cy.get('input[name="terms"]').should('be.checked');
        //   cy.get('input[name="terms"]').click();

        cy.get('button[type="submit"]').click();
        cy.wait(2000); // Wait for 2 seconds
    });
    it('Signup-Test', () => {
        cy.contains('Login').click();
        cy.contains('Create Account').click();
        cy.get('input[name="firstName"]').type('Friday');
        cy.get('input[name="lastName"]').type('Last');
        cy.get('input[name="userName"]').type('friiii0111');
        cy.get('input[name="email"]').type('friday+111@gmail.com');
        cy.get('input[name="password"]').type('Test@123');

        // Ensure the checkbox is unchecked initially
        cy.get('input[name="terms"]').should('not.be.checked');
        cy.get('button[type="submit"]').click();

        // Assert that the checkbox is checked
        cy.get('input[name="terms"]').should('not.be.checked');
        cy.get('input[name="terms"]').click();

        cy.get('button[type="submit"]').click();

        cy.wait(2000); // Wait for 2 seconds
        cy.url().should('include', 'http://localhost:3000').end();

        // cy.wait(5000); // Wait for 2 seconds
        // cy.contains('Login').click();
    });
});
