describe('Login Modal', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('forgot-test', () => {
        cy.contains('Login').click();
        cy.contains('Forgot').click();
        cy.get('input[name="email"]').type('developerweb6@gmail.com');
        cy.contains('Submit').click();
        // cy.get('input[placeholder="E-mail or username"]').type('developerweb6@gmail.com');
        // cy.get('input[placeholder="Password"]').type('Test@123');
        // cy.get('button[type="submit"]').click();
        cy.wait(2000); // Wait for 2 seconds
        // cy.url().should('include', 'http://localhost:3000/').end;
        // cy.contains('Welcome,').should('be.visible');
    });
});
