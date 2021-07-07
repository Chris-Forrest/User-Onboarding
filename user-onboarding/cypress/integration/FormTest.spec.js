import {v4 as uuid } from 'uuid'
const username = uuid().slice(0, 5)
const email = `${username}@acme.com`
const password = uuid().slice(0, 7)


it('It works!!!', ()=> {
    expect (5).to.eq(5)
})

describe('User Sign up ', () =>{
    it('successfuly loads', ()=> {
        cy.visit('http://localhost:3000/')
    })

    it('can can create a username', () => {
        cy.get('[data-cy_username_input="cy_username_input"]')
        .type(username)
        .should('have.value', username)
    })
    
    it('can input a email', () => {
        cy.get('[data-cy_email_input="cy_email_input"]')
        .type(email)
        .should('have.value', email)
    })
    it('can input a password', () => {
        cy.get('[data-cy_password_input="cy_password_input"]')
        .type(password)
        .should('have.value', password)
    })
    it('can click terms of service box', () => {
        cy.get('[data-cy_checkbox="cy_checkbox"]').check().should('checked')
    })
    it('can submit a user', () => {
        cy.get('[data-cy_submit_button="cy_submit_button"]').click()
    })
   it("input an invalid username", () => {
        cy.get('[data-cy_username_input="cy_username_input"]')
        .type('a').should("have.value", 'a')
      })
     it 
      it("validate the user name error", () => {
        cy.get('.errors').contains("username must have at least 3 characters!")
      })
      it("input an invalid email", () => {
          cy.get('[data-cy_email_input="cy_email_input"]')
          .type('a').should("have.value", 'a')
      })
      it("input the email error", () => {
          cy.get('.errors').contains("a VALID email is required")
      })
      it("input an password email", () => {
        cy.get('[data-cy_password_input="cy_password_input"]')
        .type('a').should("have.value", 'a')
    })
    it("input the password error", () => {
        cy.get('.errors').contains("password must be at least six characters long")
    })


})