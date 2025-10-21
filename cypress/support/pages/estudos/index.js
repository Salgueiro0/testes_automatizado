const el = require('./elements').ELEMENTS
class estudos {

    irParaGLA() {
        cy.visit('/');
    }
    login() {
        cy.get(el.campoUsuario).type('C9020840');
        cy.get(el.campoSenha).type('welcome_1');
        cy.get(el.botaoLogin).click();
    }
    validarTituloPendencia(){cy.get(el.tituloPendencia).should('have.text', "Pendência")}
    irAbaEstudos(){cy.get(el.abaEstudo).click()}


    //validação dos campos na tela de estudos
    validarLabelEstudo(){ cy.get(el.labelEstudo).should('have.text', "Estudo / Serviço") }
    validarLabelRA(){ cy.get(el.labelRA).should('have.text', "R.A") }
    validarLabelEmpreendimento(){ cy.get(el.labelEmpreendimento).should('have.text', "Empreendimento") }
    validarLabelDemanda(){ cy.get(el.labelDemanda).should('have.text', "Demanda") }
    validarLabelListaPendencia(){ cy.get(el.labelListaPendencia).should('have.text', "Lista de Pendências") }
    validarLabelTipo(){ cy.get(el.labelTipo).should('have.text', "Tipo") }
    validarLabelNatureza(){ cy.get(el.labelNatureza).should('have.text', "Natureza") }
    validarLabelObjeto(){ cy.get(el.labelObjeto).should('have.text', "Objeto") }
    validarLabelDescricaoObjeto(){ cy.get(el.labelDescricaoObjeto).should('have.text', "Descrição do Objeto do Estudo/Serviço") }
    validarLabelStatus(){ cy.get(el.labelStatus).should('have.text', "Status") }
    validarLabelPrevisaoConclusao(){ cy.get(el.labelPrevisaoConclusao).should('have.text', "Previsão de Conclusão do Estudo") }
    validarLabelValorEstimado(){ cy.get(el.labelValorEstimado).should('have.text', "Valor Estimado - (R$)") }
    validarLabelDataElaboracao(){ cy.get(el.labelDataElaboracao).should('have.text', "Data Elaboração") }
    validarLabelTitular(){ cy.get(el.labelTitular).should('have.text', "Titular ") }
    validarLabelSuplente(){ cy.get(el.labelSuplente).should('have.text', "Suplente ") }
    validarLabelDadosContrato(){ cy.get(el.labelDadosContrato).should('have.text', "Dados do Contrato") }
    validarLabelNContrato(){ cy.get(el.labelNContrato).should('have.text', "Número do Contrato") }
    validarLabelAnoContrato(){ cy.get(el.labelAnoContrato).should('have.text', "Ano do Contrato") }
    validarLabelContratada(){ cy.get(el.labelContratada).should('have.text', "Contratada") }
    validarLabelValorContratoInicial(){ cy.get(el.labelValorContratoInicial).should('have.text', "Valor do Contrato (inicial) - (R$)") }
    validarLabelValorContratoFinal(){ cy.get(el.labelValorContratoFinal).should('have.text', "Valor do Contrato (final) - (R$)") }
    validarLabelInicioVigenciaContrato(){ cy.get(el.labelInicioVigenciaContrato).should('have.text', "Início da Vigência do Contrato") }
    validarLabelFimVigenciaContrato(){ cy.get(el.labelFimVigenciaContrato).should('have.text', "Fim da Vigência do Contrato") }
    validarLabelDescricaoObjetoContrato(){ cy.get(el.labelDescricaoObjetoContrato).should('have.text', "Descrição do Objeto do Contrato") }
    validarLabelDadosOrdem(){ cy.get(el.labelDadosOrdem).should('have.text', "Dados da Ordem de Serviço da Empresa") }
    validarLabelNumeroOS(){ cy.get(el.labelNumeroOS).should('have.text', "Número da OS") }
    validarLabelAnoOS(){ cy.get(el.labelAnoOS).should('have.text', "Ano da OS") }
    validarLabelUnidadeResponsavelOS(){ cy.get(el.labelUnidadeResponsavelOS).should('have.text', "Unidade Responsável pela OS") }
    validarAriaLabelEmpreendimento(){ cy.get(el.ariaLabelEmpreendimento).should('have.text', "Empreendimento") }
    validarAriaLabelReferencia(){ cy.get(el.ariaLabelReferencia).should('have.text', "Referência") }
    validarAriaLabelObjeto(){ cy.get(el.ariaLabelObjeto).should('have.text', "Objeto") }
    validarAriaLabelStatus(){ cy.get(el.ariaLabelStatus).should('have.text', "Status") }
    validarAriaLabelContratoOS(){ cy.get(el.validarAriaLabelContratoOS).should('have.text', "Contrato | OS") }
    validarAriaLabelAcao(){ cy.get(el.validarAriaLabelAcao).should('have.text', "Ação") }
    selecionarRA(){ cy.get(el.selecionarRA).click(); cy.get('.select2-results').find('li').contains('RA-I - BRASILIA').click({force: true}) }
    limparFormularioPesquisa(){ cy.wait(3000); cy.get(el.limparFormularioPesquisa).click() }
    botaoNovoCadastro(){ cy.get(el.botaoNovoCadastro2).click() }
    validarTextoNovoCadastro(){ cy.get(el.validarTextoNovoCadastro).should('have.text', "Novo Cadastro") }
    validarTextoReferencias(){ cy.get(el.validarTextoReferencias).should('have.text', "Referências") }
    validarTextoIncluirRequerimento(){ cy.get(el.validarTextoIncluirRequerimento).should('have.text', "Incluir Requerimento") }
    validarLabelCadastroRA(){ cy.get(el.validarLabelCadastroRA).should('have.text', "R.A") }
    validarLabelCadastroEmpreendimento(){ cy.get(el.validarLabelCadastroEmpreendimento).should('have.text', "Empreendimento") }
    validarLabelCadastroTipoRequerimento(){ cy.get(el.validarLabelCadastroTipoRequerimento).should('have.text', "Tipo Requerimento") }
    validarLabelCadastroRequerimentos(){ cy.get(el.validarLabelCadastroRequerimentos).should('have.text', "Requerimentos *") }
    validarLabelCadastroRequerimentosReferenciados(){ cy.get(el.validarLabelCadastroRequerimentosReferenciados).should('have.text', "Requerimentos Referenciados") }
    validarLabelCadastroRequerimento(){ cy.get(el.validarLabelCadastroRequerimento).should('have.text', "Requerimento") }
    validarLabelCadastroIncluirExigencia(){ cy.get(el.validarLabelCadastroIncluirExigencia).should('have.text', "Incluir Exigência") }
    validarFormCadastroRA(){ cy.get(el.validarFormCadastroRA).should('have.text', "R.A") }
    validarFormCadastroEmpreendimento(){ cy.get(el.validarFormCadastroEmpreendimento).should('have.text', "Empreendimento") }
    validarFormCadastroDemanda(){ cy.get(el.validarFormCadastroDemanda).should('have.text', "Demanda") }
    validarFormCadastroExigencias(){ cy.get(el.validarFormCadastroExigencias).should('have.text', "Exigências *") }
    validarFormCadastroExigenciasRef(){ cy.get(el.validarFormCadastroExigenciasRef).should('have.text', "Exigências Referenciadas") }
    validarTabelaCadastroN(){ cy.get(el.validarTabelaCadastroN).should('have.text', "N°") }
    validarTabelaCadastroDescricao(){ cy.get(el.validarTabelaCadastroDescricao).should('have.text', "Descrição") }
    validarTabelaCadastroAcao(){ cy.get(el.validarTabelaCadastroAcao).should('have.text', "Ação") }
    validarLabelCadastroDadosGerais(){ cy.get(el.validarLabelCadastroDadosGerais).should('have.text', "Dados Gerais") }
    validarFormCadastroTipo(){ cy.get(el.validarFormCadastroTipo).should('have.text', "Tipo*") }
    validarFormCadastroNatureza(){ cy.get(el.validarFormCadastroNatureza).should('have.text', "Natureza") }
    validarLabelCadastroObjeto(){ cy.get(el.validarLabelCadastroObjeto).should('have.text', "Objeto") }
    validarFormCadastroDescricao(){ cy.get(el.validarFormCadastroDescricao).should('have.text', "Descrição do Objeto do Estudo/Serviço") }
    validarFormCadastroAreaPoligonal(){ cy.get(el.validarFormCadastroAreaPoligonal).should('have.text', "Área da Poligonal de Estudo") }
    validarFormCadastroStatus(){ cy.get(el.validarFormCadastroStatus).should('have.text', "Status") }
    validarFormCadastroDescricaoStatus(){ cy.get(el.validarFormCadastroDescricaoStatus).should('have.text', "Descrição do Status") }
    validarFormCadastroOrgaoExterno(){ cy.get(el.validarFormCadastroOrgaoExterno).should('have.text', "Órgão Externo avaliador") }
    validarFormCadastroValorEstimado(){ cy.get(el.validarFormCadastroValorEstimado).should('have.text', "Valor do Estudo") }
    validarFormCadastroProcessoSEI(){ cy.get(el.validarFormCadastroProcessoSEI).should('have.text', "Processo SEI de Acompanhamento / Contratação") }
    validarFormCadastroTitular(){ cy.get(el.validarFormCadastroTitular).should('have.text', "Titular") }
    validarFormCadastroSuplente(){ cy.get(el.validarFormCadastroSuplente).should('have.text', "Suplente") }
    validarFormCadastroCaminhoDepart(){ cy.get(el.validarFormCadastroCaminhoDepart).should('have.text', "Caminho no Depart") }
    validarFormCadastroDataElaboracao(){ cy.get(el.validarFormCadastroDataElaboracao).should('have.text', "Data de Elaboração") }
    validarFormCadastroPrevisaoConclusaoEstudo(){ cy.get(el.validarFormCadastroPrevisaoConclusaoEstudo).should('have.text', "Previsão de Conclusão do Estudo") }
    validarFormCadastroDadosContrato(){ cy.get(el.validarFormCadastroDadosContrato).should('have.text', "Dados do Contrato") }
    validarFormCadastro(){ cy.get(el.validarFormCadastro).click() }
    validarFormCadastroNumeroContrato(){ cy.get(el.validarFormCadastroNumeroContrato).should('have.text', "Numero do Contrato") }
    validarFormCadastroAnoContrato(){ cy.get(el.validarFormCadastroAnoContrato).should('have.text', "Ano do Contrato") }
    validarFormCadastroContratada(){ cy.get(el.validarFormCadastroContratada).should('have.text', "Contratada") }
    validarFormCadastroValorContratoInicial(){ cy.get(el.validarFormCadastroValorContratoInicial).should('have.text', "Valor do Contrato (inicial)") }
    validarFormCadastroValorContrato(){ cy.get(el.validarFormCadastroValorContrato).should('have.text', "Valor do Contrato (reajustado)") }
    validarFormCadastroInicioVigenciaContrato(){ cy.get(el.validarFormCadastroInicioVigenciaContrato).should('have.text', "Início da Vigência do Contrato") }
    validarFormCadastroFimVigenciaContrato(){ cy.get(el.validarFormCadastroFimVigenciaContrato).should('have.text', "Fim da Vigência do Contrato") }
    validarFormCadastroDescricaObjetoContrato(){ cy.get(el.validarFormCadastroDescricaObjetoContrato).should('have.text', "Descrição do Objeto do Contrato") }
    validarFormCadastroDadosOrdemServico(){ cy.get(el.validarFormCadastroDadosOrdemServico).should('have.text', "Dados da Ordem de Serviço da Empresa") }
    validarDGTipo() {cy.get('[width="350px"]').should('contain','Tipo')}
    validarDGNatureza() {cy.get('tbody > :nth-child(2) > :nth-child(1)').should('contain','Natureza')}
    validarDGObjeto(){cy.get('tbody > :nth-child(3) > :nth-child(1)').should('contain','Objeto')}
    validarDGDescricaoObjeto() {cy.get(':nth-child(4) > :nth-child(1) > b').should('contain','Descrição do Objeto do Estudo/Serviço')}
    validarDGAreaPoligonal() {cy.get(':nth-child(5) > :nth-child(1) > b').should('contain','Área da Poligonal de Estudos')}
    validarDGStatus() {cy.get('tbody > :nth-child(6) > :nth-child(1)').should('contain','Status')}
    validarDGDescStatus() {cy.get('tbody > :nth-child(7) > :nth-child(1)').should('contain','Descrição do Status')}
    validarDGOrgaoExAvaliador() {cy.get('tbody > :nth-child(8) > :nth-child(1)').should('contain','Órgão Externo Avaliador')}
    validarDGProcessoSEI() {cy.get('tbody > :nth-child(9) > :nth-child(1)').should('contain','Processo SEI de Acompanhamento / Contratação')}
    validarDGTitular() {cy.get('tbody > :nth-child(10) > :nth-child(1)').should('contain','Titular')}
    validarDGSuplente() {cy.get('tbody > :nth-child(11) > :nth-child(1)').should('contain','Suplente')}
    validarDGCaminhoDepart() {cy.get('tbody > :nth-child(12) > :nth-child(1)').should('contain','Caminho no Depart')}
    validarDGDataElab() {cy.get('tbody > :nth-child(13) > :nth-child(1)').should('contain','Data de Elaboração')}
    validarDGPrevConclusaoEstudo() {cy.get('tbody > :nth-child(14) > :nth-child(1)').should('contain','Previsão de Conclusão do Estudo')}
    validarDGObservacoes() {cy.get(':nth-child(15) > :nth-child(1)').should('contain','Observações (Processos)')}
    validarDGValorEstudo() {cy.get(':nth-child(16) > :nth-child(1)').should('contain','Valor do Estudo')}
    validarDGValorPagoEstudo() {cy.get(':nth-child(17) > :nth-child(1)').should('contain','Valor Pago do Estudo')}
    validarDGSaldoEstudo(){cy.get(':nth-child(18) > :nth-child(1)').should('contain','Saldo do Estudo')}
    clicarBotaoMais(){ cy.get(el.clicarBotaoMais).click() }
    expandirPagamento(){
        cy.get('.sorting_1').should('be.visible')
        cy.get("[onclick=\"toggleFormAccordion('pg')\"]").click()}
    botaoAdicionarPagamento(){
        cy.get(':nth-child(14) > :nth-child(1) > .col-md-12 > .btn').should('be.visible').click()
        cy.wait(3000)
    }
    digitarDataPagamento(data){cy.get('#dt_pagamento').should('be.visible').type(data)}
    digitarValorPagamento(valor){cy.get('#vl_pagamento').type(valor)}
    selecionarProdutoPagamento(){ cy.get('#select2-objeto_estudo-container').click()}
    botaoSalvarPagamento(){cy.get('#botao-salvar').click()}
    botaoOkPagamento(){cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click()}
    selecionarRegiaoAdmin(){ cy.get(el.selecionarRegiaoAdmin).click() }
    seletorDropdown(select){ cy.get(el.seletorDropdown).contains(select).click({force: true}) }
    validaDropdownObjeto(selects) {
        cy.get('#form_dados_gerais > :nth-child(2) > .form-group').then($e => {
            const container = ($e.attr('tabindex') === '-1') ? cy.wrap($e) : cy.get(el.seletorDropdown)

            if (Array.isArray(selects)) {
                selects.forEach(item => {
                    container.should('contain', item)
                })
            } else {
                container.should('contain', selects)
            }
        })
    }
    validaDropdownStatus(selects) {
        cy.get(':nth-child(6) > .form-group > .select2-container > .selection > .select2-selection').then($e => {
            const container = ($e.attr('tabindex') === '-1') ? cy.wrap($e) : cy.get(el.seletorDropdown)

            if (Array.isArray(selects)) {
                selects.forEach(item => {
                    container.should('contain', item)
                })
            } else {
                container.should('contain', selects)
            }
        })
    }

    selecionarEmpreendimento(){
        cy.wait(3000)
        cy.get(el.selecionarEmpreendimento).click()
        cy.wait(3000) }
    selecionarTpRequerimento(){ cy.get(el.selecionarTpRequerimento).click() }
    requerimentosDesabilitado(){cy.get(':nth-child(5) > .form-group > .select2-container > .selection > .select2-selection').should('have.attr', 'tabindex', '-1')}
    requerimentosHabilitado(){{cy.get(':nth-child(5) > .form-group > .select2-container > .selection > .select2-selection').should('have.attr', 'tabindex', '0')}}
    selecionarCdRequerimento(){ cy.get(el.selecionarCdRequerimento).click() }
    validarRequerimento(select){ cy.get(el.seletorDropdown).should('contain',select)}
    clicarBotaoAdicionarRequerimento(){ cy.get(el.clicarBotaoAdicionarRequerimento).click() }
    MSGRequerimentoObrigatorio(){cy.get('.bootbox-body').should('contain','Selecione um Empreendimento, um Tipo de Requerimento e um Requerimento.')}
    selecionarRegiaoAdminExi(){ cy.get(el.selecionarRegiaoAdminExi).click() }
    selecionarEmpreendimentoExi(){ cy.get(el.selecionarEmpreendimentoExi).should('have.attr', 'tabindex', '0').click() }
    selecionarDemandaContainer(){ cy.get(el.selecionarDemandaContainer).should('have.attr', 'tabindex', '0').click() }
    selecionarExigenciaContainer(){ cy.get(el.selecionarExigenciaContainer).should('have.attr', 'tabindex', '0').click() }
    validarExigencia(select){ cy.get(el.seletorDropdown).should('contain',select)}
    clicarBotaoAdicionarExigencia(){ cy.get(el.clicarBotaoAdicionarExigencia).click() }
    exigenciasDesabilitado(){cy.get('#form_exigencia > :nth-child(4) > .form-group > .select2-container > .selection > .select2-selection').should('have.attr', 'tabindex', '-1')}
    exigenciasHabilitado(){cy.get('#form_exigencia > :nth-child(4) > .form-group > .select2-container > .selection > .select2-selection').should('have.attr', 'tabindex', '0')}
    validarMSGObrigatorios(){cy.get('.bootbox-body').should('contain','Selecione um Empreendimento, uma Demanda e uma Exigência.')}
    selecionarTpEstudoContainer(){ cy.get(el.selecionarTpEstudoContainer).click() }
    clicaObjeto(){cy.get('#tp_objeto_field > .select2-container > .selection > .select2-selection').click()}
    digitaObjeto(texto){cy.get('#ds_objeto').type(texto)}
    selecionarTpNaturezaContainer(){
            cy.get('#form_dados_gerais > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection')
                .should('have.attr', 'tabindex', '0')
                .click({ force: true })
    }
    selecionarTpObjetoContainer(){ cy.get(el.selecionarTpObjetoContainer).click() }
    selecionarTpStatusContainer(){ cy.get(el.selecionarTpStatusContainer).click() }
    selecionarCdPessoaTitularContainer(){ cy.get(el.selecionarCdPessoaTitularContainer).click() }
    selecionarCdPessoaSuplenteContainer(){ cy.get(el.selecionarCdPessoaSuplenteContainer).click() }
    valorEstimado(valor){cy.get('#vl_estimado').type(valor)}
    clicarBotaoSalvar(){ cy.get(el.clicarBotaoSalvar).click() }
    clicarBotaoContinuar(){ cy.get(el.clicarBotaoContinuar).click() }
    clicarBotaoOkObrigatorios(){
        cy.wait(1000)
        cy.get('.modal-footer > .btn').click()}
    clicarBotaoOk(){ cy.get(el.clicarBotaoOk).click() }
    clicarBotaoVoltar(){ cy.get(el.clicarBotaoVoltar).click()}
    selecionarPesTitular(){ cy.get(el.selecionarPesTitular).click() }
    selecionarPesSuplente(){ cy.get(el.selecionarPesSuplente).click() }
    botaoPesquisar(){ cy.get(el.botaoPesquisar).click() }
    clicarPrimeiroBotaoEditar(){ cy.get(el.clicarPrimeiroBotaoEditar).first().click() }
    clicarPrimeiroBotaoVisualizar(){ cy.get(el.clicarPrimeiroBotaoVisualizar).first().click() }
    excluirEstudo(){
        cy.get('#btn-delete-estudo').click()
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.contains('button','OK').click()
    }
    validarTituloEditar(){ cy.get(el.validarTituloEditar).should('have.text', "Editar"); cy.wait(4000) }
    seletorPessoaTitular(){ cy.get(el.seletorPessoaTitular).click(); cy.wait(4000) }
    seletorPessoaSuplente(){ cy.get(el.seletorPessoaSuplente).click() }
    clicarPrimeiroBotaoExcluir(){ cy.get(el.clicarPrimeiroBotaoExcluir).first().click() }
    clicarModalOk(){ cy.get(el.clicarModalOk).should('be.visible').and('contain.text', 'OK').click() }
    referenciaObrigatoria(){cy.get('#error_referencia').should('contain','Informe pelo menos uma Referência')}
    naturezaObrigatoria(){cy.get('#error_tp_natureza').should('contain','O campo Natureza é obrigatório')}
    tipoDeEstudoObrigatoria(){cy.get('#error_tp_estudo').should('contain','O campo Tipo de Estudo é obrigatório')}
    objetoObrigatoria(){cy.get('#error_tp_objeto').should('contain','O campo Objeto é obrigatório')}
    statusObrigatoria(){cy.get('#error_tp_status').should('contain','O campo Status é obrigatório')}
    titularObrigatoria(){cy.get('#error_cd_pessoa_titular').should('contain','O campo Titular é obrigatório')}
    suplenteObrigatoria(){cy.get('#error_cd_pessoa_suplente').should('contain','O campo Suplente é obrigatório')}
    validaTabelaRequerimento(){cy.get('.odd > :nth-child(2)').should('contain','Nova Permissão - Ofício n° 6/1565 - ACJUR p/ ADASA')}
    irEmpreendimentos(){cy.get('.sidebar-menu > :nth-child(2) > a').click()}
    pesquisarEstudo(){cy.get('#pesquisar').click()}
    filtrar(filtro){cy.get('#table-empreendimento_filter > label > .form-control').type(filtro)}
    clicarEstudos(){cy.get('.novo-estudo-aba').click()}
    validaResultadosEstudos(){cy.get('#tabela-estudo-aba_wrapper > :nth-child(2) > .col-sm-12').should('contain','R$')}
    validaIdentificacao(){
        cy.get('#form_estudo > .box > .box-body > .panel > .panel-body > :nth-child(1) > :nth-child(1) > .form-group > label').should('contain','Tipo')
        cy.get('#form_estudo > .box > .box-body > .panel > .panel-body > :nth-child(1) > :nth-child(2) > .form-group > .control-label').should('contain','Natureza')
        cy.get(':nth-child(3) > .control-label').should('contain','Objeto')
        cy.get('.col-md-12 > .form-group > .control-label').should('contain','Descrição do Objeto do Estudo/Serviço')
        cy.get('#form_estudo > .box > .box-body > .panel > .panel-body > :nth-child(3) > :nth-child(1) > .form-group > .control-label').should('contain','Status')
        cy.get('#form_estudo > .box > .box-body > .panel > .panel-body > :nth-child(3) > :nth-child(2) > .form-group > .control-label').should('contain','Data de Elaboração')
    }
    validaTabela(){
        cy.get('#tabela-estudo-aba > thead > tr > .sorting_asc').should('contain','Referência')
        cy.get('[aria-label="Natureza: Ordenar colunas de forma ascendente"]').should('contain','Natureza')
        cy.get('[aria-label="Objeto: Ordenar colunas de forma ascendente"]').should('contain','Objeto')
        cy.get('[aria-label="Status: Ordenar colunas de forma ascendente"]').should('contain','Status')
        cy.get('[aria-label="Contrato | OS: Ordenar colunas de forma ascendente"]').should('contain','Contrato | OS')
        cy.get('#tabela-estudo-aba > thead > tr > [aria-label="Ação: Ordenar colunas de forma ascendente"]').should('contain','Ação')
        cy.get('.col-md-12 > .panel-border > .panel-body').should('contain','Contrato')
    }
    validaTabelaEmpreendimento(){
        cy.get('#tabela-estudo-aba_filter > label > .form-control').type('Nova Permissão')
        cy.get('#tabela-estudo-aba > tbody > :nth-child(1) > .sorting_1').should('contain','Nova Permissão')
        cy.get('#tabela-estudo-aba > tbody > :nth-child(1) > .sorting_1').should('contain','Ofício')
    }

    validaTitularReq(titular){cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain',titular)}
    validaSuplenteReq(suplente){cy.get('tbody > :nth-child(11) > :nth-child(2)').should('contain',suplente)}
    validaMSGImpossivelExcluir(){
        cy.get('#btn-delete-estudo').click()
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.bootbox-body').should('contain', 'Impossível excluir este Estudo, Compra ou Serviço Ambiental.')
        cy.get('.bootbox-body').should('contain', 'Existem (Ordens de serviço da Empresa, Produtos/subprodutos/Serviços, Pagamentos) vinculados')
        cy.contains('button','OK').click()
    }
    filtrarEstudo(filtro){
        if(filtro){cy.get('#table-estudo_filter > label > .form-control').type(filtro)}
    }
        validarTabelaReq() {
        cy.get(':nth-child(1) > .panel > .panel-body > :nth-child(2)')
            .invoke('text')
            .then((text) => {
                const textoNormalizado = text.replace(/\s+/g, ' ').trim()
                expect(textoNormalizado).to.include('88 - LP - Licença Prévia - Ofício n° 6/1565 - ACJUR p/ ADASA')
            })

        cy.get(':nth-child(1) > .panel > .panel-body > :nth-child(2)')
            .invoke('text')
            .then((text) => {
                const textoNormalizado = text.replace(/\s+/g, ' ').trim()
                expect(textoNormalizado).to.include('39 - Prorrogação / Renovação de LP - Licença Prévia n° 737/1998 - IBAMA - Ofício n° 123/2010 - ACJUR p/ ABDI')
            })
    }
    validaTabelaExigencia(){
        cy.get(':nth-child(1) > .panel > .panel-body > :nth-child(2)')
            .invoke('text')
            .then((text) => {
                const textoNormalizado = text.replace(/\s+/g, ' ').trim()
                expect(textoNormalizado).to.include('LP n° 737/1998 - IBAMA - Exigência n° 1 - ----------------- ÇÇÇ Â ÂÂ')
            })

        cy.get(':nth-child(1) > .panel > .panel-body > :nth-child(2)')
            .invoke('text')
            .then((text) => {
                const textoNormalizado = text.replace(/\s+/g, ' ').trim()
                expect(textoNormalizado).to.include('LP n° 212/2025 - ABDI - Exigência n° 10454457 - teste')
            })
    }
    expandirProduto(){cy.get("[onclick=\"toggleFormAccordion('pss')\"]").click()}
    botaoAdicionarProduto(){cy.get(':nth-child(10) > :nth-child(1) > .col-md-12 > .btn').should('be.visible').click()}
    clicarTipoProduto(){cy.get('#select2-tp_objeto_estudo-container').click()}
    digitarNumeroProduto(numero){cy.get('#co_objeto_estudo').type(numero)}
    digitarNomeProduto(nome){cy.get('#nm_objeto_estudo').type(nome)}
    selecionarStatusProduto(){cy.get('#select2-tp_status-container > .select2-selection__placeholder').click()}
    botaoSalvarProduto(){cy.get('#botao-salvar-obj-est').click()}
    botaoOkProduto(){cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').first().click()}

    validaSubtracao() {
        cy.get('#vl_estimado').should('contain','R$ 10,00')
        cy.get(':nth-child(17) > :nth-child(2)').should('contain','1.000.000.000,00')
        cy.get('#vl_saldo').should('contain','999.999.990,00')
    }
    referenciarPendencia(ra,empreendimento,listaPendencia,pendencias){
        cy.get('#select2-cd_regiao_admin_pen-container > .select2-selection__placeholder').click()
        cy.get(el.seletorDropdown).contains(ra).click({force: true})
        cy.wait(3000)
        cy.get('#select2-cd_empreendimento_pen-container').click()
        cy.get(el.seletorDropdown).contains(empreendimento).click({force: true})
        cy.get('#form_pendencia > :nth-child(3) > .form-group > .select2-container > .selection > .select2-selection').should('have.attr', 'tabindex', '0').click()
        cy.get(el.seletorDropdown).contains(listaPendencia).click({force: true})
        cy.get('#select2-cd_pendencia-container > .select2-selection__placeholder').click()
        cy.get(el.seletorDropdown).contains(pendencias).click({force: true})
        cy.get('#btnAdicionar_pendencia').click()
    }
    adicionarSemCamposObrigatorios(){
        cy.get('#btnAdicionar_pendencia').click()
        cy.get('.bootbox-body').should('contain','Selecione um Empreendimento , uma categoria e uma Pendência.')
        cy.get('.modal-footer > .btn').click()
    }
    visualizarDemandas(){
        cy.get(':nth-child(3) > [href="#"] > :nth-child(2)').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').should('be.visible').click()
        cy.get('#pesquisar').should('be.visible').click()
        cy.get('#pesquisar').should('be.visible').click()
        cy.get(el.clicarPrimeiroBotaoVisualizar).should('be.visible').first().click()
        cy.get('.novo-estudo-aba').should('be.visible').click()
        cy.get('h1').should('contain','Demanda')
    }
    visualizarRequerimento(){
        cy.get(':nth-child(7) > [href="#"] > :nth-child(2)').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').should('be.visible').click()
        cy.get('#pesquisarRequerimento').should('be.visible').click()
        cy.get('#pesquisarRequerimento').should('be.visible').click()
        cy.get(el.clicarPrimeiroBotaoVisualizar).should('be.visible').first().click()
        cy.get('.novo-estudo-aba').should('be.visible').click()
        cy.get('h1').should('contain','Requerimento')
    }
    validarTituloEmpreendimento(){
        cy.get('h1').should('contain','Empreendimento')
    }
    visualizarExigencia(ra,empreendimento){
        cy.get(':nth-child(6) > a > span').click()
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').should('be.visible').click()
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get(el.seletorDropdown).contains(ra).click({force: true})
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get(el.seletorDropdown).contains(empreendimento).click({force: true})
        cy.get('#pesquisarExigencia').should('be.visible').click()
        cy.get('#pesquisarExigencia').should('be.visible').click()
        cy.get(el.clicarPrimeiroBotaoVisualizar).should('be.visible').first().click()
        cy.get('.novo-estudo-aba').should('be.visible').click()
        cy.get('h1').should('contain','Exigência')
    }
    selecionaTipoNatureza(tipo,natureza){
        cy.get('#select2-tp_estudo-container').click()
        cy.get(el.seletorDropdown).contains(tipo).click({force: true})
        cy.get('#form_dados_gerais > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection').should('have.attr', 'tabindex', '0').click()
        cy.get(el.seletorDropdown).contains(natureza).click({force: true})
    }
    dadosContratoDesab(){cy.get('#nr_contrato_convenio').should('be.disabled')}
    dadosContratoHabilitado(){cy.get('#nr_contrato_convenio').should('not.be.disabled')}
    botaoEditar(){cy.get(':nth-child(2) > .panel-footer > .btn-toolbar > a.btn').click()}
    expandirDadosOS(){cy.get("[onclick=\"toggleFormAccordion('os')\"]").click()}
    clicarAdicionar(){cy.get(':nth-child(12) > :nth-child(1) > .col-md-12 > .btn').click()}
    selecionarProduto(){cy.get('#select2-objeto_estudo_os-container').click()}
    adicionarProduto(){cy.get('#adicionarObjetoEstudoOsBtn').click()}
    digitarNumero(numero){cy.get('#nr_ordem_servico').type(numero)}
    digitarAno(ano){cy.get('#aa_ordem_servico').type(ano)}
    botaoSalvar(){cy.get('#botao-salvar-os').click()}
    botaoOk(){cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click()}
    clicarExcluirDadosDetalhados(posicaoExcluir){cy.get(el.clicarPrimeiroBotaoExcluir)
        .should('be.visible')
        .eq(posicaoExcluir).click()}
    clicarConfirmarExcluirDadosDetalhados(){cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').first().click()}
    validaMSGPreenchaCampos(){cy.get('.bootbox-body').should('contain','Preencha todos os campos obrigatórios')}
    limparTipoProduto(){cy.get('#select2-tp_objeto_estudo-container > .select2-selection__clear').click()}
    limparNumero(){cy.get('#co_objeto_estudo').clear()}
    limparNome(){cy.get('#nm_objeto_estudo').clear()}
    limparStatus(){cy.get('#select2-tp_status-container > .select2-selection__clear').click()}
    fecharModalProduto(){cy.get('#modal-produtos-subprodutos-servicos > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()}
    digitarDescricaoPagamentos(descricao){cy.get('#ds_pagamento').type(descricao)}
    validarAcordeoes(referencias,dadosGerais,dadosContrato,vinculosCACF,produto,dadosOs,pagamento){
        cy.get("[onclick=\"toggleFormAccordion('rf')\"]").should('contain',referencias)
        cy.get("[onclick=\"toggleFormAccordion('gr')\"]").should('contain',dadosGerais)
        cy.get("[onclick=\"toggleFormAccordion('ct')\"]").should('contain',dadosContrato)
        cy.get("[onclick=\"toggleFormAccordion('vi')\"]").should('contain',vinculosCACF)
        cy.get("[onclick=\"toggleFormAccordion('pss')\"]").should('contain',produto)
        cy.get("[onclick=\"toggleFormAccordion('os')\"]").should('contain',dadosOs)
        cy.get("[onclick=\"toggleFormAccordion('pg')\"]").should('contain',pagamento)
    }
}

export default new estudos()