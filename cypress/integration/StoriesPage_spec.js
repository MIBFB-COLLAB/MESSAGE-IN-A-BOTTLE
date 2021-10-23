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

    it('Should be able to see stories near by', () => {
        
    })
})

