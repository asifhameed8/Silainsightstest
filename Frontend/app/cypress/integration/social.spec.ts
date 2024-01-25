describe('Login Modal', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Social-Test', () => {
        cy.contains('Login').click();
        // Find the Twitter link and assert that it opens in a new tab
        cy.get('a[href="https://v2.mintstargram.tech/auth/twitter"]').should('have.attr', 'rel', 'noopener noreferrer');

        // Click the Twitter link
        cy.get('a[href="https://v2.mintstargram.tech/auth/twitter"]').click();

        // Switch to the new tab
        cy.window().then((win) => {
            const linkUrl = win.location.href;

            // Assert that the link leads to the Twitter website
            expect(linkUrl).to.include('https://x.com/');
        });

        cy.wait(2000); // Wait for 2 seconds
        // cy.contains('Twitter').click();
        // cy.contains('Facebook').click();
    });
});
