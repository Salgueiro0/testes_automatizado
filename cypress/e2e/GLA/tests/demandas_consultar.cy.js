/// <reference types="cypress" />

import demandas_consultar from "../../../support/pages/demandas_consultar";

function cadastroDemanda(tipo,numero){
    demandas_consultar.selecionarReg({force:true})
    demandas_consultar.seletorDropdown('RA-I - BRASILIA ')
    cy.wait(2000)
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
    cy.wait(1000)
    demandas_consultar.modalSim()
}
function selecionarLegislacaoRef(legislacao){
    demandas_consultar.selecionarLegislacaoReferencia()
    demandas_consultar.seletorDropdown(legislacao)
}
function selecionarTipoVegetacao(tipo){
    demandas_consultar.selecionarTipoVegetacao()
    demandas_consultar.seletorDropdown(tipo)
}
function selecionarModalidadePagamento(modalidade){
    demandas_consultar.selecionarModalidadePagamento()
    demandas_consultar.seletorDropdown(modalidade)
}
function acessarDemanda(numero, acaoFinal) {
    demandas_consultar.clicarAbaDemandas();
    demandas_consultar.clicarConsultarDemanda();
    demandas_consultar.seletorRAForm();
    demandas_consultar.seletorDropdown('RA-I - BRASILIA ');
    cy.wait(2000);
    demandas_consultar.selecionarEmpreendimentoPesquisa();
    demandas_consultar.seletorDropdown('103 - Estagio de produção ');
    demandas_consultar.clicarBotaoPesquisar();
    demandas_consultar.filtrarDemandaPesquisa(numero);

    // acaoFinal é uma função que chama o botão certo
    acaoFinal();
}

function visualizarDemanda(numero) {
    acessarDemanda(numero, () => demandas_consultar.clicarPrimeiroBotaoVisualizar());
}
function mensagemObrigatoriaPagamento() {
    demandas_consultar.clicarSalvar()
    demandas_consultar.validarMsgObrigatorio()
    demandas_consultar.clicarOk()
}

function editarDemanda(numero) {
    acessarDemanda(numero, () => demandas_consultar.clicarPrimeiroBotaoEditar());
}

function excluirDemanda(numero) {
    acessarDemanda(numero, () => demandas_consultar.clicarPrimeiroBotaoExcluir());
}
function irConsultarDemandas(){
    demandas_consultar.irParaGLA()
    demandas_consultar.login()
    demandas_consultar.validarTextoPendencia()
    demandas_consultar.irAbaDemanda()
    demandas_consultar.irAbaDemandaConsultar()
}

describe('DEMANDAS', () => {
    beforeEach(() => {
        cy.viewport(1980, 1200)
    })
    it('VALIDAÇÕES GERAIS', () => {
        irConsultarDemandas()
        demandas_consultar.clicarBotaoCadastro()         // -- US033 - RN015 Caminhos ABA Nova Demanda --
        //-- EU001 - US033 - RN019 - RN021 --
        demandas_consultar.selecionarTipo()
        demandas_consultar.seletorDropdown('AA - Autorização Ambiental ')
        demandas_consultar.validaCompenAmbNotCheck()
        demandas_consultar.validaCompenFloNotCheck()
        demandas_consultar.selecionarTipo()
        demandas_consultar.seletorDropdown('LP - Licença Prévia')
        demandas_consultar.validaCompenAmbCheck()
        demandas_consultar.validaCompenFloCheck()
        //GLA - EU087 - US007.1 - Botão Download Poligonal
        demandas_consultar.clicarAbaDemandas()
        demandas_consultar.clicarConsultarDemanda()
        demandas_consultar.clicarBotaoPesquisar()
        demandas_consultar.filtrarDemandaPesquisa('sos Chamado 4924')
        demandas_consultar.clicarPrimeiroBotaoVisualizar()              // -- US033 - RN015 Caminhos Aba visualizar Demanda --
        demandas_consultar.validarBotaoDownload()
        //EXIGENCIAS
        visualizarDemanda('aero')
        demandas_consultar.validarDemandaVinculaExigencia()             //US039 - RN224 - Módulo Demandas - Botão Vincular Exigências
        demandas_consultar.validarStatusExigencia()                     //US039 - RN225 - Filtrar Demandas - Botão Vincular Exigências
    })
    it('DEMANDA COM AUTO DE INFRAÇÃO', () => {
        irConsultarDemandas()
        //CADASTRAR DEMANDA
        demandas_consultar.clicarBotaoCadastro()         // -- US033 - RN015 Caminhos ABA Nova Demanda --
        //CADASTRAR DEMANDA COM AUTO DE INFRAÇÃO
        cy.reload(true)
        cadastroDemanda('Auto de Infração','20000')
        demandas_consultar.valorMultaDesabilitado()                //US043 - RN073 - VALOR DA MULTA DESABILITADO
        demandas_consultar.digitarDataRecebAI('2020-01-01')
        demandas_consultar.selecionarTipoSancao()
        demandas_consultar.seletorDropdown('Multa Simples')  //RN240  - EU010 - US043 - Tipos de Sanção - Permitir Múltipla Escolha
        demandas_consultar.valorMultaHabilitado()                  //US043 - RN073 - VALOR DA MULTA HABILITADO
        demandas_consultar.digitarValorMulta('1'.repeat(16)) //EU010 - US043 Valor da Multa  15 caracteres
        demandas_consultar.selecionarTipoAtividade()
        demandas_consultar.seletorDropdown('Obra de Infraestrutura') //EU010 - US043 - Tipo de Atividade - Obrigatório Multipla escolha
        demandas_consultar.digitarDataRecebimentoAI('2020-01-01')
        demandas_consultar.digitarMotivo('a'.repeat(2001)) //EU010 - US043 Descrição do AI (motivo) 2000 caracteres
        demandas_consultar.selecionarStatusAI()
        demandas_consultar.seletorDropdown('Em análise inicial pela GEMAM') //EU010 - US043 - Status do AI - Só pode selecionar 1
        demandas_consultar.instanciaRecDesab()                  //US043 - RN074 - INSTÂNCIA RECURSAL DESABILITADA
        demandas_consultar.digitarDataDecisao('2000-01-01')
        demandas_consultar.botaoSubmit()
        demandas_consultar.mensagemAlertaEmail()               //US043 - RN017 - Mensagem de alerta de e-mail quando salvar
        demandas_consultar.clicarModalSalvar()
        demandas_consultar.modalOk()
        demandas_consultar.validarMSGObrigatoriaValorMulta() //US043 - RN075,RN076 E RN077  - VALOR DA MULTA OBRIGATÓRIO
        demandas_consultar.digitarValorMultaInstancia(1000)
        salvarDemanda()

        //VISUALIZAR DEMANDA AUTO DE INFRAÇÃO
        visualizarDemanda(20000)
        demandas_consultar.selecionarDadosEspecificosAI()
        demandas_consultar.validarDataLimite() // EU011 - US041 - RN082, RN083, RN084 E RN085
        demandas_consultar.demandaSemPagamento() //EU036 - US045 - RN136 Pagamentos - Tabelas
        demandas_consultar.adicionarPagamentoAI('2020-01-01','1000')
        demandas_consultar.validarSaldoAI() //EU087 - US007.6 - RN241 - Saldo do Auto de Infração
        demandas_consultar.excluirPagamentoAI()
        demandas_consultar.irParaRequerimentos() // EU087 - US007.2

        //EDITAR DEMANDA - EXCLUIR DEMANDA // -- US033 - RN015 Caminhos Editar Demanda --
        editarDemanda(20000)
        demandas_consultar.selecionarTipo()
        demandas_consultar.seletorDropdown('Licença de Operação')
        demandas_consultar.editarSalvar()
        demandas_consultar.clicarExcluirDemanda()
        demandas_consultar.clicarConfirmar()
    })
    it('DEMANDA COM COMPENSAÇÃO AMBIENTAL', () => {
        irConsultarDemandas()
        //CADASTRAR DEMANDA SEM PRAZO LIMITE
        demandas_consultar.clicarBotaoCadastro()         // -- US033 - RN015 Caminhos ABA Nova Demanda --
        cadastroDemanda('Licença de Operação','10000')
        // -- EU001 - US033 - RN063 - PRAZOS EM DIAS --
        demandas_consultar.marcarCompensAmb()
        demandas_consultar.validarPrazoHabilitado()
        demandas_consultar.checkPossuiPrazo()
        demandas_consultar.validarPrazoDesabilitado()
        demandas_consultar.selecionarArquivada()
        // -- EU001 - US033 - RN064 - SEI DOC DO RECURSO ADMINISTRATIVO --
        demandas_consultar.clicarStatusRecAdm()
        demandas_consultar.seletorDropdown('Deferido')
        demandas_consultar.validarSeiDocRecAdmHabilitado()
        demandas_consultar.digitarPrazoDias(111111) //(09)
        demandas_consultar.clicarStatusRecAdm()
        demandas_consultar.seletorDropdown('A protocolar')
        demandas_consultar.validarSeiDocRecAdmDesabilitado()
        demandas_consultar.digitarValorTotalCompAmb('1000')  //(04)
        demandas_consultar.digitarValorRef('111111111111111') //(05)
        demandas_consultar.digitarGrauImpacto(11111) //(06)
        demandas_consultar.digitarSeiDoc('00000001') //(07)
        demandas_consultar.dgitarDescrCompAmb('a'.repeat(1001)) //(11)
        demandas_consultar.selecionarStatusRecAdm()
        demandas_consultar.seletorDropdown('Não se aplica')  //(12)
        salvarDemanda()
        //VISUALIZAR DEMANDA COMPENSAÇÃO AMBIENTAL
        visualizarDemanda(10000)
        demandas_consultar.selecionarDadosEspecificosCA()
        demandas_consultar.demandaArquivada()   //EU087 - US007.7 RN244 - Dados Específicos de CA - Arquivada
        //PAGAMENTOS
        demandas_consultar.botaoAdicionarPagamento()
        demandas_consultar.seiCertidaoQuitacaoDesab()       //EU034 - US067 - Desabilitado - RN131
        demandas_consultar.digitarDataPagamento('2020-01-01')
        demandas_consultar.digitarValorPagamento(1)
        mensagemObrigatoriaPagamento()                      //EU034 - US067 - Status do Pagamento (Obrigatório)
        demandas_consultar.selecionarStatusPagamento()
        demandas_consultar.seiCertidaoQuitacaoHab()         //EU034 - US067 - Habilitado - RN131
        demandas_consultar.limparValorPagamento()
        mensagemObrigatoriaPagamento()                      //EU034 - US067 - Valor do Pagamento (Obrigatório)
        demandas_consultar.digitarValorPagamento(1)
        demandas_consultar.limparDataPagamento()
        mensagemObrigatoriaPagamento()                      //EU034 - US067 - Data do Pagamento (Obrigatório)



        cy.reload(true)
        //DEMANDA SEM PRAZO LIMITE
        demandas_consultar.selecionarDadosEspecificosCA()
        demandas_consultar.dataPubVigenciaDias() //EU003 - US035 - RN078 - DATA LIMITE PARA CUMPRIMENTO DA CA
        demandas_consultar.subtrairData('2025-07-16')               //US038 - R0079 - DIAS RESTANTES
        demandas_consultar.validarSaldoPositivo()                        // EU037 - US069 - RN130
        demandas_consultar.adicionarPagamentoCA('2020-01-01','1000','Quitado')
        cy.reload(true)
        demandas_consultar.selecionarDadosEspecificosCA()
        demandas_consultar.validarSaldo0()                              // EU037 - US069 - RN130
        demandas_consultar.adicionarPagamentoCA('2020-01-01','2000','Quitado')
        cy.reload(true)
        demandas_consultar.selecionarDadosEspecificosCA()
        demandas_consultar.validarSaldoPagoAMais()                      // EU037 - US069 - RN130
        demandas_consultar.excluirPagamentos()

        // DEMANDA - EXCLUIR DEMANDA // -- US033 - RN015 Caminhos Editar Demanda --
        editarDemanda(10000)
        demandas_consultar.abrirCompAmb()
        demandas_consultar.editarSalvar()
        demandas_consultar.clicarExcluirDemanda()
        demandas_consultar.clicarConfirmar()

        //CADASTRAR DEMANDA COM PRAZO LIMITE
        cy.wait(2000)
        demandas_consultar.clicarBotaoCadastro()         // -- US033 - RN015 Caminhos ABA Nova Demanda --
        cadastroDemanda('Licença de Operação','10000')
        demandas_consultar.marcarCompensAmb()
        demandas_consultar.digitarValorTotalCompAmb(1000)
        demandas_consultar.digitarPrazoDiasCA(10) //prazo 10 dias
        demandas_consultar.clicarStatusRecAdm()
        demandas_consultar.seletorDropdown('A protocolar')
        salvarDemanda()
        visualizarDemanda(10000)
        demandas_consultar.selecionarDadosEspecificosCA()
        demandas_consultar.dataPubPrazoDias() //EU003 - US035 - RN078 - DATA LIMITE PARA CUMPRIMENTO DA CA

        //XCLUIR DEMANDA
        editarDemanda(10000)
        demandas_consultar.abrirCompAmb()
        demandas_consultar.editarSalvar()
        demandas_consultar.clicarExcluirDemanda()
        demandas_consultar.clicarConfirmar()
    })
    it('DEMANDA COM COMPENSAÇÃO FLORESTAL', () => {
        irConsultarDemandas()
        //CADASTRAR DEMANDA //EU002 - US036 -
        demandas_consultar.clicarBotaoCadastro()         // -- US033 - RN015 Caminhos ABA Nova Demanda --
        cy.reload(true)
        cadastroDemanda('Licença de Operação','3000')
        demandas_consultar.marcarCompensFlorestal()
        selecionarLegislacaoRef('Decreto 39.469/2018')
        demandas_consultar.validaTipoVegetacaoHab()                       //RN065 ou RN052  - TIPO DE VEGETAÇÃO HABILITADO
        selecionarLegislacaoRef('Decreto 14.783/1993')
        demandas_consultar.validaTipoVegetacaoDesab()                     //RN065 ou RN052  - TIPO DE VEGETAÇÃO DESABILITADO
        selecionarLegislacaoRef('Decreto 39.469/2018')
        selecionarTipoVegetacao('Remanescentes')
        selecionarModalidadePagamento('Pecúnia')
        demandas_consultar.areaTotalDesabilitada()                       //RN070 - ÁREA TOTAL DESABILITADA(HA)
        selecionarModalidadePagamento('Servidão Ambiental')
        demandas_consultar.areaTotalHabilitada()                         //RN070 - ÁREA TOTAL HABILITADA(HA)
        demandas_consultar.selecionarModalidadePagamento()
        demandas_consultar.validaOpcoesDropdown('Pecúnia','Recomposição (Decreto 39.469/2018, plantio) ','Serviços em UC ','Servidão Ambiental ','Dação em Pagamento ')
        selecionarTipoVegetacao('Árvores Isoladas')
        demandas_consultar.validaModPagamentoDesab()                     // RN066 - PECÚNIA/DESABILITAOO
        demandas_consultar.validarQuantMudasDesab()                      // RN067 OU RN068 - DESABILITADO
        selecionarLegislacaoRef('Decreto 14.783/1993')
        selecionarModalidadePagamento('Mudas 14.783/1993')
        demandas_consultar.validarQuantMudasHab()                      // RN067 OU RN068 - HABILITADO
        demandas_consultar.prazoEmDiasHab()                             // RN071 - HABILITADO
        demandas_consultar.marcarPossuiPrazo()
        demandas_consultar.prazoEmDiasDesab()                           // RN071 - DESABILITADO
        demandas_consultar.selecionarStatusRecAdmCF()
        demandas_consultar.seletorDropdown('Deferido')
        demandas_consultar.validarSeiDOCRecADMHabilitado()              //RN072 - SEI DOC DO RECURSO ADMINISTRATIVO
        demandas_consultar.selecionarStatusRecAdmCF()
        demandas_consultar.seletorDropdown('A protocolar')
        demandas_consultar.validarSeiDOCRecADMDesabilitado()            //RN072 - SEI DOC DO RECURSO ADMINISTRATIVO
        //RN090 - ADIÇÃO DE MÚLTIPLAS CF
        //SEM PRAZO LIMITE
        demandas_consultar.digitarQuantMudasEstimadas(1)
        demandas_consultar.digitarQuantMudasDefinitivas(1)
        demandas_consultar.digitarValorCF(1000)
        demandas_consultar.clicarBotaoAdicionar()
        selecionarLegislacaoRef('Decreto 39.469/2018')
        selecionarTipoVegetacao('Remanescentes')
        selecionarModalidadePagamento('Dação em Pagamento ')
        demandas_consultar.digitarAreaTotal()
        demandas_consultar.digitarValorCF(1000)
        demandas_consultar.marcarPossuiPrazo()
        demandas_consultar.selecionarStatusRecAdmCF()
        demandas_consultar.seletorDropdown('A protocolar')
        demandas_consultar.clicarBotaoAdicionar()
        //COM PRAZO LIMITE
        selecionarLegislacaoRef('Decreto 14.783/1993')
        selecionarModalidadePagamento('Pecúnia')
        demandas_consultar.digitarValorCF(1000)
        demandas_consultar.selecionarStatusRecAdmCF()
        demandas_consultar.seletorDropdown('A protocolar')
        demandas_consultar.digitarPrazoDiasCF(10)
        demandas_consultar.clicarBotaoAdicionar()
        salvarDemanda()
        // cy.contains('button','OK').click()
        //GLA - EU009 - US047 - MENSAGEM EXCLUIR DEMANDA COM / CA- CF- AI
        excluirDemanda(3000)
        demandas_consultar.clicarConfirmar()
        demandas_consultar.validarMSGExclusao()
        demandas_consultar.modalOk()

        //VISUALIZAR DEMANDA
        visualizarDemanda(3000)
        //COM MUDAS
        demandas_consultar.selecionarDadosEspecificosCF()
        demandas_consultar.dataPubPrazoDiasCF()                 //EU004 - US038 - RN080 - DATA LIMITE PARA CUMPRIMENTO DA CF  - Data de Publicação (Demanda) + Prazo em Dias (CF)
        demandas_consultar.dataPubVigenciaDiasCF()              //EU004 - US038 - RN080 - DATA LIMITE PARA CUMPRIMENTO DA CF  -  Data de Publicação (Demanda) + Vigência em Dias (Demanda)
        demandas_consultar.subtrairData('2025-07-10')                     //US038 - RN081 - DIAS RESTANTES
        demandas_consultar.validarSaldoPositivoCFMudas()                       //EU038 - US070 - RN134 - RN138
        demandas_consultar.adicionarPagamentoCAMudas('2020-01-01','1000','Quitado')
        demandas_consultar.clicarBotaoVoltar()
        visualizarDemanda(3000)
        demandas_consultar.selecionarDadosEspecificosCF()
        demandas_consultar.validarSaldo0CFMudas()                              //EU038 - US070 - RN134 - RN138
        demandas_consultar.adicionarPagamentoCAMudas('2020-01-01','2000','Quitado')
        demandas_consultar.clicarBotaoVoltar()
        visualizarDemanda(3000)
        demandas_consultar.selecionarDadosEspecificosCF()
        demandas_consultar.validarSaldoPagoAMaisCFMudas()                      //EU038 - US070 - RN134 - RN138
        demandas_consultar.excluirPagamentosCF()

        //COM ha
        demandas_consultar.validarSaldoPositivoCFha()                          //EU038 - US070 - RN134 - RN138
        demandas_consultar.adicionarPagamentoCAha('2020-01-01','1000','Quitado')
        demandas_consultar.clicarBotaoVoltar()
        visualizarDemanda(3000)
        demandas_consultar.selecionarDadosEspecificosCF()
        demandas_consultar.validarSaldo0CFha()                                //EU038 - US070 - RN134 - RN138
        demandas_consultar.adicionarPagamentoCAha('2020-01-01','200','Quitado')
        demandas_consultar.clicarBotaoVoltar()
        visualizarDemanda(3000)
        demandas_consultar.selecionarDadosEspecificosCF()
        demandas_consultar.validarSaldoPagoAMaisCFha()                        //EU038 - US070 - RN134 - RN138
        demandas_consultar.excluirPagamentosCF()

        //SEM ha E MUDAS

        demandas_consultar.validarSaldoPositivoCF()                          //EU038 - US070 - RN134 - RN138
        demandas_consultar.adicionarPagamentoCA('2020-01-01','1000','Quitado')
        demandas_consultar.clicarBotaoVoltar()
        visualizarDemanda(3000)
        demandas_consultar.selecionarDadosEspecificosCF()
        demandas_consultar.validarSaldo0CF()                                //EU038 - US070 - RN134 - RN138
        demandas_consultar.adicionarPagamentoCA('2020-01-01','2000','Quitado')
        demandas_consultar.clicarBotaoVoltar()
        visualizarDemanda(3000)
        demandas_consultar.selecionarDadosEspecificosCF()
        demandas_consultar.validarSaldoPagoAMaisCF()                        //EU038 - US070 - RN134 - RN138
        demandas_consultar.excluirPagamentosCF()

        //EDITAR DEMANDA - EXCLUIR DEMANDA // -- US033 - RN015 Caminhos Editar Demanda --
        editarDemanda(3000)
        demandas_consultar.marcarCompensFlorestal()
        demandas_consultar.editarSalvar()
        demandas_consultar.clicarExcluirDemanda()
        demandas_consultar.clicarConfirmar()
    })


    it.only('Validar campos de texto', () => {
        //RN120
        irConsultarDemandas()
        demandas_consultar.validarTituloDemanda()
        demandas_consultar.validarTituloDados()
        demandas_consultar.validarFormRA()
        demandas_consultar.validarFormEmpreendimento()
        demandas_consultar.validarFormPossuiExigencia()
        demandas_consultar.validarFormTipo()
        demandas_consultar.validarFormNumero()
        demandas_consultar.validarFormAno()
        demandas_consultar.validarLabelPossuiReq()
        demandas_consultar.validarLabelOrgaoDemanda()
        demandas_consultar.validarLabelDescricao()
        demandas_consultar.validarLabelPeriodoData()
        demandas_consultar.validarLabelPeriodoVig()
        demandas_consultar.validarLabelStatus()
        demandas_consultar.validarLabelAlerta()
        demandas_consultar.validarLabelPeriodoDias()
        demandas_consultar.validarLabelTitular()
        demandas_consultar.validarLabelSuplente()
        demandas_consultar.validarLabelEmpreenResp()
        demandas_consultar.validarLabelPeriodoRestante()
        demandas_consultar.clicarBotao1()
        demandas_consultar.clicarBotao2()
        demandas_consultar.clicarBotao3()
        demandas_consultar.validarFormAmbValTotal()
        demandas_consultar.validarFormAmbVR()
        demandas_consultar.validarFormAmbGrauImpacto()
        demandas_consultar.validarFormAmbPrazoLimite()
        demandas_consultar.validarFormAmbArquivada()
        demandas_consultar.validarFormAmbDescricao()
        demandas_consultar.validarFormAmbStatusRecurso()
        demandas_consultar.validarFormAmbDataLimite()
        demandas_consultar.validarFormAmbDiasRestantes()
        demandas_consultar.validarFormAmbSaldoDevedor()
        demandas_consultar.validarFormFlorestLegRef()
        demandas_consultar.validarFormFlorestTipoVeg()
        demandas_consultar.validarFormFlorestModalPag()
        demandas_consultar.validarFormFlorestQtdMudasEst()
        demandas_consultar.validarFormFlorestQtdMudasDef()
        demandas_consultar.validarFormFlorestValorTotal()
        demandas_consultar.validarFormFlorestAreaTotal()
        demandas_consultar.validarFormFlorestDataLimite()
        demandas_consultar.validarFormFlorestDiasRestantes()
        demandas_consultar.validarFormFlorestArquivada()
        demandas_consultar.validarFormFlorestDescricao()
        demandas_consultar.validarFormFlorestStatusRecurso()
        demandas_consultar.validarFormFlorestSaldoDevedor()
        demandas_consultar.validarFormAIDataReceb()
        demandas_consultar.validarFormAITipoSancao()
        demandas_consultar.validarFormAIValorMulta()
        demandas_consultar.validarFormAITipoAtividade()
        demandas_consultar.validarFormAIOrgaoDescricao()
        demandas_consultar.validarFormAIStatus()
        demandas_consultar.validarFormAIInstancia()
        demandas_consultar.validarFormAIDescricaoStatus()
        demandas_consultar.validarFormAITituloPrazos()
        demandas_consultar.validarFormAIPeriodosInstancia()
        demandas_consultar.validarFormAIDataEnvio()
        demandas_consultar.validarFormAIDataCiencia()
        demandas_consultar.validarFormAIValorAtual()
        demandas_consultar.validarFormAIDataLimiteEnvio()
        demandas_consultar.validarFormAIDataLimitePagamento()
        demandas_consultar.validarLabelDadosCA()
        demandas_consultar.validarLabelDadosCF()
        demandas_consultar.validarLabelDadosAI()
        demandas_consultar.validarLabelValorCA()
        demandas_consultar.validarLabelLegRef()
        demandas_consultar.validarLabelDataRecebAI()
        demandas_consultar.validarLabelDiasRestCA()
        demandas_consultar.validarLabelValorCF()
        demandas_consultar.validarLabelTipoSancao()
        demandas_consultar.validarLabelSubtotalCA()
        demandas_consultar.validarLabelDiasRestCF()
        demandas_consultar.validarLabelTipoVegetacao()
        demandas_consultar.validarLabelModPagamento()
        demandas_consultar.validarLabelSubtotalMultaAI()
        //- US039 - RN025 -
        demandas_consultar.validarTabelaRA()
        demandas_consultar.validarTabelaEmpreendimento()
        demandas_consultar.validarTabelaTipo()
        demandas_consultar.validarTabelaNumero()
        demandas_consultar.validarTabelaAno()
        demandas_consultar.validarTabelaOrgao()
        demandas_consultar.validarTabelaDiasRest()
        demandas_consultar.validarTabelaAlerta()
        demandas_consultar.validarTabelaTitular()
        demandas_consultar.validarTabelaAcao()

        visualizarDemanda('Produção')                              //US039 - RN089, RN095, RN096,US040 - RN092 - PESQUISA SEM CASE SENSISTIVE E DIFERENCIAÇÃO

        //DADOS DETALHADOS
        // EU027 - US061 | EU028 - US062 | EU029 - US046
        demandas_consultar.validarVisualizarTituloDemanda()
        demandas_consultar.validarVisualizarInfoEmpreendimentos()
        demandas_consultar.validarVisualizarDadosGerais()
        demandas_consultar.validarVisualizarInfoDocumento()
        demandas_consultar.validarVisualizarCompensacaoAmbiental()
        demandas_consultar.validarVisualizarCompensacaoFlorestal()
        demandas_consultar.validarVisualizarAutoInfracao()
        demandas_consultar.clicarAdicionar1()
        demandas_consultar.clicarAdicionar2()
        demandas_consultar.clicarAdicionar3()
        demandas_consultar.clicarAdicionar4()
        demandas_consultar.clicarAdicionar5()
        demandas_consultar.validarWhidthTipo()
        demandas_consultar.validarWhidthNumero()
        demandas_consultar.validarWhidthAno()
        demandas_consultar.validarWhidthOrgao()
        demandas_consultar.validarWhidthNumeroSei()
        demandas_consultar.validarWhidthProcesso()
        demandas_consultar.validarWhidthDataPublicacao()
        demandas_consultar.validarWhidthVigenciaDias()
        demandas_consultar.validarWhidthDiasRestantes()
        demandas_consultar.validarWhidthStatus()
        demandas_consultar.validarWhidthAlertaPrazo()
        demandas_consultar.validarWhidthTitular()
        demandas_consultar.validarWhidthSuplente()
        demandas_consultar.validarWhidthArquivadaSuspensaCancelada()
        demandas_consultar.validarWhidthDataVencimento()
        demandas_consultar.validarWhidthEstudoServicosRelacionados()
        demandas_consultar.validarWhidthObservacaoProcessos()
        demandas_consultar.validarWhidthDescricao()
        demandas_consultar.validarWhidthRa()
        demandas_consultar.validarWhidthEmpreendimento()

        //CADASTRAR DEMANDA
        demandas_consultar.irAbaDemanda()
        demandas_consultar.irAbaDemandaConsultar()
        demandas_consultar.clicarBotaoCadastro()         // -- US033 - RN015 Caminhos ABA Nova Demanda --
        demandas_consultar.validarTitulo()                // -- US033 - RN015 identificação/título--
        demandas_consultar.validarTituloNovaDemanda()
        demandas_consultar.validarAccordionDadosGerais()
        demandas_consultar.validarAccordionDadosCA()
        demandas_consultar.validarAccordionDadosCF()
        demandas_consultar.validarAccordionDadosAI()
        demandas_consultar.clicarAcordeaoCompAmb()
        demandas_consultar.clicarAcordeaoCompFlo()
        demandas_consultar.clicarAcordeaoComInf()
        demandas_consultar.validarFormRA_Especifico()
        demandas_consultar.validarFormEmpreendimento_Especifico()
        demandas_consultar.validarFormTipo_Especifico()
        demandas_consultar.validarFormNumero_Especifico()
        demandas_consultar.validarFormAno_Especifico()
        demandas_consultar.validarFormOrgaoDemanda_Especifico()
        demandas_consultar.validarFormProcessoSEI_Especifico()
        demandas_consultar.validarFormDataPublicacao_Especifico()
        demandas_consultar.validarFormVigenciaDias_Especifico()
        demandas_consultar.validarFormTitular_Especifico()
        demandas_consultar.validarFormSuplente_Especifico()
        demandas_consultar.validarFormDescricao_Especifico()
    })

    it('demandas_consultar: campos obrigatórios', () => {
        irConsultarDemandas()
        demandas_consultar.clicarBotaoCadastro()
        demandas_consultar.editarSalvar()
        //Dados gerais
        demandas_consultar.campoEmpreendimentoObrigatorio()
        demandas_consultar.campoTipoObrigatorio()
        demandas_consultar.campoNumeroObrigatorio()
        demandas_consultar.campoAnoObrigatorio()
        demandas_consultar.campoOrgDemandaObrigatorio()
        demandas_consultar.campoDataPubObrigatorio()
        demandas_consultar.campoVigenciaObrigatorio()
        demandas_consultar.campoDescricaoObrigatorio()
        demandas_consultar.campoTitularObrigatorio()
        demandas_consultar.campoSuplenteObrigatorio()

        //Dados Específicos
        demandas_consultar.selecionarTipo()
        demandas_consultar.seletorDropdown('LI - Licença de Instalação ')
        demandas_consultar.marcarCompensAmb()
        demandas_consultar.marcarCompensFlorestal()
        demandas_consultar.editarSalvar()

        //Dados Específicos da Compensação Ambiental
        demandas_consultar.campoValorTotalObrigatorio()
        demandas_consultar.campoPrazoDiasObrigatorioCA()
        demandas_consultar.campoStatusRecADMObrigatorio()

        //Dados Específicos da Compensação Florestal
        demandas_consultar.campoLegReferenciaObrigatorio()  //EU002 - US036 (Obrigatório)
        demandas_consultar.campoPrazoDiasObrigatorioCF()
        demandas_consultar.campoStatusRecADMObrigatorioCF() //EU002 - US036 (Obrigatório)
        demandas_consultar.checkPossuiPrazoMarcado() //EU002 - US036 (Por padrão vir marcado)
        demandas_consultar.checkArquivado() //EU002 - US036 (Por padrão vir desmarcado)

        //Dados Específicos de Auto de infração
        cy.reload(true)
        demandas_consultar.selecionarTipo()
        demandas_consultar.seletorDropdown('AI - Auto de Infração')
        demandas_consultar.editarSalvar()
        demandas_consultar.campoObrigatorioDataRecAI() //EU010 - US043 - Data de Recebimento do AI (Obrigatório)
        demandas_consultar.campoObrigatoriotipoSancao() //EU010 - US043 - Tipos de Sanção (Obrigatório)
        demandas_consultar.campoObrigatoriotipoAtividade() //EU010 - US043 - Tipos de Atividade (Obrigatório)
        demandas_consultar.campoObrigatorioDescricaoAI()  //EU010 - US043 - Descrição do AI (motivo) (Obrigatório)
        demandas_consultar.campoObrigatorioStatusAI() //RN111 - STATUS DO AI (Obrigatório)

    })
})

