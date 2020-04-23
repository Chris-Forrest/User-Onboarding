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
})