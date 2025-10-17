
/// <reference types="cypress" />

import pendencias from "../../../support/pages/pendencias";
//HUs INVÁLIDAS:
//EU052 - US084 - RN164

//HUs inválidas:
//EU052 - US084 - RN172
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
     pendencias.resumo()
     pendencias.digitarResumo('teste')
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
     pendencias.confirmarModalProvidencia()
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
   pendencias.validarExigenciaSemEditar() //EU052 - US084 - RN153 - usuário não pode alterar.
   pendencias.linkExigenciaVinculada()  //EU052 - US084 - RN159 - link das exigências vinculadas
   pendencias.clicarExcluirListaPendencias() //EU051 - US083 - RN150
   pendencias.salvarExclusao()
  })
  it('Validações Gerais', () => {
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
    // EU052 - US084 - RN154 - Ações

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

      //CATEGORIA
      pendencias.categoria1Linha('Consulta ao CONAM') //EU052 - US084 - RN154

      //VINCULAR EXIGÊNCIA
      pendencias.clicarVincularExigencia() // EU051 - US083 - RN170
      pendencias.selecionarStatusExigencia()
      pendencias.dropdownGLA('Em Execução')
      pendencias.consultarExigencia()
      pendencias.filtrarExigencia('TESTE AUTOMATIZADO')
      pendencias.selecionarPrimeiraExigencia()
      pendencias.clicarConfirmarVinculoExigencia()

      //RESUMO SEM EXIGÊNCIA
      pendencias.resumo2Linha() //EU052 - US084 - RN155 - botão Editar
      pendencias.digitarResumo('a'.repeat(500) + 'Tem mais de 500') //EU052 - US084 - RN155 - Máximo de 500 caracteres  - RN171 - texto livre - EU052 - US084 - RN168
      pendencias.confirmarDescricaoResumo()//EU052 - US084 - RN155 -  botão confirmar

      //RESUMO COM EXIGÊNCIA
      pendencias.validarTextoResumo('TESTE AUTOMATIZADO')//EU052 - US084 - RN171 - Possui Exigência vinculada

      //UNIDADE INTERNA COM EXIGÊNCIA - EU052 - US084 - RN173
      pendencias.unidadeInterna1Linha()
      pendencias.selecionarOrgaoUnidadeInterna()
      pendencias.dropdownGLA('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA ') //EU052 - US084 - RN154
      pendencias.adicionarUnidadeInterna() 

      pendencias.selecionarOrgaoUnidadeInterna()
      pendencias.dropdownGLA(' ADCOM - ADCOM-ASSESSORIA DA DIRETORIA DE DESENVOLVIMENTO E COMERCIAL ') //EU052 - US084 - RN165 - múltiplas “Unidades Internas”
      pendencias.adicionarUnidadeInterna() 
      pendencias.clicarConfirmar()

      //UNIDADE INTERNA SEM EXIGÊNCIA - EU052 - US084 - RN173
      pendencias.unidadeInterna2Linha()
      pendencias.selecionarOrgaoUnidadeInterna()
      pendencias.dropdownGLA('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA ')
      pendencias.adicionarUnidadeInterna()
      pendencias.clicarConfirmar()
      
      //PROCESSO SEI COM EXIGÊNCIA - EU052 - US084 - RN174
      pendencias.processoSEI1Linha()
      pendencias.editarProcessoSEI('1','1','2020')
      pendencias.modalConfirmarSEI()
      
      //PROCESSO SEI SEM EXIGÊNCIA - EU052 - US084 - RN174
      pendencias.validarProcessoSEIvinculadoExig('00001-00000001/2020')
      pendencias.processoSEI2Linha()
      pendencias.editarProcessoSEI('1','1','2020')
      pendencias.modalConfirmarSEI()
      
      //STATUS DA PENDÊNCIA COM EXIGÊNCIA - EU052 - US084 - RN156 - RN167 - RN154
      pendencias.validaStatusPendenciaVinculadoExig('Pendente')
      
      //STATUS DA PENDÊNCIA SEM EXIGÊNCIA - EU052 - US084 - RN156 - RN167 - RN154
      pendencias.statusPendenciaLinha2('Pendente')
      
      //PROVIDÊNCIAS COM EXIGÊNCIA - EU052 - US084 - RN175
      pendencias.providenciaVinculadoExig('TESTE AUTOMATIZADO')
      pendencias.editarProvidenciaLinha1()
      pendencias.digitarEmParagrafo('teste')
      pendencias.confirmarModalProvidencia()
      
      //PROVIDÊNCIAS SEM EXIGÊNCIA - EU052 - US084 - RN175
      pendencias.editarProvidenciaLinha2()
      pendencias.digitarEmParagrafo('teste')
      pendencias.confirmarModalProvidencia()

      //EXIGE CONTRATAÇÃO COM EXIGÊNCIA? - EU052 - US084 - RN176 - RN154
      pendencias.exigeContratacaoVinculadoExig('Não')
      pendencias.exigeContratacaoLinha1('Sim')

      //EXIGE CONTRATAÇÃO SEM EXIGÊNCIA? - EU052 - US084 - RN176 - RN154
      pendencias.exigeContratacaoLinha2('Sim')

      //TORNAR PENDÊNCIA COMO STATUS CUMPRIDA - EU052 - US084 - RN158
      pendencias.selecionarStatusExigencia()
      pendencias.dropdownGLA('Cumprida')
      pendencias.clicarAbaCumpridas()
      pendencias.validarPendenciaAbaCumprida()

  })
})
