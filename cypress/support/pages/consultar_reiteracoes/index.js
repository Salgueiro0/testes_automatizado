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
        cy.get(el.abaRequerimento).click()
    }

    irParaConsultarReiteracoes(){
        cy.get(el.abaConsultarReiteracoes).click()
    }

    irParaCadastrarReiteracoes(){
        cy.get(el.botaoCadastrarReiteracoes).click()
    }

    selecionarRegiaoAdm(){
        cy.get(el.seletorRegiaoAdm).click()
        cy.get(el.dropdownGLA).find('li').contains('RA-I - BRASILIA ').click({ force: true })
        cy.wait(2000)
    }

    selecionarEmpreendimento(){
        cy.get(el.seletorEmpreendimentoContainer).click()
        cy.wait(2000)
        cy.get(el.dropdownGLA).find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({ force: true })
        cy.wait(2000)
    }

    selecionarTipoRequerimento(){
        cy.get(el.seletorTipoRequerimentoContainer).click()
        cy.get(el.dropdownGLA).find('li').contains('Nova Permissão').click({ force: true })
        cy.wait(4000)
    }

    selecionarRequerimento(){
        cy.get(el.seletorRequerimentoContainer).click()
        cy.wait(2000)
        cy.get(el.dropdownGLA).find('li').contains('LP - Licença Prévia - Ofício nº 6/1565 - ACJUR p/ ADASA').first().click({ force: true })
    }

    selecionarSegundoRequerimento(){
        cy.get(el.seletorRequerimentoContainer).click()
        cy.wait(2000)
        cy.get(el.dropdownGLA).find('li').contains('LP - Licença Prévia - Ofício nº 5155/2024 - ADNOV-DINOV/BIOTIC p/ ANEEL').first().click({ force: true })
    }

    clicarBotaoAdicionar(){
        cy.get(el.botaoAdicionar).click()
        cy.wait(4000)
    }

    clicarBotaoSalvar(){
        cy.get(el.botaoSalvar).click()
    }

    clicarConfirmar(){
        cy.get(el.modalConfirmar).click()
    }

    clicarBotaoOk(){
        cy.contains('button','OK').click()
    }

    selecionarRegiaoAdmin(){
        cy.get(el.seletorRegiaoAdminContainer).click()
        cy.get(el.dropdownGLA).find('li').contains('RA-I - BRASILIA ').click({ force: true })
    }

    selecionarTpRequerimento(){
        cy.get(el.seletorTpRequerimentoContainer).click()
        cy.get(el.dropdownGLA).find('li').contains('Nova Permissão').click({ force: true })
    }

    clicarBotaoPesquisar(){
        cy.get(el.botaoPesquisar).click()
    }

    digitarFiltroReiteracao(){
        cy.get(el.filtroReiteracao).type('Polo')
    }

    clicarPrimeiroBotaoVisualizar(){
        cy.get(el.primeiroBotaoVisualizar).first().click()
    }

    clicarPrimeiroBotaoEditar(){
        cy.get(el.primeiroBotaoEditar).first().click()
    }

    selecionarPrimeiroRequerimento(){
        cy.get(el.seletorRequerimentoContainer).click()
        cy.get(el.dropdownGLA).first().click()
    }

    selecionarRequerimentoEditar(){
        cy.get(el.seletorRequerimentoContainer).click()
        cy.wait(1000)
        cy.get(el.dropdownGLA).find('li').contains('LP - Licença Prévia').click({ force: true })
    }

    botaoEditar(){
        cy.get(el.botaoEditar).click()
    }

    clicarModalSalvar(){
        cy.get(el.modalSalvar).should('contain.text', 'Salvar').click()
        cy.wait(2000)
    }

    clicarModalOk(){
        cy.get(el.modalOk).should('contain.text', 'OK').click()
        cy.wait(2000)
    }

    clicarPrimeiroBotaoExcluir(){
        cy.get(el.primeiroBotaoExcluir).first().click()
        cy.wait(2000)
    }

    clicarModalConfirmar(){
        cy.get(el.modalConfirmar).should('contain.text', 'Confirmar').click()
    }

    clicarBotaoLimpar(){
        cy.contains('button', 'Limpar').click();
    }

    //VALIDAR CAMPOS DE TEXTO
    validarLabelCadastrarRA(){
        cy.get(el.labelCadastrarRA).should('contain',"R.A")
    }

    validarLabelCadastrarEmpreendimento(){
        cy.get(el.labelCadastrarEmpreendimento).should('contain',"Empreendimento")
    }

    validarLabelCadastrarTipoRequerimento(){
        cy.get(el.labelCadastrarTipoRequerimento).should('contain',"Tipo Requerimento")
    }

    validarLabelCadastrarRequerimentos(){
        cy.get(el.labelCadastrarRequerimentos).should('contain',"Requerimentos")
    }

    validarLabelPesquisarReiteracaoRA(){
        cy.get(el.labelPesquisarReiteracaoRA).should('contain',"R.A")
    }

    validarLabelPesquisarReiteracaoEmpreendimento(){
        cy.get(el.labelPesquisarReiteracaoEmpreendimento).should('contain',"Empreendimento")
    }

    validarLabelPesquisarReiteracaoTipoRequerimento(){
        cy.get(el.labelPesquisarReiteracaoTipoRequerimento).should('contain',"Tipo Requerimento")
    }

    validarLabelPesquisarReiteracaoCodigoReiteracao(){
        cy.get(el.labelPesquisarReiteracaoCodigoReiteracao).should('contain',"Código  Reiteração")
    }

    validarAriaLabelPesquisarReiteracaoEmpreendimento(){
        cy.get(el.ariaLabelPesquisarReiteracaoEmpreendimento).should('contain',"Empreendimento")
    }

    validarAriaLabelPesquisarReiteracaoTipoRequerimento(){
        cy.get(el.ariaLabelPesquisarReiteracaoTipoRequerimento).should('contain',"Tipo Requerimento")
    }

    validarAriaLabelPesquisarReiteracaoDataPubReq(){
        cy.get(el.ariaLabelPesquisarReiteracaoDataPubReq).should('contain',"Data Publicação/Requerimento")
    }

    validarAriaLabelPesquisarReiteracaoAcao(){
        cy.get(el.ariaLabelPesquisarReiteracaoAcao).should('contain',"Ação")
    }

    //validar campos de texto em editar reiteração
    validarLabelEditarRA(){
        cy.get(el.labelEditarRA).should('contain',"R.A")
    }

    validarLabelEditarEmpreendimento(){
        cy.get(el.labelEditarEmpreendimento).should('contain',"Empreendimento")
    }

    validarLabelEditarTipoRequerimento(){
        cy.get(el.labelEditarTipoRequerimento).should('contain',"Tipo Requerimento")
    }

    validarLabelEditarRequerimentos(){
        cy.get(el.labelEditarRequerimentos).should('contain',"Requerimentos")
    }

    validarLabelEditarRequerimentosReiterados(){
        cy.get(el.labelEditarRequerimentosReiterados).should('contain',"Requerimentos Reiterados")
    }

    validarWidthRequerimentosReiterados(){
        cy.get(el.widthRequerimentosReiterados).should('contain',"Requerimentos Reiterados")
    }

    validarWidthDataPublicacao(){
        cy.get(el.widthDataPublicacao).should('contain',"Data de Publicação")
    }

    validarWidthAcaoRequerimento(){
        cy.get(el.widthAcaoRequerimento).should('contain',"Ação Requerimento")
    }

    clicarBotaoVoltar(){
        cy.get(el.botaoVoltar).click()
    }



}

export default new consultar_reiteracoes()