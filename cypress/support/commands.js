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
 const baseURL = 'https://message-in-a-bottle-api.herokuapp.com/api/v1/stories'

Cypress.Commands.add('GetStory', () => {
    cy.intercept(baseURL, {
        method: 'GET',
        statusCode: 200,
        body: {
            "data":[
            {
                "id":54,
                "latitude":-18.982791,
                "longitude":125.456892,
                "message":"Ich habe meinen Freund im Denver verloren und jetzt bin Ich ganz allein :(",
                "name":"Till Lindemann",
                "title":"Wie Traurig",
                "location":"",
                "created_at":"2021-10-20T23:14:32.817628Z",
                "updated_at":"2021-10-20T23:14:32.817662Z"
            },
            {
                "id":53,
                "latitude":39.7754063,
                "longitude":-105.0169859,
                "message":"Big Love!",
                "name":"Anonymous",
                "title":"Hello",
                "location":"",
                "created_at":"2021-10-20T20:17:47.528244Z",
                "updated_at":"2021-10-20T20:17:47.528270Z"}
            ]
        }
    })

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
