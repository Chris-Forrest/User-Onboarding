it('It works!!!', ()=> {
    expect (5).to.eq(5)
})

describe('User Sign up ', () =>{
    it('successfuly loads', ()=> {
        cy.visit('http://localhost:3000/')
    })
})