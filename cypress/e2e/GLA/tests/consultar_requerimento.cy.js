import consultar_requerimento from "../../../support/pages/consultar_requerimento";

describe('consultar_requerimentos', () => {


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

        consultar_requerimento.irParaGLA()
        consultar_requerimento.login()


    //TESTANDO OS CAMPOS DA PÁGINA DE REQUERIMENTO - NOVO CADASTRO

        //PESQUISAR EMPREENDIMENTO

        consultar_requerimento.irParaEmpreendimento()
        consultar_requerimento.seletorEmpreendimento()
        consultar_requerimento.seletorDropdown('Polos 06, 07, 08 - Projeto Orla - Beira Lago')
        consultar_requerimento.clicarPesquisar()
        consultar_requerimento.clicarPrimeiroBotaoVisualizar()
        consultar_requerimento.clicarAbaRequerimento()

        //CADASTRAR REQUERIMENTO
        consultar_requerimento.irParaCadastrarRequerimento()

        //testando os campos de texto da página REQUERIMENTO - NOVO CADASTRO
        consultar_requerimento.validarCadastroControlLabelTipoRequerimento()
        consultar_requerimento.validarCadastroControlLabelTipoDemandaPermissao()
        consultar_requerimento.validarCadastroControlLabelNumeroOficio()
        consultar_requerimento.validarCadastroControlLabelAnoOficio()
        consultar_requerimento.validarCadastroControlLabelEmitenteOficio()
        consultar_requerimento.validarCadastroControlLabelNSeiDocRequerimento()
        consultar_requerimento.validarCadastroControlLabelTitular()
        consultar_requerimento.validarCadastroControlLabelSuplente()
        consultar_requerimento.validarCadastroControlLabelDescricao()
        consultar_requerimento.validarCadastroControlLabelOrgaoRequerimento()
        consultar_requerimento.validarCadastroControlLabelDataPublicacaoRequerimento()
        consultar_requerimento.validarCadastroControlLabelStatusRequerimento()
        consultar_requerimento.validarCadastroControlLabelSeiProcessoRequerimento()
        consultar_requerimento.validarCadastroControlLabelReservaOrcamentaria()
        consultar_requerimento.validarCadastroControlLabelNDocSeiDespacho()

        //Testando o botão limpar
        consultar_requerimento.digitarDescricaoRequerimento()
        consultar_requerimento.clicarBotaoLimpar()
        //testando ir para empreendimento e voltar
        consultar_requerimento.irParaAbaEmpreendimento()
        consultar_requerimento.clicarBotaoVoltar()
        consultar_requerimento.seletorDemandaPermissao()
        consultar_requerimento.digitarNumeroOficio()
        consultar_requerimento.digitarAnoOficio()
        consultar_requerimento.selecionarOrgaoOficio()
        consultar_requerimento.digitarDescricaoObservacaoDocOficio()
        consultar_requerimento.selecionarPessoaTitular()
        consultar_requerimento.seletorDropdown('ALLAN GUIMARAES DIOGENES')
        consultar_requerimento.digitarDescricaoRequerimento()
        consultar_requerimento.seletorOrgaoRequerimento()
        consultar_requerimento.selecionarDataPublicacao()
        consultar_requerimento.seletorTpStatus()
        consultar_requerimento.digitarOrgaoProcesso()
        consultar_requerimento.digitarNumeroProcessoSei()
        consultar_requerimento.digitarAnoProcessoSei()
        consultar_requerimento.selecionarReservaOrcamentaria()
        consultar_requerimento.digitarNumeroDocSeiDespacho()
        consultar_requerimento.digitarNSeiDoc('teste')                  //-- EU088 - US022.1 - campo numérico --
        consultar_requerimento.digitarSeiProcesso('teste')              //-- EU088 - US022.1 - campo numérico --
        consultar_requerimento.digitarTaxaLicenc('teste200000')         //-- EU088 - US022.2 - campo numérico, opcional e editável--
        consultar_requerimento.digitarEstudosServicos('teste200000')    //-- EU088 - US022.2 - campo numérico, opcional e editável--
        consultar_requerimento.clicarBotaoSalvar()
        consultar_requerimento.clicarContinuar()
        consultar_requerimento.clicarOk()

        // CONSULTAR REQUERIMENTO
        consultar_requerimento.irParaRequerimento()
        consultar_requerimento.clicarConsultarRequerimentos()

        //Testando preencher e Limpar todos os campos
        consultar_requerimento.digitarDescricaoRequerimento()
        consultar_requerimento.limparCampoRequerimento()


        //Validação dos campos de texto
        consultar_requerimento.validarControlLabelRAConsultar()
        consultar_requerimento.validarControlLabelEmpreendimentoConsultar()
        consultar_requerimento.validarControlLabelDemandaConsultar()
        consultar_requerimento.validarControlLabelTipoRequerimentoConsultar()
        consultar_requerimento.validarControlLabelTipoDemandaPermissaoConsultar()
        consultar_requerimento.validarControlLabelNumeroOficioConsultar()
        consultar_requerimento.validarControlLabelAnoOficioConsultar()
        consultar_requerimento.validarControlLabelEmitenteOficioConsultar()
        consultar_requerimento.validarControlLabelTitularConsultar()
        consultar_requerimento.validarControlLabelSuplenteConsultar()
        consultar_requerimento.validarControlLabelDescricaoConsultar()
        consultar_requerimento.validarControlLabelOrgaoRequerimentoConsultar()
        consultar_requerimento.validarControlLabelPeriodoDataPublicacaoRequerimentoConsultar()
        consultar_requerimento.validarControlLabelStatusRequerimentoConsultar()
        consultar_requerimento.validarControlLabelEmpreendedorResponsavelConsultar()
        consultar_requerimento.validarControlLabelPossuiReiteracoesConsultar()
        consultar_requerimento.validarControlLabelReservaOrcamentariaDiplaConsultar()
        consultar_requerimento.validarControlLabelStatusPagamentoConsultar()
        consultar_requerimento.validarControlLabelPrazoMaximoAnaliseConsultar()
        consultar_requerimento.validarControlLabelRaConsultar()
        consultar_requerimento.validarAriaLabelEmpreendimentoConsultar()
        consultar_requerimento.validarAriaLabelRequerimentoConsultar()
        consultar_requerimento.validarAriaLabelOrgaoConsultar()
        consultar_requerimento.validarAriaLabelNOficioConsultar()
        consultar_requerimento.validarAriaLabelAnoConsultar()
        consultar_requerimento.validarAriaLabelEmitenteConsultar()
        consultar_requerimento.validarAriaLabelDataPublicacaoConsultar()
        consultar_requerimento.validarAriaLabelAcaoConsultar()


        //PESQUISAR REQUERIMENTO
        consultar_requerimento.selecionarEmpreendimenot()
        consultar_requerimento.pesquisarRequerimento()

        //Relatório Excel e PDF
        consultar_requerimento.gerarRelatorioPDF()

        //Filtrar por texto
        consultar_requerimento.digitarFiltroRequerimento()

        //Filtro visualizar empreendimento
        consultar_requerimento.clicarVisualizarPrimeiro()

        //VISUALIZAR REQUERIMENTO

        //Dados Detalhados

        //Validação de textos
        consultar_requerimento.validarLabelTipoRequerimento()
        consultar_requerimento.validarLabelDemanda()
        consultar_requerimento.validarLabelNumeroOficio()
        consultar_requerimento.validarLabelAnoOficio()
        consultar_requerimento.validarLabelEmitenteOficio()
        consultar_requerimento.validarLabelNSeiDocRequerimento()
        consultar_requerimento.validarLabelTitular()
        consultar_requerimento.validarLabelSuplente()
        consultar_requerimento.validarLabelDescricao()
        consultar_requerimento.validarLabelOrgaoRequerimento()
        consultar_requerimento.validarLabelDataPublicacaoRequerimento()
        consultar_requerimento.validarLabelStatusRequerimento()
        consultar_requerimento.validarLabelSeiProcessoRequerimento()
        consultar_requerimento.validarLabelReservaOrcamentaria()
        consultar_requerimento.validarLabelNDocSeiDespacho()
        consultar_requerimento.validarLabelStatusPagamento()
        consultar_requerimento.validarLabelPrazoMaximoAnalise()
        consultar_requerimento.validarLabelEstudoServico()
        consultar_requerimento.validarLabelObservacaoSei()
        consultar_requerimento.validarLabelObservacaoProcesso()
        consultar_requerimento.validarLabelPagamentosPrecoPublico()
        consultar_requerimento.validarLabelSeiComprovantePagamento()
        consultar_requerimento.validarLabelDataPagamento()
        consultar_requerimento.validarLabelValorPagamento()
        consultar_requerimento.validarAriaLabelStatusPagamento()
        consultar_requerimento.validarLabelSeiCertidaoQuitacao()
        consultar_requerimento.validarLabelDescricaoPagamento()
        consultar_requerimento.validarLabelAcao()

        //ADICIONAR PAGAMENTO
        consultar_requerimento.botaoAdicionar()
        consultar_requerimento.digitarDataPagamento('2020-01-01')
        consultar_requerimento.digitarValorPagamento(100000)
        consultar_requerimento.clicarBotaoSalvarPagamento()
        consultar_requerimento.clicarModalOk()

        // -- EU094 - US024 - RN239 --
        consultar_requerimento.validarValorLicenciamento()
        consultar_requerimento.validarValorEstudosServicos()
        consultar_requerimento.validarValorTotalRequerimento()
        consultar_requerimento.validarValorSaldoRequerimento()

        //APAGAR PAGAMENTO
        consultar_requerimento.deletarPagamento()
        consultar_requerimento.clicarConfirmar()
        cy.wait(1000)
        consultar_requerimento.clicarModalOk()


        //EDITAR REQUERIMENTO
        consultar_requerimento.irParaAbaRequerimento()

        //Validar campos de texto
        cy.wait(2000)
        consultar_requerimento.validarControlLabelTipoRequerimentoEditar()
        consultar_requerimento.validarControlLabelDemandaEditar()
        consultar_requerimento.validarControlLabelNumeroOficioEditar()
        consultar_requerimento.validarControlLabelAnoOficioEditar()
        consultar_requerimento.validarControlLabelEmitenteOficioEditar()
        consultar_requerimento.validarControlLabelNSeiDocRequerimentoEditar()
        consultar_requerimento.validarControlLabelTitularEditar()
        consultar_requerimento.validarControlLabelSuplenteEditar()
        consultar_requerimento.validarControlLabelDescricaoEditar()
        consultar_requerimento.validarControlLabelOrgaoRequerimentoEditar()
        consultar_requerimento.validarControlLabelDataPublicacaoRequerimentoEditar()
        consultar_requerimento.validarControlLabelStatusRequerimentoEditar()
        consultar_requerimento.validarControlLabelSeiProcessoRequerimentoEditar()
        consultar_requerimento.validarControlLabelReservaOrcamentariaDiplaEditar()
        consultar_requerimento.validarControlLabelNDocSeiDespachoEditar()

        //editar

        consultar_requerimento.digitarDescricaoRequerimento()
        consultar_requerimento.digitarNSeiDoc('teste')                  //-- EU088 - US022.1 - campo numérico --
        consultar_requerimento.digitarSeiProcesso('teste')              //-- EU088 - US022.1 - campo numérico --
        consultar_requerimento.digitarTaxaLicenc('teste108070')         //-- EU088 - US023 - campo numérico, opcional e editavel--
        consultar_requerimento.digitarEstudosServicos('teste108070')    //-- EU088 - US023 - campo numérico, opcional e editavel--
        consultar_requerimento.clicarBotaoSalvar()
        consultar_requerimento.clicarContinuar()
        consultar_requerimento.clicarOk()

        //Limpar campos de texto
        consultar_requerimento.irParaAbaRequerimentos()
        consultar_requerimento.irParaAbaConsultarRequerimentos()
        consultar_requerimento.selecionarEmpreendimentoContainer()
        consultar_requerimento.pesquisarRequerimento()
        consultar_requerimento.clicarPrimeiroBotaoEditar()
        consultar_requerimento.clicarBotaoLimpar()
        consultar_requerimento.clicarBotaoVoltar()

        //Excluir requerimento no filtro
        consultar_requerimento.selecionarEmpreendimentoContainer()
        consultar_requerimento.pesquisarRequerimento()
        consultar_requerimento.filtrarRequerimento()
        consultar_requerimento.clicarPrimeiroBotaoExcluir()
        consultar_requerimento.clicarBotaoConfirmar()
        consultar_requerimento.clicarOk()
    })
})
