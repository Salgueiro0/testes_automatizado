
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

        //ADICIONAR PAGAMENTO AO REQUERIMENTO

        pagamentos.clicarBotaoAdicionarPagamento()
        pagamentos.digitarDataPagamento()
        pagamentos.digitarValorPagamento()
        pagamentos.clicarBotaoSalvar()
        pagamentos.clicarModalOk()
        pagamentos.clicarBotaoDeletar()
        pagamentos.clicarModalBotaoConfirmar()
        pagamentos.clicarModalOk()

        //PESQUISAR PAGAMENTO
        pagamentos.irAbaPagamentos()

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

        //pesquisando pagamento
        pagamentos.irAbaPagamentos()
        pagamentos.selecionarRA()
        pagamentos.selecionarEmpreendimento()
        pagamentos.pesquisarPagamento()
        pagamentos.clicarPrimeiroBotaoVisualizar()

        //EDITAR PAGAMENTO

        pagamentos.irAbaPagamentos()
        pagamentos.selecionarRA()
        pagamentos.selecionarEmpreendimentoPesquisarPagamento()
        pagamentos.pesquisarPagamento()
        pagamentos.clicarBotaoEditarPagamento()
        pagamentos.digitarModalCampoDescricao()
        pagamentos.clicarBotaoEditar()
        pagamentos.clicarModalOk()
    })
})







