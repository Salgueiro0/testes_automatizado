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
    it('Visualizar um requerimento', () => {

        cy.visit('http://gla-homol.terracapnet.local')
        cy.get(':nth-child(7) > [href="#"] > :nth-child(2)').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
        cy.get('#pesquisarRequerimento').click()

        cy.get('.sidebar-toggle').click()
        cy.get('a[title="Visualizar"]').first().click();

        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes("Identifier 'todasPendencias' has already been declared")) {
                // Ignora esse erro específico
                return false
            }
            // Outros erros continuarão falhando normalmente
            return true
        })

        Cypress.on('uncaught:exception', (err, runnable) => {
            // Ignora qualquer erro cross‑origin
            return false
        })

        cy.get('#requerimento-aba')


        //ABA DADOS DETALHADOS
        //Ir para demanda
        //cy.get('#requerimento-aba > :nth-child(1) > .col-md-12').click()

        //EDITAR
        // cy.get('#requerimento-aba > .panel-footer > :nth-child(1) > a.btn').click()
        // cy.go('back')

        //EXCLUIR
        // cy.get('#btn-delete-requerimento').click()
        // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        // cy.get('.bootbox > .modal-dialog')
        //     .should('be.visible')
        //      .within(() => {
        //          cy.get('.btn').click()
        //      });

        //FILTRO PESQUISAR
       // cy.get('#table-pagamento_filter > label > .form-control').type("quitado");
       //
       //  //BOTÃO EDITAR
       //  cy.get('#table-pagamento_filter > label > .form-control').click()
       //
       //  //BOTÃO EXCLUIR
       //  cy.get('#btn-delete-requerimento').click()
       //  cy.wait(1000)
       //  cy.get('.bootbox-close-button').click()

        //NOVO DOCUMENTO
        cy.get('.panel-footer > :nth-child(3) > .btn').click()
        cy.wait(5000)

        // 1. Clique no container (o elemento que mostra o valor atual)
        cy.get('.panel-body')
            .find('[id^="select2-tp_documento-"][id$="-container"]')
            .first()
            .should('be.visible')
            .click();

        // 2. Aguarde a abertura das opções e escolha pelo texto visível
        cy.get('.select2-results')             // dropdown renderizado pelo plugin
            .contains('Comprovante de Pagamento')                    // substitua por parte do texto da opção
            .click();

        cy.get('#nr_documento').type('1')

        cy.get('#dt_documento').type('2020-01-01')

        cy.get('#select2-cd_orgao_documento-wb-container').click()
        cy.get('.select2-results')
            .find('li')
            .eq(0)
            .click({force:true})


        cy.get('#nr_documento_sei').type('1')

        cy.get('#ds_documento').type('teste')

        cy.get('#anexo').click()
        //cy.go('back')

        // //ABA DOCUMENTO
        // cy.get('.documentos-aba').click()
        // cy.get(':nth-child(3) > .col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered').type('1')
        // cy.get('#nr_documento').type('1')
        // cy.get('#dt_documento').type('2025-01-01')
        // cy.get(':nth-child(4) > .col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        // cy.get('#nr_documento_sei').type('1')
        // cy.get('#ds_documento').type('teste')
        // cy.get(':nth-child(5) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        // cy.get('[onclick="resetFields()"]').click()
        // cy.get('#pesquisarDocumentos').click()
        // cy.get('.panel-body > .panel-footer > .btn-toolbar > .btn-success').click()
        // cy.get('[onclick="window.history.back()"]').click()

        // //ABA ESTUDOS
        //  cy.get('.novo-estudo-aba').click()
        // // cy.get('#select2-tp_estudo-container').click()
        // // cy.get('.select2-results')
        // //     .find('li')
        // //     .eq(0)
        // //     .click({force:true})
        // // cy.get('#select2-tp_natureza-container').click()
        // // cy.get('.select2-results')
        // //     .find('li')
        // //     .eq(0)
        // //     .click({force:true})
        // // cy.get('#select2-tp_objeto-container').click()
        // // cy.get('.select2-results')
        // //     .find('li')
        // //     .eq(0)
        // //     .click({force:true})
        // // cy.get('#ds_objeto_estudo').type('teste')
        // // cy.get('.select2-selection__placeholder').click()
        // // cy.get('.select2-results')
        // //     .find('li')
        // //     .eq(0)
        // //     .click({force:true})
        // // cy.get('#dt_elaboracao_start').type('2020-01-01')
        // // cy.get('#dt_elaboracao_end').type('2020-01-01')
        // cy.get('#btn-pesquisar-estudo').click()
        // cy.get('.panel > .panel-footer > .btn-toolbar > .btn-success').click()
        //
        // //PÁGINA ESTUDO/SERVIÇO
        //
        // //REFERÊNCIAS
        //
        // //INCLUIR REQUERIMENTO
        // cy.get('#select2-cd_regiao_admin_req-container').click()
        // cy.get('.select2-results')
        //      .find('li')
        //      .eq(0)
        //      .click({force:true})
        // cy.wait(1000)
        // cy.get('#select2-cd_empreendimento_req-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        // cy.get('#select2-tp_requerimento-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        // cy.wait(1000)
        // cy.get('#select2-cd_requerimento-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        // cy.get('#btnAdicionar_requerimento > .fa').click()
        //
        // //INCLUIR EXIGÊNCIA
        // cy.get('#select2-cd_regiao_admin_exi-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        // cy.wait(1000)
        // cy.get('#select2-cd_empreendimento_exi-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        // cy.wait(2000)
        // cy.get('#select2-cd_demanda-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        //
        //
        // //INCLUIR PENDÊNCIA
        //
        // cy.get('#select2-cd_regiao_admin_pen-container').click()
        // cy.get('.select2-results')
        //      .find('li')
        //      .eq(0)
        //      .click({force:true})
        // cy.wait(1000)
        //
        // cy.get('#select2-cd_empreendimento_pen-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        // cy.wait(1000)
        //
        // cy.get('#select2-cd_pendencia-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        //
        // cy.get('#btnAdicionar_pendencia').click()
        //
        // //DADOS GERAIS
        //
        // cy.get('#select2-tp_estudo-container').click()
        // cy.get('.select2-results')
        //      .find('li')
        //      .eq(0)
        //      .click({force:true})
        //
        // cy.get('#select2-tp_natureza-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        //
        // cy.get('#select2-tp_objeto-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        //
        // cy.get('#ds_objeto_estudo').type('teste')
        // cy.get('#nr_area_poligonal').type('1')
        //
        // cy.get(':nth-child(6) > .form-group > .select2-container > .selection > .select2-selection > #select2-tp_status-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        //
        // cy.get('#ds_observacao_status').type('teste')
        //
        // cy.get('#select2-cd_orgao_avaliador-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        //
        // cy.get('#vl_estimado').type('1')
        //
        //
        // cy.get('#cd_org_proc_sei_contratacao').type('a')
        // cy.get('#nr_proc_sei_contratacao').type('b')
        // cy.get('#nr_proc_sei_contratacao').type('c')
        //
        // cy.get('#select2-cd_pessoa_titular-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        //
        // cy.get('#select2-cd_pessoa_suplente-container').click()
        // cy.get('.select2-results')
        //     .find('li')
        //     .eq(0)
        //     .click({force:true})
        //
        // cy.get('#ds_caminho_departamento').type('teste')
        //
        // cy.get('#dt_elaboracao').type('2020-01-01')
        //
        // cy.get('#dt_prev_conclusao_estudo').type('2020-01-01')
        //
        // //DADOS DO CONTRATO
        //
        // cy.get('#ct_plus').click()
        //
        // cy.get('#btnSalvar').click()
        // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        // // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        // // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        // // cy.get('[onclick="window.history.back()"]').click()
        // cy.contains('button', 'Sim')
        //     .should('be.visible')
        //     .click();
        // cy.get('[onclick="limparEstudo()"]').click()
        // cy.go('back')
        //
        // // //Botão adicionar
        // //
        // //  cy.get('.col-md-12 > .btn').click()
        // // cy.get('#botao-salvar').click()//salvar sem campos obrigatórios
        // // cy.get('.bootbox > .modal-dialog')
        // //     .should('be.visible')
        // //     .within(() => {
        // //         cy.get('.btn').click()
        // //     });
        // //
        // // cy.get('#ds_sei_num_doc_pagamento').type('1')
        // // cy.get('#dt_pagamento').type('2025-01-01')
        // // cy.get('#vl_pagamento').type('1')
        // // cy.get('#ds_pagamento').type('teste')
        // // cy.get('#tp_situacao').select('Quitado')
        // // cy.get('#ds_sei_num_doc_quitacao').type('1111')
        // // cy.get('#botao-salvar').click()
    })
})
