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

        Cypress.on('uncaught:exception', (err, runnable) => {
            // Retorna false para evitar que o Cypress falhe o teste
            return false;
        });

        cy.get(':nth-child(7) > [href="#"]').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()

        //CRIAR EMPREENDIMENTO PARA TESTE

        cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        cy.get('.btn-success').click()
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        cy.get('#cd_orgao_processo_sei').type('11111')
        cy.get('#nr_processo_sei').type('11111111')
        cy.get('#aa_processo_sei').type('1111')
        cy.get('#select2-tp_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains('Parcelamento de Solo Urbano - Novo').click({force: true})
        cy.get('#ds_empreendimento').type('esmeralda-teste')
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

        //PESQUISAR EMPREENDIMENTO

        cy.get('.sidebar-menu > :nth-child(2) > a > span').click()

        cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('esmeralda-teste').click({ force: true })
        cy.get('#pesquisar').click()
        cy.get('a[title="Visualizar"]').first().click();


        //CRIAR PRIMEIRO REQUERIMENTO PARA TESTE

        cy.get('.requerimentos-aba').click()

        //Cadastro
        cy.get('#requerimento > .box > .box-body > .panel > .panel-body > .panel-footer > .btn-toolbar > .btn-success').click()

        cy.get('[id^="select2-tp_demanda_permissao-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('LO - Licença de Operação ').click({ force: true });

        cy.get('#nr_oficio').type('2000')

        cy.get('#aa_oficio').type('2025')

        cy.get('[id^="select2-cd_orgao_oficio-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA').click({ force: true });

        cy.get('#ds_observacao_doc_oficio').type('208')

        cy.get('#select2-cd_pessoa_titular-container').click()
        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES').click({ force: true })

        cy.get('#ds_requerimento').type('Fazenda Graça Esmeralda')

        cy.get('[id^="select2-cd_orgao_requerimento-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ANATEL - AGÊNCIA NACIONAL DE TELECOMUNICAÇÕES').click({ force: true });

        cy.get('#dt_publicacao').type('2020-01-01')

        cy.get('[id^="select2-tp_status-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('Deferido').click({ force: true });

        cy.get('#cd_orgao_processo_sei').type('1')
        cy.get('#nr_processo_sei').type('1')
        cy.get('#aa_processo_sei').type('1')

        cy.get('#fl_reserva_orcamentaria').click()
        cy.wait(1000)
        cy.get('#nr_doc_sei_despacho').type('1111')

        cy.get('#submit').click()
        cy.get('.modal-footer > .btn-primary').should('be.visible').and('contain.text', 'Continuar').click()
        cy.get('.modal-footer > .btn').should('be.visible').and('contain.text', 'OK').click()


        //CRIAR SEGUNDO REQUERIMENTO PARA TESTE

        //PESQUISAR EMPREENDIMENTO

        cy.get('.sidebar-menu > :nth-child(2) > a > span').click()

        cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('esmeralda-teste').click({ force: true })
        cy.get('#pesquisar').click()
        cy.get('a[title="Visualizar"]').first().click();

        cy.get('.requerimentos-aba').click()

        //Cadastro
        cy.get('#requerimento > .box > .box-body > .panel > .panel-body > .panel-footer > .btn-toolbar > .btn-success').click()

        cy.get('[id^="select2-tp_demanda_permissao-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('LP - Licença Prévia').click({ force: true });

        cy.get('#nr_oficio').type('2000')

        cy.get('#aa_oficio').type('2025')

        cy.get('[id^="select2-cd_orgao_oficio-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA').click({ force: true });

        cy.get('#ds_observacao_doc_oficio').type('20888')

        cy.get('#select2-cd_pessoa_titular-container').click()
        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES').click({ force: true })

        cy.get('#ds_requerimento').type('Fazenda Graça')

        cy.get('[id^="select2-cd_orgao_requerimento-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ANATEL - AGÊNCIA NACIONAL DE TELECOMUNICAÇÕES').click({ force: true });

        cy.get('#dt_publicacao').type('2020-01-01')

        cy.get('[id^="select2-tp_status-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('Deferido').click({ force: true });

        cy.get('#cd_orgao_processo_sei').type('1')
        cy.get('#nr_processo_sei').type('1')
        cy.get('#aa_processo_sei').type('1')

        cy.get('#fl_reserva_orcamentaria').click()
        cy.wait(1000)
        cy.get('#nr_doc_sei_despacho').type('1111')

        cy.get('#submit').click()
        cy.get('.modal-footer > .btn-primary').should('be.visible').and('contain.text', 'Continuar').click()
        cy.get('.modal-footer > .btn').should('be.visible').and('contain.text', 'OK').click()

        //CADASTRAR REITERAÇÃO

        cy.get(':nth-child(7) > [href="#"]').click()

        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()

        cy.get('.btn-success').click()

       //Adicionar primeiro requerimento

        cy.get('#select2-regiao_adm-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })
        cy.wait(2000)

        cy.get('#select2-combo_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains('esmeralda-teste').click({ force: true })

        cy.get('#select2-combo_tipo_requerimento-container').click()
        cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })

        cy.get('#select2-combo_requerimento-container').click()
        cy.get('.select2-results').find('li').first().click({ force: true })

        cy.get('#btn_adicionar').click()

        //Adicionar segundo requerimento

        cy.get('#select2-regiao_adm-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })
        cy.wait(2000)

        cy.get('#select2-combo_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains('esmeralda-teste').click({ force: true })

        cy.get('#select2-combo_tipo_requerimento-container').click()
        cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })

        cy.get('#select2-combo_requerimento-container').click()
        cy.get('.select2-results').find('li').first().click({ force: true })

        cy.get('#btn_adicionar').click()

        cy.get('#submit').click()

    })
})
