// tempo em ms entre comandos

/// <reference types="cypress" />

import consultar_reiteracoes from "../../../support/pages/consultar_reiteracoes";

describe('consultar_reiteracoes', () => {

    it('consultar_reiteracoes', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // Retorna false para evitar que o Cypress falhe o teste
            return false;
        })

        consultar_reiteracoes.irParaGLA()
        consultar_reiteracoes.login()

        //CADASTRAR REITERAÇÃO
        consultar_reiteracoes.irParaRequerimentos()
        consultar_reiteracoes.irParaConsultarReiteracoes()
        consultar_reiteracoes.irParaCadastrarReiteracoes()

        //Validar campos de texto

        consultar_reiteracoes.validarLabelCadastrarRA()
        consultar_reiteracoes.validarLabelCadastrarEmpreendimento()
        consultar_reiteracoes.validarLabelCadastrarTipoRequerimento()
        consultar_reiteracoes.validarLabelCadastrarRequerimentos()

        //Adicionar primeiro requerimento

        consultar_reiteracoes.selecionarRegiaoAdm()
        consultar_reiteracoes.selecionarEmpreendimento()
        consultar_reiteracoes.selecionarTipoRequerimento()
        consultar_reiteracoes.selecionarRequerimento()
        consultar_reiteracoes.clicarBotaoAdicionar()
        consultar_reiteracoes.selecionarSegundoRequerimento()
        consultar_reiteracoes.clicarBotaoAdicionar()
        consultar_reiteracoes.clicarBotaoSalvar()
        consultar_reiteracoes.clicarConfirmar()
        consultar_reiteracoes.clicarBotaoOk()

        //PESQUISAR REITERAÇÃO DE REQUERIMENTO

        //Validar Campos de texto
        consultar_reiteracoes.validarLabelPesquisarReiteracaoRA()
        consultar_reiteracoes.validarLabelPesquisarReiteracaoEmpreendimento()
        consultar_reiteracoes.validarLabelPesquisarReiteracaoTipoRequerimento()
        consultar_reiteracoes.validarLabelPesquisarReiteracaoCodigoReiteracao()
        consultar_reiteracoes.validarAriaLabelPesquisarReiteracaoEmpreendimento()
        consultar_reiteracoes.validarAriaLabelPesquisarReiteracaoTipoRequerimento()
        consultar_reiteracoes.validarAriaLabelPesquisarReiteracaoDataPubReq()
        consultar_reiteracoes.validarAriaLabelPesquisarReiteracaoAcao()

        consultar_reiteracoes.selecionarRegiaoAdmin()
        consultar_reiteracoes.selecionarTpRequerimento()
        consultar_reiteracoes.clicarBotaoPesquisar()
        consultar_reiteracoes.digitarFiltroReiteracao()
        consultar_reiteracoes.clicarPrimeiroBotaoVisualizar()

        //VISUALIZAR REITERAÇÃO:

        consultar_reiteracoes.validarWidthRequerimentosReiterados()
        consultar_reiteracoes.validarWidthDataPublicacao()
        consultar_reiteracoes.validarWidthAcaoRequerimento()

        //Editar Reiteração

        consultar_reiteracoes.clicarBotaoVoltar()
        consultar_reiteracoes.selecionarRegiaoAdmin()
        consultar_reiteracoes.selecionarTpRequerimento()
        consultar_reiteracoes.clicarBotaoPesquisar()
        consultar_reiteracoes.clicarPrimeiroBotaoEditar()

        //validando campos de texto
        consultar_reiteracoes.validarLabelEditarRA()
        consultar_reiteracoes.validarLabelEditarEmpreendimento()
        consultar_reiteracoes.validarLabelEditarTipoRequerimento()
        consultar_reiteracoes.validarLabelEditarRequerimentos()
        consultar_reiteracoes.validarLabelEditarRequerimentosReiterados()
        consultar_reiteracoes.selecionarPrimeiroRequerimento()

        //testando editar
        consultar_reiteracoes.selecionarRequerimentoEditar()
        consultar_reiteracoes.botaoEditar()
        consultar_reiteracoes.clicarBotaoAdicionar()
        consultar_reiteracoes.clicarBotaoSalvar()
        cy.wait(2000)
        consultar_reiteracoes.clicarModalSalvar()
        consultar_reiteracoes.clicarModalOk()


        //Excluir reiteração

        consultar_reiteracoes.selecionarRegiaoAdmin()
        consultar_reiteracoes.selecionarTpRequerimento()
        consultar_reiteracoes.clicarBotaoPesquisar()
        cy.wait(1000)
        consultar_reiteracoes.clicarPrimeiroBotaoEditar()
        cy.wait(2000)
        consultar_reiteracoes.clicarPrimeiroBotaoExcluir()
        consultar_reiteracoes.clicarModalConfirmar()
        consultar_reiteracoes.clicarBotaoLimpar()
        consultar_reiteracoes.clicarBotaoVoltar()
        //Excluir

        consultar_reiteracoes.selecionarRegiaoAdmin()
        consultar_reiteracoes.selecionarTpRequerimento()
        consultar_reiteracoes.clicarBotaoPesquisar()
        consultar_reiteracoes.clicarPrimeiroBotaoExcluir()
        consultar_reiteracoes.clicarModalConfirmar()
        consultar_reiteracoes.clicarBotaoOk()
    })
})
