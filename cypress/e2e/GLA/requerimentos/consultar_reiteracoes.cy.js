// tempo em ms entre comandos

/// <reference types="cypress" />

describe('consultar_requerimentos', () => {

    beforeEach(() => {

        cy.session('loginSession', () => {
            cy.visit('http://gla-homol.terracapnet.local')
            cy.viewport(1980, 1200)
            cy.get(':nth-child(2) > .form-control').type('C9020840')
            cy.get(':nth-child(3) > .form-control').type('welcome_1')
            cy.get('.btn').click()
            cy.get('h1').should('have.text', "Pendência")
        })

        cy.visit('http://gla-homol.terracapnet.local')
        cy.wait(500)
        cy.get('.sidebar-menu > :nth-child(7) > a > span').first().click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    })
    it('Validação', () => {
        cy.get(':nth-child(7) > [href="#"]').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
    })
})
