/// <reference types="cypress" />

describe('esqueci_senha', () => {
    beforeEach(() => {  
        cy.visit('http://gla-homol.terracapnet.local')
    });
    it('esqueci_senha', () => {

        cy.get('p > .text-center').click()

        cy.get('.login-box-msg').should('have.text', "Redefinir senha")

    })
    it('troca de senha sem matricula ou cpf', () => {

        cy.get('p > .text-center').click()
        
        cy.get('.btn').click()

        cy.get(':nth-child(2) > .help-block > strong').should('have.text', "O campo matricula é obrigatório.")

        cy.get(':nth-child(3) > .help-block > strong').should('have.text', "O campo cpf é obrigatório.")
    })

})