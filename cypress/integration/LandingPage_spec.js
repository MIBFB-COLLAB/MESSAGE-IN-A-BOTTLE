describe('Landing Page', () => {
  beforeEach('Home Page', () => {
    cy.visit('http://localhost:3000/');
  });

  it('Should be able to access the application by URL and see Home Page', () => {
    cy.url().should('include', '/');
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('Should be able to show an error if URL path is wrong', () => {
    cy.visit('http://localhost:3000/hotdogs');
    cy.get('.error-message').contains('Whoops, something went wrong!');
    cy.get('a > .MuiButton-root').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('Should be able to see page Title', () => {
    cy.get('Header');
    cy.get('.header-text').contains('Message in a Bottle');
  });

  it('Should be able to see instructions to follow', () => {
    cy.get('article').get('h4').contains('Search your city');
    cy.get('.disclaimer').contains('**');
  });

  it('Should be able to see a button to submit a story', () => {
    cy.get('Header').get('div');
    cy.get('.MuiButton-root');
  });

  it('Should be able click submit story button, in order to submit new story', () => {
    cy.get('Header').get('div');
    cy.get('.MuiButton-root').eq(0).click();
    cy.on('window:confirm', (txt) => {
      expect(txt).to.contains('Allow', 'Block');
    });
  });

  it('Should be able to get stories near by clicking the button', () => {
    cy.get('.location-selection').get('.MuiLoadingButton-root').click().wait(5000)
      .get('.stories-container > :nth-child(1)').should('be.visible')
  });
});

describe('Create new story', () => {
  beforeEach('New card form modal', () => {
    cy.visit('http://localhost:3000/');
  });

  it('Should be able to view a modal to submit a story', () => {
    cy.get('Header').get('div');
    cy.get('.MuiButton-root').eq(0).click();
    cy.on('window:confirm', (txt) => {
      expect(txt).to.contains('Allow', 'Block');
    });
    cy.get('article')
      .get('h3')
      .contains('Create Your Message')
      .get('div')
      .get('#newStoryModal')
      .get('.title')
      .type('Story');
    cy.get('[id="message"]')
      .type(
        'Paleo tacos cliche DIY, dreamcatcher trust fund iPhone taxidermy hammock chillwave bespoke artisan sustainable.'
      )
      .get('button')
      .contains('Submit Story')
      // .click();
    // cy.PostStory('POST');
  });

  it('Should be able to see button and text to get stories nearby', () => {
    cy.get('.location-selection').get('.MuiLoadingButton-root').click();
    cy.get('.stories-container > :nth-child(1)').should('be.visible')
  });
});

describe('EditStory component', () => {
  // beforeEach('Edit story card form modal', () => {
  //   cy.visit('http://localhost:3000/')
  //   cy.get('.MuiButton-root').click()
  //   cy.get('article')
  //   .get('h3').contains('Create Your Message')
  //   .get('div')
  //   .get('.title').type('Test')
  //   .get('[id="message"]').type('faras test')
  //   .get('button').contains('Submit Story').click()
  //   cy.PostStory('POST')
  // })

  // it('After submitting new story, should be able to see new pop up modal with edit options and edit story', () => {
  //   cy.get('#newStoryModal').wait(5000)
  // cy.get('#editInstructions').contains('Bottle')
  //   cy.get('#outlinedTextArea').type(' editing faras test')
  //   .get('#title').type('Test')
  //   .get('#text').contains('Once')
  //   .get('#editStoryBtn').click()
  //   cy.PatchStory('PATCH')
  //   cy.visit('http://localhost:3000/')
  //   cy.get('.get-stories-btn').contains('Get Stories').click()
  //   cy.get('.instructions').contains('location')
  //   cy.get('.stories-container')
  //   .get('#storyTitle')
  //   .get('#miles').contains('Miles')
  // })

  it('Should be able to post and delete story', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.MuiButton-root').eq(0).click();
    cy.get('article')
      .get('h3')
      .contains('Create Your Message')
      .get('div')
      .get('.title')
      .type('CYPRESS TESTING')
      .get('[id="message"]')
      .type('testing testing testing')
      .get('button')
      .contains('Submit Story')
      .click().wait(5000)
    cy.get('#deleteBtn')
      .click().wait(5000)
    cy.visit('http://localhost:3000/');
    cy.get('.MuiLoadingButton-root').click().wait(3000)
    cy.get('.instructions').contains('location');
    cy.expect('#storyTitle').to.not.equal('CYPRESS TEST');
  });
});
