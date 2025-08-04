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
        // cy.get('.btn-success').click()
        // cy.get('#select2-cd_regiao_admin-container').click()
        // cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        // cy.get('#cd_orgao_processo_sei').type('11111')
        // cy.get('#nr_processo_sei').type('11111111')
        // cy.get('#aa_processo_sei').type('1111')
        // cy.get('#select2-tp_empreendimento-container').click()
        // cy.get('.select2-results').find('li').contains('Parcelamento de Solo Urbano - Novo').click({force: true})
        // cy.get('#ds_empreendimento').type('ambiental')
        // cy.get('#select2-tp_prioridade-container').click()
        // cy.get('.select2-results').find('li').contains('Planejamento Estratégico ').click({force: true})
        // cy.get('#select2-cd_pessoa_titular-container').click()
        // cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
        // cy.get('#select2-cd_pessoa_suplente-container').click()
        // cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
        // cy.get('#select2-cd_orgao_responsavel-container').click()
        // cy.get('.select2-results').find('li').contains('TERRACAP - COMPANHIA IMOBILIARIA DE BRASILIA ').click({force: true})
        // cy.get('#submit').click()
        // cy.get('.modal-footer > .btn-primary').click()
        // cy.get('button.bootbox-accept').should('have.text', 'OK').click();
        // cy.wait(2000)

        // //PESQUISAR EMPREENDIMENTO
        //
        // cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        //
        // cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        // cy.get('.select2-results').find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({ force: true })
        // cy.get('#pesquisar').click()
        // cy.get('a[title="Visualizar"]').first().click();
        //
        //
        // //CRIAR PRIMEIRO REQUERIMENTO PARA TESTE
        // cy.wait(2000)
        // cy.get('.requerimentos-aba').should('contain.text', 'Requerimento').click()
        //
        // //Cadastro
        // cy.get('#requerimento > .box > .box-body > .panel > .panel-body > .panel-footer > .btn-toolbar > .btn-success').click()
        //
        // cy.get('[id^="select2-tp_demanda_permissao-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('LP - Licença Prévia').click({ force: true });
        //
        // cy.get('#nr_oficio').type('2000')
        //
        // cy.get('#aa_oficio').type('2025')
        //
        // cy.get('[id^="select2-cd_orgao_oficio-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA').click({ force: true });
        //
        // cy.get('#ds_observacao_doc_oficio').type('208')
        //
        // cy.get('#select2-cd_pessoa_titular-container').click()
        // cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES').click({ force: true })
        //
        // cy.get('#ds_requerimento').type('Fazenda Graça Esmeralda')
        //
        // cy.get('[id^="select2-cd_orgao_requerimento-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ANATEL - AGÊNCIA NACIONAL DE TELECOMUNICAÇÕES').click({ force: true });
        //
        // cy.get('#dt_publicacao').type('2020-01-01')
        //
        // cy.get('[id^="select2-tp_status-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('Deferido').click({ force: true });
        //
        // cy.get('#cd_orgao_processo_sei').type('1')
        // cy.get('#nr_processo_sei').type('1')
        // cy.get('#aa_processo_sei').type('1')
        //
        // cy.get('#fl_reserva_orcamentaria').click()
        // cy.wait(1000)
        // cy.get('#nr_doc_sei_despacho').type('1111')
        //
        // cy.get('#submit').should('contain.text', 'Salvar').click()
        // cy.wait(1000)
        // cy.get('.modal-footer > .btn-primary').should('contain.text', 'Continuar').click()
        // cy.wait(1000)
        // cy.get('.modal-footer > .btn').should('contain.text', 'OK').click()
        // cy.wait(1000)
        //
        // //CRIAR SEGUNDO REQUERIMENTO PARA TESTE
        //
        // //PESQUISAR EMPREENDIMENTO
        //
        // cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        //
        // cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        // cy.get('.select2-results').find('li').contains('ambiental').click({ force: true })
        // cy.get('#pesquisar').click()
        // cy.wait(2000)
        // cy.get('a[title="Visualizar"]').first().click();
        //
        // cy.get('.requerimentos-aba').click()
        //
        // //Cadastro
        // cy.get('#requerimento > .box > .box-body > .panel > .panel-body > .panel-footer > .btn-toolbar > .btn-success').click()
        //
        // cy.get('[id^="select2-tp_demanda_permissao-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('LP - Licença Prévia').click({ force: true });
        //
        // cy.get('#nr_oficio').type('2')
        //
        // cy.get('#aa_oficio').type('2024')
        //
        // cy.get('[id^="select2-cd_orgao_oficio-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ADHAR - ASSESSORIA DA DIRETORIA DE HABITAÇÃO E DE REGULARIZAÇÃO').click({ force: true });
        //
        // cy.get('#ds_observacao_doc_oficio').type('208')
        //
        // cy.get('#select2-cd_pessoa_titular-container').click()
        // cy.get('.select2-results').find('li').contains(' Camila da Fonseca Vieira ').click({ force: true })
        //
        // cy.get('#ds_requerimento').type('Fazenda')
        //
        // cy.get('[id^="select2-cd_orgao_requerimento-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('CAIXA - CAIXA ECONÔMICA FEDERAL').click({ force: true });
        //
        // cy.get('#dt_publicacao').type('2025-01-01')
        //
        // cy.get('[id^="select2-tp_status-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('A protocolar').click({ force: true });
        //
        // cy.get('#cd_orgao_processo_sei').type('2')
        // cy.get('#nr_processo_sei').type('2')
        // cy.get('#aa_processo_sei').type('2')
        //
        // cy.get('#fl_reserva_orcamentaria').click()
        // cy.wait(1000)
        // cy.get('#nr_doc_sei_despacho').type('2222')
        //
        // cy.get('#submit').click()
        // cy.wait(3000)
        // cy.get('.modal-footer > .btn-primary').should('contain.text', 'Continuar').click()
        // cy.wait(3000)
        // cy.get('.modal-footer > .btn').should('contain.text', 'OK').click()
        // cy.wait(3000)
        //
        // cy.reload()

        //CADASTRAR REITERAÇÃO

        cy.get(':nth-child(7) > [href="#"]').click()

        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()

        cy.get('.btn-success').click()

        //Validar campos de texto

        cy.get(':nth-child(1) > .form-group > .control-label').should('contain',"R.A")
        cy.get(':nth-child(2) > .form-group > .control-label').should('contain',"Empreendimento")
        cy.get(':nth-child(3) > .form-group > .control-label').should('contain',"Tipo Requerimento")
        cy.get('.col-md-12 > :nth-child(1) > .control-label').should('contain',"Requerimentos")
        cy.get('tr > :nth-child(1)').should('contain',"Requerimentos Reiterados")

       //Adicionar primeiro requerimento

        cy.get('#select2-regiao_adm-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })
        cy.wait(2000)

        cy.get('#select2-combo_empreendimento-container').click()
        cy.wait(2000)
        cy.get('.select2-results').find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({ force: true })

        cy.wait(2000)

        cy.get('#select2-combo_tipo_requerimento-container').click()
        cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })

        cy.wait(4000)
        cy.get('#select2-combo_requerimento-container').click()
        cy.wait(2000)
        cy.get('.select2-results').find('li').contains('LP - Licença Prévia - Ofício nº 6/1565 - ACJUR p/ ADASA').first().click({ force: true })

        cy.get('#btn_adicionar').click()

        cy.wait(4000)
        cy.get('#select2-combo_requerimento-container').click()
        cy.wait(2000)
        cy.get('.select2-results').find('li').contains('LP - Licença Prévia - Ofício nº 2000/2025 - ACJUR p/ ANATEL').click({ force: true })
        cy.get('#btn_adicionar').click()

        cy.get('#submit').click()
        cy.get('.modal-footer > .btn-primary').click()
        cy.contains('button','OK').click()


        // //Adicionar segundo requerimento
        //
        // cy.get('#select2-regiao_adm-container').click()
        // cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })
        // cy.wait(2000)
        //
        // cy.get('#select2-combo_empreendimento-container').click()
        // cy.get('.select2-results').find('li').contains('ambiental').click({ force: true })
        // cy.wait(2000)
        // cy.get('#select2-combo_tipo_requerimento-container').click()
        // cy.wait(2000)
        // cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })
        // cy.wait(2000)
        // cy.get('#select2-combo_requerimento-container').click()
        // cy.wait(2000)
        // cy.get('.select2-results').find('li').eq(1).click({ force: true })
        // cy.wait(2000)
        // cy.get('#btn_adicionar').click()
        // cy.wait(2000)
        // cy.get('#submit').should('contain.text', 'Salvar').click()
        // cy.wait(2000)
        // cy.get('.modal-footer > .btn-primary').should('contain.text', 'Salvar').click()
        // cy.wait(2000)
        // cy.get('.modal-footer > .btn').should('contain.text', 'OK').click()
        // cy.wait(2000)

        //PESQUISAR REITERAÇÃO DE REQUERIMENTO

        //Validar Campos de texto
        cy.get(':nth-child(1) > .form-group > .control-label').should('contain',"R.A")
        cy.get(':nth-child(2) > .form-group > .control-label').should('contain',"Empreendimento")
        cy.get(':nth-child(3) > .form-group > .control-label').should('contain',"Tipo Requerimento")
        cy.get('.sorting_asc').should('contain',"Código  Reiteração")
        cy.get('[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]').should('contain',"Empreendimento")
        cy.get('[aria-label="Tipo Requerimento: Ordenar colunas de forma ascendente"]').should('contain',"Tipo Requerimento")
        cy.get('[aria-label="Data Publicação/Requerimento: Ordenar colunas de forma ascendente"]').should('contain',"Data Publicação/Requerimento")
        cy.get('[aria-label="Ação: Ordenar colunas de forma ascendente"]').should('contain',"Ação")

        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })

        cy.get('#select2-tp_requerimento-container').click()
        cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })

        cy.get('#pesquisar').click()

        cy.get('#table-reiteracao_filter > label > .form-control').type('Polo')

        cy.get('a[title="Visualizar"]').first().click()

        //VISUALIZAR REITERAÇÃO:

        cy.get('[width="50%"]').should('contain',"Requerimentos Reiterados")

        cy.get('[width="20%"]').should('contain',"Data de Publicação")

        cy.get('[width="30%"]').should('contain',"Ação Requerimento")
        
        
        // //Adicionar Pagamento
        // cy.get(':nth-child(1) > :nth-child(3) > a > .fa').click()
        // cy.get('.col-md-12 > .btn').click()
        // cy.wait(1000)
        // cy.get('#ds_sei_num_doc_pagamento').type('teste')
        // cy.get('#dt_pagamento').type('2025-01-01')
        // cy.get('#vl_pagamento').type('121')
        // cy.get('#botao-salvar').click()
        // cy.wait(1000)
        // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').should('contain',"OK").click()
        // cy.wait(1000)
        //
        // //Pesquisar Pagamento
        // cy.get('#table-pagamento_filter > label > .form-control').type('teste')
        //
        // //Editar Pagamento
        // cy.get('.btn-edit-pagamento').click()
        // cy.wait(3000)
        // cy.get('#ds_pagamento').type('editando')
        // cy.get('#botao-editar').click()
        // cy.wait(1000)
        // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').should('contain',"OK").click()
        // cy.wait(2000)
        // //Excluir Pagamento
        // cy.get('#table-pagamento_filter > label > .form-control').type('teste')
        // cy.get('.btn-delete-pagamento > .fas').click()
        // cy.contains('button', 'Confirmar').click();
        // cy.contains('button', 'OK').click();
        // //cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').should('contain',"OK").click()
        //
        // cy.wait(2000)
        // cy.get('[onclick="window.history.back()"]').should('contain.text', 'Voltar').click()
        // cy.wait(2000)
        // cy.get('[onclick="window.history.back()"]').should('contain.text', 'Voltar').click()

        // //CRIAR TERCEIRO REQUERIMENTO PARA EDITAR REITERAÇÃO
        //
        //
        // //PESQUISAR EMPREENDIMENTO
        //
        // cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        //
        // cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        // cy.get('.select2-results').find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({ force: true })
        // cy.get('#pesquisar').click()
        // cy.wait(2000)
        // cy.get('a[title="Visualizar"]').first().click();

        // cy.get('.requerimentos-aba').click()
        //
        // //Cadastro
        // cy.get('#requerimento > .box > .box-body > .panel > .panel-body > .panel-footer > .btn-toolbar > .btn-success').click()
        //
        // cy.get('[id^="select2-tp_demanda_permissao-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('LP - Licença Prévia').click({ force: true });
        //
        // cy.get('#nr_oficio').type('255151')
        //
        // cy.get('#aa_oficio').type('2009')
        //
        // cy.get('[id^="select2-cd_orgao_oficio-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ALMOX - ALMOXARIFADO').click({ force: true });
        //
        // cy.get('#ds_observacao_doc_oficio').type('2054648')
        //
        // cy.get('#select2-cd_pessoa_titular-container').click()
        // cy.get('.select2-results').find('li').contains(' Gabriel Tenorio Ramos').click({ force: true })
        //
        // cy.get('#ds_requerimento').type('TESTANDO')
        //
        // cy.get('[id^="select2-cd_orgao_requerimento-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ANA - SAF - AGENCIA NACIONAL DAS AGUAS').click({ force: true });
        // cy.wait(2000)
        // cy.get('#dt_publicacao').type('2021-09-01')
        //
        // cy.get('[id^="select2-tp_status-"][id$="-container"]').click();
        // cy.wait(2000)
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('Indeferido').click({ force: true });
        // cy.wait(2000)
        // cy.get('#cd_orgao_processo_sei').type('25')
        // cy.get('#nr_processo_sei').type('2987')
        // cy.get('#aa_processo_sei').type('2020')
        //
        // cy.get('#fl_reserva_orcamentaria').click()
        // cy.wait(1000)
        // cy.get('#nr_doc_sei_despacho').type('221111')
        //
        // cy.get('#submit').click()
        // cy.wait(2000)
        // cy.get('.modal-footer > .btn-primary').should('contain.text', 'Continuar').click()
        // cy.wait(2000)
        // cy.get('.modal-footer > .btn').should('contain.text', 'OK').click()
        // cy.wait(2000)

        //Editar Reiteração

        cy.get('[onclick="window.history.back()"]').click()


        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })

        cy.get('#select2-tp_requerimento-container').click()
        cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })

        cy.get('#pesquisar').click()

        cy.get('a[title="Editar"]').first().click()


        //validando campos de texto
        cy.get('.col-md-4 > .form-group > .control-label').should('contain',"R.A")
        cy.get('.col-md-5 > .form-group > .control-label').should('contain',"Empreendimento")
        cy.get('.col-md-3 > .form-group > .control-label').should('contain',"Tipo Requerimento")
        cy.get('.col-md-12 > :nth-child(1) > .control-label').should('contain',"Requerimentos")
        cy.get('thead > tr > :nth-child(1)').should('contain',"Requerimentos Reiterados")

        cy.get('#select2-combo_requerimento-container').click()
        cy.get('.select2-results').first().click()

        //testando editar
        cy.get('#select2-combo_requerimento-container').click()
        cy.wait(1000)
        cy.get('.select2-results').find('li').contains('LP - Licença Prévia - Ofício nº 5155/2024 - ADNOV-DINOV/BIOTIC p/ ANEEL').click({ force: true })

        cy.get('.sidebar-toggle').click()


        cy.get('#btn_adicionar').click()
        cy.wait(2000)
        cy.get('#submit').click()
        cy.wait(2000)
        cy.get('.modal-footer > .btn-primary').should('contain.text', 'Salvar').click()
        cy.wait(2000)
        cy.get('.modal-footer > .btn').should('contain.text', 'OK').click()
        cy.wait(2000)
        //Excluir reiteração

        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })

        cy.get('#select2-tp_requerimento-container').click()
        cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })

        cy.get('#pesquisar').click()
        cy.wait(1000)
        cy.get('a[title="Editar"]').first().click()
        cy.wait(2000)

        cy.get('a[title="Excluir"]').first().click()
        cy.wait(2000)
        cy.get('.modal-footer > .btn-primary').should('contain.text', 'Confirmar').click()

        cy.contains('button', 'Limpar').click();

        cy.get('[onclick="window.history.back()"]').click()
        //Excluir


        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })

        cy.get('#select2-tp_requerimento-container').click()
        cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })

        cy.get('#pesquisar').click()

        cy.get('a[title="Excluir"]').first().click()
        
        cy.get('.modal-footer > .btn-primary').should('contain.text', 'Confirmar').click()

        cy.contains('button','OK').click()

        // //APAGAR REQUERIMENTOS E EMPREENDIMENTO
        //
        // cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        //
        // cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        // cy.get('.select2-results').find('li').contains('ambiental').click({ force: true })
        // cy.get('#pesquisar').click()
        //
        // cy.get('a[title="Visualizar"]').first().click();
        // cy.get('.requerimentos-aba').click()
        //
        // cy.get('a[title="Excluir"]').first().click();
        // cy.contains('button', 'Confirmar').click();
        // cy.contains('button', 'OK').click();
        //
        // cy.get('a[title="Excluir"]').first().click();
        // cy.contains('button', 'Confirmar').click();
        // cy.contains('button', 'OK').click();
        //
        // cy.get('a[title="Excluir"]').first().click();
        // cy.contains('button', 'Confirmar').click();
        // cy.contains('button', 'OK').click();
        //
        //
        // cy.get('.nav > :nth-child(6) > a').click()
        // cy.contains('button', 'Excluir').click();
        // cy.contains('button', 'Confirmar').click();

    })
})
