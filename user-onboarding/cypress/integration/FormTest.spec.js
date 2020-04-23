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

    it('can input a username', () => {
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



})