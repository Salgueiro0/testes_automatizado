
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
        //R.A
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA').click({ force: true});

        //Empreendimento
        cy.get('.select2-selection__placeholder').click()
        cy.wait(2000)
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('28 - Fazenda Caio1')
        cy.get('.select2-results').find('li').contains('28 - Fazenda Caio1 ').click({ force: true});

        //Origem
        cy.get(':nth-child(2) > .col-md-4 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('Preço público de análise (requerimento)').click({ force: true});

        //Data do pagamento
        cy.get('#dt_inicio').type('2025-12-11')
        cy.get('#dt_fim').type('2025-12-21')

        //Valor do pagamento
        cy.get('#vl_pagamento_de').type('1000')
        cy.get('#vl_pagamento_ate').type('2000')

        //Status do pagamento
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search')
            .click()
        cy.get('.select2-results').find('li').contains('Em análise pelo órgão externo ').click({ force: true});

        //Descrição do pagamento
        cy.get('#ds_pagamento').type('Pagamento')

        //Empreendedor responsável
        cy.get(':nth-child(3) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results').find('li').contains('TERRACAP - COMPANHIA IMOBILIARIA DE BRASILIA ').click({ force: true});

        //Adicione campos na tabela de resultados
        cy.get('.panel-body > :nth-child(1) > :nth-child(1) > label').click()
        cy.get('.form-group > .row > :nth-child(1) > label').click()
        cy.get('.panel-body > :nth-child(1) > :nth-child(2) > label').click()
        cy.get('.form-group > .row > :nth-child(2) > label').click()
        cy.get('.panel-body > :nth-child(1) > :nth-child(3) > label').click()
        cy.get('.form-group > .row > :nth-child(3) > label').click()
    })


    it.only('teste pesquisar tela de pagamentos', () => {

        cy.get(':nth-child(2) > .form-control').type('C9020840')
        cy.get(':nth-child(3) > .form-control').type('welcome_1')
        cy.get('.btn').click()

        cy.get('h1').should('have.text', "Pendência")

        cy.get('.sidebar-menu > :nth-child(8) > a > span').click()

        cy.get('h1').should('have.text', "Pagamento")

        cy.get('#pesquisarPagamento').click()
        cy.wait(10000)
        cy.get(':nth-child(1) > .text-center > [href="/demandas/56"] > .fa').click()
        // cy.get('.text-center').find('a').contains('/requerimentos/44').click({ force: true});
    })
})







