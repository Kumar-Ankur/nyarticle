describe('App Component', () => {
    it('renders the App component correctly', () => {
      cy.visit('/');

      cy.get('[data-testid="app"]').should('exist');
    });
    
  });
  