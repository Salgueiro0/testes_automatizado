import documentos from "../../../support/pages/documentos";
import {ELEMENTS as el} from "../../../support/pages/documentos/elements";

describe('Documentos', () => {

    it('Documentos', () => {


        documentos.irParaGLA()
        documentos.login()

        //PESQUISAR EMPREENDIMENTO

        documentos.clicarEmpreendimento()
        documentos.selecionarEmpreendimento()
        documentos.pesquisarEmpreendimento()
        documentos.clicarVisualizarPrimeiraOpcao()

        //CRIAR NOVO DOCUMENTO

        documentos.clicarBotaoNovoDocumento()
        documentos.validarTitulo()                // -- US033 - RN015 identificação/título--

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

        documentos.selecionarRA()
        documentos.selecionarEmpreendimentoEmDocumentos()
        documentos.clicarBotaoPesquisarDocumento()

        //filtro de pesquisa

        documentos.digitarCampoFiltro()

        //VISUALIZAR DOCUMENTO
        documentos.clicarVisualizarPrimeiraOpcao()

        //ir para dados detalhados
        documentos.irParaDadosDetalhados()

        //validar campos de texto
        documentos.rowDadosDetalhadosTipo()
        documentos.rowDadosDetalhadosNumero()
        documentos.rowDadosDetalhadosData()
        documentos.rowDadosDetalhadosOrgao()
        documentos.rowDadosDetalhadosNSeiDoc()
        documentos.rowDadosDetalhadosDescricao()

        //EDITAR DOCUMENTO
        documentos.clicarBotaoEditarDocumento()

        //validar campos de texto em editar documento
        documentos.validarLabelEditarTipo()
        documentos.validarLabelEditarOrgaoDocumento()
        documentos.validarLabelEditarDescricao()
        documentos.validarLabelEditarNumero()
        documentos.validarLabelEditarNSeiDoc()

        documentos.digitarCampoDescricaoDocumento()
        documentos.clicarBotaoSalvar()
        documentos.clicarModalBotaoOk()

        //Excluir
        documentos.clicarBotaoExcluir()
        documentos.clicarModalBotaoConfirmar()
        documentos.clicarModalBotaoOk()
    })
})
