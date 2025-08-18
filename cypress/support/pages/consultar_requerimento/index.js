const el = require('./elements').ELEMENTS
class consultar_requerimento{

    irParaGLA() {
        cy.visit('/');
    }

    login() {
        cy.get(el.campoUsuario).type('C9020840');
        cy.get(el.campoSenha).type('welcome_1');
        cy.get(el.botaoLogin).click();
    }

    //PESQUISAR EMPREENDIMENTO
    irParaEmpreendimento(){
        cy.get('.sidebar-menu > :nth-child(2) > a').click()
    }

    seletorEmpreendimento(){
        cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection').click()
    }

    selecionarEmpreendimento(){
        cy.get('.select2-results').find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click()
    }

    clicarPesquisar(){
        cy.get('#pesquisar').click()
        cy.wait(1000)
    }

    clicarPrimeiroBotaoVisualizar(){
        cy.get('a[title="Visualizar"]').first().click();
    }

    clicarAbaRequerimento(){
        cy.get('.requerimentos-aba').click()
    }

    digitarDescricaoRequerimento(){
        cy.get('#ds_requerimento').type('testetestetestetesteteste')
    }

    clicarBotaoLimpar(){
        cy.get('.btn-toolbar > [type="button"]').click()
    }

    irParaAbaEmpreendimento(){
        cy.get('.text-block > a').click()
    }

    clicarBotaoVoltar(){
        cy.get('[onclick="window.history.back()"]').should('be.visible').and('contain.text', 'Voltar').click();
    }

    seletorDemandaPermissao(){
        cy.get('[id^="select2-tp_demanda_permissao-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('LO - Licença de Operação ').click({ force: true });
    }

    digitarNumeroOficio(){
        cy.get('#nr_oficio').type('2000')
    }

    digitarAnoOficio(){
        cy.get('#aa_oficio').type('2025')
    }

    selecionarOrgaoOficio(){
        cy.get('[id^="select2-cd_orgao_oficio-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA').click({ force: true });
    }

    digitarDescricaoObservacaoDocOficio(){
        cy.get('#ds_observacao_doc_oficio').type('208')
    }

    selecionarPessoaTitular(){
        cy.get('#select2-cd_pessoa_titular-container').click()
        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES').click({ force: true })
    }

    seletorOrgaoRequerimento(){
        cy.get('[id^="select2-cd_orgao_requerimento-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ANATEL - AGÊNCIA NACIONAL DE TELECOMUNICAÇÕES').click({ force: true });
    }

    selecionarDataPublicacao(){
        cy.get('#dt_publicacao').type('2020-01-01')
    }

    seletorTpStatus(){
        cy.get('[id^="select2-tp_status-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('Deferido').click({ force: true });
    }

    digitarOrgaoProcesso(){
        cy.get('#cd_orgao_processo_sei').type('1')
    }

    digitarNumeroProcessoSei(){
        cy.get('#nr_processo_sei').type('1')
    }

    digitarAnoProcessoSei(){
        cy.get('#aa_processo_sei').type('1')
    }

    selecionarReservaOrcamentaria(){
        cy.get('#fl_reserva_orcamentaria').click()
        cy.wait(1000)
    }

    digitarNumeroDocSeiDespacho(){
        cy.get('#nr_doc_sei_despacho').type('1111')
    }

    clicarBotaoSalvar(){
        cy.get('#submit').click()
    }

    clicarContinuar(){
        cy.get('.modal-footer > .btn-primary').should('be.visible').and('contain.text', 'Continuar').click()
    }

    clicarOk(){
        cy.get('.modal-footer > .btn').should('be.visible').and('contain.text', 'OK').click()
    }

    irParaRequerimento(){
        cy.get(':nth-child(7) > [href="#"]').click()
    }

    clicarConsultarRequerimentos(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').should('be.visible').and('contain.text', 'Consultar - Requerimentos').click();
    }

    limparCampoRequerimento(){
        cy.get('[onclick="resetFieldsRequerimento()"]').click()
    }

    selecionarEmpreendimenot(){
        cy.get('#select2-cd_empreendimento-container').should('be.visible').click();
        cy.wait(1000)
        cy.get('.select2-results__option')
            .filter(':contains("Polos 06, 07, 08 - Projeto Orla - Beira Lago")')
            .first()
            .click();


    }

    pesquisarRequerimento(){
        cy.get('#pesquisarRequerimento').should('be.visible').click();
        cy.wait(1000)
    }

    gerarRelatorioPDF(){
        cy.get('#gerarRelatorioPDF').should('be.visible').click();
    }

    digitarFiltroRequerimento(){
        cy.get('#table-requerimento_filter > label > .form-control').type('Licença de Operação')
    }

    clicarVisualizarPrimeiro(){
        cy.get('a[title="Visualizar"]').first().click();
    }

    irParaAbaRequerimento(){
        cy.get('#requerimento-aba > .panel-footer > :nth-child(1) > a.btn').click()
    }

    irParaAbaRequerimentos(){
        cy.get(':nth-child(7) > [href="#"]').click()
    }

    irParaAbaConsultarRequerimentos(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }

    selecionarEmpreendimentoContainer(){
        cy.get('#select2-cd_empreendimento-container').should('be.visible').click();
        cy.get('.select2-results__option')
            .should('have.length.gt', 0)
            .contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago')
            .click({ force: true })
    }

    clicarPrimeiroBotaoEditar(){
        cy.get('a[title="Editar"]').first().click();
    }

    filtrarRequerimento(){
        cy.get('#table-requerimento_filter > label > .form-control').type('Licença de Operação')
    }

    clicarPrimeiroBotaoExcluir(){
        cy.get('a[title="Excluir"]').first().click();
    }

    clicarBotaoConfirmar(){
        cy.get('.modal-footer > .btn-primary').should('have.text', ' Confirmar').click();
    }

    //VALIDAR CAMPOS DE TEXTO

    validarLabelTipoRequerimento(){
        cy.get('#requerimento-aba > :nth-child(3) > :nth-child(1) > .form-group > label').should('contain',"Tipo Requerimento")
    }

    validarLabelDemanda(){
        cy.get('#requerimento-aba > :nth-child(3) > :nth-child(2) > .form-group > label').should('contain',"Demanda")
    }

    validarLabelNumeroOficio(){
        cy.get('#requerimento-aba > :nth-child(4) > :nth-child(1) > .form-group > label').should('contain',"Número Ofício")
    }

    validarLabelAnoOficio(){
        cy.get('#requerimento-aba > :nth-child(4) > :nth-child(2) > .form-group > label').should('contain',"Ano Ofício")
    }

    validarLabelEmitenteOficio(){
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > label').should('contain',"Emitente Ofício")
    }

    validarLabelNSeiDocRequerimento(){
        cy.get(':nth-child(4) > label').should('contain',"Nº SEI Doc Requerimento")
    }

    validarLabelTitular(){
        cy.get('#requerimento-aba > :nth-child(5) > :nth-child(1) > .form-group > label').should('contain',"Titular")
    }

    validarLabelSuplente(){
        cy.get('#requerimento-aba > :nth-child(5) > :nth-child(2) > .form-group > label').should('contain',"Suplente")
    }

    validarLabelDescricao(){
        cy.get(':nth-child(6) > .col-md-12 > .form-group > label').should('contain',"Descrição")
    }

    validarLabelOrgaoRequerimento(){
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > label').should('contain',"Órgão Requerimento")
    }

    validarLabelDataPublicacaoRequerimento(){
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > label').should('contain',"Data Publicação Requerimento")
    }

    validarLabelStatusRequerimento(){
        cy.get(':nth-child(7) > :nth-child(3) > .form-group > label').should('contain',"Status Requerimento")
    }

    validarLabelSeiProcessoRequerimento(){
        cy.get(':nth-child(4) > .form-group > label').should('contain',"SEI Processo Requerimento")
    }

    validarLabelReservaOrcamentaria(){
        cy.get(':nth-child(8) > :nth-child(1) > .form-group > label').should('contain',"Reserva Orçamentária enviada à DIPLA")
    }

    validarLabelNDocSeiDespacho(){
        cy.get(':nth-child(8) > :nth-child(2) > .form-group > label').should('contain',"Nº Doc SEI Despacho")
    }

    validarLabelStatusPagamento(){
        cy.get(':nth-child(9) > :nth-child(1) > .form-group > label').should('contain',"Status do Pagamento")
    }

    validarLabelPrazoMaximoAnalise(){
        cy.get(':nth-child(9) > :nth-child(2) > .form-group > label').should('contain',"Prazo Máximo de Análise")
    }

    validarLabelEstudoServico(){
        cy.get(':nth-child(9) > :nth-child(3) > .form-group > label').should('contain',"Estudo/Serviço")
    }

    validarLabelObservacaoSei(){
        cy.get(':nth-child(10) > :nth-child(1) > .form-group > label').should('contain',"Observação (SEI Documento Ofício)")
    }

    validarLabelObservacaoProcesso(){
        cy.get(':nth-child(10) > :nth-child(2) > .form-group > label').should('contain',"Observação (Processo)")
    }

    validarLabelPagamentosPrecoPublico(){
        cy.get('.col-md-12 > label').should('contain',"Pagamentos de Preço Público de Análise (Requerimentos)")
    }

    validarLabelSeiComprovantePagamento(){
        cy.get('#table-pagamento > thead > tr > .sorting_asc').should('contain',"SEI do Comprovante de Pagamento")
    }

    validarLabelDataPagamento(){
        cy.get('[aria-label="Data do Pagamento: Ordenar colunas de forma ascendente"]').should('contain',"Data do Pagamento")
    }

    validarLabelValorPagamento(){
        cy.get('[aria-label="Valor do Pagamento (R$): Ordenar colunas de forma ascendente"]').should('contain',"Valor do Pagamento (R$)")
    }

    validarAriaLabelStatusPagamento(){
        cy.get('[aria-label="Status do Pagamento: Ordenar colunas de forma ascendente"]').should('contain',"Status do Pagamento")
    }

    validarLabelSeiCertidaoQuitacao(){
        cy.get('[aria-label="SEI da Certidão de Quitação: Ordenar colunas de forma ascendente"]').should('contain',"SEI da Certidão de Quitação")
    }

    validarLabelDescricaoPagamento(){
        cy.get('[aria-label="Descrição do Pagamento: Ordenar colunas de forma ascendente"]').should('contain',"Descrição do Pagamento")
    }

    validarLabelAcao(){
        cy.get('thead > tr > .text-center').should('contain',"Ação")
    }

    //VALIDAR CAMPOS DE TEXTO EM CADASTRAR REQUERIMENTO
    irParaCadastrarRequerimento(){
        cy.get('#requerimento > .box > .box-body > .panel > .panel-body > .panel-footer > .btn-toolbar > .btn-success').click()
    }

    validarCadastroControlLabelTipoRequerimento(){
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .control-label').should('contain',"Tipo Requerimento")
    }

    validarCadastroControlLabelTipoDemandaPermissao(){
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .control-label').should('contain',"Tipo Demanda Permissão")
    }

    validarCadastroControlLabelNumeroOficio(){
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .control-label').should('contain',"Número Ofício")
    }

    validarCadastroControlLabelAnoOficio(){
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .control-label').should('contain',"Ano Ofício")
    }

    validarCadastroControlLabelEmitenteOficio(){
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > .control-label').should('contain',"Emitente Ofício")
    }

    validarCadastroControlLabelNSeiDocRequerimento(){
        cy.get(':nth-child(4) > .form-group > .control-label').should('contain',"Nº SEI Doc Requerimento")
    }

    validarCadastroControlLabelTitular(){
        cy.get(':nth-child(5) > :nth-child(1) > .form-group > label').should('contain',"Titular")
    }

    validarCadastroControlLabelSuplente(){
        cy.get(':nth-child(5) > :nth-child(2) > .form-group > label').should('contain',"Suplente")
    }

    validarCadastroControlLabelDescricao(){
        cy.get(':nth-child(6) > .col-md-12 > .form-group > .control-label').should('contain',"Descrição")
    }

    validarCadastroControlLabelOrgaoRequerimento(){
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > .control-label').should('contain',"Órgão Requerimento")
    }

    validarCadastroControlLabelDataPublicacaoRequerimento(){
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > .control-label').should('contain',"Data Publicação Requerimento")
    }

    validarCadastroControlLabelStatusRequerimento(){
        cy.get(':nth-child(7) > :nth-child(3) > .form-group > .control-label').should('contain',"Status Requerimento")
    }

    validarCadastroControlLabelSeiProcessoRequerimento(){
        cy.get(':nth-child(7) > :nth-child(4) > :nth-child(1) > .form-group > label').should('contain',"SEI Processo Requerimento")
    }

    validarCadastroControlLabelReservaOrcamentaria(){
        cy.get(':nth-child(8) > .col-md-12 > .form-group > .control-label').should('contain',"Reserva Orçamentária enviada à DIPLA")
    }

    validarCadastroControlLabelNDocSeiDespacho(){
        cy.get('.col-md-4 > .form-group > .control-label').should('contain',"Nº Doc SEI Despacho")
    }

    //VALIDAR CAMPOS DE TEXTO EM CONSULTAR REQUERIMENTO

    validarControlLabelRAConsultar(){
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .control-label').should('contain',"R.A")
    }

    validarControlLabelEmpreendimentoConsultar(){
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > .control-label').should('contain',"Empreendimento")
    }

    validarControlLabelDemandaConsultar(){
        cy.get(':nth-child(1) > :nth-child(3) > .form-group > .control-label').should('contain',"Demanda")
    }

    validarControlLabelTipoRequerimentoConsultar(){
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('contain',"Tipo Requerimento")
    }

    validarControlLabelTipoDemandaPermissaoConsultar(){
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > label').should('contain',"Tipo Demanda Permissão")
    }

    validarControlLabelNumeroOficioConsultar(){
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .control-label').should('contain',"Número Ofício")
    }

    validarControlLabelAnoOficioConsultar(){
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .control-label').should('contain',"Ano Ofício")
    }

    validarControlLabelEmitenteOficioConsultar(){
        cy.get(':nth-child(3) > :nth-child(3) > .form-group > .control-label').should('contain',"Emitente Ofício")
    }

    validarControlLabelTitularConsultar(){
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > label').should('contain',"Titular")
    }

    validarControlLabelSuplenteConsultar(){
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > label').should('contain',"Suplente")
    }

    validarControlLabelDescricaoConsultar(){
        cy.get('.col-md-12 > .form-group > .control-label').should('contain',"Descrição")
    }

    validarControlLabelOrgaoRequerimentoConsultar(){
        cy.get(':nth-child(6) > :nth-child(1) > .form-group > .control-label').should('contain',"Órgão Requerimento")
    }

    validarControlLabelPeriodoDataPublicacaoRequerimentoConsultar(){
        cy.get(':nth-child(2) > label').should('contain',"Período da Data de Publicação Requerimento")
    }

    validarControlLabelStatusRequerimentoConsultar(){
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > .control-label')
            .invoke('text')
            .then((text) => {
                const clean = text.replace(/\s+/g, ' ').trim();
                expect(clean).to.include('Status Requerimento');
            })
    }

    validarControlLabelEmpreendedorResponsavelConsultar(){
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > label').should('contain',"Empreendedor Responsável")
    }

    validarControlLabelPossuiReiteracoesConsultar(){
        cy.get(':nth-child(7) > :nth-child(3) > .form-group > label').should('contain',"Possui Reiterações?")
    }

    validarControlLabelReservaOrcamentariaDiplaConsultar(){
        cy.get(':nth-child(8) > .col-md-6 > .form-group > .control-label').should('contain',"Reserva Orçamentária enviada à DIPLA")
    }

    validarControlLabelStatusPagamentoConsultar(){
        cy.get(':nth-child(8) > :nth-child(2) > .form-group > label').should('contain',"Status do Pagamento")
    }

    validarControlLabelPrazoMaximoAnaliseConsultar(){
        cy.get(':nth-child(8) > :nth-child(3) > .form-group > label').should('contain',"Prazo Máximo de Análise")
    }

    validarControlLabelRaConsultar(){
        cy.get('.sorting_asc').should('contain',"RA")
    }

    validarAriaLabelRequerimentoConsultar(){
        cy.get('[aria-label="Requerimento: Ordenar colunas de forma ascendente"]').should('contain',"Requerimento")
    }

    validarAriaLabelOrgaoConsultar(){
        cy.get('[aria-label="Órgão: Ordenar colunas de forma ascendente"]').should('contain',"Órgão")
    }

    validarAriaLabelNOficioConsultar(){
        cy.get('[aria-label="Nº Ofício: Ordenar colunas de forma ascendente"]').should('contain',"Nº Ofício")
    }

    validarAriaLabelAnoConsultar(){
        cy.get('[aria-label="Ano: Ordenar colunas de forma ascendente"]').should('contain',"Ano")
    }

    validarAriaLabelEmitenteConsultar(){
        cy.get('[aria-label="Emitente: Ordenar colunas de forma ascendente"]').should('contain',"Emitente")
    }

    validarAriaLabelDataPublicacaoConsultar(){
        cy.get('[aria-label="Data de Publicação: Ordenar colunas de forma ascendente"]').should('contain',"Data de Publicação")
    }

    validarAriaLabelAcaoConsultar(){
        cy.get('[aria-label="Ação: Ordenar colunas de forma ascendente"]').should('contain',"Ação")
    }

    validarAriaLabelEmpreendimentoConsultar(){
        cy.get('[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]').should('contain',"Empreendimento")
    }

    validarControlLabelTipoRequerimentoEditar(){
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .control-label').should('contain',"Tipo Requerimento")
    }

    validarControlLabelDemandaEditar(){
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .control-label').should('contain',"Demanda")
    }

    validarControlLabelNumeroOficioEditar(){
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .control-label').should('contain',"Número Ofício")
    }

    validarControlLabelAnoOficioEditar(){
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .control-label').should('contain',"Ano Ofício")
    }

    validarControlLabelEmitenteOficioEditar(){
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > .control-label').should('contain',"Emitente Ofício")
    }

    validarControlLabelNSeiDocRequerimentoEditar(){
        cy.get(':nth-child(4) > .form-group > .control-label').should('contain',"Nº SEI Doc Requerimento")
    }

    validarControlLabelTitularEditar(){
        cy.get(':nth-child(5) > :nth-child(1) > .form-group > label').should('contain',"Titular")
    }

    validarControlLabelSuplenteEditar(){
        cy.get(':nth-child(5) > :nth-child(2) > .form-group > label').should('contain',"Suplente")
    }

    validarControlLabelDescricaoEditar(){
        cy.get(':nth-child(6) > .col-md-12 > .form-group > .control-label').should('contain',"Descrição")
    }

    validarControlLabelOrgaoRequerimentoEditar(){
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > .control-label').should('contain',"Órgão Requerimento")
    }

    validarControlLabelDataPublicacaoRequerimentoEditar(){
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > .control-label').should('contain',"Data Publicação Requerimento")
    }

    validarControlLabelStatusRequerimentoEditar(){
        cy.get(':nth-child(7) > :nth-child(3) > .form-group > .control-label').should('contain',"Status Requerimento")
    }

    validarControlLabelSeiProcessoRequerimentoEditar(){
        cy.get(':nth-child(7) > :nth-child(4) > :nth-child(1) > .form-group > label').should('contain',"SEI Processo Requerimento")
    }

    validarControlLabelReservaOrcamentariaDiplaEditar(){
        cy.get(':nth-child(8) > .col-md-12 > .form-group > .control-label').should('contain',"Reserva Orçamentária enviada à DIPLA")
    }

    validarControlLabelNDocSeiDespachoEditar(){
        cy.get('.col-md-4 > .form-group > .control-label').should('contain',"Nº Doc SEI Despacho")
    }
}


export default new consultar_requerimento()