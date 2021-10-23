import { baseURL } from "../support/commands"

describe('StoriesPage', () => {
    beforeEach('User can see stories near', () => {
        cy.mockGeolocation()
        cy.GetStory('GET')
        cy.visit('http://localhost:3000/')
        cy.get('.Header')
        cy.get('.header-text')
        cy.get('h4')
        cy.get('.get-stories-btn').click().wait(3000)
        
        
        
    })

    it('Should be able go to a new page and see title, instructions and button', () => {
        cy.get('.Header')
        cy.get('.header-text').contains('Welcome to Message in a Bottle')
        .get('.story-submit')
        cy.get('article')
        .get('p').contains('Happy searching!')
        cy.get('.disclaimer').contains('**')
    })

    it('Should be able to see cards with title and buttons', () => {
        cy.get('.stories-container')
        cy.get('.story-card')
        .get('.story-title') // should have value of title
    })
})

