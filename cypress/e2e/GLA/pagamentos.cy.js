
/// <reference types="cypress" />

describe('pagamento', () => {
    beforeEach(() => {
        cy.visit('http://gla-homol.terracapnet.local')
        cy.viewport(1980, 1200)
    })
    it('teste tela de pagamentos', () => {

        cy.get(':nth-child(2) > .form-control').type('C9020840')
        cy.get(':nth-child(3) > .form-control').type('welcome_1')
        cy.get('.btn').click()

        cy.get('h1').should('have.text', "Pendência")

        cy.get('.sidebar-menu > :nth-child(8) > a > span').click()

        cy.get('h1').should('have.text', "Pagamento")
        cy.get(':nth-child(1) > .box-header > .box-title').should('have.text', "Pesquisar")
        cy.get('.panel-body > :nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
        cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-group > .control-label').should('have.text', "Empreendimento")
        cy.get('.panel-body > :nth-child(2) > .col-md-4 > .form-group > .control-label').should('have.text', "Origem")
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .control-label').should('have.text', "Data do Pagamento")
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .control-label').should('have.text', "Valor do Pagamento (R$, ha, mudas)")
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .control-label').should('have.text', "Status do Pagamento")
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .control-label').should('have.text', "Descrição do Pagamento")
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > .control-label').should('have.text', "Empreendedor Responsável")

        cy.get(':nth-child(2) > .box-header > .box-title').should('have.text', "Adicione Campos na Tabela de Resultados")
        cy.get('.panel-body > :nth-child(1) > :nth-child(1) > label')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('Descrição do Pagamento');
            });
        cy.get('.form-group > .row > :nth-child(1) > label') .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('SEI do Comprovante de Pagamento');
            });
        cy.get('.panel-body > :nth-child(1) > :nth-child(2) > label').invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('SEI do Envio do Comprovante de Pagamento');
            });
        cy.get('.form-group > .row > :nth-child(2) > label').invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('Data do Pagamento');
            });
        cy.get('.panel-body > :nth-child(1) > :nth-child(3) > label').invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('SEI da Certidão de Quitação');
            });
        cy.get('.form-group > .row > :nth-child(3) > label').invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('Status do Pagamento');
            });

        cy.get('.sorting_asc').should('have.text', "R.A")
        cy.get('[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]').should('have.text', "Empreendimento")
        cy.get('[aria-label="Origem: Ordenar colunas de forma ascendente"]').should('have.text', "Origem")
        cy.get('[aria-label="Valor do Pagamento (R$, ha, mudas): Ordenar colunas de forma ascendente"]').should('have.text', "Valor do Pagamento (R$, ha, mudas)")
        cy.get('tr > .text-center').should('have.text', "Ação")
        //preencher campos
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()
        // cy.get('.select2-results').find('li').contains('4 - Empreendimento XPTO 5 ').click({ force: true});
        // cy.get('.select2-selection__rendered ').find('li').contains('RA-I-BRASILIA').click()
        // cy.get('#select2-cd_regiao_admin-result-x3xr-1')
    })
})
