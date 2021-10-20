describe('Landing Page', () => {
  beforeEach('Home Page' , () => {
    cy.visit('http://localhost:3000/')
  });

  it('Should be able to access to application by URL and see Home Page', () => {
    cy.url().should('include', '/')
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should be able to see page Title', () => {
    cy.get('Header')
    .get('h1').contains('Welcome to Message in a Bottle')
  });

  it('Should be able to see instructions to follow', () => {
    cy.get('article')
    .get('p').contains('Happy searching!')
    cy.get('.disclaimer').contains('**')
  });
  
});
