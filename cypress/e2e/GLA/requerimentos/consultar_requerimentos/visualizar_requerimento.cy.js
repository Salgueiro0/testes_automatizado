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

        //ABA DADOS DETALHADOS

        //Ir para demanda
         cy.get('#requerimento-aba > :nth-child(1) > .col-md-12').click()

         //Botão adicionar

        cy.get('.col-md-12 > .btn').click()
        cy.get('#botao-salvar').click()//salvar sem campos obrigatórios
        cy.get('.bootbox > .modal-dialog')
            .should('be.visible')
            .within(() => {
                cy.get('.btn').click()
            });

        cy.get('#ds_sei_num_doc_pagamento').type('1')
        cy.get('#dt_pagamento').type('2025-01-01')
        cy.get('#vl_pagamento').type('1')
        cy.get('#ds_pagamento').type('teste')
        cy.get('#tp_situacao').select('Quitado')
        cy.get('#ds_sei_num_doc_quitacao').type('1111')
        cy.get('.btn-secondary').click()

        //FILTRO PESQUISAR
        cy.get('#table-pagamento_filter > label > .form-control').type("Em análise");

        //FILTRO EDITAR
        cy.get('.btn-edit-pagamento > .fa').click()
        cy.get('.btn-secondary').click()
        cy.reload();


        //FILTRO EXCLUIR
        cy.wait(1000)
        cy.get('.btn-delete-pagamento > .fas').click()
        cy.reload();

        //IR PARA EDITAR REQUERIMENTO E VOLTAR
         cy.get('#requerimento-aba > .panel-footer > :nth-child(1) > a.btn').click()
         cy.go('back')

        //BOTÃO EXCLUIR
        cy.get('#table-pagamento > thead > tr > .sorting_asc').should('contain',"SEI do Comprovante de Pagamento").click()
        cy.reload();

         //IR PARA NOVO DOCUMENTO
        cy.get('.panel-footer > :nth-child(3) > .btn').click()
        cy.go('back')

        //VALIDAÇÃO DE TEXTOS
        cy.get('#requerimento-aba > :nth-child(3) > :nth-child(1) > .form-group > label').should('contain',"Tipo Requerimento")
        cy.get('#requerimento-aba > :nth-child(3) > :nth-child(2) > .form-group > label').should('contain',"Demanda")
        cy.get('#requerimento-aba > :nth-child(4) > :nth-child(1) > .form-group > label').should('contain',"Número Ofício")
        cy.get('#requerimento-aba > :nth-child(4) > :nth-child(2) > .form-group > label').should('contain',"Ano Ofício")
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > label').should('contain',"Emitente Ofício")
        cy.get(':nth-child(4) > label').should('contain',"Nº SEI Doc Requerimento")
        cy.get('#requerimento-aba > :nth-child(5) > :nth-child(1) > .form-group > label').should('contain',"Titular")
        cy.get('#requerimento-aba > :nth-child(5) > :nth-child(2) > .form-group > label').should('contain',"Suplente")
        cy.get(':nth-child(6) > .col-md-12 > .form-group > label').should('contain',"Descrição")
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > label').should('contain',"Órgão Requerimento")
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > label').should('contain',"Data Publicação Requerimento")
        cy.get(':nth-child(7) > :nth-child(3) > .form-group > label').should('contain',"Status Requerimento")
        cy.get(':nth-child(4) > .form-group > label').should('contain',"SEI Processo Requerimento")
        cy.get(':nth-child(8) > :nth-child(1) > .form-group > label').should('contain',"Reserva Orçamentária enviada à DIPLA")
        cy.get(':nth-child(8) > :nth-child(2) > .form-group > label').should('contain',"Nº Doc SEI Despacho")
        cy.get(':nth-child(9) > :nth-child(1) > .form-group > label').should('contain',"Status do Pagamento")
        cy.get(':nth-child(9) > :nth-child(2) > .form-group > label').should('contain',"Prazo Máximo de Análise")
        cy.get(':nth-child(9) > :nth-child(3) > .form-group > label').should('contain',"Estudo/Serviço")
        cy.get(':nth-child(10) > :nth-child(1) > .form-group > label').should('contain',"Observação (SEI Documento Ofício)")
        cy.get(':nth-child(10) > :nth-child(2) > .form-group > label').should('contain',"Observação (Processo)")
        cy.get('.col-md-12 > label').should('contain',"Pagamentos de Preço Público de Análise (Requerimentos)")
        cy.get('#table-pagamento > thead > tr > .sorting_asc').should('contain',"SEI do Comprovante de Pagamento")
        cy.get('[aria-label="Data do Pagamento: Ordenar colunas de forma ascendente"]').should('contain',"Data do Pagamento")
        cy.get('[aria-label="Valor do Pagamento (R$): Ordenar colunas de forma ascendente"]').should('contain',"Valor do Pagamento (R$)")
        cy.get('[aria-label="Status do Pagamento: Ordenar colunas de forma ascendente"]').should('contain',"Status do Pagamento")
        cy.get('[aria-label="SEI da Certidão de Quitação: Ordenar colunas de forma ascendente"]').should('contain',"SEI da Certidão de Quitação")
        cy.get('[aria-label="Descrição do Pagamento: Ordenar colunas de forma ascendente"]').should('contain',"Descrição do Pagamento")
        //cy.get('thead > tr > .text-center').should('contain',"Ação")


        //ABA DOCUMENTO
        cy.get('.documentos-aba').click()

        //Ir para empreendimento
        cy.get('.panel-body > :nth-child(1) > .col-md-12 > [href="https://licenciamento-ambiental-homol.terracap.df.gov.br/empreendimentos/87"]').click()
         cy.go('back')

        cy.get('#pesquisarRequerimento').click()

        cy.get('.sidebar-toggle').click()
        cy.get('a[title="Visualizar"]').first().click();

        cy.get('.documentos-aba').click()

        cy.get(':nth-child(3) > .col-md-6 > .form-group > .select2-container > .selection > .select2-selection').type('Outros').type('{enter}')

        cy.get('#nr_documento').type('1')
        cy.get('#dt_documento').type('2020-01-01')
        cy.get(':nth-child(4) > .col-md-6 > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results')
            .find('li')
            .eq(0)
            .click({force:true})
        cy.get('#nr_documento_sei').type('2')
        cy.get('#ds_documento').type('teste')
        cy.get(':nth-child(5) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results')
            .find('li')
            .eq(0)
            .click({force:true})

        // cy.go('back')
        // cy.get('#pesquisarRequerimento').click()
        // cy.get('.sidebar-toggle').click()
        // cy.get('a[title="Visualizar"]').first().click();
        // cy.get('.documentos-aba').click()

        // //FILTRO PESQUISAR
        // cy.wait(2000)
         cy.get('#table-documento_filter > label > .form-control').type('teste')
//
        //BOTÃO PESQUISAR
        cy.wait(1000)
        cy.get('#pesquisarDocumentos').click()

        //BOTÃO LIMPAR
        cy.get('[onclick="resetFields()"]').click()


        //VALIDAÇÃO DE TEXTOS
        cy.get(':nth-child(3) > .col-md-6 > .form-group > .control-label').should('contain',"Tipo")
        cy.get('#documento > .box > .box-body > .panel > .panel-body > :nth-child(3) > :nth-child(2) > .form-group > .control-label').should('contain',"Número")
        cy.get(':nth-child(3) > :nth-child(3) > .form-group > .control-label').should('contain',"Data")
        cy.get(':nth-child(4) > .col-md-6 > .form-group > .control-label').should('contain',"Órgão Documento")
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .control-label').should('contain',"Nº SEI Doc")
        cy.get(':nth-child(5) > :nth-child(1) > .form-group > .control-label').should('contain',"Descrição")
        cy.get('.panel-body > :nth-child(5) > :nth-child(2) > .form-group > label').should('contain',"Empreendedor Responsável")
        // cy.get('[aria-label="Origem: Ordenar colunas de forma ascendente"]').should('contain',"Origem")
        // cy.get('[aria-label="RA: Ordenar colunas de forma ascendente"]').should('contain',"RA")
        // cy.get('[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]').should('contain',"Empreendimento")
        // cy.get('[aria-label="Tipo: Ordenar colunas de forma ascendente"]').should('contain',"Tipo")
        // cy.get('[aria-label="Número: Ordenar colunas de forma ascendente"]').should('contain',"Número")
        // cy.get('[aria-label="Data: Ordenar colunas de forma ascendente"]').should('contain',"Data")
        // cy.get('[aria-label="Órgão: Ordenar colunas de forma ascendente"]').should('contain',"Órgão")
        // cy.get('[aria-label="Nº SEI Doc: Ordenar colunas de forma ascendente"]').should('contain',"Nº SEI Doc")
        // cy.get('[aria-label="Descrição: Ordenar colunas de forma ascendente"]').should('contain',"Descrição")
        // cy.get('#table-documento > thead > tr > .text-center').should('contain',"Ação")

        //ABA ESTUDOS

        cy.get('.novo-estudo-aba').click()

        cy.get('#select2-tp_estudo-container').click()
        cy.get('.select2-results')
            .find('li')
            .eq(0)
            .click({force:true})

        cy.get('#select2-tp_natureza-container').click()
        cy.get('.select2-results')
            .find('li')
            .eq(0)
            .click({force:true})

        cy.get('#select2-tp_objeto-container').click()
        cy.get('.select2-results')
            .find('li')
            .eq(0)
            .click({force:true})

        cy.get('#ds_objeto_estudo').type('teste')

        cy.get('#select2-tp_status-container').click()
        cy.get('.select2-results')
            .find('li')
            .eq(0)
            .click({force:true})

        cy.get('#dt_elaboracao_start').type('2020-01-01')
        cy.get('#dt_elaboracao_end').type('2020-01-02')

        //BOTÃO PESQUISAR
        cy.get('#dt_elaboracao_end')

        //FILTRO PESQUISAR
        cy.get('#tabela-estudo-aba_filter > label > .form-control').type('teste')

        //BOTÃO LIMPAR
        cy.get('[onclick="limparFormEstudoAba()"]').click()

        //VALIDAR CAMPOS DE TEXTO

        cy.get('.panel-body > :nth-child(1) > :nth-child(1) > .form-group > label').should('contain',"Tipo")
        cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-group > .control-label').should('contain',"Natureza")
        cy.get(':nth-child(3) > .control-label').should('contain',"Objeto")
        cy.get('.col-md-12 > .form-group > .control-label').should('contain',"Descrição do Objeto do Estudo/Serviço")
        cy.get('#form_estudo > .box > .box-body > .panel > .panel-body > :nth-child(3) > :nth-child(1) > .form-group > .control-label').should('contain',"Status")
        cy.get('#form_estudo > .box > .box-body > .panel > .panel-body > :nth-child(3) > :nth-child(2) > .form-group > .control-label').should('contain',"Data de Elaboração")

        cy.get('#tabela-estudo-aba > thead > tr > .sorting_asc').should('contain',"Referência")
        cy.get('[aria-label="Natureza: Ordenar colunas de forma ascendente"]').should('contain',"Natureza")
        cy.get('[aria-label="Objeto: Ordenar colunas de forma ascendente"]').should('contain',"Objeto")
        cy.get('[aria-label="Descrição Objeto: Ordenar colunas de forma ascendente"]').should('contain',"Descrição Objeto")
        cy.get('[aria-label="Status: Ordenar colunas de forma ascendente"]').should('contain',"Status")
        //cy.get('[aria-label="Valor Estimado: Ordenar colunas de forma ascendente"]').should('contain',"Valor estimado")
        //cy.get('[aria-label="Contrato | OS: Ordenar colunas de forma ascendente"]').should('contain',"Contrato|OS")
        //cy.get('#tabela-estudo-aba > thead > tr > [aria-label="Ação: Ordenar colunas de forma ascendente"]').should('contain',"Ação")

        //NOVO CADASTRO
        cy.get('.panel > .panel-footer > .btn-toolbar > .btn-success').click()
        cy.go('back')
     })
 })
