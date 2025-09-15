
/// <reference types="cypress" />
import exigencias from "../../../support/pages/exigencias"
describe('pagamento', () => {
    beforeEach(() => {
        cy.viewport(1980, 1200)


    })

    it('teste tela de exigências', () => {


        exigencias.irParaGLA()
        exigencias.login()

        //PESQUISAR DEMANDA

        exigencias.clicarAbaDemanda()
        exigencias.clicarConsultarDemanda()
        exigencias.selecionarRA()
        cy.wait(2000)
        exigencias.selecionarDropdown('RA-I - BRASILIA ')
        cy.wait(2000)
        exigencias.selecionarEmpreendimento()
        cy.wait(2000)
        exigencias.selecionarDropdown('Polos 06, 07, 08 - Projeto Orla - Beira Lago')
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
        exigencias.validarExigeContratacaoNoCheck()               //US087 - RN181 - valida se exige contratacao não está marcado e é opcional
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
        exigencias.selecionarDropdown('Outros')
        exigencias.digitarPrazoDias()
        exigencias.digitarPrevCumprimentoEApagar('2020-01-01')  //US087 - RN 182 - valida se tem formato de data e é opcional
        exigencias.digitarDescricaoExigencia()
        exigencias.selecionarTitular()
        exigencias.selecionarDropdown('Gabriel Tenorio Ramos')
        exigencias.selecionarSuplente()
        exigencias.selecionarDropdown('PAULO CESAR COSTA')
        exigencias.selecionarStatus()
        exigencias.selecionarDropdown('Cumprida')
        exigencias.digitarSeiProcAcompanhamento()
        exigencias.adicionarUnidadeInterna()

        exigencias.confirmarExigencia()

        exigencias.clicarBotaoNao()


        //PESQUISAR EXIGÊNCIA
        function pesquisarStatusExigencia(status){
            exigencias.selecionarAbaExigencias()
            exigencias.selecionarRaPesquisarExigencias()
            exigencias.selecionarDropdown('RA-I - BRASILIA ')
            cy.wait(2000)
            exigencias.selecionarEmpreendimentoPesquisarExigencias()
            exigencias.selecionarDropdown('Polos 06, 07, 08 - Projeto Orla - Beira Lago')
            exigencias.selecionarStatusPesq()
            exigencias.selecionarDropdown(status)
            exigencias.selecionarExigContrat()           //-- US091 - Exige contratação como select sim e não --
            exigencias.selecionarDropdown('Sim')
            exigencias.limparExigContrat()
            exigencias.botaoPesquisarExigencia()
            cy.wait(2000)
        }

        pesquisarStatusExigencia('Informativo')  // -- US073 -nulidade em dias restantes da exigência status informativo--
        pesquisarStatusExigencia('Cumprida')     // -- US073 -nulidade em dias restantes da exigência status cumprida--


        //testando filtro pesquisar
        exigencias.digitarFiltroPesquisar('descrição')

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
        exigencias.botaoExcluir()
        exigencias.botaoModalSim()


        //EDITAR EXIGÊNCIA
        exigencias.clicarBotaoEditarExigencia()
        exigencias.digitarQuantidadePrazoDias()
        exigencias.salvarBotao()
        exigencias.clicarModalSalvar()
        cy.wait(2000)
        exigencias.clicarBotaoOK()                    //US088 - MSG025 "Exigência atualizada com sucesso"

        //EXCLUIR EXIGÊNCIA
        exigencias.selecionarAbaExigencias()
        exigencias.selecionarEmpreendimentoPesquisarExigencias()
        exigencias.selecionarDropdown('Polos 06, 07, 08 - Projeto Orla - Beira Lago')
        exigencias.digitarCoExigencia('34243')
        exigencias.botaoPesquisarExigencia()
        cy.wait(2000)
        exigencias.clicarBotaoExcluirExigencia()
        exigencias.clicarModalConfirmar()
        exigencias.clicarBotaoOK()

        //Gerar relatório de acompanhamento

        //relatório de acompanhamento de exigências validar label--
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









