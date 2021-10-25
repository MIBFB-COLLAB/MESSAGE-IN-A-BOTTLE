describe('Landing Page', () => {
  beforeEach('Home Page' , () => {
    cy.visit('http://localhost:3000/')
  });

  it('Should be able to access to application by URL and see Home Page', () => {
    cy.url().should('include', '/')
    cy.url().should('eq', 'http://localhost:3000/')
    
  });

  it('Should be able to show an error if URL path is wrong', () => {
    cy.visit('http://localhost:3000/hotdogs')
    cy.get('.error-message').contains('Whoops, something went wrong!')
    cy.get('a > .MuiButton-root').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should be able to see page Title', () => {
    cy.get('Header')
    cy.get('.header-text').contains('Welcome to Message in a Bottle')
  });

  it('Should be able to see instructions to follow', () => {
    cy.get('article')
    .get('p').contains('Happy searching!')
    cy.get('.disclaimer').contains('**')
  });

  it('Should be able to see a button to submit a story', () => {
    cy.get('Header')
    .get('div')
    cy.get('.MuiButton-root')
  })

  it('Should be able click submit story button, in order to submit new story', () => {
    cy.get('Header')
    .get('div')
    cy.get('.MuiButton-root').click()
    cy.on('window:confirm',(txt)=>{
      expect(txt).to.contains('Allow', 'Block');
    })
  });

  it('Should be able to see button and text to get stories near by', () => {
    cy.get('.location-selection')
    .get('.get-stories-btn').contains('Get Stories').click()
    cy.GetStory('GET')
    cy.visit('http://localhost:3000/storiesPage/39.6265535/-104.8108433')
    cy.url().should('include', '/storiesPage/39.6265535/-104.8108433')
    cy.url().should('eq', 'http://localhost:3000/storiesPage/39.6265535/-104.8108433')
  })
  
  it('Should be able to get stories near by clicking the button', () => {
    cy.get('.location-selection')
    .get('.get-stories-btn').contains('Get Stories')
  })
});

describe('Create new story', () => {
  beforeEach('New card form modal', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Should be able click submit story button, in order to submit new story', () => {
    cy.get('Header')
    .get('div')
    cy.get('.MuiButton-root').click()
    cy.on('window:confirm',(txt)=>{
      expect(txt).to.contains('Allow', 'Block');
    })

    cy.get('article')
    .get('h3').contains('Create Your Message')
    .get('div')
    .get('#newStoryModal')
    .get('.title').type('Hello')
    cy.get('[id="message"]').type('heloooooo')
    .get('button').contains('Submit Story').click()
    cy.PostStory('POST')
  });
})

// describe('EditStory component', () => {
//   beforeEach('Edit story card form modal', () => {
//     cy.visit('http://localhost:3000/')
//     cy.get('.MuiButton-root').click()
//     cy.get('article')
//     .get('h3').contains('Create Your Message')
//     .get('div')
//     .get('.new-story-form')
//     .get('.title').type('Hello')
//     .get('textarea').type('Hellooooo')
//     .get('h2').contains('characters left')
//     .get('button').contains('Submit Story').click()
//     cy.PostStory('POST')
//   })

//   it('After submitting new story, should be able to see new pop up modal with edit options', () => {
//     cy.get('.MuiButton-root').click()
//     cy.PostStory('POST')
//     cy.get('.edit-story-form')
//     .get('p').contains('Your story successfully been added')
//     .get('input[name="title"]').type('Hello')
//       .invoke('val')
//       .then(sometext => cy.log('Hello'));

//       cy.get('textarea[name="text"]').type('Hellooo')
//       .invoke('val')
//       .then(sometext => cy.log('Hellooo'));
//       cy.get('h2').contains('characters left')
//   })
  
//   it('Should be able to submit changes by clicking submit my edits button and modal has to close', () => {
//     cy.get('.story-submit-button').contains('Submit Story').click().wait(3000)
//     cy.PostStory('POST')
//     cy.get('.edit-story-form')
//     .get('p').contains('Your story successfully been added')
//     .get('input[name="title"]').type('Hello World')
//       .invoke('val')
//       .then(sometext => cy.log('Hello World'));

//       cy.get('textarea[name="text"]').type('Hellooo')
//       .invoke('val')
//       .then(sometext => cy.log('Hellooo'));
//       cy.get('h2').contains('characters left').wait(3000)
//       cy.get('.story-submit-button').click()
//       cy.PatchStory('PATCH')
//   })

//   it('Should be able to delete story by clicking button and modal has to close', () => {
//     cy.get('.story-submit-button').contains('Submit Story').click()
//     cy.PostStory('POST')
//     cy.get('.edit-story-form')
//     .get('p').contains('Your story successfully been added')
//     .get('input[name="title"]').type('Hello World')
//       .invoke('val')
//       .then(sometext => cy.log('Hello World'));

//       cy.get('textarea[name="text"]').type('Hellooo')
//       .invoke('val')
//       .then(sometext => cy.log('Hellooo'));
//       cy.get('h2').contains('characters left')
//       .get('.story-delete-button').click()
//       cy.DeleteStory('DELETE')
//   })
// })
