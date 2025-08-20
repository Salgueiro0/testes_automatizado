const el = require('./elements').ELEMENTS
class demandas_consultar {

    irParaGLA() {
        cy.visit('/');
    }
    login() {
        cy.get(el.campoUsuario).type('C9020840');
        cy.get(el.campoSenha).type('welcome_1');
        cy.get(el.botaoLogin).click();
    }
    validarTextoPendencia(){
        cy.get('h1').should('have.text', "Pendência")
    }
    irAbaDemanda(){
        cy.get(':nth-child(3) > [href="#"]').click()
    }
    irAbaDemandaConsultar(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }






























    validarTituloDemanda(){
        cy.get('h1').should('have.text', "Demanda")
    }

    validarTituloDados(){
        cy.get(':nth-child(1) > .box-header > .box-title').should('have.text', "Dados Gerais")
    }

    validarFormRA(){
        cy.get('#form_geral > :nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
    }

    validarFormEmpreendimento(){
        cy.get('#form_geral > :nth-child(1) > :nth-child(2) > .form-group > .control-label').should('have.text', "Empreendimento")
    }

    validarFormPossuiExigencia(){
        cy.get('#form_geral > :nth-child(1) > :nth-child(3) > .form-group > label').should('have.text', "Possui Exigência a cumprir e próxima de expirar/expirada? ")
    }

    validarFormTipo(){
        cy.get('#form_geral > :nth-child(2) > :nth-child(1) > .form-group > .control-label').should('have.text', "Tipo")
    }

    validarFormNumero(){
        cy.get('#form_geral > :nth-child(2) > :nth-child(2) > .form-group > .control-label').should('have.text', "Número")
    }

    validarFormAno(){
        cy.get('#form_geral > :nth-child(2) > :nth-child(3) > .form-group > .control-label').should('have.text', "Ano")
    }

    validarLabelPossuiReq(){
        cy.get(':nth-child(2) > :nth-child(4) > .form-group > label').should('have.text', "Possui Requerimento em Análise? ")
    }

    validarLabelOrgaoDemanda(){
        cy.get(':nth-child(3) > .col-md-12 > .form-group > .control-label').should('have.text', "Órgão Demanda")
    }

    validarLabelDescricao(){
        cy.get(':nth-child(4) > .col-md-8 > .form-group > .control-label').should('have.text', "Descrição")
    }

    validarLabelPeriodoData(){
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .control-label').should('have.text', "Período de Data de Publicação ")
    }

    validarLabelPeriodoVig(){
        cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1) > .control-label').should('have.text', "Período de Vigência (em dias)")
    }

    validarLabelStatus(){
        cy.get(':nth-child(5) > :nth-child(3) > .form-group > .control-label').should('have.text', "Status")
    }

    validarLabelAlerta(){
        cy.get('#form_geral > :nth-child(6) > :nth-child(1) > .form-group > .control-label').should('have.text', "Alerta")
    }

    validarLabelPeriodoDias(){
        cy.get(':nth-child(6) > :nth-child(3) > .form-group > .control-label').should('have.text', "Período de Dias Restantes para vencimento")
    }

    validarLabelTitular(){
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > label').should('have.text', "Titular ")
    }

    validarLabelSuplente(){
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > label').should('have.text', "Suplente ")
    }

    validarLabelEmpreenResp(){
        cy.get(':nth-child(7) > :nth-child(3) > .form-group > label').should('have.text', "Empreendedor Responsável ")
    }

    validarLabelPeriodoRestante(){
        cy.get(':nth-child(6) > :nth-child(4) > label').should('have.text', "Período Dias Restantes ")
    }
    validarFormAmbValTotal(){
        cy.get('#form_ambiental > :nth-child(1) > :nth-child(1) > :nth-child(1) > label').should('have.text', "Valor Total Compensação Ambiental (R$)")
    }

    validarFormAmbVR(){
        cy.get('#form_ambiental > :nth-child(1) > :nth-child(2) > :nth-child(1) > label').should('have.text', "Valor de Referência - VR (R$)")
    }

    validarFormAmbGrauImpacto(){
        cy.get('#form_ambiental > :nth-child(1) > :nth-child(3) > :nth-child(1) > label').should('have.text', "Grau de Impacto (GI) (%)")
    }

    validarFormAmbPrazoLimite(){
        cy.get('#form_ambiental > :nth-child(1) > :nth-child(4) > .form-group > label').should('have.text', "Possui Prazo Limite para Cumprimento da CA? ")
    }

    validarFormAmbArquivada(){
        cy.get('#form_ambiental > :nth-child(2) > .col-md-2 > .form-group > label').should('have.text', "Arquivada ")
    }

    validarFormAmbDescricao(){
        cy.get(':nth-child(2) > .col-md-10 > .form-group > .control-label').should('have.text', "Descrição Compensação Ambiental")
    }

    validarFormAmbStatusRecurso(){
        cy.get('#form_ambiental > :nth-child(3) > :nth-child(1) > .form-group > .control-label').should('have.text', "Status do Recurso Administrativo")
    }

    validarFormAmbDataLimite(){
        cy.get('#form_ambiental > :nth-child(3) > :nth-child(2) > :nth-child(1) > label').should('have.text', "Data Limite para Cumprimento da CA")
    }

    validarFormAmbDiasRestantes(){
        cy.get('#form_ambiental > :nth-child(3) > :nth-child(3) > :nth-child(1) > label').should('have.text', "Dias Restantes para Cumprimento da CA")
    }

    validarFormAmbSaldoDevedor(){
        cy.get(':nth-child(4) > .col-md-4 > :nth-child(1) > .control-label').should('have.text', "Saldo devedor da CA")
    }
    validarFormFlorestLegRef(){
        cy.get('#form_florestal > :nth-child(1) > :nth-child(1) > .form-group > .control-label')
            .should('have.text', "Legislação de Referência")
    }

    validarFormFlorestTipoVeg(){
        cy.get('#form_florestal > :nth-child(1) > :nth-child(2) > .form-group > .control-label')
            .should('have.text', "Tipo de Vegetação")
    }

    validarFormFlorestModalPag(){
        cy.get('#form_florestal > :nth-child(1) > :nth-child(3) > .form-group > .control-label')
            .should('have.text', "Modalidade de Pagamento")
    }

    validarFormFlorestQtdMudasEst(){
        cy.get('#form_florestal > :nth-child(2) > :nth-child(1) > :nth-child(1) > label')
            .should('have.text', "Quantidade de Mudas Estimadas")
    }

    validarFormFlorestQtdMudasDef(){
        cy.get('#form_florestal > :nth-child(2) > :nth-child(2) > :nth-child(1) > label')
            .should('have.text', "Quantidade de Mudas Definitivas")
    }

    validarFormFlorestValorTotal(){
        cy.get('#form_florestal > :nth-child(2) > :nth-child(3) > :nth-child(1) > label')
            .should('have.text', "Valor Total da CF (R$)")
    }

    validarFormFlorestAreaTotal(){
        cy.get('#form_florestal > :nth-child(3) > :nth-child(1) > :nth-child(1) > label')
            .should('have.text', "Área Total (ha)")
    }

    validarFormFlorestDataLimite(){
        cy.get('#form_florestal > :nth-child(3) > :nth-child(2) > :nth-child(1) > label')
            .should('have.text', "Data Limite Cumprimento da CF")
    }

    validarFormFlorestDiasRestantes(){
        cy.get('#form_florestal > :nth-child(3) > :nth-child(3) > :nth-child(1) > .control-label')
            .should('have.text', "Dias Restantes Cumprimento da CF")
    }

    validarFormFlorestArquivada(){
        cy.get(':nth-child(4) > .col-md-2 > .form-group > label')
            .should('have.text', "Arquivada ")
    }

    validarFormFlorestDescricao(){
        cy.get(':nth-child(4) > .col-md-10 > .form-group > .control-label')
            .should('have.text', "Descrição Compensação Florestal")
    }

    validarFormFlorestStatusRecurso(){
        cy.get('#form_florestal > :nth-child(5) > .col-md-4 > .form-group > .control-label')
            .should('have.text', "Status do Recurso Administrativo")
    }

    validarFormFlorestSaldoDevedor(){
        cy.get(':nth-child(6) > .col-md-4 > :nth-child(1) > .control-label')
            .should('have.text', "Saldo devedor da CF")
    }
    validarFormAIDataReceb(){
        cy.get('#form_auto_infracao > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .control-label')
            .should('have.text', "Data de Recebimento do AI ")
    }

    validarFormAITipoSancao(){
        cy.get('#form_auto_infracao > :nth-child(1) > :nth-child(2) > .form-group > .control-label')
            .should('have.text', "Tipo de Sanção")
    }

    validarFormAIValorMulta(){
        cy.get('#form_auto_infracao > :nth-child(1) > :nth-child(3) > :nth-child(1) > label')
            .should('have.text', "Valor da Multa (R$)")
    }

    validarFormAITipoAtividade(){
        cy.get(':nth-child(1) > :nth-child(4) > .form-group > .control-label')
            .should('have.text', "Tipo de Atividade")
    }

    validarFormAIOrgaoDescricao(){
        cy.get('.col-md-12 > .form-group > .control-label')
            .should('have.text', "Órgão DemandaDescrição do AI (motivo)")
    }

    validarFormAIStatus(){
        cy.get('#form_auto_infracao > :nth-child(3) > :nth-child(1) > .form-group > .control-label')
            .should('have.text', "Status do AI")
    }

    validarFormAIInstancia(){
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .control-label')
            .should('have.text', "Instância Recursal")
    }

    validarFormAIDescricaoStatus(){
        cy.get('.col-md-6 > .form-group > .control-label')
            .should('have.text', "Descrição do Status do AI")
    }

    validarFormAITituloPrazos(){
        cy.get('.box-title > b')
            .should('have.text', "Controle dos Prazos de Defesa e dos Recursos Administrativos")
    }

    validarFormAIPeriodosInstancia(){
        cy.get('#form_auto_infracao > :nth-child(5) > .col-md-4 > .form-group > .control-label')
            .should('have.text', "Períodos da Instância")
    }

    validarFormAIDataEnvio(){
        cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .control-label')
            .should('have.text', "Data Envio do Recurso da Instância ")
    }

    validarFormAIDataCiencia(){
        cy.get(':nth-child(6) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .control-label')
            .should('have.text', "Data de Ciência Decisão da Instância")
    }

    validarFormAIValorAtual(){
        cy.get('#form_auto_infracao > :nth-child(6) > :nth-child(3) > :nth-child(1) > label')
            .should('have.text', "Valor da Multa Atualizada da Instância (R$)")
    }

    validarFormAIDataLimiteEnvio(){
        cy.get(':nth-child(7) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .control-label')
            .should('have.text', "Data Limite de Envio do Recurso da Instância")
    }

    validarFormAIDataLimitePagamento(){
        cy.get(':nth-child(7) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .control-label')
            .should('have.text', "Data Limite para Pagamento da Multa")
    }
    validarLabelDadosCA(){
        cy.contains('label', 'Dados da CA').invoke('text').then((text) => { expect(text.trim()).to.eq('Dados da CA'); });
    }

    validarLabelDadosCF(){
        cy.contains('label', 'Dados da CF').invoke('text').then((text) => { expect(text.trim()).to.eq('Dados da CF'); });
    }

    validarLabelDadosAI(){
        cy.contains('label', 'Dados do AI').invoke('text').then((text) => { expect(text.trim()).to.eq('Dados do AI'); });
    }

    validarLabelValorCA(){
        cy.contains('label', 'Valor da CA').invoke('text').then((text) => { expect(text.trim()).to.eq('Valor da CA'); });
    }

    validarLabelLegRef(){
        cy.contains('label', 'Legislação de Referência').invoke('text').then((text) => { expect(text.trim()).to.eq('Legislação de Referência'); });
    }

    validarLabelDataRecebAI(){
        cy.contains('label', 'Data de Recebimento do AI').invoke('text').then((text) => { expect(text.trim()).to.eq('Data de Recebimento do AI'); });
    }

    validarLabelDiasRestCA(){
        cy.contains('label', 'Dias Restantes da CA').invoke('text').then((text) => { expect(text.trim()).to.eq('Dias Restantes da CA'); });
    }

    validarLabelValorCF(){
        cy.contains('label', 'Valor da CF').invoke('text').then((text) => { expect(text.trim()).to.eq('Valor da CF'); });
    }

    validarLabelTipoSancao(){
        cy.contains('label', 'Tipo de Sanção').invoke('text').then((text) => { expect(text.trim()).to.eq('Tipo de Sanção'); });
    }

    validarLabelSubtotalCA(){
        cy.contains('label', 'Subtotal da CA').invoke('text').then((text) => { expect(text.trim()).to.eq('Subtotal da CA'); });
    }

    validarLabelDiasRestCF(){
        cy.contains('label', 'Dias Restantes da CF').invoke('text').then((text) => { expect(text.trim()).to.eq('Dias Restantes da CF'); });
    }

    validarLabelTipoVegetacao(){
        cy.contains('label', 'Tipo Vegetação').invoke('text').then((text) => { expect(text.trim()).to.eq('Tipo Vegetação'); });
    }

    validarLabelModPagamento(){
        cy.contains('label', 'Mod. Pagamento').invoke('text').then((text) => { expect(text.trim()).to.eq('Mod. Pagamento'); });
    }

    validarLabelSubtotalMultaAI(){
        cy.contains('label', 'Subtotal da Multa AI').invoke('text').then((text) => { expect(text.trim()).to.eq('Subtotal da Multa AI'); });
    }
    validarTabelaRA(){
        cy.get('.sorting_asc').should('have.text', "R.A");
    }

    validarTabelaEmpreendimento(){
        cy.get('[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]').should('have.text', "Empreendimento");
    }

    validarTabelaTipo(){
        cy.get('[aria-label="Tipo: Ordenar colunas de forma ascendente"]').should('have.text', "Tipo");
    }

    validarTabelaNumero(){
        cy.get('[aria-label="Nº: Ordenar colunas de forma ascendente"]').should('have.text', "Nº");
    }

    validarTabelaAno(){
        cy.get('[aria-label="Ano: Ordenar colunas de forma ascendente"]').should('have.text', "Ano");
    }

    validarTabelaOrgao(){
        cy.get('[aria-label="Órgão: Ordenar colunas de forma ascendente"]').should('have.text', "Órgão");
    }

    validarTabelaDiasRest(){
        cy.get('[aria-label="Dias Rest: Ordenar colunas de forma ascendente"]').should('have.text', "Dias Rest");
    }

    validarTabelaAlerta(){
        cy.get('[aria-label="Alerta: Ordenar colunas de forma ascendente"]').should('have.text', "Alerta");
    }

    validarTabelaTitular(){
        cy.get('[aria-label="Titular: Ordenar colunas de forma ascendente"]').should('have.text', "Titular");
    }

    validarTabelaAcao(){
        cy.get('[aria-label="Ação: Ordenar colunas de forma ascendente"]').should('have.text', "Ação");
    }
    validarTituloNovaDemanda(){
        cy.get('.box-title').should('have.text', "Nova Demanda");
    }

    validarAccordionDadosGerais(){
        cy.get('div.accordion.float-style').should('contain', 'Dados Gerais');
    }

    validarAccordionDadosCA(){
        cy.get('div.accordion.float-style').should('contain', 'Dados Específicos da Compensação Ambiental');
    }

    validarAccordionDadosCF(){
        cy.get('div.accordion.float-style').should('contain', 'Dados Específicos da Compensação Florestal');
    }

    validarAccordionDadosAI(){
        cy.get('div.accordion.float-style').should('contain', 'Dados Específicos do Auto de Infração');
    }
    validarFormRA_Especifico(){
        cy.get(':nth-child(1) > .col-md-4 > .form-group > .control-label').should('have.text', "R.A");
    }

    validarFormEmpreendimento_Especifico(){
        cy.get(':nth-child(1) > .col-md-6 > .form-group > .control-label').should('have.text', "Empreendimento");
    }

    validarFormTipo_Especifico(){
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('have.text', "Tipo");
    }

    validarFormNumero_Especifico(){
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .control-label').should('have.text', "Número");
    }

    validarFormAno_Especifico(){
        cy.get(':nth-child(2) > :nth-child(3) > .form-group > .control-label').should('have.text', "Ano");
    }

    validarFormOrgaoDemanda_Especifico(){
        cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > .form-group > .control-label').should('have.text', "Órgão Demanda");
    }

    validarFormProcessoSEI_Especifico(){
        cy.get(':nth-child(3) > :nth-child(3) > :nth-child(1) > .form-group > label').should('have.text', "Processo SEI Demanda *");
    }

    validarFormDataPublicacao_Especifico(){
        cy.get(':nth-child(2) > :nth-child(4) > :nth-child(1) > .form-group > .control-label').should('have.text', "Data Publicação");
    }

    validarFormVigenciaDias_Especifico(){
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .control-label').should('have.text', "Vigência em Dias");
    }

    validarFormTitular_Especifico(){
        cy.get(':nth-child(2) > :nth-child(6) > :nth-child(1) > .form-group > label').should('have.text', "Titular *");
    }

    validarFormSuplente_Especifico(){
        cy.get(':nth-child(2) > :nth-child(6) > :nth-child(2) > .form-group > label').should('have.text', "Suplente *");
    }

    validarFormDescricao_Especifico(){
        cy.get(':nth-child(5) > .col-md-12 > .form-group > .control-label').should('have.text', "Descrição");
    }
    validarVisualizarTituloDemanda(){
        cy.get('h1').should('have.text', "Demanda");
    }

    validarVisualizarInfoEmpreendimentos(){
        cy.get(':nth-child(1) > .col-md-12 > .accordion > b')
            .should('have.text', "Informações dos Empreendimentos");
    }

    validarVisualizarDadosGerais(){
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .col-md-12 > .accordion > b')
            .should('have.text', "Dados Gerais");
    }

    validarVisualizarInfoDocumento(){
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .col-md-12 > .accordion > b')
            .should('have.text', "Informações do Documento");
    }

    validarVisualizarCompensacaoAmbiental(){
        cy.get('.panel-body > :nth-child(2) > .col-md-12 > .accordion > b')
            .should('have.text', "Dados Específicos da Compensação Ambiental");
    }

    validarVisualizarCompensacaoFlorestal(){
        cy.get('.panel-body > :nth-child(3) > .col-md-12 > .accordion > b')
            .should('have.text', "Dados Específicos da Compensação Florestal");
    }

    validarVisualizarAutoInfracao(){
        cy.get(':nth-child(4) > .col-md-12 > .accordion > b')
            .should('have.text', "Dados Específicos do Auto de Infração");
    }
    validarWhidthTipo(){
        cy.get(':nth-child(1) > [whidth="350px"] > b').should('have.text', "Tipo");
    }

    validarWhidthNumero(){
        cy.get(':nth-child(2) > [whidth="350px"] > b').should('have.text', "Número");
    }

    validarWhidthAno(){
        cy.get(':nth-child(3) > [whidth="350px"] > b').should('have.text', "Ano");
    }

    validarWhidthOrgao(){
        cy.get(':nth-child(4) > [whidth="350px"] > b').should('have.text', "Órgão");
    }

    validarWhidthNumeroSei(){
        cy.get(':nth-child(5) > [whidth="350px"] > b').should('have.text', "Nº SEI Doc Demanda");
    }

    validarWhidthProcesso(){
        cy.get(':nth-child(6) > [whidth="350px"] > b').should('have.text', "Processo");
    }

    validarWhidthDataPublicacao(){
        cy.get(':nth-child(7) > [whidth="350px"] > b').should('have.text', "Data Publicação");
    }

    validarWhidthVigenciaDias(){
        cy.get(':nth-child(8) > [whidth="350px"] > b').should('have.text', "Vigência em Dias");
    }

    validarWhidthDiasRestantes(){
        cy.get(':nth-child(9) > [whidth="350px"] > b').should('have.text', "Dias Restantes");
    }

    validarWhidthStatus(){
        cy.get(':nth-child(10) > [whidth="350px"] > b').should('have.text', "Status");
    }

    validarWhidthAlertaPrazo(){
        cy.get(':nth-child(11) > [whidth="350px"] > b').should('have.text', "Alerta de Prazo");
    }

    validarWhidthTitular(){
        cy.get(':nth-child(12) > [whidth="350px"] > b').should('have.text', "Titular");
    }

    validarWhidthSuplente(){
        cy.get(':nth-child(13) > [whidth="350px"] > b').should('have.text', "Suplente");
    }

    validarWhidthArquivadaSuspensaCancelada(){
        cy.get(':nth-child(14) > [whidth="350px"] > b').should('have.text', "Arquivada/Suspensa/Cancelada");
    }

    validarWhidthDataVencimento(){
        cy.get(':nth-child(15) > [whidth="350px"] > b').should('have.text', "Data de Vencimento");
    }

    validarWhidthEstudoServicosRelacionados(){
        cy.get(':nth-child(16) > [whidth="350px"] > b').should('have.text', "Estudo/Serviços Relacionados");
    }

    validarWhidthObservacaoProcessos(){
        cy.get(':nth-child(17) > [whidth="350px"] > b').should('have.text', "Observação (Processos)");
    }

    validarWhidthDescricao(){
        cy.get(':nth-child(18) > [whidth="350px"] > b').should('have.text', "Descrição");
    }

    validarWhidthRa(){
        cy.get('.panel-border > .table > tbody > :nth-child(1) > :nth-child(1) > b')
            .should('have.text', "RA");
    }

    validarWhidthEmpreendimento(){
        cy.get('.panel-border > .table > tbody > :nth-child(2) > :nth-child(1) > b')
            .should('have.text', "Empreendimento");
    }


}

export default new demandas_consultar ()