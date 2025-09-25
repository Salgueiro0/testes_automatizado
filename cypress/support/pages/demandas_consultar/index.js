const el = require('./elements').ELEMENTS
class demandas_consultar {

    irParaGLA() { cy.visit('/'); }
    login() { cy.get(el.campoUsuario).type('C9020840'); cy.get(el.campoSenha).type('welcome_1'); cy.get(el.botaoLogin).click(); }
    validarTextoPendencia() { cy.get(el.titulo).should('have.text', "Pendência"); }
    irAbaDemanda() { cy.get(el.abaDemanda).click(); }
    irAbaDemandaConsultar() { cy.get(el.abaDemandaConsultar).click(); }
    validarTituloDemanda() { cy.get(el.tituloDemanda).should('have.text', "Demanda"); }
    validarTituloDados() { cy.get(el.tituloDados).should('have.text', "Dados Gerais"); }
    validarFormRA() { cy.get(el.formRA).should('have.text', "R.A"); }
    validarFormEmpreendimento() { cy.get(el.formEmpreendimento).should('have.text', "Empreendimento"); }
    validarFormPossuiExigencia() { cy.get(el.formPossuiExigencia).should('have.text', "Possui Exigência a cumprir e próxima de expirar/expirada? "); }
    validarFormTipo() { cy.get(el.formTipo).should('have.text', "Tipo"); }
    validarFormNumero() { cy.get(el.formNumero).should('have.text', "Número"); }
    validarFormAno() { cy.get(el.formAno).should('have.text', "Ano"); }
    validarLabelPossuiReq() { cy.get(el.labelPossuiReq).should('have.text', "Possui Requerimento em Análise? "); }
    validarLabelOrgaoDemanda() { cy.get(el.labelOrgaoDemanda).should('have.text', "Órgão Demanda"); }
    validarLabelDescricao() { cy.get(el.labelDescricao).should('have.text', "Descrição"); }
    validarLabelPeriodoData() { cy.get(el.labelPeriodoData).should('have.text', "Período de Data de Publicação "); }
    validarLabelPeriodoVig() { cy.get(el.labelPeriodoVig).should('have.text', "Período de Vigência (em dias)"); }
    validarLabelStatus() { cy.get(el.labelStatus).should('have.text', "Status"); }
    validarLabelAlerta() { cy.get(el.labelAlerta).should('have.text', "Alerta"); }
    validarLabelPeriodoDias() { cy.get(el.labelPeriodoDias).should('have.text', "Período de Dias Restantes para vencimento"); }
    validarLabelTitular() { cy.get(el.labelTitular).should('have.text', "Titular "); }
    validarLabelSuplente() { cy.get(el.labelSuplente).should('have.text', "Suplente "); }
    validarLabelEmpreenResp() { cy.get(el.labelEmpreenResp).should('have.text', "Empreendedor Responsável "); }
    validarLabelPeriodoRestante() { cy.get(el.labelPeriodoRestante).should('have.text', "Período Dias Restantes "); }
    validarFormAmbValTotal() { cy.get(el.formAmbValTotal).should('have.text', "Valor Total Compensação Ambiental (R$)"); }
    validarFormAmbVR() { cy.get(el.formAmbVR).should('have.text', "Valor de Referência - VR (R$)"); }
    validarFormAmbGrauImpacto() { cy.get(el.formAmbGrauImpacto).should('have.text', "Grau de Impacto (GI) (%)"); }
    validarFormAmbPrazoLimite() { cy.get(el.formAmbPrazoLimite).should('have.text', "Possui Prazo Limite para Cumprimento da CA? "); }
    validarFormAmbArquivada() { cy.get(el.formAmbArquivada).should('have.text', "Arquivada "); }
    validarFormAmbDescricao() { cy.get(el.formAmbDescricao).should('have.text', "Descrição Compensação Ambiental"); }
    validarFormAmbStatusRecurso() { cy.get(el.formAmbStatusRecurso).should('have.text', "Status do Recurso Administrativo"); }
    validarFormAmbDataLimite() { cy.get(el.formAmbDataLimite).should('have.text', "Data Limite para Cumprimento da CA"); }
    validarFormAmbDiasRestantes() { cy.get(el.formAmbDiasRestantes).should('have.text', "Dias Restantes para Cumprimento da CA"); }
    validarFormAmbSaldoDevedor() { cy.get(el.formAmbSaldoDevedor).should('have.text', "Saldo devedor da CA"); }

    validarFormFlorestLegRef() { cy.get(el.formFlorestLegRef).should('have.text', "Legislação de Referência"); }
    validarFormFlorestTipoVeg() { cy.get(el.formFlorestTipoVeg).should('have.text', "Tipo de Vegetação"); }
    validarFormFlorestModalPag() { cy.get(el.formFlorestModalPag).should('have.text', "Modalidade de Pagamento"); }
    validarFormFlorestQtdMudasEst() { cy.get(el.formFlorestQtdMudasEst).should('have.text', "Quantidade de Mudas Estimadas"); }
    validarFormFlorestQtdMudasDef() { cy.get(el.formFlorestQtdMudasDef).should('have.text', "Quantidade de Mudas Definitivas"); }
    validarFormFlorestValorTotal() { cy.get(el.formFlorestValorTotal).should('have.text', "Valor Total da CF (R$)"); }
    validarFormFlorestAreaTotal() { cy.get(el.formFlorestAreaTotal).should('have.text', "Área Total (ha)"); }
    validarFormFlorestDataLimite() { cy.get(el.formFlorestDataLimite).should('have.text', "Data Limite Cumprimento da CF"); }
    validarFormFlorestDiasRestantes() { cy.get(el.formFlorestDiasRestantes).should('have.text', "Dias Restantes Cumprimento da CF"); }
    validarFormFlorestArquivada() { cy.get(el.formFlorestArquivada).should('have.text', "Arquivada "); }
    validarFormFlorestDescricao() { cy.get(el.formFlorestDescricao).should('have.text', "Descrição Compensação Florestal"); }
    validarFormFlorestStatusRecurso() { cy.get(el.formFlorestStatusRecurso).should('have.text', "Status do Recurso Administrativo"); }
    validarFormFlorestSaldoDevedor() { cy.get(el.formFlorestSaldoDevedor).should('have.text', "Saldo devedor da CF"); }
    validarFormAIDataReceb() { cy.get(el.formAIDataReceb).should('have.text', "Data de Recebimento do AI "); }
    validarFormAITipoSancao() { cy.get(el.formAITipoSancao).should('have.text', "Tipo de Sanção"); }
    validarFormAIValorMulta() { cy.get(el.formAIValorMulta).should('have.text', "Valor da Multa (R$)"); }
    validarFormAITipoAtividade() { cy.get(el.formAITipoAtividade).should('have.text', "Tipo de Atividade"); }
    validarFormAIOrgaoDescricao() { cy.get(el.formAIOrgaoDescricao).should('have.text', "Órgão DemandaDescrição do AI (motivo)"); }
    validarFormAIStatus() { cy.get(el.formAIStatus).should('have.text', "Status do AI"); }
    validarFormAIInstancia() { cy.get(el.formAIInstancia).should('have.text', "Instância Recursal"); }
    validarFormAIDescricaoStatus() { cy.get(el.formAIDescricaoStatus).should('have.text', "Descrição do Status do AI"); }
    validarFormAITituloPrazos() { cy.get(el.formAITituloPrazos).should('have.text', "Controle dos Prazos de Defesa e dos Recursos Administrativos"); }
    validarFormAIPeriodosInstancia() { cy.get(el.formAIPeriodosInstancia).should('have.text', "Períodos da Instância"); }
    validarFormAIDataEnvio() { cy.get(el.formAIDataEnvio).should('have.text', "Data Envio do Recurso da Instância "); }
    validarFormAIDataCiencia() { cy.get(el.formAIDataCiencia).should('have.text', "Data de Ciência Decisão da Instância"); }
    validarFormAIValorAtual() { cy.get(el.formAIValorAtual).should('have.text', "Valor da Multa Atualizada da Instância (R$)"); }
    validarFormAIDataLimiteEnvio() { cy.get(el.formAIDataLimiteEnvio).should('have.text', "Data Limite de Envio do Recurso da Instância"); }
    validarFormAIDataLimitePagamento() { cy.get(el.formAIDataLimitePagamento).should('have.text', "Data Limite para Pagamento da Multa"); }
    validarLabelDadosCA(){cy.contains('label', 'Dados da CA').invoke('text').then((text) => { expect(text.trim()).to.eq('Dados da CA'); });}
    validarLabelDadosCF(){cy.contains('label', 'Dados da CF').invoke('text').then((text) => { expect(text.trim()).to.eq('Dados da CF'); });}
    validarLabelDadosAI(){cy.contains('label', 'Dados do AI').invoke('text').then((text) => { expect(text.trim()).to.eq('Dados do AI'); });}
    validarLabelValorCA(){cy.contains('label', 'Valor da CA').invoke('text').then((text) => { expect(text.trim()).to.eq('Valor da CA'); });}
    validarLabelLegRef(){cy.contains('label', 'Legislação de Referência').invoke('text').then((text) => { expect(text.trim()).to.eq('Legislação de Referência'); });}
    validarLabelDataRecebAI(){cy.contains('label', 'Data de Recebimento do AI').invoke('text').then((text) => { expect(text.trim()).to.eq('Data de Recebimento do AI'); });}
    validarLabelDiasRestCA(){cy.contains('label', 'Dias Restantes da CA').invoke('text').then((text) => { expect(text.trim()).to.eq('Dias Restantes da CA'); });}
    validarLabelValorCF(){cy.contains('label', 'Valor da CF').invoke('text').then((text) => { expect(text.trim()).to.eq('Valor da CF'); });}
    validarLabelTipoSancao(){cy.contains('label', 'Tipo de Sanção').invoke('text').then((text) => { expect(text.trim()).to.eq('Tipo de Sanção'); });}
    validarLabelSubtotalCA(){cy.contains('label', 'Subtotal da CA').invoke('text').then((text) => { expect(text.trim()).to.eq('Subtotal da CA'); });}
    validarLabelDiasRestCF(){cy.contains('label', 'Dias Restantes da CF').invoke('text').then((text) => { expect(text.trim()).to.eq('Dias Restantes da CF'); });}
    validarLabelTipoVegetacao(){cy.contains('label', 'Tipo Vegetação').invoke('text').then((text) => { expect(text.trim()).to.eq('Tipo Vegetação'); });}
    validarLabelModPagamento(){cy.contains('label', 'Mod. Pagamento').invoke('text').then((text) => { expect(text.trim()).to.eq('Mod. Pagamento'); });}
    validarLabelSubtotalMultaAI(){cy.contains('label', 'Subtotal da Multa AI').invoke('text').then((text) => { expect(text.trim()).to.eq('Subtotal da Multa AI'); });}
    validarTabelaRA(){cy.get('.sorting_asc').should('have.text', "R.A");}
    validarTabelaEmpreendimento(){cy.get(el.tabelaEmpreendimento).should('have.text', "Empreendimento");}
    validarTabelaTipo(){cy.get(el.tabelaTipo).should('have.text', "Tipo");}
    validarTabelaNumero(){cy.get(el.tabelaNumero).should('have.text', "Nº");}
    validarTabelaAno(){cy.get(el.tabelaAno).should('have.text', "Ano");}
    validarTabelaOrgao(){cy.get(el.tabelaOrgao).should('have.text', "Órgão");}
    validarTabelaDiasRest(){cy.get(el.tabelaDiasRest).should('have.text', "Dias Rest");}
    validarTabelaAlerta(){cy.get(el.tabelaAlerta).should('have.text', "Alerta");}
    validarTabelaTitular(){cy.get(el.tabelaTitular).should('have.text', "Titular");}
    validarTabelaAcao(){cy.get(el.tabelaAcao).should('have.text', "Ação");}
    validarTituloNovaDemanda(){cy.get(el.tituloNovaDemanda).should('have.text', "Nova Demanda");}
    validarAccordionDadosGerais(){cy.get(el.accordionDadosGerais).should('contain', "Dados Gerais");}
    validarAccordionDadosCA(){cy.get(el.accordionDadosCA).should('contain', "Dados Específicos da Compensação Ambiental");}
    validarAccordionDadosCF(){cy.get(el.accordionDadosCF).should('contain', "Dados Específicos da Compensação Florestal");}
    validarAccordionDadosAI(){cy.get(el.accordionDadosAI).should('contain', "Dados Específicos do Auto de Infração");}
    validarFormRA_Especifico(){cy.get(el.formRA_Especifico).should('have.text', "R.A");}
    validarFormEmpreendimento_Especifico(){cy.get(el.formEmpreendimento_Especifico).should('have.text', "Empreendimento");}
    validarFormTipo_Especifico(){cy.get(el.formTipo_Especifico).should('have.text', "Tipo");}
    validarFormNumero_Especifico(){cy.get(el.formNumero_Especifico).should('have.text', "Número");}
    validarFormAno_Especifico(){cy.get(el.formAno_Especifico).should('have.text', "Ano");}
    validarFormOrgaoDemanda_Especifico(){cy.get(el.formOrgaoDemanda_Especifico).should('have.text', "Órgão Demanda");}
    validarFormProcessoSEI_Especifico(){cy.get(el.formProcessoSEI_Especifico).should('have.text', "Processo SEI Demanda *");}
    validarFormDataPublicacao_Especifico(){cy.get(el.formDataPublicacao_Especifico).should('have.text', "Data Publicação");}
    validarFormVigenciaDias_Especifico(){cy.get(el.formVigenciaDias_Especifico).should('have.text', "Vigência em Dias");}
    validarFormTitular_Especifico(){cy.get(el.formTitular_Especifico).should('have.text', "Titular *");}
    validarFormSuplente_Especifico(){cy.get(el.formSuplente_Especifico).should('have.text', "Suplente *");}
    validarFormDescricao_Especifico(){cy.get(el.formDescricao_Especifico).should('have.text', "Descrição");}
    validarVisualizarTituloDemanda(){cy.get('h1').should('have.text', "Demanda");}
    validarVisualizarInfoEmpreendimentos(){cy.get(el.infoEmpreendimentos).should('have.text', "Informações dos Empreendimentos");}
    validarVisualizarDadosGerais(){cy.get(el.dadosGerais).should('have.text', "Dados Gerais");}
    validarVisualizarInfoDocumento(){cy.get(el.infoDocumento).should('have.text', "Informações do Documento");}
    validarVisualizarCompensacaoAmbiental(){cy.get(el.compensacaoAmbiental).should('have.text', "Dados Específicos da Compensação Ambiental");}
    validarVisualizarCompensacaoFlorestal(){cy.get(el.compensacaoFlorestal).should('have.text', "Dados Específicos da Compensação Florestal");}
    validarVisualizarAutoInfracao(){cy.get(el.autoInfracao).should('have.text', "Dados Específicos do Auto de Infração");}
    validarWhidthTipo(){cy.get(el.whidthTipo).should('have.text', "Tipo");}
    validarWhidthNumero(){cy.get(el.whidthNumero).should('have.text', "Número");}
    validarWhidthAno(){cy.get(el.whidthAno).should('have.text', "Ano");}
    validarWhidthOrgao(){cy.get(el.whidthOrgao).should('have.text', "Órgão");}
    validarWhidthNumeroSei(){cy.get(el.whidthNumeroSei).should('have.text', "Nº SEI Doc Demanda");}
    validarWhidthProcesso(){cy.get(el.whidthProcesso).should('have.text', "Processo");}
    validarWhidthDataPublicacao(){cy.get(el.whidthDataPublicacao).should('have.text', "Data Publicação");}
    validarWhidthVigenciaDias(){cy.get(el.whidthVigenciaDias).should('have.text', "Vigência em Dias");}
    validarWhidthDiasRestantes(){cy.get(el.whidthDiasRestantes).should('have.text', "Dias Restantes");}
    validarWhidthStatus(){cy.get(el.whidthStatus).should('have.text', "Status");}
    validarWhidthAlertaPrazo(){cy.get(el.whidthAlertaPrazo).should('have.text', "Alerta de Prazo");}
    validarWhidthTitular(){cy.get(el.whidthTitular).should('have.text', "Titular");}
    validarWhidthSuplente(){cy.get(el.whidthSuplente).should('have.text', "Suplente");}
    validarWhidthArquivadaSuspensaCancelada(){cy.get(el.whidthArquivadaSuspensaCancelada).should('have.text', "Arquivada/Suspensa/Cancelada");}
    validarWhidthDataVencimento(){cy.get(el.whidthDataVencimento).should('have.text', "Data de Vencimento");}
    validarWhidthEstudoServicosRelacionados(){cy.get(el.whidthEstudoServicosRelacionados).should('have.text', "Estudo/Serviços Relacionados");}
    validarWhidthObservacaoProcessos(){cy.get(el.whidthObservacaoProcessos).should('have.text', "Observação (Processos)");}
    validarWhidthDescricao(){cy.get(el.whidthDescricao).should('have.text', "Descrição");}
    validarWhidthRa(){cy.get(el.whidthRa).should('have.text', "RA");}
    validarWhidthEmpreendimento(){cy.get(el.whidthEmpreendimento).should('have.text', "Empreendimento");}
    clicarBotao1(){cy.get(el.botao1).click();}
    clicarBotao2(){cy.get(el.botao2).click();}
    clicarBotao3(){cy.get(el.botao3).click();}
    seletorRAForm(){cy.get(el.seletorRAForm).click();}
    seletorRAFormGeral(){cy.get(el.seletorRAFormGeral).click();}
    seletorDropdown(select){cy.get(el.seletorDropdown).contains(select).click({force:true});}

    validaOpcoesDropdown(opcao1, opcao2, opcao3,opcao4) {
        cy.get(el.seletorDropdown)
            .should('contain', opcao1)
            .and('contain', opcao2)
            .and('contain', opcao3)
            .and('contain', opcao4)
    }
    validaModPagamentoDesab(){cy.get('#form_florestal > :nth-child(1) > :nth-child(3) > .form-group')
        .should('contain','Pecúnia')
    }
    validarQuantMudasDesab(){cy.get('#qt_definitiva_mudas').should('be.disabled')}
    validarQuantMudasHab(){cy.get('#qt_definitiva_mudas').should('not.be.disabled')}
    clicarBotao(){cy.get(el.botaoPanel).click();}
    digitarValorComp(valor){cy.get(el.valorComp).type(valor);}
    clicarBotaoPanel(){cy.get(el.botaoPanelBody).click();}
    digitarDataRecebInicio(valor){cy.get(el.dataRecebInicio).type(valor);}
    limparPesquisa(){cy.get(el.limparPesquisa).click();}
    selecionarRA(){cy.get(el.seletorRAFormGeral).click();}
    clicarBotaoPesquisar(){cy.get(el.botaoPesquisar).click();}
    clicarBotaoCadastro(){cy.get(el.botaoCadastro).click();}
    validarTitulo(){cy.get('h1').should('contain','Demanda')}
    clicarAcordeaoCompAmb(){cy.contains('div.accordion.float-style','Dados Específicos da Compensação Ambiental').click();}
    clicarAcordeaoCompFlo(){cy.contains('div.accordion.float-style','Dados Específicos da Compensação Florestal').click();}
    clicarAcordeaoComInf(){cy.contains('div.accordion.float-style','Dados Específicos do Auto de Infração').click();}
    selecionarReg(){cy.get(el.seletorReg).click();}
    instanciaRecDesab(){cy.get('#form_auto_infracao > :nth-child(6) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection').should('have.attr', 'tabindex', '-1')}
    digitarDataDecisao(data){
        cy.get('#dt_ciencia_instancia_um_ai').type(data)
        cy.get('#dt_ciencia_instancia_dois_ai').type(data)
        cy.get('#dt_ciencia_instancia_tres_ai').type(data)
    }
    mensagemAlertaEmail(){cy.get('.bootbox-body').should('contain','Atenção, antes de salvar o registro, atualize os campos "Status do AI" e "Instância recursal" para que os alertas por e-mail aos usuários sejam emitidos corretamente. Deseja salvar mesmo assim?')}
    botaoSubmit(){cy.get('#submit').click()}
    seletorEmpreendimento(){cy.get(el.seletorEmpreendimento).click();}
    adicionarEmpreendimento(){cy.contains('button','Adicionar').click();}
    selecionarTipo(){cy.get(el.selecionarLicenca).click();}
    digitarNumDemanda(valor){cy.get(el.numDemanda).type(valor);}
    digitarAnoDemanda(valor){cy.get(el.anoDemanda).type(valor);}
    selecionarOrgao(){cy.get(el.selecionarOrgao).click();}
    digitarData(valor){cy.get('div[style="display: block;"] > :nth-child(4) > :nth-child(1) > .form-group > .control-label').type(valor)}
    digitarVigencia(valor){cy.get(':nth-child(4) > :nth-child(2) > .form-group > .control-label').type(valor)}
    digitarDescricao(valor){cy.get(':nth-child(5) > .col-md-12 > .form-group > .control-label').type(valor)}
    digitarSeiOrgao(valor){cy.get('#cd_orgao_processo_sei').type(valor)}
    digitarNRProcesso(valor){cy.get('#nr_processo_sei').type(valor)}
    digitarAnoProcesso(valor){cy.get('#aa_processo_sei').type(valor)}
    botaoSalvar(){cy.contains('button','Salvar').click()}
    clicarModalSalvar(){cy.get('.modal-footer > .btn-primary').click({force:true})}
    botaoContinuar(){cy.get('.modal-footer > .btn-primary').click()}
    modalSim(){cy.get('.modal-footer > .btn-primary').click()}
    botaoOk(){cy.get('.modal-footer > .btn-danger').click()}
    clicarAdicionar1(){cy.get('#ep_plus').click()}
    clicarAdicionar2(){cy.get('#id_plus').click()}
    clicarAdicionar3(){cy.get('#ca_plus').click()}
    clicarAdicionar4(){cy.get('#cf_plus').click()}
    clicarAdicionar5(){cy.get('#ai_plus').click()}clicarAbaDoc(){cy.get('.documentos-aba').click()}
    clicarExigAba(){cy.get('.exigencias-aba').click()}
    clicarReqAba(){cy.get('.requerimentos-aba').click()}
    clicarNovoEstudoAba(){cy.get('.novo-estudo-aba').click()}
    clicarDemandaAba(){cy.get('.demanda-aba').click()}
    clicarBotaoEditar(){
        cy.get('.col-md-12 > :nth-child(1) > a.btn').click()
        cy.wait(4000)
    }
    digitarDtPub(valor){cy.get('#dt_publicacao').clear().type(valor)}
    digitarQtDias(valor){cy.get('#qt_dias_vigencia').type(valor)}
    digitarDesDemanda(valor){cy.get('#ds_demanda').type(valor)}
    modalOk(){cy.wait(1000); cy.contains('button','OK').click()}
    validarMSGObrigatoriaValorMulta(){
        cy.get('#error_vl_multa_instancia_um').should('contain','O campo Valor da Multa Atualizado em 1ª Instância é obrigatória!')
        cy.get('#error_vl_multa_instancia_dois').should('contain','O campo Valor da Multa Atualizado em 2ª Instância é obrigatória!')
        cy.get('#error_vl_multa_instancia_tres').should('contain','O campo Valor da Multa Atualizado em 3ª Instância é obrigatória!')
    }
    digitarValorMultaInstancia(valor){
        cy.get('#vl_multa_instancia_um_ai').type(valor)
        cy.get('#vl_multa_instancia_dois_ai').type(valor)
        cy.get('#vl_multa_instancia_tres_ai').type(valor)
    }
    limparDataDecisao(){
        cy.get('#dt_ciencia_instancia_um_ai').clear()
        cy.get('#dt_ciencia_instancia_dois_ai').clear()
        cy.get('#dt_ciencia_instancia_tres_ai').clear()
    }
    validarDataLimite() {

        const casos = [
            {
                origem: ':nth-child(4) > :nth-child(1) > .panel-accordion > :nth-child(1) > tbody > :nth-child(1) > :nth-child(2)',
                destino: ':nth-child(5) > tbody > :nth-child(5) > :nth-child(2)',
                dias: 9
            },
            {
                origem: ':nth-child(5) > tbody > :nth-child(3) > :nth-child(2)',
                destino: ':nth-child(7) > tbody > :nth-child(5) > :nth-child(2)',
                dias: 4
            },
            {
                origem: ':nth-child(7) > tbody > :nth-child(3) > :nth-child(2)',
                destino: ':nth-child(9) > tbody > :nth-child(5) > :nth-child(2)',
                dias: 4
            },
            {
                origem: ':nth-child(9) > tbody > :nth-child(3) > :nth-child(2)',
                destino: ':nth-child(9) > tbody > :nth-child(6) > :nth-child(2)',
                dias: 4
            }
        ];

        casos.forEach(({ origem, destino, dias }) => {
            cy.get(origem)
                .invoke('text')
                .then((texto) => {
                    const [d, m, a] = texto.trim().split('/');
                    const data = new Date(a, m - 1, d);
                    data.setDate(data.getDate() + dias);

                    const dd = String(data.getDate()).padStart(2, '0');
                    const mm = String(data.getMonth() + 1).padStart(2, '0');
                    const yyyy = data.getFullYear();
                    const formatada = `${dd}/${mm}/${yyyy}`;

                    cy.get(destino).should('contain', formatada);
                });
        });

    }

    irParaRequerimentos(){
        cy.get('.requerimentos-aba').click()
    }


    clicarAbaDemandas(){
        cy.wait(1000)
        cy.get(':nth-child(3) > [href="#"]').first().click()}
    irLink2(){cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()}
    clicarPrimeiroBotaoVisualizar(){cy.get('a[title="Visualizar"]').first().click()}
    clicarBotaoVoltar(){cy.get('[onclick="window.history.back()"]').click()}
    clicarConsultarDemanda(){cy.get('.menu-open > .treeview-menu > :nth-child(1) > a').click()}
    digitarDtPubInicio(valor){cy.get('#dt_publicacao_inicio').type(valor)}
    gerarRelDemandaPDF(){cy.get('#gerarRelatorioDemandaPDF').click()}
    clicarExcluirDemanda(){cy.get('#btn-delete-demanda').click()}
    clicarConfirmar(){
        cy.wait(1000)
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()}
    validarMSGExclusao(){cy.get('.bootbox > .modal-dialog > .modal-content > .modal-body').should('contain','Existem (Compensação Florestal) associados')}
    validaCompenAmbNotCheck(){cy.get('#fl_compensacao_ambiental').should('be.disabled')}
    validaCompenFloNotCheck(){cy.get('#fl_compensacao_florestal').should('be.disabled')}
    validaCompenAmbCheck(){cy.get('#fl_compensacao_ambiental').should('not.be.disabled')}
    validaCompenFloCheck(){cy.get('#fl_compensacao_florestal').should('not.be.disabled')}
    clicarPrimeiroBotaoEditar(){cy.get('a[title="Editar"]').first().click()}
    clicarPrimeiroBotaoExcluir(){cy.get('a[title="Excluir"]').first().click()}
    marcarCompensAmb(){cy.get('#fl_compensacao_ambiental').click()}
    checkPossuiPrazo(){
        cy.get('#fl_prazo_cumprimento').click()
        cy.wait(2000)
    }
    validarPrazoDesabilitado(){cy.get('#qt_dias_prazo_limite_cf').should('be.disabled')}
    validarPrazoHabilitado(){cy.get('#qt_dias_prazo_pagamento').should('not.be.disabled')}
    clicarStatusRecAdm(){cy.get(':nth-child(4) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()}
    validarSeiDocRecAdmHabilitado(){cy.get('#ds_sei_doc_recurso_adm').should('not.be.disabled')}
    validarSeiDocRecAdmDesabilitado(){cy.get('#ds_sei_doc_recurso_adm').should('be.disabled')}
    digitarValorTotalCompAmb(valor){cy.get('#vl_valor_compensacao_ambiental').type(valor)}
    digitarValorRef(valor){cy.get('#form_ambiental > :nth-child(1) > :nth-child(2) > .form-group > .form-control').type(valor).clear()}
    digitarGrauImpacto(valor){cy.get('#form_ambiental > :nth-child(1) > :nth-child(3) > .form-group > .form-control').type(valor).clear()}
    digitarSeiDoc(valor){cy.get('#form_ambiental > :nth-child(2) > :nth-child(1) > .form-group > .form-control').type(valor).clear()}
    digitarPrazoDias(valor){cy.get('#ds_sei_doc_recurso_adm').type(valor)}
    dgitarDescrCompAmb(texto){cy.get('#ds_compensacao_ambiental').type(texto).clear()}
    selecionarStatusRecAdm(){cy.get(':nth-child(4) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()}
    digitarNSeiDocRecAdm(valor){cy.get('#ds_sei_doc_recurso_adm').type(valor)}
    abrirCompAmb(){cy.get('#fl_compensacao_ambiental').click()}
    limparDadosCompAmb(){cy.get('#bt_clear_form_ca').click()}
    clicarCheckCompAmb(){cy.get('#fl_compensacao_ambiental').click()}
    digitarDataRecebAI(data){cy.get('#dt_recebimento_ai').type(data)}
    selecionarTipoSancao(){cy.get('#form_auto_infracao > :nth-child(3) > .col-md-4 > .form-group > .select2-container > .selection > .select2-selection').click()}
    digitarValorMulta(valor){cy.get('#vl_multa_ai').type(valor)}
    selecionarTipoAtividade(){cy.get(':nth-child(4) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()}
    digitarMotivo(motivo){cy.get('#ds_auto_infracao_ai').type(motivo)}
    selecionarStatusAI(){cy.get('#form_auto_infracao > :nth-child(6) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()}
    selecionarInstanciaRecursal(){cy.get('#form_auto_infracao > :nth-child(6) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection').click()}
    selecionarLegislacaoReferencia(){cy.get('#form_florestal > :nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()}
    validaTipoVegetacaoDesab(){cy.get('#form_florestal > :nth-child(1) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection').should('have.attr', 'tabindex', '-1')}
    validaTipoVegetacaoHab(){cy.get('#form_florestal > :nth-child(1) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection').should('not.be.disabled')}
    selecionarModalidadePagamento(){cy.get(':nth-child(3) > .form-group > .select2-container > .selection > .select2-selection').click()}
    selecionarTipoVegetacao(){cy.get('#form_florestal > :nth-child(1) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection').click()}
    marcarCompensFlorestal(){cy.get('#fl_compensacao_florestal').click()}
    prazoEmDiasHab(){cy.get('#qt_dias_prazo_limite_cf').should('not.be.disabled')}
    marcarPossuiPrazo(){cy.get('#fl_prazo_cumprimento_cf').click()}
    prazoEmDiasDesab(){cy.get('#qt_dias_prazo_limite_cf').should('be.disabled')}
    selecionarStatusRecAdmCF(){cy.get(':nth-child(5) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()}
    validarSeiDOCRecADMHabilitado(){cy.get('#ds_sei_doc_recurso_adm_cf').should('not.be.disabled')}
    validarSeiDOCRecADMDesabilitado(){cy.get('#ds_sei_doc_recurso_adm_cf').should('be.disabled')}
    adicionarCF(){cy.get('#add_compensao_florestal').click()}
    digitarQuantMudasEstimadas(mudas){cy.get('#qt_estimada_mudas').type(mudas)}
    digitarQuantMudasDefinitivas(mudas){cy.get('#qt_definitiva_mudas').type(mudas)}
    digitarValorCF(valor){cy.get('#vl_compensacao_florestal').type(valor)}
    clicarBotaoAdicionar(){cy.get('#add_compensao_florestal').click()}
    digitarDataRecebimentoAI(data){cy.get('#dt_recebimento_ai').type(data)}
    areaTotalDesabilitada(){cy.get('#nr_area_total').should('be.disabled')}
    areaTotalHabilitada(){cy.get('#nr_area_total').should('not.be.disabled')}
    digitarAreaTotal(){cy.get('#nr_area_total').type('10000' +
        '')}
    filtrarDemandaPesquisa(pesquisa){cy.get('#table-demanda_filter > label > .form-control').type(pesquisa)}
    selecionarDadosEspecificosCA(){cy.get('.panel-body > :nth-child(2) > :nth-child(1) > .accordion').click()}
    validarSaldoPagoAMais(){cy.get('.panel-body > :nth-child(2) > :nth-child(1) > .panel-accordion > :nth-child(1) > tbody > :nth-child(12) > :nth-child(2)').should('contain','valor pago a mais, crédito')}
    validarSaldo0CFMudas(){cy.get(':nth-child(3) > :nth-child(1) > .panel-accordion > :nth-child(1) > tbody > :nth-child(16) > :nth-child(2)').should('contain','0,00 mudas')}
    validarSaldo0CFha(){cy.get(':nth-child(5) > tbody > :nth-child(16) > :nth-child(2)').should('contain','0,00 ha')}
    validarSaldo0CF(){cy.get(':nth-child(9) > tbody > :nth-child(16) > :nth-child(2)').should('contain','R$ 0,00')}
    validarSaldoPagoAMaisCFMudas(){cy.get(':nth-child(3) > :nth-child(1) > .panel-accordion > :nth-child(1) > tbody > :nth-child(16) > :nth-child(2)').should('contain','mudas (valor pago a mais, crédito)')}
    validarSaldoPagoAMaisCFha(){cy.get(':nth-child(5) > tbody > :nth-child(16) > :nth-child(2)').should('contain',' ha (valor pago a mais, crédito)')}
    validarSaldoPagoAMaisCF(){cy.get(':nth-child(9) > tbody > :nth-child(16) > :nth-child(2)').should('contain','R$ 20,00 (valor pago a mais, crédito)')}
    validarSaldoPositivoCFMudas(){cy.get(':nth-child(3) > :nth-child(1) > .panel-accordion > :nth-child(1) > tbody > :nth-child(16) > :nth-child(2)').should('contain','mudas (a pagar)')}
    validarSaldoPositivoCFha(){cy.get(':nth-child(5) > tbody > :nth-child(16) > :nth-child(2)').should('contain',' ha (a pagar)')}
    validarSaldoPositivoCF(){cy.get(':nth-child(9) > tbody > :nth-child(16) > :nth-child(2)').should('contain','R$ 10,00 (a pagar)')}
    excluirPagamentos(){
        cy.get('.odd > .text-center > .btn-delete-pagamento-CA').first().click()
        cy.wait(1000)
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(1000)
        cy.contains('button','OK').click()
        cy.wait(1000)
        cy.get('.btn-delete-pagamento-CA > .fas').click()
        cy.wait(1000)
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(1000)
        cy.contains('button','OK').click()
    }
    excluirPagamentosCF(){
        cy.get('.odd > .text-center > .btn-delete-pagamento-CF > .fas').first().click()
        cy.wait(1000)
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(1000)
        cy.contains('button','OK').click()
        cy.wait(2000)
        cy.get('.btn-delete-pagamento-CF > .fas').click()
        cy.wait(1000)
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(1000)
        cy.contains('button','OK').click()
    }
    subtrairData(data){
        const dataAlvo = new Date(data)
        const hoje = new Date()
        hoje.setHours(0, 0, 0, 0);
        const diffMs = hoje - dataAlvo;
        const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24))


        if(data === '2025-07-16'){
            cy.get('.panel-body > :nth-child(2) > :nth-child(1) > .panel-accordion > :nth-child(1) > tbody > :nth-child(6) > :nth-child(2)').should('contain', dias)
        }

    }
    adicionarPagamentoCAMudas(data,valor,select){
        //cy.get('.col-md-12 > .btn').click()
        cy.get(':nth-child(2) > .col-md-12 > .btn').first().click()
        cy.wait(1000)
        cy.get('#dt_pagamento').type(data)
        cy.get('#vl_pagamento').type(valor)
        cy.get('#tp_situacao').select(select)
        cy.get('#botao-salvar').click()
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    }
    adicionarPagamentoCAha(data,valor,select){
        cy.get(':nth-child(6) > .col-md-12 > .btn').first().click()
        cy.wait(1000)
        cy.get('#dt_pagamento').type(data)
        cy.get('#vl_pagamento').type(valor)
        cy.get('#tp_situacao').select(select)
        cy.get('#botao-salvar').click()
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    }
    adicionarPagamentoCA(data,valor,select){
        cy.get(':nth-child(10) > .col-md-12 > .btn').first().click()
        cy.wait(1000)
        cy.get('#dt_pagamento').type(data)
        cy.get('#vl_pagamento').type(valor)
        cy.get('#tp_situacao').select(select)
        cy.get('#botao-salvar').click()
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click()
}
    adicionarPagamentoCF(){
        cy.get(':nth-child(2) > .col-md-12 > .btn').click()

    }
    validarSaldoPositivo(){cy.get('.panel-body > :nth-child(2) > :nth-child(1) > .panel-accordion > :nth-child(1) > tbody > :nth-child(12) > :nth-child(2)').should('contain','a pagar')}
    validarSaldo0(){cy.get('.panel-body > :nth-child(2) > :nth-child(1) > .panel-accordion > :nth-child(1) > tbody > :nth-child(12) > :nth-child(2)').should('contain','0,00')}

    selecionarEmpreendimentoPesquisa(){cy.get('#form_geral > :nth-child(1) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered').click()}
    selecionarDadosEspecificosCF(){cy.get('.panel-body > :nth-child(3) > :nth-child(1) > .accordion').click()}
    selecionarDadosEspecificosAI(){cy.get(':nth-child(4) > :nth-child(1) > .accordion').click()}
    validarDemandaVinculaExigencia(){
        cy.get('.exigencias-aba').click()
        cy.get('.btn-toolbar > button.btn-success').should('contain','Vincular Exigência')
    }
    validarStatusExigencia(){cy.get('#table-exigencia > tbody > :nth-child(1) > :nth-child(6)').should('contain','Em Execução')}
    valorMultaDesabilitado(){cy.get('#vl_multa_ai').should('be.disabled')}
    valorMultaHabilitado(){cy.get('#vl_multa_ai').should('not.be.disabled')}
    validarBotaoDownload(){
        cy.get('#btn_download_poligonal').should('contain','Download do .Kml')
    }
    editarSalvar(){
        cy.get('#submit').click()
        cy.wait(1000)
        cy.get('.modal-footer > .btn-primary').click()
        cy.wait(1000)
        cy.contains('button','OK').click()
    }
    excluirSalvar(){
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').first().click()
        cy.contains('button','OK')
    }

}

export default new demandas_consultar ()