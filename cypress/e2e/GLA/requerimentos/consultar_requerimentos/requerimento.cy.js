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

        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes("Cannot set properties of null")) {
                return false
            }
            return true
        })

        Cypress.on('uncaught:exception', (err) => {
            if (
                err.message.includes('Script error') ||
                err.message.includes('Identifier ')
            ) {
                return false
            }
            return true
        });

        //VALIDAÇÃO CAMPOS DE TEXTO
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .control-label').should('contain',"R.A")
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > .control-label').should('contain',"Empreendimento")
        cy.get(':nth-child(1) > :nth-child(3) > .form-group > .control-label').should('contain',"Demanda")
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('contain',"Tipo Requerimento")
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > label').should('contain',"Tipo Demanda Permissão")
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .control-label').should('contain',"Número Ofício")
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .control-label').should('contain',"Ano Ofício")
        cy.get(':nth-child(3) > :nth-child(3) > .form-group > .control-label').should('contain',"Emitente Ofício")
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > label').should('contain',"Titular")
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > label').should('contain',"Suplente")
        cy.get('.col-md-12 > .form-group > .control-label').should('contain',"Descrição")
        cy.get(':nth-child(6) > :nth-child(1) > .form-group > .control-label').should('contain',"Órgão Requerimento")
        cy.get(':nth-child(2) > label').should('contain',"Período da Data de Publicação Requerimento")
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > .control-label')
            .invoke('text')
            .then((text) => {
                const clean = text.replace(/\s+/g, ' ').trim();
                expect(clean).to.include('Status Requerimento');
            })
        cy.get(':nth-child(7) > :nth-child(2) > :nth-child(1) > .form-group > label').should('contain',"SEI Processo Requerimento")
        cy.get(':nth-child(8) > .col-md-6 > .form-group > .control-label').should('contain',"Reserva Orçamentária enviada à DIPLA")
        cy.get(':nth-child(8) > :nth-child(2) > .form-group > .control-label').should('contain', "Nº Doc SEI Despacho")
        cy.get(':nth-child(8) > :nth-child(3) > .form-group > label').should('contain',"Empreendedor Responsável")
        cy.get(':nth-child(9) > :nth-child(1) > .form-group > label').should('contain',"Status do Pagamento")
        cy.get(':nth-child(9) > :nth-child(2) > .form-group > label').should('contain',"Prazo Máximo de Análise")
        cy.get(':nth-child(9) > :nth-child(3) > .form-group > label').should('contain',"Estudo/Serviço")
        cy.get(':nth-child(4) > .form-group > label').should('contain',"Possui Reiterações?")
        cy.get('.sorting_asc').should('contain',"RA")
        cy.get('[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]').should('contain',"Empreendimento")
        cy.get('[aria-label="Requerimento: Ordenar colunas de forma ascendente"]').should('contain',"Requerimento")
        cy.get('[aria-label="Órgão: Ordenar colunas de forma ascendente"]').should('contain',"Órgão")
        cy.get('[aria-label="Nº Ofício: Ordenar colunas de forma ascendente"]').should('contain',"Nº Ofício")
        cy.get('[aria-label="Ano: Ordenar colunas de forma ascendente"]').should('contain',"Ano")
        cy.get('[aria-label="Emitente: Ordenar colunas de forma ascendente"]').should('contain',"Emitente")
        cy.get('[aria-label="Data de Publicação: Ordenar colunas de forma ascendente"]').should('contain',"Data de Publicação")
        cy.get('[aria-label="Ação: Ordenar colunas de forma ascendente"]').should('contain',"Ação")

        //VALIDAÇÃO DO PREENCHIMENTO DOS CAMPOS
        //RA
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results')
            .find('li')
            .first()
            .click({ force: true })

        cy.wait(2000)

        //Empreendimento
        cy.get('#select2-cd_empreendimento-container').click()
        cy.get('.select2-results')
            .find('li')
            .first()
            .click({ force: true })

        //Demanda
        cy.get('#select2-cd_demanda-container').click()
        cy.get('.select2-results')
            .find('li')
            .first()
            .click({force:true})

        //Tipo Demanda Permissão
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search')
            .click()
        cy.get('.select2-results')
            .find('li')
            .first()
            .click({force:true})
        //Tipo Requerimento é automático

        //Número Ofício
        cy.get('#nr_oficio').type('1')

        //Ano Ofício
        cy.get('#aa_oficio').type('2020')

        //Emitente Ofício
        cy.get(':nth-child(3) > :nth-child(3) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field')
            .click()
        cy.get('.select2-results')
            .find('li')
            .first()
            .click({force:true})

        //Titular
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field')
            .click()
        cy.get('.select2-results')
            .find('li')
            .first()
            .click({force:true})

        //Suplente
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field')
            .click()
        cy.get('.select2-results')
            .find('li')
            .first()
            .click({force:true})

        //Descrição
        cy.get('#ds_requerimento').type('teste')

        //Órgão Requerimento
        cy.get(':nth-child(6) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field')
            .click()
        cy.get('.select2-results')
            .find('li')
            .first()
            .click({force:true})

        // Período da Data de Publicação Requerimento
        cy.get('#dt_inicio').type('2000-01-01')
        cy.get('#dt_fim').type('2025-01-01')

        //Status Requerimento
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search')
            .click()
        cy.get('.select2-results')
            .find('li')
            .first()
            .click({force:true})

        //SEI Processo Requerimento
        cy.get('#cd_orgao_processo_sei').type('orgão') //órgão
        cy.get('#nr_processo_sei').type('1') //número
        cy.get('#aa_processo_sei').type('2024') //ano

        //Reserva Orçamentária enviada à DIPLA
        cy.get('#select2-fl_reserva_orcamentaria-container').click()
        cy.get('.select2-results')
            .find('li')
            .first()
            .click({force:true})

        //Nº Doc SEI Despacho
        cy.get('#nr_doc_sei_despacho').type('1')

        //Empreendedor Responsável
        cy.get(':nth-child(8) > :nth-child(3) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field')
            .click()
        cy.get('.select2-results')
            .find('li')
            .first()
            .click({force:true})

        // //Status do Pagamento - sem click

        // //Prazo Máximo de Análise
        cy.get('#select2-tp_prazo_maximo-container').click()
        cy.get('.select2-results')
            .find('li')
            .first()
            .click({force:true})

        // //Estudo Serviço -- sem click

        //Possui Reiterações?
        cy.get(':nth-child(4) > .form-group > .select2-container > .selection > .select2-selection > #select2--container > .select2-selection__placeholder')
            .click()
        cy.get('.select2-results')
            .find('li')
            .first()
            .click({force:true})

        //LIMPAR TODOS OS CAMPOS
        cy.get('[onclick="resetFieldsRequerimento()"]').click()


        //BOTÕES DE AÇÃO

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


        //FILTRO
        cy.go('back')
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
})
