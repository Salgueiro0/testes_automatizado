/// <reference types="cypress" />

describe('pendência', () => {
    beforeEach(() => {
        cy.visit('http://gla-homol.terracapnet.local')
        cy.viewport(1980, 1200)


    })
    it('teste demandas-consultar', () => {
        //abrindo a aba de consultar demandas
        cy.get(':nth-child(2) > .form-control').type('C9020840')
        cy.get(':nth-child(3) > .form-control').type('welcome_1')
        cy.get('.btn').click()
        cy.get('h1').should('have.text', "Pendência")
        cy.get(':nth-child(3) > [href="#"]').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()

        //validando os campos da aba de demandas
        cy.get('h1').should('have.text', "Demanda")
        cy.get(':nth-child(1) > .box-header > .box-title').should('have.text', "Dados Gerais")
        cy.get('#form_geral > :nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
        cy.get('#form_geral > :nth-child(1) > :nth-child(2) > .form-group > .control-label').should('have.text', "Empreendimento")
        cy.get('#form_geral > :nth-child(1) > :nth-child(3) > .form-group > label').should('have.text', "Possui Exigência a cumprir e próxima de expirar/expirada? ")
        cy.get('#form_geral > :nth-child(2) > :nth-child(1) > .form-group > .control-label').should('have.text', "Tipo")
        cy.get('#form_geral > :nth-child(2) > :nth-child(2) > .form-group > .control-label').should('have.text', "Número")
        cy.get('#form_geral > :nth-child(2) > :nth-child(3) > .form-group > .control-label').should('have.text', "Ano")
        cy.get(':nth-child(2) > :nth-child(4) > .form-group > label').should('have.text', "Possui Requerimento em Análise? ")
        cy.get(':nth-child(3) > .col-md-12 > .form-group > .control-label').should('have.text', "Órgão Demanda")
        cy.get(':nth-child(4) > .col-md-8 > .form-group > .control-label').should('have.text', "Descrição")
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .control-label').should('have.text', "Período de Data de Publicação ")
        cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1) > .control-label').should('have.text', "Período de Vigência (em dias)")
        cy.get(':nth-child(5) > :nth-child(3) > .form-group > .control-label').should('have.text', "Status")
        cy.get('#form_geral > :nth-child(6) > :nth-child(1) > .form-group > .control-label').should('have.text', "Alerta")
        cy.get(':nth-child(6) > :nth-child(3) > .form-group > .control-label').should('have.text', "Período de Dias Restantes para vencimento")
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > label').should('have.text', "Titular ")
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > label').should('have.text', "Suplente ")
        cy.get(':nth-child(7) > :nth-child(3) > .form-group > label').should('have.text', "Empreendedor Responsável ")
        cy.get(':nth-child(6) > :nth-child(4) > label').should('have.text', "Período Dias Restantes ")

        cy.get(':nth-child(4) > .box-header > .box-tools > .btn > .fa').click()
        cy.get(':nth-child(3) > .box-header > .box-tools > .btn > .fa').click()
        cy.get(':nth-child(2) > .box-header > .box-tools > .btn > .fa').click()

        cy.get('#form_ambiental > :nth-child(1) > :nth-child(1) > :nth-child(1) > label').should('have.text', "Valor Total Compensação Ambiental (R$)")
        cy.get('#form_ambiental > :nth-child(1) > :nth-child(2) > :nth-child(1) > label').should('have.text', "Valor de Referência - VR (R$)")
        cy.get('#form_ambiental > :nth-child(1) > :nth-child(3) > :nth-child(1) > label').should('have.text', "Grau de Impacto (GI) (%)")
        cy.get('#form_ambiental > :nth-child(1) > :nth-child(4) > .form-group > label').should('have.text', "Possui Prazo Limite para Cumprimento da CA? ")
        cy.get('#form_ambiental > :nth-child(2) > .col-md-2 > .form-group > label').should('have.text', "Arquivada ")
        cy.get(':nth-child(2) > .col-md-10 > .form-group > .control-label').should('have.text', "Descrição Compensação Ambiental")
        cy.get('#form_ambiental > :nth-child(3) > :nth-child(1) > .form-group > .control-label').should('have.text', "Status do Recurso Administrativo")
        cy.get('#form_ambiental > :nth-child(3) > :nth-child(2) > :nth-child(1) > label').should('have.text', "Data Limite para Cumprimento da CA")
        cy.get('#form_ambiental > :nth-child(3) > :nth-child(3) > :nth-child(1) > label').should('have.text', "Dias Restantes para Cumprimento da CA")
        cy.get(':nth-child(4) > .col-md-4 > :nth-child(1) > .control-label').should('have.text', "Saldo devedor da CA")

        cy.get('#form_florestal > :nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text', "Legislação de Referência")
        cy.get('#form_florestal > :nth-child(1) > :nth-child(2) > .form-group > .control-label').should('have.text', "Tipo de Vegetação")
        cy.get('#form_florestal > :nth-child(1) > :nth-child(3) > .form-group > .control-label').should('have.text', "Modalidade de Pagamento")
        cy.get('#form_florestal > :nth-child(2) > :nth-child(1) > :nth-child(1) > label').should('have.text', "Quantidade de Mudas Estimadas")
        cy.get('#form_florestal > :nth-child(2) > :nth-child(2) > :nth-child(1) > label').should('have.text', "Quantidade de Mudas Definitivas")
        cy.get('#form_florestal > :nth-child(2) > :nth-child(3) > :nth-child(1) > label').should('have.text', "Valor Total da CF (R$)")
        cy.get('#form_florestal > :nth-child(3) > :nth-child(1) > :nth-child(1) > label').should('have.text', "Área Total (ha)")
        cy.get('#form_florestal > :nth-child(3) > :nth-child(2) > :nth-child(1) > label').should('have.text', "Data Limite Cumprimento da CF")
        cy.get('#form_florestal > :nth-child(3) > :nth-child(3) > :nth-child(1) > .control-label').should('have.text', "Dias Restantes Cumprimento da CF")
        cy.get(':nth-child(4) > .col-md-2 > .form-group > label').should('have.text', "Arquivada ")
        cy.get(':nth-child(4) > .col-md-10 > .form-group > .control-label').should('have.text', "Descrição Compensação Florestal")
        cy.get('#form_florestal > :nth-child(5) > .col-md-4 > .form-group > .control-label').should('have.text', "Status do Recurso Administrativo")
        cy.get(':nth-child(6) > .col-md-4 > :nth-child(1) > .control-label').should('have.text', "Saldo devedor da CF")

        cy.get('#form_auto_infracao > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .control-label').should('have.text', "Data de Recebimento do AI ")
        cy.get('#form_auto_infracao > :nth-child(1) > :nth-child(2) > .form-group > .control-label').should('have.text', "Tipo de Sanção")
        cy.get('#form_auto_infracao > :nth-child(1) > :nth-child(3) > :nth-child(1) > label').should('have.text', "Valor da Multa (R$)")
        cy.get(':nth-child(1) > :nth-child(4) > .form-group > .control-label').should('have.text', "Tipo de Atividade")
        cy.get('.col-md-12 > .form-group > .control-label').should('have.text', "Órgão DemandaDescrição do AI (motivo)")
        cy.get('#form_auto_infracao > :nth-child(3) > :nth-child(1) > .form-group > .control-label').should('have.text', "Status do AI")
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .control-label').should('have.text', "Instância Recursal")
        cy.get('.col-md-6 > .form-group > .control-label').should('have.text', "Descrição do Status do AI")
        cy.get('.box-title > b').should('have.text', "Controle dos Prazos de Defesa e dos Recursos Administrativos")
        cy.get('#form_auto_infracao > :nth-child(5) > .col-md-4 > .form-group > .control-label').should('have.text', "Períodos da Instância")
        cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .control-label').should('have.text', "Data Envio do Recurso da Instância ")
        cy.get(':nth-child(6) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .control-label').should('have.text', "Data de Ciência Decisão da Instância")
        cy.get('#form_auto_infracao > :nth-child(6) > :nth-child(3) > :nth-child(1) > label').should('have.text', "Valor da Multa Atualizada da Instância (R$)")
        cy.get(':nth-child(7) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .control-label').should('have.text', "Data Limite de Envio do Recurso da Instância")
        cy.get(':nth-child(7) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .control-label').should('have.text', "Data Limite para Pagamento da Multa")

        cy.contains('label', 'Dados da CA').invoke('text').then((text) => {expect(text.trim()).to.eq('Dados da CA');});
        cy.contains('label', 'Dados da CF').invoke('text').then((text) => {expect(text.trim()).to.eq('Dados da CF');});
        cy.contains('label', 'Dados do AI').invoke('text').then((text) => {expect(text.trim()).to.eq('Dados do AI');});
        cy.contains('label', 'Valor da CA').invoke('text').then((text) => {expect(text.trim()).to.eq('Valor da CA');});
        cy.contains('label', 'Legislação de Referência').invoke('text').then((text) => {expect(text.trim()).to.eq('Legislação de Referência');});
        cy.contains('label', 'Data de Recebimento do AI').invoke('text').then((text) => {expect(text.trim()).to.eq('Data de Recebimento do AI');});
        cy.contains('label', 'Dias Restantes da CA').invoke('text').then((text) => {expect(text.trim()).to.eq('Dias Restantes da CA');});
        cy.contains('label', 'Valor da CF').invoke('text').then((text) => {expect(text.trim()).to.eq('Valor da CF');});
        cy.contains('label', 'Tipo de Sanção').invoke('text').then((text) => {expect(text.trim()).to.eq('Tipo de Sanção');});
        cy.contains('label', 'Subtotal da CA').invoke('text').then((text) => {expect(text.trim()).to.eq('Subtotal da CA');});
        cy.contains('label', 'Dias Restantes da CF').invoke('text').then((text) => {expect(text.trim()).to.eq('Dias Restantes da CF');});
        cy.contains('label', 'Tipo Vegetação').invoke('text').then((text) => {expect(text.trim()).to.eq('Tipo Vegetação');});
        cy.contains('label', 'Mod. Pagamento').invoke('text').then((text) => {expect(text.trim()).to.eq('Mod. Pagamento');});
        cy.contains('label', 'Subtotal da Multa AI').invoke('text').then((text) => {expect(text.trim()).to.eq('Subtotal da Multa AI');});

        cy.get('.sorting_asc').should('have.text', "R.A")
        cy.get('[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]').should('have.text', "Empreendimento")
        cy.get('[aria-label="Tipo: Ordenar colunas de forma ascendente"]').should('have.text', "Tipo")
        cy.get('[aria-label="Nº: Ordenar colunas de forma ascendente"]').should('have.text', "Nº")
        cy.get('[aria-label="Ano: Ordenar colunas de forma ascendente"]').should('have.text', "Ano")
        cy.get('[aria-label="Órgão: Ordenar colunas de forma ascendente"]').should('have.text', "Órgão")
        cy.get('[aria-label="Dias Rest: Ordenar colunas de forma ascendente"]').should('have.text', "Dias Rest")
        cy.get('[aria-label="Alerta: Ordenar colunas de forma ascendente"]').should('have.text', "Alerta")
        cy.get('[aria-label="Titular: Ordenar colunas de forma ascendente"]').should('have.text', "Titular")
        cy.get('[aria-label="Ação: Ordenar colunas de forma ascendente"]').should('have.text', "Ação")


        //teste de adicionar e apagar os campos
        cy.get('#form_geral > :nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        cy.wait(4000)
        cy.get('.panel > :nth-child(2) > .col-md-4 > .btn').click()

        cy.get('#vl_valor_compensacao_ambiental_inicial').type('1000')
        cy.wait(4000)
        cy.get('.panel-body > :nth-child(2) > .col-md-4 > .btn').click()


        cy.get('#dt_recebimento_ai_inicio').type('2022-01-01')
        cy.wait(3000)
        cy.get('[onclick="limpaPesquisa()"]').click()

        //testando o campo de pesquisa
        cy.get('#form_geral > :nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        cy.get('#pesquisar').click()

        //testando o cadastro de uma nova demanda
        cy.get('.btn-success').click()

        //validando os campos de nova demanda
        cy.get('.box-title').should('have.text', "Nova Demanda")
        cy.get('div.accordion.float-style').should('contain', 'Dados Gerais');
        cy.get('div.accordion.float-style').should('contain', 'Dados Específicos da Compensação Ambiental');
        cy.get('div.accordion.float-style').should('contain', 'Dados Específicos da Compensação Florestal');
        cy.get('div.accordion.float-style').should('contain', 'Dados Específicos do Auto de Infração');
        cy.contains('div.accordion.float-style', 'Dados Específicos da Compensação Ambiental').click();
        cy.contains('div.accordion.float-style', 'Dados Específicos da Compensação Florestal').click();
        cy.contains('div.accordion.float-style', 'Dados Específicos do Auto de Infração').click();

        //validação dos campos obrigatorios
        cy.get(':nth-child(1) > .col-md-4 > .form-group > .control-label').should('have.text', "R.A")
        cy.get(':nth-child(1) > .col-md-6 > .form-group > .control-label').should('have.text', "Empreendimento")
        cy.get(':nth-child(2) > :nth-child(3) > .form-group > .control-label').should('have.text', "Ano")
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('have.text', "Tipo")
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .control-label').should('have.text', "Número")
        cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > .form-group > .control-label').should('have.text', "Órgão Demanda")
        cy.get(':nth-child(3) > :nth-child(3) > :nth-child(1) > .form-group > label').should('have.text', "Processo SEI Demanda *")
        cy.get(':nth-child(2) > :nth-child(4) > :nth-child(1) > .form-group > .control-label').should('have.text', "Data Publicação")
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .control-label').should('have.text', "Vigência em Dias")
        cy.get(':nth-child(2) > :nth-child(6) > :nth-child(1) > .form-group > label').should('have.text', "Titular *")
        cy.get(':nth-child(5) > .col-md-12 > .form-group > .control-label').should('have.text', "Descrição")
        cy.get(':nth-child(2) > :nth-child(6) > :nth-child(2) > .form-group > label').should('have.text', "Suplente *")

        //colocando dados nos campos obrigatorios
        cy.get('#select2-regiao-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})

        cy.get('#select2-cd_empreendimento-container > .select2-selection__clear').click()
        //cy.get('#select2-cd_empreendimento-container').click()
        cy.wait(2000)
        cy.get('.select2-results').find('li').contains('103 - Estagio de produção ').click({force: true})
        cy.get('#add_empreendimento').click()

        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results').find('li').contains('LP - Licença Prévia').click({force: true})

        cy.get('#nr_demanda').type('10000')

        cy.get('#aa_demanda').type(2026)

        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results').find('li').contains('ABDI - AGENCIA BRASILEIRA DE DESENVOLVIMENTO INDUSTRIAL ').click({force: true})
        cy.get('div[style="display: block;"] > :nth-child(4) > :nth-child(1) > .form-group > .control-label').type('2025-07-10')
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .control-label').type('6')
        cy.get(':nth-child(5) > .col-md-12 > .form-group > .control-label').type('teste123')
        cy.get('#cd_orgao_processo_sei').type('111111')
        cy.get('#nr_processo_sei').type('11111111')
        cy.get('#aa_processo_sei').type('2025')

        cy.get('#submit').click()
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.modal-footer > .btn-danger').click()

        //validação dos campos na tela de visualizar
        cy.get('h1').should('have.text', "Demanda")
        cy.get(':nth-child(1) > .col-md-12 > .accordion > b').should('have.text', "Informações dos Empreendimentos")
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .col-md-12 > .accordion > b').should('have.text', "Dados Gerais")
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(3) > .col-md-12 > .accordion > b').should('have.text', "Informações do Documento")
        cy.get('.panel-body > :nth-child(2) > .col-md-12 > .accordion > b').should('have.text', "Dados Específicos da Compensação Ambiental")
        cy.get('.panel-body > :nth-child(3) > .col-md-12 > .accordion > b').should('have.text', "Dados Específicos da Compensação Florestal")
        cy.get(':nth-child(4) > .col-md-12 > .accordion > b').should('have.text', "Dados Específicos do Auto de Infração")

        cy.get('#ep_plus').click()
        cy.get('#id_plus').click()
        cy.get('#ca_plus').click()
        cy.get('#cf_plus').click()
        cy.get('#ai_plus').click()

        cy.get(':nth-child(1) > [whidth="350px"] > b').should('have.text', "Tipo")
        cy.get(':nth-child(2) > [whidth="350px"] > b').should('have.text', "Número")
        cy.get(':nth-child(3) > [whidth="350px"] > b').should('have.text', "Ano")
        cy.get(':nth-child(4) > [whidth="350px"] > b').should('have.text', "Órgão")
        cy.get(':nth-child(5) > [whidth="350px"] > b').should('have.text', "Nº SEI Doc Demanda")
        cy.get(':nth-child(6) > [whidth="350px"] > b').should('have.text', "Processo")
        cy.get(':nth-child(7) > [whidth="350px"] > b').should('have.text', "Data Publicação")
        cy.get(':nth-child(8) > [whidth="350px"] > b').should('have.text', "Vigência em Dias")
        cy.get(':nth-child(9) > [whidth="350px"] > b').should('have.text', "Dias Restantes")
        cy.get(':nth-child(10) > [whidth="350px"] > b').should('have.text', "Status")
        cy.get(':nth-child(11) > [whidth="350px"] > b').should('have.text', "Alerta de Prazo")
        cy.get(':nth-child(12) > [whidth="350px"] > b').should('have.text', "Titular")
        cy.get(':nth-child(13) > [whidth="350px"] > b').should('have.text', "Suplente")
        cy.get(':nth-child(14) > [whidth="350px"] > b').should('have.text', "Arquivada/Suspensa/Cancelada")
        cy.get(':nth-child(15) > [whidth="350px"] > b').should('have.text', "Data de Vencimento")
        cy.get(':nth-child(16) > [whidth="350px"] > b').should('have.text', "Estudo/Serviços Relacionados")
        cy.get(':nth-child(17) > [whidth="350px"] > b').should('have.text', "Observação (Processos)")
        cy.get(':nth-child(18) > [whidth="350px"] > b').should('have.text', "Descrição")
        cy.get('.panel-border > .table > tbody > :nth-child(1) > :nth-child(1) > b').should('have.text', "RA")
        cy.get('.panel-border > .table > tbody > :nth-child(2) > :nth-child(1) > b').should('have.text', "Empreendimento")

        //testes de outras abas dentro de visualizar demanda

        cy.get('.documentos-aba').click
        cy.wait(3000)

        cy.get('.exigencias-aba').click()
        cy.wait(3000)

        cy.get('.requerimentos-aba').click()
        cy.wait(3000)

        cy.get('.novo-estudo-aba').click()
        cy.wait(3000)

        cy.get('.demanda-aba').click()

        //teste na tela de edição

        cy.get('.col-md-12 > :nth-child(1) > a.btn').click()
        cy.wait(4000)
        cy.get('#dt_publicacao').clear().type('2025-01-01')
        cy.get('#qt_dias_vigencia').clear().type('9')
        cy.get('#ds_demanda').clear().type('teste2.0')
        cy.get('#submit').click()
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.modal-footer > .btn').should('be.visible').and('contain.text', 'OK').click();

        //validação da pesquisa
        cy.get(':nth-child(3) > [href="#"]').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
        cy.get('#dt_publicacao_inicio').type('2025-01-01')
        cy.get('#pesquisar').click()
        cy.get('a[title="Visualizar"]').first().click()

        cy.get('[onclick="window.history.back()"]').click()
        cy.get(':nth-child(3) > [href="#"]').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
        cy.get('#dt_publicacao_inicio').type('2025-01-01')
        cy.get('#pesquisar').click()
        cy.get('#gerarRelatorioDemandaPDF').click()


        //validação do botão excluir
        cy.get('a[title="Visualizar"]').first().click()
        cy.wait(10000)
        cy.get('#btn-delete-demanda').click()
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    })




});
