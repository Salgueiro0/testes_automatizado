const el = require('./elements').ELEMENTS;

class Pagamentos {

    irParaGLA() {
        cy.visit('/');
    }

    login() {
        cy.get(el.campoUsuario).type('C9020840');
        cy.get(el.campoSenha).type('welcome_1');
        cy.get(el.botaoLogin).click();
    }

    clicarAbaEmpreendimento() {
        cy.get(el.abaEmpreendimento).click();
    }

    pesquisarEmpreendimento() {
        cy.get(el.campoEmpreendimento).click();
        cy.get(el.dropdwonGLA)
            .find('li')
            .contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago')
            .click();
    }

    clicarBotaoPesquisar() {
        cy.get(el.botaoPesquisar).click();
    }

    clicarPrimeiroBotaoVisualizar() {
        cy.get(el.botaoVisualizar).first().click();
    }

    clicarAbaRequerimentos() {
        cy.get(el.abaRequerimento).click();
    }

    clicarBotaoPesquisarRequerimento() {
        cy.get(el.botaoPesquisarRequerimento).click();
    }

    clicarBotaoAdicionarPagamento() {
        cy.contains("button", "Adicionar").click();
    }

    digitarDataPagamento() {
        cy.wait(2000);
        cy.get(el.campoDataPagamento).type('2025-01-01');
    }

    digitarValorPagamento() {
        cy.wait(2000);
        cy.get(el.campoValorPagamento).type('1565665565657835');
    }

    clicarBotaoSalvar() {
        cy.wait(2000);
        cy.contains("button", "Salvar").click();
    }

    clicarModalOk() {
        cy.wait(2000);
        cy.contains("button", "OK").click();
    }

    clicarBotaoDeletar() {
        cy.wait(2000);
        cy.get(el.botaoDeletarPagamento).click();
    }

    clicarModalBotaoConfirmar() {
        cy.contains('button', "Confirmar").click();
    }

    irAbaPagamentos() {
        cy.get(el.abaPagamentos).click();
    }

    // Validações de labels
    validarLabelPagamento() {
        cy.get('h1').should('have.text', "Pagamento");
    }

    validarLabelPesquisar() {
        cy.get(el.labelPesquisar).should('have.text', "Pesquisar");
    }

    validarLabelRA() {
        cy.get(el.labelRA).should('have.text', "R.A");
    }

    validarLabelEmpreendimento() {
        cy.get(el.labelEmpreendimento).should('have.text', 'Empreendimento');
    }

    validarLabelOrigem() {
        cy.get(el.labelOrigem).should('have.text', "Origem");
    }

    validarLabelDatadoPagamento() {
        cy.get(el.labelDataPagamento).should('have.text', "Data do Pagamento");
    }

    validarLabelValordOPagamento() {
        cy.get(el.labelValorPagamento).should('have.text', "Valor do Pagamento (R$)");
    }

    validarLabelStatusDoPagamento() {
        cy.get(el.labelStatusPagamento).should('have.text', "Status do Pagamento");
    }

    validarLabelDescricaoDoPagamento() {
        cy.get(el.labelDescricaoPagamento).should('have.text', "Descrição do Pagamento");
    }

    validarLabelEmpreendedorResponsavel() {
        cy.get(el.labelEmpreendedorResponsavel).should('have.text', "Empreendedor Responsável");
    }

    validarLabelAdicioneCamposTabelaResultados() {
        cy.get(el.labelAdicioneCamposTabelaResultados)
            .should('have.text', "Adicione Campos na Tabela de Resultados");
    }

    // Validações de checkboxes
    validarCheckboxesDescricaoDoPagamento() {
        cy.get(el.checkboxDescricaoPagamento).invoke('text')
            .then((text) => { expect(text.trim()).to.equal('Descrição do Pagamento'); });
    }

    validarCheckboxesSEIComprovantePagamento() {
        cy.get(el.checkboxSEIComprovantePagamento).invoke('text')
            .then((text) => { expect(text.trim()).to.equal('SEI do Comprovante de Pagamento'); });
    }

    validarCheckboxesSEIEnvioComprovantePagamento() {
        cy.get(el.checkboxSEIEnvioComprovantePagamento).invoke('text')
            .then((text) => { expect(text.trim()).to.equal('SEI do Envio do Comprovante de Pagamento'); });
    }

    validarCheckboxesDataPagamento() {
        cy.get(el.checkboxDataPagamento).invoke('text')
            .then((text) => { expect(text.trim()).to.equal('Data do Pagamento'); });
    }

    validarCheckboxesSEICertidaoQuitacao() {
        cy.get(el.checkboxSEICertidaoQuitacao).invoke('text')
            .then((text) => { expect(text.trim()).to.equal('SEI da Certidão de Quitação'); });
    }

    validarCheckboxesStatusPagamento() {
        cy.get(el.checkboxStatusPagamento).invoke('text')
            .then((text) => { expect(text.trim()).to.equal('Status do Pagamento'); });
    }

    // Validações de linhas da tabela
    validarRowRAEmpreendimento() {
        cy.get(el.rowRA).should('have.text', "R.A");
    }
    validarRowOrigem() {
        cy.get(el.rowOrigem).should('have.text', "Origem");
    }

    validarRowValorPagamento() {
        cy.get(el.rowValorPagamento).should('have.text', "Valor do Pagamento (R$)");
    }

    validarRowAcao() {
        cy.get(el.rowAcao).should('have.text', "Ação");
    }

    // Campos e interações gerais
    digitarDescricaoPagamento() {
        cy.get(el.descricaoPagamento).type('testando limpar todos os campos');
    }

    clicarBotaoLimpar() {
        cy.contains('button', "Limpar").click();
    }

    selecionarRA() {
        cy.get(el.seletorRA).click();
        cy.get(el.dropdwonGLA)
            .find('li')
            .contains('RA-I - BRASILIA ')
            .click({ force: true });
        cy.wait(2000);
    }

    selecionarEmpreendimento() {
        cy.get(el.seletorEmpreendimento).click();
        cy.get(el.dropdwonGLA)
            .find('li')
            .contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago')
            .click();
    }

    selecionarEmpreendimentoPesquisarPagamento() {
        cy.wait(2000);
        cy.get(el.seletorEmpreendimento).click();
        cy.get(el.dropdwonGLA)
            .find('li')
            .contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago')
            .click();
    }

    pesquisarPagamento() {
        cy.contains('button', "Pesquisar").click();
    }

    clicarBotaoEditarPagamento() {
        cy.wait(2000);
        cy.get(el.botaoEditarPagamento).click();
        cy.wait(2000);
    }

    digitarModalCampoDescricao() {
        cy.get(el.modalDescricaoNumDoc).clear().type(1);
    }

    clicarBotaoEditar() {
        cy.get(el.botaoEditarPagamentoModal).click();
    }
}

export default new Pagamentos();
