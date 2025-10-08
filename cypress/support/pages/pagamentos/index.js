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
    validarTitulo(){cy.get('h1').should('contain','Pagamento')}

    clicarAbaRequerimentos() {
        cy.get(el.abaRequerimento).click();
    }
    validarMsgCamposObrigatorio(){cy.get('.bootbox-body').should('contain','Preencha todos os campos obrigatórios')}
    clicarBotaoOk(){cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click()}
    limparDataPagamento(){cy.get(el.campoDataPagamento).clear()}
    clicarBotaoPesquisarRequerimento() {cy.get(el.botaoPesquisarRequerimento).click();}
    clicarBotaoAdicionarPagamento() {cy.contains("button", "Adicionar").click();}

    digitarDataPagamento(data) {
        cy.wait(2000);
        cy.get(el.campoDataPagamento).type(data);
    }

    digitarValorPagamento(valor) {
        cy.wait(2000);
        cy.get(el.campoValorPagamento).type(valor);
    }
    editarValorPagamento(valor){cy.get('#modal_vl_pagamento').type(valor)}
    clicarBotaoSalvar() {
        cy.wait(2000)
        cy.contains("button", "Salvar").click();}
    clicarStatusPagamento(opcao){cy.get('#tp_situacao').select(opcao)}
    digitarSei(texto){cy.get('#ds_sei_num_doc_quitacao').type(texto)}
    clicarModalOk() {cy.contains("button", "OK").click();}
    ordenarDataPagamento(){
        cy.get('[aria-label="Data do Pagamento: Ordenar colunas de forma ascendente"]').click()
        cy.wait(1000)
        cy.get('[aria-label="Data do Pagamento: Ordenar colunas de forma ascendente"]').click()
    }
    ordenarValorPagamento(){
        cy.get('[aria-label="Valor do Pagamento (R$): Ordenar colunas de forma ascendente"]').click()
        cy.wait(1000)
        cy.get('[aria-label="Valor do Pagamento (R$): Ordenar colunas de forma ascendente"]').click()
    }
    clicarModalFechar() {cy.contains('button','Fechar').click();}

    clicarBotaoDeletar() {
        cy.wait(2000);
        cy.get(el.botaoDeletarPagamento).first().click();
    }

    clicarModalSalvar(){cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()}
    clicarModalEditarSalvar(){cy.get('.modal-content > .modal-footer > .btn-secondary').click()}
    validarMsgMesmoValor(){cy.get('.bootbox > .modal-dialog > .modal-content > .modal-body').should('contain','Atenção, já existe pagamento cadastrado no sistema com este mesmo valor. Tem certeza que deseja salvar?')}

    clicarModalBotaoConfirmar() {cy.contains('button', "Confirmar").click();}
    irAbaPagamentos() {cy.get(el.abaPagamentos).click();}

    // Validações de labels
    validarLabelPagamento() {cy.get('h1').should('have.text', "Pagamento");}
    validarLabelPesquisar() {cy.get(el.labelPesquisar).should('have.text', "Pesquisar");}
    validarLabelRA() {cy.get(el.labelRA).should('have.text', "R.A");}
    validarLabelEmpreendimento() {cy.get(el.labelEmpreendimento).should('have.text', 'Empreendimento');}
    validarLabelOrigem() {cy.get(el.labelOrigem).should('have.text', "Origem");}
    validarLabelDatadoPagamento() {cy.get(el.labelDataPagamento).should('have.text', "Data do Pagamento");}

    validarLabelValordOPagamento() {
        cy.get(el.labelValorPagamento).should('have.text', "Valor do Pagamento (R$, ha, mudas)");
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
        cy.get(el.rowValorPagamento).should('have.text', "Valor do Pagamento (R$, ha, mudas)");
    }

    validarRowAcao() {cy.get(el.rowAcao).should('have.text', "Ação");}

    // Campos e interações gerais
    digitarDescricaoPagamento() {cy.get(el.descricaoPagamento).type('testando limpar todos os campos');}
    clicarBotaoLimpar() {cy.contains('button', "Limpar").click();}
    selecionarRA() {cy.get(el.seletorRA).click();}
    seletorDropdown(seletor){
        cy.get(el.dropdwonGLA)
            .find('li')
            .contains(seletor)
            .click({ force: true });
        cy.wait(2000);
    }
    selecionarEmpreendimento() {cy.get(el.seletorEmpreendimento).click();}

    selecionarEmpreendimentoPesquisarPagamento() {
        cy.wait(2000);
        cy.get(el.seletorEmpreendimento).click();
    }

    pesquisarPagamento() {cy.contains('button', "Pesquisar").click();}
    filtrarPagamento(texto){cy.get('#table-pagamento_filter > label > .form-control').type(texto)}

    clicarPrimeiroBotaoEditarPagamento() {
        cy.wait(2000);
        cy.get(el.botaoEditarPagamento).first().click();
        cy.wait(2000);
    }
    digitarModalCampoDescricao(texto) {cy.get(el.modalDescricaoNumDoc).clear().type(texto);}
    clicarBotaoEditar() {cy.get(el.botaoEditarPagamentoModal).click();}
    digitarModalValor(valor){cy.get('#modal_vl_pagamento').type(valor)}
    selecionarOrigem(){cy.get(':nth-child(2) > .col-md-4 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()}
    clicarBotaoVoltar(){cy.get('[onclick="window.history.back()"]').click()}
    clicarBotaoFechar(){cy.get('.btn-secondary').click()}

}

export default new Pagamentos();
