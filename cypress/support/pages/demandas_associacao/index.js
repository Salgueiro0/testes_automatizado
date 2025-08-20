const el = require('./elements').ELEMENTS
class demandas_associacao {

    irParaGLA() {
        cy.visit('/');
    }

    login() {
        cy.get(el.campoUsuario).type('C9020840');
        cy.get(el.campoSenha).type('welcome_1');
        cy.get(el.botaoLogin).click();
    }
    validarTextoPendencia(){
        cy.get('h1').should('have.text', "Pendência")
    }
    irParaDemandas(){
        cy.get(':nth-child(3) > [href="#"]').click()
    }
    irParaDemandasAssociacao(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
    }
    validarAbaAssocDemanda(){
        cy.get('h1').should('have.text', "Associação de Demanda")
    }
    validarAbaAssocPesquisar(){
        cy.get('.box-title').should('have.text', "Pesquisar")
    }
    validarAbaAssocTipoAssoc(){
        cy.get('.col-md-4 > .form-group > .control-label').should('have.text', "Tipo de Associação")
    }
    validarAbaAssocRA(){
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
    }
    validarAbaAssocEmpreendimento(){
        cy.get(':nth-child(2) > .form-group > .control-label').should('have.text', "Empreendimento")
    }
    seletorTipo() {
        cy.get('.col-md-4 > .form-group > .select2-container > .selection > .select2-selection').click()
    }
    seletorDropdown(opcao) {
        cy.get('.select2-results').find('li').contains(opcao).click({force: true})
    }
    seletorRegiaoAdmin() {
        cy.get('#select2-cd_regiao_admin-container').click()
    }
    seletorEmpreendimento() {
        cy.get('#select2-cd_empreendimento-container > .select2-selection__clear').click()
    }
    limparFormularioPesquisa() {
        cy.get('[onclick="limparFormularioPesquisa()"]').click()
    }
    clicarBotaoNovoCadastro(){
        cy.get('.btn-success').click()
    }
    validarNovoCadasLabelNovoCadas(){
        cy.get('.box-title').should('have.text', "Novo Cadastro")
    }
    validarNovoCadasLabelTipoAssoc(){
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > label').should('have.text', "Tipo de Associação *")
    }
    validarNovoCadasLabelRA(){
        cy.get(':nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
    }
    validarNovoCadasLabelEmpreendimento(){
        cy.get(':nth-child(3) > .form-group > .control-label').should('have.text', "Empreendimento")
    }
    validarNovoCadasLabelDemandas(){
        cy.get(':nth-child(4) > .form-group > label').should('have.text', "Demandas *")
    }
    validarNovoCadasTabelaRA(){
        cy.get('tr > :nth-child(1)').should('have.text', "R.A")
    }
    validarNovoCadasTabelaEmpreendimento(){
        cy.get('tr > :nth-child(2)').should('have.text', "Empreendimento")
    }
    validarNovoCadasTabelaDemandas(){
        cy.get('tr > :nth-child(3)').should('have.text', "Demandas")
    }
    validarNovoCadasTabelaArquivada(){
        cy.get('tr > :nth-child(4)').should('have.text', "Arquivada")
    }
    validarNovoCadasTabelaAcao(){
        cy.get('.text-center').should('have.text', "Ação")
    }
    seletorDemanda(){
        cy.get('#select2-cd_demanda-container').click()
    }
    clicarBotaoAdicionar(){
        cy.get('#btnAdicionar').click()
    }
    clicarExcluir(){
        cy.get('.text-center > .fas').click()
    }

    seletorTpAssociacao(){
        cy.get('#select2-tp_associacao-container').click()
    }
    seletorCdEmpreendimento(){
        cy.get('#select2-cd_empreendimento-container').click()
    }
    botaoSalvar(){
        cy.get('#btnSalvar').click()
    }
    clicarModalOk(){
        cy.get('.modal-footer > .btn').should('be.visible').and('contain.text', 'OK').click();
    }
    clicarModalBTNOk(){
        cy.get('.modal-footer > .btn-primary').click()
    }
    clicarBotaoVoltar(){
        cy.get('[onclick="window.history.back()"]').click()
    }
    clicarBotaoPesquisar(){
        cy.get('#pesquisar').click()
    }
    clicarPrimeiroBotaoEditar(){
        cy.get('a[title="Editar"]').first().click();
    }
    clicarAba(){
        cy.get(':nth-child(2) > .text-center > .fas').click()
    }
    clicarPrimeiroBotaoVisualizar(){
        cy.get('a[title="Visualizar"]').first().click();
    }
    botaoExcluirAssocDemand(){
        cy.get('#btn-delete-associacao-demanda').click()
    }
}

export default new demandas_associacao ()