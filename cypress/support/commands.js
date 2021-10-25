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
export const baseURL = 'https://message-in-a-bottle-api.herokuapp.com/api/v1/stories?latitude=39.62654536&longitude=-104.8108256'
const id=53
const baseURL1 = 'https://message-in-a-bottle-api.herokuapp.com/api/v1/stories'
const baseURL2 = `https://message-in-a-bottle-api.herokuapp.com/api/v1/stories/53`

Cypress.Commands.add('GetStory', (method) => {
    cy.intercept(`${method}`,`${baseURL}`, {
        statusCode: 200,
        body: {
            "data": {
                "input_location": "Arapahoe, CO",
                "stories": [
                    {
                        "id": "172",
                        "type": "story",
                        "attributes": {
                            "title": "Test",
                            "distance_in_miles": 0.0007,
                            "latitude": 39.6265185,
                            "longitude": -104.8108565
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
                id: 172,
                type: "Story",
                attributes: {
                    created_at: "2021-10-25T22:11:44.305064Z",
                    latitude: 39.6265308,
                    location: "Arapahoe, CO",
                    longitude: -104.8108571,
                    message: "faras test",
                    name: "Anonymous",
                    title: "Test",
                    updated_at: "2021-10-25T22:11:44.305094Z",
                }
            }  
        }  
    })

})

Cypress.Commands.add('PatchStory', (method) => {
    cy.intercept(`${method}`, `${baseURL2}`, {
        statusCode: 200,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name: 'Anonymous', title: 'Test', message:'faras test editing faras test'}),
    })
})

Cypress.Commands.add('DeleteStory', (method) => {
    cy.intercept(`${method}`,`${baseURL2}`, {
        statusCode: 200,
    })
    // i think also need to add response message: but at this point i dont know how it looks lol 
})


// Cypress.Commands.add('visitWithMockGeolocation', (url, latitude = 54, longitude = 39) => {
//     const mockGeolocation = (win, latitude, longitude) => {
//     cy.stub(win.navigator.geolocation, 'getCurrentPosition', cb => {
//         return cb({ coords: { latitude, longitude } });
//     });
//     };
//     cy.visit(url, {
//     onBeforeLoad: win => {
//         mockGeolocation(win, latitude, longitude);
//     }
//     })

Cypress.Commands.add('mockGeolocation', (latitude = 39.62654536, longitude = -104.8108256) => {
	cy.window().then(($window) =>  {
		cy.stub($window.navigator.geolocation, 'getCurrentPosition', (callback) => {
	return callback({ coords: { latitude, longitude } });
		});
	})
})