// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
const baseURL = 'https://message-in-a-bottle-api.herokuapp.com/api/v1/stories?latitude=39.62654536&longitude=-104.8108256'
const id=53
const baseURL1 = 'https://message-in-a-bottle-api.herokuapp.com/api/v1/stories'
const baseURL2 = `https://message-in-a-bottle-api.herokuapp.com/api/v1/stories${id}`

Cypress.Commands.add('GetStory', (method) => {
    cy.intercept(`${method}`,`${baseURL}`, {
        statusCode: 200,
        body: {
            "data": {
                "input_location": "This is a temporary location!",
                "stories": [
                    {
                        "id": "53",
                        "type": "story",
                        "attributes": {
                            "title": "Wie Traurig",
                            "distance_in_miles": 15.0466,
                            "latitude": 39.7754063,
                            "longitude": -105.0169859
                        }
                    }
                ]
            }
        }
    })
})

Cypress.Commands.add('PostStory', (method) => {
    cy.intercept(`${method}`,`${baseURL1}`, {
        statusCode: 200,
        body: {
            "data": {
                "input_location": "This is a temporary location!",
                "stories": [
                    {
                        "id": "53",
                        "type": "story",
                        "attributes": {
                            "title": "Wie Traurig",
                            "distance_in_miles": 15.0466,
                            "latitude": 39.7754063,
                            "longitude": -105.0169859
                        }
                    }
                ]
            }
        }
    })

})

Cypress.Commands.add('PatchStory', (method) => {
    cy.intercept(`${method}`, `${baseURL2}`, {
        statusCode: 200,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({title: 'Hello world', message:'Hello'}),
    })
})

Cypress.Commands.add('DeleteStory', (method) => {
    cy.intercept(`${method}`,`${baseURL2}`, {
        statusCode: 200,
    })
    // i think also need to add response message: but at this point i dont know how it looks lol 
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
