/// <reference types="cypress" />

import empreendimento from "../../../support/pages/empreendimento";

describe('pendência', () => {
    beforeEach(() => {
        empreendimento.irParaGLA()
        cy.viewport(1980, 1200)
       
          
    })
    it('validação das telas no campo empreendimento', () => {


        empreendimento.login()
        empreendimento.validarTituloPendencia()
        empreendimento.irParaEmpreendimento()
        empreendimento.validarTituloEmpreendimento()
        empreendimento.validarTextoPesquisar()

        //validação da escrita
        empreendimento.validarLabelRA()
        empreendimento.validarLabelEmpreendimento()
        empreendimento.validarLabelTipo()
        empreendimento.validarLabelPrioridade()
        empreendimento.validarLabelTitular()
        empreendimento.validarLabelSuplente()
        empreendimento.validarLabelEmpreendedorResponsavel()
        empreendimento.validarLabelArquivado()
        empreendimento.validarLabelConcluido()
        empreendimento.validarLabelPossuiExigencia()
        empreendimento.validarLabelPossuiRequerimento()
        empreendimento.validarLabelPossuiLicenca()
        empreendimento.validarAriaLabelRA()
        empreendimento.validarAriaLabelEmpreendimento()
        empreendimento.validarAriaLabelTipo()
        empreendimento.validarAriaLabelEmpreendedorResponsavel()
        empreendimento.validarAriaLabelPrioridade()
        empreendimento.validarAriaLabelTitular()
        empreendimento.validarAriaLabelArquivado()
        empreendimento.validarAriaLabelAcao()

        // seleção de campos e validação dos botões
        empreendimento.selecionarRA()
        empreendimento.selecionarEmpreendimento()
        empreendimento.selecionarTipo()
        empreendimento.selecionarPrioridade()
        empreendimento.selecionarTitular()
        empreendimento.selecionarSuplente()
        empreendimento.selecionarEmpreendedorResponsavel()
        empreendimento.selecionarArquivado()
        empreendimento.selecionarConcluido()
        empreendimento.selecionarPossuiExigencia()
        empreendimento.selecionarPossuiRequerimento()
        empreendimento.selecionarPossuiLicenca()
        empreendimento.clicarBotaoLimpar()

        //validação novo cadastro
        empreendimento.clicarBotaoNovoCadastro()

        //validação da escrita na tela de novo cadastro

        empreendimento.validarLabelCadastroNovo()
        empreendimento.validarLabelCadastroRA()
        empreendimento.validarLabelCadastroProcessoSEIEmpreendimento()
        empreendimento.validarLabelCadastroTipo()
        empreendimento.validarLabelCadastroEmpreendimento()
        empreendimento.validarLabelCadastroPrioridade()
        empreendimento.validarLabelCadastroNumeroURB()
        empreendimento.validarLabelCadastroNumeroNGB()
        empreendimento.validarLabelCadastroNumeroMDE()
        empreendimento.validarLabelCadastroTitular()
        empreendimento.validarLabelCadastroArquivado()
        empreendimento.validarLabelCadastroConcluido()
        empreendimento.validarLabelCadastroSuplente()
        empreendimento.validarLabelCadastroEmpreendedorResponsavel()
        empreendimento.validarLabelCadastroNLotes()
        empreendimento.validarLabelCadastroAreaTotal()
        empreendimento.validarLabelCadastroResumoStatus()

        //validação do botão limpar
        empreendimento.selecionarRegiaoAdminContainer()
        empreendimento.botaoLimpar()

        //validando o salvamento de empreencimento
        empreendimento.selecionarRegiaoAdminContainer()
        empreendimento.digitarOrgaoProcessoSei()
        empreendimento.digitarNumeroProcessoSei()
        empreendimento.digitarAnoProcessoSei()
        empreendimento.selecionarTpEmpreendimento('Parcelamento de Solo Urbano - Novo')
        empreendimento.digitarDescricaoEmpreendimento()
        empreendimento.selecionarTpPrioridade()
        empreendimento.selecionarPessoaTitular()
        empreendimento.selecionarPessoaSuplente()
        empreendimento.selecionarOrgaoResponsavel()
        empreendimento.clicarBotaoSalvar()
        empreendimento.clicarModalConfirmar()
        empreendimento.clicarModalOk()


        //codigo para não contar a proteção do sistema como um erro
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        // validação dos campos do empreendimento
        empreendimento.validarCampoEmpreendimentoRA()
        empreendimento.validarCampoEmpreendimentoEmpreendimento()
        empreendimento.validarCampoEmpreendimentoEmpreendedorResponsavel()
        empreendimento.validarCampoEmpreendimentoTipo()
        empreendimento.validarCampoEmpreendimentoSEI()
        empreendimento.validarCampoEmpreendimentoPrioridade()
        empreendimento.validarCampoEmpreendimentoAreaTotal()
        empreendimento.validarCampoEmpreendimentoNLotes()
        empreendimento.validarCampoEmpreendimentoNURB()
        empreendimento.validarCampoEmpreendimentoNNGB()
        empreendimento.validarCampoEmpreendimentoNMDE()
        empreendimento.validarCampoEmpreendimentoTitular()
        empreendimento.validarCampoEmpreendimentoSuplente()
        empreendimento.validarCampoEmpreendimentoArquivado()
        empreendimento.validarCampoEmpreendimentoConcluido()
        empreendimento.validarCampoEmpreendimentoResumoStatus()
        empreendimento.validarCampoEmpreendimentoObservacao()

        // voltando para a tela de empreendimento, para a validação do salvamento
        empreendimento.clicarBotaoVoltar()

        empreendimento.selecionarRA()
        empreendimento.selecionarTipo()
        empreendimento.selecionarPrioridade()
        empreendimento.selecionarTitular()
        empreendimento.selecionarSuplente()
        empreendimento.selecionarEmpreendedorResponsavel()
        empreendimento.clicarBotaoPesquisar()

        //teste da tela de visualizar
        empreendimento.clicarPrimeiroBotaoVisualizar()

        //teste da tela de edição
        empreendimento.irAbaEmpreendimento()
        empreendimento.selecionarRegiaoAdmin()
        empreendimento.limparOrgaoProcessoSei()
        empreendimento.limparNrProcessoSei()
        empreendimento.limparProcessoSei()
        empreendimento.digitarOrgaoProcessoSei()
        empreendimento.digitarNumeroProcessoSei()
        empreendimento.digitarAnoProcessoSei()
        empreendimento.selecionarTpEmpreendimento('Obras de Construção Civil')
        empreendimento.clicarBotaoSalvar()
        empreendimento.clicarModalConfirmar()
        empreendimento.clicarModalOk()

        //validação do campo excluir
        empreendimento.clicarBotaoDeleteEmpreendimento()
        empreendimento.confirmar()
    })
});