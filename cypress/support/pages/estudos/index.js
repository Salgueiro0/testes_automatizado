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
    validarTituloPendencia(){
        cy.get('h1').should('have.text', "Pendência")
    }
    irAbaEstudos(){
        cy.get(':nth-child(4) > a > span').click()
    }

    //validação dos campos na tela de estudos
    validarLabelEstudo(){
        cy.get('h1').should('have.text', "Estudo / Serviço")
    }
    validarLabelRA(){
        cy.get('#form_filtro_geral > :nth-child(1) > :nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
    }
    validarLabelEmpreendimento(){
        cy.get('#form_filtro_geral > :nth-child(1) > :nth-child(2) > .form-group > .control-label').should('have.text', "Empreendimento")
    }
    validarLabelDemanda(){
        cy.get('#form_filtro_geral > :nth-child(1) > :nth-child(3) > .form-group > .control-label').should('have.text', "Demanda")
    }
    validarLabelListaPendencia(){
        cy.get('#form_filtro_geral > :nth-child(2) > :nth-child(1) > .form-group > label').should('have.text', "Lista de Pendências")
    }
    validarLabelTipo(){
        cy.get('#form_filtro_geral > :nth-child(2) > :nth-child(2) > .form-group > label').should('have.text', "Tipo")
    }
    validarLabelNatureza(){
        cy.get('#form_filtro_geral > :nth-child(2) > :nth-child(3) > .form-group > label').should('have.text', "Natureza")
    }
    validarLabelObjeto(){
        cy.get('#form_filtro_geral > :nth-child(2) > :nth-child(4) > .form-group > label').should('have.text', "Objeto")
    }
    validarLabelDescricaoObjeto(){
        cy.get('#form_filtro_geral > :nth-child(3) > .col-md-12 > .form-group > .control-label').should('have.text', "Descrição do Objeto do Estudo/Serviço")
    }
    validarLabelStatus(){
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > label').should('have.text', "Status")
    }
    validarLabelPrevisaoConclusao(){
        cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > label').should('have.text', "Previsão de Conclusão do Estudo")
    }
    validarLabelValorEstimado(){
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > label').should('have.text', "Valor Estimado - (R$)")
    }
    validarLabelDataElaboracao(){
        cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1) > label').should('have.text', "Data Elaboração")
    }
    validarLabelTitular(){
        cy.get(':nth-child(6) > :nth-child(1) > .form-group > label').should('have.text', "Titular ")
    }
    validarLabelSuplente(){
        cy.get(':nth-child(6) > :nth-child(2) > .form-group > label').should('have.text', "Suplente ")
    }
    validarLabelDadosContrato(){
        cy.get(':nth-child(2) > .box-header > .box-title').should('have.text', "Dados do Contrato")
    }
    validarLabelNContrato(){
        cy.get('#form_filtro_contrato > :nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text', "Número do Contrato")
    }
    validarLabelAnoContrato(){
        cy.get('#form_filtro_contrato > :nth-child(1) > :nth-child(2) > .form-group > .control-label').should('have.text', "Ano do Contrato")
    }
    validarLabelContratada(){
        cy.get('#form_filtro_contrato > :nth-child(1) > :nth-child(3) > .form-group > .control-label').should('have.text', "Contratada")
    }
    validarLabelValorContratoInicial(){
        cy.get('#form_filtro_contrato > :nth-child(2) > :nth-child(1) > :nth-child(1) > label').should('have.text', "Valor do Contrato (inicial) - (R$)")
    }
    validarLabelValorContratoFinal(){
        cy.get('#form_filtro_contrato > :nth-child(2) > :nth-child(2) > :nth-child(1) > label').should('have.text', "Valor do Contrato (final) - (R$)")
    }
    validarLabelInicioVigenciaContrato(){
        cy.get('#form_filtro_contrato > :nth-child(2) > :nth-child(3) > :nth-child(1) > label').should('have.text', "Início da Vigência do Contrato")
    }
    validarLabelFimVigenciaContrato(){
        cy.get('#form_filtro_contrato > :nth-child(2) > :nth-child(4) > :nth-child(1) > label').should('have.text', "Fim da Vigência do Contrato")
    }
    validarLabelDescricaoObjetoContrato(){
        cy.get('#form_filtro_contrato > :nth-child(3) > .col-md-12 > .form-group > .control-label').should('have.text', "Descrição do Objeto do Contrato")
    }
    validarLabelDadosOrdem(){
        cy.get(':nth-child(3) > .box-header > .box-title').should('have.text', "Dados da Ordem de Serviço da Empresa")
    }
    validarLabelNumeroOS(){
        cy.get(':nth-child(3) > .box-body > .panel > #panel-body > #form_filtro_ordem_servico > .row > :nth-child(1) > .form-group > .control-label').should('have.text', "Número da OS")
    }
    validarLabelAnoOS(){
        cy.get(':nth-child(3) > .box-body > .panel > #panel-body > #form_filtro_ordem_servico > .row > :nth-child(2) > .form-group > .control-label').should('have.text', "Ano da OS")
    }
    validarLabelUnidadeResponsavelOS(){
        cy.get(':nth-child(3) > .box-body > .panel > #panel-body > #form_filtro_ordem_servico > .row > .col-md-6 > .form-group > .control-label').should('have.text', "Unidade Responsável pela OS")
    }
    validarAriaLabelEmpreendimento(){
        cy.get('.sorting_asc').should('have.text', "Empreendimento")
    }
    validarAriaLabelReferencia(){
        cy.get('[aria-label="Referência: Ordenar colunas de forma ascendente"]').should('have.text', "Referência")
    }
    validarAriaLabelObjeto(){
        cy.get('[aria-label="Objeto: Ordenar colunas de forma ascendente"]').should('have.text', "Objeto")
    }
    validarAriaLabelStatus(){
        cy.get('[aria-label="Status: Ordenar colunas de forma ascendente"]').should('have.text', "Status")
    }
    validarAriaLabelContratoOS(){
        cy.get('[aria-label="Contrato | OS: Ordenar colunas de forma ascendente"]').should('have.text', "Contrato | OS")
    }
    validarAriaLabelAcao(){
        cy.get('[aria-label="Ação: Ordenar colunas de forma ascendente"]').should('have.text', "Ação")
    }
    selecionarRA(){
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA').click({force: true})
    }
    limparFormularioPesquisa(){
        cy.wait(3000)
        cy.get('[onclick="limparFormularioPesquisa()"]').click()
    }
    botaoNovoCadastro(){
        cy.get('.btn-success').click()
    }
    validarTextoNovoCadastro(){
        cy.get('.box-title').should('have.text', "Novo Cadastro")
    }
    validarTextoReferencias(){
        cy.get("[onclick=\"toggleFormAccordion('rf')\"] > b").should('have.text', "Referências")
    }
    validarTextoIncluirRequerimento(){
        cy.get('#form_estudo_servico > :nth-child(2) > :nth-child(7) > :nth-child(1)').should('have.text', "Incluir Requerimento")
    }
    validarLabelCadastroRA(){
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
    }
    validarLabelCadastroEmpreendimento(){
        cy.get('#form_requerimento > :nth-child(3) > .form-group > .control-label').should('have.text', "Empreendimento")
    }
    validarLabelCadastroTipoRequerimento(){
        cy.get('#form_requerimento > :nth-child(4) > .form-group > .control-label').should('have.text', "Tipo Requerimento")
    }
    validarLabelCadastroRequerimentos(){
        cy.get('#form_requerimento > :nth-child(5) > .form-group > label').should('have.text', "Requerimentos *")
    }
    validarLabelCadastroRequerimentosReferenciados(){
        cy.get('#form_requerimento > :nth-child(7) > :nth-child(1)').should('have.text', "Requerimentos Referenciados")
    }
    validarLabelCadastroRequerimento(){
        cy.get('#tabela-estudo-requerimento > thead > tr > .sorting_desc').should('have.text', "Requerimento")
    }
    validarLabelCadastroIncluirExigencia(){
        cy.get(':nth-child(7) > :nth-child(4)').should('have.text', "Incluir Exigência")
    }
    validarFormCadastroRA(){
        cy.get('#form_exigencia > :nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
    }
    validarFormCadastroEmpreendimento(){
        cy.get('#form_exigencia > :nth-child(2) > .form-group > .control-label').should('have.text', "Empreendimento")
    }
    validarFormCadastroDemanda(){
        cy.get('#form_exigencia > :nth-child(3) > .form-group > .control-label').should('have.text', "Demanda")
    }
    validarFormCadastroExigencias(){
        cy.get('#form_exigencia > :nth-child(4) > .form-group > label').should('have.text', "Exigências *")
    }
    validarFormCadastroExigenciasRef(){
        cy.get('#form_exigencia > :nth-child(6) > :nth-child(1)').should('have.text', "Exigências Referenciadas")
    }
    validarTabelaCadastroN(){
        cy.get('#tabela-estudo-exigencia > thead > tr > .sorting_desc').should('have.text', "N°")
    }
    validarTabelaCadastroDescricao(){
        cy.get('#tabela-estudo-exigencia > thead > tr > .sorting').should('have.text', "Descrição")
    }
    validarTabelaCadastroAcao(){
        cy.get('#tabela-estudo-exigencia > thead > tr > .text-center').should('have.text', "Ação")
    }
    validarLabelCadastroDadosGerais(){
        cy.get("[onclick=\"toggleFormAccordion('gr')\"] > b").should('have.text', "Dados Gerais")
    }
    validarFormCadastroTipo(){
        cy.get('#form_dados_gerais > :nth-child(1) > .form-group > label').should('have.text', "Tipo*")
    }
    validarFormCadastroNatureza(){
        cy.get('#form_dados_gerais > :nth-child(2) > .form-group > .control-label').should('have.text', "Natureza")
    }
    validarLabelCadastroObjeto(){
        cy.get(':nth-child(3) > .control-label').should('have.text', "Objeto")
    }
    validarFormCadastroDescricao(){
        cy.get('#form_dados_gerais > :nth-child(4) > .form-group > .control-label').should('have.text', "Descrição do Objeto do Estudo/Serviço")
    }
    validarFormCadastroAreaPoligonal(){
        cy.get('#form_dados_gerais > :nth-child(5) > .form-group > .control-label').should('have.text', "Área da Poligonal de Estudo")
    }
    validarFormCadastroStatus(){
        cy.get('#form_dados_gerais > :nth-child(6) > .form-group > .control-label').should('have.text', "Status")
    }
    validarFormCadastroDescricaoStatus(){
        cy.get('#form_dados_gerais > :nth-child(7) > .form-group > .control-label').should('have.text', "Descrição do Status")
    }
    validarFormCadastroOrgaoExterno(){
        cy.get('#form_dados_gerais > :nth-child(8) > .form-group > .control-label').should('have.text', "Órgão Externo avaliador")
    }
    validarFormCadastroValorEstimado(){
        cy.get('#form_dados_gerais > :nth-child(9) > .form-group > .control-label').should('have.text', "Valor Estimado")
    }
    validarFormCadastroProcessoSEI(){
        cy.get('#form_dados_gerais > :nth-child(10) > .form-group > label').should('have.text', "Processo SEI de Acompanhamento / Contratação")
    }

    validarFormCadastroTitular(){
        cy.get(':nth-child(11) > .form-group > .control-label').should('have.text', "Titular")
    }
    validarFormCadastroSuplente(){
        cy.get(':nth-child(12) > .form-group > .control-label').should('have.text', "Suplente")
    }
    validarFormCadastroCaminhoDepart(){
        cy.get(':nth-child(13) > .form-group > .control-label').should('have.text', "Caminho no Depart")
    }
    validarFormCadastroDataElaboracao(){
        cy.get(':nth-child(14) > .control-label').should('have.text', "Data de Elaboração")
    }
    validarFormCadastroPrevisaoConclusaoEstudo(){
        cy.get(':nth-child(15) > .control-label').should('have.text', "Previsão de Conclusão do Estudo")
    }
    validarFormCadastroDadosContrato(){
        cy.get("[onclick=\"toggleFormAccordion('ct')\"] > b").should('have.text', "Dados do Contrato")
    }
    validarFormCadastro(){
        cy.get('#ct_plus').click()
    }
    validarFormCadastroNumeroContrato(){
        cy.get('#form_contrato_gec > :nth-child(2) > .form-group > .control-label').should('have.text', "Numero do Contrato")
    }
    validarFormCadastroAnoContrato(){
        cy.get('#form_contrato_gec > :nth-child(3) > .form-group > .control-label').should('have.text', "Ano do Contrato")
    }
    validarFormCadastroContratada(){
        cy.get('#form_contrato_gec > :nth-child(5) > .form-group > .control-label').should('have.text', "Contratada")
    }
    validarFormCadastroValorContratoInicial(){
        cy.get('#form_contrato_gec > :nth-child(6) > .form-group > .control-label').should('have.text', "Valor do Contrato (inicial)")
    }
    validarFormCadastroValorContrato(){
        cy.get('#form_contrato_gec > :nth-child(7) > .form-group > .control-label').should('have.text', "Valor do Contrato (reajustado)")
    }
    validarFormCadastroInicioVigenciaContrato(){
        cy.get('#form_contrato_gec > :nth-child(8) > .form-group > .control-label').should('have.text', "Início da Vigência do Contrato")
    }
    validarFormCadastroFimVigenciaContrato(){
        cy.get('#form_contrato_gec > :nth-child(9) > .form-group > .control-label').should('have.text', "Fim da Vigência do Contrato")
    }
    validarFormCadastroDescricaObjetoContrato(){
        cy.get(':nth-child(10) > .form-group > .control-label').should('have.text', "Descrição do Objeto do Contrato")
    }
    validarFormCadastroDadosOrdemServico(){
        cy.get("[onclick=\"toggleFormAccordion('os')\"] > b").should('have.text', "Dados da Ordem de Serviço da Empresa")
    }

    clicarBotaoMais(){
        cy.get('#os_plus').click()
    }
    selecionarRegiaoAdmin(){
        cy.get('#select2-cd_regiao_admin_req-container').click()
    }
    seletorDropdown(select){
        cy.get('.select2-results').find('li').contains(select).click({force: true})
    }
    selecionarEmpreendimento(){
        cy.get('#select2-cd_empreendimento_req-container > .select2-selection__clear').click()
        cy.wait(3000)
    }
    selecionarTpRequerimento(){
        cy.get('#select2-tp_requerimento-container').click()
    }
    selecionarCdRequerimento(){
        cy.get('#select2-cd_requerimento-container > .select2-selection__clear').click()
    }
    clicarBotaoAdicionarRequerimento(){
        cy.get('#btnAdicionar_requerimento').click()
    }
    selecionarRegiaoAdminExi(){
        cy.get('#select2-cd_regiao_admin_exi-container').click()
    }
    selecionarEmpreendimentoExi(){
        cy.get('#select2-cd_empreendimento_exi-container > .select2-selection__clear').click()
    }
    selecionarDemandaContainer(){
        cy.get('#select2-cd_demanda-container > .select2-selection__clear').click()
    }
    selecionarExigenciaContainer(){
        cy.get('#select2-cd_exigencia-container > .select2-selection__clear').click()
    }
    clicarBotaoAdicionarExigencia(){
        cy.get('#btnAdicionar_exigencia').click()
    }
    selecionarTpEstudoContainer(){
        cy.get('#select2-tp_estudo-container').click()
    }
    selecionarTpNaturezaContainer(){
        cy.get('#select2-tp_natureza-container').click()
    }
    selecionarTpObjetoContainer(){
        cy.get('#select2-tp_objeto-container').click()
    }
    selecionarTpStatusContainer(){
        cy.get('#select2-tp_status-container').click()
    }
    selecionarCdPessoaTitularContainer(){
        cy.get('#select2-cd_pessoa_titular-container').click()
    }
    selecionarCdPessoaSuplenteContainer(){
        cy.get('#select2-cd_pessoa_suplente-container').click()
    }
    clicarBotaoSalvar(){
        cy.get('#btnSalvar').click()
    }
    clicarBotaoContinuar(){
        cy.get('.modal-footer > .btn-primary').click()
    }
    clicarBotaoOk(){
        cy.get('.modal-footer > .btn-danger').click()
    }
    clicarBotaoVoltar(){
        cy.get('[onclick="window.history.back()"]').click()
        cy.get('[onclick="window.history.back()"]').click()
    }
    selecionarPesTitular(){
        cy.get(':nth-child(6) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
    }
    selecionarPesSuplente(){
        cy.get(':nth-child(6) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
    }
    botaoPesquisar(){
        cy.get('#pesquisar').click()
    }
    clicarPrimeiroBotaoEditar(){
        cy.get('a[title="Editar"]').first().click()
    }
    validarTituloEditar(){
        cy.get('.box-title').should('have.text', "Editar")
        cy.wait(4000)
    }
    seletorPessoaTitular(){
        cy.get('#select2-cd_pessoa_titular-container > .select2-selection__clear').click()
        cy.wait(4000)
    }
    seletorPessoaSuplente(){
        cy.get('#select2-cd_pessoa_suplente-container > .select2-selection__clear').click()
    }
    clicarPrimeiroBotaoExcluir(){
        cy.get('a[title="Excluir"]').first().click()
    }
    clicarModalOk(){
        cy.get('.modal-footer > .btn').should('be.visible').and('contain.text', 'OK').click();
    }
}

export default new estudos()