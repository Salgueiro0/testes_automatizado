/// <reference types="cypress" />

// funcionalidades 
describe('Login', () => {
    //fazer o procedimento no inicio de todas 
    beforeEach(() => {
        // dado 
        // acessar a tela de login
        cy.visit('http://gla-homol.terracapnet.local')
    })
    //cenarios 
    it('login sem email e senha', () => {

        cy.get('.btn').click()

        cy.get(':nth-child(2) > .help-block > strong').should('have.text', "O campo matricula é obrigatório.")
        cy.get(':nth-child(3) > .help-block > strong').should('have.text', "O campo senha é obrigatório.")

    })

    it('matricula não localizada', () => {

        cy.get(':nth-child(2) > .form-control').type('testeteste')
        
        cy.get(':nth-child(3) > .form-control').type('testeteste')

        cy.get('.btn').click()

        cy.get('.alert-form').should('have.text', "Matricula não localizada")

    })

    it('Login com sucesso', () => {
        
        // digitar email
        cy.get(':nth-child(2) > .form-control').type('C9020840')
        // digitar senha
        cy.get(':nth-child(3) > .form-control').type('welcome_1')
        // quando 
        // clicar no botão de login
        cy.get('.btn').click()

        // então 
        // validar que o login foi realizado
        cy.get('h1').should('have.text', "Pendência")

        cy.visit('https://licenciamento-ambiental-homol.terracap.df.gov.br/pendencias/cadastro')
    })

   
})

