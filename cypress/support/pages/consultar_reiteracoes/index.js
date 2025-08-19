const el = require('./elements').ELEMENTS
class consultar_reiteracoes {

    irParaGLA() {
        cy.visit('/');
    }

    login() {
        cy.get(el.campoUsuario).type('C9020840');
        cy.get(el.campoSenha).type('welcome_1');
        cy.get(el.botaoLogin).click();
    }

    irParaRequerimentos(){
        cy.get(':nth-child(7) > [href="#"]').click()
    }

    irParaConsultarReiteracoes(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
    }

    irParaCadastrarReiteracoes(){
        cy.get('.btn-success').click()
    }

    selecionarRegiaoAdm(){
        cy.get('#select2-regiao_adm-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })
        cy.wait(2000)
    }

    selecionarEmpreendimento(){
        cy.get('#select2-combo_empreendimento-container').click()
        cy.wait(2000)
        cy.get('.select2-results').find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({ force: true })
        cy.wait(2000)
    }

    selecionarTipoRequerimento(){
        cy.get('#select2-combo_tipo_requerimento-container').click()
        cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })
        cy.wait(4000)
    }

    selecionarRequerimento(){
        cy.get('#select2-combo_requerimento-container').click()
        cy.wait(2000)
        cy.get('.select2-results').find('li').contains('LP - Licença Prévia - Ofício nº 6/1565 - ACJUR p/ ADASA').first().click({ force: true })
    }

    selecionarSegundoRequerimento(){
        cy.get('#select2-combo_requerimento-container').click()
        cy.wait(2000)
        cy.get('.select2-results').find('li').contains('LP - Licença Prévia - Ofício nº 5155/2024 - ADNOV-DINOV/BIOTIC p/ ANEEL').first().click({ force: true })
    }

    clicarBotaoAdicionar(){
        cy.get('#btn_adicionar').click()
        cy.wait(4000)
    }

    clicarBotaoSalvar(){
        cy.get('#submit').click()
    }

    clicarConfirmar(){
        cy.get('.modal-footer > .btn-primary').click()
    }

    clicarBotaoOk(){
        cy.contains('button','OK').click()
    }

    selecionarRegiaoAdmin(){
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })
    }

    selecionarTpRequerimento(){
        cy.get('#select2-tp_requerimento-container').click()
        cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })
    }

    clicarBotaoPesquisar(){
        cy.get('#pesquisar').click()
    }

    digitarFiltroReiteracao(){
        cy.get('#table-reiteracao_filter > label > .form-control').type('Polo')
    }

    clicarPrimeiroBotaoVisualizar(){
        cy.get('a[title="Visualizar"]').first().click()
    }

    clicarPrimeiroBotaoEditar(){
        cy.get('a[title="Editar"]').first().click()
    }

    selecionarPrimeiroRequerimento(){
        cy.get('#select2-combo_requerimento-container').click()
        cy.get('.select2-results').first().click()
    }

    selecionarRequerimentoEditar(){
        cy.get('#select2-combo_requerimento-container').click()
        cy.wait(1000)
        cy.get('.select2-results').find('li').contains('LP - Licença Prévia').click({ force: true })
    }

    botaoEditar(){
        cy.get('.sidebar-toggle').click()
    }

    clicarModalSalvar(){
        cy.get('.modal-footer > .btn-primary').should('contain.text', 'Salvar').click()
        cy.wait(2000)
    }

    clicarModalOk(){
        cy.get('.modal-footer > .btn').should('contain.text', 'OK').click()
        cy.wait(2000)
    }

    clicarPrimeiroBotaoExcluir(){
        cy.get('a[title="Excluir"]').first().click()
        cy.wait(2000)
    }

    clicarModalConfirmar(){
        cy.get('.modal-footer > .btn-primary').should('contain.text', 'Confirmar').click()
    }

    clicarBotaoLimpar(){
        cy.contains('button', 'Limpar').click();
    }

    //VALIDAR CAMPOS DE TEXTO
    validarLabelCadastrarRA(){
        cy.get(':nth-child(1) > .form-group > .control-label').should('contain',"R.A")
    }

    validarLabelCadastrarEmpreendimento(){
        cy.get(':nth-child(2) > .form-group > .control-label').should('contain',"Empreendimento")
    }

    validarLabelCadastrarTipoRequerimento(){
        cy.get(':nth-child(3) > .form-group > .control-label').should('contain',"Tipo Requerimento")
    }

    validarLabelCadastrarRequerimentos(){
        cy.get('.col-md-12 > :nth-child(1) > .control-label').should('contain',"Requerimentos")
    }

    validarLabelPesquisarReiteracaoRA(){
        cy.get(':nth-child(1) > .form-group > .control-label').should('contain',"R.A")
    }

    validarLabelPesquisarReiteracaoEmpreendimento(){
        cy.get(':nth-child(2) > .form-group > .control-label').should('contain',"Empreendimento")
    }

    validarLabelPesquisarReiteracaoTipoRequerimento(){
        cy.get(':nth-child(3) > .form-group > .control-label').should('contain',"Tipo Requerimento")
    }

    validarLabelPesquisarReiteracaoCodigoReiteracao(){
        cy.get('.sorting_asc').should('contain',"Código  Reiteração")
    }

    validarAriaLabelPesquisarReiteracaoEmpreendimento(){
        cy.get('[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]').should('contain',"Empreendimento")
    }

    validarAriaLabelPesquisarReiteracaoTipoRequerimento(){
        cy.get('[aria-label="Tipo Requerimento: Ordenar colunas de forma ascendente"]').should('contain',"Tipo Requerimento")
    }

    validarAriaLabelPesquisarReiteracaoDataPubReq(){
        cy.get('[aria-label="Data Publicação/Requerimento: Ordenar colunas de forma ascendente"]').should('contain',"Data Publicação/Requerimento")
    }

    validarAriaLabelPesquisarReiteracaoAcao(){
        cy.get('[aria-label="Ação: Ordenar colunas de forma ascendente"]').should('contain',"Ação")
    }

    //validar campos de texto em editar reiteração
    validarLabelEditarRA(){
        cy.get('.col-md-4 > .form-group > .control-label').should('contain',"R.A")
    }

    validarLabelEditarEmpreendimento(){
        cy.get('.col-md-5 > .form-group > .control-label').should('contain',"Empreendimento")
    }

    validarLabelEditarTipoRequerimento(){
        cy.get('.col-md-3 > .form-group > .control-label').should('contain',"Tipo Requerimento")
    }

    validarLabelEditarRequerimentos(){
        cy.get('.col-md-12 > :nth-child(1) > .control-label').should('contain',"Requerimentos")
    }

    validarLabelEditarRequerimentosReiterados(){
        cy.get('thead > tr > :nth-child(1)').should('contain',"Requerimentos Reiterados")
    }

    validarWidthRequerimentosReiterados(){
        cy.get('[width="50%"]').should('contain',"Requerimentos Reiterados")
    }

    validarWidthDataPublicacao(){
        cy.get('[width="20%"]').should('contain',"Data de Publicação")
    }

    validarWidthAcaoRequerimento(){
        cy.get('[width="30%"]').should('contain',"Ação Requerimento")
    }

    clicarBotaoVoltar(){
        cy.get('[onclick="window.history.back()"]').click()
    }



}

export default new consultar_reiteracoes()