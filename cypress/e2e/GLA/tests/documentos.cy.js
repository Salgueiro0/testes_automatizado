import documentos from "../../../support/pages/documentos";
import {ELEMENTS as el} from "../../../support/pages/documentos/elements";

describe('consultar_requerimentos', () => {

    beforeEach(() => {

        cy.session('loginSession', () => {
            cy.visit('/')
            cy.viewport(2000, 1200)
            cy.get(':nth-child(2) > .form-control').type('C9020840')
            cy.get(':nth-child(3) > .form-control').type('welcome_1')
            cy.get('.btn').click()
            cy.get('h1').should('have.text', "Pendência")
        })
    })
    it('Documentos', () => {

        // //CRIAR EMPREENDIMENTO PARA TESTE
        // cy.visit('http://gla-homol.terracapnet.local')
        // cy.viewport(2000, 1200)
        // cy.get('h1').should('have.text', "Pendência")
        // cy.wait(2000)
        // cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        // cy.get('.btn-success').click()
        // cy.get('#select2-cd_regiao_admin-container').click()
        // cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        // cy.get('#cd_orgao_processo_sei').type('11111')
        // cy.get('#nr_processo_sei').type('11111111')
        // cy.get('#aa_processo_sei').type('1111')
        // cy.get('#select2-tp_empreendimento-container').click()
        // cy.get('.select2-results').find('li').contains('Parcelamento de Solo Urbano - Novo').click({force: true})
        // cy.get('#ds_empreendimento').type('ambiental')
        // cy.get('#select2-tp_prioridade-container').click()
        // cy.get('.select2-results').find('li').contains('Planejamento Estratégico ').click({force: true})
        // cy.get('#select2-cd_pessoa_titular-container').click()
        // cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
        // cy.get('#select2-cd_pessoa_suplente-container').click()
        // cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
        // cy.get('#select2-cd_orgao_responsavel-container').click()
        // cy.get('.select2-results').find('li').contains('TERRACAP - COMPANHIA IMOBILIARIA DE BRASILIA ').click({force: true})
        // cy.get('#submit').click()
        // cy.get('.modal-footer > .btn-primary').click()
        // cy.get('button.bootbox-accept').should('have.text', 'OK').click();
        // cy.wait(2000)

        //PESQUISAR EMPREENDIMENTO

        cy.visit('/')

        documentos.clicarEmpreendimento()
        documentos.selecionarEmpreendimento()
        documentos.pesquisarEmpreendimento()
        documentos.clicarVisualizarPrimeiraOpcao()


        //CRIAR NOVO DOCUMENTO

        documentos.clicarBotaoNovoDocumento()


        //testar botão limpar
        documentos.digitarCampoDescricaoDocumento()
        documentos.clicarBotaoLimpar()

        //Cadastrar documento

        documentos.selecionarTipoDocumento()
        documentos.digitarNumeroDocumento()
        documentos.digitarDataDocumento()
        documentos.selecionarOrgaoDocumento()
        documentos.digitarNumeroSeiDocumento()
        documentos.digitarDescricaoDocumento()
        documentos.clicarBotaoSalvar()
        documentos.clicarModalBotaoOk()


        //PESQUISAR DOCUMENTO

        documentos.irAbaLateralDocumentos()

        //validando campos de texto

        documentos.validarLabelOrigem()
        documentos.validarLabelExigencia()
        documentos.validarLabelTipo()
        documentos.validarLabelOrgaoDocumento()
        documentos.validarLabelDescricao()
        documentos.validarLabelRa()
        documentos.validarLabelDemanda()
        documentos.validarLabelRequerimento()
        documentos.validarLabelNumero()
        documentos.validarLabelArquivoPrincipal()
        documentos.validarLabelPeriodoDataPublicacao()
        documentos.validarLabelEmpreendedorResponsavel()
        documentos.validarLabelEmpreendedorResponsavel()
        documentos.validarRowOrigem()
        documentos.validarRowRa()
        documentos.validarRowEmpreendimento()
        documentos.validarRowTipo()
        documentos.validarRowNumero()
        documentos.validarRowData()
        documentos.validarRowOrgao()
        documentos.validarRowNSeiDoc()
        documentos.validarRowDescricao()
        documentos.validarRowAcao()

        //Testando limpar campos

        documentos.digitarCampoDescricaoDocumento()
        documentos.clicarBotaoLimparAbaDocumentos()

        //pesquisando documento


        documentos.selecionarEmpreendimentoEmDocumentos()
        documentos.clicarBotaoPesquisarDocumento()

        //filtro de pesquisa

        documentos.digitarCampoFiltro()

        //VISUALIZAR DOCUMENTO
        documentos.clicarVisualizarPrimeiraOpcao()

        //ir para dados detalhados
        documentos.irParaDadosDetalhados()

        //validar campos de texto
        cy.get('[width="90"] > b').should('contain', "Tipo")
        cy.get(':nth-child(2) > :nth-child(1) > b').should('contain', "Número")
        cy.get(':nth-child(3) > :nth-child(1) > b').should('contain', "Data")
        cy.get(':nth-child(4) > :nth-child(1) > b').should('contain', "Órgão")
        cy.get(':nth-child(5) > :nth-child(1) > b').should('contain', "Nº SEI Doc")
        cy.get(':nth-child(6) > :nth-child(1) > b').should('contain', "Descrição")

        //EDITAR DOCUMENTO
        cy.get('a.btn').click()

        //validar campos de texto
        cy.get(':nth-child(1) > .col-md-6 > .form-group > .control-label').should('contain', "Tipo")
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('contain', "Órgão Documento")
        cy.get(':nth-child(3) > .col-md-12 > .form-group > .control-label').should('contain', "Descrição")
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > .control-label').should('contain', "Número")
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .control-label').should('contain', "Nº SEI Doc")
        cy.get(':nth-child(3) > .form-group > .control-label').should('contain', "Data")


        cy.get('#ds_documento').type('testando editar documento')
        cy.get('[type="submit"]').click()
        cy.contains('button',"OK").click()

        //Excluir
        cy.contains('button', "Excluir").click()
        cy.contains('button', "Confirmar").click()
        cy.contains('button',"OK").click()

        // //EXCLUIR EMPREENDIMENTO
        // cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        //
        // cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        // cy.get('.select2-results').find('li').contains('ambiental').click({ force: true })
        // cy.get('#pesquisar').click()
        //
        // cy.get('a[title="Excluir"]').first().click();
        // cy.contains('button', 'Confirmar').click();
        // cy.contains('button', 'OK').click();
    })
})
