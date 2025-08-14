
/// <reference types="cypress" />
import exigencias from "../../../support/pages/exigencias"
describe('pagamento', () => {

    it('teste tela de exigências', () => {

        //LOGIN

        exigencias.irParaGLA()
        exigencias.login()

        //PESQUISAR DEMANDA

        exigencias.clicarAbaDemanda()
        exigencias.clicarConsultarDemanda()
        exigencias.selecionarRA()
        exigencias.selecionarEmpreendimento()
        exigencias.clicarBotaoPesquisar()
        exigencias.digitarFiltroPesquisarDemanda()
        exigencias.clicarPrimeiroBotaoVisualizar()


        //CADASTRAR EXIGÊNCIA

        exigencias.clicarAbaExigencia()
        exigencias.clicarBotaoNovaExigencia()


        //validando campos de texto
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > label').should('contain', "Empreendimento ")
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > label').should('contain', "Demanda ")
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .control-label').should('contain', "Número")
        cy.get(':nth-child(2) > .form-group > .control-label').should('contain', "Tema")
        cy.get('.col-md-10 > .form-check-label').should('contain', "Possui Prazo Expresso na Exigência")
        cy.get('.col-md-2 > .form-check-label').should('contain', "Dias")
        cy.get(':nth-child(5) > :nth-child(1) > .form-group > .control-label').should('contain', "Previsão de Cumprimento")
        cy.get('.form-group > .form-check-label').should('contain', "Exige Contratação")
        cy.get(':nth-child(6) > .col-md-12 > .form-group > .control-label').should('contain', "Descrição Exigência")
        cy.get(':nth-child(7) > .col-md-12 > .form-group > .control-label').should('contain', "Descrição Providência")
        cy.get(':nth-child(8) > :nth-child(1) > .form-group > label').should('contain', "Titular ")
        cy.get(':nth-child(8) > :nth-child(2) > .form-group > label').should('contain', "Suplente ")
        cy.get(':nth-child(9) > :nth-child(1) > .form-group > .control-label').should('contain', "Status")
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > label').should('contain', "SEI Proc. de Acompanhamento")
        cy.get(':nth-child(10) > :nth-child(1) > .panel-border > .panel-body > .row > .col-md-10 > .form-group > .control-label').should('contain', "Unidade Interna")
        cy.get(':nth-child(10) > :nth-child(1) > .panel-border > .panel-body > .row > .col-md-12 > :nth-child(1) > tbody > tr > th').should('contain', "Unidade Interna")
        cy.get(':nth-child(11) > :nth-child(1) > .panel-border > .panel-body > .row > .col-md-10 > .form-group > .control-label').should('contain', "Unidade Externa")
        cy.get(':nth-child(11) > :nth-child(1) > .panel-border > .panel-body > .row > .col-md-12 > :nth-child(1) > tbody > tr > th').should('contain', "Unidade Externa")

        //ir para empreendimento
        exigencias.irParaEmpreendimento()

        //ir para demanda
        exigencias.irParaDemanda()

        //testar limpar campos
        exigencias.digitarNumeroExigencia()
        exigencias.clicarBotaoLimpar()

        //novo cadastro
        exigencias.digitarNumeroExigencia()
        exigencias.selecionarTema()
        exigencias.digitarPrazoDias()
        exigencias.digitarDescricaoExigencia()
        exigencias.selecionarTitular()
        exigencias.selecionarSuplente
        exigencias.selecionarStatus()
        exigencias.digitarSeiProcAcompanhamento()
        exigencias.adicionarUnidadeInterna()

        cy.get('.modal-footer > .btn-primary').click()
        cy.wait(2000)
        cy.contains('button', "Não").click()

        //PESQUISAR EXIGÊNCIA
        exigencias.selecionarAbaExigencias()
        exigencias.selecionarRaPesquisarExigencias()
        exigencias.selecionarEmpreendimentoPesquisarExigencias()
        exigencias.botaoPesquisarExigencia()

        //testando filtro pesquisar
        exigencias.digitarFiltroPesquisar()

        //VISUALIZAR EXIGÊNCIA
        exigencias.clicarPrimeiroBotaoVisualizar()

        //adicionar Dilações de Prazos
        exigencias.adicionarDilacoesPrazos()

        //validar campos de texto de Dilações de Prazos
        cy.get(':nth-child(2) > .col-md-8 > .form-group > .control-label').should('contain', "SEI do Requerimento")
        cy.get(':nth-child(3) > .col-md-8 > .form-group > .control-label').should('contain', "SEI do Deferimento/ Indeferimento")
        cy.get(':nth-child(2) > .col-md-4 > .form-group > .control-label').should('contain', "Status")
        cy.get('.modal-body > :nth-child(3) > .col-md-4 > .form-group > .control-label').should('contain', "Data Limite Após Dilação de Prazo")

        exigencias.digitarObservacaoSeiPedido()
        exigencias.botaoSalvar()

        //alterar Dilações de Prazos
        cy.get('[title="Editar"] > .fa').click()
        cy.get('#ds_observacao_sei_pedido').type('654')
        cy.contains('button', "Salvar").click()
        cy.wait(3000)

        cy.get('[title="Excluir"] > .fas').click()

        cy.contains('button', "Sim").click()

        //EDITAR EXIGÊNCIA

        cy.get('#exigencia-aba > .panel-footer > :nth-child(1) > a.btn').click()
        cy.get('#qt_prazo_dias').type('80')
        cy.get('#submit').click()
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.contains('button', "OK").click()


        //EXCLUIR EXIGÊNCIA
        cy.get('#btn-delete-exigencia').click()
        cy.contains('button',"Confirmar").click()
        cy.contains('button',"OK").click()

        //Gerar relatório de acompanhamento

        //validando campos de texto de relatório de acompanhamento de exigências
        cy.get('#modal-relatorio-pdf-personalizado > .modal-dialog > .modal-content > .modal-body > :nth-child(3) > :nth-child(1) > .form-group > .form-check-label').should('contain', "RA / EMPREENDIMENTO / DEMANDA")
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .form-check-label').should('contain', "Nº")
        cy.get(':nth-child(4) > :nth-child(4) > .form-group > .form-check-label').should('contain', "Unidades Responsáveis")
        cy.get(':nth-child(4) > :nth-child(7) > .form-group > .form-check-label').should('contain', "Data Limite")
        cy.get(':nth-child(6) > :nth-child(4) > .form-group > .form-check-label').should('contain', "Informativa")
        cy.get(':nth-child(6) > :nth-child(7) > .form-group > .form-check-label').should('contain', "Dispensada")
        cy.get('#modal-relatorio-pdf-personalizado > .modal-dialog > .modal-content > .modal-body > :nth-child(3) > :nth-child(2) > .form-group > .form-check-label').should('contain', "SEI da Dilação em Analise")
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .form-check-label').should('contain', "Descrição Providência")
        cy.get(':nth-child(4) > :nth-child(5) > .form-group > .form-check-label').should('contain', "Descrição Exigência")
        cy.get(':nth-child(6) > :nth-child(5) > .form-group > .form-check-label').should('contain', "Cumprida")
        cy.get(':nth-child(6) > :nth-child(8) > .form-group > .form-check-label').should('contain', "Em Execução")
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > .form-check-label').should('contain', "Tema")
        cy.get(':nth-child(4) > :nth-child(6) > .form-group > .form-check-label').should('contain', "Estudos/Serv Relacionados")
        cy.get(':nth-child(6) > :nth-child(6) > .form-group > .form-check-label').should('contain', "Pendente")


        cy.get('#modalRelatorioPersonalizadoPDF').click()
        cy.wait(2000)
        cy.get('#gerarRelatorioPersonalizadoPDF').click()
        cy.wait(2000)
        cy.get('#modal-relatorio-pdf-personalizado > .modal-dialog > .modal-content > .modal-footer > .btn-form').click()

        // //EXCLUIR DEMANDA E EMPREENDIMENTO
        // cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        //
        // cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        // cy.get('.select2-results').find('li').contains('ambiental').click({ force: true })
        // cy.get('#pesquisar').click()
        // cy.get('a[title="Excluir"]').first().click();

        // cy.get('a[title="Visualizar"]').first().click();
        // cy.get('.demandas-aba').click()
        // cy.get('#pesquisar').click()
        // cy.get('a[title="Excluir"]').first().click();
        // cy.contains('button', 'Confirmar').click();
        // cy.contains('button', 'OK').click();
        // cy.get('.nav > :nth-child(6) > a').click()
        // cy.contains('button', 'Excluir').click();
        // cy.contains('button', 'Confirmar').click();

    })
})









