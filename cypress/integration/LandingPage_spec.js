describe('Landing Page', () => {
  beforeEach('Home Page' , () => {
    cy.visit('http://localhost:3000/')
  });

  it('Should be able to access to application by URL and see Home Page', () => {
    cy.url().should('include', '/')
    cy.url().should('eq', 'http://localhost:3000/')
  });
});
