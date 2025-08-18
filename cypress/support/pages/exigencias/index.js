const el = require('./elements').ELEMENTS
class exigencias{
    irParaGLA() {
        cy.visit('/');
    }

    login() {
        cy.get(el.campoUsuario).type('C9020840');
        cy.get(el.campoSenha).type('welcome_1');
        cy.get(el.botaoLogin).click();
    }

    irParaEmpreendimento() {
        cy.get(el.abaLateralEmpreendimento).click()
    }

    irParaDemanda() {
        cy.get(el.abaDemanda).click()
    }

    digitarNumeroExigencia() {
        cy.get(el.coExigencia).type('34243')
    }

    clicarBotaoLimpar() {
        cy.get(el.botaoLimparExigencia).click()
    }

    selecionarTema() {
        cy.get(el.seletorTema).click()
        cy.get(el.dropdownGla).find('li').contains('Outros').click({force: true})
    }

    digitarPrazoDias() {
        cy.get(el.campoPrazoDias).type('10')
    }

    digitarDescricaoExigencia() {
        function typeInCkeditor(selectorIframe, text) {
            cy.get(selectorIframe)
                .its('0.contentDocument.body')
                .should('not.be.empty')
                .then(cy.wrap)
                .clear()
                .type(text);
        }

        typeInCkeditor('#cke_1_contents > .cke_wysiwyg_frame', 'descrição');

        typeInCkeditor('#cke_2_contents > .cke_wysiwyg_frame', 'descrição2');
    }

    selecionarTitular() {
        cy.get(el.seletorPessoaTitular).click()
        cy.get(el.dropdownGla).find('li').contains('Gabriel Tenorio Ramos').click({force: true})
    }

    selecionarSuplente() {
        cy.get(el.seletorSuplente).click()
        cy.get(el.dropdownGla).find('li').contains('PAULO CESAR COSTA').click({force: true})
    }

    selecionarStatus() {
        cy.get(el.seletorStatus).click()
        cy.get(el.dropdownGla).find('li').contains('Cumprida').click({force: true})
    }

    digitarSeiProcAcompanhamento() {
        cy.get(el.orgaoProcessoSei).type('1')
        cy.get(el.numeroProcessoSei).type('111')
        cy.get(el.anoProcessoSei).type('2025')
    }

    adicionarUnidadeInterna() {
        cy.get(el.seletorUnidadeInterna).click()
        cy.get(el.dropdownGla).find('li').contains('ADHAR - ASSESSORIA DA DIRETORIA DE HABITAÇÃO E DE REGULARIZAÇÃO ').click({force: true})
        cy.get(el.adicionarUnidadeInterna).click()

        cy.get(el.botaoSalvar).click()
    }

    clicarAbaDemanda() {
        cy.get(el.botaoDemanda).click()
    }

    clicarConsultarDemanda() {
        cy.get(el.botaoConsultaDemanda).click()
    }

    selecionarRA() {
        cy.get(el.seletorRA).click()
        cy.get(el.dropdownGla).find('li').contains('RA-I - BRASILIA ').click({ force: true })
        cy.wait(2000)
    }

    selecionarEmpreendimento() {
        cy.get(el.seletorEmpreendimento).click()
        cy.get(el.dropdownGla).find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({ force: true })
    }

    clicarBotaoPesquisar() {
        cy.get(el.botaoPesquisar).click()
    }

    digitarFiltroPesquisarDemanda() {
        cy.get(el.filtroPesquisarDemanda).type('12345454')
    }

    clicarPrimeiroBotaoVisualizar() {
        cy.get(el.primeiroBotaoVisualizar).first().click()
    }

    clicarAbaExigencia() {
        cy.get(el.abaExigencia).click()
        cy.wait(3000)
    }

    clicarBotaoNovaExigencia() {
        cy.get(el.botaoNovaExigencia).click()
    }

    selecionarAbaExigencias(){
        cy.get(el.abaLateralExigencia).click()
        cy.get(el.modalAvisoFiltros).click()
        cy.wait(1000)
    }

    selecionarRaPesquisarExigencias(){
        cy.get(el.seletorRegiao).click()
        cy.get(el.dropdownGla).find('li').contains('RA-I - BRASILIA ').click({force: true})
        cy.wait(2000)
    }

    selecionarEmpreendimentoPesquisarExigencias(){
        cy.get(el.seletorEmpreendimentoPesquisarExigencias).click()
        cy.get(el.dropdownGla).find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({force: true})
    }

    botaoPesquisarExigencia(){
        cy.get(el.botaoPesquisarExigencia).click()
    }

    digitarFiltroPesquisar(){
        cy.get(el.campoFiltroPesquisa).type('descrição')
    }

    adicionarDilacoesPrazos(){
        cy.contains('button', "Adicionar").click()
        cy.contains('button', "Sim").click()
    }

    digitarObservacaoSeiPedido(){
        cy.wait(1000)
        cy.get(el.descricaoObservacaoSeiPedido).type('6512154')
    }

    botaoSalvar(){
        cy.contains('button', "Salvar").click()
        cy.wait(3000)
    }

    confirmarExigencia(){
        cy.get(el.botaoConfirmar).click()
        cy.wait(2000)
    }

    clicarBotaoNao(){
        cy.contains('button', "Não").click()
    }

    botaoEditarDilacaoPrazos(){
        cy.get(el.botaoEditarDilacaoPrazos).click()
    }

    botaoExcluir(){
        cy.get(el.botaoExcluir).click()
    }

    botaoModalSim(){
        cy.contains('button', "Sim").click()
    }

    clicarBotaoEditarExigencia(){
        cy.get(el.botaoLinkEditarExigencia).click()
    }

    digitarQuantidadePrazoDias(){
        cy.get(el.campoPrazoDias).type('80')
    }

    salvarBotao(){
        cy.get('#submit').click()
    }

    clicarModalSalvar(){
        cy.get(el.botaoModalSalvar).click()
    }

    clicarBotaoOK(){
        cy.contains('button', "OK").click()
    }

    digitarCoExigencia(){
        cy.get(el.labelCoExigencia).type('34243')
    }

    clicarBotaoExcluirExigencia(){
        cy.get(el.botaoDeleteExigencia).click()
    }

    clicarModalConfirmar(){
        cy.contains('button',"Confirmar").click()
    }

    clicarModalRelatorioPDF(){
        cy.get(el.modalRelatorioPDF).click()
    }

    clicarGerarRelatorioPDF(){
        cy.get(el.gerarRelatorioPDF).click()
    }

    fecharModalPDF(){
        cy.get(el.botaoFecharModalPDF).click()
    }

    //VALIDAR CAMPOS DE TEXTO
    validarLabelEmpreendimento(){
        cy.get(el.labelEmpreendimento).should('contain', "Empreendimento ")
    }

    validarLabelDemanda() {
        cy.get(el.labelDemanda).should('contain', 'Demanda ')
    }
    validarLabelNumero() {
        cy.get(el.labelNumero).should('contain', 'Número')
    }
    validarLabelTema() {
        cy.get(el.labelTema).should('contain', 'Tema')
    }
    validarLabelPossuiPrazoExpresso() {
        cy.get(el.labelPossuiPrazoExpresso).should('contain', 'Possui Prazo Expresso na Exigência')
    }
    validarLabelDias() {
        cy.get(el.labelDias).should('contain', 'Dias')
    }
    validarLabelPrevisaoCumprimento() {
        cy.get(el.labelPrevisaoCumprimento).should('contain', 'Previsão de Cumprimento')
    }
    validarLabelExigeContratacao() {
        cy.get(el.labelExigeContratacao).should('contain', 'Exige Contratação')
    }
    validarLabelDescricaoExigencia() {
        cy.get(el.labelDescricaoExigencia).should('contain', 'Descrição Exigência')
    }
    validarLabelDescricaoProvidencia() {
        cy.get(el.labelDescricaoProvidencia).should('contain', 'Descrição Providência')
    }
    validarLabelTitular() {
        cy.get(el.labelTitular).should('contain', 'Titular ')
    }
    validarLabelSuplente() {
        cy.get(el.labelSuplente).should('contain', 'Suplente ')
    }
    validarLabelStatus() {
        cy.get(el.labelStatus).should('contain', 'Status')
    }
    validarLabelSeiProcAcompanhamento() {
        cy.get(el.labelSeiProcAcompanhamento).should('contain', 'SEI Proc. de Acompanhamento')
    }

    validarLabelUnidadeInterna() {
        cy.get(el.labelUnidadeInterna).should('contain', 'Unidade Interna')
    }
    validarTabelaUnidadeInterna() {
        cy.get(el.tabelaUnidadeInterna).should('contain', 'Unidade Interna')
    }

    validarLabelUnidadeExterna() {
        cy.get(el.labelUnidadeExterna).should('contain', 'Unidade Externa')
    }
    validarTabelaUnidadeExterna() {
        cy.get(el.tabelaUnidadeExterna).should('contain', 'Unidade Externa')
    }

    //validar campos de texto de Dilações de Prazos
    validarLabelSeiRequerimento() {
        cy.get(el.labelSeiRequerimento).should('contain', 'SEI do Requerimento')
    }
    validarLabelSeiDeferimentoIndeferimento() {
        cy.get(el.labelSeiDeferimentoIndeferimento).should('contain', 'SEI do Deferimento/ Indeferimento')
    }
    validarLabelStatusModal() {
        cy.get(el.labelStatusModal).should('contain', 'Status')
    }
    validarLabelDataLimiteDilacaoPrazo() {
        cy.get(el.labelDataLimiteDilacaoPrazo).should('contain', 'Data Limite Após Dilação de Prazo')
    }

    //validando campos de texto de relatório de acompanhamento de exigências
    validarLabelRaEmpreendimentoDemanda() {
        cy.get(el.labelRaEmpreendimentoDemanda).should('contain', 'RA / EMPREENDIMENTO / DEMANDA')
    }
    validarLabelNumeroModal() {
        cy.get(el.labelNumeroModal).should('contain', 'Nº')
    }
    validarLabelUnidadesResponsaveis() {
        cy.get(el.labelUnidadesResponsaveis).should('contain', 'Unidades Responsáveis')
    }
    validarLabelDataLimiteModal() {
        cy.get(el.labelDataLimiteModal).should('contain', 'Data Limite')
    }
    validarLabelInformativa() {
        cy.get(el.labelInformativa).should('contain', 'Informativa')
    }
    validarLabelDispensada() {
        cy.get(el.labelDispensada).should('contain', 'Dispensada')
    }
    validarLabelSeiDilacaoAnalise() {
        cy.get(el.labelSeiDilacaoAnalise).should('contain', 'SEI da Dilação em Analise')
    }
    validarLabelDescricaoProvidenciaModal() {
        cy.get(el.labelDescricaoProvidenciaModal).should('contain', 'Descrição Providência')
    }
    validarLabelDescricaoExigenciaModal() {
        cy.get(el.labelDescricaoExigenciaModal).should('contain', 'Descrição Exigência')
    }
    validarLabelCumprida() {
        cy.get(el.labelCumprida).should('contain', 'Cumprida')
    }
    validarLabelEmExecucao() {
        cy.get(el.labelEmExecucao).should('contain', 'Em Execução')
    }
    validarLabelTemaModal() {
        cy.get(el.labelTemaModal).should('contain', 'Tema')
    }
    validarLabelEstudosServRelacionados() {
        cy.get(el.labelEstudosServRelacionados).should('contain', 'Estudos/Serv Relacionados')
    }
    validarLabelPendente() {
        cy.get(el.labelPendente).should('contain', 'Pendente')
    }
}
export default new exigencias()

