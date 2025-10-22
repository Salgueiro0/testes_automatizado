/// <reference types="cypress" />

import demandas_associacao from "../../../support/pages/demandas_associacao";
//HUs desatualizadas:  EU014 - US048(RN033, RN034, RN037) EU016 - US050(RN044),

function cadastrarAssociacaoDemanda(tipo,regiao,empreendimento,demanda,regiao2,empreendimento2,demanda2) {
    demandas_associacao.irParaDemandas()
    demandas_associacao.irParaDemandasAssociacao()
    demandas_associacao.clicarBotaoNovoCadastro()
    demandas_associacao.selecionarTpAssociacao()
    demandas_associacao.seletorDropdown(tipo)
    cy.wait(2000)
    demandas_associacao.seletorRegiaoAdmin()
    demandas_associacao.seletorDropdown(regiao)
    cy.wait(2000)
    demandas_associacao.seletorEmpreendimento()
    demandas_associacao.seletorDropdown(empreendimento)
    cy.wait(2000)
    demandas_associacao.seletorDemanda()
    demandas_associacao.seletorDropdown(demanda)
    demandas_associacao.clicarBotaoAdicionar()
    cy.wait(2000)
    demandas_associacao.seletorRegiaoAdmin()
    cy.wait(1000)
    demandas_associacao.seletorDropdown(regiao2)
    cy.wait(2000)
    demandas_associacao.selecionarCdEmpreendCont()
    demandas_associacao.seletorDropdown(empreendimento2)
    cy.wait(2000)
    demandas_associacao.seletorDemanda()
    demandas_associacao.seletorDropdown(demanda2)
    demandas_associacao.clicarBotaoAdicionar()
    demandas_associacao.botaoSalvar()
    demandas_associacao.clicarModalBTNOk()
}

function pesquisarDemanda(tipo,ra,empreendimento){
    demandas_associacao.irParaDemandas()
    demandas_associacao.irParaDemandasAssociacao()
    demandas_associacao.pesquisarTipoAssociacao()
    demandas_associacao.seletorDropdown(tipo)
    demandas_associacao.pesquisarRA()
    demandas_associacao.seletorDropdown(ra)
    cy.wait(3000)
    demandas_associacao.pesquisarEmpreendimento()
    demandas_associacao.seletorDropdown(empreendimento)
    demandas_associacao.clicarBotaoPesquisar()
}

function excluirDemanda(){
    demandas_associacao.excluirAssociacaoDemanda()
    demandas_associacao.clicarModalBTNOk()
    demandas_associacao.clicarModalOk()
}

describe('pendência', () => {
    beforeEach(() => {
        cy.viewport(1980, 1200)
    })

    it('teste Associação-consultar', () => {
        demandas_associacao.irParaGLA()
        demandas_associacao.login()
        demandas_associacao.validarTextoPendencia()
        demandas_associacao.irParaDemandas()
        demandas_associacao.irParaDemandasAssociacao()

        //validando os campos da aba da associação
        demandas_associacao.validarAbaAssocDemanda()
        demandas_associacao.validarAbaAssocPesquisar()
        demandas_associacao.validarAbaAssocTipoAssoc()
        demandas_associacao.validarAbaAssocRA()
        demandas_associacao.validarAbaAssocEmpreendimento()

        //Limpar
        demandas_associacao.seletorTipo()
        demandas_associacao.seletorRegiaoAdmin()
        demandas_associacao.seletorDropdown('RA-I - BRASILIA')
        demandas_associacao.seletorEmpreendimento()
        demandas_associacao.seletorDropdown('103 - Estagio de produção')
        demandas_associacao.limparFormularioPesquisa() //EU014 - US048 RN046 - LIMPAR

        //Campos de texto
        demandas_associacao.clicarBotaoNovoCadastro()    // -- US033 - RN015 Caminhos Cadastro demanda associação --
        demandas_associacao.validarTitulo()              // -- US033 - RN015 identificação/título--
        demandas_associacao.validarNovoCadasLabelNovoCadas()
        demandas_associacao.validarNovoCadasLabelTipoAssoc()
        demandas_associacao.validarNovoCadasLabelRA()
        demandas_associacao.validarNovoCadasLabelEmpreendimento()
        demandas_associacao.validarNovoCadasLabelDemandas()
        demandas_associacao.validarNovoCadasTabelaRA()
        demandas_associacao.validarNovoCadasTabelaEmpreendimento()
        demandas_associacao.validarNovoCadasTabelaDemandas()
        demandas_associacao.validarNovoCadasTabelaArquivada()
        demandas_associacao.validarNovoCadasTabelaAcao()

        //Voltar
        demandas_associacao.clicarBotaoVoltar() //EU014 - US048 - RN046 - VOLTAR
        demandas_associacao.clicarBotaoNovoCadastro()

        cadastrarAssociacaoDemanda('Geral','RA-I - BRASILIA','103 - Estagio de produção','LOC - Licença de Operação Corretiva nº 07/04/2025',
            'RA-II - GAMA','8 - FAZENDA VINICIUS','MP - Manifestação de Pendências nº 1/2024')
        demandas_associacao.seletorRegiaoAdmin()
        demandas_associacao.seletorDropdown('RA-I - BRASILIA')
        cy.wait(2000)
        demandas_associacao.seletorCdEmpreendimento()
        demandas_associacao.seletorDropdown('103 - Estagio de produção')
        demandas_associacao.clicarBotaoPesquisar()

        //Edição
        demandas_associacao.clicarPrimeiroBotaoEditar()        // -- US033 - RN015 Caminho Editar Associação de Demanda --
        demandas_associacao.seletorRegiaoAdmin()
        demandas_associacao.seletorDropdown('RA-II - GAMA')
        cy.wait(2000)
        demandas_associacao.seletorCdEmpreendimento()
        demandas_associacao.seletorDropdown('5 - Empreendimento XPTO 1')
        cy.wait(2000)
        demandas_associacao.seletorDemanda()
        demandas_associacao.selecionarPrimeiroDropdown()
        demandas_associacao.clicarBotaoAdicionar()

        //Visualização
        // //EU016 - US050 - RN043 - LISTA DE DEMANDAS CADASTRADAS com filtros
        demandas_associacao.seletorRegiaoAdmin()
        demandas_associacao.seletorDropdown('RA-I - BRASILIA')
        cy.wait(2000)
        demandas_associacao.seletorCdEmpreendimento()
        demandas_associacao.seletorDropdown('103 - Estagio de produção')
        cy.wait(2000)
        demandas_associacao.clicarBotaoSalvar()
        demandas_associacao.clicaModalSalvar()
        demandas_associacao.seletorTipo()
        cy.wait(2000)
        demandas_associacao.seletorRegiaoAdmin()
        demandas_associacao.seletorDropdown('RA-I - BRASILIA')
        cy.wait(2000)
        demandas_associacao.seletorEmpreendimento()
        demandas_associacao.seletorDropdown('103 - Estagio de produção')
        demandas_associacao.clicarBotaoPesquisar()
        demandas_associacao.clicarPrimeiroBotaoVisualizar()         // -- US033 - RN015  Visualizar Associação de Demanda (por meio do Ícone do Olho). EU015 - US049 - RN040 - ÍCONE DE AÇÃO
        demandas_associacao.botaoExcluirAssocDemand()

        //Excluir
        demandas_associacao.clicarModalBTNOk()
        cy.wait(1000)
        demandas_associacao.clicarModalOk()
        demandas_associacao.clicarBotaoPesquisar() //EU016 - US050 - RN043 - LISTA DE DEMANDAS CADASTRADAS sem filtros
        demandas_associacao.clicarPrimeiroBotaoVisualizar()
        demandas_associacao.clicarBotaoVoltar()
        demandas_associacao.validarVoltaPesquisa() //EU015 - US049 - RN041 - BOTÃO VOLTAR

        //EU014 - US048 - RN046 - SALVAR
    })
    it('campos obrigatórios', () => {
        demandas_associacao.irParaGLA()
        demandas_associacao.login()
        demandas_associacao.irParaDemandas()
        demandas_associacao.irParaDemandasAssociacao()
        demandas_associacao.clicarBotaoNovoCadastro()
        demandas_associacao.seletorRegiaoAdmin()
        demandas_associacao.seletorDropdown('RA-I - BRASILIA')
        demandas_associacao.seletorEmpreendimento()
        demandas_associacao.seletorDropdown('103 - Estagio de produção')
        demandas_associacao.seletorDemanda()
        demandas_associacao.seletorDropdown('LOC - Licença de Operação Corretiva nº 07/04/2025')
        demandas_associacao.clicarBotaoAdicionar()
        demandas_associacao.validarMSGObrigatoriaCadastro() //EU014 - US048 Tipo de Associação e Demandas - Obrigatório RN038  - EU017 - US051.1 - MSG049
        demandas_associacao.clicarOK()
        demandas_associacao.selecionarTpAssociacao()
        demandas_associacao.validarSelecoesTipoAssoc()  //EU014 - US048 - RN032 - TIPO DE ASSOCIAÇÃO
    })
    it('Cadastrar várias associações de demanda', () => {
        demandas_associacao.irParaGLA()
        demandas_associacao.login()

        cadastrarAssociacaoDemanda('Geral','RA-I - BRASILIA','103 - Estagio de produção','LOC - Licença de Operação Corretiva nº 07/04/2025',
            'RA-II - GAMA','8 - FAZENDA VINICIUS','MP - Manifestação de Pendências nº 1/2024') //EU014 - US048 - RN046 - SALVAR
        cy.reload(true)
        cadastrarAssociacaoDemanda('Geral','RA-I - BRASILIA','103 - Estagio de produção','LIC - Licença de Instalação Corretiva nº 101/2025',
            'RA-I - BRASILIA','103 - Estagio de produção','LOC - Licença de Operação Corretiva nº 07/04/2025')

        pesquisarDemanda('Geral','RA-I - BRASILIA','103 - Estagio de produção')
        demandas_associacao.validarTabelaVariosRAs() //EU016 - US050 - RN124,RN125 - CONSULTAR ASSOCIAÇÃO DE DEMANDA - TABELA RA
        demandas_associacao.validarTabelaUmRA() //EU016 - US050 - RN124,RN125 - CONSULTAR ASSOCIAÇÃO DE DEMANDA - TABELA RA
        demandas_associacao.validarArquivados() //EU016 - US050 - RN126 - CONSULTAR ASSOCIAÇÃO DEMANDA - TABELA ARQUIVADO
        excluirDemanda()
        excluirDemanda()
    })
})