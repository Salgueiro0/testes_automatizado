const el = require('./elements').ELEMENTS
class consultar_requerimento {
    irParaGLA(){ cy.visit('/') }
    login(){ cy.get(el.campoUsuario).type('C9020840'); cy.get(el.campoSenha).type('welcome_1'); cy.get(el.botaoLogin).click() }
    seletorDropdown(selecao){cy.get(el.dropdwonGLA).find('li').contains(selecao).click({force:true})}
    irParaEmpreendimento(){ cy.get(el.abaEmpreendimento).click() }
    seletorEmpreendimento(){ cy.get(el.campoSeletorEmpreendimento).click() }
    clicarPesquisar(){ cy.get(el.botaoPesquisar).click(); cy.wait(1000) }
    clicarPrimeiroBotaoVisualizar(){ cy.get(el.botaoVisualizar).first().click() }
    clicarAbaRequerimento(){ cy.get(el.abaRequerimentos).click() }
    digitarDescricaoRequerimento(){ cy.get(el.campoDescricaoRequerimento).type('testetestetestetesteteste') }
    clicarBotaoLimpar(){ cy.get(el.botaoLimpar).click() }
    irParaAbaEmpreendimento(){ cy.get(el.linkEmpreendimento).click() }
    clicarBotaoVoltar(){ cy.get(el.botaoVoltar).should('be.visible').and('contain.text', 'Voltar').click() }
    seletorDemandaPermissao(){ cy.get(el.campoSeletorTpDemandaPermissao).click();
        cy.get(el.dropdwonGLA).should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('LO - Licença de Operação ').click({ force: true }) }
    digitarNumeroOficio(){ cy.get(el.campoNumeroOficio).type('2000') }
    digitarAnoOficio(){ cy.get(el.campoAnoOficio).type('2025') }
    selecionarOrgaoOficio(){ cy.get(el.campoSeletorOrgaoOficio).click(); cy.get(el.dropdwonGLA).should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA').click({ force: true }) }
    digitarDescricaoObservacaoDocOficio(){ cy.get(el.campoDescricaoObservacaoDocOficio).type('208') }
    selecionarPessoaTitular(){ cy.get(el.campoSeletorPessoaTitular).click()}
    seletorOrgaoRequerimento(){ cy.get(el.campoSeletorOrgaoRequerimento).click(); cy.get(el.dropdwonGLA).should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ANATEL - AGÊNCIA NACIONAL DE TELECOMUNICAÇÕES').click({ force: true }) }
    selecionarDataPublicacao(){ cy.get(el.campoDataPublicacao).type('2020-01-01') }
    seletorTpStatus(){ cy.get(el.campoSeletorTpStatus).click(); cy.get(el.dropdwonGLA).should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('Deferido').click({ force: true }) }
    digitarOrgaoProcesso(){ cy.get(el.campoOrgaoProcessoSei).type('1') }
    digitarNumeroProcessoSei(){ cy.get(el.campoNumeroProcessoSei).type('1') }
    digitarAnoProcessoSei(){ cy.get(el.campoAnoProcessoSei).type('1') }
    selecionarReservaOrcamentaria(){ cy.get(el.campoReservaOrcamentaria).click(); cy.wait(1000) }
    digitarNumeroDocSeiDespacho(){ cy.get(el.campoNrDocSeiDespacho).type('1111') }
    clicarBotaoSalvar(){ cy.get(el.botaoSalvar).first().click() }
    clicarBotaoSalvarPagamento(){cy.get('#botao-salvar').click()}
    clicarContinuar(textoBotao){ cy.wait(2000);
        cy.get(el.botaoContinuar).should('be.visible').and('contain.text', textoBotao).click() }
    clicarOk(){ cy.get(el.botaoOk).should('be.visible').and('contain.text', 'OK').click({ multiple: true }) }
    clicarModalOk(){cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click()}
    irParaRequerimento(){ cy.get(el.abaRequerimento).click() }
    clicarConsultarRequerimentos(){ cy.get(el.abaConsultarRequerimento).should('be.visible').and('contain.text', 'Consultar - Requerimentos').click() }
    limparCampoRequerimento(){ cy.get(el.botaoLimparCampoRequerimento).click() }
    selecionarEmpreendimenot(){
        cy.wait(6000);
        cy.get(el.seletorEmpreendimento).should('be.visible').click();
        cy.wait(1000);
        cy.get(el.dropdownGLAOptions).filter(':contains("Polos 06, 07, 08 - Projeto Orla - Beira Lago")').first().click() }
    pesquisarRequerimento(){ cy.get(el.botaoPesquisarRequerimento).should('be.visible').click(); cy.wait(1000) }
    adicionarEmpreendimento(){cy.get(el.adicionarEmpreendimento).click()}
    gerarRelatorioPDF(){ cy.get(el.botaoGerarRelatorioPDF).should('be.visible').click() }
    digitarFiltroRequerimento(){ cy.get(el.filtroRequerimento).type('Licença de Operação') }
    clicarVisualizarPrimeiro(){ cy.get(el.botaoVisualizar).first().click() }
    irParaAbaRequerimento(){ cy.get(el.botaoLinkRequerimento).click() }
    irParaAbaRequerimentos(){ cy.get(el.abaRequerimento).click() }
    irParaAbaConsultarRequerimentos(){ cy.get(el.abaConsultarRequerimento).click() }
    selecionarEmpreendimentoContainer(){ cy.get(el.seletorEmpreendimento).should('be.visible').click(); cy.get(el.dropdownGLAOptions).should('have.length.gt', 0).contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({ force: true }) }
    clicarPrimeiroBotaoEditar(){ cy.get(el.botaoEditar).first().click() }
    filtrarRequerimento(){ cy.get(el.filtroRequerimento).type('Licença de Operação') }
    clicarPrimeiroBotaoExcluir(){ cy.get(el.botaoExcluir).first().click() }
    clicarBotaoConfirmar(){ cy.get(el.botaoContinuar).should('have.text', ' Confirmar').first().click() }
    validarLabelTipoRequerimento(){ cy.get(el.labelTipoRequerimento).should('contain',"Tipo Requerimento") }
    validarLabelDemanda(){ cy.get(el.labelDemanda).should('contain',"Demanda") }
    validarLabelNumeroOficio(){ cy.get(el.labelNumeroOficio).should('contain',"Número Ofício") }
    validarLabelAnoOficio(){ cy.get(el.labelAnoOficio).should('contain',"Ano Ofício") }
    validarLabelEmitenteOficio(){ cy.get(el.labelEmitenteOficio).should('contain',"Emitente Ofício") }
    validarLabelNSeiDocRequerimento(){ cy.get(el.labelNSeiDocRequerimento).should('contain',"Nº SEI Doc Requerimento") }
    validarLabelTitular(){ cy.get(el.labelTitular).should('contain',"Titular") }
    validarLabelSuplente(){ cy.get(el.labelSuplente).should('contain',"Suplente") }
    validarLabelDescricao(){ cy.get(el.labelDescricao).should('contain',"Descrição") }
    validarLabelOrgaoRequerimento(){ cy.get(el.labelOrgaoRequerimento).should('contain',"Órgão Requerimento") }
    validarLabelDataPublicacaoRequerimento(){ cy.get(el.labelDataPublicacaoRequerimento).should('contain',"Data Publicação Requerimento") }
    validarLabelStatusRequerimento(){ cy.get(el.labelStatusRequerimento).should('contain',"Status Requerimento") }
    validarLabelSeiProcessoRequerimento(){ cy.get(el.labelSeiProcessoRequerimento).should('contain',"SEI Processo Requerimento") }
    validarLabelReservaOrcamentaria(){ cy.get(el.labelReservaOrcamentaria).should('contain',"Reserva Orçamentária enviada à DIPLA") }
    validarLabelNDocSeiDespacho(){ cy.get(el.labelNDocSeiDespacho).should('contain',"Nº Doc SEI Despacho") }
    validarLabelStatusPagamento(){ cy.get(el.labelStatusPagamento).should('contain',"Status do Pagamento") }
    validarLabelPrazoMaximoAnalise(){ cy.get(el.labelPrazoMaximoAnalise).should('contain',"Prazo Máximo de Análise") }
    validarLabelEstudoServico(){ cy.get(el.labelEstudoServico).should('contain',"Estudo/Serviço") }
    validarLabelObservacaoSei(){ cy.get(el.labelObservacaoSei).should('contain',"Observação (SEI Documento Ofício)") }
    validarLabelObservacaoProcesso(){ cy.get(el.labelObservacaoProcesso).should('contain',"Observação (Processo)") }
    validarLabelPagamentosPrecoPublico(){ cy.get(el.labelPagamentosPrecoPublico).should('contain',"Pagamentos de Preço Público de Análise (Requerimentos)") }
    validarLabelSeiComprovantePagamento(){ cy.get(el.labelSeiComprovantePagamento).should('contain',"SEI do Comprovante de Pagamento") }
    validarLabelDataPagamento(){ cy.get(el.labelDataPagamento).should('contain',"Data do Pagamento") }
    validarLabelValorPagamento(){ cy.get(el.labelValorPagamento).should('contain',"Valor do Pagamento (R$)") }
    validarAriaLabelStatusPagamento(){ cy.get(el.ariaLabelStatusPagamento).should('contain',"Status do Pagamento") }
    validarLabelSeiCertidaoQuitacao(){ cy.get(el.labelSeiCertidaoQuitacao).should('contain',"SEI da Certidão de Quitação") }
    validarLabelDescricaoPagamento(){ cy.get(el.labelDescricaoPagamento).should('contain',"Descrição do Pagamento") }
    validarLabelAcao(){ cy.get(el.labelAcao).should('contain',"Ação") }
    irParaCadastrarRequerimento(){ cy.get(el.botaoCadastrarRequerimento).click() }
    validarTitulo(){cy.get('h1').should('contain','Requerimento')}
    validarCadastroControlLabelTipoRequerimento(){ cy.get(el.cadastroControlLabelTipoRequerimento).should('contain',"Tipo Requerimento") }
    validarCadastroControlLabelTipoDemandaPermissao(){ cy.get(el.cadastroControlLabelTipoDemandaPermissao).should('contain',"Tipo Demanda Permissão") }
    validarCadastroControlLabelNumeroOficio(){ cy.get(el.cadastroControlLabelNumeroOficio).should('contain',"Número Ofício") }
    validarCadastroControlLabelAnoOficio(){ cy.get(el.cadastroControlLabelAnoOficio).should('contain',"Ano Ofício") }
    validarCadastroControlLabelEmitenteOficio(){ cy.get(el.cadastroControlLabelEmitenteOficio).should('contain',"Emitente Ofício") }
    validarCadastroControlLabelNSeiDocRequerimento(){ cy.get(el.cadastroControlLabelNSeiDocRequerimento).should('contain',"Nº SEI Doc Requerimento") }
    validarCadastroControlLabelTitular(){ cy.get(el.cadastroControlLabelTitular).should('contain',"Titular") }
    validarCadastroControlLabelSuplente(){ cy.get(el.cadastroControlLabelSuplente).should('contain',"Suplente") }
    validarCadastroControlLabelDescricao(){ cy.get(el.cadastroControlLabelDescricao).should('contain',"Descrição") }
    validarCadastroControlLabelOrgaoRequerimento(){ cy.get(el.cadastroControlLabelOrgaoRequerimento).should('contain',"Órgão Requerimento") }
    validarCadastroControlLabelDataPublicacaoRequerimento(){ cy.get(el.cadastroControlLabelDataPublicacaoRequerimento).should('contain',"Data Publicação Requerimento") }
    validarCadastroControlLabelStatusRequerimento(){ cy.get(el.cadastroControlLabelLabelStatusRequerimento).should('contain',"Status Requerimento") }
    validarCadastroControlLabelSeiProcessoRequerimento(){ cy.get(el.cadastroControlLabelSeiProcessoRequerimento).should('contain',"SEI Processo Requerimento") }
    validarCadastroControlLabelReservaOrcamentaria(){ cy.get(el.cadastroControlLabelReservaOrcamentaria).should('contain',"Reserva Orçamentária enviada à DIPLA") }
    validarCadastroControlLabelNDocSeiDespacho(){ cy.get(el.cadastroControlLabelNDocSeiDespacho).should('contain',"Nº Doc SEI Despacho") }
    validarControlLabelRAConsultar(){ cy.get(el.controlLabelRAConsultar).should('contain',"R.A") }
    validarControlLabelEmpreendimentoConsultar(){ cy.get(el.controlLabelEmpreendimentoConsultar).should('contain',"Empreendimento") }
    validarControlLabelDemandaConsultar(){ cy.get(el.controlLabelDemandaConsultar).should('contain',"Demanda") }
    validarControlLabelTipoRequerimentoConsultar(){ cy.get(el.controlLabelTipoRequerimentoConsultar).should('contain',"Tipo Requerimento") }
    validarControlLabelTipoDemandaPermissaoConsultar(){ cy.get(el.controlLabelTipoDemandaPermissaoConsultar).should('contain',"Tipo Demanda Permissão") }
    validarControlLabelNumeroOficioConsultar(){ cy.get(el.controlLabelNumeroOficioConsultar).should('contain',"Número Ofício") }
    validarControlLabelAnoOficioConsultar(){ cy.get(el.controlLabelAnoOficioConsultar).should('contain',"Ano Ofício") }
    validarControlLabelEmitenteOficioConsultar(){ cy.get(el.controlLabelEmitenteOficioConsultar).should('contain',"Emitente Ofício") }
    validarControlLabelTitularConsultar(){ cy.get(el.controlLabelTitularConsultar).should('contain',"Titular") }
    validarControlLabelSuplenteConsultar(){ cy.get(el.controlLabelSuplenteConsultar).should('contain',"Suplente") }
    validarControlLabelDescricaoConsultar(){ cy.get(el.controlLabelDescricaoConsultar).should('contain',"Descrição") }
    validarControlLabelOrgaoRequerimentoConsultar(){ cy.get(el.controlLabelOrgaoRequerimentoConsultar).should('contain',"Órgão Requerimento") }
    validarControlLabelPeriodoDataPublicacaoRequerimentoConsultar(){ cy.get(el.controlLabelPeriodoDataPublicacaoRequerimentoConsultar).should('contain',"Período da Data de Publicação Requerimento") }
    validarControlLabelStatusRequerimentoConsultar(){ cy.get(el.controlLabelStatusRequerimentoConsultar).invoke('text').then(t => expect(t.replace(/\s+/g, ' ').trim()).to.include('Status Requerimento')) }
    validarControlLabelEmpreendedorResponsavelConsultar(){ cy.get(el.controlLabelEmpreendedorResponsavelConsultar).should('contain',"Empreendedor Responsável") }
    validarControlLabelPossuiReiteracoesConsultar(){ cy.get(el.controlLabelPossuiReiteracoesConsultar).should('contain',"Possui Reiterações?") }
    validarControlLabelReservaOrcamentariaDiplaConsultar(){ cy.get(el.controlLabelReservaOrcamentariaDiplaConsultar).should('contain',"Reserva Orçamentária enviada à DIPLA") }
    validarControlLabelStatusPagamentoConsultar(){ cy.get(el.controlLabelStatusPagamentoConsultar).should('contain',"Status do Pagamento") }
    validarControlLabelPrazoMaximoAnaliseConsultar(){ cy.get(el.controlLabelPrazoMaximoAnaliseConsultar).should('contain',"Prazo Máximo de Análise") }
    validarControlLabelRaConsultar(){ cy.get(el.controlLabelRaConsultar).should('contain',"RA") }
    validarAriaLabelRequerimentoConsultar(){ cy.get(el.ariaLabelRequerimentoConsultar).should('contain',"Requerimento") }
    validarAriaLabelOrgaoConsultar(){ cy.get(el.ariaLabelOrgaoConsultar).should('contain',"Órgão") }
    validarAriaLabelNOficioConsultar(){ cy.get(el.ariaLabelNOficioConsultar).should('contain',"Nº Ofício") }
    validarAriaLabelAnoConsultar(){ cy.get(el.ariaLabelAnoConsultar).should('contain',"Ano") }
    validarAriaLabelEmitenteConsultar(){ cy.get(el.ariaLabelEmitenteConsultar).should('contain',"Emitente") }
    validarAriaLabelDataPublicacaoConsultar(){ cy.get(el.ariaLabelDataPublicacaoConsultar).should('contain',"Data de Publicação") }
    validarAriaLabelAcaoConsultar(){ cy.get(el.ariaLabelAcaoConsultar).should('contain',"Ação") }
    validarAriaLabelEmpreendimentoConsultar(){ cy.get(el.ariaLabelEmpreendimentoConsultar).should('contain',"Empreendimento") }
    validarControlLabelTipoRequerimentoEditar(){ cy.get(el.controlLabelTipoRequerimentoEditar).should('contain',"Tipo Requerimento") }
    validarControlLabelDemandaEditar(){ cy.get(el.controlLabelDemandaEditar).should('contain',"Demanda") }
    validarControlLabelNumeroOficioEditar(){ cy.get(el.controlLabelNumeroOficioEditar).should('contain',"Número Ofício") }
    validarControlLabelAnoOficioEditar(){ cy.get(el.controlLabelAnoOficioEditar).should('contain',"Ano Ofício") }
    validarControlLabelEmitenteOficioEditar(){ cy.get(el.controlLabelEmitenteOficioEditar).should('contain',"Emitente Ofício") }
    validarControlLabelNSeiDocRequerimentoEditar(){ cy.get(el.controlLabelNSeiDocRequerimentoEditar).should('contain',"Nº SEI Doc Requerimento") }
    validarControlLabelTitularEditar(){ cy.get(el.controlLabelTitularEditar).should('contain',"Titular") }
    validarControlLabelSuplenteEditar(){ cy.get(el.controlLabelSuplenteEditar).should('contain',"Suplente") }
    validarControlLabelDescricaoEditar(){ cy.get(el.controlLabelDescricaoEditar).should('contain',"Descrição") }
    validarControlLabelOrgaoRequerimentoEditar(){ cy.get(el.controlLabelOrgaoRequerimentoEditar).should('contain',"Órgão Requerimento") }
    validarControlLabelDataPublicacaoRequerimentoEditar(){ cy.get(el.controlLabelDataPublicacaoRequerimentoEditar).should('contain',"Data Publicação Requerimento") }
    validarControlLabelStatusRequerimentoEditar(){ cy.get(el.controlLabelStatusRequerimentoEditar).should('contain',"Status Requerimento") }
    validarControlLabelSeiProcessoRequerimentoEditar(){ cy.get(el.controlLabelSeiProcessoRequerimentoEditar).should('contain',"SEI Processo Requerimento") }
    validarControlLabelReservaOrcamentariaDiplaEditar(){ cy.get(el.controlLabelReservaOrcamentariaDiplaEditar).should('contain',"Reserva Orçamentária enviada à DIPLA") }
    validarControlLabelNDocSeiDespachoEditar(){ cy.get(el.controlLabelNDocSeiDespachoEditar).should('contain',"Nº Doc SEI Despacho") }
    digitarNSeiDoc(texto){cy.get('#ds_observacao_doc_oficio').type(texto)}
    digitarSeiProcesso(texto){
        cy.get('#cd_orgao_processo_sei').type(texto)
        cy.get('#nr_processo_sei').type(texto)
        cy.get('#aa_processo_sei').type(texto)
    }
    digitarTaxaLicenc(texto){cy.get('#vl_previsto_tx_licenciamento').type(texto)}
    digitarEstudosServicos(texto){cy.get('#vl_previsto_estudos_servicos').type(texto)}
    botaoAdicionar(){cy.get('.col-md-12 > .btn').click()}
    digitarDataPagamento(data){cy.get('#dt_pagamento').type(data)}
    digitarValorPagamento(valor){cy.get('#vl_pagamento').type(valor)}
    validarValorLicenciamento(){cy.get(':nth-child(11) > :nth-child(1) > .form-group > .text-block').should('contain','R$ 2.000,00')}
    validarValorEstudosServicos(){cy.get(':nth-child(11) > :nth-child(2) > .form-group > .text-block').should('contain','R$ 2.000,00')}
    validarValorTotalRequerimento(){cy.get(':nth-child(11) > :nth-child(3) > .form-group > .text-block').should('contain','R$ 4.000,00')}
    validarValorSaldoRequerimento(){cy.get('#saldo_requerimento').should('contain','R$ 3.000,00')}
    deletarPagamento(){cy.get('.btn-delete-pagamento > .fas').click()}
    clicarConfirmar(){cy.contains('button','Confirmar').click({ multiple: true })}
    clicarOkDeletar(){cy.get('.modal-footer > .btn').first().click()}
    clicarEditarOk(){cy.get('.modal-footer > .btn').first().click()}
    validarMensagem(mensagem){cy.get(el.caixaAviso).should('contain',mensagem)}


}

export default new consultar_requerimento()
