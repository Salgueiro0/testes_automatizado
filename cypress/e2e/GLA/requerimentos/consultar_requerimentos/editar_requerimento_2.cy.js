describe('consultar_requerimentos', () => {

    beforeEach(() => {

        cy.session('loginSession', () => {
            cy.visit('http://gla-homol.terracapnet.local')
            cy.viewport(2000, 1200)
            cy.get(':nth-child(2) > .form-control').type('C9020840')
            cy.get(':nth-child(3) > .form-control').type('welcome_1')
            cy.get('.btn').click()
            cy.get('h1').should('have.text', "Pendência")
        })
    })
    it('Editar um requerimento', () => {

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
        })

    //CRIAR EMPREENDIMENTO PARA TESTE

        cy.visit('http://gla-homol.terracapnet.local')
        cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        cy.get('.btn-success').click()
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        cy.get('#cd_orgao_processo_sei').type('11111')
        cy.get('#nr_processo_sei').type('11111111')
        cy.get('#aa_processo_sei').type('1111')
        cy.get('#select2-tp_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains('Parcelamento de Solo Urbano - Novo').click({force: true})
        cy.get('#ds_empreendimento').type('teste')
        cy.get('#select2-tp_prioridade-container').click()
        cy.get('.select2-results').find('li').contains('Planejamento Estratégico ').click({force: true})
        cy.get('#select2-cd_pessoa_titular-container').click()
        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
        cy.get('#select2-cd_pessoa_suplente-container').click()
        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
        cy.get('#select2-cd_orgao_responsavel-container').click()
        cy.get('.select2-results').find('li').contains('TERRACAP - COMPANHIA IMOBILIARIA DE BRASILIA ').click({force: true})
        cy.get('#submit').click()
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('button.bootbox-accept').should('have.text', 'OK').click();
        cy.wait(2000)

    //CRIAR REQUERIMENTO PARA TESTE
        cy.get('.requerimentos-aba').click()

        cy.get('#requerimento > .box > .box-body > .panel > .panel-body > .panel-footer > .btn-toolbar > .btn-success').click()


        // cy.get('[id^="select2-tp_demanda_permissao-"][id$="-container"]').click();
        // cy.get('.select2-results').find('li').contains('LO-Licença de Operação').click({ force: true })
        cy.get('[id^="select2-tp_demanda_permissao-"][id$="-container"]').click();
        cy.get('.select2-results')
            .should('be.visible')       // espera pelo container
            .find('li.select2-results__option')
            .should('have.length.gt', 0) // garante que as opções existem
            .contains('LO-Licença de Operação')
            .click({ force: true });


        cy.get('#nr_oficio').type('2000')

        cy.get('#aa_oficio').type('2025')

        cy.get('#select2-cd_orgao_oficio-g3-container').click()
        cy.get('.select2-results').find('li').contains('ADNOV-DINOV/BIOTIC-ASSESSORIA DA DINOV').click({ force: true })

        cy.get('#ds_observacao_doc_oficio').type('208')

        cy.get('#select2-cd_pessoa_titular-container').click()
        cy.get('.select2-results').find('li').contains('GABRIEL TENORIO RAMOS').click({ force: true })

        cy.get('#select2-cd_pessoa_suplente-container')
        cy.get('.select2-results').find('li').contains('GABRIEL TENORIO RAMOS').click({ force: true })

        cy.get('#ds_requerimento').type('descrição')

        cy.get('#select2-cd_orgao_requerimento-x9-container').click()
        cy.get('.select2-results').find('li').contains('AGU-ADVOCACIA GERAL DA UNIÃO').click({ force: true })

        cy.get('#dt_publicacao').type('2020-01-01')

        cy.get('#select2-tp_status-ao-container')
        cy.get('.select2-results').find('li').contains('Deferido').click({ force: true })

        cy.get('#cd_orgao_processo_sei').type('1')
        cy.get('#nr_processo_sei').type('1')
        cy.get('#aa_processo_sei').type('1')

        cy.get('#fl_reserva_orcamentaria').click()
        cy.wait(1000)

        // cy.get('#select2-tp_requerimento-container').click()
        // cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })
        //
        // cy.get('#requerimento > .box > .box-body > .panel > .panel-body > :nth-child(1) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered').click()
        // cy.get('.select2-results').find('li').contains('ADNEG-ADNEG-ASSESSORIA DA DIRETORIA DE NOVOS NEGOCIOS').click({ force: true })
        //
        // cy.get('#nr_oficio').type('1912')
        //
        // cy.get('#aa_oficio').type('2025')
        //
        // cy.get(':nth-child(2) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered').click()
        // cy.get('.select2-results').find('li').contains('ADNOV-DINOV/BIOTIC-ASSESSORIA DA DINOV').click({ force: true })
        //
        // cy.get('#dt_inicio').type('2025-01-01')

    //IR PARA CONSULTAR REQUERIMENTOS

        // //PESQUISAR
        // cy.get(':nth-child(7) > [href="#"]').click()
        // cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
        //
        // //RA
        // cy.get(':nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()
        // cy.get('.select2-results').find('li').contains('RA-I - BRASILIA').click({ force: true })
        //
        // cy.wait(2000)
        //
        // //Empreendimento
        // cy.get('#select2-cd_empreendimento-container').click()
        // cy.get('.select2-results').find('li').contains('teste').click({ force: true })

    })
})
