describe('StoriesPage', () => {
  beforeEach('User can see stories near', () => {
    cy.mockGeolocation();
    cy.GetStory('GET');
    cy.visit('http://localhost:3000/');
    cy.get('.Header');
    cy.get('.header-text');
    cy.get('a.header-text').contains('Welcome to Message in a Bottle');
    cy.get('.location-selection');
    cy.get('.get-stories-btn').click().wait(3000);
  });

  it('Should be able to see cards with title and buttons', () => {
    cy.get('.stories-container');
    cy.get('.MuiPaper-root')
      .get('h6')
      .eq(0)
      .contains('TestTest');
  });

  it('Should be able to click button to get & view directions', () => {
    cy.get('.stories-container');
    cy.get('.MuiPaper-root')
      .eq(0)
      .get('h6')
      .eq(0)
      .get('.get-directions-btn')
      .eq(0)
      .click()
      .wait(3000)
    cy.get('.directions').should('be.visible')
      .get('.MuiListItemText-root').should('be.visible')
      .get('#homeBtn').should('be.visible')
      .get('#storiesPageReturn').should('be.visible')
  });

  it('Should be able to click button to view a story', () => {
    cy.get('.stories-container');
    cy.get('.MuiPaper-root')
      .eq(0)
      .get('h6')
      .eq(0)
      .get('.view-story-btn')
      .eq(0)
      .click()
      .wait(3000)
    cy.get('.MuiCardContent-root').should('be.visible')
      .get('h3').should('be.visible')
      .get('.MuiTypography-body1').should('be.visible')
      .get('#homeBtn').should('be.visible')
      .get('#storiesPageReturn').should('be.visible')
  });
});
