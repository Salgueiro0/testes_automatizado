
/// <reference types="cypress" />

import pendencias from "../../../support/pages/pendencias";

describe('pendência', () => {
    beforeEach(() => {
        cy.visit('http://gla-homol.terracapnet.local')
        cy.viewport(1980, 1200)
       
          
    })
    it('teste cadastrar pendência no empreendimento', () => {

     pendencias.irParaGLA()
     pendencias.login()
     pendencias.validarTituloPendencia()
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
     cy.wait(2000)
     pendencias.adicionar2Dado('teste')
     pendencias.adicionar3Dado()
     pendencias.adicionar4Dado()
     cy.wait(2000)
     cy.wait(2000)
     pendencias.selecionarCdDemanda()
     cy.wait(2000)
     pendencias.selecionarDado()
     pendencias.dropdownGLA('Pendente')
     pendencias.clicarBotaoEditar()
     pendencias.clicarExigencia()
     pendencias.clicarSegBotaoEditar()
     pendencias.adicionar5Dado()
     pendencias.selecionarOrgaoUnidadeInterna()
     pendencias.dropdownGLA('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA ')
     pendencias.adicionarUnidadeInterna()
     cy.wait(1000)
     pendencias.clicarPrimeiroBotao()
     cy.wait(1000)
     pendencias.adicionar9Dado()
     cy.wait(1000)
     pendencias.digitarOrgaoProcessoSei('11111')
     cy.wait(1000)
     pendencias.DigitarNumeroProcessoSei('11111111')
     cy.wait(1000)
     pendencias.digitarAnoProcessoSei('1111')
     cy.wait(4000)
     pendencias.modalEditar()
     cy.wait(1000)
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
     cy.wait(6000)
     pendencias.clicarLimparPesquisa()
     pendencias.seletorEmpreendimento()
     pendencias.dropdownGLA('4 - Empreendimento XPTO 5 ')
     pendencias.clicarBotaoPesquisar()
     cy.wait(4000)
     pendencias.gerarRelatorioPDF()
     cy.wait(10000)
     pendencias.clicarBotaoCadastrarEditar()
     pendencias.selecionarCdEmpreendimento()
     pendencias.dropdownGLA('4 - Empreendimento XPTO 5 ')
     pendencias.clicarPesquisarPendencias()
     pendencias.clicarPrimeiro()
     pendencias.clicarTodasPendencias()
     pendencias.clicarModal()
     cy.wait(3000)
     pendencias.clicarBtnSucess()
     pendencias.clicarLista()
     pendencias.clicarModalVinculoPendencia()
    })
})
