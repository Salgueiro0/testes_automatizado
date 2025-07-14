
/// <reference types="cypress" />

describe('pagamento', () => {
    beforeEach(() => {
        cy.visit('http://gla-homol.terracapnet.local')
        cy.viewport(1980, 1200)
        cy.get(':nth-child(2) > .form-control').type('C9020840')
        cy.get(':nth-child(3) > .form-control').type('welcome_1')
        cy.get('.btn').click()
        cy.get('h1').should('have.text', "Pendência")
        cy.get('.sidebar-menu > :nth-child(7) > a > span').first().click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    })
    it('Validação dos campos de texto', () => {

    })
    it.only('Validação do preenchimento dos campos e a ação de pesquisar e limpar', () => {

    })

    it('Validação dos botões de ação dos requerimentos pesquisados', () => {
        Cypress.on('uncaught:exception', (err) => {
            if (
                err.message.includes('Script error') ||
                err.message.includes('Identifier ')
            ) {
                return false; // ignora esses erros específicos
            }
            return true; // mantém falha para outros erros
        });


        cy.get('#pesquisarRequerimento').click()

        //deletar e confirmar
        cy.get(':nth-child(1) > .text-center > .btn-delete-requerimento > .fas').click()
        cy.get('.modal-footer > .btn-primary').first().click()
        cy.get('.bootbox-body').should('have.text', "O requerimento será excluído. Deseja prosseguir ?")
        cy.get('.modal-footer > .btn').first().as('okBtn');
        cy.get('@okBtn').should('be.visible');
        cy.get('@okBtn').click();
        cy.get('.bootbox-body').should('have.text', "Impossível excluir este Requerimento. Existem (Pagamentos).")

        //deletar e cancelar
        cy.get(':nth-child(1) > .text-center > .btn-delete-requerimento > .fas').click()
        cy.get('.bootbox-body').should('have.text', "O requerimento será excluído. Deseja prosseguir ?")
        cy.get('.modal-footer > .btn-danger').click()

        //editar
        cy.get('[href="/requerimentos/60/edit"]').click()

        //visualizar
        cy.go('back')
        cy.get('#pesquisarRequerimento').click()
        cy.get('[href="/requerimentos/60"] > .fa').click()
    })

    it('Validação do filtro em pesquisar requerimentos', () => {

        cy.get('#pesquisarRequerimento').click()
        cy.wait(2000)
        cy.intercept('GET', '/components/pt_br/dataTables.json').as('loadTable')
        cy.get('#pesquisarRequerimento').click()

        cy.get('tbody > tr').first()
            .find('td').eq(2)
            .invoke('text')
            .then(texto => {
                const filtro = texto.trim();

                cy.get('#table-requerimento_filter .form-control')
                    .clear()
                    .type(filtro)

                cy.get('tbody > tr').should('contain.text', filtro);
            })
    })
});
