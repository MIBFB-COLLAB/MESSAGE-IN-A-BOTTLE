describe('StoriesPage', () => {
  beforeEach('User can see stories near', () => {
    cy.mockGeolocation();
    cy.GetStory('GET');
    cy.visit('http://localhost:3000/');
    cy.get('.Header');
    cy.get('.header-text');
    cy.get('a.header-text').contains('Welcome to Message in a Bottle');
    cy.get('.location-selection');
    cy.get('.get-stories-button').click().wait(5000);
  });

  //   it('Should be able go to a new page and see title, instructions and button', () => {
  //     cy.get('.Header');
  //     cy.get('.header-text').contains('Welcome to Message in a Bottle');
  //     cy.get('Header').get('div');
  //     cy.get('.MuiButton-root');
  //   });

  it('Should be able to see cards with title and buttons', () => {
    cy.get('.stories-container');
    cy.get('.MuiPaper-root')
      .eq(0)
      .get('h6')
      .eq(0)
      .contains('Fake News 10/25 11: 47AM'); // should have value of title
  });

  it('Should be able to click button to get directions', () => {
    cy.get('.get-directions-btn'); // need click()
  });

  it('Should be able to click button to view a story', () => {
    cy.get('.view-story-btn'); // need click
  });
});
