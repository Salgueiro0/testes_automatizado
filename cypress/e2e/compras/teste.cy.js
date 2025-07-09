/// <reference types="cypress" />

describe('teste email', () => {
    beforeEach( () => {
        
    })

    it('teste', () => {

        cy.visit('https://mail.google.com/mail/u/0/#starred/FMfcgzGxSHpqDfwZBWjnTqhRGnlnBQrV')

        cy.get('#identifierId').type('salgueirog01@gmail.com')
        cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
    })

}) 