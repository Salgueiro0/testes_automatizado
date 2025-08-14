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
        cy.get(':nth-child(1) > .form-group > .text-block > a').click()
    }

    irParaDemanda() {
        cy.get(':nth-child(2) > .form-group > .text-block > a').click()
    }

    digitarNumeroExigencia() {
        cy.get('#co_exigencia').type('34243')
    }

    clicarBotaoLimpar() {
        cy.get('[onclick="limpaExigencia()"]').click()
    }

    selecionarTema() {
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results').find('li').contains('Outros').click({force: true})
    }

    digitarPrazoDias() {
        cy.get('#qt_prazo_dias').type('10')
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

    digitarDescricaoProvidencia() {

    }

    selecionarTitular() {
        cy.get('#select2-cd_pessoa_titular-container').click()
        cy.get('.select2-results').find('li').contains('Gabriel Tenorio Ramos').click({force: true})
    }

    selecionarSuplente() {
        cy.get('#select2-cd_pessoa_suplente-container').click()
        cy.get('.select2-results').find('li').contains('PAULO CESAR COSTA').click({force: true})
    }

    selecionarStatus() {
        cy.get(':nth-child(9) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results').find('li').contains('Cumprida').click({force: true})
    }

    digitarSeiProcAcompanhamento() {
        cy.get('#cd_orgao_processo_sei').type('1')
        cy.get('#nr_processo_sei').type('111')
        cy.get('#aa_processo_sei').type('2025')
    }

    adicionarUnidadeInterna() {
        cy.get(':nth-child(10) > :nth-child(1) > .panel-border > .panel-body > .row > .col-md-10 > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results').find('li').contains('ADHAR - ASSESSORIA DA DIRETORIA DE HABITAÇÃO E DE REGULARIZAÇÃO ').click({force: true})
        cy.get('#add_unidade_interna').click()

        cy.get('#submit').click()
    }

    clicarAbaDemanda() {
        cy.get(':nth-child(3) > [href="#"] > :nth-child(2)').click()
    }

    clicarConsultarDemanda() {
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }

    selecionarRA() {
        cy.get('#form_geral > :nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })
        cy.wait(2000)
    }

    selecionarEmpreendimento() {
        cy.get('#form_geral > :nth-child(1) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({ force: true })
    }

    clicarBotaoPesquisar() {
        cy.get('#pesquisar').click()
    }

    digitarFiltroPesquisarDemanda() {
        cy.get('#table-demanda_filter > label > .form-control').type('12345454')
    }

    clicarPrimeiroBotaoVisualizar() {
        cy.get('a[title="Visualizar"]').first().click()
    }

    clicarAbaExigencia() {
        cy.get('.exigencias-aba').click()

        cy.wait(3000)
    }

    clicarBotaoNovaExigencia() {
        cy.get('#exigencia > .box > .box-body > .panel > .panel-body > .panel-footer > .btn-toolbar > a.btn').click()
    }

    selecionarAbaExigencias(){
        cy.get(':nth-child(6) > a > span').click()
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        cy.wait(1000)
    }

    selecionarRaPesquisarExigencias(){
        cy.get('#select2-cd_regiao-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        cy.wait(2000)
    }

    selecionarEmpreendimentoPesquisarExigencias(){
        cy.get('#select2-cd_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({force: true})
    }

    botaoPesquisarExigencia(){
        cy.get('#pesquisarExigencia').click()
    }

    digitarFiltroPesquisar(){
        cy.get('#table-exigencia_filter > label > .form-control').type('descrição')
    }

    adicionarDilacoesPrazos(){
        cy.contains('button', "Adicionar").click()
        cy.contains('button', "Sim").click()
    }

    digitarObservacaoSeiPedido(){
        cy.wait(1000)
        cy.get('#ds_observacao_sei_pedido').type('6512154')
    }

    botaoSalvar(){
        cy.contains('button', "Salvar").click()
        cy.wait(3000)
    }

}
export default new exigencias()