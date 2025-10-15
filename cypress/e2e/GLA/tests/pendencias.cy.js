
/// <reference types="cypress" />

import pendencias from "../../../support/pages/pendencias";
//HUs INVÁLIDAS:
//EU052 - US084 - RN164

describe('pendência', () => {
    beforeEach(() => {
        cy.visit('http://gla-homol.terracapnet.local')
        cy.viewport(1980, 1200)
       
          
    })
  it('teste cadastrar pendência no empreendimento', () => {
     pendencias.irParaGLA()
     pendencias.login()
     pendencias.clicarAbaPendencia()
     pendencias.clicarBotaoCadastrarEditar()
     pendencias.selecionarCdEmpreendimento()
     pendencias.dropdownGLA('4 - Empreendimento XPTO 5 ')
     pendencias.pesquisarPendencia()
     pendencias.validarTituloPendencia()
     pendencias.validarTituloCadastrarEditar()
     pendencias.validarAdListaPendencia()
     pendencias.clicarBtn()
     pendencias.criarLinhas()
     pendencias.adicionar1Dado()
     pendencias.adicionar2Dado('teste')
     pendencias.adicionar3Dado()
     pendencias.adicionar4Dado()
     pendencias.selecionarCdDemanda()
     pendencias.selecionarDado()
     pendencias.dropdownGLA('Em Execução')
     pendencias.clicarBotaoEditar()
     pendencias.clicarExigencia()
     pendencias.clicarSegBotaoEditar()
     pendencias.adicionar5Dado()
     pendencias.selecionarOrgaoUnidadeInterna()
     pendencias.dropdownGLA('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA ')
     pendencias.adicionarUnidadeInterna()
     pendencias.clicarConfirmar()
     pendencias.adicionar9Dado()
     pendencias.digitarOrgaoProcessoSei('11111')
     pendencias.DigitarNumeroProcessoSei('11111111')
     pendencias.digitarAnoProcessoSei('1111')
     pendencias.modalEditar()
     pendencias.selecionar()
     pendencias.adicionar6Dado()
     pendencias.digitarEmParagrafo('teste')
     pendencias.alterarModalProvidencia()
     pendencias.adicionar7Dado()

     const dataBrasileira = '01/01/2024';
     const [dia, mes, ano] = dataBrasileira.split('/');
     const dataFormatoCypress = `${ano}-${mes}-${dia}`;


     cy.get(':nth-child(8) > :nth-child(9) > a > .fa').click()
     cy.get('#dt_previsao_cumprimento').type(dataFormatoCypress)// Digita no campo
     cy.get('#modal-alteracao-cumprimento > .modal-dialog > .modal-content > .modal-footer > #botao-editar').click()
     cy.on('uncaught:exception', (err, runnable) => {
         return false; // Ignora o erro para que o teste continue
     });

     const DataBrasileira = '01/01/2026';
     const [Dia, Mes, Ano] = DataBrasileira.split('/');
     const DataFormatoCypress = `${Ano}-${Mes}-${Dia}`;


     cy.get(':nth-child(9) > :nth-child(11) > a > .fa').click()
     cy.get('#dt_limite').type(DataFormatoCypress)
     cy.get('#modal-alteracao-limite > .modal-dialog > .modal-content > .modal-footer > #botao-editar').click()
     cy.on('uncaught:exception', (err, runnable) => {
         return true; // Ignora o erro para que o teste continue
       });
     pendencias.irAba()
     pendencias.seletorEmpreendimento()
     pendencias.dropdownGLA('4 - Empreendimento XPTO 5 ')
     pendencias.clicarBotaoPesquisar()
     pendencias.clicarLimparPesquisa()
     pendencias.seletorEmpreendimento()
     pendencias.dropdownGLA('4 - Empreendimento XPTO 5 ')
     pendencias.clicarBotaoPesquisar()
     pendencias.gerarRelatorioPDF()
     pendencias.clicarBotaoCadastrarEditar()
     pendencias.selecionarCdEmpreendimento()
     pendencias.dropdownGLA('4 - Empreendimento XPTO 5 ')  //EU051 - US083 - RN149 - Modulo pendência - Empreendimento
     pendencias.clicarPesquisarPendencias()
     pendencias.validacoesBotoesCadastrarEditar() //EU051 - US083 - RN149 - Modulo pendência - Empreendimento
     pendencias.clicarPrimeiro()
     pendencias.clicarTodasPendencias()
     pendencias.clicarModal()
     pendencias.clicarBtnSucess()
     pendencias.clicarLista()
     pendencias.clicarModalVinculoPendencia()
  })

  it('Campos de Texto', () => {
    pendencias.irParaGLA()
    pendencias.login()
    pendencias.validarTituloPendencia()          // -- US033 - RN015 identificação/título--
    pendencias.clicarAbaPendencia()
    pendencias.validarLabelEmpreendedorResponsavel()
    pendencias.validarLabelEmpreendimento()
    pendencias.validarLabelPrioridade()
    pendencias.validarLabelListaPendencias()
    pendencias.validarLabelCategoria()
    pendencias.validarLabelResumo()
    pendencias.validarLabelUnidadeInterna()
    pendencias.validarLabelStausPendencia()
    pendencias.validarLabelProvidencias()
    pendencias.validarLabelExigeContratacao()
    pendencias.validarLabelPrevisaoCumprimento()
    pendencias.validarLabelDataLimite()
    pendencias.validarLabelTitular()
    pendencias.validarLabelPeriodoLimite()
    pendencias.validarLabelPeriodoCumprimento()
    pendencias.validarLabelSuplente()
    pendencias.validarALabelEmpreendedorResponsavel()
    pendencias.validarALabelEmpreendimento()
    pendencias.validarALabelPrioridade()
    pendencias.validarALabelListaPendencia()
    pendencias.validarALabelCategoria()
    pendencias.validarALabelResumo()
    pendencias.validarALabelExigenciaVinculada()
    pendencias.validarALabelUnidadeInterna()
    pendencias.validarALabelProcSeiAcompanhamento()
    pendencias.validarALabelStatusPendencia()
    pendencias.validarALabelProvidencia()
    pendencias.validarALabelExigeContratacao()
    pendencias.validarALabelPrevisaoCumprimento()
    pendencias.validarALabelDiasCumprimento()
    pendencias.validarALabelDataLimite()
    pendencias.validarALabelDiasLimite()
  })
  it('Vincular exigência', () => {
   // EU052 - US084 - RN151
   pendencias.irParaGLA()
   pendencias.login()
   pendencias.clicarAbaPendencia()
   pendencias.clicarBotaoCadastrarEditar()
   pendencias.pesquisarPendencia() //EU051 - US083 - Empreendimento obrigatório
   pendencias.selecionarCdEmpreendimento()
   pendencias.dropdownGLA('4 - Empreendimento XPTO 5 ')
   pendencias.pesquisarPendencia()
   pendencias.adicionarListaPendencias()
   pendencias.adicionarLP()
   pendencias.botaoAdicionar()
   pendencias.adicionarListaPendencias()
   pendencias.LPDesabilitado() //EU051 - US083 - RN150
   pendencias.clicarFechar()
   pendencias.expandirLP()
   pendencias.validarBotoesRodapeListaPendencias() //EU052 - US084 - RN160 - conjunto de botões “Adicionar Linha”, “Vincular Exigências” e “Excluir Lista de Pendências"
   pendencias.clicarOrdenar()  //EU052 - US084 - RN160 - As colunas terão botões de ordenamento
   pendencias.clicarVincularExigencia() // EU051 - US083 - RN170
   pendencias.selecionarStatusExigencia()
   pendencias.dropdownGLA('Em Execução')
   pendencias.consultarExigencia()
   pendencias.selecionarPrimeiraExigencia()
   pendencias.clicarConfirmarVinculoExigencia()
   pendencias.clicarExcluirListaPendencias() //EU051 - US083 - RN150
   pendencias.salvarExclusao()
  })
  it('Excluir todas as linhas Campos das Tabelas de Resultados ', () => {
    pendencias.irParaGLA()
    pendencias.login()
    pendencias.clicarAbaPendencia()
    pendencias.clicarBotaoCadastrarEditar()
    pendencias.selecionarCdEmpreendimento()
    pendencias.dropdownGLA('4 - Empreendimento XPTO 5 ')
    pendencias.pesquisarPendencia()
    pendencias.adicionarListaPendencias()
    pendencias.adicionarLP()
    pendencias.botaoAdicionar()
    pendencias.clicarCamposTabelasResultados()
    pendencias.validarCamposMarcadosPadrao()   //EU052 - US084 - RN152 - Módulo pendência - Campos da Tabela de Resultados
    pendencias.expandirLP()
    pendencias.excluir8Linhas() //EU052 - US084 - RN160 - Caso todas as linhas sejam excluídas, a tabela deverá ser excluída
  })
  it.only('Adicionar Lista de Pendência', () => {
      pendencias.irParaGLA()
      pendencias.login()
      pendencias.clicarAbaPendencia()
      pendencias.clicarBotaoCadastrarEditar()
      pendencias.selecionarCdEmpreendimento()
      pendencias.dropdownGLA('4 - Empreendimento XPTO 5 ')
      pendencias.pesquisarPendencia()
      pendencias.adicionarListaPendencias()
      pendencias.adicionarLP()
      pendencias.botaoAdicionar()
      pendencias.expandirLP()



      //UNIDADE INTERNA
      pendencias.unidadeInterna()
      pendencias.selecionarOrgaoUnidadeInterna()
      pendencias.dropdownGLA('ACJUR -ADVOCACIA E CONSULTORIA JURIDICA') //EU052 - US084 - RN154
      pendencias.adicionarUnidadeInterna()
      pendencias.clicarConfirmar()

  })
})
