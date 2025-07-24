
/// <reference types="cypress" />

describe('pagamento', () => {

    it('teste tela de pagamentos', () => {

        //LOGIN

        cy.visit('http://gla-homol.terracapnet.local')
        cy.viewport(1980, 1200)
        cy.get(':nth-child(2) > .form-control').type('C9020840')
        cy.get(':nth-child(3) > .form-control').type('welcome_1')
        cy.get('.btn').click()
        cy.get('h1').should('have.text', "Pendência")
    })
})







