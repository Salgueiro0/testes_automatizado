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
        cy.get(el.abaEmpreendimento).click()
    }

    seletorEmpreendimento(){
        cy.get(el.campoSeletorEmpreendimento).click()
    }

    selecionarEmpreendimento(){
        cy.get(el.dropdwonGLA).find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click()
    }

    clicarPesquisar(){
        cy.get(el.botaoPesquisar).click()
        cy.wait(1000)
    }

    clicarPrimeiroBotaoVisualizar(){
        cy.get(el.botaoVisualizar).first().click();
    }

    clicarAbaRequerimento(){
        cy.get(el.abaRequerimentos).click()
    }

    digitarDescricaoRequerimento(){
        cy.get(el.campoDescricaoRequerimento).type('testetestetestetesteteste')
    }

    clicarBotaoLimpar(){
        cy.get(el.botaoLimpar).click()
    }

    irParaAbaEmpreendimento(){
        cy.get(el.linkEmpreendimento).click()
    }

    clicarBotaoVoltar(){
        cy.get(el.botaoVoltar).should('be.visible').and('contain.text', 'Voltar').click();
    }

    seletorDemandaPermissao(){
        cy.get(el.campoSeletorTpDemandaPermissao).click();
        cy.get(el.dropdwonGLA).should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('LO - Licença de Operação ').click({ force: true });
    }

    digitarNumeroOficio(){
        cy.get(el.campoNumeroOficio).type('2000')
    }

    digitarAnoOficio(){
        cy.get(el.campoAnoOficio).type('2025')
    }

    selecionarOrgaoOficio(){
        cy.get(el.campoSeletorOrgaoOficio).click();
        cy.get(el.dropdwonGLA).should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA').click({ force: true });
    }

    digitarDescricaoObservacaoDocOficio(){
        cy.get(el.campoDescricaoObservacaoDocOficio).type('208')
    }

    selecionarPessoaTitular(){
        cy.get(el.campoSeletorPessoaTitular).click()
        cy.get(el.dropdwonGLA).find('li').contains('ALLAN GUIMARAES DIOGENES').click({ force: true })
    }

    seletorOrgaoRequerimento(){
        cy.get(el.campoSeletorOrgaoRequerimento).click();
        cy.get(el.dropdwonGLA).should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ANATEL - AGÊNCIA NACIONAL DE TELECOMUNICAÇÕES').click({ force: true });
    }

    selecionarDataPublicacao(){
        cy.get(el.campoDataPublicacao).type('2020-01-01')
    }

    seletorTpStatus(){
        cy.get(el.campoSeletorTpStatus).click();
        cy.get(el.dropdwonGLA).should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('Deferido').click({ force: true });
    }

    digitarOrgaoProcesso(){
        cy.get(el.campoOrgaoProcessoSei).type('1')
    }

    digitarNumeroProcessoSei(){
        cy.get(el.campoNumeroProcessoSei).type('1')
    }

    digitarAnoProcessoSei(){
        cy.get(el.campoAnoProcessoSei).type('1')
    }

    selecionarReservaOrcamentaria(){
        cy.get(el.campoReservaOrcamentaria).click()
        cy.wait(1000)
    }

    digitarNumeroDocSeiDespacho(){
        cy.get(el.campoNrDocSeiDespacho).type('1111')
    }

    clicarBotaoSalvar(){
        cy.get(el.botaoSalvar).click()
    }

    clicarContinuar(){
        cy.get(el.botaoContinuar).should('be.visible').and('contain.text', 'Continuar').click()
    }

    clicarOk(){
        cy.get(el.botaoOk).should('be.visible').and('contain.text', 'OK').click()
    }

    irParaRequerimento(){
        cy.get(el.abaRequerimento).click()
    }

    clicarConsultarRequerimentos(){
        cy.get(el.abaConsultarRequerimento).should('be.visible').and('contain.text', 'Consultar - Requerimentos').click();
    }

    limparCampoRequerimento(){
        cy.get(el.botaoLimparCampoRequerimento).click()
    }

    selecionarEmpreendimenot(){
        cy.get(el.seletorEmpreendimento).should('be.visible').click();
        cy.wait(1000)
        cy.get(el.dropdownGLAOptions)
            .filter(':contains("Polos 06, 07, 08 - Projeto Orla - Beira Lago")')
            .first()
            .click();
    }

    pesquisarRequerimento(){
        cy.get(el.botaoPesquisarRequerimento).should('be.visible').click();
        cy.wait(1000)
    }

    gerarRelatorioPDF(){
        cy.get(el.botaoGerarRelatorioPDF).should('be.visible').click();
    }

    digitarFiltroRequerimento(){
        cy.get(el.filtroRequerimento).type('Licença de Operação')
    }

    clicarVisualizarPrimeiro(){
        cy.get(el.botaoVisualizar).first().click();
    }

    irParaAbaRequerimento(){
        cy.get(el.botaoLinkRequerimento).click()
    }

    irParaAbaRequerimentos(){
        cy.get(el.abaRequerimento).click()
    }

    irParaAbaConsultarRequerimentos(){
        cy.get(el.abaConsultarRequerimento).click()
    }

    selecionarEmpreendimentoContainer(){
        cy.get(el.seletorEmpreendimento).should('be.visible').click();
        cy.get(el.dropdownGLAOptions)
            .should('have.length.gt', 0)
            .contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago')
            .click({ force: true })
    }

    clicarPrimeiroBotaoEditar(){
        cy.get(el.botaoEditar).first().click();
    }

    filtrarRequerimento(){
        cy.get(el.filtroRequerimento).type('Licença de Operação')
    }

    clicarPrimeiroBotaoExcluir(){
        cy.get(el.botaoExcluir).first().click();
    }

    clicarBotaoConfirmar(){
        cy.get(el.botaoContinuar).should('have.text', ' Confirmar').click();
    }

    //VALIDAR CAMPOS DE TEXTO

    validarLabelTipoRequerimento(){
        cy.get(el.labelTipoRequerimento).should('contain',"Tipo Requerimento")
    }

    validarLabelDemanda(){
        cy.get(el.labelDemanda).should('contain',"Demanda")
    }

    validarLabelNumeroOficio(){
        cy.get(el.labelNumeroOficio).should('contain',"Número Ofício")
    }

    validarLabelAnoOficio(){
        cy.get(el.labelAnoOficio).should('contain',"Ano Ofício")
    }

    validarLabelEmitenteOficio(){
        cy.get(el.labelEmitenteOficio).should('contain',"Emitente Ofício")
    }

    validarLabelNSeiDocRequerimento(){
        cy.get(el.labelNSeiDocRequerimento).should('contain',"Nº SEI Doc Requerimento")
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