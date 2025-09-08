export const ELEMENTS = {

    campoUsuario: ':nth-child(2) > .form-control',
    campoSenha: ':nth-child(3) > .form-control',
    botaoLogin: '.btn',

    botaoEmpreendimento: '.sidebar-menu > :nth-child(2) > a',
    campoEmpreendimento: '.col-md-6 > .form-group > .select2-container > .selection > .select2-selection',
    dropdwonGla: '.select2-results',
    botaoPesquisarEmpreendimento: '#pesquisar',
    botaoVisualizar: 'a[title="Visualizar"]',
    campoDescricaoDocumento: '#ds_documento',
    campoTipoDocumento: '[id^="select2-tp_documento-"][id$="-container"]',
    campoNumeroDocumento: '#nr_documento',
    dataDocumento: '#dt_documento',
    campoOrgaoDocumento:'[id^="select2-cd_orgao_documento-"][id$="-container"]',
    numeroSeiDoc:'#nr_documento_sei',
    botaoSalvar: '[type="submit"]',
    abaLateralDocumentos:':nth-child(5) > a > span',

    //Validar campos de texto em pesquisar documento
    labelOrigem: ':nth-child(2) > :nth-child(1) > .form-group > .control-label',
    labelExigencia: ':nth-child(2) > :nth-child(3) > .form-group > .control-label',
    labelTipo: ':nth-child(5) > .col-md-6 > .form-group > .control-label',
    labelOrgaoDocumento: ':nth-child(6) > :nth-child(1) > .form-group > .control-label',
    labelDescricao: ':nth-child(7) > :nth-child(1) > .form-group > .control-label',
    labelRa: ':nth-child(1) > .col-md-6 > .form-group > .control-label',
    labelDemanda: ':nth-child(2) > :nth-child(2) > .form-group > .control-label',
    labelRequerimento: ':nth-child(4) > .form-group > .control-label',
    labelNumero: ':nth-child(5) > :nth-child(2) > .form-group > .control-label',
    labelArquivoPrincipal: ':nth-child(5) > :nth-child(3) > .form-group > .control-label',
    labelPeriodoDataPublicacao: ':nth-child(6) > :nth-child(2) > .form-group > .control-label',
    labelEmpreendedorResponsavel: ':nth-child(7) > :nth-child(2) > .form-group > label',
    rowOrigem:'.sorting_asc',
    rowRa: '[aria-label="RA: Ordenar colunas de forma ascendente"]',
    rowEmpreendimento: '[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]',
    rowTipo: '[aria-label="Tipo: Ordenar colunas de forma ascendente"]',
    rowNumero: '[aria-label="Número: Ordenar colunas de forma ascendente"]',
    rowData: '[aria-label="Data: Ordenar colunas de forma ascendente"]',
    rowOrgao: '[aria-label="Órgão: Ordenar colunas de forma ascendente"]',
    rowNSeiDoc: '[aria-label="Nº SEI Doc: Ordenar colunas de forma ascendente"]',
    rowDescricao: '[aria-label="Descrição: Ordenar colunas de forma ascendente"]',
    rowAcao: '[aria-label="Ação: Ordenar colunas de forma ascendente"]',


    botaoPesquisarDocumento: '#pesquisarDocumentos',
    campoFiltro: '#table-documento_filter > label > .form-control',
    selecionarEmpreendimentoEmDocumentos: '#select2-combo_empreendimento-container',
    selecionarRAEmDocumentos: '#select2-regiao_adm-container',
    dadosDetalhados: '.col-md-12 > a',


    //validar campos de texto em visualizar documento
    rowDadosDetalhadosTipo: '[width="90"] > b',
    rowDadosDetalhadosNumero: ':nth-child(2) > :nth-child(1) > b',
    rowDadosDetalhadosData: ':nth-child(3) > :nth-child(1) > b',
    rowDadosDetalhadosOrgao:':nth-child(4) > :nth-child(1) > b',
    rowDadosDetalhadosNSeiDoc:':nth-child(5) > :nth-child(1) > b',
    rowDadosDetalhadosDescricao: ':nth-child(6) > :nth-child(1) > b',


    //EDITAR DOCUMENTO

    botaoEditarDocumento: 'a.btn',
    labelEditarTipo: ':nth-child(1) > .col-md-6 > .form-group > .control-label',
    labelEditarDocumento:':nth-child(2) > :nth-child(1) > .form-group > .control-label',
    labelEditarDescricao:':nth-child(3) > .col-md-12 > .form-group > .control-label',
    labelEditarNumero:':nth-child(1) > :nth-child(2) > .form-group > .control-label',
    labelEditarNSeiDoc:':nth-child(3) > .form-group > .control-label',
}