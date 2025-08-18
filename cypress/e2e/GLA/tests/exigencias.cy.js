
/// <reference types="cypress" />
import exigencias from "../../../support/pages/exigencias"
describe('pagamento', () => {
    beforeEach(() => {
        cy.viewport(1980, 1200)


    })

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
        exigencias.validarLabelEmpreendimento()
        exigencias.validarLabelDemanda()
        exigencias.validarLabelNumero()
        exigencias.validarLabelTema()
        exigencias.validarLabelPossuiPrazoExpresso()
        exigencias.validarLabelDias()
        exigencias.validarLabelPrevisaoCumprimento()
        exigencias.validarLabelExigeContratacao()
        exigencias.validarLabelDescricaoExigencia()
        exigencias.validarLabelDescricaoProvidencia()
        exigencias.validarLabelTitular()
        exigencias.validarLabelSuplente()
        exigencias.validarLabelStatus()
        exigencias.validarLabelSeiProcAcompanhamento()
        exigencias.validarLabelUnidadeInterna()
        exigencias.validarTabelaUnidadeInterna()
        exigencias.validarLabelUnidadeExterna()
        exigencias.validarTabelaUnidadeExterna()


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
        exigencias.selecionarSuplente()
        exigencias.selecionarStatus()
        exigencias.digitarSeiProcAcompanhamento()
        exigencias.adicionarUnidadeInterna()

        exigencias.confirmarExigencia()

        exigencias.clicarBotaoNao()


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
        exigencias.validarLabelSeiRequerimento()
        exigencias.validarLabelSeiDeferimentoIndeferimento()
        exigencias.validarLabelStatusModal()
        exigencias.validarLabelDataLimiteDilacaoPrazo()


        exigencias.digitarObservacaoSeiPedido()
        exigencias.botaoSalvar()

        //alterar Dilações de Prazos
        exigencias.botaoEditarDilacaoPrazos()

        exigencias.digitarObservacaoSeiPedido()

        exigencias.botaoSalvar()
        //cy.contains('button', "Salvar").click()

        exigencias.botaoExcluir()

        exigencias.botaoModalSim()


        //EDITAR EXIGÊNCIA
        exigencias.clicarBotaoEditarExigencia()

        exigencias.digitarQuantidadePrazoDias()

        exigencias.salvarBotao()


        exigencias.clicarModalSalvar()

        exigencias.clicarBotaoOK()



        //EXCLUIR EXIGÊNCIA
        exigencias.selecionarAbaExigencias()
        exigencias.selecionarEmpreendimentoPesquisarExigencias()
        exigencias.digitarCoExigencia()

        exigencias.botaoPesquisarExigencia()
        cy.wait(2000)

        exigencias.clicarBotaoExcluirExigencia()

        exigencias.clicarModalConfirmar()

        exigencias.clicarBotaoOK()

        //Gerar relatório de acompanhamento

        //validando campos de texto de relatório de acompanhamento de exigências
        exigencias.validarLabelRaEmpreendimentoDemanda()
        exigencias.validarLabelNumeroModal()
        exigencias.validarLabelUnidadesResponsaveis()
        exigencias.validarLabelDataLimiteModal()
        exigencias.validarLabelInformativa()
        exigencias.validarLabelDispensada()
        exigencias.validarLabelSeiDilacaoAnalise()
        exigencias.validarLabelDescricaoProvidenciaModal()
        exigencias.validarLabelDescricaoExigenciaModal()
        exigencias.validarLabelCumprida()
        exigencias.validarLabelEmExecucao()
        exigencias.validarLabelTemaModal()
        exigencias.validarLabelEstudosServRelacionados()
        exigencias.validarLabelPendente()

        exigencias.clicarModalRelatorioPDF()

        cy.wait(2000)
        exigencias.clicarGerarRelatorioPDF()

        cy.wait(2000)
        exigencias.fecharModalPDF()

    })
})









