/// <reference types="cypress" />

import demandas_associacao from "../../../support/pages/demandas_associacao";

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

        //teste do botão limpar da aba da associação
        demandas_associacao.seletorTipo()
        demandas_associacao.seletorRegiaoAdmin()
        demandas_associacao.seletorDropdown('RA-I - BRASILIA')
        demandas_associacao.seletorEmpreendimento()
        demandas_associacao.seletorDropdown('103 - Estagio de produção')
        demandas_associacao.limparFormularioPesquisa()

        //validação de novo cadastro
        demandas_associacao.clicarBotaoNovoCadastro()
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

        //validação de novo cadastro
        demandas_associacao.selecionarTpAssociacao()
        demandas_associacao.seletorDropdown('Geral')
        cy.wait(2000)
        demandas_associacao.seletorRegiaoAdmin()
        demandas_associacao.seletorDropdown('RA-I - BRASILIA')
        demandas_associacao.seletorEmpreendimento()
        demandas_associacao.seletorDropdown('103 - Estagio de produção')
        demandas_associacao.seletorDemanda()
        demandas_associacao.seletorDropdown('LOC - Licença de Operação Corretiva nº 07/04/2025')
        demandas_associacao.clicarBotaoAdicionar()
        demandas_associacao.clicarExcluir()

        //validação do botão voltar
        demandas_associacao.clicarBotaoVoltar()

        //salvamento de novo cadastro
        demandas_associacao.clicarBotaoNovoCadastro()
        demandas_associacao.seletorTpAssociacao()
        demandas_associacao.seletorDropdown('Geral')
        cy.wait(2000)
        demandas_associacao.seletorRegiaoAdmin()
        demandas_associacao.seletorDropdown('RA-I - BRASILIA')
        cy.wait(2000)
        demandas_associacao.seletorCdEmpreendimento()
        demandas_associacao.seletorDropdown('103 - Estagio de produção')
        cy.wait(2000)
        demandas_associacao.seletorDemanda()
        demandas_associacao.seletorDropdown('LOC - Licença de Operação Corretiva nº 07/04/2025')
        demandas_associacao.clicarBotaoAdicionar()
        demandas_associacao.seletorRegiaoAdmin()
        cy.wait(1000)
        demandas_associacao.seletorDropdown('RA-II - GAMA')
        cy.wait(2000)
        demandas_associacao.selecionarCdEmpreendCont()
        demandas_associacao.seletorDropdown('8 - FAZENDA VINICIUS')
        cy.wait(2000)
        demandas_associacao.seletorDemanda()
        demandas_associacao.seletorDropdown('MP - Manifestação de Pendências nº 1/2024')
        demandas_associacao.clicarBotaoAdicionar()
        demandas_associacao.botaoSalvar()
        demandas_associacao.clicarModalBTNOk()

        //validação de salvamento
        demandas_associacao.seletorRegiaoAdmin()
        demandas_associacao.seletorDropdown('RA-I - BRASILIA')
        cy.wait(2000)
        demandas_associacao.seletorCdEmpreendimento()
        demandas_associacao.seletorDropdown('103 - Estagio de produção')
        demandas_associacao.clicarBotaoPesquisar()

        //validação da edição
        demandas_associacao.clicarPrimeiroBotaoEditar()
        demandas_associacao.seletorRegiaoAdmin()
        demandas_associacao.seletorDropdown('RA-II - GAMA')
        cy.wait(2000)
        demandas_associacao.seletorCdEmpreendimento()
        demandas_associacao.seletorDropdown('5 - Empreendimento XPTO 1')
        cy.wait(2000)
        demandas_associacao.seletorDemanda()
        demandas_associacao.selecionarPrimeiroDropdown()
        demandas_associacao.clicarBotaoAdicionar()

        //validação de visualização
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
        demandas_associacao.clicarPrimeiroBotaoVisualizar()
        demandas_associacao.botaoExcluirAssocDemand()

        //validação para excluir a associação
        demandas_associacao.clicarModalBTNOk()
        demandas_associacao.clicarModalOk()
    })
})