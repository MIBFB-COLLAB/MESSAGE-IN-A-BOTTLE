describe('StoriesPage', () => {
  beforeEach('User can see stories near', () => {
    cy.mockGeolocation();
    cy.GetStory('GET');
    cy.visit('http://localhost:3000/');
    cy.get('.Header');
    cy.get('.header-text');
    cy.get('a.header-text').contains('Welcome to Message in a Bottle');
    cy.get('.location-selection');
    cy.get('.get-stories-btn').click().wait(5000);
  });

  it('Should be able to see cards with title and buttons', () => {
    cy.get('.stories-container');
    cy.get('.MuiPaper-root')
      .get('h6')
      .eq(0)
      .contains('TestTest');
  });

  // it('Should be able to click button to get directions', () => {
  //   cy.get('.stories-container');
  //   cy.get('.MuiPaper-root')
  //     .eq(0)
  //     .get('h6')
  //     .eq(0)
  //     .get('.get-directions-btn')
  //     .eq(0)
  //     .click()
  //     .wait(5000);
    // cy.getDirections('GET');
    // .visit('http://localhost:3000/directionsPage/39.6265535/-104.8108433')
    // .url()
    // .should('include', '/directionsPage/39.6265535/-104.8108433')
    // .url()
    // .should(
    //   'eq',
    //   'http://localhost:3000/directionsPage/39.6265535/-104.8108433'
    // );
  // });

  //   it('Should be able to click button to view a story', () => {
  //     cy.get('.view-story-btn'); // need click
  //   });
});
