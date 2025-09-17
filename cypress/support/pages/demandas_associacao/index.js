const el = require('./elements').ELEMENTS
class demandas_associacao {

    irParaGLA() {cy.visit('/');}
    login() {
        cy.get(el.campoUsuario).type('C9020840');
        cy.get(el.campoSenha).type('welcome_1');
        cy.get(el.botaoLogin).click();
    }
    validarTextoPendencia(){cy.get(el.textoPendencia).should('have.text', "Pendência")}
    irParaDemandas(){cy.get(el.abaDemandas).click()}
    irParaDemandasAssociacao(){cy.get(el.menuDemandasAssociacao).click()}
    validarAbaAssocDemanda(){cy.get(el.tituloAssocDemanda).should('have.text',"Associação de Demanda")}
    validarAbaAssocPesquisar(){cy.get(el.tituloAssocPesquisar).should('have.text',"Pesquisar")}
    validarAbaAssocTipoAssoc(){cy.get(el.labelAssocTipoAssoc).should('have.text',"Tipo de Associação")}
    validarAbaAssocRA(){cy.get(el.labelAssocRA).should('have.text',"R.A")}
    validarAbaAssocEmpreendimento(){cy.get(el.labelAssocEmpreendimento).should('have.text',"Empreendimento")}
    seletorTipo(){cy.get(el.selectTpAssociacao).click();cy.get(el.opcaoSelect2).contains('Geral').click()}
    clicaModalSalvar(){cy.get(el.botaoModalSalvar).click()}
    seletorDropdown(opcao){cy.get(el.listaSelect2).find('li').contains(opcao).click({force:true})}
    seletorRegiaoAdmin(){cy.get(el.selectRegiaoAdmin).click()}
    seletorEmpreendimento(){cy.get(el.limparEmpreendimento).click()}
    limparFormularioPesquisa(){cy.get(el.botaoLimparForm).click()}
    clicarBotaoNovoCadastro(){cy.get(el.botaoNovoCadastro).click()}
    validarTitulo(){cy.get('h1').should('contain','Associação de Demanda')}
    validarNovoCadasLabelNovoCadas(){cy.get(el.tituloAssocPesquisar).should('have.text', "Novo Cadastro")}
    validarNovoCadasLabelTipoAssoc(){cy.get(el.labelNovoTipoAssoc).should('have.text',"Tipo de Associação *")}
    validarNovoCadasLabelRA(){cy.get(el.labelNovoRA).should('have.text',"R.A")}
    validarNovoCadasLabelEmpreendimento(){cy.get(el.labelNovoEmpreendimento).should('have.text',"Empreendimento")}
    validarNovoCadasLabelDemandas(){cy.get(el.labelNovoDemandas).should('have.text',"Demandas *")}
    validarNovoCadasTabelaRA(){cy.get(el.tabelaRA).should('have.text',"R.A")}
    validarNovoCadasTabelaEmpreendimento(){cy.get(el.tabelaEmpreendimento).should('have.text',"Empreendimento")}
    validarNovoCadasTabelaDemandas(){cy.get(el.tabelaDemandas).should('have.text',"Demandas")}
    validarNovoCadasTabelaArquivada(){cy.get(el.tabelaArquivada).should('have.text',"Arquivada")}
    validarNovoCadasTabelaAcao(){cy.get(el.tabelaAcao).should('have.text',"Ação")}
    selecionarTpAssociacao(){cy.get(el.selectTpAssociacaocont).click()}
    seletorDemanda(){cy.wait(2000);cy.get(el.selectDemanda).click()}
    clicarBotaoAdicionar(){cy.get(el.botaoAdicionar).click()}
    clicarExcluir(){cy.get(el.botaoExcluir).click()}
    seletorTpAssociacao(){cy.get(el.selectTpAssociacao).click()}
    seletorCdEmpreendimento(){cy.get(el.selectCdEmpreendimento,{timeout:10000}).should('be.visible').click()}
    botaoSalvar(){cy.get(el.botaoSalvar).click()}
    clicarModalOk(){cy.get(el.botaoModalOk).should('be.visible').and('contain.text','OK').click()}
    clicarModalBTNOk(){cy.get(el.botaoModalBTNOk).click()}
    clicarBotaoVoltar(){cy.get(el.botaoVoltar).click()}
    clicarBotaoSalvar(){cy.get(el.botaoSalvar).click()}
    clicarBotaoPesquisar(){cy.get(el.botaoPesquisar).click()}
    clicarPrimeiroBotaoEditar(){cy.get(el.primeiroBotaoEditar).first().click()}
    clicarPrimeiroBotaoVisualizar(){cy.get(el.primeiroBotaoVisualizar).first().click()}
    botaoExcluirAssocDemand(){cy.get(el.botaoExcluirAssocDemand).click()}

    selecionarCdEmpreendCont(){cy.get(el.selectCdEmpreendimento).click()}
    selecionarPrimeiroDropdown(){cy.get(el.listaSelect2).find('li').first().click({force: true})}
}

export default new demandas_associacao ()