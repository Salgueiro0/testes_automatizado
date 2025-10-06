
/// <reference types="cypress" />

import pagamentos from "../../../support/pages/pagamentos";

describe('pagamento', () => {

    it('teste tela de pagamentos', () => {


        //LOGIN
        pagamentos.irParaGLA()
        pagamentos.login()

        //PESQUISAR EMPREENDIMENTO

        pagamentos.clicarAbaEmpreendimento()
        pagamentos.pesquisarEmpreendimento()
        pagamentos.clicarBotaoPesquisar()
        pagamentos.clicarPrimeiroBotaoVisualizar()
        pagamentos.clicarAbaRequerimentos()

        //PESQUISAR REQUERIMENTO

        pagamentos.clicarBotaoPesquisarRequerimento()
        pagamentos.clicarPrimeiroBotaoVisualizar()
        cy.wait(2000)                                                // -- US064 - RN127 -sem pagamento --

        //ADICIONAR VÁRIOS PAGAMENTOS


        pagamentos.clicarBotaoAdicionarPagamento()
        pagamentos.digitarDataPagamento('2025-01-01')
        pagamentos.digitarValorPagamento('500')
        pagamentos.clicarBotaoSalvar()
        pagamentos.clicarModalOk()                                      //-- US064 - (08) valida que inserção do SEI é opcional--


        pagamentos.clicarBotaoAdicionarPagamento()
        pagamentos.digitarDataPagamento('2024-01-01')
        pagamentos.digitarValorPagamento('500')
        pagamentos.clicarBotaoSalvar()
        pagamentos.validarMsgMesmoValor()                               // -- US064 - RN128 --
        pagamentos.clicarModalSalvar()
        pagamentos.clicarModalOk()

        pagamentos.clicarBotaoAdicionarPagamento()
        pagamentos.digitarDataPagamento('2025-01-01')
        pagamentos.digitarValorPagamento('1565665565657835')      // -- US064 - valida limite de 12 caracteres --
        cy.wait(2000)
        pagamentos.clicarStatusPagamento('Quitado')              // --  US064 - RN129 --
        cy.wait(3000)
        pagamentos.digitarSei('teste')
        pagamentos.clicarBotaoSalvar()                                  // -- US064 - (13) Valida que descrição é opcional --
        pagamentos.clicarModalOk()


        //ORDENAR PAGAMENTOS
        pagamentos.ordenarDataPagamento()                               // -- US064 - RN127 - com pagamento --

        //VALIDAR MENSAGENS CAMPOS OBRIGATÓRIOS

        pagamentos.clicarBotaoAdicionarPagamento()
        pagamentos.digitarDataPagamento('2025-01-01')
        pagamentos.clicarBotaoSalvar()
        pagamentos.validarMsgCamposObrigatorio()                        //--EU031 - US064 - Obrigatório (10) sem valor pagamento --
        pagamentos.clicarModalOk()

        pagamentos.digitarValorPagamento('1565665565657835')
        pagamentos.limparDataPagamento()
        pagamentos.clicarBotaoSalvar()
        pagamentos.validarMsgCamposObrigatorio()                        //--EU031 - US064- Obrigatório (09) sem data pagamento --
        pagamentos.clicarModalOk()
        pagamentos.clicarModalFechar()

        //PESQUISAR PAGAMENTO
        pagamentos.irAbaPagamentos()
        pagamentos.validarTitulo()                // -- US033 - RN015 identificação/título--

        //validando campos de texto
        pagamentos.validarLabelPagamento()
        pagamentos.validarLabelPesquisar()
        pagamentos.validarLabelRA()
        pagamentos.validarLabelEmpreendimento()
        pagamentos.validarLabelOrigem()
        pagamentos.validarLabelDatadoPagamento()
        pagamentos.validarLabelValordOPagamento()
        pagamentos.validarLabelStatusDoPagamento()
        pagamentos.validarLabelDescricaoDoPagamento()
        pagamentos.validarLabelEmpreendedorResponsavel()
        pagamentos.validarLabelAdicioneCamposTabelaResultados()
        pagamentos.validarCheckboxesDescricaoDoPagamento()
        pagamentos.validarCheckboxesSEIComprovantePagamento()
        pagamentos.validarCheckboxesSEIEnvioComprovantePagamento()
        pagamentos.validarCheckboxesDataPagamento()
        pagamentos.validarCheckboxesSEICertidaoQuitacao()
        pagamentos.validarCheckboxesStatusPagamento()
        pagamentos.validarRowRAEmpreendimento()
        pagamentos.validarRowOrigem()
        pagamentos.validarRowValorPagamento()
        pagamentos.validarRowAcao()


        //testando limpar campos
        pagamentos.digitarDescricaoPagamento()
        pagamentos.clicarBotaoLimpar()


        //EDITAR PAGAMENTO

        pagamentos.irAbaPagamentos()
        pagamentos.selecionarRA()
        pagamentos.seletorDropdown('RA-I - BRASILIA ')
        pagamentos.selecionarEmpreendimentoPesquisarPagamento()
        pagamentos.seletorDropdown('Polos 06, 07, 08 - Projeto Orla - Beira Lago')
        pagamentos.pesquisarPagamento()
        pagamentos.filtrarPagamento('1565')
        pagamentos.clicarPrimeiroBotaoEditarPagamento()             //-- US078 - botão editar requerimento --
        pagamentos.digitarModalValor('222')
        pagamentos.clicarBotaoEditar()
        pagamentos.clicarModalOk()

        //Visualizar pagamento                                      // -- US078 - visualizar requerimento --
        pagamentos.irAbaPagamentos()
        pagamentos.selecionarRA()
        pagamentos.seletorDropdown('RA-I - BRASILIA ')
        pagamentos.selecionarEmpreendimento()
        pagamentos.seletorDropdown('Polos 06, 07, 08 - Projeto Orla - Beira Lago')
        pagamentos.pesquisarPagamento()
        pagamentos.filtrarPagamento('1565')
        pagamentos.clicarPrimeiroBotaoVisualizar()

        //APAGAR

        pagamentos.clicarBotaoDeletar()
        pagamentos.clicarModalBotaoConfirmar()
        pagamentos.clicarModalOk()
        cy.wait(4000)
        pagamentos.clicarBotaoDeletar()
        pagamentos.clicarModalBotaoConfirmar()
        pagamentos.clicarModalOk()
        pagamentos.clicarBotaoDeletar()
        pagamentos.clicarModalBotaoConfirmar()
        pagamentos.clicarModalOk()

        function visualizarDemandaPorOrigem(origem) {
            pagamentos.irAbaPagamentos();
            pagamentos.selecionarRA();
            pagamentos.seletorDropdown('RA-I - BRASILIA ');
            pagamentos.selecionarEmpreendimento();
            pagamentos.seletorDropdown('Polos 06, 07, 08 - Projeto Orla - Beira Lago');
            pagamentos.selecionarOrigem();
            pagamentos.seletorDropdown(origem);
            pagamentos.pesquisarPagamento();
            pagamentos.clicarPrimeiroBotaoEditarPagamento();
            pagamentos.clicarBotaoFechar();
            pagamentos.clicarPrimeiroBotaoVisualizar();
            pagamentos.clicarBotaoVoltar();
        }


        visualizarDemandaPorOrigem('Auto de infração');           // -- US078 - visualizar demanda e botao editar --
        visualizarDemandaPorOrigem('Compensação ambiental');      // -- US078 - visualizar demanda e botao editar--
        visualizarDemandaPorOrigem('Compensação florestal');      // -- US078 - visualizar demanda e botao editar--
        visualizarDemandaPorOrigem('Estudos');                    // -- US078 - visualizar estudo/serviço e botao editar--

        // GLA - EU031 - US064 - PAGAMENTO - VISUALIZAR DADOS DETALHADOS DE REQUERIMENTO
        // GLA - EU046 - US078 - PAGAMENTOS - VIZUALIZAR PAGAMENTOS
    })
})







