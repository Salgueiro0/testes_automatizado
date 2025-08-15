/// <reference types="cypress" />

describe('pendência', () => {
    beforeEach(() => {
        cy.visit('http://gla-homol.terracapnet.local')
        cy.viewport(1980, 1200)
       
          
    })
    it('teste Associação-consultar', () => {
        //abrindo a aba de estudos
        cy.get(':nth-child(2) > .form-control').type('C9020840')
        cy.get(':nth-child(3) > .form-control').type('welcome_1')
        cy.get('.btn').click()
        cy.get('h1').should('have.text', "Pendência")
        cy.get(':nth-child(4) > a > span').click()

        //validação dos campos na tela de estudos
        cy.get('h1').should('have.text', "Estudo / Serviço")
        cy.get('#form_filtro_geral > :nth-child(1) > :nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
        cy.get('#form_filtro_geral > :nth-child(1) > :nth-child(2) > .form-group > .control-label').should('have.text', "Empreendimento")
        cy.get('#form_filtro_geral > :nth-child(1) > :nth-child(3) > .form-group > .control-label').should('have.text', "Demanda")
        cy.get('#form_filtro_geral > :nth-child(2) > :nth-child(1) > .form-group > label').should('have.text', "Lista de Pendências")
        cy.get('#form_filtro_geral > :nth-child(2) > :nth-child(2) > .form-group > label').should('have.text', "Tipo")
        cy.get('#form_filtro_geral > :nth-child(2) > :nth-child(3) > .form-group > label').should('have.text', "Natureza")
        cy.get('#form_filtro_geral > :nth-child(2) > :nth-child(4) > .form-group > label').should('have.text', "Objeto")
        cy.get('#form_filtro_geral > :nth-child(3) > .col-md-12 > .form-group > .control-label').should('have.text', "Descrição do Objeto do Estudo/Serviço")
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > label').should('have.text', "Status")
        cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > label').should('have.text', "Previsão de Conclusão do Estudo")
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > label').should('have.text', "Valor Estimado - (R$)")
        cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1) > label').should('have.text', "Data Elaboração")
        cy.get(':nth-child(6) > :nth-child(1) > .form-group > label').should('have.text', "Titular ")
        cy.get(':nth-child(6) > :nth-child(2) > .form-group > label').should('have.text', "Suplente ")
        cy.get(':nth-child(2) > .box-header > .box-title').should('have.text', "Dados do Contrato")
        cy.get('#form_filtro_contrato > :nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text', "Número do Contrato")
        cy.get('#form_filtro_contrato > :nth-child(1) > :nth-child(2) > .form-group > .control-label').should('have.text', "Ano do Contrato")
        cy.get('#form_filtro_contrato > :nth-child(1) > :nth-child(3) > .form-group > .control-label').should('have.text', "Contratada")
        cy.get('#form_filtro_contrato > :nth-child(2) > :nth-child(1) > :nth-child(1) > label').should('have.text', "Valor do Contrato (inicial) - (R$)")
        cy.get('#form_filtro_contrato > :nth-child(2) > :nth-child(2) > :nth-child(1) > label').should('have.text', "Valor do Contrato (final) - (R$)")
        cy.get('#form_filtro_contrato > :nth-child(2) > :nth-child(3) > :nth-child(1) > label').should('have.text', "Início da Vigência do Contrato")
        cy.get('#form_filtro_contrato > :nth-child(2) > :nth-child(4) > :nth-child(1) > label').should('have.text', "Fim da Vigência do Contrato")
        cy.get('#form_filtro_contrato > :nth-child(3) > .col-md-12 > .form-group > .control-label').should('have.text', "Descrição do Objeto do Contrato")
        cy.get(':nth-child(3) > .box-header > .box-title').should('have.text', "Dados da Ordem de Serviço da Empresa")
        cy.get(':nth-child(3) > .box-body > .panel > #panel-body > #form_filtro_ordem_servico > .row > :nth-child(1) > .form-group > .control-label').should('have.text', "Número da OS")
        cy.get(':nth-child(3) > .box-body > .panel > #panel-body > #form_filtro_ordem_servico > .row > :nth-child(2) > .form-group > .control-label').should('have.text', "Ano da OS")
        cy.get(':nth-child(3) > .box-body > .panel > #panel-body > #form_filtro_ordem_servico > .row > .col-md-6 > .form-group > .control-label').should('have.text', "Unidade Responsável pela OS")
        cy.get('.sorting_asc').should('have.text', "Empreendimento")
        cy.get('[aria-label="Referência: Ordenar colunas de forma ascendente"]').should('have.text', "Referência")
        cy.get('[aria-label="Objeto: Ordenar colunas de forma ascendente"]').should('have.text', "Objeto")
        cy.get('[aria-label="Status: Ordenar colunas de forma ascendente"]').should('have.text', "Status")
        cy.get('[aria-label="Contrato | OS: Ordenar colunas de forma ascendente"]').should('have.text', "Contrato | OS")
        cy.get('[aria-label="Ação: Ordenar colunas de forma ascendente"]').should('have.text', "Ação")

        //teste do botão limpar
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA').click({force: true})

        cy.wait(3000)
        cy.get('[onclick="limparFormularioPesquisa()"]').click()

        //validação de campos na tela de novo cadastro
        cy.get('.btn-success').click()
        cy.get('.box-title').should('have.text', "Novo Cadastro")
        cy.get("[onclick=\"toggleFormAccordion('rf')\"] > b").should('have.text', "Referências")
        cy.get('#form_estudo_servico > :nth-child(2) > :nth-child(7) > :nth-child(1)').should('have.text', "Incluir Requerimento")
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
        cy.get('#form_requerimento > :nth-child(3) > .form-group > .control-label').should('have.text', "Empreendimento")
        cy.get('#form_requerimento > :nth-child(4) > .form-group > .control-label').should('have.text', "Tipo Requerimento")
        cy.get('#form_requerimento > :nth-child(5) > .form-group > label').should('have.text', "Requerimentos *")
        cy.get('#form_requerimento > :nth-child(7) > :nth-child(1)').should('have.text', "Requerimentos Referenciados")
        cy.get('#tabela-estudo-requerimento > thead > tr > .sorting_desc').should('have.text', "Requerimento")
        cy.get(':nth-child(7) > :nth-child(4)').should('have.text', "Incluir Exigência")
        cy.get('#form_exigencia > :nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
        cy.get('#form_exigencia > :nth-child(2) > .form-group > .control-label').should('have.text', "Empreendimento")
        cy.get('#form_exigencia > :nth-child(3) > .form-group > .control-label').should('have.text', "Demanda")
        cy.get('#form_exigencia > :nth-child(4) > .form-group > label').should('have.text', "Exigências *")
        cy.get('#form_exigencia > :nth-child(6) > :nth-child(1)').should('have.text', "Exigências Referenciadas")
        cy.get('#tabela-estudo-exigencia > thead > tr > .sorting_desc').should('have.text', "N°")
        cy.get('#tabela-estudo-exigencia > thead > tr > .sorting').should('have.text', "Descrição")
        cy.get('#tabela-estudo-exigencia > thead > tr > .text-center').should('have.text', "Ação")
        cy.get("[onclick=\"toggleFormAccordion('gr')\"] > b").should('have.text', "Dados Gerais")
        cy.get('#form_dados_gerais > :nth-child(1) > .form-group > label').should('have.text', "Tipo*")
        cy.get('#form_dados_gerais > :nth-child(2) > .form-group > .control-label').should('have.text', "Natureza")
        cy.get(':nth-child(3) > .control-label').should('have.text', "Objeto")
        cy.get('#form_dados_gerais > :nth-child(4) > .form-group > .control-label').should('have.text', "Descrição do Objeto do Estudo/Serviço")
        cy.get('#form_dados_gerais > :nth-child(5) > .form-group > .control-label').should('have.text', "Área da Poligonal de Estudo")
        cy.get('#form_dados_gerais > :nth-child(6) > .form-group > .control-label').should('have.text', "Status")
        cy.get('#form_dados_gerais > :nth-child(7) > .form-group > .control-label').should('have.text', "Descrição do Status")
        cy.get('#form_dados_gerais > :nth-child(8) > .form-group > .control-label').should('have.text', "Órgão Externo avaliador")
        cy.get('#form_dados_gerais > :nth-child(9) > .form-group > .control-label').should('have.text', "Valor Estimado")
        cy.get('#form_dados_gerais > :nth-child(10) > .form-group > label').should('have.text', "Processo SEI de Acompanhamento / Contratação")
        cy.get(':nth-child(11) > .form-group > .control-label').should('have.text', "Titular")
        cy.get(':nth-child(12) > .form-group > .control-label').should('have.text', "Suplente")
        cy.get(':nth-child(13) > .form-group > .control-label').should('have.text', "Caminho no Depart")
        cy.get(':nth-child(14) > .control-label').should('have.text', "Data de Elaboração")
        cy.get(':nth-child(15) > .control-label').should('have.text', "Previsão de Conclusão do Estudo")
        cy.get("[onclick=\"toggleFormAccordion('ct')\"] > b").should('have.text', "Dados do Contrato")
        cy.get('#ct_plus').click()
        cy.get('#form_contrato_gec > :nth-child(2) > .form-group > .control-label').should('have.text', "Numero do Contrato")
        cy.get('#form_contrato_gec > :nth-child(3) > .form-group > .control-label').should('have.text', "Ano do Contrato")
        cy.get('#form_contrato_gec > :nth-child(5) > .form-group > .control-label').should('have.text', "Contratada")
        cy.get('#form_contrato_gec > :nth-child(6) > .form-group > .control-label').should('have.text', "Valor do Contrato (inicial)")
        cy.get('#form_contrato_gec > :nth-child(7) > .form-group > .control-label').should('have.text', "Valor do Contrato (reajustado)")
        cy.get('#form_contrato_gec > :nth-child(8) > .form-group > .control-label').should('have.text', "Início da Vigência do Contrato")
        cy.get('#form_contrato_gec > :nth-child(9) > .form-group > .control-label').should('have.text', "Fim da Vigência do Contrato")
        cy.get(':nth-child(10) > .form-group > .control-label').should('have.text', "Descrição do Objeto do Contrato")
        cy.get("[onclick=\"toggleFormAccordion('os')\"] > b").should('have.text', "Dados da Ordem de Serviço da Empresa")
        cy.get('#os_plus').click()

        //validação de novo cadastro
        cy.get('#select2-cd_regiao_admin_req-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA').click({force: true})
        cy.get('#select2-cd_empreendimento_req-container > .select2-selection__clear').click()
        cy.wait(3000)
        cy.get('.select2-results').find('li').contains('12 - Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({force: true})
        cy.get('#select2-tp_requerimento-container').click()
        cy.get('.select2-results').find('li').contains('Nova Permissão').click({force: true})
        cy.get('#select2-cd_requerimento-container > .select2-selection__clear').click()
        cy.get('.select2-results').find('li').contains('88 - LP - Licença Prévia - Ofício nº 6/1565 - ACJUR p/ ADASA').click({force: true})
        cy.get('#btnAdicionar_requerimento').click()
        cy.get('#select2-cd_regiao_admin_exi-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA').click({force: true})
        cy.get('#select2-cd_empreendimento_exi-container > .select2-selection__clear').click()
        cy.get('.select2-results').find('li').contains('12 - Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({force: true})
        cy.get('#select2-cd_demanda-container > .select2-selection__clear').click()
        cy.get('.select2-results').find('li').contains('LP nº 737/1998').click({force: true})
        cy.get('#select2-cd_exigencia-container > .select2-selection__clear').click()
        cy.get('.select2-results').find('li').contains('82|1|----------------- ÇÇÇ Â ÂÂ').click({force: true})
        cy.get('#btnAdicionar_exigencia').click()
        cy.get('#select2-tp_estudo-container').click()
        cy.get('.select2-results').find('li').contains('Obra/Serviço').click({force: true})
        cy.get('#select2-tp_natureza-container').click()
        cy.get('.select2-results').find('li').contains('Licitação').click({force: true})
        cy.get('#select2-tp_objeto-container').click()
        cy.get('.select2-results').find('li').contains('Paisagismo').click({force: true})
        cy.get('#select2-tp_status-container').click()
        cy.get('.select2-results').find('li').contains('A licitar').click({force: true})
        cy.get('#select2-cd_pessoa_titular-container').click()
        cy.get('.select2-results').find('li').contains('PAULO CESAR COSTA').click({force: true})
        cy.get('#select2-cd_pessoa_suplente-container').click()
        cy.get('.select2-results').find('li').contains('LUCAS DIAS DE LIMA').click({force: true})
        cy.get('#btnSalvar').click()
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.modal-footer > .btn-danger').click()
        
        //validação do botão voltar
        cy.get('[onclick="window.history.back()"]').click()
        cy.get('[onclick="window.history.back()"]').click()

        //validação de salvamento
        cy.get(':nth-child(6) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('PAULO CESAR COSTA').click({force: true})
        cy.get(':nth-child(6) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('LUCAS DIAS DE LIMA').click({force: true})
        cy.get('#pesquisar').click()
        

        //validação da tela de edição
        cy.get('a[title="Editar"]').first().click()
        cy.get('.box-title').should('have.text', "Editar")
        cy.wait(4000)
        cy.get('#select2-cd_pessoa_titular-container > .select2-selection__clear').click()
        cy.wait(4000)
        cy.get('.select2-results').find('li').contains('NELSON ALVES LOUZEIRO JUNIOR').click({force: true})
        cy.get('#select2-cd_pessoa_suplente-container > .select2-selection__clear').click()
        cy.get('.select2-results').find('li').contains('PEDRO RAFAEL MANDAI').click({force: true})
        cy.get('#btnSalvar').click()
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.modal-footer > .btn-danger').click()
        cy.wait(6000)

        //validação de salvamento
        cy.get(':nth-child(4) > a > span').click()
        cy.get(':nth-child(6) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('NELSON ALVES LOUZEIRO JUNIOR').click({force: true})
        cy.get(':nth-child(6) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('PEDRO RAFAEL MANDAI').click({force: true})
        cy.get('#pesquisar').click()


        //validando o botão de excluir
        cy.get('a[title="Excluir"]').first().click()
        cy.get('.modal-footer > .btn').should('be.visible').and('contain.text', 'OK').click();







   })
    


    
})