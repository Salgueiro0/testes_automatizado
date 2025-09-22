/// <reference types="cypress" />

import demandas_consultar from "../../../support/pages/demandas_consultar";

describe('pendência', () => {
    beforeEach(() => {
        cy.viewport(1980, 1200)
       
          
    })
    it('teste demandas-consultar', () => {
        //abrindo a aba de consultar demandas
        demandas_consultar.irParaGLA()
        demandas_consultar.login()
        demandas_consultar.validarTextoPendencia()
        demandas_consultar.irAbaDemanda()
        demandas_consultar.irAbaDemandaConsultar()

        // //validando os campos da aba de demandas
        // demandas_consultar.validarTituloDemanda()
        // demandas_consultar.validarTituloDados()
        // demandas_consultar.validarFormRA()
        // demandas_consultar.validarFormEmpreendimento()
        // demandas_consultar.validarFormPossuiExigencia()
        // demandas_consultar.validarFormTipo()
        // demandas_consultar.validarFormNumero()
        // demandas_consultar.validarFormAno()
        // demandas_consultar.validarLabelPossuiReq()
        // demandas_consultar.validarLabelOrgaoDemanda()
        // demandas_consultar.validarLabelDescricao()
        // demandas_consultar.validarLabelPeriodoData()
        // demandas_consultar.validarLabelPeriodoVig()
        // demandas_consultar.validarLabelStatus()
        // demandas_consultar.validarLabelAlerta()
        // demandas_consultar.validarLabelPeriodoDias()
        // demandas_consultar.validarLabelTitular()
        // demandas_consultar.validarLabelSuplente()
        // demandas_consultar.validarLabelEmpreenResp()
        // demandas_consultar.validarLabelPeriodoRestante()
        // demandas_consultar.clicarBotao1()
        // demandas_consultar.clicarBotao2()
        // demandas_consultar.clicarBotao3()
        // demandas_consultar.validarFormAmbValTotal()
        // demandas_consultar.validarFormAmbVR()
        // demandas_consultar.validarFormAmbGrauImpacto()
        // demandas_consultar.validarFormAmbPrazoLimite()
        // demandas_consultar.validarFormAmbArquivada()
        // demandas_consultar.validarFormAmbDescricao()
        // demandas_consultar.validarFormAmbStatusRecurso()
        // demandas_consultar.validarFormAmbDataLimite()
        // demandas_consultar.validarFormAmbDiasRestantes()
        // demandas_consultar.validarFormAmbSaldoDevedor()
        // demandas_consultar.validarFormFlorestLegRef()
        // demandas_consultar.validarFormFlorestTipoVeg()
        // demandas_consultar.validarFormFlorestModalPag()
        // demandas_consultar.validarFormFlorestQtdMudasEst()
        // demandas_consultar.validarFormFlorestQtdMudasDef()
        // demandas_consultar.validarFormFlorestValorTotal()
        // demandas_consultar.validarFormFlorestAreaTotal()
        // demandas_consultar.validarFormFlorestDataLimite()
        // demandas_consultar.validarFormFlorestDiasRestantes()
        // demandas_consultar.validarFormFlorestArquivada()
        // demandas_consultar.validarFormFlorestDescricao()
        // demandas_consultar.validarFormFlorestStatusRecurso()
        // demandas_consultar.validarFormFlorestSaldoDevedor()
        // demandas_consultar.validarFormAIDataReceb()
        // demandas_consultar.validarFormAITipoSancao()
        // demandas_consultar.validarFormAIValorMulta()
        // demandas_consultar.validarFormAITipoAtividade()
        // demandas_consultar.validarFormAIOrgaoDescricao()
        // demandas_consultar.validarFormAIStatus()
        // demandas_consultar.validarFormAIInstancia()
        // demandas_consultar.validarFormAIDescricaoStatus()
        // demandas_consultar.validarFormAITituloPrazos()
        // demandas_consultar.validarFormAIPeriodosInstancia()
        // demandas_consultar.validarFormAIDataEnvio()
        // demandas_consultar.validarFormAIDataCiencia()
        // demandas_consultar.validarFormAIValorAtual()
        // demandas_consultar.validarFormAIDataLimiteEnvio()
        // demandas_consultar.validarFormAIDataLimitePagamento()
        // demandas_consultar.validarLabelDadosCA()
        // demandas_consultar.validarLabelDadosCF()
        // demandas_consultar.validarLabelDadosAI()
        // demandas_consultar.validarLabelValorCA()
        // demandas_consultar.validarLabelLegRef()
        // demandas_consultar.validarLabelDataRecebAI()
        // demandas_consultar.validarLabelDiasRestCA()
        // demandas_consultar.validarLabelValorCF()
        // demandas_consultar.validarLabelTipoSancao()
        // demandas_consultar.validarLabelSubtotalCA()
        // demandas_consultar.validarLabelDiasRestCF()
        // demandas_consultar.validarLabelTipoVegetacao()
        // demandas_consultar.validarLabelModPagamento()
        // demandas_consultar.validarLabelSubtotalMultaAI()
        //US039 - RN025 -
        // demandas_consultar.validarTabelaRA()
        // demandas_consultar.validarTabelaEmpreendimento()
        // demandas_consultar.validarTabelaTipo()
        // demandas_consultar.validarTabelaNumero()
        // demandas_consultar.validarTabelaAno()
        // demandas_consultar.validarTabelaOrgao()
        // demandas_consultar.validarTabelaDiasRest()
        // demandas_consultar.validarTabelaAlerta()
        // demandas_consultar.validarTabelaTitular()
        // demandas_consultar.validarTabelaAcao()
        //
        // //teste de adicionar e apagar os campos
        // demandas_consultar.seletorRAFormGeral()
        // demandas_consultar.seletorDropdown('RA-I - BRASILIA ')
        // cy.wait(4000)
        // demandas_consultar.clicarBotao()
        // demandas_consultar.digitarValorComp('1000')
        // cy.wait(4000)
        // demandas_consultar.clicarBotaoPanel()
        // demandas_consultar.digitarDataRecebInicio('2022-01-01')
        // cy.wait(3000)
        // demandas_consultar.limparPesquisa()
        //
        // //testando o campo de pesquisa
        // demandas_consultar.selecionarRA()
        // demandas_consultar.seletorDropdown('RA-I - BRASILIA ')
        // demandas_consultar.clicarBotaoPesquisar()
        //
        // //CADASTRAR DEMANDA
        // demandas_consultar.clicarBotaoCadastro()         // -- US033 - RN015 Caminhos ABA Nova Demanda --
        //
        // //Validar textos
        // demandas_consultar.validarTitulo()                // -- US033 - RN015 identificação/título--
        // demandas_consultar.validarTituloNovaDemanda()
        // demandas_consultar.validarAccordionDadosGerais()
        // demandas_consultar.validarAccordionDadosCA()
        // demandas_consultar.validarAccordionDadosCF()
        // demandas_consultar.validarAccordionDadosAI()
        // demandas_consultar.clicarAcordeaoCompAmb()
        // demandas_consultar.clicarAcordeaoCompFlo()
        // demandas_consultar.clicarAcordeaoComInf()
        // demandas_consultar.validarFormRA_Especifico()
        // demandas_consultar.validarFormEmpreendimento_Especifico()
        // demandas_consultar.validarFormTipo_Especifico()
        // demandas_consultar.validarFormNumero_Especifico()
        // demandas_consultar.validarFormAno_Especifico()
        // demandas_consultar.validarFormOrgaoDemanda_Especifico()
        // demandas_consultar.validarFormProcessoSEI_Especifico()
        // demandas_consultar.validarFormDataPublicacao_Especifico()
        // demandas_consultar.validarFormVigenciaDias_Especifico()
        // demandas_consultar.validarFormTitular_Especifico()
        // demandas_consultar.validarFormSuplente_Especifico()
        // demandas_consultar.validarFormDescricao_Especifico()
        //
        //
        // //-- EU001 - US033 - RN019 - RN021 --
        // demandas_consultar.selecionarTipo()
        // demandas_consultar.seletorDropdown('AA - Autorização Ambiental ')
        // demandas_consultar.validaCompenAmbNotCheck()
        // demandas_consultar.validaCompenFloNotCheck()
        // demandas_consultar.selecionarTipo()
        // demandas_consultar.seletorDropdown('LP - Licença Prévia')
        // demandas_consultar.validaCompenAmbCheck()
        // demandas_consultar.validaCompenFloCheck()
        //
        //
        function cadastroDemanda(tipo,numero){
            demandas_consultar.selecionarReg()
            demandas_consultar.seletorDropdown('RA-I - BRASILIA ')
            demandas_consultar.seletorEmpreendimento()
            cy.wait(2000)
            demandas_consultar.seletorDropdown('103 - Estagio de produção ')
            demandas_consultar.adicionarEmpreendimento()
            demandas_consultar.selecionarTipo()
            demandas_consultar.seletorDropdown(tipo)
            demandas_consultar.digitarNumDemanda(numero)
            demandas_consultar.digitarAnoDemanda(2026)
            demandas_consultar.selecionarOrgao()
            demandas_consultar.seletorDropdown('ABDI - AGENCIA BRASILEIRA DE DESENVOLVIMENTO INDUSTRIAL ')
            demandas_consultar.digitarData('2025-07-10')
            demandas_consultar.digitarVigencia('6')
            demandas_consultar.digitarDescricao('teste123')
            demandas_consultar.digitarSeiOrgao('111111')
            demandas_consultar.digitarNRProcesso('11111111')
            demandas_consultar.digitarAnoProcesso('2025')
        }

        function salvarDemanda(){
            demandas_consultar.botaoSalvar()
            demandas_consultar.clicarModalSalvar()
            demandas_consultar.modalSim()
        }
        //
        // //CADASTRAR DEMANDA COM COMPENSAÇÃO AMBIENTAL
        // cy.reload(true)
        // cadastroDemanda('Licença de Operação','10000')
        // // -- EU001 - US033 - RN063 - PRAZOS EM DIAS --
        // demandas_consultar.marcarCompensAmb()
        // demandas_consultar.validarPrazoHabilitado()
        // demandas_consultar.checkPossuiPrazo()
        // demandas_consultar.validarPrazoDesabilitado()
        // // -- EU001 - US033 - RN064 - SEI DOC DO RECURSO ADMINISTRATIVO --
        // demandas_consultar.clicarStatusRecAdm()
        // demandas_consultar.seletorDropdown('Deferido')
        // demandas_consultar.validarSeiDocRecAdmHabilitado()
        // demandas_consultar.digitarPrazoDias(111111) //(09)
        // demandas_consultar.clicarStatusRecAdm()
        // demandas_consultar.seletorDropdown('A protocolar')
        // demandas_consultar.validarSeiDocRecAdmDesabilitado()
        // demandas_consultar.digitarValorTotalCompAmb('1011151113111212')  //(04)
        // demandas_consultar.digitarValorRef('111111111111111') //(05)
        // demandas_consultar.digitarGrauImpacto(11111) //(06)
        // demandas_consultar.digitarSeiDoc('00000001') //(07)
        // demandas_consultar.dgitarDescrCompAmb('a'.repeat(1001)) //(11)
        // demandas_consultar.selecionarStatusRecAdm()
        // demandas_consultar.seletorDropdown('Não se aplica')  //(12)
        // salvarDemanda()
        //
        //
        // // //CADASTRAR DEMANDA COM AUTO DE INFRAÇÃO
        // cy.reload(true)
        // cadastroDemanda('Auto de Infração','20000')
        // demandas_consultar.valorMultaDesabilitado()                //US043 - RN073 - VALOR DA MULTA DESABILITADO
        // demandas_consultar.digitarDataRecebAI('2020-01-01')
        // demandas_consultar.selecionarTipoSancao()
        // demandas_consultar.seletorDropdown('Multa Simples')  //RN240
        // demandas_consultar.valorMultaHabilitado()                  //US043 - RN073 - VALOR DA MULTA HABILITADO
        // demandas_consultar.digitarValorMulta(10000)
        // demandas_consultar.selecionarTipoAtividade()
        // demandas_consultar.seletorDropdown('Obra de Infraestrutura')
        // demandas_consultar.digitarDataRecebimentoAI('2020-01-01')
        // demandas_consultar.digitarMotivo('motivo')
        // demandas_consultar.selecionarStatusAI()
        // demandas_consultar.seletorDropdown('Em análise inicial pela GEMAM')
        // demandas_consultar.instanciaRecDesab()                  //US043 - RN074 - INSTÂNCIA RECURSAL DESABILITADA
        // demandas_consultar.digitarDataDecisao('2000-01-01')
        // demandas_consultar.salvarAutoInfracao()
        // demandas_consultar.mensagemAlertaEmail()               //US043 - RN017 - Mensagem de alerta de e-mail quando salvar
        // demandas_consultar.clicarModalSalvar()
        // demandas_consultar.modalOk()
        // demandas_consultar.validarMSGObrigatoriaValorMulta() //US043 - RN075,RN076 E RN077  - VALOR DA MULTA OBRIGATÓRIO
        // demandas_consultar.digitarValorMultaInstancia(1000)
        // salvarDemanda()




        //
        //
        // //CADASTRAR DEMANDA COM COMPENSAÇÃO FLORESTAL  //EU002 - US036 -
        // function selecionarLegislacaoRef(legislacao){
        //     demandas_consultar.selecionarLegislacaoReferencia()
        //     demandas_consultar.seletorDropdown(legislacao)
        // }
        // function selecionarTipoVegetacao(tipo){
        //     demandas_consultar.selecionarTipoVegetacao()
        //     demandas_consultar.seletorDropdown(tipo)
        // }
        // function selecionarModalidadePagamento(modalidade){
        //     demandas_consultar.selecionarModalidadePagamento()
        //     demandas_consultar.seletorDropdown(modalidade)
        // }
        // cy.reload(true)
        // cadastroDemanda('Licença de Operação','3000')
        // demandas_consultar.marcarCompensFlorestal()
        // selecionarLegislacaoRef('Decreto 39.469/2018')
        // demandas_consultar.validaTipoVegetacaoHab()                       //RN065 - TIPO DE VEGETAÇÃO HABILITADO
        // selecionarLegislacaoRef('Decreto 14.783/1993')
        // demandas_consultar.validaTipoVegetacaoDesab()                     //RN065 - TIPO DE VEGETAÇÃO DESABILITADO
        // selecionarLegislacaoRef('Decreto 39.469/2018')
        // selecionarTipoVegetacao('Remanescentes')
        // selecionarModalidadePagamento('Pecúnia')
        // demandas_consultar.areaTotalDesabilitada()                       //RN070 - ÁREA TOTAL DESABILITADA(HA)
        // selecionarModalidadePagamento('Servidão Ambiental')
        // demandas_consultar.areaTotalHabilitada()                         //RN070 - ÁREA TOTAL HABILITADA(HA)
        // demandas_consultar.selecionarModalidadePagamento()
        // demandas_consultar.validaOpcoesDropdown('Pecúnia','Recomposição (Decreto 39.469/2018, plantio) ','Serviços em UC ','Servidão Ambiental ','Dação em Pagamento ')
        // selecionarTipoVegetacao('Árvores Isoladas')
        // demandas_consultar.validaModPagamentoDesab()                     // RN066 - PECÚNIA/DESABILITAOO
        // demandas_consultar.validarQuantMudasDesab()                      // RN067 - DESABILITADO
        // selecionarLegislacaoRef('Decreto 14.783/1993')
        // selecionarModalidadePagamento('Mudas 14.783/1993')
        // demandas_consultar.validarQuantMudasHab()                      // RN067 - HABILITADO
        // demandas_consultar.prazoEmDiasHab()                             // RN071 - HABILITADO
        // demandas_consultar.marcarPossuiPrazo()
        // demandas_consultar.prazoEmDiasDesab()                           // RN071 - DESABILITADO
        // demandas_consultar.selecionarStatusRecAdmCF()
        // demandas_consultar.seletorDropdown('Deferido')
        // demandas_consultar.validarSeiDOCRecADMHabilitado()              //RN072 - SEI DOC DO RECURSO ADMINISTRATIVO
        // demandas_consultar.selecionarStatusRecAdmCF()
        // demandas_consultar.seletorDropdown('A protocolar')
        // demandas_consultar.validarSeiDOCRecADMDesabilitado()            //RN072 - SEI DOC DO RECURSO ADMINISTRATIVO
        // //RN090 - ADIÇÃO DE MÚLTIPLAS CF
        // demandas_consultar.digitarQuantMudasEstimadas(1)
        // demandas_consultar.digitarQuantMudasDefinitivas(1)
        // demandas_consultar.digitarValorCF(1)
        // demandas_consultar.clicarBotaoAdicionar()
        // selecionarLegislacaoRef('Decreto 14.783/1993')
        // demandas_consultar.marcarPossuiPrazo()
        // demandas_consultar.selecionarStatusRecAdmCF()
        // demandas_consultar.seletorDropdown('A protocolar')
        // demandas_consultar.clicarBotaoAdicionar()
        // salvarDemanda()

        //PESQUISAR DEMANDA

        function pesquisarDemanda(numero){
            demandas_consultar.clicarAbaDemandas()
            demandas_consultar.clicarConsultarDemanda()
            demandas_consultar.seletorRAForm()
            demandas_consultar.seletorDropdown('RA-I - BRASILIA ')
            cy.wait(2000)
            demandas_consultar.selecionarEmpreendimentoPesquisa()
            demandas_consultar.seletorDropdown('103 - Estagio de produção ')
            demandas_consultar.clicarBotaoPesquisar()
            demandas_consultar.filtrarDemandaPesquisa(numero)
            demandas_consultar.clicarPrimeiroBotaoVisualizar()
        }

        // pesquisarDemanda('Produção')                              //US039 - RN089, RN095, RN096 - PESQUISA SEM CASE SENSISTIVE E DIFERENCIAÇÃO
        //GLA - EU087 - US007.1 - Botão Download Poligonal
        demandas_consultar.clicarBotaoPesquisar()
        demandas_consultar.filtrarDemandaPesquisa('sos Chamado 4924')
        demandas_consultar.clicarPrimeiroBotaoVisualizar()
        demandas_consultar.validarBotaoDownload()

        // //VISUALIZAR DEMANDA COMPENSAÇÃO AMBIENTAL
        // pesquisarDemanda(10000)
        // demandas_consultar.selecionarDadosEspecificosCA()
        // demandas_consultar.subtrairData('2025-07-16')               //US038 - R0079 - DIAS RESTANTES
        //
        // //VISUALIZAR DEMANDA COMPENSAÇÃO FLORESTAL
        // pesquisarDemanda(3000)
        // demandas_consultar.selecionarDadosEspecificosCF()
        // demandas_consultar.subtrairData('2025-07-10')              //US038 - RN081 - DIAS RESTANTES
        // //EXIGENCIAS
        // pesquisarDemanda('aero')
        // demandas_consultar.validarDemandaVinculaExigencia()             //US039 - RN224 - Módulo Demandas - Botão Vincular Exigências
        // demandas_consultar.validarStatusExigencia()                     //US039 - RN225 - Filtrar Demandas - Botão Vincular Exigências

        //VISUALIZAR DEMANDA AUTO DE INFRAÇÃO
        pesquisarDemanda(20000)
        demandas_consultar.selecionarDadosEspecificosAI()
        demandas_consultar.validarDataLimite() // EU011 - US041 - RN082, RN083, RN084 E RN085

        demandas_consultar.irParaRequerimentos() // EU087 - US007.2
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        






        // //CADASTRAR DEMANDA COM AUTO DE INFRAÇÃO
        //
        // cadastroDemanda('Auto de Infração','20000')
        // demandas_consultar.digitarDataRecebAI('2020-01-01')
        // demandas_consultar.selecionarTipoSancao()
        // demandas_consultar.seletorDropdown('Multa Simples')
        // demandas_consultar.digitarValorMulta(10000)
        // demandas_consultar.selecionarTipoAtividade()
        // demandas_consultar.seletorDropdown('Obra de Infraestrutura')
        // demandas_consultar.digitarMotivo('motivo')
        // demandas_consultar.selecionarStatusAI()
        // demandas_consultar.seletorDropdown('Recurso deferido')
        // demandas_consultar.selecionarInstanciaRecursal()
        // demandas_consultar.seletorDropdown('1ª instância')
        // salvarDemanda()



        // //DADOS DETALHADOS não sei onde e essa tela
        // demandas_consultar.validarVisualizarTituloDemanda()
        // demandas_consultar.validarVisualizarInfoEmpreendimentos()
        // demandas_consultar.validarVisualizarDadosGerais()
        // demandas_consultar.validarVisualizarInfoDocumento()
        // demandas_consultar.validarVisualizarCompensacaoAmbiental()
        // demandas_consultar.validarVisualizarCompensacaoFlorestal()
        // demandas_consultar.validarVisualizarAutoInfracao()
        // demandas_consultar.clicarAdicionar1()
        // demandas_consultar.clicarAdicionar2()
        // demandas_consultar.clicarAdicionar3()
        // demandas_consultar.clicarAdicionar4()
        // demandas_consultar.clicarAdicionar5()
        // demandas_consultar.validarWhidthTipo()
        // demandas_consultar.validarWhidthNumero()
        // demandas_consultar.validarWhidthAno()
        // demandas_consultar.validarWhidthOrgao()
        // demandas_consultar.validarWhidthNumeroSei()
        // demandas_consultar.validarWhidthProcesso()
        // demandas_consultar.validarWhidthDataPublicacao()
        // demandas_consultar.validarWhidthVigenciaDias()
        // demandas_consultar.validarWhidthDiasRestantes()
        // demandas_consultar.validarWhidthStatus()
        // demandas_consultar.validarWhidthAlertaPrazo()
        // demandas_consultar.validarWhidthTitular()
        // demandas_consultar.validarWhidthSuplente()
        // demandas_consultar.validarWhidthArquivadaSuspensaCancelada()
        // demandas_consultar.validarWhidthDataVencimento()
        // demandas_consultar.validarWhidthEstudoServicosRelacionados()
        // demandas_consultar.validarWhidthObservacaoProcessos()
        // demandas_consultar.validarWhidthDescricao()
        // demandas_consultar.validarWhidthRa()
        // demandas_consultar.validarWhidthEmpreendimento()
        // demandas_consultar.clicarAbaDoc()
        // cy.wait(3000)
        // demandas_consultar.clicarExigAba()
        // cy.wait(3000)
        // demandas_consultar.clicarReqAba()
        // cy.wait(3000)
        // demandas_consultar.clicarNovoEstudoAba()
        // cy.wait(3000)
        // demandas_consultar.clicarDemandaAba()

        // //EDITAR DEMANDA
        // demandas_consultar.clicarBotaoEditar()               // -- US033 - RN015 Caminhos Editar Demanda --
        // cy.wait(4000)



        // // validação da pesquisa
        // demandas_consultar.clicarAbaDemandas()
        // demandas_consultar.clicarAbaDemandas2()
        // cy.wait(2000)
        // demandas_consultar.clicarBotaoPesquisar()
        // demandas_consultar.clicarPrimeiroBotaoVisualizar()     // -- US033 - RN015 Caminhos Aba visualizar Demanda --
        // demandas_consultar.clicarBotaoVoltar()
        // demandas_consultar.clicarAbaDemandas()
        // demandas_consultar.clicarConsultarDemanda()
        // demandas_consultar.digitarDtPubInicio('2025-01-01')
        // demandas_consultar.clicarBotaoPesquisar()
        // demandas_consultar.gerarRelDemandaPDF()
        //
        // // validação do botão excluir
        // demandas_consultar.clicarPrimeiroBotaoVisualizar()
        // cy.wait(10000)
        // demandas_consultar.clicarExcluirDemanda()
        // demandas_consultar.clicarConfirmar()
    })
})
