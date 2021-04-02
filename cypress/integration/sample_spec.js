describe('The Home Page', () => {
  it('successfully creates a plant', () => {
    cy.visit('http://localhost:3000') // change URL to match your dev URL
    cy.get('.gav')
      .type('hello')
      .get(".gav1")
      .type('hello')
      .get(".gav2")
      .type('hello')
      .get(".gav3")
      .type('hello')
      .get(".gav4")
      .type('hello')
      .get(".shotor")
      .click()
  })
})

describe('The Home Page', () => {
  it('successfully edits a plant', () => {
    cy.visit('http://localhost:3000') // change URL to match your dev URL
    cy.get('.editButton')
      .click()
      .get('.sag1')
      .type('bye')
      .get(".sag2")
      .type('bye')
      .get(".sag3")
      .type('bye')
      .get(".sag4")
      .type('bye')
      .get(".sag5")
      .type('bye')
      .get(".sag6")
      .click()
  })
})


describe('The Home Page', () => {
  it('successfully deletes a plant', () => {
    cy.visit('http://localhost:3000') // change URL to match your dev URL
    cy.get('.deleteButton')
      .click()
  })
})


