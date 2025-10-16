const el = require('./elements').ELEMENTS
class pendencias {
    irParaGLA(){ cy.visit('/') }
    login(){ cy.get(el.campoUsuario).type('C9020840'); cy.get(el.campoSenha).type('welcome_1'); cy.get(el.botaoLogin).click() }
    validarTituloPendencia(){cy.get(el.tituloPendencia).should('have.text', "Pendência")}
    clicarAbaPendencia(){cy.get(el.abaPendencia).click()}
    validarLabelEmpreendedorResponsavel(){cy.get(el.labelEmpreendedorResponsavel).should('have.text', "Empreendedor Responsável ")}
    validarLabelEmpreendimento(){cy.get(el.labelEmpreendimento).should('have.text', "Empreendimento ")}
    validarLabelPrioridade(){cy.get(el.labelPrioridade).should('have.text', "Prioridade ")}
    validarLabelListaPendencias(){cy.get(el.labelListaPendencias).should('have.text', "Lista de Pendências ")}
    validarLabelCategoria(){cy.get(el.labelCategoria).should('have.text', "Categoria ")}
    validarLabelResumo(){cy.get(el.labelResumo).should('have.text', "Resumo")}
    validarLabelUnidadeInterna(){cy.get(el.labelUnidadeInterna).should('have.text', "Unidade Interna ")}
    validarLabelStausPendencia(){cy.get(el.labelStatusPendencia).should('have.text', "Status da Pendência")}
    validarLabelProvidencias(){cy.get(el.labelProvidencias).should('have.text', "Providências")}
    validarLabelExigeContratacao(){cy.get(el.labelExigeContratacao).should('have.text', "Exige Contratação?")}
    validarLabelPrevisaoCumprimento(){cy.get(el.labelPrevisaoCumprimento).should('have.text', "Previsão de Cumprimento")}
    validarLabelDataLimite(){cy.get(el.labelDataLimite).should('have.text', "Data Limite")}
    validarLabelTitular(){cy.get(el.labelTitular).should('have.text', "Titular ")}
    validarLabelPeriodoLimite(){cy.get(el.labelPeriodoLimite).should('have.text', "Período Dias Restantes (data limite)")}
    validarLabelPeriodoCumprimento(){cy.get(el.labelPeriodoCumprimento).should('have.text', "Período Dias Restantes (previsão de cumprimento)")}
    validarLabelSuplente(){cy.get(el.labelSuplente).should('have.text', "Suplente ")}
    validarALabelEmpreendedorResponsavel(){cy.get(el.aLabelEmpreendedorResponsavel).should('have.text', "Empreendedor Responsável")}
    validarALabelEmpreendimento(){cy.get(el.aLabelEmpreendimento).should('have.text', "Empreendimento")}
    validarALabelPrioridade(){cy.get(el.aLabelPrioridade).should('have.text', "Prioridade")}
    validarALabelListaPendencia(){cy.get(el.aLabelListaPendencia).should('have.text', "Lista de Pendências")}
    validarALabelCategoria(){cy.get(el.aLabelCategoria).should('have.text', "Categoria")}
    validarALabelResumo(){cy.get(el.aLabelResumo).should('have.text', "Resumo")}
    validarALabelExigenciaVinculada(){cy.get(el.aLabelExigenciaVinculada).should('have.text', "Exigência Vinculada")}
    validarALabelUnidadeInterna(){cy.get(el.aLabelUnidadeInterna).should('have.text', "Unidade Interna")}
    validarALabelProcSeiAcompanhamento(){cy.get(el.aLabelProcSeiAcompanhamento).should('have.text', "Proc Sei de Acompanhamento")}validarALabelStatusPendencia(){cy.get(el.aLabelStatusPendencia).should('have.text', "Status da Pendência")}
    validarALabelProvidencia(){cy.get(el.aLabelProvidencia).should('have.text', "Providência")}
    validarALabelExigeContratacao(){cy.get(el.aLabelExigeContratacao).should('have.text', "Exige Contratação?")}
    validarALabelPrevisaoCumprimento(){cy.get(el.aLabelPrevisaoCumprimento).should('have.text', "Previsão de Cumprimento")}
    validarALabelDiasCumprimento(){cy.get(el.aLabelDiasCumprimento).should('have.text', "Dias Restantes (Previsão de Cumprimento)")}
    validarALabelDataLimite(){cy.get(el.aLabelDataLimite).should('have.text', "Data Limite")}
    validarALabelDiasLimite(){cy.get(el.aLabelDiasLimite).should('have.text', "Dias Restantes (Data Limite)")}
    clicarBotaoCadastrarEditar(){cy.get(el.botaoCadastrarEditar).click()}
    selecionarCdEmpreendimento(){cy.get('#select2-cd_empreendimento-container').click()}
    dropdownGLA(seletor){cy.get('.select2-results').find('li').contains(seletor).click({force:true})}
    pesquisarPendencia(){cy.get('#pesquisarPendencias').click()}

    validarTituloCadastrarEditar(){cy.get('#pendencia > .box > .box-header > .box-title').should('have.text', "Cadastrar/Editar")}
    validarAdListaPendencia(){cy.get('.panel-body > .panel-footer > .btn-toolbar > .btn-success').should('have.text', "Adicionar Lista de Pendências")}
    clicarBtn(){cy.get('.content > :nth-child(3) > .box-header > .box-tools > .btn > .fa').click()}
    criarLinhas(){for(var i=0;i<14;i++){cy.get(el.pendenciaTodasBtn).click();cy.wait(1000)}}
    resumo(){cy.get(el.adicionarResumo).click();cy.wait(2000)}
    digitarResumo(texto) {
        cy.get(el.iframeAdicionar2Dado)
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .find('p')
            .click()
            .type(texto)
            .invoke('text')
            .should('have.length.at.most', 500)
    }
    adicionar3Dado(){cy.get(el.btnAdicionar3Dado).click()}
    adicionar4Dado(){cy.get(el.btnAdicionar4Dado).click();cy.wait(2000)}
    selecionarCdDemanda(){cy.get(el.cdDemandaContainer).click();cy.wait(2000)}
    selecionarStatusExigencia(){cy.get(el.selecionarDadoContainer).click()}
    clicarBotaoEditar(){cy.get(el.btnEditar).click()}
    clicarExigencia(){cy.get(el.btnExigencia).click()}
    clicarSegBotaoEditar(){cy.get(el.btnSegEditar).click()}
    adicionar5Dado(){cy.get(el.btnAdicionar5Dado).click()}
    adicionar9Dado(){cy.get(el.btnAdicionar9Dado).click()}
    selecionarOrgaoUnidadeInterna(){cy.get(el.cdOrgaoUnidadeInternaContainer).click()}
    adicionarUnidadeInterna(){
        cy.get(el.btnAdicionarUnidadeInterna).click()
        cy.wait(1000)
    }
    unidadeInterna(){cy.get(':nth-child(1) > :nth-child(4) > a > .fa').click()}
    clicarConfirmar(){cy.get(el.btnPrimeiro).click();cy.wait(1000)}
    digitarOrgaoProcessoSei(texto){cy.get(el.inputOrgaoProcessoSei).type(texto);cy.wait(1000)}
    DigitarNumeroProcessoSei(texto){cy.get(el.inputNumeroProcessoSei).type(texto);cy.wait(1000)}
    digitarAnoProcessoSei(texto){cy.get(el.inputAnoProcessoSei).type(texto);cy.wait(4000)}
    modalEditar(){cy.get('#modal-alteracao-sei > .modal-dialog > .modal-content > .modal-footer > #botao-editar').click();cy.wait(1000)}
    selecionar(){cy.get(el.select2911).select('2911')}
    adicionar6Dado(){cy.get(el.btnAdicionar6Dado).click()}
    digitarEmParagrafo(texto){cy.get(el.iframeDigitarParagrafo).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).find('p').click().type(texto)}
    alterarModalProvidencia(){cy.get(el.btnAlterarModalProvidencia).click()}
    adicionar7Dado(){cy.get(el.select1).select('1')}
    digitarDataPrevisaoCumprimento(){cy.get(el.inputDataPrevisaoCumprimento).type("2025-01-01")}
    alterarModalCumprimento(){cy.get(el.btnAlterarModalCumprimento).click()}
    ignorarErroFalse(){cy.on('uncaught:exception',(err,runnable)=>{return false})}
    adicionar8Dado(){cy.get(el.btnAdicionar8Dado).click()}


    digitarDataLimite(){cy.get(el.inputDataLimite).type(DataFormatoCypress)}
    alterarModalLimite(){cy.get(el.btnAlterarModalLimite).click()}
    ignorarErroTrue(){cy.on('uncaught:exception',(err,runnable)=>{return true})}
    irAba(){cy.get(el.abaPendencia2).click()}
    seletorEmpreendimento(){cy.get(el.inputSeletorEmpreendimento).click()}
    // dropdownGLA(texto){cy.get('.select2-results').find('li').contains(texto).click({force:true})}
    // '4 - Empreendimento XPTO 5 '
    clicarBotaoPesquisar(){cy.get(el.btnPesquisar).click();cy.wait(6000)}
    clicarLimparPesquisa(){cy.get(el.btnLimparPesquisa).click({force:true})}
    gerarRelatorioPDF(){cy.get(el.btnGerarRelatorioPDF).click({force:true});cy.wait(10000)}
    clicarPesquisarPendencias(){cy.get(el.btnPesquisarPendencias).click()}
    clicarPrimeiro(){cy.get(el.btnPrimeiro1).click()}
    clicarTodasPendencias(){cy.get(el.btnTodasPendencias).click()}
    clicarModal(){cy.get(el.btnModal).click();cy.wait(3000)}
    clicarBtnSucess(){cy.get(el.btnSucess).click()}
    clicarLista(){cy.get(el.chkLista).click()}
    clicarModalVinculoPendencia(){cy.get(el.btnModalVinculoPendencia).click()}
    validacoesBotoesCadastrarEditar(){
        cy.get(el.btnPesquisarPendencias).should('contain','Pesquisar')
        cy.get(el.btnSucess).should('contain','Adicionar Lista de Pendências')
    }
    adicionarListaPendencias(){cy.get('.panel-body > .panel-footer > .btn-toolbar > .btn-success').should('be.visible').click()}
    adicionarLP(){cy.get('[id*="lista_chk_cd_"]').should('be.visible').eq(0).click({ multiple: true })}
    botaoAdicionar(){cy.get('#modal-vinculo-pendencia > .modal-dialog > .modal-content > .modal-footer > #botao-editar').should('be.visible').click()}
    LPDesabilitado(){cy.get('[id*="lista_chk_cd_"]').should('be.disabled')}
    clicarFechar(){cy.get('#modal-vinculo-pendencia > .modal-dialog > .modal-content > .modal-footer > .btn-form').click()}
    expandirLP(){cy.get('.content > :nth-child(3) > .box-header > .box-tools > .btn > .fa').click()}
    clicarExcluirListaPendencias(){cy.get('#pendenciaTodas3282 > .panel-footer > .btn-toolbar > .btn-danger').click()}
    clicarSalvar(){cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()}
    clicarVincularExigencia(){cy.get(':nth-child(1) > :nth-child(3) > a > .fa').click()}
    consultarExigencia() {cy.get(':nth-child(2) > #botao-editar').click()}
    selecionarPrimeiraExigencia(){cy.get(':nth-child(1) > .sorting_1 > .exigencia').click()}
    clicarConfirmarVinculoExigencia(){cy.get(':nth-child(4) > #botao-editar').click()}
    selecionarDemanda(){cy.get(':nth-child(2) > .form-group > .select2-container > .selection > .select2-selection').click()}
    salvarExclusao(){cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()}
    validarBotoesRodapeListaPendencias(){
        cy.get('[id^="pendenciaTodas"] > .panel-footer > .btn-toolbar > .btn-primary').should('contain','Adicionar Linha')
        cy.get('[id^="pendenciaTodas"] > .panel-footer > .btn-toolbar > .btn-success').should('contain','Vincular Exigências')
        cy.get('[id^="pendenciaTodas"] > .panel-footer > .btn-toolbar > .btn-danger').should('contain','Excluir Lista de Pendências')
    }
    clicarOrdenar(){cy.get('thead > tr > .noVis').click()}
    excluir8Linhas() {
        for (let i = 0; i < 8; i++) {
            cy.get(':nth-child(1) > .text-center > a > .fas').click()
            cy.wait(1000)
            cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
            cy.wait(1000)

            // Verifica se o botão de confirmação existe antes de clicar
            cy.get('body').then(($body) => {
                if ($body.find('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').length) {
                    cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click()
                }
            })
        }
    }
    clicarCamposTabelasResultados(){cy.get('.content > :nth-child(2) > .box-header').click()}
    validarCamposMarcadosPadrao() {
        cy.get('.content > :nth-child(2) > .box-body > .panel > .panel-body')
            .within(() => {
                cy.get('input[type="checkbox"]').each(($checkbox) => {
                    cy.wrap($checkbox).should('be.checked')
                })
            })
    }
    categoria(categoria){cy.get(':nth-child(1) > .noVis > select')
        .select(categoria)
        cy.wait(2000)
    }
    statusPendencia(status){
        cy.get(':nth-child(1) > :nth-child(6) > select')
            .select(status)
    }
    exigeContratacao(simNao){
        cy.get(':nth-child(1) > :nth-child(8) > select')
            .select(simNao)
    }
    confirmarDescricaoResumo(){cy.get('#modal-alteracao-resumo > .modal-dialog > .modal-content > .modal-footer > #botao-editar').click()}
    validarTextoResumo(valor) {cy.get('tbody > :nth-child(1) > :nth-child(2) > div').should('contain',valor)}
    validarExigenciaSemEditar(){
        cy.get('tbody > :nth-child(1) > :nth-child(3)')
            .find('fa')
            .should('not.exist')
    }
    linkExigenciaVinculada(){cy.get('tbody > :nth-child(1) > :nth-child(3) > a').click()}
}

export default new pendencias()
