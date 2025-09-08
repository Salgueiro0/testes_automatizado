const el = require('./elements').ELEMENTS
class documentos{

    clicarEmpreendimento(){
        cy.get(el.botaoEmpreendimento).click()
    }

    selecionarEmpreendimento(){
        cy.get(el.campoEmpreendimento).click()
        cy.get(el.dropdwonGla).find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click()
    }

    pesquisarEmpreendimento(){
        cy.get(el.botaoPesquisarEmpreendimento).click()
    }

    irParaGLA(){
        cy.visit('/')
    }

    login(){
        cy.get(el.campoUsuario).type('C9020840')
        cy.get(el.campoSenha).type('welcome_1')
        cy.get(el.botaoLogin).click()
    }
    clicarVisualizarPrimeiraOpcao(){
        cy.get(el.botaoVisualizar).first().click()
    }

    clicarBotaoNovoDocumento(){
        cy.contains('a', 'Novo Documento').click({ force: true });
    }

    digitarCampoDescricaoDocumento(){
        cy.get(el.campoDescricaoDocumento).type('teste')
    }

    clicarBotaoLimpar(){
        cy.contains('button', 'Limpar').click()
    }

    selecionarTipoDocumento(){
        cy.get(el.campoTipoDocumento).click()
        cy.get(el.dropdwonGla).find('li').contains('Outros').click({force: true})
    }

    digitarNumeroDocumento(){
        cy.get(el.campoNumeroDocumento).type('1245')
    }

    digitarDataDocumento(){
        cy.get(el.dataDocumento).type('2025-01-01')
    }

    selecionarOrgaoDocumento(){
        cy.get(el.campoOrgaoDocumento).click()
        cy.get(el.dropdwonGla).find('li').contains('ADETUR - AGÊNCIA DE DESENVOLVIMENTO DO TURISMO DO DISTRITO FEDERAL').click({force: true})
    }

    digitarNumeroSeiDocumento(){
        cy.get(el.numeroSeiDoc).type('435456')
    }

    digitarDescricaoDocumento(){
        cy.get(el.campoDescricaoDocumento).type('teste')
    }

    clicarBotaoSalvar(){
        cy.get(el.botaoSalvar).click()
    }

    clicarModalBotaoOk(){
        cy.contains('button', 'OK').click()
    }

    irAbaLateralDocumentos(){
        cy.get(el.abaLateralDocumentos).click()
    }

    validarLabelOrigem(){
        cy.get(el.labelOrigem).should('contain', "Empreendimento")
    }

    validarLabelExigencia(){
        cy.get(el.labelExigencia).should('contain', "Exigência")
    }

    validarLabelTipo(){
        cy.get(el.labelTipo).should('contain', "Tipo")
    }

    validarLabelOrgaoDocumento(){
        cy.get(el.labelOrgaoDocumento).should('contain', "Órgão Documento")
    }

    validarLabelDescricao(){
        cy.get(el.labelDescricao).should('contain', "Descrição")
    }

    validarLabelRa(){
        cy.get(el.labelRa).should('contain', "R.A")
    }

    validarLabelDemanda(){
        cy.get(el.labelDemanda).should('contain', "Demanda")
    }

    validarLabelRequerimento(){
        cy.get(el.labelRequerimento).should('contain', "Requerimento")
    }

    validarLabelNumero(){
        cy.get(el.labelNumero).should('contain', "Número")
    }

    validarLabelArquivoPrincipal(){
        cy.get(el.labelArquivoPrincipal).should('contain', "Arquivo Principal")
    }

    validarLabelPeriodoDataPublicacao(){
        cy.get(el.labelPeriodoDataPublicacao).should('contain', "Período de Data de Publicação")
    }

    validarLabelEmpreendedorResponsavel(){
        cy.get(el.labelEmpreendedorResponsavel).should('contain', "Empreendedor Responsável")
    }

    validarRowOrigem(){
        cy.get(el.rowOrigem).should('contain', "Origem")
    }

    validarRowRa(){
        cy.get(el.rowRa).should('contain', "RA")
    }

    validarRowEmpreendimento(){
        cy.get(el.rowEmpreendimento).should('contain', "Empreendimento")
    }

    validarRowTipo(){
        cy.get(el.rowTipo).should('contain', "Tipo")
    }

    validarRowNumero(){
        cy.get(el.rowNumero).should('contain', "Número")
    }

    validarRowData(){
        cy.get(el.rowData).should('contain', "Data")
    }

    validarRowOrgao(){
        cy.get(el.rowOrgao).should('contain', "Órgão")
    }

    validarRowNSeiDoc(){
        cy.get(el.rowNSeiDoc).should('contain', "Nº SEI Doc")
    }

    validarRowDescricao(){
        cy.get(el.rowDescricao).should('contain', "Descrição")
    }

    validarRowAcao(){
        cy.get(el.rowAcao).should('contain', "Ação")
    }

    clicarBotaoLimparAbaDocumentos(){
        cy.contains('button','Limpar').click()
    }

    clicarBotaoPesquisarDocumento(){
        cy.get(el.botaoPesquisarDocumento).click()
    }

    digitarCampoFiltro(){
        cy.get(el.campoFiltro).type('1245')
    }

    selecionarEmpreendimentoEmDocumentos(){
        cy.wait(6000)
        cy.get(el.selecionarEmpreendimentoEmDocumentos).click({force: true})
        cy.wait(4000)
        cy.get(el.dropdwonGla).find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click()
    }

    selecionarRA(){
        cy.get(el.selecionarRAEmDocumentos).click()
        cy.get(el.dropdwonGla).find('li').contains('RA-I - BRASILIA ').click({force: true})
    }

    //DADOS DETALHADOS
    irParaDadosDetalhados(){
        cy.get(el.dadosDetalhados).click()
    }

    rowDadosDetalhadosTipo(){
        cy.get(el.rowDadosDetalhadosTipo).should('contain', "Tipo")
    }

    rowDadosDetalhadosNumero(){
        cy.get(el.rowDadosDetalhadosNumero).should('contain', "Número")
    }

    rowDadosDetalhadosData(){
        cy.get(el.rowDadosDetalhadosData).should('contain', "Data")
    }

    rowDadosDetalhadosOrgao(){
        cy.get(el.rowDadosDetalhadosOrgao).should('contain', "Órgão")
    }

    rowDadosDetalhadosNSeiDoc(){
        cy.get(el.rowDadosDetalhadosNSeiDoc).should('contain', "Nº SEI Doc")
    }

    rowDadosDetalhadosDescricao(){
        cy.get(el.rowDadosDetalhadosDescricao).should('contain', "Descrição")
    }

    //EDITAR DOCUMENTO

    clicarBotaoEditarDocumento(){
        cy.get(el.botaoEditarDocumento).click()
    }

    validarLabelEditarTipo(){
        cy.get(el.labelEditarTipo).should('contain', "Tipo")
    }

    validarLabelEditarOrgaoDocumento(){
        cy.get(el.labelEditarDocumento).should('contain', "Órgão Documento")
    }

    validarLabelEditarDescricao(){
        cy.get(el.labelEditarDescricao).should('contain', "Descrição")
    }

    validarLabelEditarNumero(){
        cy.get(el.labelEditarNumero).should('contain', "Número")
    }

    validarLabelEditarNSeiDoc(){
        cy.get(el.labelEditarNSeiDoc).should('contain', "Data")
    }

    clicarBotaoExcluir(){
        cy.contains('button', "Excluir").click()
    }

    clicarModalBotaoConfirmar(){
        cy.contains('button', "Confirmar").click()
    }
}


export default new documentos()