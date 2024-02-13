// article_spec.js

describe('Article component', () => {
    it('renders the Article component correctly', () => {
      cy.visit('/'); 
      cy.get('[data-testid="app"]').should('exist');
  
      cy.contains('h6', 'NY Most Popular News').should('exist');
    });
  });
  