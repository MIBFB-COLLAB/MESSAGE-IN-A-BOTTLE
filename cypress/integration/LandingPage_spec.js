describe('Landing Page', () => {

  it('expect true to be true', () => {
    cy.visit('http://localhost:3000/')
    expect('true').to.equal('true')
  })
})