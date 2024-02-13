// article_description_spec.js

describe('ArticleDescription component', () => {
    beforeEach(() => {
      cy.visit('/articleDescription/100000009310092');
    });
  
    it('renders the ArticleDescription component correctly', () => {
      
        cy.visit('/articleDescription/100000009308512');
      // Check if the article image exists
      cy.get('img').should('exist');
  
      // Check if the article facets exist
      cy.get('.article_description_container').find('.MuiChip-root').should('exist');
    });
  });
  