export const ELEMENTS = {
    // Login
    campoUsuario: ':nth-child(2) > .form-control',
    campoSenha: ':nth-child(3) > .form-control',
    botaoLogin: '.btn',

    // Menu / Aba
    abaEmpreendimento: '.sidebar-menu > :nth-child(2) > a',
    abaPagamentos: '.sidebar-menu > :nth-child(8) > a > span',
    abaRequerimento: '.requerimentos-aba',

    // Campos
    campoEmpreendimento: '.col-md-6 > .form-group > .select2-container > .selection > .select2-selection',
    dropdwonGLA: '.select2-results',
    botaoPesquisar: '#pesquisar',
    botaoVisualizar: 'a[title="Visualizar"]',
    botaoPesquisarRequerimento: '#pesquisarRequerimento',
    campoDataPagamento: '#dt_pagamento',
    campoValorPagamento: '#vl_pagamento',
    botaoDeletarPagamento: '.odd > .text-center > .btn-delete-pagamento > .fas',

    // Labels
    labelPesquisar: ':nth-child(1) > .box-header > .box-title',
    labelRA: '.panel-body > :nth-child(1) > :nth-child(1) > .form-group > .control-label',
    labelEmpreendimento: '.panel-body > :nth-child(1) > :nth-child(2) > .form-group > .control-label',
    labelOrigem: '.panel-body > :nth-child(2) > .col-md-4 > .form-group > .control-label',
    labelDataPagamento: ':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .control-label',
    labelValorPagamento: ':nth-child(3) > :nth-child(2) > :nth-child(1) > .control-label',
    labelStatusPagamento: ':nth-child(4) > :nth-child(1) > .form-group > .control-label',
    labelDescricaoPagamento: ':nth-child(4) > :nth-child(2) > .form-group > .control-label',
    labelEmpreendedorResponsavel: ':nth-child(4) > :nth-child(3) > .form-group > .control-label',
    labelAdicioneCamposTabelaResultados: ':nth-child(2) > .box-header > .box-title',

    // Checkboxes
    checkboxDescricaoPagamento: '.panel-body > :nth-child(1) > :nth-child(1) > label',
    checkboxSEIComprovantePagamento: '.form-group > .row > :nth-child(1) > label',
    checkboxSEIEnvioComprovantePagamento: '.panel-body > :nth-child(1) > :nth-child(2) > label',
    checkboxDataPagamento: '.form-group > .row > :nth-child(2) > label',
    checkboxSEICertidaoQuitacao: '.panel-body > :nth-child(1) > :nth-child(3) > label',
    checkboxStatusPagamento: '.form-group > .row > :nth-child(3) > label',

    // Rows da tabela
    rowRA: '.sorting_asc',
    rowEmpreendimento: '[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]',
    rowOrigem: '[aria-label="Origem: Ordenar colunas de forma ascendente"]',
    rowValorPagamento: '[aria-label="Valor do Pagamento (R$): Ordenar colunas de forma ascendente"]',
    rowAcao: 'tr > .text-center',

    descricaoPagamento: '#ds_pagamento',
    seletorRA: ':nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection',
    seletorEmpreendimento: '#select2-cd_empreendimento-container',
    botaoEditarPagamento: ':nth-child(1) > .text-center > .btn-edit-pagamento > .fa',
    modalDescricaoNumDoc: '#modal_ds_sei_num_doc_pagamento',
    botaoEditarPagamentoModal: '#botao-editar'
}
